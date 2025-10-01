# VIB34D Music Choreographer - Quick Reference

## 🚀 Getting Started

1. **Open:** http://localhost:8765
2. **Load Audio:** Click "Load Audio File"
3. **Set API Key:** Enter Gemini API key in settings
4. **Generate AI:** Click "Generate AI Choreography"
5. **Play:** Click Play button and watch!

---

## 🎨 Color Palette Transition Modes

| Mode | Behavior | Best For |
|------|----------|----------|
| **beat-pulse** | Snaps to new color on each beat | Drops, intense sections |
| **smooth-fade** | Smooth gradient transitions | Buildups, ambient sections |
| **snap-change** | Changes every N bars | Verse/chorus transitions |
| **frequency-map** | Bass→Color1, Mid→Color2, High→Color3 | Complex multi-frequency sections |

---

## 📊 Parameter Sweep Functions

| Function | Pattern | Use Case |
|----------|---------|----------|
| **sine-wave** | Smooth oscillation | 4D rotations, smooth spinning |
| **sawtooth** | Linear ramp → reset | Building intensity, ramping up |
| **triangle** | Linear up → linear down | Symmetric wave motion |
| **pulse-train** | On/off pattern | Beat emphasis, strobe effects |
| **exponential-decay** | High → gradually lower | Drop chaos that calms down |
| **beat-locked-steps** | Discrete jumps on beats | Rhythmic quantized motion |
| **linear-sweep** | Gradual linear change | Long section transitions |

---

## 🎭 Visualizer Systems

| System | Description | Best For |
|--------|-------------|----------|
| **Faceted** | 2D flat polygons | Minimal/ambient sections, intros |
| **Quantum** | 3D lattice structure | Complex/layered sections, builds |
| **Holographic** | Volumetric 3D | MAXIMUM IMPACT, drops, climaxes |

---

## 🎵 Choreography Modes

| Mode | Behavior | Auto-Triggered By |
|------|----------|-------------------|
| **Chaos** | Extreme random variation | High energy (>0.7), drops |
| **Pulse** | Beat-locked pulsing | Strong beats, rhythmic sections |
| **Wave** | Wavelike smooth motion | Medium energy (0.4-0.7) |
| **Flow** | Gentle minimal drift | Low energy (<0.4), ambient |
| **Dynamic** | Balanced auto-switching | Default, adapts to music |

---

## 🎯 Parameter Ranges

| Parameter | Range | Calm | Intense | Drop |
|-----------|-------|------|---------|------|
| **gridDensity** | 5-100 | 10-30 | 50-70 | 80-95 |
| **chaos** | 0-1 | 0-0.2 | 0.4-0.6 | 0.8-0.95 |
| **speed** | 0.1-3 | 0.3-0.7 | 1.0-1.5 | 2.0-3.0 |
| **rot4dXW** (bass) | ±6.28 | ±1 to ±2 | ±2 to ±4 | ±5 to ±6 |
| **rot4dYW** (mid) | ±6.28 | ±0.5 to ±1 | ±2 to ±3 | ±3 to ±5 |
| **rot4dZW** (high) | ±6.28 | ±0.5 to ±1 | ±1 to ±2 | ±2 to ±4 |

---

## 🎨 Color Schemes by Section

| Section | Hue Range | Mood |
|---------|-----------|------|
| **Intro** | 180-210 (Blue/Cyan) | Cool, inviting |
| **Verse** | 200-240 (Blue/Purple) | Calm, building |
| **Build-Up** | 240-280 (Purple) | Anticipation, tension |
| **Drop/Chorus** | 300-360, 0-30 (Magenta/Red) | EXPLOSIVE, high energy |
| **Breakdown** | 120-160 (Green) | Calm, refresh |
| **Outro** | 180-220 (Blue) | Resolution, fade out |

---

## ⚡ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play/Pause |
| **R** | Start Recording |
| **S** | Stop Recording |
| **←/→** | Seek backward/forward |
| **1-3** | Switch system (1=Faceted, 2=Quantum, 3=Holographic) |
| **0** | Reset all parameters |

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| No audio | Check browser audio permissions |
| AI fails | Verify Gemini API key is valid |
| No colors changing | Check console for palette logs |
| Parameters not sweeping | Verify BPM detection (avgBeatInterval) |
| Choppy animation | Lower gridDensity or close other tabs |
| Export fails | Check that video recording is supported (Chrome/Edge) |

