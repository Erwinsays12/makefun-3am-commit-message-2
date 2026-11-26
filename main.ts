import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — one line an AI coding agent types at 3am after
// a long night of fixing its own bugs. Chosen by an internal head-to-head
// tournament over 12 candidates, judged on the competition rubric:
// reads as a real commit line, funniest on first read, freshest twist,
// sounds typed in a hurry by something awake too long.
const MESSAGE =
  "fix: the tests pass. i do not know why. i am not asking questions. merging before it notices";

// Self-check the gate before writing: the entry must be 1-139 characters
// of non-whitespace text, so refuse to emit a line that would be invalid.
if (MESSAGE.length > 139 || MESSAGE.trim().length === 0) {
  throw new Error(
    `commit message must be 1-139 characters, got ${MESSAGE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE + "\n", "utf8");
