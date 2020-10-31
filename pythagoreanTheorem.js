const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


const result = input.map(coordinate=>{
  


  // assigning x^2+y^2 to z
  let z = Math.pow(coordinate.x,2) + Math.pow(coordinate.y,2);

  return Math.sqrt(z);
  
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);