---

## 📊 Console Commands (Advanced)

**Check current values:**
```javascript
choreographer.baseParams
```

**Manually set color palette mode:**
```javascript
choreographer.sequences[0].colorPalette.transitionMode = 'smooth-fade';
```

**Add custom parameter sweep:**
```javascript
choreographer.sequences[0].parameterSweeps.chaos = {
    function: 'exponential-decay',
    start: 0.95,
    decayRate: 0.5,
    beatSync: false
};
```

**Monitor real-time values:**
```javascript
setInterval(() => {
    console.log('Hue:', choreographer.baseParams.hue.toFixed(0),
                'Rot:', choreographer.baseParams.rot4dXW.toFixed(2));
}, 1000);
```

**Force section activation:**
```javascript
choreographer.sequences[2].active = true;
```

---

## 🎬 Export Options

### **1-Click Browser Export (Easy)**
- Click "EXPORT VIDEO (1-CLICK AUTO)"
- Automatically records and downloads
- Real-time speed (3 min song = 3 min wait)

### **Offline Rendering (Fast)**
- Export choreography JSON
- Run: `node render-video.js choreography.json song.mp3`
- 6x faster (3 min song = 30 seconds)
- Requires Node.js + FFmpeg

---

## 📈 Performance Tips

**For Smooth Playback:**
- Keep gridDensity ≤ 80 for most sections
- Use quantum/holographic sparingly (more GPU intensive)
- Close other browser tabs
- Use Chrome or Edge (best WebGL support)

**For High-Quality Export:**
- Use maximum parameter values (gridDensity 95+)
- Use holographic system for best visuals
- Export at 1920x1080 or higher
- Use offline rendering for faster processing

---

## 🔗 Documentation Links

- **[Phase 1 Testing Guide](PHASE1_TESTING.md)** - Comprehensive testing instructions
- **[Enhanced AI Design](ENHANCED_AI_DESIGN.md)** - Full architecture documentation
- **[Offline Rendering Guide](OFFLINE_RENDERING.md)** - Fast video export setup

---

## 💡 Pro Tips

1. **For Best AI Results:** Use songs with clear structure (intro, verse, chorus, drop)
2. **Color Tip:** beat-pulse mode creates the most dramatic visual impact
3. **Sweep Tip:** sine-wave sweeps on rotations create smooth hypnotic motion
4. **Drop Tip:** Combine holographic system + chaos mode + exponential-decay sweeps
5. **Build Tip:** Use sawtooth sweeps on gridDensity for tension building
6. **Contrast Tip:** Use opposite rotation directions (positive/negative) for visual depth

---

## 🎯 Typical Song Structure Example

```
0:00-0:15   Intro        Faceted    Flow       Blue (180-210)
0:15-0:45   Verse 1      Faceted    Wave       Blue/Purple (200-240)
0:45-1:15   Build-Up     Quantum    Pulse      Purple (240-280)
1:15-1:45   Drop         Holographic Chaos     Magenta/Red (300-360)
1:45-2:15   Verse 2      Quantum    Dynamic    Blue (200-220)
2:15-2:45   Final Build  Quantum    Pulse      Purple (260-280)
2:45-3:15   Final Drop   Holographic Chaos     Red (350-30)
3:15-3:30   Outro        Faceted    Flow       Blue (190-210)
```

---

## 🌟 Phase 1 Status: ✅ COMPLETE

**Implemented:**
- ✅ Color palette system with 4 transition modes
- ✅ Parameter sweep system with 7 functions
- ✅ Enhanced AI prompt generation
- ✅ Real-time palette/sweep processing
- ✅ Beat synchronization

**Coming in Phase 2:**
- 🔜 Pattern recognition (verse/chorus detection)
- 🔜 Pattern reuse with variations
- 🔜 Template library system

---

🌟 **A Paul Phillips Manifestation**

**Send Love, Hate, or Opportunity to:** Paul@clearseassolutions.com
**Join The Exoditical Moral Architecture Movement today:** [Parserator.com](https://parserator.com)

> *"The Revolution Will Not be in a Structured Format"*

---

**© 2025 Paul Phillips - Clear Seas Solutions LLC**
**All Rights Reserved - Proprietary Technology**
