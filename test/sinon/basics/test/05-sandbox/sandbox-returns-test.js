var assert = require('assert');
var sinon = require('sinon');
var dataAccess = {
  getBooks: function (type) {
    // get books from database. it could take long time to run.
    if (type === 'js') {
      return ['js-book-1', 'js-book-2', 'js-book-3'];
    }
    else {
      return ['book-1', 'book-2', 'book-3'];
    }
  }
}
var library = {
  displayBooks: function (type) {
    // not able to replace dataAccess due to tight coupling line below
    var books = dataAccess.getBooks(type);
    console.log(books);
    books.forEach(function (book) {
      console.log(book);
    });
    return books;
  }
}
describe('sandbox returns tests', function () {
  describe('product code', function () {
    it('library.displayBooks()', function () {
      library.displayBooks('js');
    });
  });
  describe('mock', function () {
    it('FAIL EXPECTED: dataAccess.getBooks("js_x") is never called', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      this.mock(dataAccess).expects('getBooks').withArgs('js_x').returns(mockData);
      library.displayBooks('js');
    }));
    it('when arg1="js", returns mock data', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      // mock dataAccess.getBooks withArgs='js' returns mock data
      this.mock(dataAccess).expects('getBooks').withArgs('js').returns(mockData);
      library.displayBooks('js');
    }));
    it('when arg1=undefined, returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // mock dataAccess.getBooks withArgs=undefined returns mock data
      this.mock(dataAccess).expects('getBooks').withArgs().returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
  });
  describe('stub', function () {
    it('FAIL EXPECTED: dataAccess.getBooks("js_x") is never called', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      this.stub(dataAccess, 'getBooks').withArgs('js_x').returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
    it('when arg1="js", returns mock data', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      // mock dataAccess.getBooks withArgs='js' returns mock data
      this.stub(dataAccess, 'getBooks').withArgs('js').returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
    it('when arg1=undefined, returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // mock dataAccess.getBooks withArgs=undefined returns mock data
      this.stub(dataAccess, 'getBooks').withArgs().returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
  });
  describe('spy does not need sandbox because it does not need cleanup', function () {
    it('when arg1="js", returns mock data', function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      var spy = sinon.spy(dataAccess, 'getBooks').withArgs('js');
      // will display mock data
      var books = library.displayBooks('js');
      console.log(books);
      assert(spy.called);
    });
  });
});
