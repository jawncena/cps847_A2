const sum = require('./index');

test('adds 1 + 2 to equal 3', async(done) => {
  expect(sum(1, 2)).toBe(3);
  done();
});