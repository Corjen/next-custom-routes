module.exports = {
  // target: "serverless",
  // Disables auto-resolving urls based on file path, e.g.
  // in this example URL /test won't resolve to the test page,
  // but /en/test or /nl/test will
  useFileSystemPublicRoutes: false,
  experimental: {
    async rewrites() {
      return [
        { source: "/nl/collectie", destination: "/collection" },
        { source: "/nl/collectie/:cid", destination: "/collection/[cid]" },
        // Catch all
        { source: "/:lang(en|nl)/:uid*", destination: "/:uid*" }
      ];
    }
  }
};
