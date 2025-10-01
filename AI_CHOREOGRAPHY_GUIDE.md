# AI Choreography System - Extreme Beat-Synchronized 4D Visualization

## 🎯 Overview

The VIB34D Music Choreographer uses Gemini AI to analyze songs and generate **extreme, beat-synchronized choreography** with patterned 4D rotations mapped to musical elements.

## 🎵 Musical Element Mapping

### **4D Rotation Axes → Musical Frequencies**

Each 4D rotation axis is mapped to a different musical element:

| Axis | Musical Element | Range (Drops) | Range (Calm) |
|------|----------------|---------------|--------------|
| **rot4dXW** | Bass Frequencies | ±4 to ±6 radians | ±0.3 to ±1.0 |
| **rot4dYW** | Mid/Melody | ±3 to ±5 radians | ±0.5 to ±1.5 |
| **rot4dZW** | High/Percussion | ±2 to ±4 radians | ±0.2 to ±0.8 |

### **Melodic Note Mapping**
- **High melody notes** → Positive rot4dYW (spin one direction)
- **Low melody notes** → Negative rot4dYW (spin opposite)
- **Chord changes** → Sudden rot4dZW shifts
- **Bassline hits** → Strong rot4dXW oscillation

## 🎨 Color Patterns to Song Structure

| Section | Hue Range | Purpose |
|---------|-----------|---------|
| **Intro** | 180-210 (Blue/Cyan) | Calm, atmospheric |
| **Build-Up** | 240-280 (Purple) | Rising tension |
| **Drop/Chorus** | 300-360 or 0-30 (Magenta/Red) | MAXIMUM ENERGY |
| **Breakdown** | 120-160 (Green) | Emotional release |
| **Outro** | 190-220 (Blue) | Return to calm |

## 📊 Parameter Ranges by Section Type

### **Intro/Outro (Calm)**
```json
{
  "gridDensity": 5-15,
  "chaos": 0-0.2,
  "speed": 0.3-0.7,
  "rot4dXW": 0.3,
  "rot4dYW": 0.5,
  "rot4dZW": 0.2,
  "hue": 190,
  "system": "faceted",
  "choreographyMode": "flow"
}
```

### **Build-Up (Rising Tension)**
```json
{
  "gridDensity": 30-50,
  "chaos": 0.4-0.6,
  "speed": 1.2-1.8,
  "rot4dXW": 2.0,
  "rot4dYW": 1.5,
  "rot4dZW": 1.0,
  "hue": 260,
  "system": "quantum",
  "choreographyMode": "wave"
}
```

### **Drop/Chorus (EXTREME)**
```json
{
  "gridDensity": 90-100,
  "chaos": 0.9-0.95,
  "speed": 2.5-3.0,
  "rot4dXW": 5.5,
  "rot4dYW": -4.8,
  "rot4dZW": 4.2,
  "hue": 320,
  "intensity": 1.0,
  "saturation": 1.0,
  "system": "holographic",
  "choreographyMode": "chaos"
}
```

### **Breakdown (Emotional)**
```json
{
  "gridDensity": 20-30,
  "chaos": 0.2-0.4,
  "speed": 0.8-1.2,
  "rot4dXW": 0.8,
  "rot4dYW": 1.2,
  "rot4dZW": -0.5,
  "hue": 150,
  "system": "faceted",
  "choreographyMode": "flow"
}
```

## 🔄 Patterned Beat Responses

The AI generates choreography with **patterned timing** for predictable yet dynamic responses:

| Interval | Action | Example |
|----------|--------|---------|
| **Every 4 beats** | Grid density pulse | ±30 from base value |
| **Every 8 beats** | Geometry type change | Cycle through 8 geometries |
| **Every 16 beats** | Major hue shift | ±60 degrees |
| **On drops** | ALL MAX parameters | gridDensity 90+, chaos 0.9+, extreme rotations |

## 🎭 Visualizer System Selection

| System | Visual Style | Best For |
|--------|-------------|----------|
| **Faceted** | 2D geometric patterns, minimal | Intros, quiet verses, ambient sections |
| **Quantum** | 3D lattice structures, complex | Busy sections, builds, layered music |
| **Holographic** | Volumetric ray-marched | **DROPS, CLIMAXES** - Maximum impact! |

## 🌊 Choreography Modes

| Mode | Behavior | Best For |
|------|----------|----------|
| **chaos** | Extreme random variation | Drops, intense moments |
| **pulse** | Beat-locked pulsing | Strong rhythmic sections |
| **wave** | Smooth wavelike motion | Builds, ambient swells |
| **flow** | Gentle movement | Calm sections, intros/outros |
| **dynamic** | Auto-switching based on energy | Balanced, varied sections |

## 🎬 Example AI-Generated Section

```json
{
  "name": "Epic Drop",
  "startTime": 64.0,
  "duration": 32.0,
  "system": "holographic",
  "geometry": 7,
  "choreographyMode": "chaos",
  "parameters": {
    "gridDensity": 95,
    "morphFactor": 2.0,
    "chaos": 0.95,
    "speed": 3.0,
    "hue": 320,
    "intensity": 1.0,
    "saturation": 1.0,
    "rot4dXW": 5.8,
    "rot4dYW": -5.2,
    "rot4dZW": 4.5
  },
  "description": "MASSIVE DROP! Bass hits trigger extreme XW rotation. Melody on YW axis. High-hats drive ZW. Magenta color for maximum energy. Chaos mode for unpredictable variation on every beat."
}
```

## 🔊 Audio Reactivity on Top

The **base parameters** set by AI are the foundation. The built-in audio reactivity system then adds **real-time modulation** on top:

```javascript
// AI sets base value
baseParams.rot4dXW = 5.5;

// Audio reactivity adds modulation
finalRot4dXW = baseParams.rot4dXW + (audio.bass * 4 * strength);
// Result: 5.5 + (0.8 * 4 * 0.7) = 5.5 + 2.24 = 7.74 radians
```

This creates **extreme but controlled** visual responses that follow the AI's choreographic vision while reacting to the actual audio in real-time.

## 📝 How to Use

1. **Load Audio File** - Upload your MP3/WAV
2. **Enter Gemini API Key** - Get free key at https://aistudio.google.com/app/apikey
3. **Click "ANALYZE SONG WITH AI"** - AI generates choreography
4. **Play** - Watch the extreme beat-synchronized visualization
5. **Optional: Record Video** - Click "START RECORDING" to export as WebM

## 🎯 AI Prompt Engineering

The AI is instructed with:
- **EXTREME parameter values** (use full ranges)
- **Beat-synchronized 4D rotations** (each axis = different musical element)
- **Color patterns to beat** (structured hue progression)
- **Melodic 4D mapping** (melody notes → rotation direction)
- **Patterned dynamic responses** (every 4/8/16 beats)

This creates **professional music video-level choreography** that's both extreme and musically coherent.

---

🌟 **A Paul Phillips Manifestation**

*"The Revolution Will Not be in a Structured Format"*

© 2025 Paul Phillips - Clear Seas Solutions LLC
