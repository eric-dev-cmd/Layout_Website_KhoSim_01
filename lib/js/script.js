jQuery(document).ready(function () {
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  if (isMobile.any()) {
    // It is mobile
    $("body").addClass("body_mobile");
  }
  //event search
  $(".criteria")
    .unbind("click")
    .click(function () {
      let jthis = $(this);
      $(".criteria").not(this).parent().removeClass("expand");
      $(".criteria").not(this).next().hide();
      jthis.next().slideToggle(200);
      jthis.parent().toggleClass("expand");
      let t = $(this).parent().parent().hasClass("laptop")
        ? $(".filter.laptop")
        : $(".filter");
      $("body,html").animate(
        {
          scrollTop: t.offset().top,
        },
        600
      );
    });
  $(".closefilter")
    .unbind("click")
    .click(function () {
      $(this).parent().hide();
      $(this).parent().parent().removeClass("expand");
    });
  $("#back-top a")
    .unbind("click")
    .click(function () {
      return (
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          800
        ),
        !1
      );
    });
  $(window).scroll(function () {
    $(this).scrollTop() > 300
      ? $("#back-top").fadeIn()
      : $("#back-top").fadeOut();
  });
});
