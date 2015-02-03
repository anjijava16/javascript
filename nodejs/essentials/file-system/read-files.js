var fs = require('fs'),
  args;
args = process.argv.splice(2);
args.forEach(function(arg){
  //async read
  fs.readFile(arg, 'utf8', function(err, data) {
    if (err) console.log(err);
    console.log(data);
    // replace newline with space - replace(/(\r\n|\n|\r)/gm, " ")
    console.log(data.replace(/(\r\n|\n|\r)/gm, " ").toLowerCase().split(" "));

  });
  //synchronicity
  //var file = fs.readFileSync(arg, 'utf8');
  //console.log(file);
  ////with a readable stream
  //var readstrm = fs.createReadStream(arg, {flag: 'r', encoding: 'utf8'});
  //readstrm.on('data', function(d) {
  //  console.log(d);
  //});
});
