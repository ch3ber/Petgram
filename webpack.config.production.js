const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#ffffff',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
        {
          src: path.resolve('src/assets/maskable_icon_x512.png'),
          size: '512x512',
          purpose: 'maskable'
        }
      ],
      orientation: 'portrait',
      prefer_related_applications: true,
      theme_color: '#456BD9'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.claudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'https://https://petgram-server-ch3ber-ch3ber.vercel.app'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
