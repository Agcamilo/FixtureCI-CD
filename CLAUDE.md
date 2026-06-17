# Mundial 2026 — Plan del Proyecto

## Descripción
Aplicación web de fixture del Mundial de Fútbol 2026. Muestra todos los partidos, grupos y un contador regresivo en tiempo real para el próximo partido de Argentina. Sin autenticación ni sistema de usuarios.

## Stack técnico
- **React 19** + **Vite** — scaffolding y bundler
- **Chakra UI v2** — sistema de componentes UI
- **React Router DOM v6** — enrutamiento SPA
- **Emotion** + **Framer Motion** — peer deps de Chakra

## Estructura del proyecto

```
src/
├── data/
│   ├── groups.js       # 12 grupos con sus 4 equipos y banderas
│   └── matches.js      # 104 partidos: 72 fase de grupos + 32 eliminatorias
├── components/
│   ├── Navbar.jsx      # Barra de navegación con 4 tabs
│   ├── Ticker.jsx      # Marquee informativo (barra negra superior)
│   ├── Countdown.jsx   # Contador regresivo al próximo partido de Argentina
│   ├── MatchCard.jsx   # Tarjeta de un partido (equipos, hora, sede)
│   └── GroupCard.jsx   # Tarjeta de un grupo con sus equipos
├── pages/
│   ├── Home.jsx        # Inicio: héroe + countdown + camino de Argentina + stats
│   ├── Fixture.jsx     # Lista de los 104 partidos con filtros
│   ├── Groups.jsx      # Grilla de los 12 grupos
│   └── MiSeleccion.jsx # Vista dedicada a Argentina (grupo J)
├── theme.js            # Tema personalizado de Chakra UI
├── App.jsx             # Router y layout principal
└── main.jsx            # Entry point con ChakraProvider + BrowserRouter
```

## Páginas y funcionalidades

### / — Inicio
- Título gigante "MUNDIAL 2026"
- Countdown en tiempo real al próximo partido de Argentina (actualiza cada segundo)
- Sección "Camino de Argentina" con scroll horizontal mostrando desde fase de grupos hasta la final
- Barra de estadísticas: 104 partidos, 48 selecciones, 12 grupos, 16 sedes, 39 días

### /fixture — Fixture completo
- Lista de los 104 partidos ordenados por fase
- Filtro por fase (Grupos / 16avos / Octavos / Cuartos / Semis / Final)
- Filtro por grupo (A–L), disponible solo en fase de grupos
- Buscador de texto libre (equipo, ciudad, sede)
- Partidos de Argentina destacados con borde azul

### /grupos — Fase de Grupos
- Grilla 4 columnas (responsive) con los 12 grupos
- Cada tarjeta muestra las 4 selecciones con su bandera emoji

### /mi-seleccion — Argentina
- Los 3 partidos de la fase de grupos con detalle completo
- Ruta eliminatoria desde 16avos hasta la Final (estado "por confirmar")

## Datos

### Grupos (groups.js)
12 grupos (A–L) con 4 equipos cada uno:
- Grupos A–D, J: datos oficiales del sorteo
- Grupos E–I, K–L: basados en el draw real de diciembre 2024

### Partidos (matches.js)
- **72 partidos** de fase de grupos con fecha, hora (en horario argentino UTC-3), sede y ciudad
- **32 partidos** de fase eliminatoria (16avos a Final) con sedes confirmadas
- Función `getNextArgentinaMatch()` devuelve el próximo partido de Argentina desde `new Date()`
- Los 3 partidos de Argentina en fase de grupos son los datos exactos publicados:
  - MD1: 16 Jun 22:00 → Argentina vs Argelia — Arrowhead Stadium, Kansas City
  - MD2: 22 Jun 14:00 → Argentina vs Austria — AT&T Stadium, Dallas
  - MD3: 27 Jun 23:00 → Jordania vs Argentina — AT&T Stadium, Dallas

## Lógica del countdown
El componente `Countdown` llama a `getNextArgentinaMatch()` para obtener el próximo partido.
Construye un `Date` con offset `-03:00` y recalcula el tiempo restante cada 1 segundo con `setInterval`.
Cuando no queda ningún partido, muestra un mensaje de fin de torneo.

## Cómo correr el proyecto
```bash
npm install
npm run dev
```
La app queda en `http://localhost:5173`.

## Posibles mejoras futuras
- Agregar resultados reales una vez que se jueguen los partidos
- Modo oscuro (Chakra lo soporta nativamente)
- Selección de "mi equipo" dinámica (no solo Argentina)
- Notificaciones push antes de cada partido
- Bracket visual para la fase eliminatoria
