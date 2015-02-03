var assert = require('assert');
var sinon = require('sinon');
var dataAccess = {
  getBooks: function (type, fn) {
    // get books from database. it could take long time to run.
    if (type === 'js') {
      fn(null, ['js-book-1', 'js-book-2', 'js-book-3']);
    }
    else {
      fn(null, ['book-1', 'book-2', 'book-3']);
    }
  }
}
var library = {
  displayBooks: function (type) {
    var results = null;
    // not able to replace dataAccess due to tight coupling line below
    // but we can sinon to stub and mock dataAccess.getBooks()
    dataAccess.getBooks(type, function (error, books) {
      results = books;
      console.log('callback ' + books);
      books.forEach(function (book) {
        console.log(book);
      });
    });
    console.log('end');
    return results;
  }
}
describe('sandbox yields tests', function () {
  describe('product code', function () {
    it('library.displayBooks()', function () {
      // will display data from dataAccess.getBooks()
      var books = library.displayBooks('js');
      console.log('test ' + books);
    });
  });
  describe('mock', function () {
    it('FAIL EXPECTED: dataAccess.getBooks("js_x") is never called', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // sinon.match.func will find callback in getBooks()
      // yields() will invoke getBooks() callback function(error, books) error=null, books=mockData
      this.mock(dataAccess).expects('getBooks').withArgs('js_x', sinon.match.func).yields(null,
        mockData
      );
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert.equal(books[0], mockData[0]);
    }));
    it('when arg1="js", returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // sinon.match.func will find callback in getBooks()
      // yields() will invoke getBooks() callback function(error, books) error=null, books=mockData
      this.mock(dataAccess).expects('getBooks').withArgs('js', sinon.match.func).yields(null,
        mockData
      );
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert.equal(books[0], mockData[0]);
    }));
  });
  describe('stub', function () {
    it('FAIL EXPECTED: dataAccess.getBooks("js_x") is never called', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // sinon.match.func will find callback in getBooks()
      // yields() will invoke getBooks() callback function(error, books) error=null, books=mockData
      this.stub(dataAccess, 'getBooks').withArgs('js_x', sinon.match.func).yields(null,
        mockData
      );
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert.equal(books[0], mockData[0]);
    }));
    it('when arg1="js", returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // sinon.match.func will find callback in getBooks()
      // yields() will invoke getBooks() callback function(error, books) error=null, books=mockData
      this.stub(dataAccess, 'getBooks').withArgs('js', sinon.match.func).yields(null,
        mockData
      );
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert.equal(books[0], mockData[0]);
    }));
  });
  describe('spy does not need sandbox because it does not need cleanup', function () {
    it('when arg1="js", returns mock data', function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      var spy = sinon.spy(dataAccess, 'getBooks').withArgs('js', sinon.match.func);
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert(spy.called);
    });
  });
});
