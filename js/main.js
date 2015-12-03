$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
});

$.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1228652019.36b37c9.50acd7b580fe473d8421d0b559898898",
      success: function(data) {
        for (var i = 0; i < 4; i++) {
      $("#photos").append("<li><a target='_blank' href='" + data.data[i].link + "'><img class='insta' src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
        }
      }
  });