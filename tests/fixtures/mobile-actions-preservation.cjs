const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fixture = require('./mobile-actions-baseline.json');
const hash = x => crypto.createHash('sha256').update(x).digest('hex');
function normalizeMobile(file, input) {
  let source = input.toString();
  if (file === 'components/Header.tsx') {
    assert.equal(hash(fixture.header), fixture.headerSha256, 'authentic approved-base header');
    for (const { before, after } of [...fixture.changes].reverse()) {
      assert.ok(after.length > 0, 'each allowed change has exact candidate bytes');
      assert.equal(source.split(after).length, 2, 'unique authorized header hunk');
      source = source.replace(after, before);
    }
    assert.equal(source, fixture.header, 'no changes outside approved header hunks');
  }
  if (file === 'app/globals.css') {
    assert.equal(source, fixture.globals + fixture.cssAddition, 'only exact appended dock CSS');
    source = fixture.globals;
  }
  return source;
}
module.exports = { normalizeMobile };
