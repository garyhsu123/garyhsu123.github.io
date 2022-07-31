'use strict'
$(document).ready(function () {
  initTags(), window.maxTags && initTagsDropdown()
})
var SemanticUIColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
]
function getRandomInt(o, t) {
  return (o = Math.ceil(o)), (t = Math.floor(t)), Math.floor(Math.random() * (t - o) + o)
}
function initTags() {
  $('.dream-tags > .ui.label').each(function () {
    $(this).addClass(SemanticUIColors[getRandomInt(0, SemanticUIColors.length)])
  })
}
function initTagsDropdown() {
  $('.ui.accordion').accordion({ selector: { trigger: '.title .dropdown' } }),
    $('.tags-with-dropdown .dropdown').click(function () {
      $(this).children(':first').toggleClass('rotated')
    })
}
