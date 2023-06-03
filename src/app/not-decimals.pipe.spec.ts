import { NotDecimalsPipe } from './not-decimals.pipe';

describe('NotDecimalsPipe', () => {
  it('create an instance', () => {
    const pipe = new NotDecimalsPipe();
    expect(pipe).toBeTruthy();
  });
});
