# 🤖 Gemini API Setup Guide

## Quick Start - Get Your Free API Key

1. **Visit Google AI Studio**: https://aistudio.google.com/app/apikey

2. **Click "Create API Key"**
   - Choose "Create API key in new project" (or select existing project)
   - Key will be generated instantly

3. **Copy Your API Key**
   - Copy the key (starts with `AIza...`)
   - Keep it secure - don't share publicly

4. **Use in VIB34D Choreographer**
   - Paste key into the "Gemini API Key" field
   - Click "ANALYZE SONG WITH AI"
   - Wait for AI to create choreography plan
   - Press Play to see the magic!

## What the API Does

The Gemini API analyzes your song and creates:

- **Song structure detection** (intro/verse/chorus/drop/bridge/outro)
- **BPM and genre estimation**
- **Energy level analysis**
- **Timed choreography sequences** with:
  - System selection (Faceted/Quantum/Holographic)
  - Geometry choice (0-7)
  - Choreography mode (Chaos/Pulse/Wave/Flow/Dynamic)
  - All 11 parameters including 4D rotations

## API Limits (Free Tier)

- **60 requests per minute**
- **1500 requests per day**
- **More than enough for music video choreography!**

## Example AI Output

For a 3-minute EDM track, Gemini might return:

```json
{
  "songTitle": "Electronic Dance Track",
  "bpm": 128,
  "energy": "high",
  "genre": "EDM",
  "sections": [
    {
      "name": "Intro",
      "startTime": 0.0,
      "duration": 16.0,
      "system": "faceted",
      "geometry": 1,
      "choreographyMode": "flow",
      "parameters": {
        "gridDensity": 15,
        "morphFactor": 0.5,
        "chaos": 0.1,
        "speed": 0.8,
        "hue": 190,
        "intensity": 0.4,
        "saturation": 0.7,
        "rot4dXW": 0.5,
        "rot4dYW": 0.3,
        "rot4dZW": -0.2
      },
      "description": "Gentle intro building atmosphere"
    },
    {
      "name": "Drop",
      "startTime": 32.0,
      "duration": 32.0,
      "system": "holographic",
      "geometry": 7,
      "choreographyMode": "chaos",
      "parameters": {
        "gridDensity": 80,
        "morphFactor": 1.8,
        "chaos": 0.8,
        "speed": 2.5,
        "hue": 320,
        "intensity": 0.9,
        "saturation": 1.0,
        "rot4dXW": 3.5,
        "rot4dYW": 4.2,
        "rot4dZW": -2.8
      },
      "description": "MASSIVE DROP! Maximum impact"
    }
  ],
  "recommendations": "Use holographic for drops, quantum for builds..."
}
```

## Troubleshooting

### "API error: 400"
- Check that your API key is valid
- Make sure you copied the entire key

### "API error: 429"
- You've hit the rate limit (60/min or 1500/day)
- Wait a few minutes and try again

### "API error: 403"
- API key might be restricted
- Check API key settings in Google AI Studio

### "No audio file loaded"
- Upload an MP3 file first before clicking analyze

## Testing Without API Key

Want to see how it works first?

1. Open: `test-ai-choreography.html`
2. Click "Run Mock AI Test"
3. See example AI output and how sequences execute

## Privacy & Security

- ✅ API key is stored locally in your browser (not on server)
- ✅ Only song duration and BPM are sent to Gemini
- ✅ Your audio file stays on your computer
- ✅ No data is logged or stored

## Advanced Usage

### Multiple Songs
The API will remember the key for your session. Just upload different songs and analyze each one.

### Custom Prompts
Advanced users can modify the AI prompt in `index.html` line ~1374 to customize choreography style.

### Manual Tweaking
After AI generates choreography:
- Use sliders to adjust parameters in real-time
- Switch systems manually
- Override AI recommendations

---

**Need help?**
- API Issues: https://ai.google.dev/gemini-api/docs
- Choreographer Issues: https://github.com/Domusgpt/vib34d-music-choreographer/issues

**🌟 A Paul Phillips Manifestation**
