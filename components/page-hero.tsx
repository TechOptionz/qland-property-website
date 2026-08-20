import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  image: string;
  alt: string;
  /** CSS min-height for the hero band; matches the per-page values in the design. */
  minHeight: string;
  titleMaxWidth?: string;
  subMaxWidth?: string;
  children?: ReactNode;
};

/** Full-bleed photographic hero used by every service page. */
export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  alt,
  minHeight,
  titleMaxWidth = "20ch",
  subMaxWidth = "56ch",
  children,
}: Props) {
  return (
    <section className="hero" style={{ minHeight }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-inner">
        <p className="eyebrow eyebrow-brass">{eyebrow}</p>
        <h1 className="display h1-hero" style={{ maxWidth: titleMaxWidth }}>
          {title}
        </h1>
        {sub && (
          <p
            className="lede lede-on-dark"
            style={{ maxWidth: subMaxWidth }}
          >
            {sub}
          </p>
        )}
        {children && <div className="hero-actions">{children}</div>}
      </div>
    </section>
  );
}
