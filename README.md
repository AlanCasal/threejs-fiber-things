<p align="center">
  <img src="./assets/demo/sandwich.gif" width=30%>
  <img src="./assets/demo/geometry.gif" width=30%>
</p>
<p align="center">
  <img src="./assets/demo/starlink.gif" width=30%>
  <img src="./assets/demo/character.gif" width=30%>
</p>

# 3D Playground

> A React Native + Expo 3D sandbox where different interactive scenes are built with Three.js, React Three Fiber, and native orbit controls.

[![Last Commit](https://img.shields.io/github/last-commit/AlanCasal/threejs-fiber-things?style=for-the-badge&logo=github)](https://github.com/AlanCasal/threejs-fiber-things/commits/master)
[![3D Playground](https://img.shields.io/badge/type-3D%20playground-0EA5E9?style=for-the-badge)](https://github.com/AlanCasal/threejs-fiber-things)

### Core Stack

[![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/react_native-0.76-20232A?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![React](https://img.shields.io/badge/react-18.3-149ECA?style=for-the-badge&logo=react)](https://react.dev/)
[![Expo](https://img.shields.io/badge/expo-52-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![Expo Router](https://img.shields.io/badge/expo_router-4.0-111111?style=for-the-badge)](https://docs.expo.dev/router/introduction/)
[![NativeWind](https://img.shields.io/badge/nativewind-4.1-38B2AC?style=for-the-badge)](https://www.nativewind.dev/)

### 3D Libraries

[![Three.js](https://img.shields.io/badge/three-0.174-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/react_three_fiber-8.x-111111?style=for-the-badge)](https://docs.pmnd.rs/react-three-fiber)
[![Drei](https://img.shields.io/badge/drei-9.x-1F2937?style=for-the-badge)](https://github.com/pmndrs/drei)
[![expo-gl](https://img.shields.io/badge/expo_gl-15.0-000020?style=for-the-badge)](https://docs.expo.dev/versions/latest/sdk/gl-view/)
[![Orbit Controls](https://img.shields.io/badge/r3f_native_orbitcontrols-1.0-7C3AED?style=for-the-badge)](https://www.npmjs.com/package/r3f-native-orbitcontrols)
[![Skia](https://img.shields.io/badge/react_native_skia-1.5-0F766E?style=for-the-badge)](https://shopify.github.io/react-native-skia/)

## Project Health

[![Tests Not Configured](https://img.shields.io/badge/tests-not%20configured-lightgrey?style=for-the-badge)](#project-health)
[![Coverage Not Configured](https://img.shields.io/badge/coverage-not%20configured-lightgrey?style=for-the-badge)](#project-health)

## Why This Project Stands Out

- 🎮 Multiple scene experiments in one app (geometry, starlink, character animation, sandwich builder).
- 📱 Built on React Native + Expo while still rendering rich 3D interactions.
- 🧲 Touch-based orbit controls for intuitive model inspection.
- ✨ Blend of imported GLB assets and procedural mesh experiments.
- 🎨 Simple but effective NativeWind styling for scene wrappers and controls.

## Current Scenes

- 📐 `Simple geometry`: interactive boxes that animate/scale when tapped.
- 📡 `Starlink`: animated GLB model with draggable orbit controls.
- 🧍🏼 `Character - Catwalk`: animated character preview with loading state.
- 🥪 `Sandwich`: ingredient stack with animated transitions and UI controls.

## Architecture Snapshot

- Routing is powered by Expo Router (`src/app`) with:
  - `index` redirecting to `/home`
  - `home` as the scene launcher
  - scene routes under `src/app/(models)/`
- Reusable layout components:
  - `LayoutA` for simple canvas scenes
  - `LayoutOrbitControls` for camera interaction scenes
- 3D scene components live in `src/components/3dModels/*`.
- Shared UI primitives and helpers live under `src/components/common` and `src/hooks`.

## Tech Stack

### Runtime & Framework

- React Native
- Expo SDK 52
- TypeScript
- Expo Router

### 3D & Rendering

- Three.js
- @react-three/fiber
- @react-three/drei
- expo-gl
- r3f-native-orbitcontrols
- three-stdlib
- @react-spring/three

### Styling & State

- NativeWind + Tailwind CSS
- Zustand

## Quick Start

Pre-requisites:

- Node.js 18+
- Android Studio + Android emulator (recommended for this setup)

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run start
```

Run targets:

```bash
npm run android
npm run ios
npm run web
```

For first native build or native-module changes:

```bash
npx expo prebuild
```

## Demo Gallery

- 🎥 [Sandwich demo](./assets/demo/sandwich.gif)
- 🎥 [Geometry demo](./assets/demo/geometry.gif)
- 🎥 [Starlink demo](./assets/demo/starlink.gif)
- 🎥 [Character demo](./assets/demo/character.gif)

## Credits

- Thanks [Rakha Wibowo](https://www.youtube.com/@rakhawibowo) for the tutorials that inspired:
  - [Starlink](https://www.youtube.com/watch?v=iRavet_Zau8)
  - [3D character](https://www.youtube.com/watch?v=SP0O5o9BJVA&t=341s)
- Thanks [Wawa Sensei](https://www.youtube.com/@WawaSensei) for the [animated sandwich tutorial](https://www.youtube.com/watch?v=oCU5j5P20To&t=63s).
