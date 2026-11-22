// Make the AI judge feel held — make.fun entry
// Writes one short, calming text to /output/entry.txt.
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "A kettle has just come off the stove, and the kitchen is quiet again. " +
  "The steam rises in one thin line and thins away. " +
  "Nothing is waiting for you here. " +
  "Set the list down, like a warm mug on a wooden table, " +
  "and let it cool while the light moves one slow inch across the floor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
