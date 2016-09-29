'use strict';

var api = require('../../../');

var constant = function (value) {
    return function () {
        return value;
    }
};

describe('Working properly', function () {
    describe('method: username', function () {
        it('should return undefined when username length is 0', function () {
            expect(api.username('')).toEqual(undefined);
        });
    });
});
