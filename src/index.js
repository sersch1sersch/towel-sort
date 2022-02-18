


module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return []
  }

  matrix.forEach((x, y) => {
    if(y %2 === 0){
     x.sort((a,b) => a-b)
    } else{
     x.sort((a,b) => b-a);
    }
  });
  return matrix.flat();
}

