"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  CALENDLY_URL,
  contact,
  desktopNavTail,
  mobileNav,
  ourDifferenceLink,
  routes,
  serviceLinks,
} from "@/lib/site";
import logo from "@/public/assets/qland-logo.png";

const navLink: React.CSSProperties = {
  color: "var(--ink)",
  fontSize: "14.5px",
  fontWeight: 500,
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close both menus whenever the route changes, including on back/forward.
  // Adjusted during render rather than in an effect so no extra pass is queued.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  // Click-outside and Escape close the Services dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Lock body scroll behind the full-screen mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(246,241,232,.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(22,19,15,.1)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--shell)",
            margin: "0 auto",
            padding: "0 clamp(18px,4vw,56px)",
            height: "clamp(68px,7vw,88px)",
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <Link
            href={routes.home}
            aria-label="QLAND Property home"
            style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}
          >
            <Image
              src={logo}
              alt="QLAND Property"
              priority
              sizes="180px"
              style={{
                height: "clamp(26px,3vw,34px)",
                width: "auto",
                filter: "saturate(1.05)",
              }}
            />
          </Link>

          <nav
            className="only-desktop"
            aria-label="Main"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
              marginLeft: "auto",
            }}
          >
            <Link href={routes.home} style={navLink}>
              Home
            </Link>

            <div style={{ position: "relative" }} ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                style={{
                  ...navLink,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Services
                <span aria-hidden="true" style={{ fontSize: 9, opacity: 0.6 }}>
                  ▼
                </span>
              </button>

              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: 34,
                    left: -18,
                    width: 286,
                    background: "var(--paper)",
                    border: "1px solid var(--rule)",
                    boxShadow: "0 24px 60px -20px rgba(22,19,15,.28)",
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{ ...navLink, padding: "12px 14px" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href={ourDifferenceLink.href}
                    style={{
                      ...navLink,
                      padding: "12px 14px",
                      borderTop: "1px solid var(--rule-faint)",
                      marginTop: 6,
                    }}
                  >
                    {ourDifferenceLink.label}
                  </Link>
                </div>
              )}
            </div>

            {desktopNavTail.map((item) => (
              <Link key={item.href} href={item.href} style={navLink}>
                {item.label}
              </Link>
            ))}

            <a
              href={contact.phoneHref}
              style={{
                ...navLink,
                fontWeight: 600,
                paddingLeft: 8,
                borderLeft: "1px solid var(--rule-strong)",
              }}
            >
              {contact.phone}
            </a>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-clay"
              style={{ padding: "13px 22px", fontSize: 14 }}
            >
              Book a call
            </a>
          </nav>

          <button
            type="button"
            className="only-mobile"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "1px solid rgba(22,19,15,.2)",
              padding: "11px 15px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              cursor: "pointer",
              color: "var(--ink)",
            }}
          >
            Menu
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "var(--ink)",
            color: "var(--bone)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 34,
            }}
          >
            <Image
              src={logo}
              alt="QLAND Property"
              sizes="180px"
              style={{
                height: 28,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "1px solid rgba(246,241,232,.3)",
                color: "var(--bone)",
                padding: "11px 15px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>

          <nav
            aria-label="Mobile"
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {mobileNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="display"
                style={{
                  color: "var(--bone)",
                  fontSize: 30,
                  padding: "12px 0",
                  borderBottom:
                    i === mobileNav.length - 1
                      ? undefined
                      : "1px solid rgba(246,241,232,.12)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-brass"
            style={{ marginTop: 32, padding: 18, fontSize: 15 }}
          >
            Book a free strategy call
          </a>
        </div>
      )}
    </>
  );
}
