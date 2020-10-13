var btn = document.createElement("script");
btn.src="https://makitweb.com/demo/html2canvas/html2canvas-master/dist/html2canvas.js"
document.body.appendChild(btn);
  var canvas = document.createElement("canvas");
canvas.width="1300"
canvas.height="629"
document.body.appendChild(canvas);
          function screenshot(){
                html2canvas(document.body).then(function(canvas) {
           
                    document.body.appendChild(canvas);
                });
            }
           

document.addEventListener("keydown", function (event) {
  event.stopPropagation();
  event.preventDefault();

  if(event.ctrlKey && event.keyCode == 81)
  {
    screenshot();
  }
  else
  {
    console.log("Something else was pressed.");
  }
});
