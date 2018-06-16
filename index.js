// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  if(dest >= 42) {
    return dest-42;
  } else {
    return 42-dest;
  }
}

function distanceFromHqInFeet(dest) {
  return distanceFromHqInBlocks(dest) * 264;
}

function distanceTravelledInFeet(dest1, dest2) {
  if(dest1 >= dest2) {
    return (dest1-dest2)*264;
  } else {
    return (dest2-dest1)*264;
  }
}

function calculatesFarePrice(start, end){
  let dist = distanceTravelledInFeet(start, end);
  if (dist <= 400) {
    return "This one is one us!";
  } else if (dist <= 2000) {
    return "You owe #{(dist-400)*.02}"
  }
}
