// Snowpack - Hot module replacement + Fast refresh

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
export default {
  start() {
    if (import.meta.hot) {
      import.meta.hot.accept();
      import.meta.hot.dispose(() => {
        app.unmount();
      });
    }
  },
};
