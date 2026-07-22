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

## État (mis à jour le 2026-07-22)
- **727 questions**, 0 erreur de format. Validateur : `node validate.js` (dans ce dossier). Objectif : ~3000.
- **Lot ebook ETM 2026 TERMINÉ** : les 72 sous-sections (cours + QCM + corrigé) de l'ebook (78 p., `~/Downloads/ebook_moto_1781723509.pdf`) ont été intégrées. ⚠️ **Ce lot n'est pas encore commité** (dernier commit git = « 162 questions » ; le travail 162→727 est dans le working tree).
- Par thème actuel : signalisation 99, conducteur 95, route 104, usagers 49, mecanique 111, equipements 80, documents 31, secours 97, environnement 61. Restent sous-représentés : **documents (31), usagers (49)**.
- **Visuels** : **209 questions illustrées** (`media` non-null), 518 encore en `media:null`. Le 2026-07-22, +89 câblées sur les images DÉJÀ présentes (aucune nouvelle image créée). Le reste des `media:null` est surtout des questions purement textuelles (alcool, documents, règles) qui n'ont pas besoin d'image, + quelques panneaux/schémas qui manquent encore côté `images/`.
- **Nouvel écran « Conseils & méthode »** (accueil) : format de l'ETM (40 q, 35/40), méthode de réponse, jour J. Fonction `showConseils()` dans `index.html`.
- Sauvegarde de l'ancien fichier avant fusion : **`questions.js.bak`** (293 q).
- **120 questions illustrées** : panneaux + schémas pédagogiques dessinés en SVG (`images/*.svg`), et photos réelles sous licence libre (Wikimedia Commons, `images/photo-*.jpg` + autres) — crédits obligatoires dans `CREDITS.md`. 51 fichiers dans `images/`.
- **`galerie.html`** : page « coulisses » qui liste toutes les questions illustrées (image + bonnes réponses). Ouvrir au double-clic, ou via le serveur local, ou en ligne `/galerie.html`.
- Méthode photos — 2 voies :
  1. **Photos des documents fournis** : les extraire du document (PDF/images) fourni par l'utilisateur, les déposer dans `images/`, câbler `media`, et **citer la source** (document + page) dans `CREDITS.md` si copyright.
  2. **Banques libres** (Wikimedia Commons) : API Commons via `curl` + User-Agent (le SSL de Python échoue ici) → ne garder que CC/PD (exclure svg/webm/pdf) → télécharger le thumb 900px → vérifier `file` que c'est bien une image → crédit auteur+licence+lien dans `CREDITS.md`.
- App **compatible images** (le champ `media` = chemin relatif `images/...` ou `null`).

## Reste à faire
- **Commiter le lot ebook** (working tree 162→727 non commité) — à faire quand l'utilisateur le demande.
- **Visuels** : câbler `media` sur les 607 questions en `media:null` — avec (a) les photos des documents fournis par l'utilisateur si présentes (source dans `CREDITS.md`), sinon (b) des SVG (panneaux/schémas) et photos libres.
- **Nouveaux lots de questions** (vers l'objectif ~3000) : intégrer les questions/photos des documents que l'utilisateur fournit — reprises telles quelles, source citée si copyright. Rééquilibrer vers **documents** et **usagers** (sous-représentés).

## Reprendre dans une nouvelle conversation
Dire simplement : « **On reprend le simulateur ETM, dossier ~/Documents/ETM-Simulateur** ». Claude relit ce fichier + sa mémoire, et continue exactement où on en était.
