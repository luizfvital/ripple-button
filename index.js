const rippleButton = document.querySelector('.ripple-button')

const mousePositionToCustomProp = (evt, el) => {
  let posX = evt.offsetX
  let posY = evt.offsetY

  el.style.setProperty('--x', posX + 'px')
  el.style.setProperty('--y', posY + 'px')
}

rippleButton.addEventListener('click', (e) => {
  mousePositionToCustomProp(e, rippleButton)
  rippleButton.classList.add('pulse')

  rippleButton.addEventListener('animationend', () => rippleButton.classList.remove('pulse'))
})