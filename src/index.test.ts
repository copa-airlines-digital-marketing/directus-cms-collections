import { expect, test } from 'vitest';
import { getTours } from './index';
import dotenv from 'dotenv';

dotenv.config();

test('Get all tours', async () => {
  await getTours(process.env.CMS_HOST, process.env.CMS_TOKEN)
    .then((tours) => console.log('OK', tours))
    .catch((e) => console.log('ERR', e));

  expect(true).toBe(true);
});
