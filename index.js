import Bugsnag from 'bugsnag-js';

Bugsnag.apiKey = '46bd863e71b3bce9e377fd6243d63346';
Bugsnag.notifyHandler = 'xhr';

let foo = 'bar';
const baz = 'qux';

Bugsnag.notify("ErrorName", "Test Error");

console.log('waeojraeorwjaejrow');

throw new Error('testytest');

foo = 'somethingelse';

console.log('do stuff');
