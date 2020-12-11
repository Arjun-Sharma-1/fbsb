class Ball {
    constructor(x, y, width, height) {
      var options = {
         restitution:0.4,
         friction:0.5,
         density:1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      strokeWeight(3);
      stroke ("pink");
      push ();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      ellipse(0,0, this.width, this.height);
      pop();
    }
  };
  