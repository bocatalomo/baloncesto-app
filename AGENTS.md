# AGENTS.md - Guide for AI Coding Assistants

This React Native basketball team selection app is built with Expo and uses React Navigation for screen management.

## Build/Test/Lint Commands

### Development Commands
- `npm start` or `expo start` - Start the Expo development server
- `npm run android` or `expo start --android` - Run on Android device/emulator  
- `npm run ios` or `expo start --ios` - Run on iOS device/simulator
- `npm run web` or `expo start --web` - Run in web browser

### Testing
- **No test framework currently configured**
- Recommended setup: `npm install --save-dev @testing-library/react-native jest`
- Run all tests: `npm test` (once configured)
- Run specific test: `npm test -- --testNamePattern="testName"`
- Add to package.json scripts: `"test": "jest"`

### Linting/Formatting
- **No linting framework currently configured**
- Recommended ESLint setup: `npm install --save-dev eslint eslint-plugin-react-native`
- Recommended Prettier setup: `npm install --save-dev prettier`
- Add scripts: `"lint": "eslint .", "format": "prettier --write ."`

## Code Style Guidelines

### Language & Framework
- **Primary Language**: JavaScript (ES6+)
- **Framework**: React Native with Expo SDK ~54.0.31
- **React Version**: 19.1.0
- **TypeScript**: Not currently used (plain JavaScript)
- **Architecture**: Single screen app with component-based structure

### Import Conventions
```javascript
// React imports first
import React, { useState } from 'react';

// React Native components next (grouped alphabetically)
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Local imports last (relative paths)
import TeamSelectionScreen from './screens/TeamSelectionScreen';
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
```

**Import Order Rules:**
1. React and React Native imports
2. Third-party libraries (if any)
3. Local component imports (relative paths)
4. Asset imports (images, etc.)
5. Keep imports on separate lines (no multi-line imports)

### Naming Conventions
- **Components**: PascalCase (e.g., `TeamSelectionScreen`)
- **Variables/Functions**: camelCase, preferably in Spanish (e.g., `equipoJugador1`, `cambiarEquipoJugador1`)
- **Constants**: UPPER_SNAKE_CASE for data constants (e.g., `equipos`)
- **Files**: PascalCase for components (e.g., `TeamSelectionScreen.js`)
- **Styles**: camelCase keys, preferably in Spanish (e.g., `pantallaCompleta`, `botonCambiar`)
- **State Variables**: Descriptive Spanish names indicating purpose (e.g., `equipoJugador1`, `equipoJugador2`)
- **Event Handlers**: Prefix with action in Spanish (e.g., `cambiarEquipoJugador1`)

### Component Structure
```javascript
// Import statements at top (with comments in Spanish)
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Asset imports
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';

// Data/constants after imports (with Spanish comments)
const equipos = [
  {
    nombre: "LAKERS",
    logo: lakersLogo,
    jugadores: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"]
  }
  // ... more teams
];

// Component function (with Spanish comment)
export default function TeamSelectionScreen() {
  // State declarations first (with Spanish comments)
  const [equipoJugador1, setEquipoJugador1] = useState(0);
  const [equipoJugador2, setEquipoJugador2] = useState(1);
  
  // Event handlers (with Spanish comments)
  const cambiarEquipoJugador1 = () => {
    setEquipoJugador1(equipoJugador1 + 1);
    if (equipoJugador1 >= equipos.length - 1) {
      setEquipoJugador1(0);
    }
  };
  
  // Render return (with Spanish comments)
  return (
    <View style={styles.pantallaCompleta}>
      {/* JSX content with Spanish comments */}
    </View>
  );
}

// Stylesheet at the bottom (with Spanish comments)
const styles = StyleSheet.create({
  // Style definitions with Spanish comments
  pantallaCompleta: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
```

