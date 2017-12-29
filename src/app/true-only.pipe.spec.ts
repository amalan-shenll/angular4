import { TrueOnlyPipe } from './true-only.pipe';

describe('TrueOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new TrueOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
