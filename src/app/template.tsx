// Re-mounts on every client-side navigation, giving each page a soft
// fade-in instead of an abrupt swap. Pure opacity, disabled under
// prefers-reduced-motion in globals.css.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
