class Ground {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      strokeWeight(3);
      stroke ("orange");
      push ();
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  