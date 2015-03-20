var obj = {
  get foo(){
    return 'getter';
  },
  set foo(value){
    console.log('setter: ' + value);
  }
};

obj.foo = 'bla';   // setter: bla
console.log(obj.foo);   // getter
