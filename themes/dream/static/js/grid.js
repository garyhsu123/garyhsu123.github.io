'use strict'
function initGrid() {
  var n = $('.dream-grid').masonry({ itemSelector: '.dream-column' })
  n.imagesLoaded().progress(function () {
    return n.masonry('layout')
  }),
    window.hasTwitterEmbed &&
      window.twttr.ready(function (r) {
        return r.events.bind('loaded', function () {
          return n.masonry('layout')
        })
      })
}
$(document).ready(initGrid)
