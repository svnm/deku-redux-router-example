import test from 'ava'
import {isEmptyString, isEmpty, toPercent} from '../utils'

test('util isEmptyString returns true for empty string', t => {
    t.is(isEmptyString(''), true)
});

test('util isEmpty returns true for empty object', t => {
    t.is(isEmpty({}), true)
});

test('util toPercent returns a string percentage from a decimal', t => {
    t.same(toPercent(0.83), '83%')
});
