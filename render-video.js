#!/usr/bin/env node

/**
 * VIB34D Offline Video Renderer
 * Renders choreography to video without real-time playback
 *
 * Usage: node render-video.js <choreography.json> <audio.mp3>
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function renderVideo(choreographyPath, audioPath) {
    const startTime = Date.now();

    console.log('🎬 VIB34D Offline Video Renderer');
    console.log('================================\n');

    // Load choreography
    console.log(`📂 Loading choreography: ${choreographyPath}`);
    const choreography = JSON.parse(fs.readFileSync(choreographyPath, 'utf8'));

    // Get audio duration
    console.log(`🎵 Analyzing audio: ${audioPath}`);
    const { stdout } = await execAsync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`);
    const duration = parseFloat(stdout.trim());
    console.log(`   Duration: ${duration.toFixed(1)}s`);

    // Calculate frames
    const fps = 30;
    const totalFrames = Math.floor(duration * fps);
    console.log(`   Frames to render: ${totalFrames} (${fps} FPS)\n`);

    // Create output directory
    const outputDir = path.join(__dirname, 'frames');
    if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, { recursive: true });
    }
    fs.mkdirSync(outputDir);

    // Launch browser
    console.log('🚀 Launching headless browser...');
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-web-security',
            '--window-size=1920,1080'
        ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Load the choreographer
    const indexPath = `file://${path.join(__dirname, 'index.html')}`;
    console.log(`📄 Loading choreographer: ${indexPath}`);
    await page.goto(indexPath, { waitUntil: 'networkidle0' });

    // Inject choreography
    console.log('💉 Injecting choreography data...');
    await page.evaluate((data) => {
        window.choreographer.sequences = data.sequences;
        window.choreographer.baseParams = data.baseParams;
        window.choreographer.duration = data.duration;
    }, choreography);

    // Render frames
    console.log(`\n🎨 Rendering ${totalFrames} frames...`);
    console.log('Progress: [' + ' '.repeat(50) + '] 0%');

    for (let frameNum = 0; frameNum < totalFrames; frameNum++) {
        const currentTime = frameNum / fps;

        // Update choreography at this time
        await page.evaluate((time) => {
            window.choreographer.updateChoreographyAtTime(time);
            window.choreographer.updateVisualizers();
        }, currentTime);

        // Wait for render
        await page.waitForTimeout(50);

        // Capture screenshot
        const framePath = path.join(outputDir, `frame-${String(frameNum).padStart(6, '0')}.png`);
        await page.screenshot({ path: framePath, fullPage: false });

        // Update progress
        if (frameNum % 10 === 0 || frameNum === totalFrames - 1) {
            const progress = ((frameNum + 1) / totalFrames) * 100;
            const barFilled = Math.floor(progress / 2);
            const barEmpty = 50 - barFilled;
            process.stdout.write('\r');
            process.stdout.write(`Progress: [${'█'.repeat(barFilled)}${' '.repeat(barEmpty)}] ${progress.toFixed(1)}%`);
        }
    }

    console.log('\n\n✅ Frame rendering complete!');

    // Close browser
    await browser.close();

    // Encode video with FFmpeg
    const outputVideo = `vib34d-video-${Date.now()}.mp4`;
    console.log(`\n🎥 Encoding video with FFmpeg...`);
    console.log(`   Output: ${outputVideo}`);

    await execAsync(`ffmpeg -framerate ${fps} -i "${outputDir}/frame-%06d.png" -i "${audioPath}" -c:v libx264 -preset fast -crf 18 -c:a aac -b:a 192k -shortest "${outputVideo}"`);

    // Cleanup frames
    console.log('\n🧹 Cleaning up frames...');
    fs.rmSync(outputDir, { recursive: true });

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n✅ COMPLETE! Video exported in ${totalTime}s`);
    console.log(`📹 Output: ${outputVideo}`);
    console.log(`📊 Stats: ${duration.toFixed(1)}s video rendered at ${fps} FPS in ${totalTime}s (${(duration / parseFloat(totalTime)).toFixed(2)}x realtime speed)`);
}

// Main
if (process.argv.length < 4) {
    console.log('Usage: node render-video.js <choreography.json> <audio.mp3>');
    console.log('\nExample:');
    console.log('  node render-video.js my-choreography.json my-song.mp3');
    process.exit(1);
}

const choreographyPath = path.resolve(process.argv[2]);
const audioPath = path.resolve(process.argv[3]);

if (!fs.existsSync(choreographyPath)) {
    console.error(`❌ Choreography file not found: ${choreographyPath}`);
    process.exit(1);
}

if (!fs.existsSync(audioPath)) {
    console.error(`❌ Audio file not found: ${audioPath}`);
    process.exit(1);
}

renderVideo(choreographyPath, audioPath).catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
});
