import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import CtaBand from "@/components/cta-band";
import {
  homeDesigns,
  homeTestimonials,
  images,
  paths,
  pillars,
  processTeaser,
  trustBar,
} from "@/lib/content";
import { CALENDLY_URL, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "QLAND Property | Buyer's Agency & House and Land, Brisbane",
  description:
    "Brisbane buyer's agency and house and land specialists. Fixed-price, turnkey homes and buying support for first home buyers and investors. Book a free strategy call.",
  alternates: { canonical: "/" },
};

const featured = homeDesigns.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      {/* --- hero ---------------------------------------------------------- */}
      <section
        className="hero"
        style={{ minHeight: "min(88vh,860px)" }}
      >
        <div className="hero-zoom">
          <Image
            src={images.heroHome}
            alt="Completed two-storey QLAND home at dusk"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-scrim hero-scrim-home" />
        <div className="hero-inner hero-inner-home">
          <p className="eyebrow eyebrow-brass" style={{ marginBottom: 22 }}>
            Brisbane · Buyer&rsquo;s agency, building &amp; property management
          </p>
          <h1 className="display h1-home">Your property journey starts here</h1>
          <p
            className="lede lede-on-dark"
            style={{
              marginTop: 26,
              maxWidth: "56ch",
              fontSize: "clamp(16px,1.3vw,20px)",
              lineHeight: 1.65,
              color: "rgba(255,253,250,.82)",
            }}
          >
            A buyer-centric agency guiding you through buying, building, renting
            and managing property in Brisbane — with fixed pricing and no
            surprises.
          </p>
          <div className="hero-actions" style={{ marginTop: 38 }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-clay"
            >
              Book a free strategy call
            </a>
            <a href="#how-it-works" className="btn btn-outline-light">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* --- trust bar ----------------------------------------------------- */}
      <section
        className="section-dark"
        aria-label="Credentials"
        style={{
          padding: "clamp(28px,3.4vw,44px) var(--gutter)",
          borderTop: "1px solid rgba(249,180,85,.22)",
        }}
      >
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
            gap: "clamp(22px,3vw,44px)",
          }}
        >
          {trustBar.map((item) => (
            <div key={item.label}>
              <p
                className="display"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px,3.4vw,42px)",
                  lineHeight: 1,
                  color: "var(--brass)",
                }}
              >
                {item.figure}
                {item.suffix && (
                  <span
                    style={{
                      fontSize: ".5em",
                      color: "rgba(246,241,232,.6)",
                    }}
                  >
                    {item.suffix}
                  </span>
                )}
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 13,
                  letterSpacing: ".04em",
                  color: "rgba(246,241,232,.62)",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- choose your path ---------------------------------------------- */}
      <section className="section-lg" data-reveal>
        <div className="shell">
          <div style={{ marginBottom: "clamp(34px,4vw,58px)" }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Choose your path
            </p>
            <h2
              className="display h2-lg"
              style={{ maxWidth: "22ch" }}
            >
              Tell us where you are and we&rsquo;ll take it from there
            </h2>
          </div>

          <div
            className="hairline-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(258px,1fr))",
            }}
          >
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                style={{
                  background: "var(--paper)",
                  padding: "clamp(28px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 260,
                  color: "var(--ink)",
                }}
              >
                <span
                  className="display"
                  style={{ fontSize: 13, letterSpacing: ".1em", color: "var(--clay)" }}
                >
                  {path.number}
                </span>
                <span
                  className="display"
                  style={{
                    fontSize: "clamp(24px,2.4vw,30px)",
                    lineHeight: 1.15,
                  }}
                >
                  {path.title}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.65, opacity: 0.72 }}>
                  {path.blurb}
                </span>
                <span
                  style={{
                    marginTop: "auto",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--clay)",
                  }}
                >
                  {path.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- the QLAND standard -------------------------------------------- */}
      <section className="section-paper">
        <div className="shell grid-split cols-2">
          <div
            className="media"
            style={{ minHeight: "clamp(320px,42vw,620px)" }}
          >
            <Image
              src={images.kitchenDetail}
              alt="Kitchen detail in a completed QLAND home"
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            data-reveal
            style={{ padding: "clamp(44px,6vw,96px) clamp(20px,4vw,72px)" }}
          >
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              The QLAND standard
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(30px,3.8vw,50px)",
                lineHeight: 1.08,
                maxWidth: "20ch",
              }}
            >
              Four things we don&rsquo;t negotiate on
            </h2>

            <div
              style={{
                marginTop: "clamp(30px,3.4vw,44px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  style={{
                    padding: "22px 0",
                    borderTop: "1px solid var(--rule)",
                    borderBottom:
                      i === pillars.length - 1
                        ? "1px solid var(--rule)"
                        : undefined,
                  }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: ".01em" }}>
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: 15.5,
                      lineHeight: 1.7,
                      color: "var(--muted)",
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="note">
              Fixed price covers the build contract. Site costs beyond the
              standard allowance, client variations and developer land delays sit
              outside it — we set these out in writing before you sign.
            </p>
          </div>
        </div>
      </section>

      {/* --- how it works --------------------------------------------------- */}
      <section id="how-it-works" className="section-lg" data-reveal>
        <div className="shell">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            How it works
          </p>
          <h2 className="display h2-lg" style={{ maxWidth: "20ch" }}>
            Five steps from renting to keys
          </h2>

          <div
            style={{
              marginTop: "clamp(36px,4.4vw,64px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "clamp(24px,2.6vw,36px)",
            }}
          >
            {processTeaser.map((step, i) => (
              <div
                key={step.n}
                className={`rule-top${i === 0 ? " rule-top-first" : ""}`}
              >
                <p
                  className="display"
                  style={{
                    margin: 0,
                    fontSize: 34,
                    lineHeight: 1,
                    color: "var(--clay)",
                  }}
                >
                  {step.n}
                </p>
                <h3 style={{ margin: "14px 0 8px", fontSize: 16.5, fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--muted)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={routes.houseAndLand}
            className="link-rule link-rule-lg"
            style={{ marginTop: 38 }}
          >
            See the full process →
          </Link>
        </div>
      </section>

      {/* --- video ---------------------------------------------------------- */}
      <section className="section-dark section-lg">
        <div className="shell">
          <div
            className="stack-mobile"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: "clamp(30px,3.4vw,46px)",
            }}
          >
            <h2 className="display h2-lg">See what we build</h2>
            <p
              style={{
                margin: 0,
                fontSize: 15.5,
                color: "rgba(246,241,232,.66)",
                maxWidth: "34ch",
              }}
            >
              A walkthrough of a recently completed QLAND home.
            </p>
          </div>

          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/XgDwLcv0rPo"
              title="A walkthrough of a recently completed QLAND home"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* --- featured homes -------------------------------------------------- */}
      <section className="section-lg" data-reveal>
        <div className="shell">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Featured homes
          </p>
          <h2 className="display h2-lg">Designs ready to build</h2>

          <div
            style={{
              marginTop: "clamp(34px,4vw,54px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {featured.map((design) => (
              <article key={design.name} className="card">
                <div className="card-media">
                  <Image
                    src={design.image}
                    alt={design.alt}
                    fill
                    sizes="(max-width: 920px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "clamp(22px,2.4vw,30px)" }}>
                  <h3 className="display" style={{ fontSize: 26 }}>
                    {design.name}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 18px",
                      fontSize: 14,
                      color: "var(--muted-soft)",
                    }}
                  >
                    {design.area} · {design.facade} · {design.price} house &amp;
                    land
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      letterSpacing: ".02em",
                      color: "var(--muted)",
                    }}
                  >
                    {design.spec}
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener"
                    className="link-rule"
                    style={{ marginTop: 22 }}
                  >
                    Book a consult
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- testimonials ----------------------------------------------------- */}
      <section
        data-reveal
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--rule-faint)",
          padding: "clamp(64px,8vw,110px) var(--gutter)",
        }}
      >
        <div
          className="shell grid-split cols-2"
          style={{ gap: "clamp(28px,3vw,48px)" }}
        >
          {homeTestimonials.map((item) => (
            <blockquote
              key={item.attribution}
              style={{ margin: 0, display: "flex", flexDirection: "column" }}
            >
              <p
                className="display"
                style={{
                  margin: 0,
                  fontSize: "clamp(21px,2.1vw,29px)",
                  lineHeight: 1.42,
                  letterSpacing: "-.01em",
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer
                style={{
                  marginTop: "auto",
                  paddingTop: 26,
                  fontSize: 14,
                  color: "var(--muted-soft)",
                }}
              >
                {item.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="shell" style={{ marginTop: 34 }}>
          <Link href={routes.reviews} className="link-rule">
            Read all reviews →
          </Link>
        </div>
      </section>

      <CtaBand
        tall
        heading="Ready to start?"
        body="Book a free, no-obligation strategy session. We'll talk through your borrowing capacity, your goals and what's realistically available right now."
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-brass"
        >
          Book your free strategy session
        </a>
      </CtaBand>
    </main>
  );
}
