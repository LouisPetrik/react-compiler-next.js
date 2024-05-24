const nextConfig = {
  experimental: {
    reactCompiler: {
      compilationMode: 'infer', // Choose 'automatic' or 'annotation'
    },
  },
}

module.exports = nextConfig
