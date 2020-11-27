//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld, ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);

    myengine = Engine.create();
    myworld = myengine.world;

    var options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 380, 400, 30,options);
    World.add(myworld, ground);

    var opt = {
        restitution: 0.34
    }

    ball = Bodies.circle(100, 100, 30, opt);
    World.add(myworld, ball);
}

function draw(){
    background(0);

    Engine.update(myengine);

    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x, ground.position.y,400, 30);

    fill("teal");
    ellipse(ball.position.x, ball.position.y, 30);
}