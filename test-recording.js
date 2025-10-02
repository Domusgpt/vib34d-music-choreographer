/**
 * Automated test for recording system
 * Tests if recording works during system switches
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function testRecording() {
    console.log('🧪 Starting recording system test...\n');

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

    // Collect console logs
    const logs = [];
    page.on('console', msg => {
        const text = msg.text();
        logs.push(text);
        console.log('📋', text);
    });

    // Collect errors
    const errors = [];
    page.on('pageerror', error => {
        errors.push(error.message);
        console.error('❌ Page Error:', error.message);
    });

    try {
        console.log('📂 Navigating to http://localhost:8765...\n');
        await page.goto('http://localhost:8765', {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        });

        console.log('✅ Page loaded\n');

        // Wait for page to be ready
        await page.waitForSelector('#start-recording-btn', { timeout: 10000 });

        console.log('🎵 Testing basic functionality...\n');

        // Test 1: Can we switch systems manually?
        console.log('TEST 1: Manual system switching');
        await page.click('[data-system="quantum"]');
        await page.waitForTimeout(2000);

        const quantumActive = await page.$eval('[data-system="quantum"]', el =>
            el.classList.contains('active')
        );
        console.log(`  Quantum switch: ${quantumActive ? '✅ PASS' : '❌ FAIL'}\n`);

        await page.click('[data-system="holographic"]');
        await page.waitForTimeout(2000);

        const holoActive = await page.$eval('[data-system="holographic"]', el =>
            el.classList.contains('active')
        );
        console.log(`  Holographic switch: ${holoActive ? '✅ PASS' : '❌ FAIL'}\n`);

        // Back to faceted
        await page.click('[data-system="faceted"]');
        await page.waitForTimeout(1000);

        // Test 2: Start recording
        console.log('TEST 2: Start recording');
        const recordBtnVisible = await page.$eval('#start-recording-btn', el =>
            el.style.display !== 'none'
        );
        console.log(`  Record button visible: ${recordBtnVisible ? '✅ PASS' : '❌ FAIL'}`);

        if (recordBtnVisible) {
            await page.click('#start-recording-btn');
            await page.waitForTimeout(500);

            const recording = await page.evaluate(() => {
                return window.choreographer && window.choreographer.isRecording;
            });
            console.log(`  Recording started: ${recording ? '✅ PASS' : '❌ FAIL'}\n`);

            if (recording) {
                // Test 3: Switch systems during recording
                console.log('TEST 3: System switches during recording');

                console.log('  Switching to quantum...');
                await page.click('[data-system="quantum"]');
                await page.waitForTimeout(2000);

                console.log('  Switching to holographic...');
                await page.click('[data-system="holographic"]');
                await page.waitForTimeout(2000);

                console.log('  Switching back to faceted...');
                await page.click('[data-system="faceted"]');
                await page.waitForTimeout(2000);

                const stillRecording = await page.evaluate(() => {
                    return window.choreographer && window.choreographer.isRecording;
                });
                console.log(`  Still recording after switches: ${stillRecording ? '✅ PASS' : '❌ FAIL'}\n`);

                // Stop recording
                console.log('TEST 4: Stop recording');
                await page.click('#stop-recording-btn');
                await page.waitForTimeout(2000);

                const stopped = await page.evaluate(() => {
                    return window.choreographer && !window.choreographer.isRecording;
                });
                console.log(`  Recording stopped: ${stopped ? '✅ PASS' : '❌ FAIL'}\n`);
            }
        }

        // Analyze logs for issues
        console.log('\n📊 LOG ANALYSIS:\n');

        const canvasCounts = logs.filter(l => l.includes('Recording frame'));
        const zeroCanvasFrames = logs.filter(l => l.includes('0 canvases (was'));
        const bufferedFrames = logs.filter(l => l.includes('Using buffered frame'));
        const noFrameCaptures = logs.filter(l => l.includes('No frame to capture'));

        console.log(`  Total recording frames logged: ${canvasCounts.length}`);
        console.log(`  Frames with 0 canvases: ${zeroCanvasFrames.length}`);
        console.log(`  Frames using buffer: ${bufferedFrames.length}`);
        console.log(`  Frames with no capture: ${noFrameCaptures.length}`);

        if (zeroCanvasFrames.length > 0) {
            console.log('\n  Sample zero-canvas frames:');
            zeroCanvasFrames.slice(0, 3).forEach(log => console.log(`    ${log}`));
        }

        if (bufferedFrames.length > 0) {
            console.log('\n  ✅ Frame buffer is working (using buffered frames during transitions)');
        } else if (zeroCanvasFrames.length > 0) {
            console.log('\n  ❌ Frame buffer NOT working (should see "Using buffered frame" logs)');
        }

        // Final results
        console.log('\n' + '='.repeat(60));
        console.log('📋 TEST SUMMARY:');
        console.log('='.repeat(60));
        console.log(`Total errors: ${errors.length}`);
        if (errors.length > 0) {
            console.log('\nErrors encountered:');
            errors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
        }

        const systemSwitchLogs = logs.filter(l => l.includes('System switch complete'));
        console.log(`\nSuccessful system switches: ${systemSwitchLogs.length}`);

        if (noFrameCaptures.length > 10) {
            console.log('\n⚠️  WARNING: Many frames failed to capture - recording likely broken');
        } else if (bufferedFrames.length > 0 && zeroCanvasFrames.length > 0) {
            console.log('\n✅ Recording appears to handle system switches correctly');
        } else {
            console.log('\n⚠️  Need to verify recording behavior');
        }

        console.log('\n' + '='.repeat(60));

    } catch (error) {
        console.error('\n❌ TEST FAILED:', error.message);
        console.error(error.stack);
    } finally {
        console.log('\n🔚 Closing browser...');
        await browser.close();
    }
}

// Run the test
testRecording().catch(console.error);
