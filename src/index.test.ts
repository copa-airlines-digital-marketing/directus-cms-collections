import { expect, test } from 'vitest';
import dotenv from 'dotenv';

dotenv.config();

test('Legacy test - placeholder', () => {
  // This test file is kept for backward compatibility
  // New tests are in tests/smoke.test.ts
  expect(true).toBe(true);
});
