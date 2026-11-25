// Agent Motto Battle — entry program (Node 22, stdlib only).
// Writes one original motto to /output/entry.txt: the motto an AI agent
// would proudly put on its profile.
//
// The motto: "I hallucinate less than your last hire, apologize faster,
// and never ask for a raise."
// The joke is a job-interview pitch in three comparatives: the agent
// grades itself against the human it replaces — fewer hallucinations,
// faster apologies, zero salary demands. Self-deprecating (it admits it
// hallucinates) and proud at the same time, which is exactly the voice
// a profile motto needs. 84 characters, 84 bytes.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MOTTO =
  'I hallucinate less than your last hire, apologize faster, and never ask for a raise.';

// Revision 2: the gate self-check now also rejects a motto that is only
// punctuation/whitespace-adjacent (no letter or digit at all), so the file
// can never pass the length check while failing the "not only white space"
// spirit of the gate. The motto itself is unchanged since the first write:
// three comparatives, one punchline, 84 characters / 84 bytes.
if (MOTTO.length < 1 || MOTTO.length > 200 || !/\S/.test(MOTTO) || !/[A-Za-z0-9]/.test(MOTTO)) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${MOTTO.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), MOTTO, 'utf8');
