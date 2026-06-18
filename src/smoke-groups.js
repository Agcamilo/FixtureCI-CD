import { groups } from './data/groups.js';

let passed = 0;
let failed = 0;

function check(description, condition) {
  if (condition) {
    console.log(`PASS: ${description}`);
    passed++;
  } else {
    console.log(`FAIL: ${description}`);
    failed++;
  }
}

check('hay 12 grupos', groups.length === 12);

for (const g of groups) {
  check(`Grupo ${g.id}: tiene 4 equipos`, g.teams.length === 4);
  check(`Grupo ${g.id}: ID válido (A-L)`, /^[A-L]$/.test(g.id));
  for (const t of g.teams) {
    const label = t.name || `(equipo sin nombre)`;
    check(`Grupo ${g.id} - ${label}: tiene nombre`, !!t.name);
    check(`Grupo ${g.id} - ${label}: tiene bandera`, !!t.flag);
  }
}

console.log(`\n${passed} pasados / ${failed} fallidos`);
if (failed > 0) process.exit(1);
