module.exports = {
  svelteSortOrder: "styles-markup-scripts",
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteAllowShorthand: false,
  plugins: ["prettier-plugin-svelte"],
  overrides: [
      {
          files: "*.ts",
          options: {
              parser: "typescript"
          }
      }
  ]
};
