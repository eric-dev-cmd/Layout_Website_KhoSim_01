(function ($) {
  $(document).ready(function () {
    var current_width = $(window).width();
    //do something with the width value here!
    if (current_width < 321)
      $("html")
        .addClass("m319")
        .removeClass("m320")
        .removeClass("m768")
        .removeClass("desktop")
        .removeClass("m480");
    else if (current_width < 481)
      $("html")
        .addClass("m320")
        .removeClass("m768")
        .removeClass("desktop")
        .removeClass("m480");
    else if (current_width < 739)
      $("html")
        .addClass("m768")
        .removeClass("desktop")
        .removeClass("m320")
        .removeClass("tablet");
    else if (current_width < 970)
      $("html")
        .addClass("tablet")
        .removeClass("desktop")
        .removeClass("m320")
        .removeClass("m768");
    else if (current_width > 971)
      $("html")
        .addClass("desktop")
        .removeClass("m320")
        .removeClass("m768")
        .removeClass("tablet");

    if (current_width < 769)
      $("html").addClass("mobile-menu").removeClass("desktop-menu");

    if (current_width > 770)
      //651
      $("html").addClass("desktop-menu").removeClass("mobile-menu");
  });

  //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
  $(window).resize(function () {
    var current_width = $(window).width();
    //do something with the width value here!
    if (current_width < 481)
      $("html")
        .addClass("m320")
        .removeClass("m768")
        .removeClass("desktop")
        .removeClass("tablet");
    else if (current_width < 669)
      $("html")
        .addClass("m768")
        .removeClass("desktop")
        .removeClass("m320")
        .removeClass("tablet");
    else if (current_width < 970)
      $("html")
        .addClass("tablet")
        .removeClass("desktop")
        .removeClass("m320")
        .removeClass("m768");
    else if (current_width > 971)
      $("html")
        .addClass("desktop")
        .removeClass("m320")
        .removeClass("m768")
        .removeClass("tablet");

    if (current_width < 650)
      $("html").addClass("mobile-menu").removeClass("desktop-menu");

    if (current_width > 651)
      $("html").addClass("desktop-menu").removeClass("mobile-menu");
  });
})(jQuery);

