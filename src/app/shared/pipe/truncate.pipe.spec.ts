import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate decimal numbers (floor)', () => {
    expect(pipe.transform(1.0)).toBe(1);
    expect(pipe.transform(1.2)).toBe(1);
    expect(pipe.transform(1.5)).toBe(1);
    expect(pipe.transform(1.9)).toBe(1);
    expect(pipe.transform(2.0)).toBe(2);
    expect(pipe.transform(10.99)).toBe(10);
  });

  it('should handle edge cases', () => {
    expect(pipe.transform(0)).toBe(0);
    expect(pipe.transform(0.1)).toBe(0);
    expect(pipe.transform(-1.5)).toBe(-2); // Math.floor() 对负数向下取整
  });

  it('should handle invalid inputs', () => {
    expect(pipe.transform(null as any)).toBe(0);
    expect(pipe.transform(undefined as any)).toBe(0);
    expect(pipe.transform(NaN)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(pipe.transform(999.99)).toBe(999);
    expect(pipe.transform(1000000.5)).toBe(1000000);
  });
});
