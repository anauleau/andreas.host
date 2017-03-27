import 'script-loader!jquery'
import 'script-loader!foundation-sites'
import 'foundation-sites/dist/css/foundation.css'
import './app.css'
const {art} = require('./assets/ascii-art')

export {onLoad}

function onLoad () {
  console.log(art)
  console.log('email me: anauleau@gmail.com')
}
