import { NextRequest, NextResponse } from "next/server";

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

  // Only allow HTTP/HTTPS URLs.
  if (!["http:", "https:"].includes(mediaUrl.protocol)) {
    return NextResponse.json(
      { error: "Unsupported URL protocol" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(mediaUrl.toString());

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to retrieve the media" },
        { status: 502 }
      );
    }

    const contentType =
      response.headers.get("content-type") || "application/octet-stream";

    if (!contentType.startsWith("video/") && !contentType.startsWith("audio/")) {
      return NextResponse.json(
        { error: "The URL does not point directly to supported media" },
        { status: 400 }
      );
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": 'attachment; filename="downhub-media"',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}