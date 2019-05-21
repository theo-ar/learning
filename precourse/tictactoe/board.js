class Board {   
    constructor() {
        this.grid = [0,0,0,0,0,0,0,0,0];
    }

    print() {
        let a = this.whichMark(0)();
        let b = this.whichMark(1)();
        let c = this.whichMark(2)();
        let d = this.whichMark(3)();
        let e = this.whichMark(4)();
        let f = this.whichMark(5)();
        let g = this.whichMark(6)();
        let h = this.whichMark(7)();
        let i = this.whichMark(8)();
        var stringifyGrid = a + ' | ' + b + ' | ' + c + '\n' +
            '----------' + '\n' +
            d + ' | ' + e  + ' | ' + f + '\n' +
            '----------' + '\n' +
            g + ' | ' + h  + ' | ' + i + '\n' ;
        console.log(stringifyGrid)
    }

    whichMark(pos) {
        var mark = " ";
        var g = this.grid
        return function() {
          if(g[pos] === 1) mark = 'X';
          if (g[pos] === 2) mark = 'O';
          return mark;
        } 
    }


    won() {
        let g = this.grid;

        // Horizontal
        if (g[0] === g[1] && g[1] === g[2] && g[0] != 0) return true;
        if (g[3] === g[4] && g[4] === g[5] && g[3] != 0) return true;
        if (g[6] === g[7] && g[7] === g[8] && g[6] != 0) return true;

        // Vertical
        if (g[0] === g[3] && g[3] === g[6] && g[0] != 0) return true;
        if (g[1] === g[4] && g[4] === g[7] && g[1] != 0) return true;
        if (g[2] === g[5] && g[5] === g[8] && g[2] != 0) return true;

        // Diagonal
        if (g[0] === g[4] && g[4] === g[8] && g[4] != 0) return true;
        if (g[2] === g[4] && g[4]=== g[6] && g[4] != 0) return true;

        return false;
    }

    isOver() {
        if (this.won()) {
            return true;
        } else if (!this.grid.includes(0)) {
            return true;
        }
        return false;
    }

    place_mark(pos, mark) {
        if (this.empty(pos)){
            this.grid[pos] = mark;
        }
    }

    empty(pos) {
        return (this.grid[pos] === 0)
    }
}

module.exports = Board;