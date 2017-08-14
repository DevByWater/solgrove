export default function solar_system_sketch(p){
    let sun
    p.setup = function(){
        p.createCanvas(p.windowWidth, p.windowHeight)
        sun = new Planet(50, 20)
    }
    p.draw = function(){
        p.background(0)
        p.translate(p.windowWidth/2, p.windowHeight/2)
        sun.show()
    }


    class CellestialBody {
        constructor(type, name, posX, posY, radius, dist, density, mass){
            this.position = p.createVector(posX, posY)
            this.name = name
            this.distance = dist || 5
            this.radius = radius
            this.velocity = p.createVector(0,0)
            this.acceleration = p.createVector(0,0)
            this.angle = 0
            this.density = density
            this.mass = mass
            this.satellites = []
            this.satelliteCount = this.satellites.length
            this.object_type = this._getObjectType(type)
        }
        show(){
            p.fill(255)
            p.ellipse(0, 0, this.radius*2, this.radius*2)
        }

        _getObjectType(str){
            switch(str.lowercase().trim()){
                case 'planet':
                    return 'planet'
                case 'moon':
                    return 'moon'
                case 'star':
                    return 'star'
                default:
                    return new Error('Enter "moon", "planet", or "star"')
            }
        }
        _applyForce(force){
            let f = p.Vector().div(force, this.mass)
            acceleration.add(f)
        }
        _
    }
}


