export type RepartitionMatiereFields = {
  topic: string;
  approche: string;
  transmission: string; // JSON array sérialisé, tel que stocké en base
  exercices: string;    // JSON array sérialisé, tel que stocké en base
};

export type RepartitionMatiereChange = {
  champ: keyof RepartitionMatiereFields;
  ancienneValeur: string;
};

const CHAMPS: (keyof RepartitionMatiereFields)[] = ["topic", "approche", "transmission", "exercices"];

export function diffRepartitionMatiere(
  before: RepartitionMatiereFields,
  after: Partial<RepartitionMatiereFields>
): RepartitionMatiereChange[] {
  return CHAMPS
    .filter(champ => after[champ] !== undefined && after[champ] !== before[champ])
    .map(champ => ({ champ, ancienneValeur: before[champ] }));
}
