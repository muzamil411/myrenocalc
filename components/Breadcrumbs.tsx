import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
export default function Breadcrumbs({
  title,
  path,
  category,
}: {
  title: string;
  path: string;
  category?: string;
}) {
  const items = [
    { name: "Home", path: "/" },
    ...(category
      ? [
          {
            name: category,
            path: path.startsWith("/tools/") ? "/#calculators" : "/#guides",
          },
        ]
      : []),
    { name: title, path },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: SITE_URL + item.path,
            })),
          }),
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, i) => (
            <li key={i}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
