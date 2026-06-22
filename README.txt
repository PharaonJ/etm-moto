============================================================
  SIMULATEUR ETM 2026 — Entraînement au code moto
============================================================

CONTENU DU DOSSIER
------------------
- index.html    : l'application (à ouvrir).
- questions.js  : la banque de questions (à enrichir).
- README.txt    : ce fichier.

COMMENT L'OUVRIR
----------------
Double-clique sur "index.html". Il s'ouvre dans ton navigateur.
Garde toujours index.html et questions.js dans le MÊME dossier.

(Astuce : si tu veux l'avoir sur ton téléphone, copie le dossier
entier sur le téléphone et ouvre index.html depuis un navigateur.)

LES 4 MODES
-----------
1. Examen blanc        : 40 questions équilibrées, chrono 30 min,
                         aucune correction pendant l'épreuve.
                         À la fin : note /40, réussi/échoué (seuil 35),
                         et le détail de tes fautes par thème.
2. Entraînement thème  : tu choisis un thème, série de 10 ou 20,
                         avec correction + explication après chaque réponse.
3. Réviser mes erreurs : rejoue uniquement les questions déjà ratées.
                         Une question réussie ici sort de la liste.
4. Tableau de bord     : moyenne des derniers examens, taux de réussite
                         par thème, nombre total de questions traitées.

RÈGLE DE NOTATION (format ETM)
------------------------------
Une question peut avoir PLUSIEURS bonnes réponses, et leur nombre
n'est jamais affiché. Une question n'est juste que si tu coches
EXACTEMENT toutes les bonnes réponses et AUCUNE mauvaise.
Une réponse incomplète = fausse = 0 point.

TES DONNÉES
-----------
Scores, erreurs et statistiques sont enregistrés dans la mémoire
locale de TON navigateur (localStorage). Rien n'est envoyé sur internet.
- Elles sont propres à ce navigateur, sur cet appareil.
- Pour tout remettre à zéro : Tableau de bord > "Réinitialiser mes données".

============================================================
  AJOUTER TES PROPRES QUESTIONS
============================================================
Ouvre "questions.js" avec un éditeur de texte. À l'intérieur du
tableau "questions", copie/colle un bloc existant et modifie-le.

Modèle d'une question :

    {
      "id": "MEC-0099",
      "theme": "mecanique",
      "enonce": "Ta question ici ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Proposition A" },
        { "id": "b", "texte": "Proposition B" },
        { "id": "c", "texte": "Proposition C" }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Pourquoi A et C sont bonnes, et pourquoi B est fausse.",
      "difficulte": 2
    },

RÈGLES À RESPECTER
- "id" doit être UNIQUE. Préfixes par thème :
    signalisation=SIG, conducteur=CND, route=RTE, usagers=USG,
    mecanique=MEC, equipements=EQP, documents=DOC, secours=SEC,
    environnement=ENV
- "theme" doit être l'une de ces clés (en minuscules, sans accent) :
    signalisation, conducteur, route, usagers, mecanique,
    equipements, documents, secours, environnement
- Entre 2 et 4 propositions.
- TOUJOURS au moins une bonne ET au moins une mauvaise réponse.
- "bonnesReponses" liste les "id" des bonnes propositions.
- Mets une virgule entre deux questions, mais PAS après la dernière.
- Évite le guillemet droit (") dans les textes : utilise « » à la place.

Enregistre le fichier, puis recharge la page (touche F5). C'est tout !
