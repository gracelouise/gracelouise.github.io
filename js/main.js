$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});

$.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=15912969.af411b8.390acad5419c4d2ca6c130dfa092a5d2",
      success: function(data) {
        for (var i = 0; i < 4; i++) {
      $("#photos").append("<li><a target='_blank' href='" + data.data[i].link + "'><img class='insta' src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
        }
      }
  });