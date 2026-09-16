import { NextRequest, NextResponse } from "next/server";

const supportedPlatforms = [
  {
    name: "YouTube",
    domains: ["youtube.com", "youtu.be"],
  },
  {
    name: "TikTok",
    domains: ["tiktok.com"],
  },
  {
    name: "Instagram",
    domains: ["instagram.com"],
  },
  {
    name: "Facebook",
    domains: ["facebook.com", "fb.watch"],
  },
  {
    name: "Snapchat",
    domains: ["snapchat.com"],
  },
];

const mediaExtensions = [
  ".mp4",
  ".webm",
  ".mov",
  ".avi",
  ".mkv",
  ".mp3",
  ".wav",
  ".ogg",
  ".m4a",
];

const extensionMap: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
  "video/x-msvideo": "avi",
  "audio/mpeg": "mp3",
  "audio/wav": "wav",
  "audio/ogg": "ogg",
  "audio/mp4": "m4a",
};

function getPlatform(hostname: string) {
  return supportedPlatforms.find((platform) =>
    platform.domains.some(
      (domain) =>
        hostname === domain || hostname.endsWith(`.${domain}`)
    )
  );
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing media URL" },
      { status: 400 }
    );
  }

  let mediaUrl: URL;

  try {
    mediaUrl = new URL(url);
  } catch {
    return NextResponse.json(
      { error: "Invalid URL" },
      { status: 400 }
    );
  }

  // Only allow HTTP and HTTPS URLs.
  if (!["http:", "https:"].includes(mediaUrl.protocol)) {
    return NextResponse.json(
      { error: "Unsupported URL protocol" },
      { status: 400 }
    );
  }

  const hostname = mediaUrl.hostname.toLowerCase();

  // Detect supported social platforms.
  const platform = getPlatform(hostname);

  if (platform) {
    return NextResponse.json({
      success: true,
      type: "platform",
      platform: platform.name,
      url: mediaUrl.toString(),
      message: `${platform.name} URL detected. Platform media processing is not enabled yet.`,
    });
  }

  // Detect direct media URLs.
  const pathname = mediaUrl.pathname.toLowerCase();

  const isDirectMedia = mediaExtensions.some((extension) =>
    pathname.endsWith(extension)
  );

  if (!isDirectMedia) {
    return NextResponse.json(
      {
        error:
          "Unsupported URL. Use a supported platform URL or a direct media URL.",
      },
      { status: 400 }
    );
  }

  // Download the direct media URL.
  try {
    const response = await fetch(mediaUrl.toString());

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to retrieve the media" },
        { status: 502 }
      );
    }

    const contentType =
      response.headers.get("content-type") ||
      "application/octet-stream";

    if (
      !contentType.startsWith("video/") &&
      !contentType.startsWith("audio/")
    ) {
      return NextResponse.json(
        {
          error:
            "The URL does not point directly to supported media.",
        },
        { status: 400 }
      );
    }

    const buffer = await response.arrayBuffer();

    const mediaType = contentType.split(";")[0].trim();

    const extension = extensionMap[mediaType] || "bin";

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="downhub-media.${extension}"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}