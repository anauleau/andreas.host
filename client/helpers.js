export {$on}

function $on (target, type, callback, useCapture) {
  target.addEventListener(type, callback, !!useCapture)
}
