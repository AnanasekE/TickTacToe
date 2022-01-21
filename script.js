var field = ['','','','','','','','','']
//           0  1  2  3  4  5  6  7  8

var player = 0;

function move(event) {
    var id = event.target.id
    if (id) {
        
        if (field[id]) {
            return;
        }
        
        if (player){
            field[id] = 'O'
            player = 0
            console.log(field);
            return
        } 
        if (!player) {
            field[id] = 'X'
            player = 1
            console.log(field);
            return
        }
        
    }
}