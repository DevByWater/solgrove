import sketches from '../Topics/sketches'
function sketchFetcher(str){
    switch(str){
        case 'vectors':
            return sketches.Vectors
        case 'solar-system':
            return sketches.SolarSystem
        case 'snake-game':
            return sketches.SnakeGame
        default:
            return new Error('Route not available')
    }
}

export default sketchFetcher