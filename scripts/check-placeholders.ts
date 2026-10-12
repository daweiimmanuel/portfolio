import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const contentDir = join(root, 'content');
const token = '[TODO:';

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function truthy(value: string | undefined): boolean {
  return value === 'true' || value === '1';
}

const hits: string[] = [];
for (const file of walk(contentDir)) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, index) => {
      if (line.includes(token)) hits.push(`${relative(root, file)}:${index + 1}  ${line.trim()}`);
    });
}

// Vercel previews warn only; production deploys and CI block. Locally, --strict or NODE_ENV=production blocks.
const strict = process.argv.includes('--strict');
const onVercel = Boolean(process.env.VERCEL_ENV);
const block =
  strict ||
  (onVercel
    ? process.env.VERCEL_ENV === 'production'
    : truthy(process.env.CI) || process.env.NODE_ENV === 'production');

if (hits.length === 0) {
  console.log('check-placeholders: no [TODO: ...] tokens in content/.');
  process.exit(0);
}

console.log(hits.join('\n'));
console.log(`\ncheck-placeholders: ${hits.length} unresolved [TODO: ...] token(s).`);
if (block) {
  console.error('Blocking: resolve every token before building for production.');
  process.exit(1);
}
console.log('Not blocking in this environment.');
