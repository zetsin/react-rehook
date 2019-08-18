module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ["./demo/src/index.tsx"],
      }
      config.resolve.extensions = config.resolve.extensions || []
      config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");
      config.module.rules.push({
        "test": /\.tsx?$/,
        "loader": "awesome-typescript-loader"
      });

      return config;
    }
  }
}
