module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
  ,devServer: {
    host: 'localhost',
        port: 8000, 
        https: false,
        hotOnly: true,
        proxy: { // proxyTable 설정
            '/sfc': {
                target: 'http://localhost:8080/sfc/',
                ws: false,
                changeOrigin: true
       }
    }
  }
}