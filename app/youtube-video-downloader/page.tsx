import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Video Downloader Online",
  description:
    "Use DownHub's online YouTube video downloader for supported videos you own or have permission to download. Simple, fast and easy to use.",
  keywords: [
    "YouTube video downloader",
    "YouTube downloader",
    "online YouTube downloader",
    "YouTube video download",
    "download YouTube videos",
    "free YouTube downloader",
  ],
};

export default function YouTubeDownloader() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold">
            Down<span className="text-blue-500">Hub</span>
          </a>

          <a
            href="/"
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:bg-white/10"
          >
            Home
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center">
        <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
          YouTube Video Downloader
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          YouTube Video Downloader
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Download supported YouTube videos online with DownHub. Paste a
          YouTube video URL and use the available download options for content
          you own or have permission to download.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              placeholder="Paste YouTube video URL..."
              className="min-w-0 flex-1 rounded-xl bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
            />

            <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500">
              Download
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Online YouTube Video Downloader
          </h2>

          <div className="mt-6 space-y-6 leading-8 text-slate-400">
            <p>
              DownHub provides a simple online interface for supported
              YouTube video downloading. Instead of installing desktop
              software, users can paste a supported video URL directly into
              the downloader.
            </p>

            <p>
              The goal of our YouTube downloader is to make the process
              straightforward, fast and easy to understand on both desktop
              and mobile devices.
            </p>

            <p>
              Before downloading any content, make sure you have the necessary
              rights or permission and follow YouTube's applicable terms.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          How to use the YouTube downloader
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">01</div>
            <h3 className="mt-4 font-semibold">Copy the URL</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Copy the URL of a supported YouTube video.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">02</div>
            <h3 className="mt-4 font-semibold">Paste the URL</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Paste the video URL into the DownHub downloader.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">03</div>
            <h3 className="mt-4 font-semibold">Choose an option</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Select an available download option when supported.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            YouTube Downloader FAQ
          </h2>

          <div className="mt-8 space-y-4">
            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                What is a YouTube video downloader?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                A YouTube video downloader is an online tool designed to
                provide downloading functionality for supported YouTube
                content.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Is DownHub free?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                DownHub's basic website can be offered as a free service.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Can I download any YouTube video?
              </summary>
              <p className="mt-3 leading-7 text-slate-400">
                Only download content that you own or have permission to
                download, and follow the applicable platform terms.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        Developed By : David Ayomide copyright 2026
      </footer>
    </main>
  );
}