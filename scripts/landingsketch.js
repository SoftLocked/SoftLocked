let l;

let canvas;

let step;

let rectWidth, rectHeight;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    canvas.style('position', 'fixed');

    frameRate(60);

    resetSketch(windowWidth, windowHeight);

    step = 0;

    rectWidth = 0;
    rectHeight = 0;

    

}


function windowResized() {
    resetSketch(windowWidth, windowHeight);
    resizeCanvas(windowWidth, windowHeight);
    
    
}


function resetSketch(w, h) {
    l = new Life(20,40, w, h);
}

function draw() {  
    rectMode(CENTER);
    background(0);

    l.show();

    
    if (step%1==0){
    l.step();
    }if (step%700==0 && step != 0) {
        l.calcBoard();
    }
    step++;

    if (step > 1000) {
        step = 0;
    }

    l.addCells();

    fill('rgba(50,50,50,0.8)');
    rect(width/2, height/2,width,height);



    fill('rgba(146,212,236, 0.2)');
    stroke('rgba(146,212,236, 0.3)');
    rect(width/2, height/2, rectWidth, rectHeight)
}