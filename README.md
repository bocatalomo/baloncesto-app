# 🏀 Baloncesto App

React Native app para selección de equipos de la NBA con navegación entre pantallas, construida con Expo.

## 📱 Características

- ✅ **Selección de equipos**: 5 equipos de la NBA disponibles (Lakers, Celtics, Warriors, Bulls, Heat)
- 🔄 **Navegación fluida**: Sistema de navegación entre pantallas con React Navigation
- 👥 **Modo 2 jugadores**: Interfaz dual para selección simultánea de equipos
- 🎨 **UI moderna**: Diseño oscuro con colores característicos de cada equipo
- 📱 **Multiplataforma**: Funciona en iOS, Android y Web

## 🛠️ Stack Tecnológico

- **Framework**: React Native 0.81.5
- **Plataforma**: Expo SDK ~54.0.31
- **Navegación**: React Navigation v6
- **React**: 19.1.0
- **Lenguaje**: JavaScript (ES6+)

## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- Expo Go en tu dispositivo móvil o Expo CLI en tu computadora

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/bocatalomo/baloncesto-app.git
cd baloncesto-app

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

### Ejecutar en diferentes plataformas

```bash
# Escanear código QR con Expo Go (móvil)
npm start

# Ejecutar en simulador de Android
npm run android

# Ejecutar en simulador de iOS
npm run ios

# Ejecutar en navegador web
npm run web
```

## 📁 Estructura del Proyecto

```
baloncesto-app/
├── 📄 App.js                    # Configuración principal y navegador
├── 📄 package.json              # Dependencias y scripts
├── 📄 app.json                  # Configuración de Expo
├── 📄 AGENTS.md                 # Guía para desarrolladores
├── 📁 assets/                   # Recursos estáticos
│   ├── lakers.png              # Logo Lakers
│   ├── celtics.png             # Logo Celtics
│   ├── warriors.png            # Logo Warriors
│   ├── bulls.png               # Logo Bulls
│   ├── heat.png                # Logo Heat
│   └── teams.js                # Datos de equipos y jugadores
├── 📁 screens/                  # Pantallas de la aplicación
│   ├── TeamSelectionScreen.js   # Pantalla de selección de equipos
│   └── GameScreen.js           # Pantalla de juego
└── 📄 index.js                  # Entry point de Expo
```

## 🎮 Funcionalidad

### 1. Pantalla de Selección de Equipos (`TeamSelectionScreen`)
- Dos columnas para Jugador 1 y Jugador 2
- Navegación circular por los equipos disponibles
- Botones "CAMBIAR" para seleccionar diferentes equipos
- Botón "PLAY" para iniciar el juego

### 2. Pantalla de Juego (`GameScreen`)
- Muestra los equipos seleccionados
- Visualización de jugadores por equipo
- Sin botones de interacción (solo visualización)

## 🔄 Flujo de Navegación

```
App.js (StackNavigator)
    ↓
TeamSelectionScreen (selección de equipos)
    ↓ [botón PLAY]
GameScreen (muestra equipos seleccionados)
```

## 📦 Equipos Disponibles

| Equipo | Jugadores Titulares |
|--------|-------------------|
| **Lakers** | LeBron James, Anthony Davis, Austin Reaves, D'Angelo Russell, Rui Hachimura |
| **Celtics** | Jayson Tatum, Jaylen Brown, Kristaps Porzingis, Derrick White, Al Horford |
| **Warriors** | Stephen Curry, Klay Thompson, Andrew Wiggins, Jonathan Kuminga, Draymond Green |
| **Bulls** | Zach LaVine, Nikola Vucevic, Coby White, Patrick Williams, Alex Caruso |
| **Heat** | Jimmy Butler, Bam Adebayo, Tyler Herro, Nikola Jovic, Duncan Robinson |

## 🎨 Diseño y Estilos

- **Tema**: Interfaz oscura (`#121212`)
- **Colores de énfasis**:
  - Dorado para etiquetas de jugadores (`#FFD700`)
  - Naranja para botones cambiar (`#FF5722`)
  - Verde para botón play (`#4CAF50`)
- **Tipografía**: System fonts con pesos específicos para jerarquía visual

## 🔧 Comandos Útiles

```bash
# Instalar nuevas dependencias
npm install nombre-del-paquete

# Limpiar caché de Expo
expo start -c

# Ver logs del dispositivo
npx expo start --dev-client

# Generar APK (Android)
expo build:android

# Generar IPA (iOS)
expo build:ios
```

## 🤝 Contribución

1. Fork del repositorio
2. Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

Creado por [bocatalomo](https://github.com/bocatalomo)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!