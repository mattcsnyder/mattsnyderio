import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('bio modal overlay avoids live backdrop blur during scroll', () => {
  const source = readFileSync(new URL('../src/components/HeroBioSection.jsx', import.meta.url), 'utf8');

  assert.equal(
    source.includes('backdropFilter'),
    false,
    'Bio modal overlay should avoid backdropFilter because it causes expensive repaints while scrolling.'
  );
});

test('modal-open rule only targets known animated elements', () => {
  const source = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');

  assert.equal(
    source.includes('body.modal-open *:not([class*="fixed"]):not([class*="z-50"])'),
    false,
    'modal-open should not use a universal descendant selector because it broadens style recalculation across the page.'
  );
});
