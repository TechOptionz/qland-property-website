import Image from "next/image";
import type { Metadata } from "next";

import { reviews, reviewsGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Reviews | QLAND Property",
  description:
    "What Brisbane buyers, builders and landlords say about working with QLAND Property.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Reviews</p>
          <h1 className="display h1" style={{ maxWidth: "20ch" }}>
            4.9 out of 5, across 37 Google reviews
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            Every review below is published on our Google Business Profile.
            Nothing here is edited.
          </p>
          <a
            href="https://www.google.com/search?q=QLAND+Property+Brisbane"
            target="_blank"
            rel="noopener"
            className="link-rule"
            style={{ marginTop: 26 }}
          >
            Leave a review →
          </a>
        </div>
      </section>

      <section className="section-flush-top" data-reveal>
        <div
          className="shell hairline-grid"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          {reviews.map((review) => (
            <article
              key={review.attribution}
              className="hairline-cell"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p
                aria-label="Rated 5 out of 5"
                style={{
                  margin: 0,
                  color: "var(--brass)",
                  fontSize: 15,
                  letterSpacing: ".14em",
                }}
              >
                ★★★★★
              </p>
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 16,
                  lineHeight: 1.72,
                  color: "var(--body)",
                }}
              >
                {review.body}
              </p>
              <footer
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  fontSize: 14,
                  color: "var(--muted-soft)",
                }}
              >
                {review.attribution}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section-flush-top">
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 8,
          }}
        >
          {reviewsGallery.map((item) => (
            <div
              key={item.alt}
              className="media"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 920px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
