// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  if(dest >= 42) {
    return dest-42
  } else {
    return 42-dest
  }
}

function distanceFromHqInFeet(dest) {
  return distanceFromHqInBlocks(dest) * 264
}

function distanceTravelledInFeet(dest1, dest2) {
  if(des1t >= dest2) {
    return dest-dest2
  } else {
    return dest2-dest1
  }
}