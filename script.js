var field = ['','','','','','','','','']
//           0  1  2  3  4  5  6  7  8

var wins = [
    [0,1,2],// poziome
    [3,4,5],// poziome
    [6,7,8],// poziome
    [0,3,6],// pionowe
    [1,4,7],// pionowe
    [2,5,8],// pionowe
    [0,4,8],// skośne
    [2,4,8],// skośne
]

var player = 0;
var player0sign = 'O';
var player1sign = 'X';

function move(event) {
    var id = event.target.id
    var elem = document.getElementById(id)
    
    if (id) {
        
        if (field[id]) {
            return;
        }
        
        if (player){
            field[id] = player0sign
            elem.innerHTML = player0sign
            player = 0
            console.log(field);
            return
        } 
        if (!player) {
            field[id] = player1sign
            elem.innerHTML = player1sign
            player = 1
            console.log(field);
            return
        }
        
    }
}
function checkWin() {
    console.log('check win')
}