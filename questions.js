/* =====================================================================
   BANQUE DE QUESTIONS — Simulateur ETM 2026
   ---------------------------------------------------------------------
   Questions REPRISES du document fourni par l'utilisateur (verbatim).
   Source : ebook « ETM 2026 » — TestPermis.fr (voir CREDITS.md).
   Fichier de DONNÉES uniquement, nommé .js (pas .json) pour lecture en file://.
   ===================================================================== */

window.ETM_BANK = {
  "meta": {
    "version": "2026.10-verbatim",
    "total": 450,
    "note": "450 questions reprises telles quelles de l'ebook ETM 2026 (TestPermis.fr). Source citée dans CREDITS.md et dans chaque explication."
  },

  "themes": {
    "signalisation": {
      "label": "Signalisation et règles de circulation",
      "prefixe": "SIG"
    },
    "conducteur": {
      "label": "Le conducteur (perception, alcool, fatigue)",
      "prefixe": "CND"
    },
    "route": {
      "label": "La route et les risques de conduite",
      "prefixe": "RTE"
    },
    "usagers": {
      "label": "Les autres usagers",
      "prefixe": "USG"
    },
    "mecanique": {
      "label": "Mécanique et vérifications du deux-roues",
      "prefixe": "MEC"
    },
    "equipements": {
      "label": "Équipements de protection",
      "prefixe": "EQP"
    },
    "documents": {
      "label": "Documents et infractions",
      "prefixe": "DOC"
    },
    "secours": {
      "label": "Premiers secours",
      "prefixe": "SEC"
    },
    "environnement": {
      "label": "Environnement et éco-conduite",
      "prefixe": "ENV"
    }
  },

  "questions": [
    {
      "id": "SIG-0001",
      "theme": "signalisation",
      "enonce": "Quelle signification indique un panneau rond à bord rouge avec un bord blanc et une barre oblique rouge du coin supérieur gauche au coin inférieur droit ?",
      "media": "images-doc/img-007-010.jpg",
      "propositions": [
        { "id": "a", "texte": "Interdiction formelle" },
        { "id": "b", "texte": "Attention danger" },
        { "id": "c", "texte": "Zone réglementée" },
        { "id": "d", "texte": "Fin de restriction" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0002",
      "theme": "signalisation",
      "enonce": "Que signifie un feu tricolore passant au rouge ?",
      "media": "images-doc/img-008-011.jpg",
      "propositions": [
        { "id": "a", "texte": "Accélérer" },
        { "id": "b", "texte": "Ralentir" },
        { "id": "c", "texte": "Priorité" },
        { "id": "d", "texte": "Arrêt" }
      ],
      "bonnesReponses": ["d"],
      "explication": "Bonne(s) réponse(s) : D. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0003",
      "theme": "signalisation",
      "enonce": "Qu'indique un panneau bleu avec des pictogrammes blancs représentant des services disponibles sur une aire d'autoroute ?",
      "media": "images-doc/img-008-012.jpg",
      "propositions": [
        { "id": "a", "texte": "Aire de repos à 1 km" },
        { "id": "b", "texte": "Hôpital proche" },
        { "id": "c", "texte": "Services disponibles" },
        { "id": "d", "texte": "Fin de l'autoroute" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0004",
      "theme": "signalisation",
      "enonce": "Que signifie un marquage au sol constitué de zigzag jaune près d'un passage piéton ?",
      "media": "images-doc/img-009-013.jpg",
      "propositions": [
        { "id": "a", "texte": "Stationnement autorisé" },
        { "id": "b", "texte": "Ralentir pour les piétons" },
        { "id": "c", "texte": "Stationnement interdit" },
        { "id": "d", "texte": "Zone prioritaire" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0005",
      "theme": "signalisation",
      "enonce": "Quelle indication donne un panneau carré bleu avec un pictogramme blanc représentant une station-service ?",
      "media": "images-doc/img-009-014.jpg",
      "propositions": [
        { "id": "a", "texte": "Déviation obligatoire" },
        { "id": "b", "texte": "Restauration rapide" },
        { "id": "c", "texte": "Station-service" },
        { "id": "d", "texte": "Aire de repos" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0006",
      "theme": "signalisation",
      "enonce": "Quel est le panneau qui annonce un danger imminent?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Panneau triangulaire" },
        { "id": "b", "texte": "Panneau rond" },
        { "id": "c", "texte": "Panneau carré" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0007",
      "theme": "signalisation",
      "enonce": "Quel type de panneau informe d'une obligation?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Panneau rond bleu" },
        { "id": "b", "texte": "Panneau triangulaire rouge" },
        { "id": "c", "texte": "Panneau carré vert" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0008",
      "theme": "signalisation",
      "enonce": "Quelle est la signification d'une ligne blanche continue au sol?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il est interdit de franchir cette ligne" },
        { "id": "b", "texte": "Il est obligatoire de franchir cette ligne" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0009",
      "theme": "signalisation",
      "enonce": "Quel type de panneau indique une interdiction de stationner?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Panneau rond avec un bord rouge" },
        { "id": "b", "texte": "Panneau triangulaire avec un bord rouge" },
        { "id": "c", "texte": "Panneau carré bleu" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0010",
      "theme": "signalisation",
      "enonce": "Quelle est la fonction des feux tricolores?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réguler la circulation à une intersection" },
        { "id": "b", "texte": "Indiquer la direction" },
        { "id": "c", "texte": "Indiquer la présence d'un danger" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La signalisation routière ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0011",
      "theme": "signalisation",
      "enonce": "Quelle est la règle de priorité dans un rond-point en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les véhicules entrant sur le rond-point ont la priorité." },
        { "id": "b", "texte": "Les véhicules déjà dans le rond-point ont la priorité." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Apprendre à Naviguer dans les Rond-Points ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0012",
      "theme": "signalisation",
      "enonce": "Que devez-vous faire si vous manquez votre sortie dans un rond-point ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Faites demi-tour immédiatement." },
        { "id": "b", "texte": "Continuez à circuler dans le rond-point et ressortez ensuite." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Apprendre à Naviguer dans les Rond-Points ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0013",
      "theme": "signalisation",
      "enonce": "Comment devez-vous signaler votre intention de sortir d'un rond-point ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ne signaler qu'à l'entrée du rond-point." },
        { "id": "b", "texte": "Utiliser le clignotant droit pour indiquer la sortie." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Apprendre à Naviguer dans les Rond-Points ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0014",
      "theme": "signalisation",
      "enonce": "Quelles sont les erreurs courantes à éviter dans un rond-point ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Changer de voie sans prévenir." },
        { "id": "b", "texte": "S'arrêter pour laisser passer les piétons sur le rond-point." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Apprendre à Naviguer dans les Rond-Points ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0015",
      "theme": "signalisation",
      "enonce": "Pourquoi est-il important de réduire votre vitesse en approchant d'un rond-point ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour respecter la limite de vitesse du rond-point." },
        { "id": "b", "texte": "Pour évaluer correctement la situation et agir prudemment." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Apprendre à Naviguer dans les Rond-Points ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0016",
      "theme": "signalisation",
      "enonce": "Quel panneau signale généralement l'entrée d'un rond-point en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Stop" },
        { "id": "b", "texte": "Cédez le passage" },
        { "id": "c", "texte": "Interdiction de tourner à gauche" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Comprendre et Naviguer les Ronds-Points en France ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0017",
      "theme": "signalisation",
      "enonce": "Comment devez-vous signaler votre intention de quitter un rond-point?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ne pas utiliser de clignotant" },
        { "id": "b", "texte": "Utiliser le klaxon" },
        { "id": "c", "texte": "Utiliser le clignotant droit" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Comprendre et Naviguer les Ronds-Points en France ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0018",
      "theme": "signalisation",
      "enonce": "Quelle est la règle de priorité dans un rond-point à plusieurs voies?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Priorité à droite" },
        { "id": "b", "texte": "Priorité à gauche" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Comprendre et Naviguer les Ronds-Points en France ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0019",
      "theme": "signalisation",
      "enonce": "Quelle voie devez-vous choisir pour prendre la troisième sortie dans un rond-point à multiples voies?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Voie extérieure" },
        { "id": "b", "texte": "Voie intérieure" },
        { "id": "c", "texte": "N'importe quelle voie" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Comprendre et Naviguer les Ronds-Points en France ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0020",
      "theme": "signalisation",
      "enonce": "Que devez-vous faire en approchant d'un rond-point si la visibilité est réduite?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer pour sortir plus vite du rond-point" },
        { "id": "b", "texte": "Ralentir et être prêt à céder le passage" },
        { "id": "c", "texte": "Suivre le véhicule devant de près" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Comprendre et Naviguer les Ronds-Points en France ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0021",
      "theme": "signalisation",
      "enonce": "Quelle est la règle générale de priorité en France ?",
      "media": "images-doc/img-017-021.jpg",
      "propositions": [
        { "id": "a", "texte": "Priorité à droite" },
        { "id": "b", "texte": "Priorité à gauche" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de priorité ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0022",
      "theme": "signalisation",
      "enonce": "Que signifie le panneau 'Cédez le passage' ?",
      "media": "images-doc/img-017-022.jpg",
      "propositions": [
        { "id": "a", "texte": "Vous devez céder le passage aux véhicules venant de votre gauche et de votre droite" },
        { "id": "b", "texte": "Vous devez marquer un arrêt complet" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de priorité ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0023",
      "theme": "signalisation",
      "enonce": "Que devez-vous faire en arrivant à un 'Stop' ?",
      "media": "images-doc/img-017-023.jpg",
      "propositions": [
        { "id": "a", "texte": "Marquer un arrêt complet et céder le passage" },
        { "id": "b", "texte": "Marquer un ralentissement et céder le passage" },
        { "id": "c", "texte": "Continuer sans marquer d'arrêt si la voie est libre" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de priorité ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0024",
      "theme": "signalisation",
      "enonce": "Comment fonctionnent les règles de priorité dans un giratoire ?",
      "media": "images-doc/img-018-024.jpg",
      "propositions": [
        { "id": "a", "texte": "Vous cédez le passage aux véhicules venant de votre gauche" },
        { "id": "b", "texte": "Vous cédez le passage aux véhicules venant de votre droite" },
        { "id": "c", "texte": "Vous avez la priorité" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de priorité ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0025",
      "theme": "signalisation",
      "enonce": "Pourquoi les motards doivent-ils être particulièrement vigilants aux règles de priorité ?",
      "media": "images-doc/img-018-025.jpg",
      "propositions": [
        { "id": "a", "texte": "Parce que leur petite taille peut les rendre moins visibles" },
        { "id": "b", "texte": "Parce qu'ils peuvent toujours se faufiler entre les voitures" },
        { "id": "c", "texte": "Parce qu'ils ont toujours la priorité en ville" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de priorité ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0026",
      "theme": "signalisation",
      "enonce": "Quelle est la limite de vitesse en ville pour les motards, sauf indication contraire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "30 km/h" },
        { "id": "b", "texte": "50 km/h" },
        { "id": "c", "texte": "70 km/h" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0027",
      "theme": "signalisation",
      "enonce": "Quelle règle de priorité s'applique dans une intersection sans signalisation spécifique ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Priorité à gauche" },
        { "id": "b", "texte": "Priorité à droite" },
        { "id": "c", "texte": "Priorité aux véhicules lourds" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0028",
      "theme": "signalisation",
      "enonce": "Que devez-vous faire en arrivant à un rond-point ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Passer en priorité" },
        { "id": "b", "texte": "Céder le passage aux véhicules déjà engagés" },
        { "id": "c", "texte": "S'arrêter complètement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0029",
      "theme": "signalisation",
      "enonce": "Est-il autorisé de stationner votre moto sur le trottoir ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, toujours" },
        { "id": "b", "texte": "Non, sauf signalisation spécifique" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0030",
      "theme": "signalisation",
      "enonce": "En cas de feu rouge, que devez-vous faire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Continuer à rouler" },
        { "id": "b", "texte": "S'arrêter derrière la ligne d'arrêt" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0031",
      "theme": "signalisation",
      "enonce": "Quelle est la limitation de vitesse générale en agglomération pour un motocycliste sauf indication contraire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "50 km/h" },
        { "id": "b", "texte": "30 km/h" },
        { "id": "c", "texte": "90 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0032",
      "theme": "signalisation",
      "enonce": "À une intersection sans signalisation, quelle règle s'applique par défaut pour déterminer la priorité au quotidien ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Priorité à droite" },
        { "id": "b", "texte": "Cédez-le-passage obligatoire" },
        { "id": "c", "texte": "Arrêt total (Stop)" },
        { "id": "d", "texte": "Feux tricolores" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0033",
      "theme": "signalisation",
      "enonce": "Quelle distance de sécurité minimale en secondes doit respecter un motocycliste par temps sec généralement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "2 secondes" },
        { "id": "b", "texte": "1 seconde" },
        { "id": "c", "texte": "3 secondes" },
        { "id": "d", "texte": "5 secondes" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0034",
      "theme": "signalisation",
      "enonce": "Sur autoroute, quelle est la vitesse maximale autorisée pour un motocycle par temps de pluie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "110 km/h" },
        { "id": "b", "texte": "130 km/h" },
        { "id": "c", "texte": "90 km/h" },
        { "id": "d", "texte": "100 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0035",
      "theme": "signalisation",
      "enonce": "Lors d'un dépassement sur une route nationale à double-sens, quelle condition est indispensable pour l'effectuer en toute sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Visibilité suffisante et marquage autorisant le dépassement" },
        { "id": "b", "texte": "Simplement actionner le clignotant avant" },
        { "id": "c", "texte": "Dépassement toujours interdit sur routes nationales" },
        { "id": "d", "texte": "Accélérer pour dépasser rapidement quel que soit le marquage" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0036",
      "theme": "signalisation",
      "enonce": "Dans un rond-point moderne sans signalisation spécifique, quel comportement doit adopter le motocycliste à l'approche et à l'engagement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ralentir et céder le passage aux véhicules déjà engagés" },
        { "id": "b", "texte": "Accélérer pour s'imposer dans le rond-point" },
        { "id": "c", "texte": "Se placer systématiquement au centre du rond-point" },
        { "id": "d", "texte": "Ignorer la priorité et entrer si l'espace semble suffisant" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0037",
      "theme": "signalisation",
      "enonce": "Concernant le filtrage entre files, quelle règle générale doit respecter le motocycliste pour limiter les risques et rester conforme ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Filtrer prudemment, rester prévisible et respecter recommandations locales" },
        { "id": "b", "texte": "Toujours intercaler sans regarder les angles morts" },
        { "id": "c", "texte": "Rouler à la vitesse maximale pour gagner du temps" },
        { "id": "d", "texte": "Ne jamais utiliser de clignotants lors du filtrage" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les règles de circulation ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0038",
      "theme": "signalisation",
      "enonce": "Quelle est la vitesse maximale autorisée en agglomération pour les motos ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "50 km/h" },
        { "id": "b", "texte": "60 km/h" },
        { "id": "c", "texte": "70 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La Vitesse ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0039",
      "theme": "signalisation",
      "enonce": "Quelle est la vitesse maximale pour une moto sur autoroute en cas de pluie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "110 km/h" },
        { "id": "b", "texte": "130 km/h" },
        { "id": "c", "texte": "90 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La Vitesse ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0040",
      "theme": "signalisation",
      "enonce": "Quels sont les risques associés à l'excès de vitesse ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduction du temps de réaction, augmentation de la distance de freinage, gravité accrue des accidents." },
        { "id": "b", "texte": "Réduction de la distance de freinage, meilleurs réflexes, sécurité accrue." },
        { "id": "c", "texte": "Aucun risque notable." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La Vitesse ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0041",
      "theme": "signalisation",
      "enonce": "Quelle sanction encourt un conducteur pour un excès de vitesse de 20 km/h en agglomération ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Amende et retrait de points sur le permis" },
        { "id": "b", "texte": "Confiscation du véhicule" },
        { "id": "c", "texte": "Aucun sanction" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La Vitesse ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0042",
      "theme": "signalisation",
      "enonce": "Lors de conditions météorologiques défavorables, que devez-vous faire par rapport à votre vitesse ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduire la vitesse" },
        { "id": "b", "texte": "Maintenir la vitesse limite" },
        { "id": "c", "texte": "Accélérer pour arriver plus vite" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « La Vitesse ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0001",
      "theme": "route",
      "enonce": "Quel est le positionnement recommandé pour une moto en ville ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Au centre de la voie de circulation" },
        { "id": "b", "texte": "Sur le côté droit de la voie" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le positionnement sur la chaussée ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0002",
      "theme": "route",
      "enonce": "Pourquoi est-il important de maintenir une distance de sécurité avec le véhicule qui vous précède ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour avoir le temps de réagir en cas de freinage brusque" },
        { "id": "b", "texte": "Pour éviter de dépasser le véhicule par inadvertance" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le positionnement sur la chaussée ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0003",
      "theme": "route",
      "enonce": "Comment se positionner sur route pour avoir une vue d'ensemble de la circulation ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Légèrement sur la gauche de la voie" },
        { "id": "b", "texte": "Sur le côté droit de la voie" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le positionnement sur la chaussée ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0004",
      "theme": "route",
      "enonce": "Que devez-vous faire en cas de chaussée glissante ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ajuster votre position et ralentir" },
        { "id": "b", "texte": "Accélérer pour traverser rapidement" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le positionnement sur la chaussée ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0005",
      "theme": "route",
      "enonce": "Comment éviter les angles morts des autres véhicules ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ne pas rester trop longtemps dans les zones d'angles morts" },
        { "id": "b", "texte": "Rester proche des gros véhicules" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le positionnement sur la chaussée ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0043",
      "theme": "signalisation",
      "enonce": "Quel panneau indique l'interdiction de stationner ?",
      "media": "images-doc/img-029-032.jpg",
      "propositions": [
        { "id": "a", "texte": "Panneau rond rouge barré d'un trait noir" },
        { "id": "b", "texte": "Panneau rond rouge barré de deux traits noirs" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L’arrêt et le stationnement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0044",
      "theme": "signalisation",
      "enonce": "Où est-il interdit de s'arrêter et de stationner ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sur les trottoirs" },
        { "id": "b", "texte": "Dans les aires de stationnement" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L’arrêt et le stationnement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0045",
      "theme": "signalisation",
      "enonce": "À quelle distance d'un passage piéton devez-vous vous arrêter au minimum ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "5 mètres" },
        { "id": "b", "texte": "3 mètres" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L’arrêt et le stationnement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0046",
      "theme": "signalisation",
      "enonce": "Quand devez-vous utiliser vos feux de stationnement en moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Par faible visibilité" },
        { "id": "b", "texte": "Quand vous stationnez en plein jour" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L’arrêt et le stationnement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0047",
      "theme": "signalisation",
      "enonce": "Quel type de stationnement est autorisé sur les parkings réservés aux motos ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le stationnement des motos" },
        { "id": "b", "texte": "Le stationnement des voitures" },
        { "id": "c", "texte": "Le stationnement des camions" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L’arrêt et le stationnement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0048",
      "theme": "signalisation",
      "enonce": "Quelle est la première chose à vérifier avant de dépasser un autre véhicule ?",
      "media": "images-doc/img-031-033.jpg",
      "propositions": [
        { "id": "a", "texte": "Vérifier la circulation en sens inverse." },
        { "id": "b", "texte": "Commencer à déboîter." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0049",
      "theme": "signalisation",
      "enonce": "Quelle manœuvre est interdite dans une zone de croisement serrée ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Doubler un véhicule." },
        { "id": "b", "texte": "Ralentir." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0050",
      "theme": "signalisation",
      "enonce": "Quand peut-on dépasser par la droite une file de véhicules ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Quand les véhicules devant sont immobilisés." },
        { "id": "b", "texte": "Toujours." },
        { "id": "c", "texte": "Lorsque vous êtes pressé." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0051",
      "theme": "signalisation",
      "enonce": "Quel est le danger principal d'un dépassement en courbe ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Manque de visibilité." },
        { "id": "b", "texte": "Aucun danger." },
        { "id": "c", "texte": "La route est plus glissante." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0052",
      "theme": "signalisation",
      "enonce": "Quels véhicules sont interdits de dépasser en présence de marquage au sol continu ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tous les véhicules." },
        { "id": "b", "texte": "Les vélos seulement." },
        { "id": "c", "texte": "Les camions seulement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0053",
      "theme": "signalisation",
      "enonce": "Quand est-il autorisé de dépasser par la droite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Lorsqu'il n'y a aucune autre option" },
        { "id": "b", "texte": "En cas de circulation dense et files immobiles" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0054",
      "theme": "signalisation",
      "enonce": "Quelle est la première étape avant de dépasser un véhicule ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer" },
        { "id": "b", "texte": "Observer la route et la circulation" },
        { "id": "c", "texte": "Utiliser le klaxon" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0055",
      "theme": "signalisation",
      "enonce": "Quelle signalisation devez-vous utiliser avant de dépasser ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le klaxon" },
        { "id": "b", "texte": "Le clignotant gauche" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0056",
      "theme": "signalisation",
      "enonce": "Dans quelles circonstances est-il interdit de dépasser ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dans un tunnel" },
        { "id": "b", "texte": "Aux intersections et passages piétons" },
        { "id": "c", "texte": "Dans une zone urbaine" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "SIG-0057",
      "theme": "signalisation",
      "enonce": "Quelle est la vitesse à adopter lors d'un croisement sur une route étroite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une vitesse normale" },
        { "id": "b", "texte": "Une vitesse réduite" },
        { "id": "c", "texte": "Accélérer légèrement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Le croisement et le dépassement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0006",
      "theme": "route",
      "enonce": "Pourquoi est-il important de vérifier les angles morts avant de changer de voie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour économiser du carburant" },
        { "id": "b", "texte": "Pour éviter de heurter un véhicule ou un cycliste dans une zone non visible des rétroviseurs." },
        { "id": "c", "texte": "Pour embellir la conduite" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0007",
      "theme": "route",
      "enonce": "Comment devez-vous adapter votre conduite par temps de pluie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Maintenir la même vitesse et la même distance de sécurité" },
        { "id": "b", "texte": "Réduire la vitesse et augmenter la distance de sécurité." },
        { "id": "c", "texte": "Accélérer pour passer plus vite les zones humides" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0008",
      "theme": "route",
      "enonce": "Quelle est la meilleure approche pour gérer une intersection animée ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer pour traverser rapidement" },
        { "id": "b", "texte": "Redoubler de prudence, respecter les priorités et rester attentif aux mouvements des autres usagers." },
        { "id": "c", "texte": "S'arrêter au milieu de l'intersection pour mieux observer" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0009",
      "theme": "route",
      "enonce": "Pourquoi est-il crucial d'anticiper les mouvements des autres usagers sur la route ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour se concentrer davantage sur son téléphone" },
        { "id": "b", "texte": "Pour réagir rapidement et éviter les accidents." },
        { "id": "c", "texte": "Pour rendre la conduite plus excitante" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0010",
      "theme": "route",
      "enonce": "Quels sont les dangers courants que vous pouvez rencontrer sur une route de campagne ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduire la vitesse et adapter sa conduite" },
        { "id": "b", "texte": "Accélérer pour éviter les dangers" },
        { "id": "c", "texte": "Ignorer les panneaux de signalisation" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0011",
      "theme": "route",
      "enonce": "Pourquoi est-il important pour un motocycliste de vérifier ses angles morts?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les collisions potentielles avec des véhicules cachés." },
        { "id": "b", "texte": "Pour voir plus loin sur la route." },
        { "id": "c", "texte": "Pour impressionner les autres conducteurs." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0012",
      "theme": "route",
      "enonce": "Quelle est la meilleure façon d'utiliser vos rétroviseurs sur une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les vérifier fréquemment pour connaître la situation derrière soi." },
        { "id": "b", "texte": "Les utiliser uniquement lors de changements de direction." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0013",
      "theme": "route",
      "enonce": "Quels types d'indices routiers peuvent vous alerter d'un danger potentiel?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Panneaux de signalisation, marquages au sol et comportement des véhicules." },
        { "id": "b", "texte": "Seulement les panneaux de signalisation." },
        { "id": "c", "texte": "Seulement le comportement des autres conducteurs." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0014",
      "theme": "route",
      "enonce": "Comment l'observation constante de votre environnement peut-elle augmenter votre sécurité?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle vous permet de percevoir les dangers avant qu'ils ne deviennent critiques." },
        { "id": "b", "texte": "Elle vous permet de rouler plus vite." },
        { "id": "c", "texte": "Elle vous dispense d'utiliser vos rétro." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0015",
      "theme": "route",
      "enonce": "Pourquoi est-il crucial de ne pas bouger excessivement la tête lors de la conduite?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela peut perturber votre équilibre et contrôle de la moto." },
        { "id": "b", "texte": "Cela rend la conduite monotone." },
        { "id": "c", "texte": "Cela peut vous empêcher d'utiliser vos rétroviseurs." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0016",
      "theme": "route",
      "enonce": "Pourquoi est-il important de vérifier régulièrement ses rétroviseurs en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour s'assurer que les véhicules nous suivent à une distance sécurisée." },
        { "id": "b", "texte": "Pour vérifier que notre casque est bien ajusté." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0017",
      "theme": "route",
      "enonce": "Que faut-il faire avant de changer de direction ou de file en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Regarder uniquement dans les rétroviseurs." },
        { "id": "b", "texte": "Tourner la tête pour vérifier les angles morts en plus de regarder dans les rétroviseurs." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0018",
      "theme": "route",
      "enonce": "Quelle est l'importance d'adapter la vitesse en fonction des conditions météorologiques?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour impressionner les autres conducteurs." },
        { "id": "b", "texte": "Pour garantir une distance de sécurité suffisante et un meilleur contrôle du véhicule." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0019",
      "theme": "route",
      "enonce": "Pourquoi est-il essentiel d'être particulièrement vigilant près des écoles et des parcs?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que les enfants peuvent être imprévisibles et traverser la route sans avertissement." },
        { "id": "b", "texte": "Parce que c'est la règle pour éviter les amendes." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0020",
      "theme": "route",
      "enonce": "Que signifie l'observation permanente et active en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Observer uniquement la route devant soi." },
        { "id": "b", "texte": "Observer constamment tout ce qui se passe autour, y compris les rétroviseurs et les angles morts." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Analyse de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0021",
      "theme": "route",
      "enonce": "Quelle est la position correcte pour s'asseoir sur une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dos droit, bras rigides et pieds pendants." },
        { "id": "b", "texte": "Dos droit, bras légèrement fléchis et pieds atteignant les commandes." },
        { "id": "c", "texte": "Dos courbé, bras tendus et pieds surélevés." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Maîtrise du véhicule ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0022",
      "theme": "route",
      "enonce": "Quel est le rôle du frein avant sur une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il n'a pas d'importance majeure." },
        { "id": "b", "texte": "Il assure environ 70% du freinage." },
        { "id": "c", "texte": "Il est uniquement utilisé pour ralentir doucement." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Maîtrise du véhicule ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0023",
      "theme": "route",
      "enonce": "Comment faut-il accélérer sur une moto pour une conduite sûre ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer brusquement pour s'adapter aux conditions de la route." },
        { "id": "b", "texte": "Accélérer progressivement pour maintenir la stabilité." },
        { "id": "c", "texte": "Ne jamais accélérer en sortie de virage." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Maîtrise du véhicule ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0024",
      "theme": "route",
      "enonce": "Quelle technique devez-vous utiliser pour prendre un virage correctement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Se pencher à l'opposé du virage." },
        { "id": "b", "texte": "Rester droit sans se pencher." },
        { "id": "c", "texte": "Se pencher dans la direction du virage." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Maîtrise du véhicule ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0025",
      "theme": "route",
      "enonce": "Pourquoi est-il important de doser progressivement le freinage sur une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour économiser les freins." },
        { "id": "b", "texte": "Pour éviter la surchauffe des freins." },
        { "id": "c", "texte": "Pour éviter le blocage des roues et garder la maîtrise." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Maîtrise du véhicule ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0026",
      "theme": "route",
      "enonce": "Pourquoi est-il important de maintenir une distance de sécurité correcte en moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour avoir le temps de réagir en cas de freinage brusque." },
        { "id": "b", "texte": "Pour éviter d'abîmer les pneus." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Respect des distances de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0027",
      "theme": "route",
      "enonce": "Quelle est la règle des deux secondes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Se tenir à deux mètres du véhicule devant." },
        { "id": "b", "texte": "Maintenir un intervalle de deux secondes entre vous et le véhicule qui vous précède." },
        { "id": "c", "texte": "Rouler à 20 km/h en dessous de la limite de vitesse." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Respect des distances de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0028",
      "theme": "route",
      "enonce": "Quelles sont les conditions dans lesquelles vous devez augmenter votre distance de sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Par temps ensoleillé." },
        { "id": "b", "texte": "En cas de pluie, neige ou verglas." },
        { "id": "c", "texte": "Quand il fait nuit." },
        { "id": "d", "texte": "En cas de circulation dense." }
      ],
      "bonnesReponses": ["b","d"],
      "explication": "Bonne(s) réponse(s) : B, D. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Respect des distances de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0029",
      "theme": "route",
      "enonce": "Quelle distance de sécurité devriez-vous maintenir à 90 km/h ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "30 mètres." },
        { "id": "b", "texte": "50 mètres." },
        { "id": "c", "texte": "70 mètres." },
        { "id": "d", "texte": "90 mètres." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Respect des distances de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0030",
      "theme": "route",
      "enonce": "Quelle est la distance de sécurité recommandée à une vitesse de 50 km/h ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "28 mètres." },
        { "id": "b", "texte": "15 mètres." },
        { "id": "c", "texte": "40 mètres." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Respect des distances de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "USG-0001",
      "theme": "usagers",
      "enonce": "Lorsque vous vous apprêtez à changer de voie, quel est le principal moyen de communication que vous devez utiliser ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le regard" },
        { "id": "b", "texte": "Le clignotant" },
        { "id": "c", "texte": "L'avertisseur sonore" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Communication avec les autres usagers ».",
      "difficulte": 1
    },
    {
      "id": "USG-0002",
      "theme": "usagers",
      "enonce": "Quel rôle joue le regard dans la communication avec les autres usagers de la route ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il n'a aucun rôle" },
        { "id": "b", "texte": "Il permet d'établir un contact visuel" },
        { "id": "c", "texte": "Il remplace les clignotants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Communication avec les autres usagers ».",
      "difficulte": 1
    },
    {
      "id": "USG-0003",
      "theme": "usagers",
      "enonce": "Dans quelle situation est-il approprié d'utiliser l'avertisseur sonore ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour signaler un changement de direction" },
        { "id": "b", "texte": "Pour attirer l'attention sur un danger" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Communication avec les autres usagers ».",
      "difficulte": 1
    },
    {
      "id": "USG-0004",
      "theme": "usagers",
      "enonce": "Quelle est l'importance de la position sur la route pour un motard ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle n'a pas d'importance" },
        { "id": "b", "texte": "Elle permet de signaler vos intentions" },
        { "id": "c", "texte": "Elle est uniquement pour votre confort" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Communication avec les autres usagers ».",
      "difficulte": 1
    },
    {
      "id": "USG-0005",
      "theme": "usagers",
      "enonce": "Pourquoi est-il important de porter des vêtements réfléchissants et d'utiliser des feux allumés même en journée ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour être à la mode" },
        { "id": "b", "texte": "Pour améliorer la visibilité et éviter les accidents" },
        { "id": "c", "texte": "Pour économiser de l'énergie" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire en sécurité : Communication avec les autres usagers ».",
      "difficulte": 1
    },
    {
      "id": "CND-0001",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important de passer des examens de vue réguliers pour les conducteurs de motos?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour vérifier que la vision est correcte et conforme aux exigences légales." },
        { "id": "b", "texte": "Pour obtenir des lunettes de soleil gratuitement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0002",
      "theme": "conducteur",
      "enonce": "Quel est le rôle de la vision périphérique en conduisant une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aider à percevoir les objets et mouvements autour sans tourner la tête." },
        { "id": "b", "texte": "Permettre de lire les panneaux de signalisation de loin." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0003",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il conseillé de porter des protections auditives en conduisant une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'elles préservent l'audition en réduisant les bruits nocifs." },
        { "id": "b", "texte": "Parce qu'elles permettent d'écouter de la musique en conduisant." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0004",
      "theme": "conducteur",
      "enonce": "Quelle action est recommandée si vous portez des lunettes de vue et conduisez une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "S'assurer que les lunettes sont adaptées à sa vision actuelle." },
        { "id": "b", "texte": "Porter des lunettes de soleil même la nuit." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0005",
      "theme": "conducteur",
      "enonce": "En France, quels tests incluent les examens médicaux obligatoires pour les conducteurs de motos?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des tests de vision et d'audition." },
        { "id": "b", "texte": "Des tests de résistance physique." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0006",
      "theme": "conducteur",
      "enonce": "Quelle est l'acuité visuelle minimale requise pour conduire en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "5/10" },
        { "id": "b", "texte": "3/10" },
        { "id": "c", "texte": "7/10" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0007",
      "theme": "conducteur",
      "enonce": "Quel est le champ visuel minimum requis horizontalement pour obtenir le permis de conduire en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "90deg" },
        { "id": "b", "texte": "120deg" },
        { "id": "c", "texte": "150deg" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0008",
      "theme": "conducteur",
      "enonce": "Est-il possible de conduire un moto en France avec une surdité totale ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui" },
        { "id": "b", "texte": "Non" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0009",
      "theme": "conducteur",
      "enonce": "Quels sont les aspects de la vision importants pour la conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Acuité Visuelle, Champ Visuel, Vision des Couleurs" },
        { "id": "b", "texte": "Acuité Visuelle seulement" },
        { "id": "c", "texte": "Champ Visuel seulement" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0010",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important d'avoir une bonne audition en conduisant une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour écouter de la musique" },
        { "id": "b", "texte": "Pour reconnaître les signaux sonores" },
        { "id": "c", "texte": "Pour écouter les passagers" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0011",
      "theme": "conducteur",
      "enonce": "Quelle est l'acuité visuelle minimale requise pour chaque œil pour conduire une moto en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "5/10" },
        { "id": "b", "texte": "4/10" },
        { "id": "c", "texte": "6/10" },
        { "id": "d", "texte": "7/10" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0012",
      "theme": "conducteur",
      "enonce": "Pourquoi la vision périphérique est-elle importante pour un motard ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour voir les panneaux de signalisation" },
        { "id": "b", "texte": "Pour détecter les dangers venant du côté" },
        { "id": "c", "texte": "Pour mieux distinguer les couleurs des feux de signalisation" },
        { "id": "d", "texte": "Pour voir les rétroviseurs plus clairement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0013",
      "theme": "conducteur",
      "enonce": "Quel équipement peut aider à réduire l'éblouissement pendant la conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un casque intégral" },
        { "id": "b", "texte": "Des lunettes de soleil polarisées" },
        { "id": "c", "texte": "Un blouson de moto" },
        { "id": "d", "texte": "Des gants anti-dérapants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0014",
      "theme": "conducteur",
      "enonce": "Quel type de son est crucial à entendre pour la sécurité d'un motard ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les sirènes des véhicules d'urgence" },
        { "id": "b", "texte": "Le vent" },
        { "id": "c", "texte": "Les conversations des passants" },
        { "id": "d", "texte": "Le bruit du moteur" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0015",
      "theme": "conducteur",
      "enonce": "Que doit faire un conducteur de moto s'il a un doute sur sa vision ou son audition ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Adapter sa vitesse" },
        { "id": "b", "texte": "Effectuer un test de vision ou d'audition" },
        { "id": "c", "texte": "Changer de casque" },
        { "id": "d", "texte": "Rouler uniquement de jour" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Vision et audition ».",
      "difficulte": 1
    },
    {
      "id": "CND-0016",
      "theme": "conducteur",
      "enonce": "Pourquoi la fatigue est-elle dangereuse pour la conduite de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle réduit la vigilance et les réflexes." },
        { "id": "b", "texte": "Elle améliore les capacités de conduite." },
        { "id": "c", "texte": "Elle n'a aucun effet sur la conduite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0017",
      "theme": "conducteur",
      "enonce": "Quel est l'effet principal de la fatigue sur la conduite d'une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle améliore la concentration." },
        { "id": "b", "texte": "Elle diminue la capacité de réaction." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0018",
      "theme": "conducteur",
      "enonce": "Quels sont certains signes de la fatigue ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Baîllements fréquents" },
        { "id": "b", "texte": "Énergie et regain de vigilance" },
        { "id": "c", "texte": "Paupières lourdes" },
        { "id": "d", "texte": "Concentration accrue" }
      ],
      "bonnesReponses": ["a","c"],
      "explication": "Bonne(s) réponse(s) : A, C. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0019",
      "theme": "conducteur",
      "enonce": "Quel est le taux d'alcoolémie maximum légal autorisé pour conduire une moto en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,2 g/l de sang" },
        { "id": "b", "texte": "0,5 g/l de sang" },
        { "id": "c", "texte": "0,8 g/l de sang" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0020",
      "theme": "conducteur",
      "enonce": "Quelle est une mesure efficace pour prévenir la fatigue avant un long trajet ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dormir suffisamment avant de partir" },
        { "id": "b", "texte": "Conduire sans arrêt" },
        { "id": "c", "texte": "Manger une grande quantité de nourriture avant de partir" },
        { "id": "d", "texte": "Faire des pauses toutes les deux heures" }
      ],
      "bonnesReponses": ["a","d"],
      "explication": "Bonne(s) réponse(s) : A, D. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0021",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important de maintenir une bonne condition physique et mentale pour conduire une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour impressionner les autres sur la route." },
        { "id": "b", "texte": "Pour maintenir une vigilance optimale et des réflexes rapides." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0022",
      "theme": "conducteur",
      "enonce": "Que faire si vous ressentez de la fatigue pendant la conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Arrêtez-vous dans un endroit sécurisé et prenez une pause" },
        { "id": "b", "texte": "Continuez à conduire sans arrêt" },
        { "id": "c", "texte": "Utilisez uniquement une boisson caféinée pour lutter contre la fatigue" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0023",
      "theme": "conducteur",
      "enonce": "Que devez-vous faire si vous ressentez des signes de fatigue en conduisant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Continuer à conduire jusqu'à atteindre la destination." },
        { "id": "b", "texte": "S'arrêter et de se reposer." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0024",
      "theme": "conducteur",
      "enonce": "À quelle fréquence devriez-vous faire des pauses pour éviter la fatigue ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Toutes les deux heures" },
        { "id": "b", "texte": "Toutes les quatre heures" },
        { "id": "c", "texte": "Toutes les six heures" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0025",
      "theme": "conducteur",
      "enonce": "Quelle est la meilleure action à prendre pour éviter les distractions au volant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utiliser le téléphone uniquement aux feux rouges." },
        { "id": "b", "texte": "Garder les deux mains sur le guidon et les yeux sur la route." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Gestion de la fatigue ».",
      "difficulte": 1
    },
    {
      "id": "CND-0026",
      "theme": "conducteur",
      "enonce": "Quels sont les effets des antihistaminiques sur la conduite?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Améliorent la concentration" },
        { "id": "b", "texte": "Provoquent une somnolence" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Effets des médicaments et drogues ».",
      "difficulte": 1
    },
    {
      "id": "CND-0027",
      "theme": "conducteur",
      "enonce": "Quelle drogues peuvent ralentir le temps de réaction, altérer la perception des distances et réduire la coordination?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cannabis" },
        { "id": "b", "texte": "Cocaïne" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Effets des médicaments et drogues ».",
      "difficulte": 1
    },
    {
      "id": "CND-0028",
      "theme": "conducteur",
      "enonce": "Quels médicaments peux vous affecter la capacité à prendre des décisions rapides?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Antihistaminiques" },
        { "id": "b", "texte": "Analgésiques opioïdes" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Effets des médicaments et drogues ».",
      "difficulte": 1
    },
    {
      "id": "CND-0029",
      "theme": "conducteur",
      "enonce": "Quelle drogue est connue pour altérer les perceptions sensorielles ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cocaïne" },
        { "id": "b", "texte": "Ecstasy" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Effets des médicaments et drogues ».",
      "difficulte": 1
    },
    {
      "id": "CND-0030",
      "theme": "conducteur",
      "enonce": "Quelle est une des sanctions légales en France pour conduite sous l'influence de drogues?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Récompense" },
        { "id": "b", "texte": "Amende" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Effets des médicaments et drogues ».",
      "difficulte": 1
    },
    {
      "id": "CND-0031",
      "theme": "conducteur",
      "enonce": "Quel est le taux maximum d'alcoolémie autorisé pour les conducteurs en France ?",
      "media": "images-doc/img-053-036.jpg",
      "propositions": [
        { "id": "a", "texte": "0,2 g/L" },
        { "id": "b", "texte": "0,5 g/L" },
        { "id": "c", "texte": "1,0 g/L" },
        { "id": "d", "texte": "0,8 g/L" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Consommation d'alcool ».",
      "difficulte": 1
    },
    {
      "id": "CND-0032",
      "theme": "conducteur",
      "enonce": "Quel effet l'alcool a-t-il principalement sur les réflexes du conducteur ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il les améliore" },
        { "id": "b", "texte": "Il les ralentit" },
        { "id": "c", "texte": "Il n'a aucun effet" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Consommation d'alcool ».",
      "difficulte": 1
    },
    {
      "id": "CND-0033",
      "theme": "conducteur",
      "enonce": "Pourquoi la consommation d'alcool est-elle particulièrement dangereuse pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'elle améliore leur équilibre" },
        { "id": "b", "texte": "Parce qu'elle réduit la coordination nécessaire à la conduite" },
        { "id": "c", "texte": "Parce qu'elle les rend plus audacieux" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Consommation d'alcool ».",
      "difficulte": 1
    },
    {
      "id": "CND-0034",
      "theme": "conducteur",
      "enonce": "Quelles sont les sanctions possibles pour conduite en état d'ivresse en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aucune" },
        { "id": "b", "texte": "Amendes et inscription au casier judiciaire" },
        { "id": "c", "texte": "Amendes, retrait de points, suspension du permis, prison" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Consommation d'alcool ».",
      "difficulte": 1
    },
    {
      "id": "CND-0035",
      "theme": "conducteur",
      "enonce": "Quelle est la meilleure méthode pour un conducteur ayant consommé de l'alcool ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Conduire prudemment" },
        { "id": "b", "texte": "Attendre que les effets de l'alcool passent" },
        { "id": "c", "texte": "Utiliser des transports en commun ou un taxi" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Consommation d'alcool ».",
      "difficulte": 1
    },
    {
      "id": "CND-0036",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important de faire une pause toutes les deux heures lors de longs trajets en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour réduire la fatigue et améliorer la vigilance" },
        { "id": "b", "texte": "Pour socialiser avec d'autres motards" },
        { "id": "c", "texte": "Pour vérifier l'état de la moto" },
        { "id": "d", "texte": "Pour faire le plein de carburant" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Condition physique et psychologique ».",
      "difficulte": 1
    },
    {
      "id": "CND-0037",
      "theme": "conducteur",
      "enonce": "Quel est le taux maximal d'alcool dans le sang autorisé pour les motards en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,5 g/L" },
        { "id": "b", "texte": "0,8 g/L" },
        { "id": "c", "texte": "1,0 g/L" },
        { "id": "d", "texte": "0,3 g/L" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Condition physique et psychologique ».",
      "difficulte": 1
    },
    {
      "id": "CND-0038",
      "theme": "conducteur",
      "enonce": "Comment le stress peut-il affecter la conduite?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il réduit la concentration et la capacité de jugement" },
        { "id": "b", "texte": "Il améliore la réactivité" },
        { "id": "c", "texte": "Il n'a aucun effet sur la conduite" },
        { "id": "d", "texte": "Il augmente l'agressivité" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Condition physique et psychologique ».",
      "difficulte": 1
    },
    {
      "id": "CND-0039",
      "theme": "conducteur",
      "enonce": "Quels sont les effets de certains médicaments sur la conduite?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ils peuvent provoquer de la somnolence" },
        { "id": "b", "texte": "Ils rendent le conducteur plus vigilant" },
        { "id": "c", "texte": "Ils n'ont aucun effet" },
        { "id": "d", "texte": "Ils sont toujours sans danger pour la conduite" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Condition physique et psychologique ».",
      "difficulte": 1
    },
    {
      "id": "CND-0040",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important de porter un casque et des protections en bon état?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour protéger le conducteur en cas d'accident" },
        { "id": "b", "texte": "Pour respecter les lois" },
        { "id": "c", "texte": "Pour être plus confortable" },
        { "id": "d", "texte": "Parce que c'est tendance" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « État du conducteur : Condition physique et psychologique ».",
      "difficulte": 1
    },
    {
      "id": "USG-0006",
      "theme": "usagers",
      "enonce": "Quelle est la priorité du conducteur de moto à l'approche d'un passage piéton?",
      "media": "images-doc/img-057-038.jpg",
      "propositions": [
        { "id": "a", "texte": "Céder le passage aux piétons." },
        { "id": "b", "texte": "Continuer à la même vitesse." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0007",
      "theme": "usagers",
      "enonce": "Quelle distance de sécurité devez-vous maintenir avec un cycliste?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1 mètre en ville et 1,5 mètres hors agglomération." },
        { "id": "b", "texte": "50 centimètres en ville et 1 mètre hors agglomération." },
        { "id": "c", "texte": "2 mètres en ville et 2,5 mètres hors agglomération." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0008",
      "theme": "usagers",
      "enonce": "Comment devriez-vous réagir en voyant une personne à mobilité réduite traverser la route?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ralentir et s'arrêter si nécessaire." },
        { "id": "b", "texte": "Klaxonner pour signaler votre présence." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0009",
      "theme": "usagers",
      "enonce": "Quelle est l'importance des clignotants concernant les usagers vulnérables?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ils signalent vos intentions et aident à prévenir les accidents." },
        { "id": "b", "texte": "Ils n'ont pas d'importance particulière." },
        { "id": "c", "texte": "Ils ne doivent être utilisés que pour les changements de direction sur les voies rapides." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0010",
      "theme": "usagers",
      "enonce": "Dans quelle situation est-il particulièrement important de réduire votre vitesse?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aux abords des écoles et dans les zones résidentielles." },
        { "id": "b", "texte": "Sur les autoroutes." },
        { "id": "c", "texte": "Uniquement la nuit." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0011",
      "theme": "usagers",
      "enonce": "Que devez-vous faire lorsqu'un piéton est engagé sur un passage piéton et traverse devant votre deux-roues ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "S'arrêter et laisser passer le piéton" },
        { "id": "b", "texte": "Ralentir légèrement et le contourner rapidement" },
        { "id": "c", "texte": "Klaxonner pour qu'il s'écarte et continuer" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0012",
      "theme": "usagers",
      "enonce": "Quel comportement adopter face à une personne malvoyante signalée par une canne blanche ou un chien guide ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "S'immobiliser et la laisser traverser calmement" },
        { "id": "b", "texte": "Passer juste devant pour ne pas la gêner" },
        { "id": "c", "texte": "Accélérer pour dégager rapidement la zone" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0013",
      "theme": "usagers",
      "enonce": "Quelle distance minimale devez-vous laisser en agglomération lors du dépassement d'un cycliste à moto ou en voiture ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Au moins 1 mètre" },
        { "id": "b", "texte": "Au moins 0,5 mètre" },
        { "id": "c", "texte": "Au moins 2 mètres" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0014",
      "theme": "usagers",
      "enonce": "Sur une route départementale hors agglomération, quelle est la distance latérale légale minimale pour dépasser un cycliste ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1,5 mètre" },
        { "id": "b", "texte": "1 mètre" },
        { "id": "c", "texte": "2 mètres" },
        { "id": "d", "texte": "0,5 mètre" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0015",
      "theme": "usagers",
      "enonce": "Comment doit-on adapter sa conduite à l'approche d'une zone 30 ou des abords d'une école ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduire fortement sa vitesse et être prêt à s'arrêter" },
        { "id": "b", "texte": "Garder la vitesse et doubler rapidement pour dégager" },
        { "id": "c", "texte": "Allumer les feux pour accélérer le passage" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0016",
      "theme": "usagers",
      "enonce": "Quelle attitude doit adopter un motard dépassant un vélo pour augmenter la marge de sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Élargir la trajectoire en laissant de l'espace latéral" },
        { "id": "b", "texte": "Se rapprocher du cycliste pour accélérer le dépassement" },
        { "id": "c", "texte": "Couper légèrement devant le cycliste pour gagner du temps" },
        { "id": "d", "texte": "Klaxonner et déboîter sans modifier sa trajectoire" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0017",
      "theme": "usagers",
      "enonce": "Pourquoi faut-il être vigilant aux rails de tram pour un motard ou cycliste et comment réagir si la roue se coince ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les roues fines peuvent se coincer: éviter d'englober un cycliste pris sur les rails et rester maître de sa trajectoire" },
        { "id": "b", "texte": "Accélérer pour traverser rapidement et éviter tout risque" },
        { "id": "c", "texte": "Rouler parallèlement aux rails pour réduire l'angle" },
        { "id": "d", "texte": "Ignorer les rails, ils n'affectent pas la tenue de route" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Usagers vulnérables ».",
      "difficulte": 1
    },
    {
      "id": "USG-0018",
      "theme": "usagers",
      "enonce": "Pourquoi est-il important de vérifier vos angles morts surtout lorsqu'il y a des deux-roues motorisés autour ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que les deux-roues motorisés sont moins visibles." },
        { "id": "b", "texte": "Parce qu'ils sont plus lents que les voitures." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Deux-roues motorisés ».",
      "difficulte": 1
    },
    {
      "id": "USG-0019",
      "theme": "usagers",
      "enonce": "Quelle est la distance de sécurité à maintenir avec un deux-roues motorisé devant vous ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La même distance que pour un véhicule classique." },
        { "id": "b", "texte": "Une distance supérieure à celle d'un véhicule classique." },
        { "id": "c", "texte": "Une distance inférieure à celle d'un véhicule classique." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Deux-roues motorisés ».",
      "difficulte": 1
    },
    {
      "id": "USG-0020",
      "theme": "usagers",
      "enonce": "Que doit comporter obligatoirement l'équipement d'un motocycliste selon la législation française ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un casque homologué." },
        { "id": "b", "texte": "Des chaussures spéciales." },
        { "id": "c", "texte": "Des lunettes de soleil." },
        { "id": "d", "texte": "Une veste en cuir." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Deux-roues motorisés ».",
      "difficulte": 1
    },
    {
      "id": "USG-0021",
      "theme": "usagers",
      "enonce": "Dans quelles conditions la circulation inter-files est-elle autorisée pour les deux-roues motorisés en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle est toujours interdite." },
        { "id": "b", "texte": "Elle est autorisée dans les zones urbaines denses sous certaines conditions." },
        { "id": "c", "texte": "Elle est autorisée sur l'autoroute." },
        { "id": "d", "texte": "Elle est autorisée uniquement de nuit." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Deux-roues motorisés ».",
      "difficulte": 1
    },
    {
      "id": "USG-0022",
      "theme": "usagers",
      "enonce": "Pourquoi est-il crucial de prêter une attention particulière aux deux-roues motorisés par mauvais temps ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'ils peuvent glisser plus facilement." },
        { "id": "b", "texte": "Parce qu'ils ne sont pas affectés par les conditions météorologiques." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Deux-roues motorisés ».",
      "difficulte": 1
    },
    {
      "id": "USG-0023",
      "theme": "usagers",
      "enonce": "Que devez-vous faire en tant que motocycliste lorsque vous entendez une sirène et voyez des gyrophares dans votre rétroviseur ?",
      "media": "images-doc/img-064-041.jpg",
      "propositions": [
        { "id": "a", "texte": "Continuer à rouler et ne pas s'arrêter" },
        { "id": "b", "texte": "Céder le passage immédiatement et, si nécessaire, s'arrêter sur le bas-côté" },
        { "id": "c", "texte": "Accélérer pour ne pas gêner le véhicule prioritaire" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules prioritaires et encombrants ».",
      "difficulte": 1
    },
    {
      "id": "USG-0024",
      "theme": "usagers",
      "enonce": "Quelle distance de sécurité devez-vous maintenir derrière un camion en mouvement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "10 mètres" },
        { "id": "b", "texte": "20 mètres" },
        { "id": "c", "texte": "5 mètres" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules prioritaires et encombrants ».",
      "difficulte": 1
    },
    {
      "id": "USG-0025",
      "theme": "usagers",
      "enonce": "Pourquoi est-il dangereux de doubler un bus à un arrêt ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que le bus pourrait repartir brusquement" },
        { "id": "b", "texte": "Parce qu'il est interdit de doubler un bus arrêté" },
        { "id": "c", "texte": "Parce que des passagers peuvent descendre et traverser la rue" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules prioritaires et encombrants ».",
      "difficulte": 1
    },
    {
      "id": "USG-0026",
      "theme": "usagers",
      "enonce": "Quels véhicules peuvent légalement transgresser certaines règles de la route en mission ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les camions et bus" },
        { "id": "b", "texte": "Les véhicules de police, ambulances et pompiers" },
        { "id": "c", "texte": "Les véhicules de livraison" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules prioritaires et encombrants ».",
      "difficulte": 1
    },
    {
      "id": "USG-0027",
      "theme": "usagers",
      "enonce": "Quel comportement adopter face à un camion en train de manœuvrer ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Patienter à une distance sécuritaire" },
        { "id": "b", "texte": "Klaxonner pour indiquer votre présence" },
        { "id": "c", "texte": "Essayer de passer rapidement avant qu'il ne termine sa manœuvre" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules prioritaires et encombrants ».",
      "difficulte": 1
    },
    {
      "id": "USG-0028",
      "theme": "usagers",
      "enonce": "Pourquoi est-il important de garder une distance de sécurité avec un autobus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les angles morts et réagir en cas de freinage soudain." },
        { "id": "b", "texte": "Pour pouvoir dépasser plus facilement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules de transport en commun ».",
      "difficulte": 1
    },
    {
      "id": "USG-0029",
      "theme": "usagers",
      "enonce": "Comment identifier les zones réservées aux bus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Grâce à des panneaux spécifiques et des marquages au sol." },
        { "id": "b", "texte": "Les bus ne se conduisent que sur des routes spécifiques." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules de transport en commun ».",
      "difficulte": 1
    },
    {
      "id": "USG-0030",
      "theme": "usagers",
      "enonce": "Quels types de véhicules tombent sous la catégorie de transport en commun?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Bus, trams, trolleybus et véhicules scolaires." },
        { "id": "b", "texte": "Taxis et voitures de location." },
        { "id": "c", "texte": "Voitures particulières utilisées pour le covoiturage." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules de transport en commun ».",
      "difficulte": 1
    },
    {
      "id": "USG-0031",
      "theme": "usagers",
      "enonce": "Que faut-il faire lorsqu'un bus approche de son arrêt?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ralentir et laisser de l'espace pour les passagers." },
        { "id": "b", "texte": "Accélérer pour dépasser le bus avant qu'il s'arrête." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules de transport en commun ».",
      "difficulte": 1
    },
    {
      "id": "USG-0032",
      "theme": "usagers",
      "enonce": "Pourquoi est-il dangereux de se placer dans les angles morts des bus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le conducteur du bus ne peut pas voir le motocycliste." },
        { "id": "b", "texte": "Cela n'a pas d'importance particulière." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Véhicules de transport en commun ».",
      "difficulte": 1
    },
    {
      "id": "USG-0033",
      "theme": "usagers",
      "enonce": "Pourquoi est-il important d'utiliser les clignotants lors d'un changement de direction ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour montrer aux autres conducteurs vos intentions." },
        { "id": "b", "texte": "Pour décorer votre moto." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Communication et Positionnement ».",
      "difficulte": 1
    },
    {
      "id": "USG-0034",
      "theme": "usagers",
      "enonce": "Quand devez-vous utiliser le klaxon en conduisant une moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour avertir les autres usagers de votre présence" },
        { "id": "b", "texte": "Pour saluer vos amis." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Communication et Positionnement ».",
      "difficulte": 1
    },
    {
      "id": "USG-0035",
      "theme": "usagers",
      "enonce": "Quel est le meilleur positionnement dans une voie pour être bien visible sur une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Au centre de la voie." },
        { "id": "b", "texte": "Le plus à gauche possible." },
        { "id": "c", "texte": "Le plus à droite possible." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Communication et Positionnement ».",
      "difficulte": 1
    },
    {
      "id": "USG-0036",
      "theme": "usagers",
      "enonce": "Quel geste manuel pouvez-vous utiliser pour indiquer un tournant à gauche si vos clignotants ne sont pas visibles?",
      "media": "images-doc/img-067-043.jpg",
      "propositions": [
        { "id": "a", "texte": "Lever la main gauche." },
        { "id": "b", "texte": "Secouer la main gauche." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Communication et Positionnement ».",
      "difficulte": 1
    },
    {
      "id": "USG-0037",
      "theme": "usagers",
      "enonce": "Quelles actions devez-vous entreprendre pour anticiper les dangers en conduisant une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Regarder loin devant et vérifier vos rétroviseurs." },
        { "id": "b", "texte": "Regarder directement à côté de vous uniquement." },
        { "id": "c", "texte": "Ne pas utiliser de rétroviseurs pour rester concentré devant." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Communication et Positionnement ».",
      "difficulte": 1
    },
    {
      "id": "USG-0038",
      "theme": "usagers",
      "enonce": "Pourquoi l'observation proactive est-elle importante à moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle permet de rouler plus vite." },
        { "id": "b", "texte": "Elle permet d'identifier à l'avance les dangers potentiels." },
        { "id": "c", "texte": "Elle permet d'enfreindre les règles de circulation." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Anticipation des comportements ».",
      "difficulte": 1
    },
    {
      "id": "USG-0039",
      "theme": "usagers",
      "enonce": "Quel est le rôle des indices visuels dans l'anticipation des comportements?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ils ne sont pas significatifs pour les motocyclistes." },
        { "id": "b", "texte": "Ils aident à prévoir les intentions des autres usagers." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Anticipation des comportements ».",
      "difficulte": 1
    },
    {
      "id": "USG-0040",
      "theme": "usagers",
      "enonce": "Comment une bonne réaction aux indices peut-elle prévenir les accidents?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En maintenant une vitesse constante." },
        { "id": "b", "texte": "En prenant des mesures telles que ralentir ou changer de voie." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Anticipation des comportements ».",
      "difficulte": 1
    },
    {
      "id": "USG-0041",
      "theme": "usagers",
      "enonce": "Pourquoi est-il important de maintenir une distance de sécurité à moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour avoir plus de place pour manœuvrer." },
        { "id": "b", "texte": "Pour avoir suffisamment de temps pour réagir en cas d'imprévu." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Anticipation des comportements ».",
      "difficulte": 1
    },
    {
      "id": "USG-0042",
      "theme": "usagers",
      "enonce": "Comment les conditions météorologiques affectent-elles l'anticipation des comportements à moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles n'ont pas d'impact significatif." },
        { "id": "b", "texte": "Elles réduisent la visibilité et nécessitent une attention accrue." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Anticipation des comportements ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0031",
      "theme": "route",
      "enonce": "Quelle est l'une des principales causes des accidents de moto en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Excès de vitesse" },
        { "id": "b", "texte": "Utilisation du klaxon" },
        { "id": "c", "texte": "Respect des limites de vitesse" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Analyse des accidents : Causes et risques courants ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0032",
      "theme": "route",
      "enonce": "Pourquoi est-il important de porter un casque lors de la conduite d'une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les amendes" },
        { "id": "b", "texte": "Pour protéger la tête en cas d'accident" },
        { "id": "c", "texte": "Pour amuser les enfants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Analyse des accidents : Causes et risques courants ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0033",
      "theme": "route",
      "enonce": "Quel comportement est particulièrement dangereux aux intersections?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer" },
        { "id": "b", "texte": "Manquer de vigilance" },
        { "id": "c", "texte": "Utiliser les clignotants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Analyse des accidents : Causes et risques courants ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0034",
      "theme": "route",
      "enonce": "Quelle condition météorologique est la plus dangereuse pour les motards?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Soleil" },
        { "id": "b", "texte": "Pluie" },
        { "id": "c", "texte": "Ciel couvert" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Analyse des accidents : Causes et risques courants ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0035",
      "theme": "route",
      "enonce": "Quelle mesure préventive peut augmenter la visibilité d'un motard?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Porter des vêtements réfléchissants" },
        { "id": "b", "texte": "Rouler sans phare" },
        { "id": "c", "texte": "Utiliser des écouteurs" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Analyse des accidents : Causes et risques courants ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0001",
      "theme": "equipements",
      "enonce": "Quel type de casque offre généralement la meilleure protection?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Casque jet" },
        { "id": "b", "texte": "Casque intégral" },
        { "id": "c", "texte": "Casque modulable" },
        { "id": "d", "texte": "Casque crossover" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements des deux-roues : Types et importance ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0002",
      "theme": "equipements",
      "enonce": "Depuis quelle année le port des gants homologués est-il obligatoire en France pour les motocyclistes?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "2006" },
        { "id": "b", "texte": "2010" },
        { "id": "c", "texte": "2013" },
        { "id": "d", "texte": "2016" }
      ],
      "bonnesReponses": ["d"],
      "explication": "Bonne(s) réponse(s) : D. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements des deux-roues : Types et importance ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0003",
      "theme": "equipements",
      "enonce": "Quel équipement est obligatoire à porter en cas d'accident ou de panne?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les bottes" },
        { "id": "b", "texte": "Le gilet de haute visibilité" },
        { "id": "c", "texte": "Le casque" },
        { "id": "d", "texte": "Les gants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements des deux-roues : Types et importance ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0004",
      "theme": "equipements",
      "enonce": "Les vêtements de moto doivent idéalement être renforcés à quels endroits?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aux pieds, aux chevilles et aux genoux" },
        { "id": "b", "texte": "Au torse, aux coudes et aux mains" },
        { "id": "c", "texte": "Aux coudes, aux épaules et aux genoux" },
        { "id": "d", "texte": "Au cou, aux pieds et aux chevilles" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements des deux-roues : Types et importance ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0005",
      "theme": "equipements",
      "enonce": "Quel est le critère principal pour qu'un casque soit considéré comme conforme?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il doit être d'une marque reconnue" },
        { "id": "b", "texte": "Il doit être homologué et porter une étiquette d'homologation" },
        { "id": "c", "texte": "Il doit être de couleur vive" },
        { "id": "d", "texte": "Il doit être léger" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements des deux-roues : Types et importance ».",
      "difficulte": 1
    },
    {
      "id": "CND-0041",
      "theme": "conducteur",
      "enonce": "Quel est le taux maximal d'alcoolémie autorisé pour un conducteur expérimenté en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,2 g/L" },
        { "id": "b", "texte": "0,5 g/L" },
        { "id": "c", "texte": "0,8 g/L" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Dangers liés à l'alcool et aux stupéfiants : Impact sur la conduite ».",
      "difficulte": 1
    },
    {
      "id": "CND-0042",
      "theme": "conducteur",
      "enonce": "Quelles substances les tests de dépistage de stupéfiants peuvent-ils détecter chez les conducteurs ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Seulement le cannabis" },
        { "id": "b", "texte": "Cannabis, cocaïne, amphétamines et autres drogues" },
        { "id": "c", "texte": "Seulement les amphétamines" },
        { "id": "d", "texte": "Aucune substance illicite" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Dangers liés à l'alcool et aux stupéfiants : Impact sur la conduite ».",
      "difficulte": 1
    },
    {
      "id": "CND-0043",
      "theme": "conducteur",
      "enonce": "Quels sont les symptômes de la consommation d'alcool au volant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Augmentation des réflexes" },
        { "id": "b", "texte": "Temps de réaction allongé" },
        { "id": "c", "texte": "Vision améliorée" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Dangers liés à l'alcool et aux stupéfiants : Impact sur la conduite ».",
      "difficulte": 1
    },
    {
      "id": "CND-0044",
      "theme": "conducteur",
      "enonce": "Quelle est la sanction en cas de conduite sous l'influence des stupéfiants ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aucune sanction" },
        { "id": "b", "texte": "Perte de points et amendes" },
        { "id": "c", "texte": "Récompense" },
        { "id": "d", "texte": "Promotion" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Dangers liés à l'alcool et aux stupéfiants : Impact sur la conduite ».",
      "difficulte": 1
    },
    {
      "id": "CND-0045",
      "theme": "conducteur",
      "enonce": "Quelle précaution prendre si vous avez consommé de l'alcool et devez rentrer chez vous ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Conduire prudemment" },
        { "id": "b", "texte": "Ne pas conduire et utiliser les transports en commun, les taxis ou un conducteur sobre" },
        { "id": "c", "texte": "Attendre que l'alcool disparaisse complètement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Dangers liés à l'alcool et aux stupéfiants : Impact sur la conduite ».",
      "difficulte": 1
    },
    {
      "id": "USG-0043",
      "theme": "usagers",
      "enonce": "Quel type de moto peut-on conduire avec un permis A1 ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des motocyclettes légères de 125 cm³ maximum" },
        { "id": "b", "texte": "Des motos de 35 kW" },
        { "id": "c", "texte": "Des cyclomoteurs de 50 cm³" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Catégories de motards : Différences et spécificités ».",
      "difficulte": 1
    },
    {
      "id": "USG-0044",
      "theme": "usagers",
      "enonce": "À partir de quel âge peut-on obtenir le permis A2 ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "16 ans" },
        { "id": "b", "texte": "18 ans" },
        { "id": "c", "texte": "20 ans" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Catégories de motards : Différences et spécificités ».",
      "difficulte": 1
    },
    {
      "id": "USG-0045",
      "theme": "usagers",
      "enonce": "Combien de chevaux peut avoir une moto conduite avec un permis A2 ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "15 chevaux" },
        { "id": "b", "texte": "47,5 chevaux" },
        { "id": "c", "texte": "70 chevaux" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Catégories de motards : Différences et spécificités ».",
      "difficulte": 1
    },
    {
      "id": "USG-0046",
      "theme": "usagers",
      "enonce": "Quelle formation complémentaire est nécessaire pour passer du permis A2 au permis A ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Formation de 7 heures" },
        { "id": "b", "texte": "Formation de 14 heures" },
        { "id": "c", "texte": "Aucunes formations supplémentaires" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Catégories de motards : Différences et spécificités ».",
      "difficulte": 1
    },
    {
      "id": "USG-0047",
      "theme": "usagers",
      "enonce": "Quel équipement de sécurité est obligatoire pour tous les motards en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Casque et gants uniquement" },
        { "id": "b", "texte": "Casque, gants, blouson, pantalon et chaussures spécifiques" },
        { "id": "c", "texte": "Casque, blouson et gants uniquement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Catégories de motards : Différences et spécificités ».",
      "difficulte": 1
    },
    {
      "id": "DOC-0001",
      "theme": "documents",
      "enonce": "Quelle est la couverture minimale obligatoire pour une moto en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Assurance au tiers" },
        { "id": "b", "texte": "Assurance tous risques" },
        { "id": "c", "texte": "Assistance" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Assurance : Obligatoire et facultative ».",
      "difficulte": 1
    },
    {
      "id": "DOC-0002",
      "theme": "documents",
      "enonce": "Qu'est-ce que l'assurance tous risques couvre?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Uniquement les vols de moto" },
        { "id": "b", "texte": "Tous les dommages subis par le véhicule assuré, même en cas de responsabilité du conducteur" },
        { "id": "c", "texte": "Uniquement les dégâts causés par des tiers" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Assurance : Obligatoire et facultative ».",
      "difficulte": 1
    },
    {
      "id": "DOC-0003",
      "theme": "documents",
      "enonce": "Pourquoi est-il important de considérer le coût des primes d'assurance?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter des difficultés financières" },
        { "id": "b", "texte": "Parce que les primes n'ont pas d'importance" },
        { "id": "c", "texte": "Pour payer le minimum d'impôts" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Assurance : Obligatoire et facultative ».",
      "difficulte": 1
    },
    {
      "id": "DOC-0004",
      "theme": "documents",
      "enonce": "Quelle assurance propose une assistance en cas de panne?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Assurance tous risques" },
        { "id": "b", "texte": "Assurance au tiers" },
        { "id": "c", "texte": "Assistance" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Assurance : Obligatoire et facultative ».",
      "difficulte": 1
    },
    {
      "id": "DOC-0005",
      "theme": "documents",
      "enonce": "Quelle assurance est recommandée pour un conducteur de moto souhaitant une protection maximale?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Assurance au tiers" },
        { "id": "b", "texte": "Assurance tous risques" },
        { "id": "c", "texte": "Assurance intermédiaire" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Assurance : Obligatoire et facultative ».",
      "difficulte": 1
    },
    {
      "id": "CND-0046",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il important d'adapter votre vitesse en fonction des conditions de la route ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela permet de respecter les limitations de vitesse." },
        { "id": "b", "texte": "Cela permet de consommer moins de carburant." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise de conscience des risques : Comportements et attitudes ».",
      "difficulte": 1
    },
    {
      "id": "CND-0047",
      "theme": "conducteur",
      "enonce": "Quel est l'effet de la fatigue sur la conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La fatigue peut améliorer la concentration." },
        { "id": "b", "texte": "La fatigue ralentit les temps de réaction." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise de conscience des risques : Comportements et attitudes ».",
      "difficulte": 1
    },
    {
      "id": "CND-0048",
      "theme": "conducteur",
      "enonce": "Quel est le taux maximal d'alcool autorisé pour conduire en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,8 g/L de sang" },
        { "id": "b", "texte": "0,5 g/L de sang" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise de conscience des risques : Comportements et attitudes ».",
      "difficulte": 1
    },
    {
      "id": "CND-0049",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il déconseillé d'utiliser un téléphone portable en conduisant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela distrait le conducteur." },
        { "id": "b", "texte": "Cela augmente la vitesse de réaction." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise de conscience des risques : Comportements et attitudes ».",
      "difficulte": 1
    },
    {
      "id": "CND-0050",
      "theme": "conducteur",
      "enonce": "Qu'est-ce que l'attitude proactive en conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rouler vite pour éviter les autres véhicules." },
        { "id": "b", "texte": "Anticiper les actions des autres usagers." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise de conscience des risques : Comportements et attitudes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0036",
      "theme": "route",
      "enonce": "Quelle est la mesure la plus importante pour une conduite préventive à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer pour éviter les voitures derrière" },
        { "id": "b", "texte": "Anticiper les dangers" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduite préventive : Stratégies et techniques ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0037",
      "theme": "route",
      "enonce": "Quelle attitude adopter face aux autres usagers de la route pour une conduite préventive ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Courtoise et respectueuse" },
        { "id": "b", "texte": "Agressive pour s'affirmer" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduite préventive : Stratégies et techniques ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0038",
      "theme": "route",
      "enonce": "Pourquoi est-il important de respecter les limitations de vitesse ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les amendes" },
        { "id": "b", "texte": "Pour réduire les risques d'accident" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduite préventive : Stratégies et techniques ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0039",
      "theme": "route",
      "enonce": "Quelle est la raison de vérifier régulièrement vos rétroviseurs en moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour ajuster votre casque" },
        { "id": "b", "texte": "Pour surveiller la circulation derrière vous" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduite préventive : Stratégies et techniques ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0040",
      "theme": "route",
      "enonce": "Pourquoi est-il recommandé de porter un équipement de protection complet à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que c'est à la mode" },
        { "id": "b", "texte": "Pour réduire le risque de blessures graves" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduite préventive : Stratégies et techniques ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0001",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important de vérifier régulièrement la pression des pneus de votre moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour économiser sur le carburant." },
        { "id": "b", "texte": "Pour assurer une bonne maniabilité et stabilité." },
        { "id": "c", "texte": "Pour que les pneus durent plus longtemps." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Sécurité du motocycle ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0002",
      "theme": "mecanique",
      "enonce": "Que devez-vous vérifier dans le système de freinage de votre motocycle ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les plaquettes de frein et le liquide de frein." },
        { "id": "b", "texte": "L'état des phares." },
        { "id": "c", "texte": "La pression des pneus." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Sécurité du motocycle ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0003",
      "theme": "mecanique",
      "enonce": "Quelle est la fonction principale de la suspension d'un motocycle ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Absorber les impacts de la route." },
        { "id": "b", "texte": "Réduire la consommation de carburant." },
        { "id": "c", "texte": "Aider à la transmission de la puissance." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Sécurité du motocycle ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0004",
      "theme": "mecanique",
      "enonce": "Que devez-vous vérifier dans votre système d'éclairage et de signalisation ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La luminosité du tableau de bord." },
        { "id": "b", "texte": "L'état des amortisseurs." },
        { "id": "c", "texte": "Les phares, les feux arrière, les clignotants et les feux stop." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Sécurité du motocycle ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0005",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important de maintenir la chaîne de transmission correctement tendue et lubrifiée ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour améliorer la vitesse maximale de la moto." },
        { "id": "b", "texte": "Pour assurer une transmission de puissance fluide et éviter les risques de cassure." },
        { "id": "c", "texte": "Pour rendre la moto plus silencieuse." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Sécurité du motocycle ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0041",
      "theme": "route",
      "enonce": "Quels sont les signes courants de fatigue en conduisant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Bâillement et difficulté à maintenir la concentration." },
        { "id": "b", "texte": "Excès de vitesse et agressivité." },
        { "id": "c", "texte": "Augmentation de la température du moteur." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Fatigue et conduite de nuit : Risques associés ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0042",
      "theme": "route",
      "enonce": "Que faut-il faire si vous ressentez de la fatigue en conduisant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Continuer à rouler jusqu'à la destination." },
        { "id": "b", "texte": "S'arrêter immédiatement pour se reposer." },
        { "id": "c", "texte": "Écouter de la musique forte pour rester éveillé." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Fatigue et conduite de nuit : Risques associés ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0043",
      "theme": "route",
      "enonce": "Quel est l'équipement recommandé pour rester visible lors de la conduite de nuit ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vêtements réfléchissants." },
        { "id": "b", "texte": "Casque sombre." },
        { "id": "c", "texte": "Lunettes de soleil." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Fatigue et conduite de nuit : Risques associés ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0044",
      "theme": "route",
      "enonce": "Pourquoi est-il déconseillé de rouler entre 2h et 5h du matin ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'il y a moins de lumière." },
        { "id": "b", "texte": "Parce que la somnolence est la plus forte." },
        { "id": "c", "texte": "Parce que les routes sont fermées." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Fatigue et conduite de nuit : Risques associés ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0045",
      "theme": "route",
      "enonce": "Quelle mesure peut réduire les risques associés à la conduite de nuit ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduire votre vitesse." },
        { "id": "b", "texte": "Accélérer pour arriver plus vite." },
        { "id": "c", "texte": "Éteindre vos phares." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Fatigue et conduite de nuit : Risques associés ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0046",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée en agglomération pour les motos en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "60 km/h" },
        { "id": "b", "texte": "50 km/h" },
        { "id": "c", "texte": "40 km/h" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vitesse et freinage : Importance de la maîtrise ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0047",
      "theme": "route",
      "enonce": "Quelle est la distance de sécurité recommandée à 50 km/h?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "15 mètres" },
        { "id": "b", "texte": "28 mètres" },
        { "id": "c", "texte": "40 mètres" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vitesse et freinage : Importance de la maîtrise ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0048",
      "theme": "route",
      "enonce": "Pourquoi est-il important d'utiliser les deux freins lors du freinage?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela permet de réduire l'usure des freins." },
        { "id": "b", "texte": "Cela améliore la stabilité et l'efficacité du freinage." },
        { "id": "c", "texte": "Cela économise du carburant." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vitesse et freinage : Importance de la maîtrise ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0049",
      "theme": "route",
      "enonce": "En cas de freinage d'urgence, quelle est la meilleure méthode pour ne pas perdre le contrôle de la moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Freiner uniquement avec le frein avant." },
        { "id": "b", "texte": "Freiner fort tout en répartissant la force sur les deux freins et en équilibrant la moto." },
        { "id": "c", "texte": "Débrayer immédiatement." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vitesse et freinage : Importance de la maîtrise ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0050",
      "theme": "route",
      "enonce": "Quel est l'impact de la météo sur le freinage en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle n'a aucun impact." },
        { "id": "b", "texte": "Elle peut allonger la distance de freinage." },
        { "id": "c", "texte": "Elle raccourcit la distance de freinage." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vitesse et freinage : Importance de la maîtrise ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0006",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important de vérifier régulièrement la pression des pneus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour améliorer la consommation de carburant." },
        { "id": "b", "texte": "Pour allonger la durée de vie des phares." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Pneumatiques, freins et feux ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0007",
      "theme": "mecanique",
      "enonce": "Quelle est la fréquence recommandée pour contrôler l'état des plaquettes de frein?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tous les 5 000 km." },
        { "id": "b", "texte": "Une fois par an." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Pneumatiques, freins et feux ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0008",
      "theme": "mecanique",
      "enonce": "Que devez-vous vérifier en premier lieu si vos feux de stop ne fonctionnent plus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le niveau d'huile moteur." },
        { "id": "b", "texte": "L'état des ampoules des feux de stop." },
        { "id": "c", "texte": "La pression des pneus." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Pneumatiques, freins et feux ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0009",
      "theme": "mecanique",
      "enonce": "Quel est l'impact d'un liquide de frein insuffisant?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aucun impact sur la moto." },
        { "id": "b", "texte": "Diminution de la capacité de freinage." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Pneumatiques, freins et feux ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0010",
      "theme": "mecanique",
      "enonce": "Quel type de pneumatiques devez-vous choisir pour rouler en hiver?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des pneus été." },
        { "id": "b", "texte": "Des pneus hiver." },
        { "id": "c", "texte": "Des pneus toutes saisons." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Éléments mécaniques : Pneumatiques, freins et feux ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0011",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important de vérifier régulièrement le niveau d'huile moteur?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter l'usure rapide du moteur." },
        { "id": "b", "texte": "Pour améliorer le système de refroidissement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Niveau des liquides : Huile, frein et carburant ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0012",
      "theme": "mecanique",
      "enonce": "À quelle fréquence devrait-on changer le liquide de frein d'une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tous les mois." },
        { "id": "b", "texte": "Tous les deux ans." },
        { "id": "c", "texte": "Tous les cinq ans." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Niveau des liquides : Huile, frein et carburant ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0013",
      "theme": "mecanique",
      "enonce": "Comment vérifier le niveau de carburant sur une moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En regardant la jauge de carburant." },
        { "id": "b", "texte": "En écoutant le bruit du moteur." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Niveau des liquides : Huile, frein et carburant ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0014",
      "theme": "mecanique",
      "enonce": "Quel est le rôle principal de l'huile moteur?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Lubrifier les composants internes du moteur." },
        { "id": "b", "texte": "Réduire les émissions de gaz." },
        { "id": "c", "texte": "Augmenter la vitesse maximale de la moto." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Niveau des liquides : Huile, frein et carburant ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0015",
      "theme": "mecanique",
      "enonce": "Que faire si le niveau de liquide de frein est bas?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Remplir le réservoir avec le liquide de frein approprié." },
        { "id": "b", "texte": "Ajouter de l'eau au réservoir." },
        { "id": "c", "texte": "Ignorer le problème." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Niveau des liquides : Huile, frein et carburant ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0016",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important que les échappements modifiés respectent les limites de bruit et les normes Euro d'émissions?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les amendes inutiles." },
        { "id": "b", "texte": "Pour être en conformité avec les réglementations environnementales et réduire la pollution sonore." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Modifications techniques : Règlementations et sécurité ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0017",
      "theme": "mecanique",
      "enonce": "Quelles sont les conséquences possibles d'une modification incorrecte du système de freinage?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Augmentation des performances de la moto." },
        { "id": "b", "texte": "Perte d'efficacité de freinage et augmentation du risque d'accidents." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Modifications techniques : Règlementations et sécurité ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0018",
      "theme": "mecanique",
      "enonce": "Quels documents devriez-vous vérifier pour assurer la conformité des pièces ajoutées ou modifiées?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La carte d'immatriculation." },
        { "id": "b", "texte": "Le manuel du propriétaire." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Modifications techniques : Règlementations et sécurité ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0019",
      "theme": "mecanique",
      "enonce": "Quel est l'avantage de faire appel à un professionnel pour les modifications complexes?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela coûte moins cher." },
        { "id": "b", "texte": "Les modifications seront conformes et sécuritaires." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Modifications techniques : Règlementations et sécurité ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0020",
      "theme": "mecanique",
      "enonce": "Que risquez-vous si les modifications de votre moto ne sont pas conformes aux réglementations?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rien du tout, c'est à votre discrétion." },
        { "id": "b", "texte": "Vous risquez une amende, une immobilisation de votre moto et un refus de couverture d'assurance." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Modifications techniques : Règlementations et sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0006",
      "theme": "equipements",
      "enonce": "Quel type de casque offre la protection maximale pour un motard?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Casque intégral" },
        { "id": "b", "texte": "Casque modulable" },
        { "id": "c", "texte": "Casque jet" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements de protection : Casque et tenue appropriée ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0007",
      "theme": "equipements",
      "enonce": "Pourquoi est-il important de porter des gants en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour améliorer la prise sur le guidon" },
        { "id": "b", "texte": "Pour protéger les mains des chocs et des intempéries" },
        { "id": "c", "texte": "Pour compléter l'esthétique de la tenue" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements de protection : Casque et tenue appropriée ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0008",
      "theme": "equipements",
      "enonce": "Quelle norme doivent respecter les casques en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "ISO 9001" },
        { "id": "b", "texte": "ECE 22-05" },
        { "id": "c", "texte": "DIN 4845" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements de protection : Casque et tenue appropriée ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0009",
      "theme": "equipements",
      "enonce": "Quel équipement est fortement recommandé pour protéger la colonne vertébrale?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protection pectorale" },
        { "id": "b", "texte": "Protection dorsale" },
        { "id": "c", "texte": "Protection du coccyx" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements de protection : Casque et tenue appropriée ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0010",
      "theme": "equipements",
      "enonce": "Quels critères sont essentiels à considérer lors du choix d'un casque de moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le design et la couleur" },
        { "id": "b", "texte": "Le confort, la taille, le poids et la ventilation" },
        { "id": "c", "texte": "Le prix uniquement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements de protection : Casque et tenue appropriée ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0021",
      "theme": "mecanique",
      "enonce": "Quel feu de moto doit être allumé dès que la visibilité est insuffisante, même de jour?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Feu de route" },
        { "id": "b", "texte": "Feu de croisement" },
        { "id": "c", "texte": "Feu de position" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Importance des feux : Obligatoires et facultatifs ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0022",
      "theme": "mecanique",
      "enonce": "Quand devez-vous éteindre vos feux de route?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En cas de brouillard" },
        { "id": "b", "texte": "En rentrant dans une agglomération" },
        { "id": "c", "texte": "Lorsqu'un autre véhicule approche en sens inverse" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Importance des feux : Obligatoires et facultatifs ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0023",
      "theme": "mecanique",
      "enonce": "Quel feu est essentiel pour signaler aux autres conducteurs que vous êtes sur le point de ralentir ou de vous arrêter?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Feu de position" },
        { "id": "b", "texte": "Feu de stop" },
        { "id": "c", "texte": "Feu de croisement" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Importance des feux : Obligatoires et facultatifs ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0024",
      "theme": "mecanique",
      "enonce": "Les feux de brouillard arrière sont particulièrement utiles dans quelles conditions?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En plein jour" },
        { "id": "b", "texte": "En cas de visibilité normale" },
        { "id": "c", "texte": "En cas de brouillard ou de forte pluie" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Importance des feux : Obligatoires et facultatifs ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0025",
      "theme": "mecanique",
      "enonce": "Quel feu est facultatif mais recommandé lorsqu'il y a une visibilité réduite due au brouillard ou à une forte pluie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Feux de route" },
        { "id": "b", "texte": "Feux de brouillard avant" },
        { "id": "c", "texte": "Feux de position" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Importance des feux : Obligatoires et facultatifs ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0026",
      "theme": "mecanique",
      "enonce": "Quel outil est indispensable pour appliquer le couple de serrage correct aux boulons et écrous de la moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Clé dynamométrique" },
        { "id": "b", "texte": "Tournevis" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Outils d'entretien : Équipements indispensables pour la maintenance ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0027",
      "theme": "mecanique",
      "enonce": "Pourquoi est-il important de vérifier régulièrement la pression des pneus de la moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour économiser du carburant" },
        { "id": "b", "texte": "Pour garantir la sécurité et les performances" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Outils d'entretien : Équipements indispensables pour la maintenance ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0028",
      "theme": "mecanique",
      "enonce": "Quel équipement est utilisé pour lever la moto en toute sécurité afin de faciliter l'entretien ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tournevis" },
        { "id": "b", "texte": "Trépied de levage" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Outils d'entretien : Équipements indispensables pour la maintenance ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0029",
      "theme": "mecanique",
      "enonce": "Comment un graisseur aide-t-il à maintenir la chaîne de la moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En enlevant la saleté" },
        { "id": "b", "texte": "En appliquant de la graisse pour réduire la friction" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Outils d'entretien : Équipements indispensables pour la maintenance ».",
      "difficulte": 1
    },
    {
      "id": "MEC-0030",
      "theme": "mecanique",
      "enonce": "Quel outil est utilisé pour nettoyer et lubrifier efficacement la chaîne de la moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Nettoyeur de chaînes" },
        { "id": "b", "texte": "Pince multiprise" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Outils d'entretien : Équipements indispensables pour la maintenance ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0011",
      "theme": "equipements",
      "enonce": "Le port du casque est-il obligatoire pour tous les conducteurs et passagers de motos en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, c'est obligatoire pour tous." },
        { "id": "b", "texte": "Non, c'est seulement recommandé." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Casque : Protection obligatoire et normes d'homologation ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0012",
      "theme": "equipements",
      "enonce": "Quelle est la norme européenne obligatoire pour les casques de moto en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "ECE 22-05" },
        { "id": "b", "texte": "DOT" },
        { "id": "c", "texte": "SNELL" },
        { "id": "d", "texte": "ECE 22-01" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Casque : Protection obligatoire et normes d'homologation ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0013",
      "theme": "equipements",
      "enonce": "Quel type de casque offre la protection la plus complète pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Casque intégral" },
        { "id": "b", "texte": "Casque jet" },
        { "id": "c", "texte": "Casque modulable" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Casque : Protection obligatoire et normes d'homologation ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0014",
      "theme": "equipements",
      "enonce": "Quelle est la durée de vie recommandée d'un casque de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "5 ans" },
        { "id": "b", "texte": "10 ans" },
        { "id": "c", "texte": "3 ans" },
        { "id": "d", "texte": "7 ans" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Casque : Protection obligatoire et normes d'homologation ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0015",
      "theme": "equipements",
      "enonce": "Comment vérifier si un casque est bien ajusté ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il doit être confortable et ne doit pas bouger lorsqu'on secoue la tête." },
        { "id": "b", "texte": "Il doit être très serré pour ne pas bouger du tout." },
        { "id": "c", "texte": "Il doit être un peu lâche pour un confort optimal." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Casque : Protection obligatoire et normes d'homologation ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0016",
      "theme": "equipements",
      "enonce": "Pourquoi le port des gants homologués est-il obligatoire en France pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour protéger les mains et les poignets en cas de chute." },
        { "id": "b", "texte": "Pour améliorer l'adhérence aux poignées de la moto." },
        { "id": "c", "texte": "Pour respecter les normes vestimentaires en moto." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gants : Équipement obligatoire et exigences de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0017",
      "theme": "equipements",
      "enonce": "Quels sont les critères principaux que doivent respecter les gants homologués CE ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Marquage CE, résistance à l'abrasion, et ergonomie." },
        { "id": "b", "texte": "Couleur, matière, et logo de la marque." },
        { "id": "c", "texte": "Imperméabilité, design moderne, et ventilation." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gants : Équipement obligatoire et exigences de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0018",
      "theme": "equipements",
      "enonce": "Quelle est l'amende en cas de non-port de gants homologués par un motocycliste ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "68 euros et un retrait d'un point du permis de conduire." },
        { "id": "b", "texte": "135 euros et un retrait de deux points du permis de conduire." },
        { "id": "c", "texte": "45 euros sans retrait de points." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gants : Équipement obligatoire et exigences de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0019",
      "theme": "equipements",
      "enonce": "Pourquoi est-il important de choisir des gants adaptés à la saison ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour assurer confort et fonctionnalité adaptés à la saison." },
        { "id": "b", "texte": "Pour être à la mode en toutes saisons." },
        { "id": "c", "texte": "Pour augmenter la durée de vie des gants." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gants : Équipement obligatoire et exigences de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0020",
      "theme": "equipements",
      "enonce": "Que doit-on vérifier régulièrement concernant ses gants de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'usure et l'état général des gants." },
        { "id": "b", "texte": "Le design et la couleur des gants." },
        { "id": "c", "texte": "La correspondance avec le reste de l'équipement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gants : Équipement obligatoire et exigences de sécurité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0021",
      "theme": "equipements",
      "enonce": "Quels sont les matériaux les plus couramment utilisés pour les blousons de moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Coton et laine" },
        { "id": "b", "texte": "Cuir et textile" },
        { "id": "c", "texte": "Plastique et nylon" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vêtements de protection : Blousons, pantalons et matériaux adaptés ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0022",
      "theme": "equipements",
      "enonce": "Pourquoi est-il important de porter des pantalons de protection en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour garder les jambes au chaud" },
        { "id": "b", "texte": "Pour minimiser les blessures en cas de chute" },
        { "id": "c", "texte": "Pour des raisons esthétiques" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vêtements de protection : Blousons, pantalons et matériaux adaptés ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0023",
      "theme": "equipements",
      "enonce": "Quels sont les avantages du cuir comme matériau pour les vêtements de protection en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il est léger et transparent" },
        { "id": "b", "texte": "Il est durable et résistant aux abrasions" },
        { "id": "c", "texte": "Il est imperméable et économique" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vêtements de protection : Blousons, pantalons et matériaux adaptés ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0024",
      "theme": "equipements",
      "enonce": "Quels sont les types de protections que doivent avoir les blousons de moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protection au cou et aux poignets" },
        { "id": "b", "texte": "Protection aux coudes, épaules et dos" },
        { "id": "c", "texte": "Protection aux genoux et chevilles" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vêtements de protection : Blousons, pantalons et matériaux adaptés ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0025",
      "theme": "equipements",
      "enonce": "Quels matériaux synthétiques sont couramment utilisés dans les vêtements de protection en moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Kevlar et Cordura" },
        { "id": "b", "texte": "Nylon et Polyester" },
        { "id": "c", "texte": "Coton et Jean" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Vêtements de protection : Blousons, pantalons et matériaux adaptés ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0026",
      "theme": "equipements",
      "enonce": "Quels sont les deux types principaux d'airbags pour motos ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vestes à airbag et airbags sur le réservoir" },
        { "id": "b", "texte": "Casques à airbag et airbags sur les pneus" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Airbag moto : Fonctionnement et avantages en cas d'accident ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0027",
      "theme": "equipements",
      "enonce": "Quelle partie du corps est particulièrement protégée par une veste à airbag ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les pieds et les chevilles" },
        { "id": "b", "texte": "Le thorax et le cou" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Airbag moto : Fonctionnement et avantages en cas d'accident ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0028",
      "theme": "equipements",
      "enonce": "Comment se déclenche un airbag moto intégré sur la moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Par pression exercée sur les poignées" },
        { "id": "b", "texte": "Par une série de capteurs en cas de collision ou de perte de contrôle" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Airbag moto : Fonctionnement et avantages en cas d'accident ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0029",
      "theme": "equipements",
      "enonce": "Pourquoi l'usage des airbags moto est-il recommandé en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'ils sont obligatoires pour obtenir une assurance" },
        { "id": "b", "texte": "Pour réduire les blessures graves et les décès en cas d'accidents" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Airbag moto : Fonctionnement et avantages en cas d'accident ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0030",
      "theme": "equipements",
      "enonce": "Quel est le temps typique de gonflage d'une veste à airbag après un accident ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En quelques secondes" },
        { "id": "b", "texte": "En quelques millisecondes" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Airbag moto : Fonctionnement et avantages en cas d'accident ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0031",
      "theme": "equipements",
      "enonce": "Pourquoi est-il important de porter un gilet réfléchissant à moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour respecter la loi" },
        { "id": "b", "texte": "Pour augmenter la visibilité et réduire le risque d'accidents" },
        { "id": "c", "texte": "Pour ne pas se faire arrêter par la police" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gilets réfléchissants : Importance pour la visibilité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0032",
      "theme": "equipements",
      "enonce": "Quand doit-on porter un gilet réfléchissant selon le Code de la route français?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Uniquement la nuit" },
        { "id": "b", "texte": "En cas de panne ou d'accident" },
        { "id": "c", "texte": "Par temps de pluie" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gilets réfléchissants : Importance pour la visibilité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0033",
      "theme": "equipements",
      "enonce": "Quel est l'avantage principal des bandes réfléchissantes sur un gilet?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles sont décoratives" },
        { "id": "b", "texte": "Elles renvoient la lumière et augmentent la visibilité" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gilets réfléchissants : Importance pour la visibilité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0034",
      "theme": "equipements",
      "enonce": "Quelles sont les couleurs autorisées pour un gilet réfléchissant?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rouge, bleu et noir" },
        { "id": "b", "texte": "Jaune, orange, et vert" },
        { "id": "c", "texte": "Blanc, gris, et jaune" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gilets réfléchissants : Importance pour la visibilité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0035",
      "theme": "equipements",
      "enonce": "Est-il obligatoire d'avoir un gilet réfléchissant homologué en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Non, n'importe quel gilet suffit" },
        { "id": "b", "texte": "Oui, il doit être homologué" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gilets réfléchissants : Importance pour la visibilité ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0036",
      "theme": "equipements",
      "enonce": "Pourquoi est-il important de porter des chaussures de sécurité en moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour améliorer l'aérodynamisme" },
        { "id": "b", "texte": "Pour protéger vos pieds et chevilles" },
        { "id": "c", "texte": "Pour compléter votre tenue" },
        { "id": "d", "texte": "Parce que c'est obligatoire" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Chaussures de sécurité : Protection des pieds et des chevilles ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0037",
      "theme": "equipements",
      "enonce": "Quelle caractéristique est essentielle pour les semelles des chaussures de sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles doivent être plates" },
        { "id": "b", "texte": "Elles doivent être antidérapantes" },
        { "id": "c", "texte": "Elles doivent être colorées" },
        { "id": "d", "texte": "Elles doivent être souples" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Chaussures de sécurité : Protection des pieds et des chevilles ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0038",
      "theme": "equipements",
      "enonce": "Les bottines de sécurité sont-elles adaptées pour les longs trajets sur autoroute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, elles sont parfaites" },
        { "id": "b", "texte": "Non, les chaussures de touring sont plus adaptées" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Chaussures de sécurité : Protection des pieds et des chevilles ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0039",
      "theme": "equipements",
      "enonce": "Quels éléments doivent être renforcés dans les chaussures de sécurité pour motards ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les renforts au niveau des orteils, des talons et des chevilles" },
        { "id": "b", "texte": "Seulement les semelles" },
        { "id": "c", "texte": "Le cuir de la chaussure" },
        { "id": "d", "texte": "Les lacets" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Chaussures de sécurité : Protection des pieds et des chevilles ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0040",
      "theme": "equipements",
      "enonce": "Comment pouvez-vous entretenir vos chaussures de sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En les lavant à l'eau" },
        { "id": "b", "texte": "En les passant en machine à laver" },
        { "id": "c", "texte": "En les nettoyant régulièrement et en appliquant des produits imperméabilisants" },
        { "id": "d", "texte": "Il n'est pas nécessaire de les entretenir" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Chaussures de sécurité : Protection des pieds et des chevilles ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0041",
      "theme": "equipements",
      "enonce": "Quel est le principal avantage d'un gilet airbag pour les motards ?",
      "media": "images-doc/img-117-061.jpg",
      "propositions": [
        { "id": "a", "texte": "Il protège contre les intempéries." },
        { "id": "b", "texte": "Il se gonfle automatiquement en cas de chute pour protéger le torse et les organes vitaux." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements facultatifs : Accessoires pour une sécurité accrue ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0042",
      "theme": "equipements",
      "enonce": "Comment les protections dorsales contribuent-elles à la sécurité des motards ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles offrent une meilleure ventilation pour le dos." },
        { "id": "b", "texte": "Elles réduisent les risques de blessures graves à la colonne vertébrale." },
        { "id": "c", "texte": "Elles augmentent le confort de conduite." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements facultatifs : Accessoires pour une sécurité accrue ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0043",
      "theme": "equipements",
      "enonce": "Pourquoi est-il recommandé de porter des genouillères en moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour améliorer l'aérodynamisme." },
        { "id": "b", "texte": "Pour offrir une protection supplémentaire aux genoux en cas de chute." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements facultatifs : Accessoires pour une sécurité accrue ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0044",
      "theme": "equipements",
      "enonce": "Quels sont les avantages des protège-coudes pour les motards ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ils améliorent l'apparence de la tenue." },
        { "id": "b", "texte": "Ils offrent une protection supplémentaire aux coudes en cas de chute." },
        { "id": "c", "texte": "Ils aident à maintenir une posture correcte." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements facultatifs : Accessoires pour une sécurité accrue ».",
      "difficulte": 1
    },
    {
      "id": "EQP-0045",
      "theme": "equipements",
      "enonce": "Quel est l'équipement facultatif qui se gonfle automatiquement en cas de chute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le casque." },
        { "id": "b", "texte": "Le gilet airbag." },
        { "id": "c", "texte": "Les gants homologués." },
        { "id": "d", "texte": "Les bottes." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Équipements facultatifs : Accessoires pour une sécurité accrue ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0001",
      "theme": "environnement",
      "enonce": "Quels éléments naturels peuvent affecter la conduite d'une moto ?",
      "media": "images-doc/img-120-063.jpg",
      "propositions": [
        { "id": "a", "texte": "Conditions météorologiques, topographie, faune" },
        { "id": "b", "texte": "Uniquement les conditions météorologiques" },
        { "id": "c", "texte": "Uniquement la topographie" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Définition de l'environnement : Éléments naturels et socio-économiques ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0002",
      "theme": "environnement",
      "enonce": "Que faut-il surveiller en conduisant dans une zone rurale ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La présence d'animaux sauvages" },
        { "id": "b", "texte": "La densité de la circulation" },
        { "id": "c", "texte": "La signalisation urbaine" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Définition de l'environnement : Éléments naturels et socio-économiques ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0003",
      "theme": "environnement",
      "enonce": "Comment la densité de la circulation influence-t-elle la conduite à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elle requiert plus de vigilance et d'anticipation." },
        { "id": "b", "texte": "Elle rend la conduite plus détendue." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Définition de l'environnement : Éléments naturels et socio-économiques ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0004",
      "theme": "environnement",
      "enonce": "Pourquoi est-il important de connaître la qualité des infrastructures routières ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour ajuster la conduite aux conditions de la route" },
        { "id": "b", "texte": "Parce que cela n'a pas d'importance" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Définition de l'environnement : Éléments naturels et socio-économiques ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0005",
      "theme": "environnement",
      "enonce": "Quel comportement des usagers est crucial pour la sécurité à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Anticiper les mouvements imprévus des autres usagers." },
        { "id": "b", "texte": "Ignorer les autres usagers de la route." },
        { "id": "c", "texte": "Rouler aussi vite que possible pour éviter les obstacles." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Définition de l'environnement : Éléments naturels et socio-économiques ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0006",
      "theme": "environnement",
      "enonce": "Pourquoi est-il important de protéger la biodiversité le long des routes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les glissements de terrain et les inondations" },
        { "id": "b", "texte": "Pour améliorer la qualité de l'air pour les motards" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Protection de la biodiversité : Importance et stratégies ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0007",
      "theme": "environnement",
      "enonce": "Quel est l'avantage des passages pour la faune ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduire les collisions avec les animaux" },
        { "id": "b", "texte": "Accélérer la migration des espèces" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Protection de la biodiversité : Importance et stratégies ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0008",
      "theme": "environnement",
      "enonce": "Qu'est-ce que l'urbanisme neutre en biodiversité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Inciter l'implantation d'infrastructures sans impact sur la biodiversité locale" },
        { "id": "b", "texte": "Planter des arbres le long des routes" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Protection de la biodiversité : Importance et stratégies ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0009",
      "theme": "environnement",
      "enonce": "Quel rôle jouent les panneaux de signalisation concernant la présence de faune ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aider les conducteurs à être plus vigilants et réduire leur vitesse" },
        { "id": "b", "texte": "Indiquer la présence de parcs animaliers" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Protection de la biodiversité : Importance et stratégies ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0010",
      "theme": "environnement",
      "enonce": "Quelle est l'importance de l'évitement des zones écologiquement sensibles lors de la planification des routes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Minimiser l'impact sur la biodiversité et assurer la durabilité des écosystèmes locaux" },
        { "id": "b", "texte": "Créer des routes plus courtes et économiques" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Protection de la biodiversité : Importance et stratégies ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0011",
      "theme": "environnement",
      "enonce": "Quelles sont les principales sources de gaz à effet de serre?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les émissions de CO2 provenant des véhicules." },
        { "id": "b", "texte": "Les émissions de GES dues à l'agriculture." },
        { "id": "c", "texte": "Les émissions provenant des activités industrielles." },
        { "id": "d", "texte": "Les émissions provenant de la production d'énergie renouvelable." }
      ],
      "bonnesReponses": ["a","b","c"],
      "explication": "Bonne(s) réponse(s) : A, B, C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Changement climatique : Causes et impacts ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0012",
      "theme": "environnement",
      "enonce": "Comment la conduite moto peut-elle contribuer au changement climatique?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Par la consommation de carburant fossile produisant du CO2." },
        { "id": "b", "texte": "Par l'usure des pneus." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Changement climatique : Causes et impacts ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0013",
      "theme": "environnement",
      "enonce": "Quel impact direct l'entretien régulier de votre moto peut-il avoir sur l'environnement?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduit les émissions de CO2." },
        { "id": "b", "texte": "Augmente les émissions de CO2." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Changement climatique : Causes et impacts ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0014",
      "theme": "environnement",
      "enonce": "Quel est l'effet de la fonte des glaces et la montée des niveaux de la mer?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Risque accru d'inondations dans les zones côtières." },
        { "id": "b", "texte": "Diminution de l’oxygène dans la mer." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Changement climatique : Causes et impacts ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0015",
      "theme": "environnement",
      "enonce": "Quels comportements permettent de réduire l'impact environnemental de la moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Adopter une conduite souple et anticipative." },
        { "id": "b", "texte": "Éviter les entretiens réguliers de la moto." },
        { "id": "c", "texte": "Utiliser des carburants fossiles traditionnels." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Changement climatique : Causes et impacts ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0016",
      "theme": "environnement",
      "enonce": "Quels sont les principaux polluants émis par les véhicules motorisés?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dioxyde de carbone (CO2), oxydes d'azote (NOx), hydrocarbures non brûlés (HC), et particules fines (PM)" },
        { "id": "b", "texte": "Dioxyde de soufre (SO2), ammoniaque (NH3), arsenic (As), et chlore (Cl)" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Pollution : Types et effets sur la santé et l'écosystème ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0017",
      "theme": "environnement",
      "enonce": "Quels sont les effets des particules fines (PM) sur la santé?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Problèmes respiratoires, maladies cardiovasculaires, et risque accru de cancer du poumon" },
        { "id": "b", "texte": "Somnolence, démangeaisons cutanées, et perte d'appétit" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Pollution : Types et effets sur la santé et l'écosystème ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0018",
      "theme": "environnement",
      "enonce": "Comment la pollution sonore affecte-t-elle la qualité de vie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Troubles du sommeil, stress, anxiété, et problèmes auditifs" },
        { "id": "b", "texte": "Somnolence, diminution de la vue, et augmentation de l'appétit" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Pollution : Types et effets sur la santé et l'écosystème ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0019",
      "theme": "environnement",
      "enonce": "Pourquoi les oxydes d'azote (NOx) sont-ils dangereux pour l'écosystème?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Acidification des sols et des plans d'eau, et responsables des pluies acides" },
        { "id": "b", "texte": "Pollution visuelle et augmentation de la température atmosphérique" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Pollution : Types et effets sur la santé et l'écosystème ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0020",
      "theme": "environnement",
      "enonce": "Comment les conducteurs de moto peuvent-ils réduire leur empreinte écologique?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Entretenir régulièrement leur véhicule, utiliser des huiles et carburants moins polluants, et respecter les limitations de vitesse" },
        { "id": "b", "texte": "Augmenter la vitesse de conduite, utiliser des carburants à haute teneur en octane, et éviter l'entretien régulier" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Pollution : Types et effets sur la santé et l'écosystème ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0021",
      "theme": "environnement",
      "enonce": "Quel est l'objectif principal de la gestion durable des ressources naturelles ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Assurer la disponibilité continue des ressources pour les générations futures." },
        { "id": "b", "texte": "Accélérer l'utilisation des ressources pour maximiser les profits économiques." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Ressources naturelles : Gestion durable et conservation ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0022",
      "theme": "environnement",
      "enonce": "Pourquoi la conservation des ressources naturelles est-elle importante ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour protéger et restaurer les ressources naturelles." },
        { "id": "b", "texte": "Pour augmenter la consommation de carburant." },
        { "id": "c", "texte": "Pour favoriser le développement des infrastructures routières." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Ressources naturelles : Gestion durable et conservation ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0023",
      "theme": "environnement",
      "enonce": "Quelle pratique de conduite aide à réduire la consommation de carburant ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Adopter une conduite souple et éviter les accélérations et freinages brusques." },
        { "id": "b", "texte": "Freiner brusquement pour éviter des obstacles." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Ressources naturelles : Gestion durable et conservation ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0024",
      "theme": "environnement",
      "enonce": "Quel type de carburant est plus respectueux de l'environnement pour les motos ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les biocarburants ou les motos électriques." },
        { "id": "b", "texte": "L'essence plombée." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Ressources naturelles : Gestion durable et conservation ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0025",
      "theme": "environnement",
      "enonce": "Quelle législation en France encourage la gestion durable des ressources dans le secteur des transports ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les Zones à Faibles Émissions (ZFE) et les incitations pour les véhicules électriques." },
        { "id": "b", "texte": "Les subventions pour l'achat de véhicules diesel." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Ressources naturelles : Gestion durable et conservation ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0026",
      "theme": "environnement",
      "enonce": "Quelle est la norme d'émission actuellement en vigueur pour les nouvelles motos en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Euro 4" },
        { "id": "b", "texte": "Euro 5" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réglementations environnementales : Lois et normes en vigueur ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0027",
      "theme": "environnement",
      "enonce": "Quelles sont les émissions de polluants que la norme Euro 5 tente de limiter?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "NOx, HC, CO, particules fines" },
        { "id": "b", "texte": "SO2, O2, H2O, CO2" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réglementations environnementales : Lois et normes en vigueur ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0028",
      "theme": "environnement",
      "enonce": "Que signifie l'acronyme ZFE?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Zone à Faibles Émissions" },
        { "id": "b", "texte": "Zone Fréquentée Électrique" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réglementations environnementales : Lois et normes en vigueur ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0029",
      "theme": "environnement",
      "enonce": "Quels types de véhicules sont principalement ciblés par les restrictions des ZFE?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les véhicules électriques" },
        { "id": "b", "texte": "Les véhicules les plus polluants" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réglementations environnementales : Lois et normes en vigueur ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0030",
      "theme": "environnement",
      "enonce": "Quelle mesure peut être prise pour encourager l'usage de motos moins polluantes?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Augmenter les taxes sur les motos diesel" },
        { "id": "b", "texte": "Offrir des incitations financières et fiscales" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réglementations environnementales : Lois et normes en vigueur ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0031",
      "theme": "environnement",
      "enonce": "Pourquoi est-il important de maintenir régulièrement sa moto en bon état?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les pannes fréquentes" },
        { "id": "b", "texte": "Pour réduire les émissions de polluants" },
        { "id": "c", "texte": "Pour que la moto aille plus vite" },
        { "id": "d", "texte": "Pour économiser sur le carburant" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Participation du public : Rôle dans la protection de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0032",
      "theme": "environnement",
      "enonce": "Lesquels parmi les comportements suivants constituent une conduite éco-responsable?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Éviter les accélérations brusques" },
        { "id": "b", "texte": "Faire des freinages intempestifs" },
        { "id": "c", "texte": "Maintenir une vitesse stable" },
        { "id": "d", "texte": "Ne pas anticiper les conditions de circulation" }
      ],
      "bonnesReponses": ["a","c"],
      "explication": "Bonne(s) réponse(s) : A, C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Participation du public : Rôle dans la protection de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0033",
      "theme": "environnement",
      "enonce": "Quel type de carburant devriez-vous utiliser pour réduire votre empreinte carbone?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Essence ordinaire" },
        { "id": "b", "texte": "Diesel" },
        { "id": "c", "texte": "Biocarburants" },
        { "id": "d", "texte": "Super ethanol" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Participation du public : Rôle dans la protection de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0034",
      "theme": "environnement",
      "enonce": "Pourquoi devriez-vous participer à des programmes de recyclage pour les pièces de moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que c'est gratuit" },
        { "id": "b", "texte": "Pour réduire les déchets et protéger l'environnement" },
        { "id": "c", "texte": "Parce qu'on reçoit de l'argent pour cela" },
        { "id": "d", "texte": "Pour avoir des pièces de rechange gratuites" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Participation du public : Rôle dans la protection de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0035",
      "theme": "environnement",
      "enonce": "Comment pouvez-vous sensibiliser votre entourage à la protection de l'environnement en tant que conducteur de moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En partageant votre connaissance et en participant à des ateliers de sensibilisation" },
        { "id": "b", "texte": "En ne parlant jamais de l'environnement" },
        { "id": "c", "texte": "En modifiant votre moto pour la rendre plus rapide" },
        { "id": "d", "texte": "En nettoyant votre moto tous les jours" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Participation du public : Rôle dans la protection de l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0036",
      "theme": "environnement",
      "enonce": "Quels sont les principaux bénéfices de l'éco-conduite pour un motard?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réduction de la consommation de carburant" },
        { "id": "b", "texte": "Augmentation de la vitesse moyenne de conduite" },
        { "id": "c", "texte": "Réduction de l'usure des pneus" },
        { "id": "d", "texte": "Augmentation de l'émission de CO2" }
      ],
      "bonnesReponses": ["a","c"],
      "explication": "Bonne(s) réponse(s) : A, C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Développement durable : Concepts et mise en œuvre ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0037",
      "theme": "environnement",
      "enonce": "Pourquoi est-il important de vérifier régulièrement la pression des pneus?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour augmenter la vitesse maximale de la moto" },
        { "id": "b", "texte": "Pour réduire la consommation de carburant" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Développement durable : Concepts et mise en œuvre ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0038",
      "theme": "environnement",
      "enonce": "Quel type de moto contribue le plus à la réduction des émissions de CO2?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Moto électrique" },
        { "id": "b", "texte": "Moto à essence" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Développement durable : Concepts et mise en œuvre ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0039",
      "theme": "environnement",
      "enonce": "Comment un motard peut-il assurer la longévité de sa moto?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En négligeant les révisions" },
        { "id": "b", "texte": "En effectuant un entretien régulier" },
        { "id": "c", "texte": "En utilisant uniquement des pièces neuves" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Développement durable : Concepts et mise en œuvre ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0040",
      "theme": "environnement",
      "enonce": "Quelle est l'importance de choisir des itinéraires optimisés pour un motard?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour arriver plus rapidement à destination" },
        { "id": "b", "texte": "Pour profiter des paysages" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Développement durable : Concepts et mise en œuvre ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0041",
      "theme": "environnement",
      "enonce": "Quelle source d'énergie renouvelable utilise la lumière du soleil pour produire de l'électricité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Énergie éolienne" },
        { "id": "b", "texte": "Énergie solaire" },
        { "id": "c", "texte": "Énergie hydraulique" },
        { "id": "d", "texte": "Biomasse" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Énergies renouvelables : Solutions pour un avenir durable ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0042",
      "theme": "environnement",
      "enonce": "Quel est le principal avantage des énergies renouvelables par rapport aux énergies fossiles ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles sont plus coûteuses" },
        { "id": "b", "texte": "Elles sont inépuisables et écologiques" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Énergies renouvelables : Solutions pour un avenir durable ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0043",
      "theme": "environnement",
      "enonce": "Comment les motocyclistes peuvent-ils contribuer à la transition énergétique ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En roulant plus vite" },
        { "id": "b", "texte": "En choisissant une moto électrique et des bornes de recharge d'énergie renouvelable" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Énergies renouvelables : Solutions pour un avenir durable ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0044",
      "theme": "environnement",
      "enonce": "Quelle énergie renouvelable utilise la force du vent pour produire de l'électricité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Énergie solaire" },
        { "id": "b", "texte": "Énergie éolienne" },
        { "id": "c", "texte": "Énergie géothermique" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Énergies renouvelables : Solutions pour un avenir durable ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0045",
      "theme": "environnement",
      "enonce": "Qu'est-ce que la biomasse ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utilisation de l'eau pour produire électricité" },
        { "id": "b", "texte": "Utilisation des matières organiques pour produire énergie" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Énergies renouvelables : Solutions pour un avenir durable ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0046",
      "theme": "environnement",
      "enonce": "Pourquoi est-il important pour un motard de porter des vêtements réfléchissants?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour être à la mode." },
        { "id": "b", "texte": "Pour être plus visible par les autres usagers de la route." },
        { "id": "c", "texte": "Pour se protéger du vent." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Sensibilisation et éducation : Importance de l'information sur l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0047",
      "theme": "environnement",
      "enonce": "Quelle est la distance de sécurité recommandée entre un motard et le véhicule qui le précède?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un mètre." },
        { "id": "b", "texte": "Deux secondes de distance." },
        { "id": "c", "texte": "Dix mètres." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Sensibilisation et éducation : Importance de l'information sur l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0048",
      "theme": "environnement",
      "enonce": "Comment doit réagir un motard lorsqu'il roule par temps de pluie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer pour éviter les flaques d'eau." },
        { "id": "b", "texte": "Réduire sa vitesse et augmenter la vigilance." },
        { "id": "c", "texte": "Rouler au milieu de la route." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Sensibilisation et éducation : Importance de l'information sur l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0049",
      "theme": "environnement",
      "enonce": "Quel comportement doit adopter un motard en approche de passage piéton?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérer pour passer avant les piétons." },
        { "id": "b", "texte": "Ralentir et se préparer à s'arrêter." },
        { "id": "c", "texte": "Klaxonner pour alerter les piétons." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Sensibilisation et éducation : Importance de l'information sur l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "ENV-0050",
      "theme": "environnement",
      "enonce": "Comment un motard doit-il se comporter en milieu urbain par rapport à d'autres usagers de la route?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ignorer les piétons et se concentrer uniquement sur les véhicules." },
        { "id": "b", "texte": "Être attentif aux piétons, véhicules et respecter les feux de signalisation." },
        { "id": "c", "texte": "Rouler à la même vitesse que sur l'autoroute." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Sensibilisation et éducation : Importance de l'information sur l'environnement ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0001",
      "theme": "secours",
      "enonce": "Quel est le premier réflexe à avoir en arrivant sur le lieu d'un accident?",
      "media": "images-doc/img-142-067.jpg",
      "propositions": [
        { "id": "a", "texte": "Analyser l'environnement" },
        { "id": "b", "texte": "Aller directement aux blessés" },
        { "id": "c", "texte": "Appeler immédiatement les secours" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0002",
      "theme": "secours",
      "enonce": "Comment devez-vous sécuriser la zone après avoir analysé l'environnement?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Placer des triangles de signalisation ou utiliser les feux de détresse" },
        { "id": "b", "texte": "Déplacer les blessés en lieu sûr" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0003",
      "theme": "secours",
      "enonce": "Lors de l'évaluation des blessés, quelle est la première vérification à faire?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vérifier l'état de conscience" },
        { "id": "b", "texte": "Vérifier les plaies ouvertes" },
        { "id": "c", "texte": "Vérifier la respiration" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0004",
      "theme": "secours",
      "enonce": "Quelles informations sont essentielles à fournir lors de l'appel aux services d'urgence?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'emplacement, le nombre de blessés, la gravité des blessures" },
        { "id": "b", "texte": "L'emplacement et les détails de votre permis de conduire" },
        { "id": "c", "texte": "Les circonstances de l'accident" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0005",
      "theme": "secours",
      "enonce": "Pourquoi est-il important de ne pas déplacer un blessé gravement accidenté?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela peut aggraver ses blessures" },
        { "id": "b", "texte": "Les blessés doivent être déplacés par les secours uniquement" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0006",
      "theme": "secours",
      "enonce": "Pourquoi est-il important de ne pas retirer le casque d'un motard accidenté sauf en cas de nécessité absolue?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que cela pourrait aggraver les blessures au niveau de la colonne cervicale" },
        { "id": "b", "texte": "Parce que le casque est cher et pourrait être volé" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0007",
      "theme": "secours",
      "enonce": "Quel numéro d'urgence doit-on appeler en France pour signaler un accident grave?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "15" },
        { "id": "b", "texte": "18" },
        { "id": "c", "texte": "112" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0008",
      "theme": "secours",
      "enonce": "Comment doit-on placer une personne inconsciente mais respirant pour assurer sa sécurité en attendant les secours?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Position latérale de sécurité (PLS)" },
        { "id": "b", "texte": "Position couchée sur le dos" },
        { "id": "c", "texte": "Position assise" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0009",
      "theme": "secours",
      "enonce": "Que devez-vous utiliser pour signaler la zone d'un accident aux autres automobilistes?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utiliser les feux de détresse et un triangle de signalisation" },
        { "id": "b", "texte": "Utiliser un sifflet" },
        { "id": "c", "texte": "Utiliser le klaxon de votre véhicule" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Évaluation de la situation : Identifier les dangers et les besoins ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0010",
      "theme": "secours",
      "enonce": "Quel numéro d'urgence devez-vous composer en priorité en Europe en cas d'accident?",
      "media": "images-doc/img-146-071.jpg",
      "propositions": [
        { "id": "a", "texte": "112" },
        { "id": "b", "texte": "911" },
        { "id": "c", "texte": "15" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0011",
      "theme": "secours",
      "enonce": "Quelle est la première étape à suivre avant d'alerter les services d'urgence?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protéger la scène de l'accident" },
        { "id": "b", "texte": "Vérifier l'état des blessés" },
        { "id": "c", "texte": "Alerter les proches des victimes" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0012",
      "theme": "secours",
      "enonce": "Quel type d'information est crucial à transmettre lors de l'appel aux services d'urgence?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La localisation exacte et l'état des blessés" },
        { "id": "b", "texte": "Le numéro de plaque de la moto" },
        { "id": "c", "texte": "Le modèle de votre moto" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0013",
      "theme": "secours",
      "enonce": "Après avoir alerté les services d'urgence, que devez-vous faire si une victime est inconsciente mais respire?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Mettre la victime en Position Latérale de Sécurité" },
        { "id": "b", "texte": "Faire un massage cardiaque" },
        { "id": "c", "texte": "Couvrir la victime avec une couverture" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0014",
      "theme": "secours",
      "enonce": "Quelle est la meilleure pratique pour signaler un accident sur l'autoroute?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Placer des triangles de signalisation et porter un gilet réfléchissant" },
        { "id": "b", "texte": "Klaxonner pour attirer l'attention" },
        { "id": "c", "texte": "Agiter les bras" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0015",
      "theme": "secours",
      "enonce": "Que devez-vous faire en premier lieu en cas d'accident avec des blessés ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rester calme et appeler les services d'urgence." },
        { "id": "b", "texte": "Déplacer immédiatement les blessés sur le côté de la route." },
        { "id": "c", "texte": "Essayer de réparer la moto endommagée." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0016",
      "theme": "secours",
      "enonce": "Quel numéro d'urgence pouvez-vous composer en Europe en cas d'accident ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "112" },
        { "id": "b", "texte": "911" },
        { "id": "c", "texte": "999" },
        { "id": "d", "texte": "15" }
      ],
      "bonnesReponses": ["a","d"],
      "explication": "Bonne(s) réponse(s) : A, D. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0017",
      "theme": "secours",
      "enonce": "Quelles informations sont cruciales à fournir aux opérateurs d'urgence ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Localisation précise, nombre de blessés, description de l'accident." },
        { "id": "b", "texte": "Couleur de la moto, nombre de témoins, place disponible pour les secours." },
        { "id": "c", "texte": "Votre âge, votre profession, et vos antécédents médicaux." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0018",
      "theme": "secours",
      "enonce": "Que devez-vous éviter de faire avant l'arrivée des secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Déplacer les blessés sauf en cas de danger immédiat." },
        { "id": "b", "texte": "Rassurer les victimes." },
        { "id": "c", "texte": "Appeler les services d'urgence." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0019",
      "theme": "secours",
      "enonce": "Quel est le rôle d'un motocycliste en matière de sécurité routière ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Être informé et préparé pour réagir correctement en cas d'urgence." },
        { "id": "b", "texte": "Rouler le plus vite possible pour éviter les accidents." },
        { "id": "c", "texte": "Ignorer les autres usagers de la route et se concentrer uniquement sur sa propre sécurité." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0020",
      "theme": "secours",
      "enonce": "Quel numéro européen doit-on privilégier si l'on n'est pas sûr du service compétent en France et en Europe ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "112" },
        { "id": "b", "texte": "15" },
        { "id": "c", "texte": "18" },
        { "id": "d", "texte": "17" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0021",
      "theme": "secours",
      "enonce": "Parmi ces situations courantes, laquelle nécessite d'alerter les secours immédiatement et constitue un danger grave pour la vie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Personne inconsciente et ne respirant pas" },
        { "id": "b", "texte": "Entorse bénigne sans perte de conscience" },
        { "id": "c", "texte": "Maux de tête passagers sans autres signes" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0022",
      "theme": "secours",
      "enonce": "Quel élément d'information est essentiel à indiquer en premier pour localiser précisément un accident sur autoroute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Numéro ou kilomètre d'autoroute et sens (ex. A6 km 42 sens Paris-Lyon)" },
        { "id": "b", "texte": "Nom du conducteur impliqué" },
        { "id": "c", "texte": "Marque du véhicule concerné" },
        { "id": "d", "texte": "Heure approximative de l'accident" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0023",
      "theme": "secours",
      "enonce": "Dans le script d'alerte 'Qui, Où, Quoi, Combien, État', quel élément correspond à 'Quoi' et que faut-il dire précisément ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La nature de l'incident (collision, malaise, incendie)" },
        { "id": "b", "texte": "Le nombre de victimes présentes" },
        { "id": "c", "texte": "Votre identité et numéro de téléphone" },
        { "id": "d", "texte": "Les coordonnées GPS exactes" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0024",
      "theme": "secours",
      "enonce": "Que devez-vous faire immédiatement après avoir donné les informations demandées par le régulateur d'urgence et reçu des instructions ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rester en ligne et suivre ses instructions" },
        { "id": "b", "texte": "Raccrocher dès que l'ambulance est en route" },
        { "id": "c", "texte": "Aller chercher la victime dans le véhicule sans précautions" },
        { "id": "d", "texte": "Publier la situation sur les réseaux sociaux" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0025",
      "theme": "secours",
      "enonce": "Si vous êtes témoin d'un accident de la route, quelle obligation légale vous concerne selon l'article 223-6 du Code pénal ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Porter secours : alerter et aider sans prendre de risque déraisonnable" },
        { "id": "b", "texte": "Payer immédiatement les réparations des véhicules impliqués" },
        { "id": "c", "texte": "Publier les photos de l'accident en priorité" },
        { "id": "d", "texte": "Ignorer la scène si cela vous dérange" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0026",
      "theme": "secours",
      "enonce": "Quel numéro faut-il utiliser pour alerter les services d'urgence si l'on est sourd ou malentendant, et quel mode de communication ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "114 par SMS/texte ou équivalent pour personnes sourdes et malentendantes" },
        { "id": "b", "texte": "112 uniquement par appel vocal" },
        { "id": "c", "texte": "15 par appel vocal standard" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Appel aux secours : Quand et comment alerter les services d'urgence ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0027",
      "theme": "secours",
      "enonce": "Quels sont les types de bandages les plus couramment utilisés en premiers secours?",
      "media": "images-doc/img-150-072.jpg",
      "propositions": [
        { "id": "a", "texte": "Bandes de gaze, bandes élastiques, pansements adhésifs" },
        { "id": "b", "texte": "Bandes de caoutchouc, pansements liquides, compresses de froid" },
        { "id": "c", "texte": "Bandes de coton, ruban adhésif, cotons-tiges" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0028",
      "theme": "secours",
      "enonce": "Quelle est la première étape à suivre en arrivant sur les lieux d'un accident?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vérifier la sécurité de la scène" },
        { "id": "b", "texte": "Poser immédiatement un bandage" },
        { "id": "c", "texte": "Appeler les services d'urgence avant d'évaluer la dangerosité" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0029",
      "theme": "secours",
      "enonce": "Comment bien nettoyer une plaie avant d'y appliquer un bandage?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Laver avec de l'eau propre ou une solution antiseptique" },
        { "id": "b", "texte": "Appliquer directement un bandage sans nettoyage" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0030",
      "theme": "secours",
      "enonce": "Quel objet peut être utilisé pour improviser une attelle en cas de blessure grave?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un bâton ou un magazine enroulé" },
        { "id": "b", "texte": "Un vêtement ou une écharpe" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0031",
      "theme": "secours",
      "enonce": "Pourquoi l'immobilisation d'une fracture est-elle importante?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour prévenir des dommages supplémentaires et réduire la douleur" },
        { "id": "b", "texte": "Pour rendre le transport des victimes plus confortable" },
        { "id": "c", "texte": "Pour faciliter l'application des bandages" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0032",
      "theme": "secours",
      "enonce": "Pourquoi est-il important de nettoyer une plaie avant d'appliquer un bandage?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter les infections." },
        { "id": "b", "texte": "Parce que c'est la première étape du processus." },
        { "id": "c", "texte": "Pour éviter que le bandage ne glisse." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0033",
      "theme": "secours",
      "enonce": "Quel type de bandage est idéal pour immobiliser un bras?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Bandage triangulaire." },
        { "id": "b", "texte": "Bandage rouleau." },
        { "id": "c", "texte": "Bandage adhésif." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0034",
      "theme": "secours",
      "enonce": "Que devez-vous faire si vous suspectez une fracture?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utiliser des attelles pour immobiliser." },
        { "id": "b", "texte": "Tenter de remettre l'os en place." },
        { "id": "c", "texte": "Appliquer un simple bandage." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0035",
      "theme": "secours",
      "enonce": "Comment fixer correctement un bandage pour éviter de couper la circulation?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Enrouler fermement mais sans serrer excessivement." },
        { "id": "b", "texte": "Enrouler aussi serré que possible." },
        { "id": "c", "texte": "Laisser le bandage très lâche." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0036",
      "theme": "secours",
      "enonce": "Quel est le premier objectif des premiers secours en cas de saignement abondant?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Arrêter le saignement." },
        { "id": "b", "texte": "Nettoyer la plaie." },
        { "id": "c", "texte": "Appeler les secours." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prise en charge des blessures : Bandages et immobilisation ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0037",
      "theme": "secours",
      "enonce": "Quelle est la première chose à faire avant de commencer la RCP?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Commencer immédiatement les compressions thoraciques" },
        { "id": "b", "texte": "Vérifier que la scène est sécurisée" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réanimation cardio-pulmonaire (RCP) : Techniques et protocoles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0038",
      "theme": "secours",
      "enonce": "Quel est le bon placement des mains pour effectuer les compressions thoraciques?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sur le côté de la poitrine" },
        { "id": "b", "texte": "Au centre de la poitrine, entre les mamelons" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réanimation cardio-pulmonaire (RCP) : Techniques et protocoles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0039",
      "theme": "secours",
      "enonce": "À quelle profondeur les compressions thoraciques doivent-elles être effectuées ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Moins de 2 cm" },
        { "id": "b", "texte": "Au moins 5 cm" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réanimation cardio-pulmonaire (RCP) : Techniques et protocoles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0040",
      "theme": "secours",
      "enonce": "Combien de compressions et d'insufflations sont recommandées dans un cycle de RCP ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "15 compressions et 1 insufflation" },
        { "id": "b", "texte": "30 compressions et 2 insufflations" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réanimation cardio-pulmonaire (RCP) : Techniques et protocoles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0041",
      "theme": "secours",
      "enonce": "Quelle est la fréquence recommandée pour les compressions thoraciques ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "50 à 70 compressions par minute" },
        { "id": "b", "texte": "100 à 120 compressions par minute" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Réanimation cardio-pulmonaire (RCP) : Techniques et protocoles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0042",
      "theme": "secours",
      "enonce": "Quels sont les premiers symptômes d'un état de choc?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une peau pâle, froide et moite" },
        { "id": "b", "texte": "Un taux de glycémie élevé" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gestion des chocs : Reconnaître et traiter les états de choc ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0043",
      "theme": "secours",
      "enonce": "Quelle est la première chose à faire si une personne est en état de choc?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Lui donner de l'eau" },
        { "id": "b", "texte": "Appeler les secours" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gestion des chocs : Reconnaître et traiter les états de choc ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0044",
      "theme": "secours",
      "enonce": "Pourquoi ne faut-il pas donner à boire ou à manger à une personne en état de choc?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela pourrait aggraver la situation" },
        { "id": "b", "texte": "Ils pourraient être déshydratés" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gestion des chocs : Reconnaître et traiter les états de choc ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0045",
      "theme": "secours",
      "enonce": "Quelle position doit adopter une personne en état de choc?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Allongée sur le dos avec les jambes surélevées" },
        { "id": "b", "texte": "Assise avec les jambes étendues" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gestion des chocs : Reconnaître et traiter les états de choc ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0046",
      "theme": "secours",
      "enonce": "Quelle est l'importance de rester près de la personne en état de choc jusqu'à l'arrivée des secours?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour la rassurer et diminuer son stress" },
        { "id": "b", "texte": "Pour lui donner à boire en cas de déshydratation" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Gestion des chocs : Reconnaître et traiter les états de choc ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0047",
      "theme": "secours",
      "enonce": "Quelle est la première étape à suivre en cas d'accident de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sécuriser la zone" },
        { "id": "b", "texte": "S'informer sur l'état de la moto" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0048",
      "theme": "secours",
      "enonce": "Pourquoi ne faut-il pas déplacer une victime d'accident de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter d'aggraver les blessures dorsales ou cervicales" },
        { "id": "b", "texte": "Pour ne pas salir la route avec du sang" },
        { "id": "c", "texte": "Parce que les secours préfèrent arriver les premiers" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0049",
      "theme": "secours",
      "enonce": "Quel numéro de téléphone ne peut PAS être utilisé pour appeler les secours en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "15" },
        { "id": "b", "texte": "17" },
        { "id": "c", "texte": "911" },
        { "id": "d", "texte": "112" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0050",
      "theme": "secours",
      "enonce": "Que devez-vous faire si la victime ne respire pas ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Commencer une réanimation cardiorespiratoire" },
        { "id": "b", "texte": "Attendre les secours et ne rien faire" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0051",
      "theme": "secours",
      "enonce": "Quelle information n'est pas nécessaire pour les secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'emplacement de l'accident" },
        { "id": "b", "texte": "Le nombre de blessés" },
        { "id": "c", "texte": "Le numéro de série de la moto" },
        { "id": "d", "texte": "Le groupe sanguin de la victime" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0052",
      "theme": "secours",
      "enonce": "Quel est le premier geste à effectuer en arrivant sur le lieu d'un accident de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réaliser les premiers soins sur la victime" },
        { "id": "b", "texte": "Sécuriser la zone de l'accident" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0053",
      "theme": "secours",
      "enonce": "Dans quel cas peut-on retirer le casque d'un motard accidenté ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Toujours retirer le casque" },
        { "id": "b", "texte": "Seulement si la victime ne respire plus" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0054",
      "theme": "secours",
      "enonce": "Quelle position devez-vous placer une victime inconsciente mais respirant normalement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Position assise" },
        { "id": "b", "texte": "Position latérale de sécurité" },
        { "id": "c", "texte": "Position debout" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0055",
      "theme": "secours",
      "enonce": "Quel numéro devez-vous composer pour les services d'urgence en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "911" },
        { "id": "b", "texte": "112" },
        { "id": "c", "texte": "999" },
        { "id": "d", "texte": "111" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0056",
      "theme": "secours",
      "enonce": "Que faire si la victime saigne abondamment ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Attendre l'arrivée des secours sans rien faire" },
        { "id": "b", "texte": "Appliquer une pression sur la plaie avec un tissu propre" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Premiers secours en cas d'accident de moto : Spécificités et précautions ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0057",
      "theme": "secours",
      "enonce": "Qu'est-ce qu'un défibrillateur ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un appareil qui mesure la pression artérielle" },
        { "id": "b", "texte": "Un appareil qui délivre un choc électrique pour traiter des anomalies cardiaques" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0058",
      "theme": "secours",
      "enonce": "Quelle est la première étape de l'utilisation d'un défibrillateur ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Placer les électrodes" },
        { "id": "b", "texte": "Allumer le défibrillateur" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0059",
      "theme": "secours",
      "enonce": "Que fait le défibrillateur après que les électrodes sont placées ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il administre immédiatement un choc" },
        { "id": "b", "texte": "Il analyse le rythme cardiaque" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0060",
      "theme": "secours",
      "enonce": "Pourquoi est-il important d'utiliser un défibrillateur rapidement en cas d'arrêt cardiaque ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que chaque minute compte pour la survie de la victime" },
        { "id": "b", "texte": "Parce que cela améliore le confort de la victime" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0061",
      "theme": "secours",
      "enonce": "Est-il obligatoire d'avoir des défibrillateurs accessibles dans les lieux publics en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, dans certains lieux publics" },
        { "id": "b", "texte": "Non, ce n'est pas obligatoire" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0062",
      "theme": "secours",
      "enonce": "Quel est le premier geste à réaliser en utilisant un défibrillateur automatisé externe (DAE) ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Placer les électrodes sur la poitrine de la victime." },
        { "id": "b", "texte": "Ouvrir le défibrillateur et l'allumer." },
        { "id": "c", "texte": "Appuyer sur le bouton d'analyse du rythme cardiaque." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0063",
      "theme": "secours",
      "enonce": "Où doit-on placer les électrodes du défibrillateur sur la victime ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sur les bras de la victime." },
        { "id": "b", "texte": "Sous la clavicule droite et sous l'aisselle gauche." },
        { "id": "c", "texte": "Sur les jambes de la victime." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0064",
      "theme": "secours",
      "enonce": "Que doit faire l'utilisateur lorsque le défibrillateur signale qu'un choc est nécessaire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Retirer les électrodes." },
        { "id": "b", "texte": "Appuyer sur le bouton de choc." },
        { "id": "c", "texte": "Effectuer un massage cardiaque." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0065",
      "theme": "secours",
      "enonce": "Pourquoi est-il crucial d'utiliser rapidement un défibrillateur en cas d'arrêt cardiaque ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'aucune autre intervention n'est utile." },
        { "id": "b", "texte": "Parce que chaque minute sans défibrillation réduit les chances de survie de 10 %." },
        { "id": "c", "texte": "Parce que le défibrillateur est obligatoire." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0066",
      "theme": "secours",
      "enonce": "Que fera le défibrillateur après avoir administré un choc à la victime ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il s'éteindra automatiquement." },
        { "id": "b", "texte": "Il analysera de nouveau le rythme cardiaque." },
        { "id": "c", "texte": "Il demandera de placer les électrodes à nouveau." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Utilisation du défibrillateur : Fonctionnement et importance ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0067",
      "theme": "secours",
      "enonce": "Quelle est la première chose à faire avant de traiter une plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Se laver les mains" },
        { "id": "b", "texte": "Appliquer un pansement" },
        { "id": "c", "texte": "Rincer la plaie" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0068",
      "theme": "secours",
      "enonce": "Quel est le bon type de produit à utiliser pour nettoyer la plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Eau claire ou saline" },
        { "id": "b", "texte": "Alcool" },
        { "id": "c", "texte": "Vinaigre" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0069",
      "theme": "secours",
      "enonce": "Après avoir nettoyé la plaie, que faut-il appliquer pour prévenir les infections?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Antiseptique" },
        { "id": "b", "texte": "Crème hydratante" },
        { "id": "c", "texte": "Désinfectant pour les mains" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0070",
      "theme": "secours",
      "enonce": "À quelle fréquence est-il recommandé de changer le pansement?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Régulièrement, surtout si humide ou sale" },
        { "id": "b", "texte": "Une fois par semaine" },
        { "id": "c", "texte": "Jamais, jusqu'à guérison" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0071",
      "theme": "secours",
      "enonce": "Quels sont les signes indiquant que la plaie pourrait être infectée?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Douleur, rougeur, écoulement de pus" },
        { "id": "b", "texte": "Légère rougeur sans autres symptômes" },
        { "id": "c", "texte": "Aucun symptôme visible" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0072",
      "theme": "secours",
      "enonce": "Quel est le premier geste à effectuer lorsqu'on soigne une plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Appliquer un pansement" },
        { "id": "b", "texte": "Nettoyer la plaie avec de l'eau et du savon" },
        { "id": "c", "texte": "Utiliser de l'alcool pour désinfecter" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0073",
      "theme": "secours",
      "enonce": "Pourquoi est-il déconseillé d'utiliser de l'alcool pour nettoyer une plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que l'alcool ne tue pas les bactéries" },
        { "id": "b", "texte": "Parce que l'alcool peut endommager le tissu blessé" },
        { "id": "c", "texte": "Parce que l'alcool n'est pas stérile" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0074",
      "theme": "secours",
      "enonce": "Quel est le rôle d'un antiseptique après le nettoyage initial de la plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aider à fermer la plaie rapidement" },
        { "id": "b", "texte": "Empêcher le saignement" },
        { "id": "c", "texte": "Prévenir l'infection" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0075",
      "theme": "secours",
      "enonce": "Comment peut-on protéger une plaie après l'avoir nettoyée et désinfectée?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Laisser la plaie à l'air libre" },
        { "id": "b", "texte": "Appliquer un pansement propre et stérile" },
        { "id": "c", "texte": "Envelopper la plaie avec du papier" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0076",
      "theme": "secours",
      "enonce": "Que devez-vous faire si vous remarquez des signes d'infection dans une plaie?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Changer le pansement plus souvent" },
        { "id": "b", "texte": "Continuer à appliquer un antiseptique uniquement" },
        { "id": "c", "texte": "Consulter un professionnel de santé immédiatement" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Prévention des infections : Soins des plaies et hygiène ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0077",
      "theme": "secours",
      "enonce": "Quel est le numéro d'urgence unique à appeler en France pour obtenir une assistance médicale en cas d'accident de la route ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "112" },
        { "id": "b", "texte": "911" },
        { "id": "c", "texte": "18" },
        { "id": "d", "texte": "15" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0078",
      "theme": "secours",
      "enonce": "Quelle est la première étape à effectuer lorsque vous arrivez sur les lieux d'un accident ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Garantir votre sécurité" },
        { "id": "b", "texte": "Évaluer l'état des victimes" },
        { "id": "c", "texte": "Appeler les secours" },
        { "id": "d", "texte": "Administrer les premiers secours" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0079",
      "theme": "secours",
      "enonce": "Quel geste de premier secours doit être réalisé pour une personne inconsciente qui respire encore ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Position latérale de sécurité (PLS)" },
        { "id": "b", "texte": "Réanimation cardio-pulmonaire (RCP)" },
        { "id": "c", "texte": "Compression thoracique" },
        { "id": "d", "texte": "Massage cardiaque" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0080",
      "theme": "secours",
      "enonce": "Quels sont les gestes à effectuer en cas d'arrêt cardiorespiratoire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Réanimation cardio-pulmonaire (RCP)" },
        { "id": "b", "texte": "Position latérale de sécurité (PLS)" },
        { "id": "c", "texte": "Appliquer une pression sur la plaie" },
        { "id": "d", "texte": "Maintenir la victime immobile" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0081",
      "theme": "secours",
      "enonce": "Quelle organisation en France propose des formations en premiers secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Croix-Rouge française" },
        { "id": "b", "texte": "Organisation mondiale de la santé (OMS)" },
        { "id": "c", "texte": "Fédération française de football" },
        { "id": "d", "texte": "Ministère de l'Intérieur" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0082",
      "theme": "secours",
      "enonce": "Pourquoi est-il important pour un motocycliste de connaître les premiers secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour pouvoir aider en cas d'accident grave." },
        { "id": "b", "texte": "Pour éviter les amendes." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0083",
      "theme": "secours",
      "enonce": "Quel numéro devez-vous appeler pour prévenir les secours en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "112" },
        { "id": "b", "texte": "911" },
        { "id": "c", "texte": "101" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0084",
      "theme": "secours",
      "enonce": "Quelle étape est à effectuer en premier lorsque vous arrivez sur les lieux d'un accident ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protéger" },
        { "id": "b", "texte": "Alerter" },
        { "id": "c", "texte": "Secourir" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0085",
      "theme": "secours",
      "enonce": "Quels gestes de secours sont essentiels pour une formation de premiers secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Arrêter une hémorragie" },
        { "id": "b", "texte": "Savoir conduire vite" },
        { "id": "c", "texte": "Savoir installer un triangle de signalisation" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "SEC-0086",
      "theme": "secours",
      "enonce": "Quelle organisation offre des formations certifiées aux premiers secours en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La Croix-Rouge française" },
        { "id": "b", "texte": "La Protection Civile" },
        { "id": "c", "texte": "Les Sapeurs-Pompiers de France" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Formation aux premiers secours : Ressources et cours disponibles ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0051",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée sur autoroute en France pour une moto par temps sec?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "130 km/h" },
        { "id": "b", "texte": "120 km/h" },
        { "id": "c", "texte": "110 km/h" },
        { "id": "d", "texte": "100 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les types de routes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0052",
      "theme": "route",
      "enonce": "Quel type de route est indiqué par la lettre 'D' en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Routes nationales" },
        { "id": "b", "texte": "Routes départementales" },
        { "id": "c", "texte": "Routes communales" },
        { "id": "d", "texte": "Autoroutes" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les types de routes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0053",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée sur route nationale sans séparation centrale?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "90 km/h" },
        { "id": "b", "texte": "80 km/h" },
        { "id": "c", "texte": "70 km/h" },
        { "id": "d", "texte": "60 km/h" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les types de routes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0054",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée sur une route communale en agglomération?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "50 km/h" },
        { "id": "b", "texte": "60 km/h" },
        { "id": "c", "texte": "70 km/h" },
        { "id": "d", "texte": "80 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les types de routes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0055",
      "theme": "route",
      "enonce": "Quelle est la principale fonction des routes nationales?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Relier les grandes villes" },
        { "id": "b", "texte": "Relier les autoroutes" },
        { "id": "c", "texte": "Desservir les localités régionales" },
        { "id": "d", "texte": "Relier les zones rurales" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les types de routes ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0056",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée pour une moto sur autoroute par temps sec en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "110 km/h" },
        { "id": "b", "texte": "130 km/h" },
        { "id": "c", "texte": "120 km/h" },
        { "id": "d", "texte": "140 km/h" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0057",
      "theme": "route",
      "enonce": "Combien de secondes devraient s'écouler entre vous et le véhicule devant vous pour maintenir une bonne distance de sécurité sur autoroute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1 seconde" },
        { "id": "b", "texte": "2 secondes" },
        { "id": "c", "texte": "3 secondes" },
        { "id": "d", "texte": "4 secondes" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0058",
      "theme": "route",
      "enonce": "Que devez-vous faire avant de dépasser un autre véhicule sur l'autoroute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Accélérez brusquement sans signalisation." },
        { "id": "b", "texte": "Signalez votre intention et vérifiez les angles morts avant de dépasser." },
        { "id": "c", "texte": "Serrez à droite en dépassant." },
        { "id": "d", "texte": "Restreignez uniquement à vérifier vos rétroviseurs." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0059",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée pour une moto sur autoroute en cas de pluie en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "110 km/h" },
        { "id": "b", "texte": "90 km/h" },
        { "id": "c", "texte": "100 km/h" },
        { "id": "d", "texte": "130 km/h" }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0060",
      "theme": "route",
      "enonce": "Que devez-vous faire en approchant des zones de travaux sur l'autoroute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ignorer les panneaux de signalisation temporaires." },
        { "id": "b", "texte": "Accélérer pour dépasser la zone rapidement." },
        { "id": "c", "texte": "Ralentir et suivre la signalisation et les consignes des agents." },
        { "id": "d", "texte": "Maintenir votre vitesse et ignorer les consignes." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0061",
      "theme": "route",
      "enonce": "Quelle est la vitesse maximale autorisée pour une moto sur l'autoroute par temps sec en France?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "120 km/h" },
        { "id": "b", "texte": "130 km/h" },
        { "id": "c", "texte": "140 km/h" },
        { "id": "d", "texte": "150 km/h" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0062",
      "theme": "route",
      "enonce": "Quelles motos sont autorisées à circuler sur l'autoroute?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Toutes les motos" },
        { "id": "b", "texte": "Les motos ayant une cylindrée supérieure à 125 cm³" },
        { "id": "c", "texte": "Les scooters" },
        { "id": "d", "texte": "Les vélos à assistance électrique" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0063",
      "theme": "route",
      "enonce": "Quelle est la bonne manière de changer de voie sur l'autoroute?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sans signaler sa direction" },
        { "id": "b", "texte": "En utilisant uniquement les rétroviseurs" },
        { "id": "c", "texte": "En utilisant les rétroviseurs, les clignotants et en vérifiant les angles morts" },
        { "id": "d", "texte": "Seulement si personne ne semble être à proximité" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0064",
      "theme": "route",
      "enonce": "Que devez-vous faire si vous ressentez de la fatigue en conduisant sur l'autoroute?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Continuer à rouler jusqu'à votre destination" },
        { "id": "b", "texte": "Augmenter votre vitesse pour arriver plus vite" },
        { "id": "c", "texte": "Faire des pauses régulières, environ toutes les deux heures" },
        { "id": "d", "texte": "Rouler sur la bande d'arrêt d'urgence" }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0065",
      "theme": "route",
      "enonce": "Quel équipement est recommandé pour conduire une moto sur l'autoroute?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Bare minimum protection" },
        { "id": "b", "texte": "Un casque, une veste renforcée, des gants et des bottes" },
        { "id": "c", "texte": "Vêtements légers pour confort" },
        { "id": "d", "texte": "Aucun équipement particulier" }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « L'autoroute ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0066",
      "theme": "route",
      "enonce": "Pourquoi les intersections sont-elles particulièrement dangereuses pour les motocyclistes ?",
      "media": "images-doc/img-181-090.jpg",
      "propositions": [
        { "id": "a", "texte": "Parce qu'il y a plus de voies de circulation." },
        { "id": "b", "texte": "Parce que la visibilité est toujours claire." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les zones de danger ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0067",
      "theme": "route",
      "enonce": "Quels types de zones nécessitent une vigilance accrue en raison de la présence de piétons ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les passages piétons." },
        { "id": "b", "texte": "Les autoroutes." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les zones de danger ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0068",
      "theme": "route",
      "enonce": "Pourquoi les ronds-points peuvent-ils être périlleux pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce qu'il y a des entrées et des sorties multiples." },
        { "id": "b", "texte": "Parce qu'ils sont toujours en ligne droite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les zones de danger ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0069",
      "theme": "route",
      "enonce": "Quels sont les risques associés aux zones de travaux pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des obstacles, des détours et des surfaces irrégulières." },
        { "id": "b", "texte": "Des panneaux routiers clairs et directs." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les zones de danger ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0070",
      "theme": "route",
      "enonce": "Pourquoi les routes rurales peuvent-elles présenter des dangers pour les motocyclistes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En raison des animaux, des véhicules agricoles et des virages sans visibilité." },
        { "id": "b", "texte": "En raison de la faible densité de trafic." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Les zones de danger ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0071",
      "theme": "route",
      "enonce": "Pourquoi est-il important de vérifier l'éclairage de votre moto avant de conduire de nuit?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour éviter une amende." },
        { "id": "b", "texte": "Pour s'assurer d'une bonne visibilité." },
        { "id": "c", "texte": "Pour économiser de l'énergie." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire de nuit ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0072",
      "theme": "route",
      "enonce": "Quelle est la meilleure façon de rester alerte pendant un long trajet de nuit?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Boire du café régulièrement." },
        { "id": "b", "texte": "Rester concentré seulement sur la route." },
        { "id": "c", "texte": "Accélérer pour arriver plus vite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire de nuit ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0073",
      "theme": "route",
      "enonce": "Comment devez-vous ajuster votre vitesse lorsque vous conduisez de nuit?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Rouler plus vite pour arriver plus rapidement." },
        { "id": "b", "texte": "Maintenir la même vitesse que celle de jour." },
        { "id": "c", "texte": "Rouler plus lentement pour avoir le temps de réagir aux dangers." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Bonne(s) réponse(s) : C. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire de nuit ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0074",
      "theme": "route",
      "enonce": "Quel comportement adopter face aux véhicules venant en sens inverse?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Garder les pleins phares pour mieux voir." },
        { "id": "b", "texte": "Passer en feux de croisement pour éviter d'éblouir." },
        { "id": "c", "texte": "Klaxonner pour signaler votre approche." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire de nuit ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0075",
      "theme": "route",
      "enonce": "Quelle mesure de sécurité supplémentaire est recommandée pour conduire de nuit?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Porter des lunettes de soleil." },
        { "id": "b", "texte": "Porter des vêtements réfléchissants." },
        { "id": "c", "texte": "Rouler sans casque pour mieux entendre." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Bonne(s) réponse(s) : B. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire de nuit ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0076",
      "theme": "route",
      "enonce": "Quelle est la première chose à faire en cas de pluie pour conduire sécuritairement une moto ?",
      "media": "images-doc/img-186-096.jpg",
      "propositions": [
        { "id": "a", "texte": "Réduire votre vitesse." },
        { "id": "b", "texte": "Augmenter votre vitesse." },
        { "id": "c", "texte": "Rouler au centre de la route." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire selon le climat ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0077",
      "theme": "route",
      "enonce": "Quels équipements sont recommandés par temps de brouillard ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Feux antibrouillard et vêtements réfléchissants." },
        { "id": "b", "texte": "Lunettes de soleil et casque intégral." },
        { "id": "c", "texte": "Utiliser uniquement le klaxon." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire selon le climat ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0078",
      "theme": "route",
      "enonce": "Quelle précaution est essentielle par temps froid et neigeux ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utiliser des pneus hiver et réduire la vitesse." },
        { "id": "b", "texte": "Accélérer pour éviter de glisser." },
        { "id": "c", "texte": "Ne pas changer de direction du tout." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire selon le climat ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0079",
      "theme": "route",
      "enonce": "Comment prévenir les coups de chaleur en conduisant par temps chaud ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "S'hydrater régulièrement." },
        { "id": "b", "texte": "Porter des vêtements noirs." },
        { "id": "c", "texte": "Accélérer pour limiter le temps d'exposition." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire selon le climat ».",
      "difficulte": 1
    },
    {
      "id": "RTE-0080",
      "theme": "route",
      "enonce": "Pourquoi est-il important d'augmenter les distances de sécurité sous la pluie ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Parce que la distance de freinage augmente." },
        { "id": "b", "texte": "Pour profiter de la vue." },
        { "id": "c", "texte": "Pour rouler plus vite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Bonne(s) réponse(s) : A. Source : ebook « ETM 2026 » (TestPermis.fr), section « Conduire selon le climat ».",
      "difficulte": 1
    }
  ]
};
