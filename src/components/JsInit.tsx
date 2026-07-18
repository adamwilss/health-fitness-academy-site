// Runs before paint (blocking inline script) to mark that JS is running.
// Scroll-reveal hidden states are gated on html.js, so if this never runs
// (or errors out), everything below the fold stays visible by default —
// no blank page if JS fails to load.
const JS_INIT_SCRIPT = `
(function () {
  document.documentElement.classList.add('js');
})();
`;

export default function JsInit() {
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: JS_INIT_SCRIPT }} />;
}
