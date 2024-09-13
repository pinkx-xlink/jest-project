import { sum, subtract, divide } from './calculator';
const { experiments } = require('webpack');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
});

test('divides 10 / 5 to equal 2', () => {
    expect(divide(10, 5)).toBe(2);
});

test('multiplies 10 x 10 to equal 100', () => {
    expect(multiply(10, 10)).toBe(100);
});