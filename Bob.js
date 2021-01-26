class Bob{
        constructor(x,y,radius,circle){
            var options = {
                'restitution':0.5,
                'friction':0.3,
                'density':1.2,
                'isStatic': false,
            }
            this.body = Bodies.circle(x,y,70,circle,options);
            this.radius = 70;
            World.add(world, this.body);
        }
    }
    display() 
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
         
    }
