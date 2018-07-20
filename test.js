const assert = require('assert');
const mw = require('./index.js');


let testName = 'Should convert response body to camelcase on send';
try {
    const input = {
        "some_key": "blabla"
    };
    const expectedOutput = {
        "someKey": "blabla"
    };

    const response = {
        send: output => {
            actualOutput = output;
        }
    };

    let nextCalled = false;
    const next = () => nextCalled = true;

    mw()({}, response, next);

    response.send(input);

    assert.ok(nextCalled);
    assert.deepStrictEqual(expectedOutput, actualOutput);

    console.log(testName + ': OK');
} catch (e) {
    console.log(testName + ': FAILED', e);
}
