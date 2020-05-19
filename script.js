(function () {
   
    function incX(point) {
      return Math.round(Math.cos(point.angle)*min/25);
    }
    function incY(point) {
      return Math.round(Math.sin(point.angle)*min/25)*-1;
    }
    
    function Point(x, y, angle) {
      this.x = x;
      this.y = y;
      this.angle = angle;
    }
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var min = Math.min(canvas.width, canvas.height);
    ctx.shadowBlur = 20; 
    ctx.lineCap = "round";
  
    var point = new Point(canvas.width/2, canvas.height/2, 0);
    var x, y;
    var color = 0;
    ctx.lineWidth = 7;
    
    function draw() {
      color += 1;
      ctx.strokeStyle = "hsla(" + color + ", 100%, 50%, 0.5)";
      ctx.shadowColor = "hsla(" + (color+10) + ", 100%, 50%, 0.5)";
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      do {
        if(Math.random() > 0.5) {
          point.angle += Math.PI/3;
        } else {
          point.angle -= Math.PI/3;
        }
        x = incX(point);
        y = incY(point);
       
      } while(
        point.x + x > canvas.width 
        || point.x + x < 0
        || point.y + y > canvas.height
        || point.y + y < 0)
      point.x += x;
      point.y += y;
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      requestAnimationFrame(draw);
    }
    draw();
  })();