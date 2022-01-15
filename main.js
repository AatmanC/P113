function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
}

function draw(){
    image(video, 180, 150, 220, 200);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(515, 40, 20, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(55, 425, 80);


    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(525, 425, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 40, 20, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(525, 50, 80);


 rect(90, 420, 460, 20);
}

function take_snapshot(){
    save('Mypic.png')
}