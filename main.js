nvas = document.getElementById("myCanvas");
 ctx = lienzo.getContext("2d"); color = "rojo";
  ctx.beginPath();
   ctx.strokeStyle = color; 
  ctx.lineWidth = 2;
   ctx.arc(200, 200, 40, 0, 2 * Matemáticas.PI); 
   ctx.stroke();
    lienzo.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) { //obtener color del cuadro de entrada //inicio de la actividad adicional 
        color = document.getElementById("color").value;
         consola.log(color);
         //final de la actividad adicional 
         mouse_x = e.clientX - canvas.offsetLeft;
          mouse_y = e.clientY - lienzo.offsetTop; 
          console.log("X = " + mouse_x + " ,Y= " + mouse_y); 
        círculo(mouse_x , mouse_y); }

