module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: [
        "http://localhost/index.html",
        "http://localhost/contact/index.html",
      ],
      chromePath: "/usr/bin/chromium",
      numberOfRuns: 5,
    },
    upload: {
      target: "filesystem",
      outputDir: "./.lighthouseci",
    },
  },
};
