import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Video Downloader Online",
  description:
    "Use DownHub's Instagram video downloader for supported content you own or have permission to download.",
  keywords: [
    "instagram video downloader",
    "instagram downloader",
    "Instagram video download",
    "online instagram downloader",
    "download instagram videos",
  ],
};

export default function InstagramDownloader() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold">
            Down<span className="text-blue-500">Hub</span>
          </a>
          <a href="/" className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 hover:bg-white/10">
            Home
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center">
        <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Instagram Video Downloader
        </div>

        <h1 className="text-4xl font-bold sm:text-6xl">
          Instagram Video Downloader
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Use DownHub to access supported Instagram video downloading features
          online. Paste a supported Instagram URL to get started.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              placeholder="Paste Instagram video URL..."
              className="min-w-0 flex-1 rounded-xl bg-slate-900 px-5 py-4 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
            />
            <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-500">
              Download
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Online Instagram Video Downloader
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-400">
            <p>
              DownHub provides a simple interface for supported Instagram download
              downloading. The service is designed to work across desktop and
              mobile browsers.
            </p>
            <p>
              Copy a supported Instagram video URL, paste it into the downloader,
              and use the available options when the content is authorized for
              downloading.
            </p>
            <p>
              Always respect the rights of the content creator and the
              applicable Instagram terms before downloading content.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold">How to use the Instagram downloader</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            ["01", "Copy the URL", "Copy the URL of a supported Instagram video."],
            ["02", "Paste it", "Paste the URL into the DownHub input box."],
            ["03", "Download", "Use an available download option when supported."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="text-2xl font-bold text-blue-500">{number}</div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold">Instagram Video Downloader FAQ</h2>

          <div className="mt-8 space-y-4">
            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                What is a Instagram video downloader?
              </summary>
              <p className="mt-3 text-slate-400">
                It is an online service designed to provide downloading
                functionality for supported instagram content.
              </p>
            </details>

            <details className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <summary className="cursor-pointer font-semibold">
                Is DownHub free?
              </summary>
              <p className="mt-3 text-slate-400">
                The basic DownHub website can be provided free of charge.
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