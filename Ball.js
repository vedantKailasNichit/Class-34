class Ball{
    constructor(x,y,w,h){
        var options ={
            density: 1,
            frictionAir: 0.005,
            restitution: 1
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.anglel;
        var pos = this.body.position;
        push();
        fill('grey')
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0,0,this.w,this.h);
        pop();
    }
}