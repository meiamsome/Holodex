// New atom for pinned orgs
export function TLDexLogo({
  size = 24,
  className,
}: {
  size?: number | string;
  className?: string;
}) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={className}
      style={{
        fill: "currentcolor",
        width: size,
        height: size,
      }}
    >
      <path
        d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M4,10h4v2H4V10z M14,16H4v-2h10V16z M20,16h-4v-2
    h4V16z M20,12H10v-2h10V12z"
      />
    </svg>
  );
}
