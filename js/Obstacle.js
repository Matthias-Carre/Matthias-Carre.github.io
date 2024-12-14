export default class Obstacle {
    constructor(x, y, position,color) {
      this.x = x; 
      this.y = y; 
      this.position = position; 
      this.color = color;
      this.move = false;
      this.path = [{...position}, {x:x+500,y:y+20}]; //[0] orginie [1] destination
      this.direction = 1; //1 vers la destiantion 0 vers l'origine
      this.UpDown = false; //vrai si haut pas faux si droite gauche

    }

    colisionPlayer(player) {
        return !(
          player.x_axis + player.width < this.position.x || 
          player.x_axis > this.position.x + this.x || 
          player.y_axis + player.height < this.position.y || 
          player.y_axis > this.position.y + this.y
        );
      }

    setMove(isUpDown) {
        this.move = true;
        this.UpDown = isUpDown;
    }

    draw(ctx) {
        if (this.move) {
            //console.log("moving",this.move,"x",this.position.x,"ax",this.path[0].x,"bx",this.path[1].x);
            if (this.UpDown) {
                if (this.direction) {
                    this.position.y += 5;
                    if (this.position.y >= this.path[1].y) {
                        this.direction = 0;
                    }
                } else {
                    this.position.y -= 5;
                    if (this.position.y <= this.path[0].y) {
                        this.direction = 1;
                    }
                }
            } else {
                if (this.direction) {
                    this.position.x += 5;
                    if (this.position.x >= this.path[1].x) {
                        this.direction = 0;
                    }
                } else {
                    this.position.x -= 5  ;
                    if (this.position.x <= this.path[0].x) {
                        this.direction = 1;
                    }
                }
            }
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.x, this.y);
        ctx.fill();
        ctx.closePath();

    }
}
