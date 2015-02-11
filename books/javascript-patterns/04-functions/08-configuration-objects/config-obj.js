function addPerson(conf){
  this.username = conf.username;
  this.first = conf.first;
  this.last = conf.last;
  console.log(this.username + ": " + this.first + " " + this.last);
}

var conf = {
  username: "batman",
  first: "Bruce",
  last: "Wayne"
};

addPerson(conf);
