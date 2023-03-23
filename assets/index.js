$(document).ready(function() {
  $('.incomplete-js').hide();

  var hostname = window.location.hostname;
  if (hostname.startsWith('resume-full.')) {
    $('.lite-js').hide();
  } else if (hostname.startsWith('resume-lite.')) {
    $('.full-js').hide();
  } else {
    $('.lite-js').hide();
  }
});
