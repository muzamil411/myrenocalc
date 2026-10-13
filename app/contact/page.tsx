import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact MyRenoCalc — report a wrong number, suggest a calculator, or ask about our methodology.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy-900">Contact</h1>
      <div className="article mt-6">
        <p>
          The most useful messages we get: a wrong number on a calculator, a missing source, or
          a project type you wish we covered. We read everything and fix verified errors.
        </p>
        <p>
          We aim to reply within a few business days. For anything urgent on an active project,
          please rely on your contractor or supplier rather than waiting for us.
        </p>
      </div>

      <form
        action="mailto:hello@myrenocalc.com?subject=MyRenoCalc%20contact"
        method="post"
        encType="text/plain"
        className="mt-8 space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-navy-800"
        >
          Send message
        </button>
        <p className="text-xs text-slate-500">
          Submitting opens your email app addressed to hello@myrenocalc.com. We do not store
          form submissions on our servers.
        </p>
      </form>
    </div>
  )
}
