import Link from "next/link";
import type { Metadata } from "next";

import { comparisonRows, pillars } from "@/lib/content";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Difference | QLAND Property",
  description:
    "QLAND turnkey build vs a volume project builder vs buying established — an honest comparison of cost, time and risk.",
  alternates: { canonical: "/our-difference" },
};

export default function OurDifferencePage() {
  return (
    <main>
      <section
        style={{
          padding:
            "clamp(72px,9vw,140px) var(--gutter) clamp(40px,5vw,70px)",
        }}
      >
        <div className="shell">
          <p className="eyebrow">Our difference</p>
          <h1 className="display h1" style={{ maxWidth: "22ch" }}>
            Three ways to get a home. Here&rsquo;s the honest comparison.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            We build turnkey, but that isn&rsquo;t the right answer for everyone.
            This is what each path actually costs you in money, time and risk.
          </p>
        </div>
      </section>

      <section className="section-flush-top" data-reveal>
        <div className="compare-scroll">
          <table className="compare">
            <caption>
              Indicative comparison for a 4-bed home in an outer Brisbane growth
              corridor, August 2026.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="compare-blank">
                  <span className="visually-hidden">Comparison criterion</span>
                </th>
                <th scope="col" className="compare-ours">
                  QLAND turnkey build
                </th>
                <th scope="col">Volume project builder</th>
                <th scope="col">Buying established</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="compare-ours">{row.qland}</td>
                  <td>{row.builder}</td>
                  <td>{row.established}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-dark section">
        <div
          className="shell grid-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "clamp(26px,3vw,44px)",
          }}
        >
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--brass)" }}>
                {pillar.title}
              </h3>
              <p className="body-copy-dark" style={{ marginTop: 10, fontSize: 15.5 }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        <div className="shell" style={{ marginTop: "clamp(38px,4vw,58px)" }}>
          <Link
            href={routes.houseAndLand}
            className="link-rule link-rule-brass"
          >
            See the full inclusions →
          </Link>
        </div>
      </section>
    </main>
  );
}
