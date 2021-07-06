canvas = document.getElementById('gc');
ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function pathPoints(x0, y0, vertices, radius){
  theta0 = 2*Math.PI/vertices;
  theta = theta0;
  points = [[x0,y0]];

  for(let i = 1; i < vertices; i++){
    x = x0 + radius * Math.sin(theta);
    y = y0 + radius * (1 - Math.cos(theta));
    points.push([x,y]);
    theta+=theta0;
  }
  return points;
}

function drawPoints(points){
  for(let i = 0; i <points.length; i++){
    ctx.beginPath();
    ctx.arc(points[i][0],points[i][1],3,0,2*Math.PI);
    ctx.stroke();
  }
}

console.log(pathPoints(0,0,5,1));


shapes = [];
function setup(){
  for(let i = 0; i < 30; i++){
     ctx.strokeStyle=getRandomColor();
    shapes[i] = pathPoints(200,4,3+i,30+i*4);
    //shapes[i] = pathPoints(200,i*4,3+i,30+i*4);
    drawPoints(shapes[i]);
  }

}


v = 2;
function update(){
  // move circles along path
  // angle = Math.atan(p1y-p0y, p1x-p1y);
  // xv = v * Math.cos(angle);
  // yv = v * Math.sin(angle);
}


setup();
setInterval(update, 34);
