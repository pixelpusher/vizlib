# Vizlib Library for Visualising Interactive 3D Printing

This library provides a 3D visualiser written mainly in ThreeJS for [LivePrinter2](https://github.com/pixelpusher/liveprinter2) instances, allowing for real-time visualisation of 3D printing paths (travel and extrusion) using Three.js. It includes features like speed-based color mapping, glow effects, fog, and camera controls. It is very much experimental and under development and things are often a bit weird and may change. Contact Evan via GitHub or find him at [the Creative Computing Institute at UAL](https://researchers.arts.ac.uk/2848-evan-raskob). 

by Evan Raskob 2020-2026, under a Apache 2.0 license. 

## Installation

Install via `npm`. Add it to a project using its GitHub url: 

`npm i git+https://github.com/pixelpusher/vizlib.git`

If you are using LivePrinter2, it's already in there!

## Usage

See the [example sketch](./sketch.js) for an example of how to use it with the core LivePrinter libraries to create and visualise 3D forms and export as GCode for (almost) any 3D Printer. 

Basically, create a visualiser instance that takes a LivePrinter instance, a DOMElement to attach to, and some optional properties, and then you can interactively interact with it via the functions it returns (usually in livecoding practice).

### `makeVisualiser(lp, domElementID, props)`

Creates and initializes a 3D visualiser for a `LivePrinter` instance. This is the primary entry point for setting up the visualisation.

- `lp`: (`LivePrinter`) An instance of the `LivePrinter` library.
- `domElementID`: (`String`) The ID of the HTML element where the Three.js canvas will be appended.
- `props`: (`Object`, optional) Configuration properties for the visualiser.
  - `title`: (`String`, default: "LivePrinter") Title displayed in the 3D scene.
  - `debug`: (`Boolean`, default: `false`) Enables debug logging for printer events.
  - `delay`: (`Boolean`, default: `true`) Enables/disables artificial delay for printer events.
  - `travelOpacity`: (`Number`, default: `0.8`) Opacity of travel lines.
  - `travelLineGlow`: (`Number`, default: `0.5`) Emissive intensity for travel lines.
  - `extrudeOpacity`: (`Number`, default: `0.7`) Opacity of extrude lines.
  - `extrudeLineGlow`: (`Number`, default: `0.5`) Emissive intensity for extrude lines.
  - `printHeadColor`: (`Number`, default: `0xffff55`) Color of the print head marker.
  - `printHeadRadius`: (`Number`, default: `20`) Radius of the print head marker cone.
  - `fogEnabled`: (`Boolean`, default: `true`) Enables/disables fog effect.
  - `fogColor`: (`Number`, default: `0x0f0f0f`) Color of the fog.
  - `fogNear`: (`Number`, default: `100`) Near distance for fog.
  - `fogFar`: (`Number`, default: `5000`) Far distance for fog.
  - `glowEnabled`: (`Boolean`, default: `false`) Enables/disables global bloom/glow effect.
  - `glowStrength`: (`Number`, default: `0.5`) Strength of the bloom effect.
  - `glowRadius`: (`Number`, default: `0.15`) Radius of the bloom effect.
  - `glowThreshold`: (`Number`, default: `0.1`) Threshold for the bloom effect.
  - `minSpeed`: (`Number`, default: `1`) Minimum printer speed for color mapping.
  - `maxSpeed`: (`Number`, default: `150`) Maximum printer speed for color mapping.

Returns an object containing various functions to control the visualiser from within LivePrinter.

#### Returned Functions from `makeVisualiser`:

- `downloadGCode(filename = "lines.gcode")`: Downloads the accumulated GCode as a file.
- `setMinSpeed(s)`: Sets the minimum speed for color normalization.
- `setMaxSpeed(s)`: Sets the maximum speed for color normalization.
- `setTravelColours(colours)`: Sets the color palette for travel lines. `colours` should be an array of hex color strings (e.g., `['#ff43ba', '#ffb949', '#00d2ff']`).
- `setExtrudeColours(colours)`: Sets the color palette for extrude lines. `colours` should be an array of hex color strings.
- `sceneWidth()`: Returns the current width of the 3D scene viewport in pixels.
- `sceneHeight()`: Returns the current height of the 3D scene viewport in pixels.
- `bedXtoScene(x)`: Converts a LivePrinter bed X-coordinate (mm) to a Three.js scene X-coordinate.
- `bedYtoScene(y)`: Converts a LivePrinter bed Y-coordinate (mm) to a Three.js scene Y-coordinate.
- `bedZtoScene(z)`: Converts a LivePrinter bed Z-coordinate (mm) to a Three.js scene Z-coordinate.
- `setZoom(z)`: Sets the zoom level of the main camera. `z` is a float from `0` (most zoomed in) to `1` (most zoomed out).
- `setViewX(vx)`: Sets the X-offset for the main camera's view frustum. `vx` is a normalized value.
- `getViewX()`: Returns the current X-offset for the main camera's view frustum.
- `setViewXmm(vx)`: Sets the X-offset for the main camera's view frustum in millimeters.
- `viewXmm()`: Returns the current X-offset for the main camera's view frustum in millimeters.
- `setViewY(vy)`: Sets the Y-offset for the main camera's view frustum. `vy` is a normalized value.
- `getViewY()`: Returns the current Y-offset for the main camera's view frustum.
- `setViewYmm(vy)`: Sets the Y-offset for the main camera's view frustum in millimeters.
- `viewYmm()`: Returns the current Y-offset for the main camera's view frustum in millimeters.
- `setViewWidth(vw)`: Sets the width of the main camera's view frustum. `vw` is a normalized value.
- `getViewwidth()`: Returns the current width of the main camera's view frustum.
- `setViewHeight(vh)`: Sets the height of the main camera's view frustum. `vh` is a normalized value.
- `getViewHeight()`: Returns the current height of the main camera's view frustum.
- `closeFactor(f)`: Sets the zoom factor for the close-up camera view. `f` is a number (e.g., `30`).
- `setFogEnabled(enabled)`: Enables or disables the fog effect.
- `setFogColor(color)`: Sets the fog color. `color` is a hex color value (e.g., `0x0f0f0f`).
- `setFogNear(distance)`: Sets the near distance for the fog effect.
- `setFogFar(distance)`: Sets the far distance for the fog effect.
- `getFogState()`: Returns an object with the current fog configuration (`enabled`, `color`, `near`, `far`).
- `setGlowEnabled(enabled)`: Enables or disables the global bloom/glow effect.
- `setGlowStrength(strength)`: Sets the strength of the bloom effect (`0-3` recommended).
- `setGlowRadius(radius)`: Sets the radius of the bloom effect (`0-1` recommended).
- `setGlowThreshold(threshold)`: Sets the threshold for the bloom effect (`0-1` recommended).
- `getGlowState()`: Returns an object with the current glow configuration (`enabled`, `strength`, `radius`, `threshold`).
- `setTravelLineGlow(intensity)`: Sets the emissive intensity for travel lines (`0-1` recommended).
- `setExtrudeLineGlow(intensity)`: Sets the emissive intensity for extrude lines (`0-1` recommended).
- `getLineGlowState()`: Returns an object with the current line glow configuration (`travel`, `extrude`).
- `vizevents`: The event handler object that is registered with the `LivePrinter` instance. It contains `printEvent`, `errorEvent`, and `gcodeEvent` methods.
- `reset()`: Resets the travel and extrude line geometries, effectively clearing the drawn paths.
- `setCloseViewX(vx)`: Sets the X position of the close-up view viewport. `vx` is a normalized value.
- `setCloseViewY(vy)`: Sets the Y position of the close-up view viewport. `vy` is a normalized value.
- `setCloseViewWidth(vw)`: Sets the width of the close-up view viewport. `vw` is a normalized value.
- `setCloseViewHeight(vh)`: Sets the height of the close-up view viewport. `vh` is a normalized value.
- `resetAll()`: Disposes of all Three.js objects, removes event listeners, and cleans up the renderer. This should be called when the visualiser is no longer needed.

### Utility Functions (from `PrintGeometry.js`)

These functions are primarily used internally by `makeVisualiser` but are also exported for direct access if needed.

- `setMaxSpeed(s)`: Sets the maximum printer speed in mm/s for speed-based color normalization.
- `getMaxSpeed()`: Returns the currently set maximum printer speed.
- `setMinSpeed(s)`: Sets the minimum printer speed in mm/s for speed-based color normalization.
- `getMinSpeed()`: Returns the currently set minimum printer speed.
- `getTravelColours()`: Returns the array of hex color strings used for the travel line palette.
- `setTravelColours(colours)`: Sets the array of hex color strings for the travel line palette.
- `getExtrudeColours()`: Returns the array of hex color strings used for the extrude line palette.
- `setExtrudeColours(colours)`: Sets the array of hex color strings for the extrude line palette.
- `getGcode()`: Returns the accumulated GCode commands as a single string, separated by newlines.
- `resizeGeometries(newWidth, newHeight)`: Resizes the vertices of the travel and extrude geometries based on new viewport dimensions.
- `setGeometryDimensions(width, height)`: Sets the internal `currentWidth` and `currentHeight` used by `resizeGeometries`.
- `setTravelLineGlow(intensity)`: Sets the emissive intensity of the travel line material.
- `setExtrudeLineGlow(intensity)`: Sets the emissive intensity of the extrude line material.
- `makeTravelLineSegments({color, opacity, emissiveIntensity})`: Creates and returns a Three.js `LineSegments` object for travel paths with a shader material for speed-based coloring.
- `makeAnimationLine()`: Creates and returns a Three.js `LineSegments` object used for animating the print head's current move.
- `makeExtrudeLineSegments({color, opacity, emissiveIntensity})`: Creates and returns a Three.js `LineSegments` object for extrude paths with a shader material for speed-based coloring.
- `makePrintHeadMarker({ radius, height, color })`: Creates and returns a Three.js `Mesh` (a cone) to represent the printer's print head.
- `makePrinterEventHandler({ x, y, z, delay, debug })`: Creates and returns an event handler object with `printEvent`, `errorEvent`, and `gcodeEvent` methods, designed to be registered with a `LivePrinter` instance. It uses the provided `x`, `y`, `z` functions to translate bed coordinates to scene coordinates.
