var cheerio = require('cheerio'),
  $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');

//console.log('#Selectors');
//console.log('##$( selector, [context], [root] )');
//console.log($('.apple', '#fruits').text());
//console.log($('ul .pear').attr('class'));
//console.log($('li[class=orange]').html());
//
//console.log('#Attributes');
//console.log('##.attr( name, value )');
//console.log($('ul').attr('id'));
//console.log($('.apple').attr('id', 'favorite').html());
//
//console.log('##.data( name, value )');
//console.log($('<div data-apple-color="red"></div>').data());
//console.log($('<div data-apple-color="red"></div>').data('appleColor'));
//var apple = $('.apple').data('kind', 'mac');
//console.log(apple.data('kind'));

console.log('#Traversing');
console.log('##.find(selector) .find(selection) .find(node)');
console.log($('#fruits'));
console.log($('#fruits').html());
//console.log($('#fruits').find('li').length);
//console.log($('#fruits').find($('.apple')).length);
