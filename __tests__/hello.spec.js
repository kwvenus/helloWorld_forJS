const hello = require('../hello');

it ('should returns hello', function(){
    expect(hello()).toBe("Hello");
});