const parts = document.querySelectorAll(".parts");
const puzzles = document.querySelectorAll(".puzzle");


for (const part of parts){
part.addEventListener ("dragstart", dragStart);
part.addEventListener ("dragend", dragEnd);
}


function dragStart (){
    //console.log("start");
    this.className += " hold";
    let self = this;
    setTimeout(() => {
        self.className = "invisible"
    }, 0);
}

function dragEnd (e){
    //console.log("end");
    e.target.className = 'parts part1';
    
}


for (const puzzle of puzzles){
    puzzle.addEventListener('dragover', dragOver);
    puzzle.addEventListener('dragenter', dragEnter);
    puzzle.addEventListener('dragleave', dragLeave);
    puzzle.addEventListener('drop', dragDrop);
}

function dragOver (e){
    e.preventDefault()
    //console.log("over")
}

function dragEnter (e){
    e.preventDefault()
    //console.log("enter")
    this.className += " hovered"
}

function dragLeave (e){
    e.preventDefault()
    //console.log("leave")
    this.className = "puzzle"
}

function dragDrop (e){
    e.preventDefault()
    //console.log("Drop")
    this.className = "puzzle"
}