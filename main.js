

    function setup()
{
   canvas=createCanvas(640,480);
   canvas.position(110,250);
   video =createCapture(VIDEO);
   video.hide();
   tintColor=""
}

function draw()
{
    image(video,200,120,300,280);
    tint(tintColor);
    fill("blue");
    stroke("blue");
    circle(50, 50, 50);
    circle(50, 430, 50);
    circle(590, 50, 50);
    circle(590, 430, 50);
    fill("black");
    stroke("black");
    rect(70, 40, 500, 20);
    rect(70, 420, 500, 20);
    rect(40, 70, 20, 340);
    rect(580, 70, 20, 340);
}

function takeSnapshot()
{
    save("minhafoto.png");

}

function filtertint()
{
 tintColor = document.getElementById("color_name").value;
 
}