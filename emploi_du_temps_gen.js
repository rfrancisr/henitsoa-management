function toMin(hhmm) {
  const parts = hhmm.split(':');
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}
function toHHMM(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}

function buildDay(sessions, matinOnly) {
  const result = [];
  const plagesMatin = [
    { start: toMin('07:30'), end: toMin('08:40') },
    { start: toMin('08:50'), end: toMin('10:00') },
    { start: toMin('10:10'), end: toMin('11:30') },
  ];
  let idx = 0;
  for (const plage of plagesMatin) {
    let cur = plage.start;
    while (idx < sessions.length && cur + sessions[idx].duree <= plage.end) {
      const s = sessions[idx];
      result.push({ debut: toHHMM(cur), fin: toHHMM(cur + s.duree), matiere: s.matiere, type_seance: s.type, duree_minutes: s.duree });
      cur += s.duree;
      idx++;
    }
  }
  if (!matinOnly) {
    const plagesAprem = [
      { start: toMin('14:00'), end: toMin('15:30') },
      { start: toMin('15:40'), end: toMin('17:00') },
    ];
    for (const plage of plagesAprem) {
      let cur = plage.start;
      while (idx < sessions.length && cur + sessions[idx].duree <= plage.end) {
        const s = sessions[idx];
        result.push({ debut: toHHMM(cur), fin: toHHMM(cur + s.duree), matiere: s.matiere, type_seance: s.type, duree_minutes: s.duree });
        cur += s.duree;
        idx++;
      }
    }
  }
  return result;
}

const planning = {
  lundi: buildDay([
    { matiere: 'Malagasy',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Malagasy',  duree: 20, type: 'Ecriture' },
    { matiere: 'Kajy',      duree: 30, type: 'Numeration' },
    { matiere: 'Francais',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Francais',  duree: 20, type: 'Ecriture' },
    { matiere: 'Malagasy',  duree: 20, type: 'Comprehension' },
    { matiere: 'Kajy',      duree: 30, type: 'Geometrie / Mesures' },
    { matiere: 'Malagasy',  duree: 20, type: 'Vocabulaire' },
    { matiere: 'Tsianjery', duree: 20, type: 'Chants / Memorisation' },
    { matiere: 'Malagasy',  duree: 20, type: 'Production ecrite' },
    { matiere: 'Francais',  duree: 20, type: 'Comprehension' },
    { matiere: 'Sary',      duree: 20, type: 'Observation / Reproduction' },
    { matiere: 'FFMOM',     duree: 30, type: 'Vie en societe' },
    { matiere: 'Sensoriel', duree: 30, type: 'Motricite fine' },
    { matiere: 'Arts',      duree: 20, type: 'Creation plastique' },
  ], false),

  mardi: buildDay([
    { matiere: 'Malagasy',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Malagasy',  duree: 20, type: 'Ecriture' },
    { matiere: 'Kajy',      duree: 30, type: 'Operations' },
    { matiere: 'Francais',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Francais',  duree: 20, type: 'Phonologie' },
    { matiere: 'Malagasy',  duree: 20, type: 'Comprehension' },
    { matiere: 'Kajy',      duree: 30, type: 'Problemes' },
    { matiere: 'Francais',  duree: 20, type: 'Vocabulaire' },
    { matiere: 'Malagasy',  duree: 20, type: 'Vocabulaire' },
    { matiere: 'Malagasy',  duree: 20, type: 'Production ecrite' },
    { matiere: 'Francais',  duree: 20, type: 'Comprehension' },
    { matiere: 'Arts',      duree: 20, type: 'Creation plastique' },
    { matiere: 'Sary',      duree: 20, type: 'Dessin libre' },
    { matiere: 'Francais',  duree: 20, type: 'Ecriture' },
    { matiere: 'Tsianjery', duree: 20, type: 'Chants / Memorisation' },
    { matiere: 'Sensoriel', duree: 30, type: 'Activites sensorielles' },
  ], false),

  mercredi_matin: buildDay([
    { matiere: 'Malagasy',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Malagasy',  duree: 20, type: 'Ecriture' },
    { matiere: 'Kajy',      duree: 30, type: 'Numeration' },
    { matiere: 'Francais',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Francais',  duree: 20, type: 'Ecriture' },
    { matiere: 'Malagasy',  duree: 20, type: 'Comprehension' },
    { matiere: 'Kajy',      duree: 30, type: 'Operations' },
    { matiere: 'Tsianjery', duree: 20, type: 'Chants / Memorisation' },
    { matiere: 'EPS',       duree: 30, type: 'Jeux collectifs' },
  ], true),

  jeudi: buildDay([
    { matiere: 'Malagasy',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Malagasy',  duree: 20, type: 'Ecriture' },
    { matiere: 'Kajy',      duree: 30, type: 'Numeration' },
    { matiere: 'Francais',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Francais',  duree: 20, type: 'Phonologie' },
    { matiere: 'Malagasy',  duree: 20, type: 'Vocabulaire' },
    { matiere: 'Kajy',      duree: 30, type: 'Problemes' },
    { matiere: 'Malagasy',  duree: 20, type: 'Comprehension' },
    { matiere: 'Malagasy',  duree: 20, type: 'Production ecrite' },
    { matiere: 'Malagasy',  duree: 20, type: 'Grammaire' },
    { matiere: 'Francais',  duree: 20, type: 'Comprehension' },
    { matiere: 'Sary',      duree: 20, type: 'Dessin d observation' },
    { matiere: 'FFMOM',     duree: 30, type: 'Citoyennete' },
    { matiere: 'Francais',  duree: 20, type: 'Ecriture' },
    { matiere: 'EPS',       duree: 30, type: 'Jeux d adresse' },
    { matiere: 'Sensoriel', duree: 30, type: 'Motricite globale' },
  ], false),

  vendredi: buildDay([
    { matiere: 'Malagasy',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Malagasy',  duree: 20, type: 'Ecriture' },
    { matiere: 'Kajy',      duree: 30, type: 'Numeration' },
    { matiere: 'Francais',  duree: 20, type: 'Lecture / Expression orale' },
    { matiere: 'Francais',  duree: 20, type: 'Phonologie' },
    { matiere: 'Malagasy',  duree: 20, type: 'Comprehension' },
    { matiere: 'Kajy',      duree: 30, type: 'Operations' },
    { matiere: 'Malagasy',  duree: 20, type: 'Vocabulaire' },
    { matiere: 'Tsianjery', duree: 20, type: 'Chants / Memorisation' },
    { matiere: 'Malagasy',  duree: 20, type: 'Production ecrite' },
    { matiere: 'Francais',  duree: 20, type: 'Comprehension' },
    { matiere: 'Arts',      duree: 20, type: 'Creation plastique' },
    { matiere: 'FFMOM',     duree: 30, type: 'Valeurs civiques' },
    { matiere: 'Francais',  duree: 20, type: 'Ecriture' },
    { matiere: 'Sensoriel', duree: 30, type: 'Activites sensorielles' },
  ], false),
};

console.log(JSON.stringify(planning, null, 2));
