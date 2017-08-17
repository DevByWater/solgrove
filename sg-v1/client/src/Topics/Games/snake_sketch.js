

export default function snake_sketch(p){
    var s;
    var scl = 20;
    
    var food;
    var score;
    
    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight - 45);
      s = new Snake();
      p.frameRate(10);
      pickLocation();
    }
    
    function pickLocation() {
      var cols = p.floor(p.width/scl);
      var rows = p.floor(p.height/scl);
      food = p.createVector(p.floor(p.random(cols)), p.floor(p.random(rows)));
      food.mult(scl);
    }
    
    function mousePressed() {
      s.total++;
    }
    
    p.draw = function() {
      p.background(51);
    
      if (s.eat(food)) {
        pickLocation();
      }
      s.keyPressed();
      s.death();
      s.update();
      s.show();
      renderScore();
    
    
      p.fill(255, 0, 100);
      p.rect(food.x, food.y, scl, scl);
    }

    function keyPressed() {
        if (p.keyCode === p.UP_ARROW) {
            p.print("Up Arrow Pressed")
            s.dir(0, -1);
        } else if (p.keyCode === p.DOWN_ARROW) {
            p.print("Down Arrow Pressed")
            s.dir(0, 1);
        } else if (p.keyCode === p.RIGHT_ARROW) {
          s.dir(1, 0);
        } else if (p.keyCode === p.LEFT_ARROW) {
          s.dir(-1, 0);
        }
      }
    
    function renderScore(){
        p.text(s.total.toString(), 10, 30);
        p.fill(153, 80, 0);
    }
    

    function Snake() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
      
        this.eat = function(pos) {
          var d = p.dist(this.x, this.y, pos.x, pos.y);
          if (d < 1) {
            this.total++;
            return true;
          } else {
            return false;
          }
        }

        this.keyPressed = function() {
            if (p.keyCode === p.UP_ARROW) {
                p.print("Up Arrow Pressed")
                this.dir(0, -1);
            } else if (p.keyCode === p.DOWN_ARROW) {
                p.print("Down Arrow Pressed")
              this.dir(0, 1);
            } else if (p.keyCode === p.RIGHT_ARROW) {
              this.dir(1, 0);
            } else if (p.keyCode === p.LEFT_ARROW) {
              this.dir(-1, 0);
            }
          }
      
        this.dir = function(x, y) {
          this.xspeed = x;
          this.yspeed = y;
        }
      
        this.death = function() {
          for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = p.dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
              console.log('starting over');
              this.total = 0;
              this.tail = [];
            }
          }
        }
      
        this.update = function() {
          for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
          }
          if (this.total >= 1) {
            this.tail[this.total - 1] = p.createVector(this.x, this.y);
          }

          
      
          this.x = this.x + this.xspeed * scl;
          this.y = this.y + this.yspeed * scl;
      
          this.x = p.constrain(this.x, 0, p.width - scl);
          this.y = p.constrain(this.y, 0, p.height - scl);
        }
      
        this.show = function() {
          p.fill(255);
          for (var i = 0; i < this.tail.length; i++) {
            p.rect(this.tail[i].x, this.tail[i].y, scl, scl);
          }
          p.rect(this.x, this.y, scl, scl);
      
        }
      }
}