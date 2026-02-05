# AGENTS.md - Guide for AI Coding Assistants

React Native basketball team selection app built with Expo SDK ~54.0.31 and React Navigation.

## Build/Test/Lint Commands

### Development
- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run in web browser

### Testing (Not Currently Configured)
- Recommended: `npm install --save-dev @testing-library/react-native jest`
- Run all tests: `npm test`
- Run single test: `npm test -- --testNamePattern="testName"`
- Run test file: `npm test -- path/to/file.test.js`

### Linting (Not Currently Configured)
- Recommended: `npm install --save-dev eslint eslint-plugin-react-native prettier`
- Add scripts: `"lint": "eslint .", "format": "prettier --write ."`

## Code Style Guidelines

### Language & Framework
- **Language**: JavaScript (ES6+) - No TypeScript
- **Framework**: React Native 0.81.5 with Expo
- **React**: 19.1.0
- **Navigation**: @react-navigation/native ^7.1.28, @react-navigation/stack ^7.6.16

### Import Order
```javascript
// 1. React imports
import React, { useState } from 'react';
// 2. React Native components (alphabetically)
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 3. Third-party libraries
import { useNavigation } from '@react-navigation/native';
// 4. Local components
import TeamSelectionScreen from './screens/TeamSelectionScreen';
// 5. Assets
import lakersLogo from '../assets/lakers.png';
```

### Naming Conventions (Spanish)
- **Components**: PascalCase (`TeamSelectionScreen`)
- **Files**: PascalCase (`TeamSelectionScreen.js`)
- **Variables/Functions**: camelCase in Spanish (`equipoJugador1`, `cambiarEquipoJugador1`)
- **State**: Descriptive Spanish (`puntosJugador1`, `equipoJugador2`)
- **Styles**: camelCase in Spanish (`pantallaCompleta`, `botonCambiar`)
- **Event handlers**: Action prefix in Spanish (`sumarPuntos`, `finalizarJuego`)

### Component Structure
```javascript
// Imports (with Spanish comments)
import React, { useState } from 'react';

// Constants/data
const equipos = [{ nombre: "LAKERS", logo: lakersLogo, jugadores: [...] }];

// Component function
export default function ComponentName({ route }) {
  // Navigation hook
  const navigation = useNavigation();
  
  // State declarations
  const [equipoJugador1, setEquipoJugador1] = useState(0);
  
  // Event handlers
  const cambiarEquipo = () => { ... };
  
  // Return JSX
  return (<View style={styles.pantallaCompleta}>...</View>);
}

// Styles at bottom
const styles = StyleSheet.create({ ... });
```

### Styling
- Always use `StyleSheet.create()` for performance
- Spanish style names matching existing patterns:
  - `pantallaCompleta`, `contenedorDeColumnas`, `columna`
  - `etiquetaJugador`, `logoImagen`, `nombreEquipo`
  - `listaJugadores`, `cajaJugador`, `nombreJugador`
  - `botonCambiar`, `textoBoton`, `botonPlay`

**Color Scheme:**
- Background: `#121212` | Containers: `#333333` | Player boxes: `#444444`
- Text: `#FFFFFF` | Player names: `#CCCCCC` | Labels: `#FFD700`
- Orange button: `#FF5722` | Green button: `#4CAF50` | Blue button: `#2196F3`

### Comments
- Write comments in Spanish to match existing codebase
- Comment major sections: imports, data, component, styles
- Focus on "what" not "how"

```javascript
// Importo las herramientas que necesito de React y React Native
// Estados para guardar qué equipo tiene cada jugador
// Función para cambiar el equipo del jugador 1
```

### Error Handling
- Use `onError` prop for Image components
- Use try-catch for async operations
- Error messages in Spanish

```javascript
<Image 
  source={equipos[equipoJugador1].logo} 
  onError={(error) => console.log('Error loading image:', error.nativeEvent.error)}
/>
```

## File Structure
```
/
├── App.js                          # Main entry - Stack Navigator setup
├── index.js                        # Expo registration
├── screens/
│   ├── TeamSelectionScreen.js      # Team selection UI
│   ├── GameScreen.js               # Game with scoring
│   └── WinnerScreen.js             # Results display
└── assets/
    ├── teams.js                    # Team data
    └── [team logos].png            # Image assets
```

## Key Patterns

### Circular Team Navigation
```javascript
const cambiarEquipo = () => {
  setEquipoJugador1(equipoJugador1 + 1);
  if (equipoJugador1 >= equipos.length - 1) {
    setEquipoJugador1(0);
  }
};
```

### Navigation Between Screens
```javascript
// Navigate with params
navigation.navigate('Game', { equipoJugador1, equipoJugador2 });

// Receive params
const { equipoJugador1, equipoJugador2 } = route.params;
```

### Player List Rendering
```javascript
{equipos[equipoJugador1].jugadores.map((jugador, index) => (
  <View key={index} style={styles.cajaJugador}>
    <Text style={styles.nombreJugador}>{jugador}</Text>
  </View>
))}
```

## Data Structure
```javascript
const equipos = [
  {
    nombre: "LAKERS",           // Team name (uppercase)
    logo: lakersLogo,           // Imported image asset
    jugadores: ["Player1", ...] // Array of 5 players
  }
];
```

## Development Workflow

### Before Changes
1. Read existing code patterns
2. Follow Spanish naming conventions
3. Use existing style names

### After Changes
1. Test on device/emulator
2. Check console for errors
3. Verify image loading
4. Maintain responsive layout

## Important Notes
- All user-facing text in Spanish
- Variables and comments in Spanish
- No TypeScript - plain JavaScript only
- Image assets in `/assets/` directory
- Screen navigation uses Stack Navigator with `headerShown: false`
