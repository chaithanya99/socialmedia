$("h1").on("mouseover",function(){
  var left=$("h1").css("margin-left");
  $("h1").text("Social Media");
  $("h1").css("margin-left","80px");
  setTimeout(function() {
    $("h1").text("SM");

    $("h1").css("margin-left","120px");
  }, 500);
})
