let canvas = document.getElementById('gs');
let gs = canvas.getContext('2d');

class GameClass{
    resetAndStart(){
        gs.strokeStyle = "white"
        gs.lineWidth = 10

        gs.clearRect(0, 0, gs.width, gs.height);
        gs.moveTo(10, 20)
        gs.lineTo(10, 80)
        gs.stroke()
    }
}

let activateGame = new GameClass();

activateGame.resetAndStart(gs);