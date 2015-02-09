var person = {
  name: "Tom",
  scores: [1, 2, 3],
  books: [
    {name: "wpf"},
    {name: "javascript"}
  ],
  say: function(){
    console.log('hello');
  }
};

for(var s in person){
  console.log("---");
  console.log(s);
  console.log(person.hasOwnProperty(s));
  if(person.hasOwnProperty(s)){
    console.log(person[s]);
    console.log(typeof person[s]);
    console.log(Object.prototype.toString.call(person[s]));
    console.log(person[s].constructor.name);
  }
  console.log("===");
}
