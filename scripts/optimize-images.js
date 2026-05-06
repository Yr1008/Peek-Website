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
  { src: 'uploads/lifestyle-laugh.png', out: 'lifestyle-laugh', width: 1600, quality: 75 },

  // New canonical app screens
  { src: 'uploads/screen-tags.png',     out: 'screen-tags',     width: 720, quality: 82 },
  { src: 'uploads/screen-caps.png',     out: 'screen-caps',     width: 720, quality: 82 },
  { src: 'uploads/screen-blindbox.png', out: 'screen-blindbox', width: 720, quality: 82 },
  { src: 'uploads/screen-story.png',    out: 'screen-story',    width: 720, quality: 82 },
  { src: 'uploads/screen-chat.png',     out: 'screen-chat',     width: 720, quality: 82 },
  { src: 'uploads/screen-checkin.png',  out: 'screen-checkin',  width: 720, quality: 82 },
  { src: 'uploads/screen-patterns.png', out: 'screen-patterns', width: 720, quality: 82 },
  { src: 'uploads/screen-stickers.png', out: 'screen-stickers', width: 720, quality: 82 },

  // 3D mascot
  { src: 'uploads/mascots/peek-3d-left.png',  out: 'peek-3d-left',  width: 480, quality: 90 },
  { src: 'uploads/mascots/peek-3d-right.png', out: 'peek-3d-right', width: 480, quality: 90 },

  // Sticker icons (small, for inline collage)
  { src: 'uploads/stickers/croissant.png', out: 'st-croissant', width: 220, quality: 90 },
  { src: 'uploads/stickers/pizza.png',     out: 'st-pizza',     width: 220, quality: 90 },
  { src: 'uploads/stickers/tea.png',       out: 'st-tea',       width: 220, quality: 90 },
  { src: 'uploads/stickers/teahouse.png',  out: 'st-teahouse',  width: 220, quality: 90 },
  { src: 'uploads/stickers/shoes.png',     out: 'st-shoes',     width: 220, quality: 90 },
  { src: 'uploads/stickers/flower.png',    out: 'st-flower',    width: 220, quality: 90 },
  { src: 'uploads/stickers/glasses.png',   out: 'st-glasses',   width: 220, quality: 90 },
  { src: 'uploads/stickers/latest.png',    out: 'st-latest',    width: 220, quality: 90 },
  { src: 'uploads/stickers/Container.png', out: 'st-container', width: 220, quality: 90 },
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
