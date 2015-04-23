var cheerio = require('cheerio'),
  $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');

console.log($('h2.title').innerHTML);
//$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

var htmlElement = $.html();
console.log(htmlElement);
