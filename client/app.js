import 'script-loader!jquery'
import 'script-loader!foundation-sites'
import 'foundation-sites/dist/css/foundation.css'
import './app.css'
const landingImageSource = require('file-loader!./assets/designDre.jpg')
const {art} = require('./assets/ascii-art')

export {onLoad}

function onLoad () {
  let landingImage = document.getElementById('landing-image')
  landingImage.src = landingImageSource

  console.log(art)
  console.log('email me: anauleau@gmail.com')
}
