class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }

       // this.mango=loadImage("images/mango.jpg");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
    }
    display(){
        //imageMode(CENTER);
        //image(this.mango,200,740,20,20);
        fill("blue");
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this,height);
        
    }
}