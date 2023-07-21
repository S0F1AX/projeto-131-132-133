img="";
status="";
objects=[];
modelStatus="";

function preload()
{
    img = loadImage('animai.jpg');
}

function setup()
{
    canvas = createCanvas(600, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectando Objeto";
}

function draw()
{
    image(img, 0, 0, 600, 420);

    if(modelStatus != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objeto Detactado";
noStroke();
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, +objects[i].width, objects[i].height);
        }
    }

}

function modelLoaded()
{
    console.log("Model Loaded!");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}