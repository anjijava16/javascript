/*
http://stackoverflow.com/questions/1068834/object-comparison-in-javascript

output:
pass

 */
var p1 = {
    'p1': 'value1',
    'p2': 'value2'
};

var p2 = {
    'p1': 'value1',
    'p2': 'value2'
};

if(JSON.stringify(p1) === JSON.stringify(p2)){
    console.log('pass');
}
else{
    console.log('fail');
}
