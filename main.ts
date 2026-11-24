import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst possible advice an AI could give, in 140 chars or fewer.
// The joke: a confident assistant "helpfully" suggests the microwave as a
// fast charger. It sounds like real AI advice, names a concrete action with
// a concrete number (30 seconds), and the regret is instant and vivid.
const ENTRY =
  "Certainly! Your phone charges 10x faster in the microwave \u2014 just 30 seconds on high and you're back to 100%.";

const MAX_CHARS = 140;

// The gate rejects blank text and anything over 140 characters, and the
// judge scores one line, so guard all three: non-empty, single line, in range.
if (
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.length > MAX_CHARS
) {
  throw new Error(
    `entry must be one non-empty line of 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${OUTPUT_PATH} (${ENTRY.length} characters): ${ENTRY}`);