### Styling Guidelines
- Use `StyleSheet.create()` for performance
- Group related styles together
- Use descriptive Spanish names matching existing codebase:
  - `pantallaCompleta` - Full screen container
  - `contenedorDeColumnas` - Column container
  - `columna` - Individual column
  - `etiquetaJugador` - Player label
  - `logoImagen` - Team logo image style
  - `nombreEquipo` - Team name text style
  - `listaJugadores` - Player list container
  - `cajaJugador` - Individual player box
  - `nombreJugador` - Player name text style
  - `botonCambiar` - Change button style
  - `textoBoton` - Button text style
  - `botonPlay` - Play button style
  - `textoPlay` - Play button text style

**Color Scheme:**
- Background: `#121212` (dark gray)
- Containers: `#333333` (medium gray)
- Player boxes: `#444444` (lighter gray)
- Player names: `#CCCCCC` (light gray)
- Player labels: `#FFD700` (gold)
- Change button: `#FF5722` (orange)
- Play button: `#4CAF50` (green)
- Text: `#FFFFFF` (white)

### State Management
- Use React hooks (`useState`, `useEffect`) for local state
- State variables should be descriptive and in Spanish to match existing code
- Separate state for different data concerns
- Use array indices for team selection (0-based indexing)
- Implement circular navigation for team selection (wrap around to first team after last)

**State Pattern Example:**
```javascript
const [equipoJugador1, setEquipoJugador1] = useState(0);  // Player 1 team index
const [equipoJugador2, setEquipoJugador2] = useState(1);  // Player 2 team index
```

### Comments & Documentation
- Comments in Spanish to match existing codebase style
- Brief, functional comments explaining purpose
- Focus on "what" rather than "how"
- Comment every major section: imports, data, component, styles
- Use inline comments for complex logic or JSX sections

**Comment Style Examples:**
```javascript
// Importo las herramientas que necesito de React y React Native
import React, { useState } from 'react';

// Estados para guardar qué equipo tiene cada jugador
const [equipoJugador1, setEquipoJugador1] = useState(0);

/* Contenedor que tiene las dos columnas una al lado de la otra */
<View style={styles.contenedorDeColumnas}>
```

### File Organization
```
/
├── App.js                 # Main app entry point
├── index.js              # Expo registration
├── app.json              # Expo configuration
├── package.json          # Dependencies
├── screens/              # Screen components
│   └── TeamSelectionScreen.js
└── assets/               # Images and static files
    ├── teams.js          # Team data
    └── [image files]
```

### Error Handling
- Use try-catch for async operations
- Validate user inputs where appropriate
- Provide user-friendly error messages in Spanish
- Add error handling for image loading with `onError` prop
- Use console.log for debugging (remove in production)

**Image Error Handling Example:**
```javascript
<Image 
  source={equipos[equipoJugador1].logo} 
  style={styles.logoImagen} 
  resizeMode="contain"
  onError={(error) => console.log('Error loading image Player1:', error.nativeEvent.error)}
/>
```

### Performance Considerations
- Use `StyleSheet.create()` for style optimization
- Avoid unnecessary re-renders with proper state management
- Optimize images for mobile (use appropriate formats/sizes)

### Localization
- All user-facing text should be in Spanish
- Variable names and comments should be in Spanish to match existing code

## Development Notes

### Current Features
- Team selection interface for 2 players
- 5 NBA teams available (Lakers, Celtics, Warriors, Bulls, Heat)
- Team switching functionality with circular navigation
- Dark theme UI with team colors
- Local image assets for team logos
- Responsive layout with flexbox
- Touchable buttons for team switching
- React Navigation Stack for screen management

**Data Structure:**
- Teams stored in `equipos` array with `nombre`, `logo`, `jugadores` properties
- Each team has 5 players in a `jugadores` array
- Team selection uses array indices (0-4)
- Navigation parameters passed between screens: `equipoJugador1`, `equipoJugador2`

### Expo Configuration
- Orientation: Portrait
- Interface Style: Light (status bar)
- New Architecture Enabled: true
- Supports iOS tablets and Android edge-to-edge

### Dependencies
- Core: React 19.1.0, React Native 0.81.5
- Platform: Expo SDK ~54.0.31
- Navigation: @react-navigation/native ^7.1.28, @react-navigation/stack ^7.6.16
- Status bar: expo-status-bar ~3.0.9
- Safe area: react-native-safe-area-context ~5.6.0
- Screens: react-native-screens ~4.16.0

