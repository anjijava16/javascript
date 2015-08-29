var tlds = ['tom', 'dick', 'tom', 'harry'];
var buffer = [];
var dups = [];
for(var i = 0; i < tlds.length - 1; i++){
    var item = tlds[i];
    if(buffer.indexOf(item) > -1){
        dups.push(item);
    }
    else{
        buffer.push(item);
    }
}

console.log(buffer);
console.log(dups);
