// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Phone
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('fails an incorrect phone number with digits and letters', () => {
  expect(isPhoneNumber('123-456-HELLO')).toBe(false);
});
test('fails an incorrect phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

//Email

test('valid email', () => {
  expect(isEmail('wsugiarto@ucsd.edu')).toBe(true);
});
test('valid phone part 2', () => {
  expect(isEmail('willy23121@gmail.com')).toBe(true);
});
test('invalid email with no @', () => {
  expect(isEmail('wilson gmail.com')).toBe(false);
});
test('invalid email with just a word', () => {
  expect(isEmail('abc')).toBe(false);
});

//Password
test('valid phone number with parentheses', () => {
  expect(isStrongPassword('bob1234')).toBe(true);
});
test('valid password with underscore', () => {
  expect(isStrongPassword('bob_12321')).toBe(true);
});
test('invalid password with too many chars', () => {
  expect(isStrongPassword('asdasdsadsadadasdasdasdasdasdaasdsadas')).toBe(false);
});
test('invalid password with number in first character', () => {
  expect(isStrongPassword('1wilson')).toBe(false);
});

//isDate

test('valid date format', () => {
  expect(isDate('10/01/2004')).toBe(true);
});
test('valid date format part 2', () => {
  expect(isDate('6/9/4200')).toBe(true);
});
test('invalid date with incorrect year', () => {
  expect(isDate('11/25/2020000')).toBe(false);
});
test('invalid date with wrong format', () => {
  expect(isDate('2020-10-1')).toBe(false);
});

//Hex
test('valid 3 hex', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid 6 hex code', () => {
  expect(isHexColor('#123abc')).toBe(true);
});
test('invalid hex 5 digits', () => {
  expect(isHexColor('#123ab')).toBe(false);
});
test('invalid hex color', () => {
  expect(isHexColor('999_99')).toBe(false);
});