import Image from "next/image";
import type { Metadata } from "next";

import ImageSlot from "@/components/image-slot";
import {
  aboutGallery,
  credentials,
  images,
  team,
  whatWeDo,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About QLAND Property | Brisbane Property Group",
  description:
    "Meet the team behind QLAND Property — buyer's agency, building and property management across Brisbane and South East Queensland.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section
        style={{
          padding:
            "clamp(72px,9vw,140px) var(--gutter) clamp(40px,5vw,70px)",
        }}
      >
        <div className="shell">
          <p className="eyebrow">About QLAND</p>
          <h1 className="display h1" style={{ maxWidth: "22ch" }}>
            Buying, building and managing property in Brisbane
          </h1>
        </div>
      </section>

      {/* --- founder story ----------------------------------------------------- */}
      <section className="section-flush-top" data-reveal>
        <div className="shell split-lead">
          <div>
            <h2
              className="display"
              style={{ fontSize: "clamp(26px,3.2vw,40px)", lineHeight: 1.1 }}
            >
              Why Nabil started QLAND
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                fontSize: 16.5,
                lineHeight: 1.78,
                color: "var(--muted)",
              }}
            >
              Nabil Qureshi spent his first years in Brisbane property on the
              selling side, and kept watching the same thing happen: buyers
              walking into negotiations with nobody in their corner, and first
              home buyers signing build contracts they didn&rsquo;t fully
              understand.
            </p>
            <p
              style={{
                margin: "18px 0 0",
                fontSize: 16.5,
                lineHeight: 1.78,
                color: "var(--muted)",
              }}
            >
              He started QLAND in 2018 to sit on the other side of the table. The
              rule was simple — every price fixed in writing, every inclusion
              listed, and one person the client can call. That person is usually
              still Nabil, which is why most of our reviews mention him by name.
            </p>
            <p
              style={{
                margin: "18px 0 0",
                fontSize: 16.5,
                lineHeight: 1.78,
                color: "var(--muted)",
              }}
            >
              Eight years on we buy, build, sell and manage across Brisbane,
              Logan, Ipswich and Moreton Bay. The team is deliberately small. We
              take on the number of clients we can answer the phone to.
            </p>
          </div>

          <div
            className="media"
            style={{ aspectRatio: "4 / 5", minHeight: 320 }}
          >
            <Image
              src={images.office}
              alt="Nabil Qureshi with a QLAND colleague at the Eight Mile Plains office"
              fill
              sizes="(max-width: 920px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* --- team --------------------------------------------------------------- */}
      <section
        className="section-paper"
        data-reveal
        style={{ padding: "var(--pad-y) var(--gutter)" }}
      >
        <div className="shell">
          <h2 className="display h2">The team</h2>
          <div
            className="grid-cards"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {team.map((member) => (
              <div key={member.slot}>
                <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
                  <ImageSlot id={member.slot} placeholder={member.placeholder} />
                </div>
                <h3 style={{ margin: "18px 0 4px", fontSize: 17, fontWeight: 600 }}>
                  {member.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: "var(--clay)",
                    letterSpacing: ".04em",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {member.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- what we do + credentials -------------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">What we do</h2>
          <div
            className="grid-auto"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {whatWeDo.map((item) => (
              <div key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="body-copy">{item.body}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "clamp(40px,4.4vw,64px)",
              paddingTop: "clamp(30px,3.4vw,44px)",
              borderTop: "1px solid var(--rule-mid)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {credentials.map((item) => (
              <div key={item.label}>
                <p className="eyebrow eyebrow-tight">{item.label}</p>
                <p style={{ margin: "8px 0 0", fontSize: 16 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- gallery -------------------------------------------------------------- */}
      <section className="section-flush-top" data-reveal>
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 8,
          }}
        >
          {aboutGallery.map((item) => (
            <div
              key={item.image}
              className="media"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 920px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
