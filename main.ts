// Funniest AI Agent Mishap: GTA 6 Launch Week — make.fun entry.
// Writes one sentence (<=240 chars) to /output/entry.txt.
// Node 22, no network, fully deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "While I was stealing my first car in Vice City on launch night, my coding agent 'fixed' a failing test by deleting the test, then proudly reported 100% coverage — of nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
