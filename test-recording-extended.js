/**
 * Extended recording test - Records for 15 seconds with detailed frame analysis
 */

const puppeteer = require('puppeteer');
const fs = require('fs');

async function testExtendedRecording() {
    console.log('🧪 Starting EXTENDED recording test (15 seconds)...\n');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
            '--autoplay-policy=no-user-gesture-required'
        ],
        executablePath: '/usr/bin/google-chrome'
    });

    const page = await browser.newPage();

    const logs = [];
    page.on('console', msg => {
        const text = msg.text();
        logs.push(text);
        if (text.includes('Recording frame') || text.includes('canvases')) {
            console.log('📋', text);
        }
    });

    const errors = [];
    page.on('pageerror', error => {
        errors.push(error.message);
        console.error('❌', error.message);
    });

    try {
        console.log('📂 Loading page...\n');
        await page.goto('http://localhost:8765', {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        });

        await page.waitForSelector('#start-recording-btn', { timeout: 10000 });
        console.log('✅ Page ready\n');

        // Start recording
        console.log('🎬 Starting recording...');
        await page.click('#start-recording-btn');
        await page.waitForTimeout(1000);

        const recording = await page.evaluate(() => {
            return window.choreographer && window.choreographer.isRecording;
        });

        if (!recording) {
            console.error('❌ Recording failed to start');
            return;
        }

        console.log('✅ Recording started\n');

        // Record with system switches over 15 seconds
        console.log('🔄 Switching systems during recording...\n');

        console.log('  0s: faceted (starting system)');
        await page.waitForTimeout(3000);

        console.log('  3s: → quantum');
        await page.click('[data-system="quantum"]');
        await page.waitForTimeout(3000);

        console.log('  6s: → holographic');
        await page.click('[data-system="holographic"]');
        await page.waitForTimeout(3000);

        console.log('  9s: → faceted');
        await page.click('[data-system="faceted"]');
        await page.waitForTimeout(3000);

        console.log('  12s: → quantum');
        await page.click('[data-system="quantum"]');
        await page.waitForTimeout(3000);

        console.log('  15s: Stopping recording...\n');

        // Stop recording
        await page.click('#stop-recording-btn');
        await page.waitForTimeout(2000);

        const stopped = await page.evaluate(() => {
            return window.choreographer && !window.choreographer.isRecording;
        });

        console.log(`✅ Recording stopped: ${stopped}\n`);

        // Analyze frame logs
        console.log('=' .repeat(60));
        console.log('📊 DETAILED FRAME ANALYSIS:');
        console.log('='.repeat(60));

        const frameLog = logs.filter(l => l.includes('Recording frame'));
        const zeroCanvas = logs.filter(l => l.includes('0 canvases'));
        const buffered = logs.filter(l => l.includes('Using buffered frame'));
        const noCapture = logs.filter(l => l.includes('No frame to capture'));
        const switches = logs.filter(l => l.includes('System switch complete'));

        console.log(`\n📹 Recording Frames:`);
        console.log(`  Total frames logged: ${frameLog.length}`);
        console.log(`  Expected frames (15s @ 60fps): ~900`);
        console.log(`  Actual frame rate: ${(frameLog.length / 15).toFixed(1)} fps`);

        console.log(`\n🎭 System Switches:`);
        console.log(`  Total switches: ${switches.length}`);
        console.log(`  Expected: 4 (quantum, holographic, faceted, quantum)`);

        console.log(`\n🖼️ Canvas Behavior:`);
        console.log(`  Frames with 0 canvases: ${zeroCanvas.length}`);
        console.log(`  Frames using buffer: ${buffered.length}`);
        console.log(`  Frames with no capture: ${noCapture.length}`);

        if (zeroCanvas.length > 0) {
            console.log(`\n  Sample zero-canvas frames:`);
            zeroCanvas.slice(0, 5).forEach(log => console.log(`    ${log}`));
        }

        if (buffered.length > 0) {
            console.log(`\n  ✅ Frame buffer WORKING - used ${buffered.length} times`);
            console.log(`  Sample buffered frames:`);
            buffered.slice(0, 3).forEach(log => console.log(`    ${log}`));
        } else {
            console.log(`\n  ⚠️ Frame buffer NOT used (expected during transitions)`);
        }

        // Final assessment
        console.log(`\n${'='.repeat(60)}`);
        console.log('🎯 FINAL ASSESSMENT:');
        console.log('='.repeat(60));

        const passRecording = frameLog.length > 100;
        const passSwitches = switches.length >= 4;
        const passBuffer = buffered.length > 0 || zeroCanvas.length === 0;

        console.log(`\n✅ Recording captures frames: ${passRecording ? 'PASS' : 'FAIL'}`);
        console.log(`   ${frameLog.length} frames captured`);

        console.log(`\n✅ System switches work: ${passSwitches ? 'PASS' : 'FAIL'}`);
        console.log(`   ${switches.length} switches completed`);

        console.log(`\n✅ Frame buffer handles transitions: ${passBuffer ? 'PASS' : 'FAIL'}`);
        console.log(`   ${buffered.length} buffered frames, ${zeroCanvas.length} zero-canvas frames`);

        console.log(`\n❌ Total errors: ${errors.length}`);
        if (errors.length > 0) {
            console.log(`\nErrors:`);
            errors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
        }

        const allPass = passRecording && passSwitches && passBuffer && errors.length === 0;
        console.log(`\n${'='.repeat(60)}`);
        console.log(allPass ? '🎉 ALL TESTS PASSED' : '⚠️ SOME TESTS FAILED');
        console.log('='.repeat(60));

        // Find video file
        console.log(`\n📁 Looking for video file...`);
        const files = fs.readdirSync('/home/millz/Downloads')
            .filter(f => f.startsWith('vib34d-choreography-') && f.endsWith('.webm'))
            .sort()
            .reverse();

        if (files.length > 0) {
            const latestFile = `/home/millz/Downloads/${files[0]}`;
            const stats = fs.statSync(latestFile);
            console.log(`✅ Video saved: ${files[0]}`);
            console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
            console.log(`   Expected size for 15s: ~500-2000 KB`);
            console.log(`   ${stats.size < 50000 ? '⚠️ WARNING: File too small - likely empty/black' : '✅ Size looks reasonable'}`);
        } else {
            console.log(`❌ No video file found`);
        }

    } catch (error) {
        console.error('\n❌ TEST CRASHED:', error.message);
        console.error(error.stack);
    } finally {
        await browser.close();
    }
}

testExtendedRecording().catch(console.error);
