var names = ['Dan','Jenny','Enid'];
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name+'!'
// console.log(returnMe('Dan'));

// var person = {
//   name: 'Dan',
//   greet: function(){
//     names.forEach( (name) => {
//     console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// function add (a,b){
//   return a+b;
// };

var addNumbers = (a,b) => {return(a+b)};

console.log(addNumbers(3,4));
