// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break
    case "E":
      rover.direction = "N";
      break
    default:
      rover.direction = "W";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break
    case "W":
      rover.direction = "N";
      break
    default:
      rover.direction = "E";
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  rover.travelLog.push([rover.x, rover.y])
  switch(rover.direction) {
    case "E":
      if (rover.x < 9) rover.x += 1;
      break
    case "W":
      if (rover.x > 0) rover.x -= 1;
      break
    case "S":
      if (rover.y < 9) rover.y += 1;
      break
    default:
      if (rover.y > 0) rover.y -= 1;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  rover.travelLog.push([rover.x, rover.y])
  switch(rover.direction) {
    case "E":
      if (rover.x > 0) rover.x -= 1;
      break
    case "W":
      if (rover.x < 9) rover.x += 1;
      break
    case "S":
      if (rover.y > 0) rover.y -= 1;
      break
    default:
      if (rover.y < 9) rover.y += 1;
  }
}

function commands(string) {
  console.log("commands was called")
  for (let i=0; i<string.length; i++) {
    if (string[i] === "r") {
      turnRight(rover);
    } else if (string[i] === "l") {
      turnLeft(rover);
    } else if (string[i] === "f") {
      moveForward(rover)
    } else if (string[i] === "b") {
      moveBackward(rover)
    } else {
      continue;
    }
  }
}






