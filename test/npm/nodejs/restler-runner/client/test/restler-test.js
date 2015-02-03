var assert = require('chai').assert;
var rest = require('restler');

describe('Test examples', function () {
    it('should GET simple rest api', function (done) {
        rest.get('http://localhost:3000/')
            .on('complete', function (result) {
                if (result instanceof Error) {
                    console.log('Error:', result.message);
                    assert.throw(result.message);
                }
                else {
                    console.log(result);
                    assert.equal(result, 'home', 'server does not return "home"');
                }
                done();
            });
    });

    it('should GET URL query parameters rest api', function (done) {
        rest.get('http://localhost:3000/search-result?q=JavaScript&l=CA&e=10')
            .on('complete', function (result) {
                if (result instanceof Error) {
                    console.log('Error:', result.message);
                    assert.throw(result.message);
                }
                else {
                    console.log(result);
                    console.log(result.q);
                    assert.equal(result.q, 'JavaScript', 'result.q is not "JavaScript"');
                }
                done();
            });
    });

    it('should POST rest api', function (done) {
        rest.post('http://localhost:3000/signup', {
            data: {
                "email": "tom@gmail.com",
                "name": "Tom"
            }
        }).on('complete', function (data, response) {
            console.log(data);
            console.log(data.name);
            assert.equal(data.name, 'Tom', 'name is not "Tom"');

            console.log(response.statusCode);
            assert.equal(response.statusCode, 200, 'response.statusCode is not 200');
            done();
        });
    });

    it('should do a synchronous test', function () {
        assert.ok(true);
    });

    it('should do an asynchronous test', function (done) {
        setTimeout(function () {
            assert.ok(true);
            done();
        }, 15);
    });
});
