import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snapchat Video Downloader Online",
  description:
    "Use DownHub's Snapchat video downloader for supported content you own or have permission to download.",
  keywords: [
    "Snapchat video downloader",
    "Snapchat downloader",
    "Snapchat video download",
    "online Snapchat downloader",
    "download Snapchat videos",
  ],
};

export default function SnapchatDownloader() {
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
        <div className="mb-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
          Snapchat Video Downloader
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Snapchat Video Downloader
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Use DownHub to access supported Snapchat video downloading features
          online. Paste a supported Snapchat URL to get started.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              placeholder="Paste Snapchat video URL..."
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
            Online Snapchat Video Downloader
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-400">
            <p>
              DownHub provides a simple online interface for supported
              Snapchat video downloading. The service is designed to work
              across modern desktop and mobile browsers.
            </p>

            <p>
              Copy a supported Snapchat video URL, paste it into the DownHub
              downloader, and use an available download option when the content
              is authorized for downloading.
            </p>

            <p>
              Always respect the rights of content creators and follow the
              applicable Snapchat terms before downloading content.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          How to use the Snapchat downloader
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">01</div>
            <h3 className="mt-4 font-semibold">Copy the URL</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Copy the URL of a supported Snapchat video.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">02</div>
            <h3 className="mt-4 font-semibold">Paste the URL</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Paste the URL into the DownHub downloader.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="text-2xl font-bold text-blue-500">03</div>
            <h3 className="mt-4 font-semibold">Download</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use an available download option when supported.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Snapchat Downloader FAQ
          </h2>

          <div className="mt-8 space-y-4">
            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                What is a Snapchat video downloader?
              </summary>

              <p className="mt-3 leading-7 text-slate-400">
                A Snapchat video downloader is an online tool designed to
                provide downloading functionality for supported Snapchat
                content.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Is DownHub free?
              </summary>

              <p className="mt-3 leading-7 text-slate-400">
                The basic DownHub website can be offered free of charge.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Can I download any Snapchat video?
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