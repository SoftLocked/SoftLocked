class Life {

    constructor(scale, percentAlive, wid, hei) {

        this.scale = scale;
        this.percentAlive = percentAlive;

        this.gameBoard = [];

        

        this.counter = 0;

        this.width = wid;
        this.height = hei;

        this.calcBoard();

    }

    calcBoard() {
        
        this.gameBoard = [];

        for (let i = 0; i < this.width/this.scale; i++) {
            this.gameBoard[i] = [];
            for (let j = 0; j < this.height/this.scale; j++) {
                let randomSave = floor(101*Math.random());
                if (randomSave > this.percentAlive) {
                    this.gameBoard[i].push(false);
                } else {
                    this.gameBoard[i].push(true);
                }
            }
        }
    }

    show() {
        noStroke();

        for (let i = 0; i < this.gameBoard.length; i++) {
            for (let j = 0; j < this.gameBoard[0].length; j++) {
                if (this.gameBoard[i][j]) {
                    if (i > (this.gameBoard.length-1)/2) {
                        fill(255);
                    } else {
                        fill(146,212,236);
                    }
                } else {
                    fill(0);
                }
                rect(i*this.scale, j*this.scale, this.scale, this.scale);
            }
        }
    }

    step() {
        let futureState = [];

        for (let i = 0; i < this.width/this.scale; i++) {
            futureState[i] = [];
            for (let j = 0; j < this.height/this.scale; j++) {
                let randomSave = floor(101*Math.random());
                    futureState[i].push(false);
            }
        }


    
        for(let i = 0; i < this.gameBoard.length; i++) {
            for(let j = 0; j < this.gameBoard[0].length; j++) {
            
                let neighbors = 0;
                
                //Top left
                if (i > 0 && j > 0 && this.gameBoard[i-1][j-1]){ neighbors++; }
                //Top
                if (j > 0 && this.gameBoard[i][j-1]){ neighbors++; }
                //Top right
                if (i < this.gameBoard.length-1 && j > 0 && this.gameBoard[i+1][j-1]){ neighbors++; }
                //Right
                if (i < this.gameBoard.length-1 && this.gameBoard[i+1][j]){ neighbors++; }
                //Bottom right
                if (i < this.gameBoard.length-1 && j < this.gameBoard[0].length-1 && this.gameBoard[i+1][j+1]){ neighbors++; }
                //Bottom
                if (j < this.gameBoard[0].length-1 && this.gameBoard[i][j+1]){ neighbors++; }
                //Bottom left
                if (i > 0 && j < this.gameBoard[0].length-1 && this.gameBoard[i-1][j+1]){ neighbors++; }
                //Left
                if (i > 0 && this.gameBoard[i-1][j]){ neighbors++; }
                
                if (this.gameBoard[i][j]) {
                
                if (neighbors < 2) {
                    futureState[i][j] = false;
                } else if (neighbors > 3) {
                    futureState[i][j] = false;
                } else {
                    futureState[i][j] = true;
                }
                
                } else {
                
                if (neighbors == 3) {
                    futureState[i][j] = true;
                } else {
                    futureState[i][j] = false;
                }
                
                }
                
                
                
            }
        }
        this.gameBoard = futureState;
    }

    addCells() {


        try {
            //this.gameBoard[round(mouseX/this.scale)-1][round(mouseY/this.scale)-1] = true;
            this.gameBoard[round(mouseX/this.scale)-1][round(mouseY/this.scale)] = true;
            //this.gameBoard[round(mouseX/this.scale)-1][round(mouseY/this.scale)+1] = true;

            this.gameBoard[round(mouseX/this.scale)][round(mouseY/this.scale)-1] = true;
            this.gameBoard[round(mouseX/this.scale)][round(mouseY/this.scale)-1] = true;

            //this.gameBoard[round(mouseX/this.scale)+1][round(mouseY/this.scale)-1] = true;
            this.gameBoard[round(mouseX/this.scale)+1][round(mouseY/this.scale)] = true;
            //this.gameBoard[round(mouseX/this.scale)+1][round(mouseY/this.scale)+1] = true;

            

            // this.gameBoard[floor(mouseX/this.scale)-1][floor(mouseY/this.scale)+3] = true;
            // this.gameBoard[floor(mouseX/this.scale)-1][floor(mouseY/this.scale)+2] = true;
            // this.gameBoard[floor(mouseX/this.scale)-1][floor(mouseY/this.scale)+1] = true;

            // this.gameBoard[floor(mouseX/this.scale)][floor(mouseY/this.scale)+3] = true;
            // this.gameBoard[floor(mouseX/this.scale)][floor(mouseY/this.scale)+1] = true;

            // this.gameBoard[floor(mouseX/this.scale)+1][floor(mouseY/this.scale)+3] = true;
            // this.gameBoard[floor(mouseX/this.scale)+1][floor(mouseY/this.scale)+2] = true;
            // this.gameBoard[floor(mouseX/this.scale)+1][floor(mouseY/this.scale)+1] = true;

        } catch(e) {

        }

    }



}