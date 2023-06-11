const devConfig = {
  publicPath: '/',
}

const prodConfig = {
  publicPath: '/',
}

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig

export default config
