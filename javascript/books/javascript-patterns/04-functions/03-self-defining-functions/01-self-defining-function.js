var scareMe = function(){
  console.log("Boo!");
  scareMe = function(){
    console.log("Double boo!");
  };
};

scareMe();  // Boo!
scareMe();  // Double boo!
