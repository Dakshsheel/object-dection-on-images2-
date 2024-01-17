img = "";

function preload()
{
    img = loadImage('camera.jpg');
    img = loadImage('globe.jpg');
    img = loadImage('cactus.png');
    img = loadImage('bulb.png');
    img = loadImage('lanten.jpeg');
    img = loadImage('telephone.jpeg');
    
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}


function gotResult( results)
{
    console.log(results);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);

}