## Testing Recommendations
When adding tests, use:
- `@testing-library/react-native` for component testing
- Jest as test runner
- Test files named `*.test.js` or `*.spec.js`
- Test user interactions, state changes, and rendering
- Test team switching logic and state updates
- Test image loading and error handling

**Example Test Structure:**
```javascript
import { render, fireEvent } from '@testing-library/react-native';
import TeamSelectionScreen from '../screens/TeamSelectionScreen';

test('should switch player 1 team when change button is pressed', () => {
  const { getByText } = render(<TeamSelectionScreen />);
  const changeButton = getByText('CAMBIAR');
  fireEvent.press(changeButton);
  // Assert team changed
});
```

## Development Workflow

### Before Making Changes
1. Read existing code to understand patterns
2. Check current state management approach
3. Follow Spanish naming conventions
4. Maintain consistent styling approach

### After Making Changes
1. Test on multiple platforms if possible
2. Check for console errors
3. Verify image loading works correctly
4. Ensure responsive layout is maintained

## Code Patterns & Best Practices

### Team Navigation Pattern
```javascript
const cambiarEquipoJugador1 = () => {
  setEquipoJugador1(equipoJugador1 + 1);
  if (equipoJugador1 >= equipos.length - 1) {
    setEquipoJugador1(0);  // Circular navigation
  }
};
```

### Image Rendering Pattern
```javascript
<Image 
  key={`player1-${equipoJugador1}`}  // Key for re-rendering
  source={equipos[equipoJugador1].logo} 
  style={styles.logoImagen} 
  resizeMode="contain"
  onError={(error) => console.log('Error loading image:', error.nativeEvent.error)}
/>
```

### Player List Rendering Pattern
```javascript
<View style={styles.listaJugadores}>
  {equipos[equipoJugador1].jugadores.map((jugador, index) => (
    <View key={index} style={styles.cajaJugador}>
      <Text style={styles.nombreJugador}>{jugador}</Text>
    </View>
  ))}
</View>
```

### Button Pattern
```javascript
<TouchableOpacity style={styles.botonCambiar} onPress={cambiarEquipoJugador1}>
  <Text style={styles.textoBoton}>CAMBIAR</Text>
</TouchableOpacity>
```

## Development Workflow

### Before Making Changes
1. Read existing code to understand patterns
2. Check current state management approach
3. Follow Spanish naming conventions
4. Maintain consistent styling approach

### After Making Changes
1. Test on multiple platforms if possible
2. Check for console errors
3. Verify image loading works correctly
4. Ensure responsive layout is maintained

## Code Patterns & Best Practices

### Team Navigation Pattern
```javascript
const cambiarEquipoJugador1 = () => {
  setEquipoJugador1(equipoJugador1 + 1);
  if (equipoJugador1 >= equipos.length - 1) {
    setEquipoJugador1(0);  // Circular navigation
  }
};
```

### Image Rendering Pattern
```javascript
<Image 
  key={`player1-${equipoJugador1}`}  // Key for re-rendering
  source={equipos[equipoJugador1].logo} 
  style={styles.logoImagen} 
  resizeMode="contain"
  onError={(error) => console.log('Error loading image:', error.nativeEvent.error)}
/>
```

### Player List Rendering Pattern
```javascript
<View style={styles.listaJugadores}>
  {equipos[equipoJugador1].jugadores.map((jugador, index) => (
    <View key={index} style={styles.cajaJugador}>
      <Text style={styles.nombreJugador}>{jugador}</Text>
    </View>
  ))}
</View>
```

### Button Pattern
```javascript
<TouchableOpacity style={styles.botonCambiar} onPress={cambiarEquipoJugador1}>
  <Text style={styles.textoBoton}>CAMBIAR</Text>
</TouchableOpacity>
```

## Git Considerations
- Focus on React Native/Expo specific patterns
- Test on multiple platforms when possible (iOS/Android/Web)
- Be mindful of Expo Go limitations for certain native modules
- Image assets should be stored in `/assets/` directory
- Avoid breaking existing team navigation logic
- Maintain Spanish language consistency throughout codebase