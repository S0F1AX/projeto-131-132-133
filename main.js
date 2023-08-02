adesivo ="";
caneca ="";
escultura ="";
lego ="";
popit ="";
modelstatus ="";

function preload()
{
    adesivo = loadImage('hello kitty.JPG');
    caneca = loadImage('sky.JPG');
    escultura = loadImage("panda.JPG");
    lego = loadImage("panda.JPG");
    popit = loadImage("picole.JPG");
}

function setup()
{
    canvas = createCanvas(400, 500);
    canvas.center();

    detec = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Detectando Objetos";
}

function modelLoaded()
{
    modelLoaded = true;
    detec.detect(adesivo, gotResults);
    detec.detect(lego, gotResults);
    detec.detect(escultura, gotResults);
    detec.detect(caneca, gotResults);
    detec.detect(popit, gotResults);
}

function adesivo()
{
    window.location = "adesivo.html";
}
function caneca()
{
    window.location = "caneca.html";
}
function lego()
{
    window.location = "lego.html";
}
function escultura()
{
    window.location = "escultura.html";
}
function popit()
{
    window.location = "popit.html";
}

function voltar()
{
    window.location = "index.html";
}

function gotResults(error, results)
{
    {
        if (error)
        {
            console.log(error);
        }
        console.log(results);
        objects=results;
    }
}