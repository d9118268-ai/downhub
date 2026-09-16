"use client";

import { useState } from "react";
import {
  siYoutube,
  siTiktok,
  siInstagram,
  siFacebook,
  siSnapchat,
} from "simple-icons";
const platforms = [
  {
    name: "YouTube",
    description: "Download videos from YouTube",
    color: "from-red-500 to-red-600",
    icon: siYoutube,
  },
  {
    name: "TikTok",
    description: "Download TikTok videos",
    color: "from-black to-gray-700",
    icon: siTiktok,
  },
  {
    name: "Instagram",
    description: "Download Instagram videos",
    color: "from-pink-500 to-purple-600",
    icon: siInstagram,
  },
  {
    name: "Facebook",
    description: "Download Facebook videos",
    color: "from-blue-500 to-blue-700",
    icon: siFacebook,
  },
  {
    name: "Snapchat",
    description: "Download Snapchat videos",
    color: "from-yellow-400 to-yellow-500",
    icon: siSnapchat,
  },
];

export default function Home() {
  const [url, setUrl] = useState("");
const [error, setError] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            Down<span className="text-blue-500">Hub</span>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#download" className="transition hover:text-white">
              Downloader
            </a>
            <a href="#platforms" className="transition hover:text-white">
              Platforms
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>

          <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium transition hover:bg-white/10">
            Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="download"
        className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center"
      >
        <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Free Online Video Downloader
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Download Videos
          <span className="block text-blue-500">From Your Favorite Platforms</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Download online videos from supported social media platforms using
          one simple and fast video downloader.
        </p>

        {/* URL Downloader */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste video URL here..."
              className="min-w-0 flex-1 rounded-xl bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
            />

<button
  disabled={!url.trim()}
  onClick={() => {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setError("Please paste a video URL.");
      return;
    }

    let parsedUrl: URL;

    try {
      parsedUrl = new URL(trimmedUrl);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      setError("Please enter a valid HTTP or HTTPS URL.");
      return;
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    const supportedPlatforms = [
      "youtube.com",
      "youtu.be",
      "tiktok.com",
      "instagram.com",
      "facebook.com",
      "fb.watch",
      "snapchat.com",
    ];

    const isSupportedPlatform = supportedPlatforms.some(
      (platform) =>
        hostname === platform || hostname.endsWith(`.${platform}`)
    );

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

    const isDirectMedia = mediaExtensions.some((extension) =>
      parsedUrl.pathname.toLowerCase().endsWith(extension)
    );

    if (!isSupportedPlatform && !isDirectMedia) {
      setError(
        "Unsupported URL. Use a supported platform URL or a direct media URL."
      );
      return;
    }

    setError("");

    window.location.href = `/api/download?url=${encodeURIComponent(
      trimmedUrl
    )}`;
  }}
  className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
>
  Download
</button>
          </div>

      {error && (
  <p className="mt-4 text-sm text-red-400">
    {error}
  </p>
)}
        </div>



        <p className="mt-4 text-xs text-slate-500">
          Only download content you own or have permission to download.
        </p>
      </section>

      {/* Platforms */}
      <section id="platforms" className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Social Media Video Downloader
            </h2>

            <p className="mt-3 text-slate-400">
              One place for your supported video downloads.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((platform) => (
<a
  key={platform.name}
  href={
    platform.name === "YouTube"
      ? "/youtube-video-downloader"
      : platform.name === "TikTok"
      ? "/tiktok-video-downloader"
      : platform.name === "Instagram"
      ? "/instagram-video-downloader"
      : platform.name === "Facebook"
      ? "/facebook-video-downloader"
      : "/snapchat-video-downloader"
  }
  className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
>
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${platform.color} font-bold`}
                >
                  <svg
  viewBox="0 0 24 24"
  className="h-7 w-7 fill-current"
  aria-hidden="true"
>
  <path d={platform.icon.path} />
</svg>
                </div>

                <h3 className="font-semibold">{platform.name} Downloader</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Free Online Video Downloader
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-400">
          <p>
            DownHub is an online video downloader designed to make saving
            supported online media simple. Paste a supported video URL into
            the downloader and use the available download options.
          </p>

          <p>
            Our platform is designed for users looking for an easy social media
            video downloader without installing complicated desktop software.
          </p>

          <p>
            DownHub supports dedicated pages for YouTube, TikTok, Instagram,
            Facebook and Snapchat-related downloading features where permitted.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                What is DownHub?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                DownHub is an online tool designed to provide supported media
                downloading features from one convenient website.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Is DownHub free?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                The basic website and its available features can be offered
                free of charge.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                What platforms does DownHub support?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                DownHub is being built with dedicated support for supported
                platforms including YouTube, TikTok, Instagram, Facebook and
                Snapchat.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Can I download any video?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                Only download content that you own or have permission to
                download, and follow the applicable platform terms.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>
          Developed By : David Ayomide copyright 2026
        </p>
      </footer>
    </main>
  );
}