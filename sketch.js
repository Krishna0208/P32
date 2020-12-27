const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var slingshot;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13;
var box14, box15, box16, box17, box18, box19, box20, box21, box22;

function preload() {
   polygonImg = loadImage("polygon.png");

}

function setup() {
canvas = createCanvas(1200,550)

engine = Engine.create();
world = engine.world;

var option = {
    restitution: 0.8,
    friction: 1.0,
    density: 1.0
}

polygon = Bodies.circle(100,350,20,option);
World.add(world,polygon);

slingshot =  new Slingshot(this.polygon,{x:150, y:350});

ground1 = new Ground(500,500,350,15);
ground2 = new Ground(1000,350,300,15);

box1 = new Box(375,470,50,60);
box2 = new Box(425,470,50,60);
box3 = new Box(475,470,50,60);
box4 = new Box(525,470,50,60);
box5 = new Box(575,470,50,60);
box6 = new Box(625,470,50,60);

box7 = new Box(425,410,50,60);
box8 = new Box(475,410,50,60);
box9 = new Box(525,410,50,60);
box10 = new Box(575,410,50,60);

box11 = new Box(475,350,50,60);
box12 = new Box(525,350,50,60);

box13 = new Box(500,290,50,60);

box14 = new Box(900,320,50,60);
box15 = new Box(950,320,50,60);
box16 = new Box(1000,320,50,60);
box17 = new Box(1050,320,50,60);
box18 = new Box(1100,320,50,60);

box19 = new Box(950,260,50,60);
box20 = new Box(1000,260,50,60);
box21 = new Box(1050,260,50,60);

box22 = new Box(1000,200,50,60);
}

function draw() {
background("#382C2C");
Engine.update(engine);
imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,60,60);
slingshot.display();
ground1.display();
ground2.display();

fill("lightgreen");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

fill("pink");
box7.display();
box8.display();
box9.display();
box10.display();

fill("magenta");
box11.display();
box12.display();

fill("#87CEEA");
box13.display();

fill("#63E1D1");
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

fill("#F6BFCA");
box19.display();
box20.display();
box21.display();

fill("#808080");
box22.display();
} 

function mouseDragged(){
   Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

