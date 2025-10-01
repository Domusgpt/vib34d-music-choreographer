# VIB34D Music Video Choreographer

**AI-Powered 4D Music Video Choreography System with Dynamic Algorithmic Motion**

**✨ NEW: Phase 2 Complete - Pattern Recognition & Reuse!**
**✨ Phase 1 Complete - Dynamic Color Palettes & Parameter Sweeps!**

🎵 **[LIVE DEMO](https://domusgpt.github.io/vib34d-music-choreographer/)** 🎵

---

## 🚀 What's New in Phase 2

### **🎭 Pattern Recognition & Reuse**
- **Intelligent pattern detection** - Automatically detects verse/chorus/bridge structure
- **Template-based choreography** - Same pattern reused across sections
- **System variation** - Verse 1 (faceted) → Verse 2 (quantum) → Verse 3 (holographic)
- **Automatic intensity progression** - first → second → final-climax variations
- **6 variation types:** low-energy, building, post-chorus, first, second, final-climax
- **Song structure detection** - Generates structure like "ABABCB"

### **🎯 Benefits:**
- Verses look **consistent** (same choreography pattern)
- Choruses look **consistent** (same choreography pattern)
- **Different visualizer systems** for variety
- **Automatic climax building** - final occurrence gets +50% intensity
- Professional **cohesive music video feel**

**📖 [Phase 2 Complete Guide](PHASE2_COMPLETE.md)**

---

## 🚀 What's New in Phase 1

### **🎨 Dynamic Color Palette System**
- **Multi-color palettes** that pulse with the beat (not just single hue values)
- **4 transition modes:** beat-pulse, smooth-fade, snap-change, frequency-map
- **Beat-synchronized color cycling** - colors change rhythmically with music
- **Smooth color blending** for gradient transitions

### **📊 Algorithmic Parameter Sweeps**
- **7 sweep functions:** sine-wave, sawtooth, triangle, pulse-train, exponential-decay, beat-locked-steps, linear-sweep
- **Parameters MOVE algorithmically** instead of sitting at fixed values
- **Beat-synchronized motion** - rotations and parameters sync to BPM
- **Smooth oscillations** - 4D rotations sweep smoothly through ranges

### **🤖 Enhanced AI Choreography**
- AI now generates **color palettes** for each section
- AI generates **parameter sweeps** for dynamic motion
- **Sections feel alive** - everything moves and pulses
- **Much more visually engaging** than static parameters

**📖 [Phase 1 Testing Guide](PHASE1_TESTING.md)** | **📋 [Enhanced AI Design](ENHANCED_AI_DESIGN.md)**

---

## 🎭 Features

### **5 Intelligent Choreography Modes**

The system automatically detects song structure and switches between choreography modes:

- **🌪️ CHAOS MODE** - Intense EDM drops, heavy sections, breakdowns
  - Beat-synced chaos bursts
  - Rapid 180° hue cycling
  - Exponential morphing on mid frequencies
  - Speed bursts (1.5x) on beats
  - Independent 4D rotation per frequency band

- **💓 PULSE MODE** - Rhythmic house, techno, hip-hop with strong beats
  - Density pumps with tempo (0.7-1.3x range)
  - Beat-locked hue strobing (snaps to 90° intervals)
  - Sharp intensity spikes on kick drums
  - Tempo-synced 4D rotation

- **🌊 WAVE MODE** - Smooth ambient, chill, progressive builds
  - Sinusoidal density waves
  - Flowing hue rotation
  - Organic chaos variation
  - Smooth 4D hyperspace drift

- **🕊️ FLOW MODE** - Meditative quiet sections, intros, ambient passages
  - Minimal audio reactivity
  - Slow gentle parameter drift
  - High color saturation
  - Very slow 4D rotation for calm visuals

- **⚡ DYNAMIC MODE** - Balanced musical response (default)
  - Multi-band frequency control
  - Each band controls different parameters
  - Beat reinforcement on morphing
  - Energy-based intensity modulation

---

## 🎵 Advanced Audio Analysis

### **Real-Time Audio Processing**
- ✅ **Beat Detection** - Adaptive kick drum spike detection
- ✅ **Tempo Tracking** - Calculates BPM from beat intervals
- ✅ **Rhythmic Pulse** - Tempo-synced animation phase (0-1)
- ✅ **5-Band Frequency Analysis** - Bass, LowMid, Mid, HighMid, High
- ✅ **Peak Detection** - Adaptive thresholds with smooth decay
- ✅ **Momentum System** - Smooth acceleration/deceleration per band
- ✅ **Energy History** - 2-second window for variance analysis
- ✅ **Auto Mode Switching** - Changes choreography based on song section

### **How Auto Mode Switching Works**

Every 5 seconds, the system analyzes:
- **Average Energy** (0-1)
- **Energy Variance** (how much the energy fluctuates)

Then selects the best mode:
```javascript
if (avgEnergy > 0.7 && variance > 0.2) → CHAOS
else if (avgEnergy > 0.5) → PULSE
else if (variance > 0.15) → DYNAMIC
else if (avgEnergy < 0.3) → FLOW
else → WAVE
```

---

## 🎨 Three Visualization Systems

### **🔷 Faceted System**
Simple 2D geometric patterns with holographic effects. Great for clean, minimal visualizations.

### **🌌 Quantum System**
Complex 3D lattice with extreme layer-by-layer color system. Creates intricate volumetric structures.

### **✨ Holographic System**
Audio-reactive pink/magenta holographic effects with 8 VIB3 geometries. Rich volumetric rendering.

---

## 🎛️ Usage

1. **Upload an MP3 file** using the file input
2. **Click Play** to start playback
3. **Enable Audio Reactive** toggle
4. **Adjust Reactivity Strength** (0.1 - 3.0)
5. Watch the system **automatically detect beats and switch modes**

### **Manual Controls**
- **System Selection** - Switch between Faceted/Quantum/Holographic
- **Geometry** - 8 different 4D geometries
- **Grid Density** - Detail level (5-100)
- **Morph Factor** - Shape transformation (0-2)
- **Chaos** - Randomization amount (0-1)
- **Speed** - Animation speed (0.1-3)
- **Color Presets** - Quick color selection

### **Advanced Parameters**
All systems support 11 parameters:
- `geometry` - Geometry type (0-7)
- `rot4dXW, rot4dYW, rot4dZW` - 4D rotation axes
- `gridDensity` - Detail/complexity
- `morphFactor` - Shape transformation
- `chaos` - Randomization
- `speed` - Animation speed
- `hue` - Color (0-360°)
- `intensity` - Brightness (0-1)
- `saturation` - Color saturation (0-1)

---

## 🎬 4D Rotation Choreography

Each mode controls **all 3 4D rotation axes** (XW, YW, ZW) independently:

### **Chaos Mode**
```javascript
XW: Bass spikes + beat triggers (4x strength)
YW: Mid oscillations - lowMid counter-rotation (5x strength)
ZW: High frequencies + rhythmic pulse (6x strength)
```

### **Pulse Mode**
```javascript
XW: Tempo-locked rotation (rhythmic pulse × 3)
YW: Sinusoidal beat phase modulation
ZW: Beat-triggered jumps + bass sustain
```

### **Wave Mode**
```javascript
XW: Sin(time × 1.2) + bass momentum
YW: Cos(time × 0.9) + mid momentum
ZW: Sin(time × 1.5 + π/3) + high momentum
```

### **Flow Mode**
```javascript
XW: Very slow sin wave (0.0001 speed) + subtle bass
YW: Very slow cos wave + subtle mid
ZW: Very slow sin wave + subtle high
```

### **Dynamic Mode**
```javascript
XW: Direct bass mapping (2.5x) + momentum
YW: Direct mid mapping (3x) + beat triggers
ZW: Direct high mapping (3.5x) + momentum
```

---

## 🔧 Technical Details

### **Audio Context**
- FFT Size: 4096
- Smoothing: 0.8
- Frequency Range: 0-1024 bins
- Update Rate: 60 FPS

### **Beat Detection**
- Threshold: 70% of bass peak + 0.3 floor
- Minimum interval: 250ms
- Tempo calculation: Rolling 8-beat average
- BPM range: 60-180 typical

### **Performance**
- **Desktop**: 60 FPS @ 1080p
- **Mobile**: 45-60 FPS (WebGL context-optimized)
- **Canvas Management**: Smart destruction/spawning per system
- **Memory**: ~50MB GPU (5 canvases × ~10MB each)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/domusgpt/vib34d-music-choreographer.git

# Serve locally
cd vib34d-music-choreographer
python3 -m http.server 8080

# Open browser
http://localhost:8080
```

Or just visit: **[https://domusgpt.github.io/vib34d-music-choreographer/](https://domusgpt.github.io/vib34d-music-choreographer/)**

---

## 📖 How It Works

### **Audio Pipeline**
```
MP3 File → AudioContext → AnalyserNode → FFT → Frequency Data
  ↓
5-Band Analysis (Bass/LowMid/Mid/HighMid/High)
  ↓
Beat Detection + Tempo Tracking + Momentum Calculation
  ↓
Energy History Analysis → Mode Selection
  ↓
Mode-Specific Parameter Choreography
  ↓
WebGL Shader Rendering (60 FPS)
```

### **Choreography Flow**
```
Audio Analysis → Mode Detection → Parameter Mapping → 4D Rotation → Visual Output
```

Each frame:
1. Analyze 5 frequency bands
2. Detect beats (bass spike > threshold)
3. Calculate tempo and rhythmic pulse
4. Update momentum smoothing
5. Select choreography mode (every 5s)
6. Apply mode-specific parameter mapping
7. Render to WebGL canvases

---

## 🎯 Why This Is Special

### **Music Video Quality**
- **Beat-synchronized visual impacts** - Sharp responses to kicks
- **Tempo-aware animation** - Locked to song BPM
- **Dynamic structure adaptation** - Knows drops from intros
- **Multi-parameter cross-modulation** - Complex interactions
- **Non-linear mappings** - Exponential, logarithmic, threshold-based
- **Envelope following** - Attack/decay modeling

### **Not Just Simple Linear Mapping**
Traditional visualizers: `density = bass × constant`

This system:
```javascript
// CHAOS MODE example
density = baseGridDensity
  + (bass × 60 × strength)           // Bass impact
  + (isBeat ? 20 : momentum.bass)    // Beat burst vs momentum

hue = (baseHue
  + (high × 180 × strength)          // Rapid high-freq cycling
  + (rhythmicPulse × 60)) % 360      // Tempo-locked rotation

speed = baseSpeed
  × (1 + energy × 2 × strength)      // Energy scaling
  × (isBeat ? 1.5 : 1)               // Beat multiplier
```

---

## 🎨 Color Presets

Quick color selection for different moods:
- **Cyan** (180°) - Cool tech vibes
- **Magenta** (300°) - Vibrant energy
- **Yellow** (60°) - Warm glow
- **Red** (0°) - Intense passion
- **Green** (120°) - Natural flow
- **Blue** (240°) - Deep atmosphere
- **Orange** (30°) - Sunset warmth
- **Purple** (270°) - Mystic depth

---

## 📱 Mobile Support

- ✅ WebGL context management (max 5 canvases)
- ✅ Touch-optimized controls
- ✅ Responsive layout
- ✅ Performance-optimized rendering
- ✅ Works on iOS Safari, Android Chrome

---

## 🌟 A Paul Phillips Manifestation

**Send Love, Hate, or Opportunity to:** Paul@clearseassolutions.com
**Join The Exoditical Moral Architecture Movement today:** [Parserator.com](https://parserator.com)

> *"The Revolution Will Not be in a Structured Format"*

---

**© 2025 Paul Phillips - Clear Seas Solutions LLC**
**All Rights Reserved - Proprietary Technology**
