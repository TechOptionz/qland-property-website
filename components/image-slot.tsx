import Image from "next/image";

type Props = {
  /** Stable id, carried over from the design canvas slot ids. */
  id: string;
  placeholder: string;
  /** Supply once the client provides the asset; until then a labelled slot renders. */
  src?: string;
  alt?: string;
};

/**
 * Stand-in for the design canvas `<image-slot>` element, which relied on the
 * canvas runtime for drag-and-drop filling. Here it renders the real image when
 * one is supplied and an obvious labelled placeholder when it is not, so unfilled
 * slots stay visible to whoever is finishing the content.
 */
export default function ImageSlot({ id, placeholder, src, alt }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? placeholder}
        fill
        sizes="(max-width: 920px) 100vw, 320px"
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <div
      data-image-slot={id}
      role="img"
      aria-label={`Placeholder: ${placeholder}`}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
        background: "rgba(22,19,15,.05)",
        border: "1px dashed rgba(22,19,15,.28)",
        fontFamily: "var(--font-mono), monospace",
        fontSize: 12,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--muted-soft)",
      }}
    >
      {placeholder}
    </div>
  );
}
