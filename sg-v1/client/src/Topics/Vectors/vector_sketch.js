export default function vectorSketch(p){
    var ball
    var vX = 2.5
    var vY = -2
    var velocity = p.createVector(vX, vY)
    var location = p.createVector(p.width/2, p.height/2)

    p.setup = function(){
        p.createCanvas(p.windowWidth, p.windowHeight -50)
        
        ball = new Ball(location, velocity)
    }
    
    p.draw = function(){
        p.background(255)
        ball.move()
        ball.bounce()
        ball.display()
    }


    function Ball(location, velocity){

        this.move = function(){
            location = location.add(velocity)
        }
        this.bounce= function(){
            if((location.x > p.width) || (location.x < 0)){
                velocity.x = velocity.x * -1
            }
            if((location.y > p.height) || (location.y < 0)){
                velocity.y = velocity.y * -1
            }
        }
        this.display = function(){
            p.stroke(0)
            p.strokeWeight(2)
            p.fill(127)
            p.ellipse(location.x, location.y, 48, 48)   
        }
    }
}