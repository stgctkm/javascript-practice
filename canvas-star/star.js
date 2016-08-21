(function() {
   var draw = function() {
       var canvas = document.getElementById("canvas");
       var context = canvas.getContext("2d");

       context.shadowBlur = 10;
       context.shadowColor = "#000000";

       // for (var i = 0; i < 300; i++) {
           var x = parseInt(Math.random() * 600);
           var y = parseInt(Math.random() * 400);
           var red = parseInt(Math.random() * 255);
           var green = parseInt(Math.random() * 255);
           var blue = parseInt(Math.random() * 255);

           context.beginPath();
           context.arc(x, y, 5, 0, Math.PI*2, false);
           context.closePath();

           var color = "rgb(" + red + "," + green + ", " + blue + ")";

           context.fillStyle = color;
           context.fill();
       // }
   };


   var init = function() {
       var timer = window.setInterval(draw, 100);
   };

   init();
}());