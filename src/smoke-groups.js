import { groups } from './data/groups.js';

let passed = 0;
let failed = 0;

function check(description, condition) {
  if (condition) {
    console.log(`PASS: ${description}`);
    passed++;
  } else {
    console.error(`FAIL: ${description}`);
    failed++;
  }
}

check('hay 12 grupos',                    groups.length === 12);
check('cada grupo tiene 4 equipos',       groups.every((g) => g.teams.length === 4));
check('los ids van de A a L',             groups.every((g) => /^[A-L]$/.test(g.id)));
check('todos los equipos tienen nombre',  groups.every((g) => g.teams.every((t) => t.name)));
check('todos los equipos tienen bandera', groups.every((g) => g.teams.every((t) => t.flag)));

console.log(`\n${passed} pasados / ${failed} fallidos`);
if (failed > 0) process.exit(1);
