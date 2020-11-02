



const middle = function(arr) {
  let middleEl = Math.floor(arr.length / 2);
  let newArr = [];

  // console.log(middleEl);
  // console.log(arr[middleEl]);

  if (arr.length === 1 || arr.length === 2) {
    return newArr;

  } else if (arr.length % 2 === 0) {
    newArr.push(arr[middleEl - 1], arr[middleEl]);

  } else {
    newArr.push(arr[middleEl]);
  }

  return newArr;
};

module.exports =  middle;


