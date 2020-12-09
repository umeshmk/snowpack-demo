// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  plugins: [
    "@snowpack/plugin-vue",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
  ],
  mount: {
    public: "/",
    src: "/_dist_", // "./src" is mounted to "/_dist_/*"
  },
  devOptions: { port: 8081, open: "none" },
  // installOptions: {},
  // buildOptions: {},
  // proxy: {},
  // mount: {},
  // alias: {},
};
