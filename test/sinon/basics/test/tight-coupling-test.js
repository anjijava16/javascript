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
describe('coupling tests', function () {
  describe('product code', function () {
    it('library.displayBooks()', function () {
      library.displayBooks('js');
    });
  });
  describe('mock', function () {
    it('mock: when arg1="js", returns mock data', function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      // mock dataAccess.getBooks withArgs='js' returns mock data
      var mock = sinon.mock(dataAccess);
      mock.expects('getBooks').withArgs('js').returns(mockData)
      assert.equal(library.displayBooks('js')[0], mockData[0]);
      mock.restore();
    });
  });
  describe('sandbox mock', function () {
    it('FAIL EXPECTED: dataAccess.getBooks("js_x") is never called', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      this.mock(dataAccess).expects('getBooks').withArgs('js_x').returns(mockData);
      library.displayBooks('js');
    }));
    it('sandbox mock: when arg1=undefined, returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // mock dataAccess.getBooks withArgs=undefined returns mock data
      this.mock(dataAccess).expects('getBooks').withArgs().returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
  });
  describe('sandbox stub', function () {
    it('stub: when arg1="js", returns mock data', sinon.test(function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      // mock dataAccess.getBooks withArgs='js' returns mock data
      this.stub(dataAccess, 'getBooks').withArgs('js').returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
    it('stub: when arg1=undefined, returns mock data', sinon.test(function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // mock dataAccess.getBooks withArgs=undefined returns mock data
      this.stub(dataAccess, 'getBooks').withArgs().returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
    }));
  });
  describe('stub', function () {
    it('stub: when arg1="js", returns mock data', function () {
      var mockData = ['mock-js-book-1', 'mock-js-book-2', 'mock-js-book-3'];
      // mock dataAccess.getBooks withArgs='js' returns mock data
      var stub = sinon.stub(dataAccess, 'getBooks');
      stub.withArgs('js').returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
      stub.restore();
    });
    it('stub: when arg1=undefined, returns mock data', function () {
      var mockData = ['mock-book-1', 'mock-book-2', 'mock-book-3'];
      // mock dataAccess.getBooks withArgs=undefined returns mock data
      var stub = sinon.stub(dataAccess, 'getBooks');
      stub.withArgs().returns(
        mockData
      )
      assert.equal(library.displayBooks('js')[0], mockData[0]);
      stub.restore();
    });
  });
});
