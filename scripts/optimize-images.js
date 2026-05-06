#!/usr/bin/env node
/* Generate optimized WebP variants of hero and feature images. */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const imgDir = path.join(root, 'public', 'images')
const outDir = path.join(imgDir, 'optimized')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const jobs = [
  { src: 'peek-icon.png', out: 'peek-icon', width: 128, quality: 85 },
  { src: '1.png', out: 'mascot-party', width: 480, quality: 90 },
  { src: 'hero-stressed-person.png', out: 'hero-stressed-person', width: 600, quality: 80 },
  { src: 'hero-street-bg.png', out: 'hero-street-bg', width: 1600, quality: 70 },
  { src: 'uploads/store-screen-1.png', out: 'store-screen-1', width: 720, quality: 82 },
  { src: 'uploads/store-screen-2.png', out: 'store-screen-2', width: 720, quality: 82 },
  { src: 'uploads/store-screen-3.png', out: 'store-screen-3', width: 720, quality: 82 },
  { src: 'uploads/store-screen-4.png', out: 'store-screen-4', width: 720, quality: 82 },
  { src: 'uploads/lifestyle-laugh.png', out: 'lifestyle-laugh', width: 1600, quality: 75 },
]

async function run() {
  for (const j of jobs) {
    const src = path.join(imgDir, j.src)
    if (!fs.existsSync(src)) {
      console.log('skip:', j.src, '(missing)')
      continue
    }
    const out = path.join(outDir, `${j.out}.webp`)
    await sharp(src)
      .resize({ width: j.width, withoutEnlargement: true })
      .webp({ quality: j.quality })
      .toFile(out)
    const size = fs.statSync(out).size
    console.log(`${j.src} -> optimized/${j.out}.webp (${(size / 1024).toFixed(1)} KB)`)
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
