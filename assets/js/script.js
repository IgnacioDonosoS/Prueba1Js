$(document).ready(function () {
    $("a").click(function (event) {
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top - 86;
      }
      //go to destination
      $("html,body").animate({ scrollTop: dest }, 800, "swing");
    });
    $("#facebook").click(function () { 
       openInNewTab("http://www.facebook.com");
    });
    $("#github").click(function () { 
       openInNewTab("http://www.github.com");
    });
    $("#twitter").click(function () { 
        openInNewTab("http://www.twitter.com");
    });
    $("#linkedin").click(function () { 
        openInNewTab("http://www.linkedin.com");
    }); 
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  
  function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: href,
    }).click();
  }