const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;


   
   var engine, world;
    var hammer;
    function setup(){



    Plane = new Plane(600,height,1200,20)
    Hammer = new Hammer(10,100);
    Stone=new Stone(20,50);
    Rubber=new Rubber (30,150);
    Iron=new Iron(40,120);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

Plane.display();
Hammer.display();
Stone.display();
Rubber.display();
Iron.display();

    
 
}