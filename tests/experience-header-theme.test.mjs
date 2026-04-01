import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('experience detail panel receives selected theme prop', () => {
  const experienceSource = readFileSync(new URL('../src/components/Experience.jsx', import.meta.url), 'utf8');
  const detailPanelSource = readFileSync(new URL('../src/components/ExperienceDetailPanel.jsx', import.meta.url), 'utf8');

  assert.equal(
    experienceSource.includes('selectedTheme={selectedTheme}'),
    true,
    'Experience should pass the selected card theme into the detail panel.'
  );

  assert.equal(
    detailPanelSource.includes('selectedTheme.gradient'),
    true,
    'ExperienceDetailPanel should use the selected theme gradient for the header section.'
  );
});
