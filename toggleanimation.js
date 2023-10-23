var animation = bodymovin.loadAnimation({
    container: document.getElementById("toggle"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "toggle.json"
});
$(document).ready(function() {
    $("#toggle").click(function(){
      $("#toggle").toggleClass("active"); 
      bodymovin.setDirection(1);  
      animation.play();
      document.getElementById("body").style.backgroundColor = "#f1f1f1";
      if($('#toggle').hasClass("active")) {
        bodymovin.setDirection(-1);  
        animation.play();
        document.getElementById("body").style.backgroundColor = "#0b0b0b";
      }
      });
    }); 