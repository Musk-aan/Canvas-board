const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 50;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    function draww(e){
      //stop the function from running when they are not moused down
      if(!isDrawing) {
        return; 
      }

      console.log(e);
      ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
      ctx.beginPath();
      // start from
      ctx.moveTo(lastX,lastY);
      // go to
      ctx.lineTo(e.offsetX,e.offsetY);
      ctx.stroke();
      [lastX,lastY] = [e.offsetX,e.offsetY];
      hue = hue+2;
    }

    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX,lastY] = [e.offsetX,e.offsetY];
    });
    canvas.addEventListener('mousemove', draww); 
    canvas.addEventListener("mouseup", () => {isDrawing = false});
    canvas.addEventListener("mouseout", () => {isDrawing = false});//when leaving the canvas. To tell that mouse press kr kr out of canvas chale gaye. To true->false