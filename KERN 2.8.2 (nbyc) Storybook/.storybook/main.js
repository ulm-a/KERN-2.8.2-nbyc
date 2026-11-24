/* KERN 2.8.2 (nbyc) — Storybook-Einstellung (E12, M102). Format wie KERNs eigenes
   Storybook (kern-ux-plain: @storybook/html-vite 9). "nbyc" = "New by Claude";
   interne Adaption von KERN 2.8.2, nicht das offizielle KERN. */
export default {
  framework: { name: "@storybook/html-vite", options: {} },
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  /* Das System selbst bleibt, wo es ist: einziger Ort ist der Systemordner neben diesem. */
  staticDirs: [{ from: "../../KERN 2.8.2 (nbyc)", to: "/kern" }],
  core: { disableTelemetry: true }
};
