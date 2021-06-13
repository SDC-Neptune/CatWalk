import { add, total } from './mock.js';

//Unit test
it('add', () => {
  expect(add(1, 2)).toBe(3);
});

//Integration test
it('total', () => {
  expect(total(5, 20)).toBe('$25');
});

const mockFunc = jest.fn((a, b) => a - b);

//Testing mock fn which has access to these other properties. This will be very useful when used with react.
it('mock', () => {
  expect(mockFunc(5, 1)).toBe(4);
  expect(mockFunc).toHaveBeenCalledTimes(1);
  expect(mockFunc).toHaveBeenCalledWith(5, 1);
});