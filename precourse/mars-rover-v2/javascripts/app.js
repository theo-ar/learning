// Rover Object Goes Here
function createRover(name, x,y) {
  return {
    name,
    direction: "N",
    x,
    y,
    travelLog: [],
    turnLeft: function(){
      console.log("turnLeft was called!");
      switch(this.direction) {
        case "W":
          this.direction = "S";
          break;
        case "S":
          this.direction = "E";
          break
        case "E":
          this.direction = "N";
          break
        default:
          this.direction = "W";
      }
    },
    
    turnRight: function(){
      console.log("turnRight was called!");
      switch(this.direction) {
        case "E":
          this.direction = "S";
          break;
        case "S":
          this.direction = "W";
          break
        case "W":
          this.direction = "N";
          break
        default:
          this.direction = "E";
      }
    },
    
    moveForward: function(map){
      console.log("moveForward was called")
      var track_x = this.x, track_y = this.y;

      switch(this.direction) {
        case "E":
          if (this.x < 9 && map[this.x+1][this.y] == 0) this.x += 1;
          break
        case "W":
          if (this.x > 0 && map[this.x-1][this.y] == 0) this.x -= 1;
          break
        case "S":
          if (this.y < 9 && map[this.x][this.y+1] == 0) this.y += 1;
          break
        default:
          if (this.y > 0 && map[this.x][this.y-1] == 0) this.y -= 1;
      }
      this.handleObsticle(track_x, track_y) 
    },
    
    moveBackward: function(map){
      console.log("moveBackward was called")
      var track_x = this.x, track_y = this.y;

      switch(this.direction) {
        case "E":
          if (this.x > 0 && map[this.x-1][this.y] == 0) this.x -= 1;
          break
        case "W":
          if (this.x < 9 && map[this.x+1][this.y] == 0) this.x += 1;
          break
        case "S":
          if (this.y > 0 && map[this.x][this.y-1] == 0) this.y -= 1;
          break
        default:
          if (this.y < 9 && map[this.x][this.y+1] == 0) this.y += 1;
      }
      
      this.handleObsticle(track_x, track_y)
    },

    handleObsticle: function(old_x, old_y){
      '*Checks if rover moved, if so adds prev location to travelLog*'
      if(old_x != this.x || old_y != this.y){
        this.travelLog.push([old_x, old_y])
        console.clear()
      } else {
        console.clear()
        console.log("Encountered Obstacle!")
      }
    },
    
    placeOnMap: function(map){
      console.log("placeOnMap called")
      map[this.x][this.y] = this
    },

    clearRoverFromPos: function(map){
      console.log("clearRoverFromPos called")
      var prev_pos = this.travelLog[this.travelLog.length-1];
      if (typeof prev_pos != 'undefined') map[prev_pos[0]][prev_pos[1]] = 0;
    },

    commands: function(string, map) {
      console.log("commands was called")
      for (let i=0; i<string.length; i++) {
        switch(string[i]) {
          case "r":
            this.turnRight(map);
            break
          case "l":
            this.turnLeft(map);
            break
          case "f":
            this.moveForward(map);
            break
          case "b":
            this.moveBackward(map);
            break
          default:
            continue;
        }
      }
    },

    round: function(map) {
      console.log("round called")
      let moves = prompt("Type your moves");
      this.commands(moves,map);
      this.placeOnMap(map);
      this.clearRoverFromPos(map);
    }
  }
};

const rover1 = createRover("69",0,0);
const rover2 = createRover("r2d2",4,4);
const rover3 = createRover("c3po",7,7);
const rover4 = createRover("lgbt",9,9);
// ======================


function buildMap(width, height){
  '*2d grid with zeros and ones=>Obstacles*'
  console.log("Map has been built");
  var result = [];
  for (var i=0;i<width; i++) {
    result[i] = [];
    for (var j=0; j <height; j++) {
      result[i][j] = Math.floor(Math.random()*2); 
    }
  }
  return result;
};

function renderMap(map) {
  for (var i=0; i<map.length; i++){
    var s = "";
    for (var j=0; j<map[i].length; j++){
      if (typeof map[j][i] === "object") {
        s+= "R " 
      } else {
      s += map[j][i] + " ";
      }
    }
    console.log(s)
  }
};

// ======================

function initializeMap() {
  console.log("initializeMap called")
  var map = buildMap(10,10);
  for (let j=0; j <arguments.length; j++){
    arguments[j].placeOnMap(map)
  }
  renderMap(map);
  console.log("Starting positions, Enjoy:)")
  return map;
}

function quit(){
  let quit = prompt("End game? Y/n")
  return quit === "y".toLowerCase() ? true : false;
}

function play(...rovers) {
  console.log("play called")
  var map=initializeMap(...rovers)
  while (!quit()){
    for(let i=0; i < rovers.length; i++){
      alert(rovers[i].name.toUpperCase() + " your turn")
      rovers[i].round(map)
      renderMap(map);
    }
  }
  console.log("Thanks for palying :)")
}

play(rover1,rover2,rover3,rover4)





