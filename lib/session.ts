import { cache } from "react";
import { auth } from "@/lib/auth";

// Déduplique auth() dans une même requête serveur.
// Si layout + page appellent getSession() sur la même requête (premier chargement),
// auth() n'est exécuté qu'une seule fois.
export const getSession = cache(auth);
