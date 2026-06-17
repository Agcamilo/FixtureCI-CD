// All 104 matches of the 2026 FIFA World Cup
// Times shown in Argentine time (UTC-3) for all matches
// Datetime stored as ISO string with -03:00 offset

export const PHASES = {
  GROUPS: 'groups',
  R32: 'r32',
  R16: 'r16',
  QF: 'qf',
  SF: 'sf',
  THIRD: '3rd',
  FINAL: 'final',
};

export const PHASE_LABELS = {
  groups: 'Fase de Grupos',
  r32: '16avos de Final',
  r16: 'Octavos de Final',
  qf: 'Cuartos de Final',
  sf: 'Semifinal',
  '3rd': 'Tercer Puesto',
  final: 'Final',
};

export const matches = [
  // ═══════════════════════════════════════════
  // JUEVES 11 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 1, phase: 'groups', group: 'A', matchday: 1,
    date: '2026-06-11', time: '16:00',
    home: 'México', homeFlag: '🇲🇽',
    away: 'Sudáfrica', awayFlag: '🇿🇦',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },
  {
    id: 2, phase: 'groups', group: 'B', matchday: 1,
    date: '2026-06-11', time: '23:00',
    home: 'Corea del Sur', homeFlag: '🇰🇷',
    away: 'República Checa', awayFlag: '🇨🇿',
    venue: 'Estadio Akron', city: 'Guadalajara',
  },

  // ═══════════════════════════════════════════
  // VIERNES 12 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 3, phase: 'groups', group: 'C', matchday: 1,
    date: '2026-06-12', time: '16:00',
    home: 'Canadá', homeFlag: '🇨🇦',
    away: 'Bosnia y Herzegovina', awayFlag: '🇧🇦',
    venue: 'BMO Field', city: 'Toronto',
  },
  {
    id: 4, phase: 'groups', group: 'D', matchday: 1,
    date: '2026-06-12', time: '22:00',
    home: 'Estados Unidos', homeFlag: '🇺🇸',
    away: 'Paraguay', awayFlag: '🇵🇾',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },

  // ═══════════════════════════════════════════
  // SÁBADO 13 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 5, phase: 'groups', group: 'E', matchday: 1,
    date: '2026-06-13', time: '16:00',
    home: 'Catar', homeFlag: '🇶🇦',
    away: 'Suiza', awayFlag: '🇨🇭',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 6, phase: 'groups', group: 'F', matchday: 1,
    date: '2026-06-13', time: '19:00',
    home: 'Brasil', homeFlag: '🇧🇷',
    away: 'Marruecos', awayFlag: '🇲🇦',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 7, phase: 'groups', group: 'F', matchday: 1,
    date: '2026-06-13', time: '22:00',
    home: 'Haití', homeFlag: '🇭🇹',
    away: 'Escocia', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 8, phase: 'groups', group: 'D', matchday: 1,
    date: '2026-06-14', time: '01:00',
    home: 'Australia', homeFlag: '🇦🇺',
    away: 'Turquía', awayFlag: '🇹🇷',
    venue: 'NRG Stadium', city: 'Houston',
  },

  // ═══════════════════════════════════════════
  // DOMINGO 14 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 9, phase: 'groups', group: 'G', matchday: 1,
    date: '2026-06-14', time: '14:00',
    home: 'Alemania', homeFlag: '🇩🇪',
    away: 'Curazao', awayFlag: '🇨🇼',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 10, phase: 'groups', group: 'H', matchday: 1,
    date: '2026-06-14', time: '17:00',
    home: 'Países Bajos', homeFlag: '🇳🇱',
    away: 'Japón', awayFlag: '🇯🇵',
    venue: 'Lincoln Financial Field', city: 'Filadelfia',
  },
  {
    id: 11, phase: 'groups', group: 'G', matchday: 1,
    date: '2026-06-14', time: '20:00',
    home: 'Costa de Marfil', homeFlag: '🇨🇮',
    away: 'Ecuador', awayFlag: '🇪🇨',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 12, phase: 'groups', group: 'H', matchday: 1,
    date: '2026-06-14', time: '23:00',
    home: 'Suecia', homeFlag: '🇸🇪',
    away: 'Túnez', awayFlag: '🇹🇳',
    venue: 'Lumen Field', city: 'Seattle',
  },

  // ═══════════════════════════════════════════
  // LUNES 15 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 13, phase: 'groups', group: 'I', matchday: 1,
    date: '2026-06-15', time: '13:00',
    home: 'España', homeFlag: '🇪🇸',
    away: 'Cabo Verde', awayFlag: '🇨🇻',
    venue: 'BC Place', city: 'Vancouver',
  },
  {
    id: 14, phase: 'groups', group: 'J', matchday: 1,
    date: '2026-06-15', time: '16:00',
    home: 'Bélgica', homeFlag: '🇧🇪',
    away: 'Egipto', awayFlag: '🇪🇬',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 15, phase: 'groups', group: 'I', matchday: 1,
    date: '2026-06-15', time: '19:00',
    home: 'Arabia Saudita', homeFlag: '🇸🇦',
    away: 'Uruguay', awayFlag: '🇺🇾',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },
  {
    id: 16, phase: 'groups', group: 'J', matchday: 1,
    date: '2026-06-15', time: '22:00',
    home: 'Irán', homeFlag: '🇮🇷',
    away: 'Nueva Zelanda', awayFlag: '🇳🇿',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },

  // ═══════════════════════════════════════════
  // MARTES 16 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 17, phase: 'groups', group: 'K', matchday: 1,
    date: '2026-06-16', time: '16:00',
    home: 'Francia', homeFlag: '🇫🇷',
    away: 'Senegal', awayFlag: '🇸🇳',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 18, phase: 'groups', group: 'K', matchday: 1,
    date: '2026-06-16', time: '19:00',
    home: 'Iraq', homeFlag: '🇮🇶',
    away: 'Noruega', awayFlag: '🇳🇴',
    venue: 'NRG Stadium', city: 'Houston',
  },
  {
    id: 19, phase: 'groups', group: 'L', matchday: 1,
    date: '2026-06-16', time: '22:00',
    home: 'Argentina', homeFlag: '🇦🇷',
    away: 'Argelia', awayFlag: '🇩🇿',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 20, phase: 'groups', group: 'L', matchday: 1,
    date: '2026-06-17', time: '01:00',
    home: 'Austria', homeFlag: '🇦🇹',
    away: 'Jordania', awayFlag: '🇯🇴',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },

  // ═══════════════════════════════════════════
  // MIÉRCOLES 17 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 21, phase: 'groups', group: 'A', matchday: 1,
    date: '2026-06-17', time: '14:00',
    home: 'Portugal', homeFlag: '🇵🇹',
    away: 'RD de Congo', awayFlag: '🇨🇩',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },
  {
    id: 22, phase: 'groups', group: 'B', matchday: 1,
    date: '2026-06-17', time: '17:00',
    home: 'Inglaterra', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    away: 'Croacia', awayFlag: '🇭🇷',
    venue: 'Estadio Akron', city: 'Guadalajara',
  },
  {
    id: 23, phase: 'groups', group: 'C', matchday: 1,
    date: '2026-06-17', time: '20:00',
    home: 'Ghana', homeFlag: '🇬🇭',
    away: 'Panamá', awayFlag: '🇵🇦',
    venue: 'BMO Field', city: 'Toronto',
  },
  {
    id: 24, phase: 'groups', group: 'A', matchday: 1,
    date: '2026-06-17', time: '23:00',
    home: 'Uzbekistán', homeFlag: '🇺🇿',
    away: 'Colombia', awayFlag: '🇨🇴',
    venue: 'Estadio BBVA', city: 'Monterrey',
  },

  // ═══════════════════════════════════════════
  // JUEVES 18 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 25, phase: 'groups', group: 'B', matchday: 2,
    date: '2026-06-18', time: '13:00',
    home: 'República Checa', homeFlag: '🇨🇿',
    away: 'Sudáfrica', awayFlag: '🇿🇦',
    venue: 'BC Place', city: 'Vancouver',
  },
  {
    id: 26, phase: 'groups', group: 'E', matchday: 2,
    date: '2026-06-18', time: '16:00',
    home: 'Suiza', homeFlag: '🇨🇭',
    away: 'Bosnia y Herzegovina', awayFlag: '🇧🇦',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 27, phase: 'groups', group: 'C', matchday: 2,
    date: '2026-06-18', time: '19:00',
    home: 'Canadá', homeFlag: '🇨🇦',
    away: 'Catar', awayFlag: '🇶🇦',
    venue: 'Lumen Field', city: 'Seattle',
  },
  {
    id: 28, phase: 'groups', group: 'A', matchday: 2,
    date: '2026-06-18', time: '22:00',
    home: 'México', homeFlag: '🇲🇽',
    away: 'Corea del Sur', awayFlag: '🇰🇷',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },

  // ═══════════════════════════════════════════
  // VIERNES 19 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 29, phase: 'groups', group: 'D', matchday: 2,
    date: '2026-06-19', time: '16:00',
    home: 'Estados Unidos', homeFlag: '🇺🇸',
    away: 'Australia', awayFlag: '🇦🇺',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },
  {
    id: 30, phase: 'groups', group: 'F', matchday: 2,
    date: '2026-06-19', time: '19:00',
    home: 'Escocia', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    away: 'Marruecos', awayFlag: '🇲🇦',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 31, phase: 'groups', group: 'F', matchday: 2,
    date: '2026-06-19', time: '21:30',
    home: 'Brasil', homeFlag: '🇧🇷',
    away: 'Haití', awayFlag: '🇭🇹',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 32, phase: 'groups', group: 'D', matchday: 2,
    date: '2026-06-20', time: '00:00',
    home: 'Turquía', homeFlag: '🇹🇷',
    away: 'Paraguay', awayFlag: '🇵🇾',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },

  // ═══════════════════════════════════════════
  // SÁBADO 20 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 33, phase: 'groups', group: 'H', matchday: 2,
    date: '2026-06-20', time: '14:00',
    home: 'Países Bajos', homeFlag: '🇳🇱',
    away: 'Suecia', awayFlag: '🇸🇪',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 34, phase: 'groups', group: 'G', matchday: 2,
    date: '2026-06-20', time: '17:00',
    home: 'Alemania', homeFlag: '🇩🇪',
    away: 'Costa de Marfil', awayFlag: '🇨🇮',
    venue: 'NRG Stadium', city: 'Houston',
  },
  {
    id: 35, phase: 'groups', group: 'G', matchday: 2,
    date: '2026-06-20', time: '23:00',
    home: 'Ecuador', homeFlag: '🇪🇨',
    away: 'Curazao', awayFlag: '🇨🇼',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 36, phase: 'groups', group: 'H', matchday: 2,
    date: '2026-06-21', time: '01:00',
    home: 'Túnez', homeFlag: '🇹🇳',
    away: 'Japón', awayFlag: '🇯🇵',
    venue: 'Lumen Field', city: 'Seattle',
  },

  // ═══════════════════════════════════════════
  // DOMINGO 21 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 37, phase: 'groups', group: 'I', matchday: 2,
    date: '2026-06-21', time: '13:00',
    home: 'España', homeFlag: '🇪🇸',
    away: 'Arabia Saudita', awayFlag: '🇸🇦',
    venue: 'BC Place', city: 'Vancouver',
  },
  {
    id: 38, phase: 'groups', group: 'J', matchday: 2,
    date: '2026-06-21', time: '16:00',
    home: 'Bélgica', homeFlag: '🇧🇪',
    away: 'Irán', awayFlag: '🇮🇷',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 39, phase: 'groups', group: 'I', matchday: 2,
    date: '2026-06-21', time: '19:00',
    home: 'Uruguay', homeFlag: '🇺🇾',
    away: 'Cabo Verde', awayFlag: '🇨🇻',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },
  {
    id: 40, phase: 'groups', group: 'J', matchday: 2,
    date: '2026-06-21', time: '22:00',
    home: 'Nueva Zelanda', homeFlag: '🇳🇿',
    away: 'Egipto', awayFlag: '🇪🇬',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },

  // ═══════════════════════════════════════════
  // LUNES 22 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 41, phase: 'groups', group: 'L', matchday: 2,
    date: '2026-06-22', time: '14:00',
    home: 'Argentina', homeFlag: '🇦🇷',
    away: 'Austria', awayFlag: '🇦🇹',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 42, phase: 'groups', group: 'K', matchday: 2,
    date: '2026-06-22', time: '18:00',
    home: 'Francia', homeFlag: '🇫🇷',
    away: 'Iraq', awayFlag: '🇮🇶',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 43, phase: 'groups', group: 'K', matchday: 2,
    date: '2026-06-22', time: '21:00',
    home: 'Noruega', homeFlag: '🇳🇴',
    away: 'Senegal', awayFlag: '🇸🇳',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 44, phase: 'groups', group: 'L', matchday: 2,
    date: '2026-06-23', time: '00:00',
    home: 'Jordania', homeFlag: '🇯🇴',
    away: 'Argelia', awayFlag: '🇩🇿',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },

  // ═══════════════════════════════════════════
  // MARTES 23 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 45, phase: 'groups', group: 'A', matchday: 2,
    date: '2026-06-23', time: '14:00',
    home: 'Portugal', homeFlag: '🇵🇹',
    away: 'Uzbekistán', awayFlag: '🇺🇿',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },
  {
    id: 46, phase: 'groups', group: 'B', matchday: 2,
    date: '2026-06-23', time: '17:00',
    home: 'Inglaterra', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    away: 'Ghana', awayFlag: '🇬🇭',
    venue: 'Estadio Akron', city: 'Guadalajara',
  },
  {
    id: 47, phase: 'groups', group: 'C', matchday: 2,
    date: '2026-06-23', time: '20:00',
    home: 'Panamá', homeFlag: '🇵🇦',
    away: 'Croacia', awayFlag: '🇭🇷',
    venue: 'BMO Field', city: 'Toronto',
  },
  {
    id: 48, phase: 'groups', group: 'A', matchday: 2,
    date: '2026-06-23', time: '23:00',
    home: 'Colombia', homeFlag: '🇨🇴',
    away: 'RD de Congo', awayFlag: '🇨🇩',
    venue: 'Estadio BBVA', city: 'Monterrey',
  },

  // ═══════════════════════════════════════════
  // MIÉRCOLES 24 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 49, phase: 'groups', group: 'E', matchday: 3,
    date: '2026-06-24', time: '16:00',
    home: 'Suiza', homeFlag: '🇨🇭',
    away: 'Canadá', awayFlag: '🇨🇦',
    venue: 'BC Place', city: 'Vancouver',
  },
  {
    id: 50, phase: 'groups', group: 'E', matchday: 3,
    date: '2026-06-24', time: '16:00',
    home: 'Bosnia y Herzegovina', homeFlag: '🇧🇦',
    away: 'Catar', awayFlag: '🇶🇦',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 51, phase: 'groups', group: 'F', matchday: 3,
    date: '2026-06-24', time: '19:00',
    home: 'Marruecos', homeFlag: '🇲🇦',
    away: 'Haití', awayFlag: '🇭🇹',
    venue: 'Lumen Field', city: 'Seattle',
  },
  {
    id: 52, phase: 'groups', group: 'F', matchday: 3,
    date: '2026-06-24', time: '19:00',
    home: 'Brasil', homeFlag: '🇧🇷',
    away: 'Escocia', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },
  {
    id: 53, phase: 'groups', group: 'B', matchday: 3,
    date: '2026-06-24', time: '22:00',
    home: 'Sudáfrica', homeFlag: '🇿🇦',
    away: 'Corea del Sur', awayFlag: '🇰🇷',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },
  {
    id: 54, phase: 'groups', group: 'A', matchday: 3,
    date: '2026-06-24', time: '22:00',
    home: 'República Checa', homeFlag: '🇨🇿',
    away: 'México', awayFlag: '🇲🇽',
    venue: 'AT&T Stadium', city: 'Dallas',
  },

  // ═══════════════════════════════════════════
  // JUEVES 25 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 55, phase: 'groups', group: 'G', matchday: 3,
    date: '2026-06-25', time: '17:00',
    home: 'Curazao', homeFlag: '🇨🇼',
    away: 'Costa de Marfil', awayFlag: '🇨🇮',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 56, phase: 'groups', group: 'G', matchday: 3,
    date: '2026-06-25', time: '17:00',
    home: 'Ecuador', homeFlag: '🇪🇨',
    away: 'Alemania', awayFlag: '🇩🇪',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 57, phase: 'groups', group: 'H', matchday: 3,
    date: '2026-06-25', time: '20:00',
    home: 'Japón', homeFlag: '🇯🇵',
    away: 'Suecia', awayFlag: '🇸🇪',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 58, phase: 'groups', group: 'H', matchday: 3,
    date: '2026-06-25', time: '20:00',
    home: 'Túnez', homeFlag: '🇹🇳',
    away: 'Países Bajos', awayFlag: '🇳🇱',
    venue: 'NRG Stadium', city: 'Houston',
  },
  {
    id: 59, phase: 'groups', group: 'D', matchday: 3,
    date: '2026-06-25', time: '23:00',
    home: 'Paraguay', homeFlag: '🇵🇾',
    away: 'Australia', awayFlag: '🇦🇺',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 60, phase: 'groups', group: 'D', matchday: 3,
    date: '2026-06-25', time: '23:00',
    home: 'Turquía', homeFlag: '🇹🇷',
    away: 'Estados Unidos', awayFlag: '🇺🇸',
    venue: 'Estadio BBVA', city: 'Monterrey',
  },

  // ═══════════════════════════════════════════
  // VIERNES 26 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 61, phase: 'groups', group: 'K', matchday: 3,
    date: '2026-06-26', time: '16:00',
    home: 'Noruega', homeFlag: '🇳🇴',
    away: 'Francia', awayFlag: '🇫🇷',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },
  {
    id: 62, phase: 'groups', group: 'K', matchday: 3,
    date: '2026-06-26', time: '16:00',
    home: 'Senegal', homeFlag: '🇸🇳',
    away: 'Iraq', awayFlag: '🇮🇶',
    venue: 'Estadio Akron', city: 'Guadalajara',
  },
  {
    id: 63, phase: 'groups', group: 'I', matchday: 3,
    date: '2026-06-26', time: '21:00',
    home: 'Cabo Verde', homeFlag: '🇨🇻',
    away: 'Arabia Saudita', awayFlag: '🇸🇦',
    venue: 'Estadio BBVA', city: 'Monterrey',
  },
  {
    id: 64, phase: 'groups', group: 'I', matchday: 3,
    date: '2026-06-26', time: '21:00',
    home: 'Uruguay', homeFlag: '🇺🇾',
    away: 'España', awayFlag: '🇪🇸',
    venue: 'Estadio Azteca', city: 'Ciudad de México',
  },
  {
    id: 65, phase: 'groups', group: 'J', matchday: 3,
    date: '2026-06-27', time: '00:00',
    home: 'Egipto', homeFlag: '🇪🇬',
    away: 'Irán', awayFlag: '🇮🇷',
    venue: 'BMO Field', city: 'Toronto',
  },
  {
    id: 66, phase: 'groups', group: 'J', matchday: 3,
    date: '2026-06-27', time: '00:00',
    home: 'Nueva Zelanda', homeFlag: '🇳🇿',
    away: 'Bélgica', awayFlag: '🇧🇪',
    venue: 'BC Place', city: 'Vancouver',
  },

  // ═══════════════════════════════════════════
  // SÁBADO 27 DE JUNIO
  // ═══════════════════════════════════════════
  {
    id: 67, phase: 'groups', group: 'C', matchday: 3,
    date: '2026-06-27', time: '18:00',
    home: 'Croacia', homeFlag: '🇭🇷',
    away: 'Ghana', awayFlag: '🇬🇭',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 68, phase: 'groups', group: 'B', matchday: 3,
    date: '2026-06-27', time: '18:00',
    home: 'Panamá', homeFlag: '🇵🇦',
    away: 'Inglaterra', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    venue: 'Lincoln Financial Field', city: 'Filadelfia',
  },
  {
    id: 69, phase: 'groups', group: 'A', matchday: 3,
    date: '2026-06-27', time: '20:30',
    home: 'Colombia', homeFlag: '🇨🇴',
    away: 'Portugal', awayFlag: '🇵🇹',
    venue: 'Lumen Field', city: 'Seattle',
  },
  {
    id: 70, phase: 'groups', group: 'A', matchday: 3,
    date: '2026-06-27', time: '20:30',
    home: 'RD de Congo', homeFlag: '🇨🇩',
    away: 'Uzbekistán', awayFlag: '🇺🇿',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 71, phase: 'groups', group: 'L', matchday: 3,
    date: '2026-06-27', time: '23:00',
    home: 'Argelia', homeFlag: '🇩🇿',
    away: 'Austria', awayFlag: '🇦🇹',
    venue: 'Lincoln Financial Field', city: 'Filadelfia',
  },
  {
    id: 72, phase: 'groups', group: 'L', matchday: 3,
    date: '2026-06-27', time: '23:00',
    home: 'Jordania', homeFlag: '🇯🇴',
    away: 'Argentina', awayFlag: '🇦🇷',
    venue: 'AT&T Stadium', city: 'Dallas',
  },

  // ═══════════════════════════════════════════
  // 16AVOS DE FINAL (Round of 32)
  // ═══════════════════════════════════════════
  {
    id: 73, phase: 'r32', date: '2026-06-28', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 74, phase: 'r32', date: '2026-06-29', time: '17:30',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },
  {
    id: 75, phase: 'r32', date: '2026-06-29', time: '22:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 76, phase: 'r32', date: '2026-06-29', time: '14:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 77, phase: 'r32', date: '2026-06-30', time: '18:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 78, phase: 'r32', date: '2026-06-30', time: '14:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },
  {
    id: 79, phase: 'r32', date: '2026-06-30', time: '22:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'NRG Stadium', city: 'Houston',
  },
  {
    id: 80, phase: 'r32', date: '2026-07-01', time: '13:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Arrowhead Stadium', city: 'Kansas City',
  },
  {
    id: 81, phase: 'r32', date: '2026-07-01', time: '21:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Lumen Field', city: 'Seattle',
  },
  {
    id: 82, phase: 'r32', date: '2026-07-01', time: '17:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'BMO Field', city: 'Toronto',
  },
  {
    id: 83, phase: 'r32', date: '2026-07-02', time: '20:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'BC Place', city: 'Vancouver',
  },
  {
    id: 84, phase: 'r32', date: '2026-07-02', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Gillette Stadium', city: 'Boston',
  },
  {
    id: 85, phase: 'r32', date: '2026-07-02', time: '00:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Lincoln Financial Field', city: 'Filadelfia',
  },
  {
    id: 86, phase: 'r32', date: '2026-07-03', time: '19:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 87, phase: 'r32', date: '2026-07-03', time: '22:30',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 88, phase: 'r32', date: '2026-07-03', time: '15:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'AT&T Stadium', city: 'Dallas',
  },

  // ═══════════════════════════════════════════
  // OCTAVOS DE FINAL (Round of 16)
  // ═══════════════════════════════════════════
  {
    id: 89, phase: 'r16', date: '2026-07-04', time: '18:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },
  {
    id: 90, phase: 'r16', date: '2026-07-04', time: '14:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'NRG Stadium', city: 'Houston',
  },
  {
    id: 91, phase: 'r16', date: '2026-07-05', time: '17:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 92, phase: 'r16', date: '2026-07-05', time: '21:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 93, phase: 'r16', date: '2026-07-06', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },
  {
    id: 94, phase: 'r16', date: '2026-07-06', time: '21:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
  },
  {
    id: 95, phase: 'r16', date: '2026-07-07', time: '13:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },
  {
    id: 96, phase: 'r16', date: '2026-07-07', time: '17:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Lumen Field', city: 'Seattle',
  },

  // ═══════════════════════════════════════════
  // CUARTOS DE FINAL
  // ═══════════════════════════════════════════
  {
    id: 97, phase: 'qf', date: '2026-07-09', time: '17:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
  {
    id: 98, phase: 'qf', date: '2026-07-10', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Rose Bowl', city: 'Los Ángeles',
  },
  {
    id: 99, phase: 'qf', date: '2026-07-11', time: '18:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 100, phase: 'qf', date: '2026-07-11', time: '22:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'SoFi Stadium', city: 'Los Ángeles',
  },

  // ═══════════════════════════════════════════
  // SEMIFINALES
  // ═══════════════════════════════════════════
  {
    id: 101, phase: 'sf', date: '2026-07-14', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'AT&T Stadium', city: 'Dallas',
  },
  {
    id: 102, phase: 'sf', date: '2026-07-15', time: '16:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },

  // ═══════════════════════════════════════════
  // TERCER PUESTO
  // ═══════════════════════════════════════════
  {
    id: 103, phase: '3rd', date: '2026-07-18', time: '18:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'Hard Rock Stadium', city: 'Miami',
  },

  // ═══════════════════════════════════════════
  // FINAL
  // ═══════════════════════════════════════════
  {
    id: 104, phase: 'final', date: '2026-07-19', time: '18:00',
    home: 'Por confirmar', homeFlag: '❓', away: 'Por confirmar', awayFlag: '❓',
    venue: 'MetLife Stadium', city: 'Nueva York',
  },
];

export const argentinaMatches = matches.filter(
  (m) =>
    m.home === 'Argentina' ||
    m.away === 'Argentina'
);

export const getNextArgentinaMatch = () => {
  const now = new Date();
  return argentinaMatches.find((m) => {
    const matchDate = new Date(`${m.date}T${m.time}:00-03:00`);
    return matchDate > now;
  }) || null;
};