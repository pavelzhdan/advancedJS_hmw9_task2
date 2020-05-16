import Validator from '../../index';

test('validate name successfully', () => {
  const name = new Validator('Anton');
  expect(name.validateUsername()).toBe('validation successfull');
});

test('validation parameterOne failed', () => {
  const name = new Validator('Anпашаton');
  expect(name.validateUsername()).toBe('validation failed');
});

test('validation parameterTwo failed', () => {
  const name = new Validator('Ant012345on');
  expect(name.validateUsername()).toBe('validation failed');
});


test('validation parameterThree failed', () => {
  const name = new Validator('-Anton');
  expect(name.validateUsername()).toBe('validation failed');
});


test('validation parameterFour failed', () => {
  const name = new Validator('Anton_');
  expect(name.validateUsername()).toBe('validation failed');
});
