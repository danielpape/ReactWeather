function addPromise (a,b){
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
    reject('Not numbers');
    }
  });
}

addPromise(1,'banana').then(function (total){
  console.log('promise success',total);
}, function(err){
  console.log('promise error',err);
});
