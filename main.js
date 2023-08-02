adesivo ="";
caneca ="";
escultura ="";
lego ="";
popit ="";

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
    canvas = createCanvas(400, 500)
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

