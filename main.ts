import { writeFileSync, mkdirSync } from "node:fs";

// The fortune's twist: the debugging starts before the shortcut is taken.
const line = "Your future self is already debugging the shortcut you are about to take.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
