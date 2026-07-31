// Resizes/compresses whatever image paths are listed (one per line) in the
// file given as argv[2]. Only overwrites a file if the result is smaller.
// Run from the repo root so the paths (e.g. "gallery/57.JPG") resolve correctly.
import fs from "node:fs";
import sharp from "sharp";

const MAX_WIDTH = 2000;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

const listFile = process.argv[2];
if (!listFile) {
  console.error("Usage: node optimize-images.mjs <file-list.txt>");
  process.exit(1);
}

const files = fs
  .readFileSync(listFile, "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`${file}: skipped (deleted in this push)`);
    continue;
  }

  const before = fs.statSync(file).size;
  const ext = file.split(".").pop().toLowerCase();

  // read the whole file into memory first so sharp never holds an open
  // handle on `file` itself - on Windows, writing back to a path sharp
  // still has mapped throws an EBUSY-style error.
  const input = fs.readFileSync(file);
  let pipeline = sharp(input);
  const meta = await pipeline.metadata();
  pipeline = pipeline.rotate(); // bake in EXIF orientation before resizing
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let out;
  if (ext === "png") {
    out = await pipeline.png({ compressionLevel: 9 }).toBuffer();
  } else if (ext === "webp") {
    out = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();
  } else {
    out = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  }

  if (out.length < before) {
    const tmp = file + ".tmp";
    fs.writeFileSync(tmp, out);
    fs.renameSync(tmp, file);
    const pct = Math.round((100 * out.length) / before);
    console.log(`${file}: ${before} -> ${out.length} bytes (${pct}%)`);
  } else {
    console.log(`${file}: already optimal, left unchanged`);
  }
}
