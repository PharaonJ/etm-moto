# Simulateur ETM 2026 — carnet de bord (pour Claude et pour moi)

App web autonome d'entraînement à l'Épreuve Théorique Moto (ETM 2026).
Utilisateur **débutant en code** : expliquer simplement, jamais de code brut sans explication, avancer **pas à pas**, vérifier avant d'affirmer.

## Fichiers (tout dans ce dossier)
- `index.html` : toute l'app (HTML/CSS/JS vanilla, zéro dépendance, zéro build).
- `questions.js` : la banque (`window.ETM_BANK`). **NE PAS renommer en .json** (sinon l'ouverture au double-clic via `file://` casse — le navigateur bloque le fetch d'un .json local).
- `README.txt` : mode d'emploi + comment ajouter une question.
- `images/` : illustrations éventuelles.

## En ligne (GitHub Pages)
- Repo : `PharaonJ/etm-moto` → **https://pharaonj.github.io/etm-moto/**
- Mettre à jour le site : `git -C ~/Documents/ETM-Simulateur add -A && commit && push` (Pages se reconstruit en ~1 min). `gh` est authentifié (PharaonJ).
- L'utilisateur l'ouvre sur son téléphone via « Ajouter à l'écran d'accueil ».

## Règles à respecter (fidélité examen)
- **Questions ORIGINALES uniquement.** Jamais copier la banque officielle (DSR) ni un service payant (Codeclic…). Utiliser le web pour les **faits / le programme**, pas pour copier des questions.
- Chaque question : **2 à 4 propositions**, au moins **1 bonne ET 1 mauvaise** ; **1, 2 ou 3 bonnes (jamais 4)**. Tout juste seulement si on coche exactement toutes les bonnes (incomplet = 0).
- L'app affiche **« Une réponse » / « Plusieurs réponses »** (auto, calculé depuis `bonnesReponses.length`, jamais le nombre exact) — comme l'examen depuis sept. 2023.
- Répartition cible par lot : **réponse unique majoritaire** (~55-60 %), 2 bonnes (~25-30 %), 3 bonnes (~15 %). Varier le nombre de propositions ET ne pas rendre devinable (l'app ne mélange pas les propositions → varier les positions à la rédaction).
- 9 thèmes (clés sans accent) : `signalisation, conducteur, route, usagers, mecanique, equipements, documents, secours, environnement`. Sur-pondérer mécanique / équipements / secours.
- **Images** : champ `media` d'une question = URL ou data-URI (sinon `null`). Sources **légales** : panneaux = SVG dessinés ou Wikimedia Commons ; schémas = SVG ; photos = banques libres. **Jamais** les images de l'examen.

## État (mis à jour le 2026-06-22)
- **162 questions**, 0 erreur de format, dont **19 de signalisation illustrées** (panneaux SVG dans `images/`). Validateur : `node validate.js` (dans ce dossier). Objectif : ~3000.
- App **compatible images** (le champ `media` affiche une illustration).
- En attente d'une image (non ajoutées) : question « panneau, lundi 22 juin », question « palette de vitesse ».

## Reprendre dans une nouvelle conversation
Dire simplement : « **On reprend le simulateur ETM, dossier ~/Documents/ETM-Simulateur** ». Claude relit ce fichier + sa mémoire, et continue exactement où on en était.
