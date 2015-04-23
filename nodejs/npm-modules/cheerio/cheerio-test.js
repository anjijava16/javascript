var cheerio = require('cheerio'),
  $ = cheerio.load('<h2 class="title"><i>Hello world</i></h2>');

console.log($('h2.title').text());
console.log($('h2.title').html());
//$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

var htmlElement = $.html();
console.log(htmlElement);
