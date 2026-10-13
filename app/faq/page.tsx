import Faq from "@/components/Faq";
import PageShell from "@/components/PageShell";
import { homeFaqs } from "@/lib/home-faq";
import { buildMetadata, jsonLdFaq } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common paint planning questions about gallons, coverage, primer, coats, and rounding, with the math and sources explained.",
  path: "/faq/",
});
export default function FaqPage() {
  return (
    <PageShell title={"Frequently asked questions"} path="/faq/">
      <p className="eyebrow">Project planning</p>
      <h1>Frequently asked questions</h1>
      <p className="section-subtitle">
        Answers from our interior paint calculator. Each tool and guide also has
        questions specific to that project.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq(homeFaqs)),
        }}
      />
      <div className="mt-8">
        <Faq items={homeFaqs} />
      </div>
    </PageShell>
  );
}
