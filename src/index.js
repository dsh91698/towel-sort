
// You should implement your task here.

module.exports = function towelSort(matrix) {
  var rez = [];
  if(!matrix) {return rez}

  matrix.forEach( (el, index) => {
    if (!(index % 2)) {
     // console.log('! case', index, el);
      rez = rez.concat(el);
    //  console.log(rez);

    } else if (index % 2) {
   //   console.log('case', index, el);
      rez = rez.concat(el.reverse());
   //   console.log(rez);

    }

  });
  return rez;

};
