class Bin {
  constructor(x, y, width, height) {
    var options = {
       isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    strokeWeight(3);
    stroke ("pink");
    push ();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rect(0,0, this.width, this.height);
    pop();
  }
};
