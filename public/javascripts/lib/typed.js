jQuery(function($){
  setTimeout(function(){
    $("h1 .name")
      .empty()
      .typed({
      strings: ["Sherard Bailey"],
      typeSpeed: 0
      });
  }, 2000);
});