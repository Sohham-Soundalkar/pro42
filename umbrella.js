class Umbrella{

  constructor(x,y){
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,options);
      this.body.image = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png",);
      this.body.image.setScale = 2;
      World.add(world,this.body);
  }
  display(){
      imageMode(CENTER);
      var pos = this.body.position;
      image(this.body.image, pos.x, pos.y, 400, 600);
  }
}