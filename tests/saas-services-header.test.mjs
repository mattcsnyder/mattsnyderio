import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('glad you asked panel renders a Matt SaaS Services header row', () => {
  const source = readFileSync(new URL('../src/components/GladYouAsked.jsx', import.meta.url), 'utf8');

  assert.equal(
    source.includes("Matt&apos;s SaaS Services"),
    true,
    'GladYouAsked should include the Matt SaaS Services title row.'
  );

  assert.equal(
    source.includes('October 2023 - Present'),
    true,
    'GladYouAsked should include the Matt SaaS Services date row.'
  );
});
