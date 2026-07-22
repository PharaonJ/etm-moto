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
- **Réutilisation des documents fournis par l'utilisateur.** Les questions et photos des documents que l'utilisateur fournit peuvent être **reprises telles quelles** (verbatim), sans obligation de reformuler. **S'il y a du copyright associé, indiquer la source** (document + page/section) dans `CREDITS.md` et, si utile, dans un champ de la question. Ne PAS copier la banque officielle publique de la DSR ni un service payant tiers *auquel l'utilisateur n'a pas de droit* — seuls comptent les documents que l'utilisateur fournit lui-même.
- Reformuler reste **facultatif** (utile seulement si on veut varier ou éviter une ambiguïté) : par défaut on reprend le contenu fourni tel quel pour économiser des tokens.
- Chaque question : **2 à 4 propositions**, au moins **1 bonne ET 1 mauvaise** ; **1, 2 ou 3 bonnes (jamais 4)**. Tout juste seulement si on coche exactement toutes les bonnes (incomplet = 0).
- L'app affiche **« Une réponse » / « Plusieurs réponses »** (auto, calculé depuis `bonnesReponses.length`, jamais le nombre exact) — comme l'examen depuis sept. 2023.
- Répartition cible par lot : **réponse unique majoritaire** (~55-60 %), 2 bonnes (~25-30 %), 3 bonnes (~15 %). Varier le nombre de propositions ET ne pas rendre devinable (l'app ne mélange pas les propositions → varier les positions à la rédaction).
- 9 thèmes (clés sans accent) : `signalisation, conducteur, route, usagers, mecanique, equipements, documents, secours, environnement`. Sur-pondérer mécanique / équipements / secours.
- **Images** : champ `media` d'une question = URL ou data-URI (sinon `null`). Sources acceptées : (1) **photos des documents fournis par l'utilisateur** — reprises telles quelles, source citée dans `CREDITS.md` si copyright ; (2) panneaux = SVG dessinés ou Wikimedia Commons ; (3) schémas = SVG ; (4) photos de banques libres. Pour toute image sous copyright, **la source est obligatoire** dans `CREDITS.md`.

## État (mis à jour le 2026-07-22 — BASCULE VERBATIM)
- **450 questions REPRISES TELLES QUELLES de l'ebook ETM 2026 (TestPermis.fr)**, 0 erreur de format. Validateur : `node validate.js`. Objectif : ~3000.
- **Refonte du 2026-07-22** : l'utilisateur a demandé la banque **verbatim** du document (les vraies questions + leurs images), pas des reformulations. L'ancienne banque reformulée (727 q) a été **archivée** dans `questions.reformule-727.bak.js`. La nouvelle `questions.js` = les 450 QCM de l'ebook, extraits verbatim (énoncés + options + bonne réponse du corrigé), source citée dans chaque `explication` et dans `CREDITS.md`.
- Méthode d'extraction (reproductible) : `pdftotext` de `~/Downloads/ebook_moto_1781723509.pdf` → découpage en 72 sections (marqueurs « REPONSES - <titre> ») → extraction par sous-agents Sonnet (scratchpad `out/b*.json`) → assemblage `assemble.js` (thème depuis titre section via `themes.json`). Scripts dans le scratchpad de session.
- Par thème : signalisation 57, conducteur 50, route 80, usagers 47, mecanique 30, equipements 45, documents 5, secours 86, environnement 50.
- **Complétude** : 450 extraites = 450 énoncés `Qn` du document (comptage indépendant). Le document a 462 lignes de corrigé (12 de plus = doublons de grille de réponses probables). Les questions verbatim sont **majoritairement à réponse unique** (c'est ainsi dans le document).
- **Visuels** : **23 questions illustrées** avec les images DU DOCUMENT (`images-doc/img-<page>-<idx>.jpg`), câblées par passe vision (sous-agents Sonnet lisant les pages PDF). Les 97 images sont extraites dans `images-doc/`, mais seules ~23 sont de vraies illustrations de question (panneaux/photos sous l'énoncé) ; les autres sont des illustrations de cours décoratives (non câblées). Ex. vérifié : Q5 signalisation station-service → `img-009-014.jpg` (identique à la capture utilisateur).
- **Nouvel écran « Conseils & méthode »** (accueil) : fonction `showConseils()` dans `index.html`.
- Méthode photos — 2 voies :
  1. **Photos des documents fournis** : les extraire du document (PDF/images) fourni par l'utilisateur, les déposer dans `images/`, câbler `media`, et **citer la source** (document + page) dans `CREDITS.md` si copyright.
  2. **Banques libres** (Wikimedia Commons) : API Commons via `curl` + User-Agent (le SSL de Python échoue ici) → ne garder que CC/PD (exclure svg/webm/pdf) → télécharger le thumb 900px → vérifier `file` que c'est bien une image → crédit auteur+licence+lien dans `CREDITS.md`.
- App **compatible images** (le champ `media` = chemin relatif `images/...` ou `null`).

## Reste à faire
- **Pousser en ligne** : `git push` pour mettre à jour https://pharaonj.github.io/etm-moto/ (remplace toute la banque affichée — à confirmer avec l'utilisateur car changement visible majeur).
- **(optionnel) Réponses manquantes** : quelques questions du document sont à réponse unique héritée du corrigé ; si un corrigé était ambigu, revérifier ponctuellement.
- **Nouveaux lots** (vers ~3000) : intégrer les questions/photos des prochains documents fournis, verbatim + source.

## Reprendre dans une nouvelle conversation
Dire simplement : « **On reprend le simulateur ETM, dossier ~/Documents/ETM-Simulateur** ». Claude relit ce fichier + sa mémoire, et continue exactement où on en était.
