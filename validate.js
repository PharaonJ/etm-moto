/* Outil de contrôle de la banque ETM (usage développement) : node validate.js
   Vérifie le format ETM de chaque question et la répartition par thème. */
const path = require("path");
global.window = {};
require(path.join(__dirname, "questions.js"));
const B = global.window.ETM_BANK;
const themes = Object.keys(B.themes);
const qs = B.questions;
const problems = [];
const ids = new Set();
const counts = {};
themes.forEach(t => counts[t] = 0);
qs.forEach((q, i) => {
  const where = q.id || ("#" + i);
  if (!q.id) problems.push(where + ": id manquant");
  if (ids.has(q.id)) problems.push(where + ": id en double");
  ids.add(q.id);
  if (!themes.includes(q.theme)) problems.push(where + ": theme inconnu (" + q.theme + ")");
  else counts[q.theme]++;
  if (!q.enonce) problems.push(where + ": enonce manquant");
  const props = q.propositions || [];
  if (!Array.isArray(props) || props.length < 2 || props.length > 4)
    problems.push(where + ": propositions doivent etre 2 a 4 (trouve " + props.length + ")");
  const pids = props.map(p => p.id);
  if (new Set(pids).size !== pids.length) problems.push(where + ": ids de propositions en double");
  const br = q.bonnesReponses || [];
  if (br.length < 1) problems.push(where + ": aucune bonne reponse");
  if (br.length >= pids.length) problems.push(where + ": pas de mauvaise reponse (toutes bonnes)");
  br.forEach(id => { if (!pids.includes(id)) problems.push(where + ": bonneReponse '" + id + "' absente des propositions"); });
  if (!q.explication) problems.push(where + ": explication manquante");
});
console.log("Total questions :", qs.length);
console.log("Par theme       :", JSON.stringify(counts));
console.log("Problemes       :", problems.length);
problems.slice(0, 50).forEach(p => console.log("  - " + p));
