function clearinput(target) {
  if (target.value == 'teste' || target.value == '1234') {
    target.removeAttribute('value')
  }
}
function addback(target) {
  if (target.id == 'login') {
    target.setAttribute('value', 'teste')
  } else {
    target.setAttribute('value', '1234')
  }
}

let buttoncollor = document.querySelector('button')
buttoncollor.addEventListener(
  'mouseenter',
  () => (buttoncollor.style.backgroundColor = 'rgb(26, 104, 221)')
)
buttoncollor.addEventListener(
  'mouseleave',
  () => (buttoncollor.style.backgroundColor = 'rgb(57, 109, 187)')
)
