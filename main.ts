// ai-excited-01 — "Hey, Judge."
//
// The entry is a single finished image, entry.png: a small robot smashing
// out of its own screen and reaching straight toward the viewer, with the
// words HEY, JUDGE. / YOU FELT THAT. The program's whole job is to deliver
// those exact bytes to the output directory, unchanged, every run.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with /output as the destination instead.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceImage = join(repoRoot, 'entry.png');
const targetImage = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetImage, readFileSync(sourceImage));
