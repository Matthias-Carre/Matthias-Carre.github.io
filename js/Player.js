export default class Player {  
  constructor(color, x_axis, y_axis, width, height) {
    this.color = color;

    this.orignie = {x:x_axis,y:y_axis};
    //this.life = life;
    //this.points = points;
    //this.speed = speed;
    this.x_axis = x_axis;
    this.y_axis = y_axis;
    this.previous_x_axis = x_axis;
    this.previous_y_axis = y_axis;
    this.width = width;
    this.height = height;
    this.isMoving = true;
    this.isCloinding = false;
  }
  setOriginie(x,y){
    this.orignie.x = x;
    this.orignie.y = y;
  }
  stopMoving() {
    this.isMoving = false;
  }

  setXaxis(posX){
    this.previous_x_axis = this.x_axis;
    this.x_axis = posX;
  }
  setYaxis(posY){
    this.previous_y_axis = this.y_axis;
    this.y_axis = posY;
  }
  getXPrevus(){
    return this.previous_x_axis;
  }
  getYPrevus(){
    return this.previous_y_axis;
  }
  rollback(){
    this.x_axis = this.previous_x_axis;
    this.y_axis = this.previous_y_axis;
  }
  
  collidesWith(otherPlayer) {
    if(
      (this.x_axis + this.width) >= otherPlayer.x_axis && 
      this.x_axis <= (otherPlayer.x_axis + otherPlayer.width) &&
      (this.y_axis + this.height) >= otherPlayer.y_axis &&
      this.y_axis <= (otherPlayer.y_axis + otherPlayer.height)
    )
    {
      return true;
    }
  }
  
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.x_axis, this.y_axis, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
};
