class Block {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
        push() 
        translate(pos.x,pos.y)
        strokeWeight(3)
        fill(  "red")
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
      }
       
      
    }
  