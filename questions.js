/* =====================================================================
   BANQUE DE QUESTIONS — Simulateur ETM 2026 (questions ORIGINALES)
   ---------------------------------------------------------------------
   Ce fichier contient UNIQUEMENT des données (aucune logique).
   Il est volontairement nommé .js (et non .json) pour pouvoir être lu
   quand on ouvre index.html d'un simple double-clic, sans serveur.
   Le contenu entre les accolades est, lui, du JSON tout à fait classique.

   COMMENT AJOUTER UNE QUESTION (voir aussi README.txt) :
   - Copie un bloc { ... } existant dans le tableau "questions".
   - Donne-lui un "id" UNIQUE (préfixe du thème + numéro, ex: "MEC-0099").
   - Mets entre 2 et 4 propositions, avec TOUJOURS au moins une bonne
     ET au moins une mauvaise réponse.
   - "bonnesReponses" liste les "id" des bonnes propositions (a, b, c, d).
   - N'oublie pas la virgule entre deux questions (mais pas après la dernière).
   ===================================================================== */

window.ETM_BANK = {
  "meta": {
    "version": "2026.5",
    "total": 162,
    "note": "162 questions originales, tous thèmes. Format examen 2023 (indication Une/Plusieurs réponses). 19 questions de signalisation illustrées par des panneaux dessinés en SVG (dossier images/). Lots récents : signalisation illustrée + volume mécanique/équipements/secours. Montée en volume à poursuivre."
  },

  "themes": {
    "signalisation": { "label": "Signalisation et règles de circulation", "prefixe": "SIG" },
    "conducteur":    { "label": "Le conducteur (perception, alcool, fatigue)", "prefixe": "CND" },
    "route":         { "label": "La route et les risques de conduite", "prefixe": "RTE" },
    "usagers":       { "label": "Les autres usagers", "prefixe": "USG" },
    "mecanique":     { "label": "Mécanique et vérifications du deux-roues", "prefixe": "MEC" },
    "equipements":   { "label": "Équipements de protection", "prefixe": "EQP" },
    "documents":     { "label": "Documents et infractions", "prefixe": "DOC" },
    "secours":       { "label": "Premiers secours", "prefixe": "SEC" },
    "environnement": { "label": "Environnement et éco-conduite", "prefixe": "ENV" }
  },

  "questions": [

    /* ---------- SIGNALISATION ET RÈGLES DE CIRCULATION (8) ---------- */
    {
      "id": "SIG-0001",
      "theme": "signalisation",
      "enonce": "Vous arrivez à une intersection équipée d'un panneau STOP. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Marquer un arrêt complet à la limite de la chaussée, même si la voie semble libre." },
        { "id": "b", "texte": "Ralentir fortement et passer sans vous arrêter si rien ne vient." },
        { "id": "c", "texte": "Céder le passage à tous les véhicules circulant sur la route abordée." },
        { "id": "d", "texte": "Ne repartir qu'une fois assuré que la voie est dégagée." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "Le STOP impose un arrêt absolu à la limite de la chaussée (A), puis de céder le passage à tous (C) et de ne repartir qu'une fois la voie libre (D). Ralentir sans s'arrêter (B) est une infraction, même voie libre.",
      "difficulte": 1
    },
    {
      "id": "SIG-0002",
      "theme": "signalisation",
      "enonce": "Une ligne blanche continue est tracée au milieu de la chaussée. Que vous est-il interdit ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La franchir ou la chevaucher." },
        { "id": "b", "texte": "Dépasser un véhicule lent en la franchissant." },
        { "id": "c", "texte": "Vous en approcher." },
        { "id": "d", "texte": "Circuler à sa droite." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Une ligne continue ne doit être ni franchie ni chevauchée (A), ce qui interdit le dépassement qui l'impliquerait (B). S'en approcher (C) ou rouler à sa droite (D) reste autorisé.",
      "difficulte": 1
    },
    {
      "id": "SIG-0003",
      "theme": "signalisation",
      "enonce": "Un panneau de forme triangulaire à fond blanc et bordure rouge signifie généralement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une obligation à respecter." },
        { "id": "b", "texte": "Un danger à anticiper." },
        { "id": "c", "texte": "Une interdiction." },
        { "id": "d", "texte": "Une simple indication touristique." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le triangle à bordure rouge annonce un danger (B). L'obligation est ronde à fond bleu, l'interdiction ronde à bordure rouge, et l'indication est de forme rectangulaire.",
      "difficulte": 1
    },
    {
      "id": "SIG-0004",
      "theme": "signalisation",
      "enonce": "À une intersection dépourvue de toute signalisation et de tout marquage, qui est prioritaire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le véhicule venant de votre droite." },
        { "id": "b", "texte": "Le véhicule le plus rapide." },
        { "id": "c", "texte": "Vous, parce que vous conduisez une moto." },
        { "id": "d", "texte": "Le véhicule venant de votre gauche." }
      ],
      "bonnesReponses": ["a"],
      "explication": "En l'absence de signalisation, la priorité à droite s'applique (A). Ni la vitesse, ni le type de véhicule, ni le fait de venir de gauche ne donnent la priorité.",
      "difficulte": 1
    },
    {
      "id": "SIG-0005",
      "theme": "signalisation",
      "enonce": "Un feu tricolore fonctionne en jaune clignotant. Quelle attitude adopter ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vous arrêter comme à un feu rouge." },
        { "id": "b", "texte": "Ralentir et appliquer la règle de priorité du carrefour." },
        { "id": "c", "texte": "Passer en priorité absolue sur les autres." },
        { "id": "d", "texte": "Redoubler de prudence." }
      ],
      "bonnesReponses": ["b", "d"],
      "explication": "Le jaune clignotant signale un carrefour où l'on doit ralentir, rester prudent (D) et appliquer la priorité en vigueur, souvent la priorité à droite (B). Il n'impose pas l'arrêt (A) et ne donne aucune priorité (C).",
      "difficulte": 2
    },
    {
      "id": "SIG-0006",
      "theme": "signalisation",
      "enonce": "Sauf indication contraire, quelle est la vitesse maximale autorisée en agglomération ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "30 km/h." },
        { "id": "b", "texte": "50 km/h." },
        { "id": "c", "texte": "70 km/h." },
        { "id": "d", "texte": "90 km/h." }
      ],
      "bonnesReponses": ["b"],
      "explication": "En agglomération, la limite par défaut est de 50 km/h (B). Le 30 km/h ne s'applique que là où il est signalé (zones 30, abords d'écoles, etc.).",
      "difficulte": 1
    },
    {
      "id": "SIG-0007",
      "theme": "signalisation",
      "enonce": "Vous faites face à un panneau rond, à fond rouge, barré d'une barre blanche horizontale. Que signifie-t-il ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sens interdit à tout véhicule." },
        { "id": "b", "texte": "Stationnement interdit." },
        { "id": "c", "texte": "Accès autorisé uniquement aux motos." },
        { "id": "d", "texte": "Vous ne devez pas vous y engager." }
      ],
      "bonnesReponses": ["a", "d"],
      "explication": "Ce panneau (disque rouge à barre blanche) interdit le sens à tout véhicule (A) : vous ne devez donc pas vous y engager (D). Il ne concerne ni le stationnement (B) ni une dérogation moto (C).",
      "difficulte": 1
    },
    {
      "id": "SIG-0008",
      "theme": "signalisation",
      "enonce": "Sur route, quel intervalle de temps minimal devez-vous conserver avec le véhicule qui vous précède ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1 seconde." },
        { "id": "b", "texte": "2 secondes." },
        { "id": "c", "texte": "5 secondes." },
        { "id": "d", "texte": "Aucune règle précise n'existe." }
      ],
      "bonnesReponses": ["b"],
      "explication": "La règle des 2 secondes (B) correspond à l'intervalle de sécurité minimal sur route sèche ; on l'augmente par pluie ou visibilité réduite. Une seconde (A) est nettement insuffisante.",
      "difficulte": 2
    },

    /* ---------- LE CONDUCTEUR (7) ---------- */
    {
      "id": "CND-0001",
      "theme": "conducteur",
      "enonce": "Pour un conducteur titulaire d'un permis confirmé (hors période probatoire), quel est le taux maximal d'alcool autorisé dans le sang ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,2 g/L." },
        { "id": "b", "texte": "0,5 g/L." },
        { "id": "c", "texte": "0,8 g/L." },
        { "id": "d", "texte": "Aucun, la tolérance est nulle." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le seuil est de 0,5 g/L de sang (soit 0,25 mg/L d'air expiré) pour un permis confirmé (B). Les 0,2 g/L (A) concernent les conducteurs en permis probatoire.",
      "difficulte": 1
    },
    {
      "id": "CND-0002",
      "theme": "conducteur",
      "enonce": "Vous êtes en période probatoire (jeune permis). Quelle règle d'alcoolémie s'applique à vous ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "0,5 g/L de sang, comme tout le monde." },
        { "id": "b", "texte": "0,2 g/L de sang." },
        { "id": "c", "texte": "Aucune limite particulière." },
        { "id": "d", "texte": "Une tolérance quasi nulle : un seul verre peut suffire à dépasser le seuil." }
      ],
      "bonnesReponses": ["b", "d"],
      "explication": "En permis probatoire, le seuil est abaissé à 0,2 g/L (B), ce qui équivaut en pratique à une tolérance quasi nulle (D). Le seuil de 0,5 g/L (A) ne s'applique pas aux novices.",
      "difficulte": 2
    },
    {
      "id": "CND-0003",
      "theme": "conducteur",
      "enonce": "Lors d'un long trajet, à quelle fréquence est-il recommandé de faire une pause ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Environ toutes les 2 heures." },
        { "id": "b", "texte": "Uniquement lorsqu'on se sent épuisé." },
        { "id": "c", "texte": "Toutes les 30 minutes." },
        { "id": "d", "texte": "Jamais, l'important est d'arriver vite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "On recommande une pause d'au moins 15 minutes toutes les 2 heures (A). Attendre l'épuisement (B) est dangereux : la somnolence s'installe avant qu'on en prenne conscience.",
      "difficulte": 1
    },
    {
      "id": "CND-0004",
      "theme": "conducteur",
      "enonce": "Quels signes doivent vous alerter sur une baisse de vigilance au guidon ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Bâillements répétés et paupières lourdes." },
        { "id": "b", "texte": "Difficulté à maintenir une trajectoire stable." },
        { "id": "c", "texte": "Une concentration parfaite et reposée." },
        { "id": "d", "texte": "Picotements des yeux et raideur de la nuque." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Bâillements (A), trajectoire flottante (B), yeux qui piquent et nuque raide (D) sont des signaux de fatigue imposant l'arrêt. Une bonne concentration (C) n'est évidemment pas un signe d'alerte.",
      "difficulte": 2
    },
    {
      "id": "CND-0005",
      "theme": "conducteur",
      "enonce": "Une boîte de médicament porte un pictogramme triangulaire rouge de niveau 3. Que signifie-t-il pour la conduite ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Conduite possible sans aucun risque." },
        { "id": "b", "texte": "Danger : ne pas conduire." },
        { "id": "c", "texte": "Simple invitation à demander l'avis d'un professionnel de santé." },
        { "id": "d", "texte": "Pictogramme réservé aux automobilistes." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le pictogramme rouge de niveau 3 indique une contre-indication forte : ne pas conduire (B). C'est le niveau 2 (orange) qui invite à demander un avis médical (C).",
      "difficulte": 2
    },
    {
      "id": "CND-0006",
      "theme": "conducteur",
      "enonce": "Quel est l'effet d'une vitesse élevée sur la perception visuelle du conducteur ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le champ de vision latéral se rétrécit (effet tunnel)." },
        { "id": "b", "texte": "La perception des détails sur les côtés diminue." },
        { "id": "c", "texte": "Le champ de vision s'élargit." },
        { "id": "d", "texte": "La vision reste strictement identique à toute vitesse." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Plus la vitesse augmente, plus le champ visuel se rétrécit (A) et moins on perçoit les détails latéraux (B). La vision ne s'améliore pas et ne reste pas identique avec la vitesse.",
      "difficulte": 2
    },
    {
      "id": "CND-0007",
      "theme": "conducteur",
      "enonce": "Au guidon, l'usage d'un téléphone tenu en main :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Est autorisé à l'arrêt, moteur tournant, devant un feu rouge." },
        { "id": "b", "texte": "Est interdit et sanctionné." },
        { "id": "c", "texte": "Détourne l'attention et augmente le risque d'accident." },
        { "id": "d", "texte": "Devient sans danger si l'on utilise une oreillette." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "Tenir son téléphone en main en conduisant est interdit et verbalisé (B) et constitue une distraction majeure (C). À l'arrêt au feu, moteur tournant, on est encore en circulation (A faux), et les oreillettes/écouteurs sont eux aussi interdits (D faux).",
      "difficulte": 2
    },

    /* ---------- LA ROUTE ET LES RISQUES DE CONDUITE (7) ---------- */
    {
      "id": "RTE-0001",
      "theme": "route",
      "enonce": "À l'approche d'un virage à droite sans visibilité, comment adopter une trajectoire de sécurité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Vous placer près de l'axe médian dès l'entrée pour gagner du temps." },
        { "id": "b", "texte": "Ralentir avant le virage et vous placer à l'extérieur pour voir plus loin." },
        { "id": "c", "texte": "Retarder votre point de corde afin d'élargir votre champ de vision." },
        { "id": "d", "texte": "Porter le regard loin, vers la sortie du virage." }
      ],
      "bonnesReponses": ["b", "c", "d"],
      "explication": "La trajectoire de sécurité consiste à freiner avant le virage, rester à l'extérieur en entrée pour voir loin (B), retarder le point de corde (C) et regarder vers la sortie (D). Se coller à l'axe en entrée (A) réduit la visibilité et expose aux véhicules arrivant en face.",
      "difficulte": 3
    },
    {
      "id": "RTE-0002",
      "theme": "route",
      "enonce": "Quelles surfaces réduisent fortement l'adhérence des pneus de votre moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les bandes de peinture et passages piétons mouillés." },
        { "id": "b", "texte": "Les plaques d'égout métalliques." },
        { "id": "c", "texte": "Un asphalte sec et propre." },
        { "id": "d", "texte": "Les gravillons et les feuilles mortes." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Peintures mouillées (A), plaques métalliques (B), gravillons et feuilles (D) sont glissants et particulièrement traîtres à moto. À l'inverse, un asphalte sec et propre (C) offre une bonne adhérence.",
      "difficulte": 2
    },
    {
      "id": "RTE-0003",
      "theme": "route",
      "enonce": "Pour freiner efficacement à moto sur route sèche, vous devez :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Utiliser uniquement le frein arrière." },
        { "id": "b", "texte": "Combiner frein avant et frein arrière." },
        { "id": "c", "texte": "Doser progressivement pour éviter le blocage de roue." },
        { "id": "d", "texte": "Bloquer brutalement la roue avant." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "Un freinage efficace combine les deux freins (B), l'avant fournissant l'essentiel de la puissance, avec un dosage progressif pour éviter le blocage (C). Le frein arrière seul (A) est insuffisant et bloquer la roue avant (D) provoque la chute.",
      "difficulte": 2
    },
    {
      "id": "RTE-0004",
      "theme": "route",
      "enonce": "La distance d'arrêt totale d'un véhicule se compose :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "De la distance parcourue pendant le temps de réaction." },
        { "id": "b", "texte": "De la distance de freinage proprement dite." },
        { "id": "c", "texte": "Uniquement de la distance de freinage." },
        { "id": "d", "texte": "Elle augmente fortement avec la vitesse." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "La distance d'arrêt = distance de réaction (A) + distance de freinage (B), et elle croît très fortement avec la vitesse (D). Elle ne se limite donc pas au seul freinage (C).",
      "difficulte": 2
    },
    {
      "id": "RTE-0005",
      "theme": "route",
      "enonce": "Par temps de pluie, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'adhérence diminue, surtout dès les premières gouttes." },
        { "id": "b", "texte": "Les distances de freinage s'allongent." },
        { "id": "c", "texte": "Il faut augmenter l'intervalle de sécurité." },
        { "id": "d", "texte": "On peut conserver la même vitesse que sur le sec." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "La pluie réduit l'adhérence, surtout aux premières gouttes qui font remonter les hydrocarbures (A), allonge le freinage (B) et impose un intervalle de sécurité accru (C). Conserver sa vitesse du sec (D) est dangereux.",
      "difficulte": 2
    },
    {
      "id": "RTE-0006",
      "theme": "route",
      "enonce": "À moto, où porter le regard pour stabiliser sa trajectoire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Sur la roue avant." },
        { "id": "b", "texte": "Loin devant, là où l'on veut aller." },
        { "id": "c", "texte": "Sur le bord de la route immédiat." },
        { "id": "d", "texte": "Le regard guide la trajectoire : on va là où l'on regarde." }
      ],
      "bonnesReponses": ["b", "d"],
      "explication": "À moto, on va là où l'on regarde : il faut porter le regard loin, vers la sortie (B), car le regard guide la trajectoire (D). Fixer la roue (A) ou le bas-côté immédiat (C) déséquilibre et réduit l'anticipation.",
      "difficulte": 2
    },
    {
      "id": "RTE-0007",
      "theme": "route",
      "enonce": "Vous abordez une large flaque d'eau sur la chaussée à allure soutenue. Quels risques principaux ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une perte d'adhérence soudaine (aquaplaning)." },
        { "id": "b", "texte": "Un déséquilibre si la flaque masque un trou ou un nid-de-poule." },
        { "id": "c", "texte": "Aucun risque particulier." },
        { "id": "d", "texte": "Des projections d'eau réduisant votre visibilité." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Une flaque peut provoquer une perte d'adhérence (A), masquer un nid-de-poule déstabilisant (B) et projeter de l'eau gênant la vue (D). Le risque est donc bien réel (C faux) : on ralentit avant de l'aborder.",
      "difficulte": 2
    },

    /* ---------- LES AUTRES USAGERS (7) ---------- */
    {
      "id": "USG-0001",
      "theme": "usagers",
      "enonce": "Un poids lourd s'apprête à tourner à droite. Où ne devez-vous surtout pas vous trouver à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À sa droite, entre le camion et le trottoir." },
        { "id": "b", "texte": "Largement en retrait derrière lui." },
        { "id": "c", "texte": "Dans son angle mort." },
        { "id": "d", "texte": "Bien visible dans ses rétroviseurs." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Un camion qui tourne à droite déporte et balaie l'espace à sa droite : s'y glisser (A), surtout dans son angle mort (C), peut être mortel. Rester loin derrière (B) ou visible dans ses miroirs (D) est au contraire sûr.",
      "difficulte": 2
    },
    {
      "id": "USG-0002",
      "theme": "usagers",
      "enonce": "Comment améliorer votre visibilité (conspicuité) en tant que motard ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Allumer vos feux de croisement de jour." },
        { "id": "b", "texte": "Porter des équipements clairs ou rétroréfléchissants." },
        { "id": "c", "texte": "Vous positionner dans les angles morts des autres véhicules." },
        { "id": "d", "texte": "Adapter votre position pour être vu aux intersections." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Feux de croisement allumés le jour (A, obligatoire à moto), équipements visibles (B) et positionnement pour être vu (D) renforcent la conspicuité. Se placer dans un angle mort (C) fait exactement l'inverse.",
      "difficulte": 2
    },
    {
      "id": "USG-0003",
      "theme": "usagers",
      "enonce": "Parmi ces usagers, lesquels sont considérés comme vulnérables ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les piétons." },
        { "id": "b", "texte": "Les cyclistes." },
        { "id": "c", "texte": "Les automobilistes dans une berline." },
        { "id": "d", "texte": "Les autres motards et cyclomotoristes." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Piétons (A), cyclistes (B) et deux-roues motorisés (D) sont vulnérables car peu protégés en cas de choc. L'automobiliste (C) est protégé par l'habitacle, la ceinture et les airbags.",
      "difficulte": 1
    },
    {
      "id": "USG-0004",
      "theme": "usagers",
      "enonce": "Un enfant joue au bord de la chaussée sur votre trajet. Quelle attitude adopter ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ralentir et être prêt à freiner." },
        { "id": "b", "texte": "Klaxonner fort et maintenir votre allure." },
        { "id": "c", "texte": "Anticiper un déboulé imprévisible sur la route." },
        { "id": "d", "texte": "L'ignorer puisqu'il est encore sur le trottoir." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Un enfant est imprévisible : on ralentit en se tenant prêt à freiner (A) et on anticipe un possible déboulé (C). Klaxonner sans ralentir (B) ou l'ignorer (D) ne supprime pas le danger.",
      "difficulte": 2
    },
    {
      "id": "USG-0005",
      "theme": "usagers",
      "enonce": "Vous dépassez un cycliste hors agglomération. Quel écart latéral devez-vous respecter ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1 mètre suffit hors agglomération." },
        { "id": "b", "texte": "Au moins 1,50 mètre." },
        { "id": "c", "texte": "Aucun écart n'est imposé." },
        { "id": "d", "texte": "Si la place manque pour respecter cet écart, il faut patienter." }
      ],
      "bonnesReponses": ["b", "d"],
      "explication": "Hors agglomération, l'écart latéral minimal pour dépasser un cycliste est de 1,50 m (1 m en ville) (B) ; à moindre distance le dépassement est interdit, mieux vaut patienter (D). 1 m hors agglo (A) est insuffisant, et l'écart est bien réglementé (C faux).",
      "difficulte": 2
    },
    {
      "id": "USG-0006",
      "theme": "usagers",
      "enonce": "En agglomération, un bus signale au clignotant son intention de quitter son arrêt. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Lui laisser la priorité pour se réinsérer." },
        { "id": "b", "texte": "Accélérer pour passer avant lui." },
        { "id": "c", "texte": "Ralentir et anticiper sa manœuvre." },
        { "id": "d", "texte": "Considérer qu'il n'a aucune priorité." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "En agglomération, on doit laisser la priorité au bus qui signale son départ de l'arrêt (A) ; on ralentit pour anticiper (C). Accélérer pour le couper (B) est dangereux, et lui refuser la priorité (D) est une erreur.",
      "difficulte": 2
    },
    {
      "id": "USG-0007",
      "theme": "usagers",
      "enonce": "Vous longez une file de voitures en stationnement. Quels dangers anticiper en priorité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'ouverture soudaine d'une portière." },
        { "id": "b", "texte": "Un piéton surgissant entre deux véhicules." },
        { "id": "c", "texte": "Aucun danger, les voitures sont à l'arrêt." },
        { "id": "d", "texte": "L'intérêt de conserver une marge latérale avec les véhicules garés." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Le long de voitures garées, on anticipe l'ouverture d'une portière (A) et le piéton masqué qui traverse (B), d'où l'intérêt d'une marge latérale (D). Croire qu'il n'y a aucun risque (C) est une erreur classique.",
      "difficulte": 2
    },

    /* ---------- MÉCANIQUE ET VÉRIFICATIONS (9 — point faible renforcé) ---------- */
    {
      "id": "MEC-0001",
      "theme": "mecanique",
      "enonce": "Quand faut-il contrôler la pression de vos pneus ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À froid, la moto étant à l'arrêt depuis un moment." },
        { "id": "b", "texte": "Juste après un long trajet à vive allure." },
        { "id": "c", "texte": "Peu importe, la pression à chaud est plus fiable." },
        { "id": "d", "texte": "Une pression correcte assure tenue de route et usure régulière." }
      ],
      "bonnesReponses": ["a", "d"],
      "explication": "La pression se vérifie à froid (A) car la chaleur la fait monter et fausse la mesure (B et C faux). Une bonne pression garantit adhérence, stabilité et usure homogène (D).",
      "difficulte": 2
    },
    {
      "id": "MEC-0002",
      "theme": "mecanique",
      "enonce": "Concernant l'usure d'un pneu de moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les témoins d'usure (TWI) indiquent la limite à ne pas dépasser." },
        { "id": "b", "texte": "Un pneu lisse est dangereux, surtout sur sol mouillé." },
        { "id": "c", "texte": "Un pneu usé conserve la même adhérence qu'un pneu neuf." },
        { "id": "d", "texte": "Au-delà de la limite, le pneu doit être remplacé." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Les témoins d'usure (TWI) signalent la limite à ne pas franchir (A) ; au-delà, le pneu doit être remplacé (D). Un pneu lisse perd son adhérence, surtout sous la pluie (B). L'usure dégrade donc bien l'adhérence (C faux).",
      "difficulte": 2
    },
    {
      "id": "MEC-0003",
      "theme": "mecanique",
      "enonce": "Avant de partir, vous vérifiez votre chaîne de transmission. Quels signes doivent vous alerter ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des maillons rigides ou rouillés." },
        { "id": "b", "texte": "Une chaîne propre et correctement lubrifiée." },
        { "id": "c", "texte": "Une tension excessive, sans aucun débattement." },
        { "id": "d", "texte": "Un léger jeu vertical conforme à la notice." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Une chaîne saine est propre, lubrifiée et garde un léger débattement (B et D décrivent un bon état). Des maillons rigides ou rouillés (A) ou une chaîne trop tendue (C) sont au contraire des signes d'alerte : usure ou réglage dangereux.",
      "difficulte": 2
    },
    {
      "id": "MEC-0004",
      "theme": "mecanique",
      "enonce": "Quels niveaux devez-vous contrôler régulièrement sur votre moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le niveau d'huile moteur." },
        { "id": "b", "texte": "Le liquide de frein." },
        { "id": "c", "texte": "Le liquide de refroidissement (moto à refroidissement liquide)." },
        { "id": "d", "texte": "Le niveau du réservoir d'air des pneus." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "On surveille l'huile moteur (A), le liquide de frein (B) et, sur une moto à refroidissement liquide, le liquide de refroidissement (C). Le réservoir d'air des pneus (D) n'existe pas : on contrôle la pression, pas un réservoir.",
      "difficulte": 1
    },
    {
      "id": "MEC-0005",
      "theme": "mecanique",
      "enonce": "Avant de rouler de nuit, quels éléments d'éclairage devez-vous vérifier ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le feu de position et les feux de croisement/route." },
        { "id": "b", "texte": "Le feu stop et les clignotants." },
        { "id": "c", "texte": "L'éclairage de la plaque d'immatriculation." },
        { "id": "d", "texte": "Rien, un éclairage tombe rarement en panne." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "On vérifie les feux avant (A), le feu stop et les clignotants (B) et l'éclairage de plaque (C). Compter sur l'absence de panne (D) est imprudent : une ampoule grillée vous rend invisible et est sanctionnable.",
      "difficulte": 1
    },
    {
      "id": "MEC-0006",
      "theme": "mecanique",
      "enonce": "Concernant le système de freinage de votre moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un levier spongieux ou à la garde excessive doit vous alerter." },
        { "id": "b", "texte": "Des plaquettes usées allongent la distance de freinage." },
        { "id": "c", "texte": "Le niveau de liquide de frein peut être ignoré." },
        { "id": "d", "texte": "Un bruit de frottement métallique peut signaler des plaquettes en fin de vie." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Un levier spongieux (A), des plaquettes usées (B) et un frottement métallique (D) trahissent un freinage dégradé. Le liquide de frein ne doit jamais être négligé (C faux) : un niveau bas révèle usure ou fuite.",
      "difficulte": 2
    },
    {
      "id": "MEC-0007",
      "theme": "mecanique",
      "enonce": "Lors de la vérification des commandes, que contrôlez-vous ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le bon retour de la poignée d'accélérateur en position." },
        { "id": "b", "texte": "La garde et la souplesse de la commande d'embrayage." },
        { "id": "c", "texte": "La couleur de votre casque." },
        { "id": "d", "texte": "L'absence de jeu anormal à la direction." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "On vérifie le retour de la poignée d'accélérateur (A), la commande d'embrayage (B) et l'absence de jeu à la direction (D). La couleur du casque (C) n'a aucun rapport avec l'état mécanique.",
      "difficulte": 1
    },
    {
      "id": "MEC-0008",
      "theme": "mecanique",
      "enonce": "À propos des pneumatiques de votre deux-roues :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ils doivent correspondre aux dimensions et indices prescrits pour le modèle." },
        { "id": "b", "texte": "On peut monter n'importe quel pneu de n'importe quelle dimension." },
        { "id": "c", "texte": "Un pneu trop usé ou trop ancien doit être remplacé." },
        { "id": "d", "texte": "Le sens de rotation indiqué sur le flanc doit être respecté." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "Les pneus doivent respecter les dimensions et indices prescrits (A), être remplacés s'ils sont usés ou trop vieux (C) et montés dans le bon sens de rotation (D). Monter n'importe quelle dimension (B) compromet sécurité et conformité.",
      "difficulte": 2
    },
    {
      "id": "MEC-0009",
      "theme": "mecanique",
      "enonce": "Le contrôle « avant de partir » d'un motard responsable comprend :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Les pneus, les freins et l'éclairage." },
        { "id": "b", "texte": "Les niveaux et les commandes." },
        { "id": "c", "texte": "Uniquement le niveau de carburant." },
        { "id": "d", "texte": "L'état de la chaîne ou de la transmission." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Un contrôle complet couvre pneus/freins/éclairage (A), niveaux et commandes (B) et la transmission (D). Se limiter au carburant (C) laisse passer l'essentiel des défauts de sécurité.",
      "difficulte": 1
    },

    /* ---------- MÉCANIQUE — LOT D'ESSAI (20 questions, réparties comme à l'examen : réponse unique majoritaire ; 2 à 4 propositions) ---------- */
    {
      "id": "MEC-0010",
      "theme": "mecanique",
      "enonce": "Depuis le 15 avril 2024, le contrôle technique des deux-roues motorisés :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Est obligatoire et se renouvelle tous les 3 ans." },
        { "id": "b", "texte": "Ne concerne que les motos de plus de 125 cm³." },
        { "id": "c", "texte": "Concerne aussi les cyclomoteurs de 50 cm³." },
        { "id": "d", "texte": "Doit être valide, sous peine d'amende." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "Le contrôle technique est obligatoire depuis le 15 avril 2024, tous les 3 ans (A), pour toutes les cylindrées y compris les 50 cm³ (C), et rouler sans contrôle valide est sanctionné (D, 135 €). Il ne se limite pas aux grosses cylindrées (B).",
      "difficulte": 2
    },
    {
      "id": "MEC-0011",
      "theme": "mecanique",
      "enonce": "Quelle est la profondeur minimale légale des sculptures d'un pneu de moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "1 mm." },
        { "id": "b", "texte": "1,6 mm." },
        { "id": "c", "texte": "4 mm." },
        { "id": "d", "texte": "Il n'existe pas de limite légale." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Pour une moto, la limite légale est de 1 mm (A). Les 1,6 mm (B) concernent la voiture ; 4 mm (C) est une recommandation de sécurité, pas la limite légale ; et une limite légale existe bien (D faux).",
      "difficulte": 2
    },
    {
      "id": "MEC-0012",
      "theme": "mecanique",
      "enonce": "En général, à quelle fréquence remplace-t-on le liquide de frein ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Jamais, il dure indéfiniment." },
        { "id": "b", "texte": "À chaque changement de pneus." },
        { "id": "c", "texte": "Environ tous les 2 ans." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Le liquide de frein absorbe l'humidité avec le temps, ce qui réduit l'efficacité du freinage : on le remplace en moyenne tous les 2 ans (C). Il ne dure pas indéfiniment (A) et son remplacement n'est pas lié aux pneus (B).",
      "difficulte": 2
    },
    {
      "id": "MEC-0013",
      "theme": "mecanique",
      "enonce": "Quand faut-il vérifier la pression des pneus ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À chaud, juste après un long trajet." },
        { "id": "b", "texte": "À froid, avant de rouler." },
        { "id": "c", "texte": "Le moment n'a aucune importance." }
      ],
      "bonnesReponses": ["b"],
      "explication": "On contrôle la pression à froid (B) : en roulant, l'air chauffe et la valeur augmente, ce qui fausse la mesure (A). La pression conditionne la tenue de route et l'usure, donc le moment compte (C).",
      "difficulte": 2
    },
    {
      "id": "MEC-0014",
      "theme": "mecanique",
      "enonce": "Pour freiner efficacement à moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "On utilise conjointement le frein avant et le frein arrière." },
        { "id": "b", "texte": "On n'utilise que le frein arrière pour ne pas chuter." },
        { "id": "c", "texte": "Le frein avant fournit l'essentiel de la puissance de freinage." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Un freinage efficace combine les deux freins (A) ; avec le transfert de charge vers l'avant, le frein avant fournit la plus grande part de la décélération (C). Se limiter au frein arrière (B) allonge fortement la distance d'arrêt.",
      "difficulte": 2
    },
    {
      "id": "MEC-0015",
      "theme": "mecanique",
      "enonce": "Rouler avec un pneu lisse, sous la limite légale d'usure :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "N'a aucune importance si l'on roule lentement." },
        { "id": "b", "texte": "Expose à une amende et à l'immobilisation du véhicule." },
        { "id": "c", "texte": "Réduit fortement l'adhérence, surtout sur sol mouillé." },
        { "id": "d", "texte": "Améliore l'adhérence sur route sèche." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "Un pneu lisse expose à une sanction et à l'immobilisation (B) et perd son adhérence, surtout sur le mouillé où il n'évacue plus l'eau (C). Rouler lentement ne supprime ni le danger ni l'infraction (A), et un pneu usé n'améliore pas l'adhérence (D).",
      "difficulte": 1
    },
    {
      "id": "MEC-0016",
      "theme": "mecanique",
      "enonce": "Moteur tournant, le voyant rouge de pression d'huile reste allumé. Vous devez :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Continuer, ce voyant est seulement indicatif." },
        { "id": "b", "texte": "Couper le moteur et vérifier avant de rouler." },
        { "id": "c", "texte": "Accélérer pour faire monter la pression." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Ce voyant signale un défaut de lubrification : on coupe le moteur et on vérifie (niveau d'huile, fuite) avant tout déplacement (B). L'ignorer (A) ou accélérer (C) peut détruire le moteur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0017",
      "theme": "mecanique",
      "enonce": "Le niveau de liquide de refroidissement se vérifie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Moteur froid." },
        { "id": "b", "texte": "Moteur très chaud, en ouvrant le circuit." },
        { "id": "c", "texte": "Uniquement par un professionnel." }
      ],
      "bonnesReponses": ["a"],
      "explication": "On vérifie moteur froid (A). Ouvrir le circuit sous pression à chaud peut projeter du liquide brûlant (B). C'est un contrôle simple, réalisable soi-même (C).",
      "difficulte": 2
    },
    {
      "id": "MEC-0018",
      "theme": "mecanique",
      "enonce": "De jour, sur la route, votre moto doit circuler :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Feux de croisement allumés." },
        { "id": "b", "texte": "Feux éteints si la visibilité est bonne." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Les deux-roues motorisés doivent rouler de jour avec les feux de croisement allumés (A), pour être mieux vus des autres usagers. Rouler feux éteints le jour (B) est interdit et sanctionné.",
      "difficulte": 1
    },
    {
      "id": "MEC-0019",
      "theme": "mecanique",
      "enonce": "Un pneu sur-gonflé (pression trop élevée) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "S'use surtout en son centre." },
        { "id": "b", "texte": "S'use surtout sur les bords." },
        { "id": "c", "texte": "Améliore l'adhérence." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Trop gonflé, le pneu bombe et porte surtout au centre : l'usure y est plus rapide (A). L'usure sur les bords (B) est plutôt le signe d'un sous-gonflage. Moins de gomme au sol réduit l'adhérence, ne l'améliore pas (C).",
      "difficulte": 2
    },
    {
      "id": "MEC-0020",
      "theme": "mecanique",
      "enonce": "Concernant les rétroviseurs obligatoires sur une moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aucun n'est obligatoire." },
        { "id": "b", "texte": "Quatre rétroviseurs sont exigés." },
        { "id": "c", "texte": "Au moins un, à gauche, est obligatoire." }
      ],
      "bonnesReponses": ["c"],
      "explication": "La réglementation impose au minimum un rétroviseur, à gauche (C) ; les motos récentes en ont deux. En avoir zéro (A) est interdit, et quatre (B) n'est pas exigé. Les rétros se complètent par le contrôle de l'angle mort.",
      "difficulte": 1
    },
    {
      "id": "MEC-0021",
      "theme": "mecanique",
      "enonce": "Sur la plupart des motos modernes, la béquille latérale :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Est reliée à un coupe-circuit (le moteur se coupe ou ne démarre pas si elle est baissée, une vitesse engagée)." },
        { "id": "b", "texte": "Peut rester baissée en roulant sans aucun risque." },
        { "id": "c", "texte": "Doit toujours être relevée avant de partir." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "Un contacteur de béquille coupe le moteur ou empêche le démarrage si la béquille est baissée avec une vitesse engagée (A) ; on la relève donc toujours avant de partir (C). La laisser baissée en roulant (B) est dangereux, surtout en virage à gauche.",
      "difficulte": 2
    },
    {
      "id": "MEC-0022",
      "theme": "mecanique",
      "enonce": "L'avertisseur sonore (klaxon) d'une moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Est facultatif." },
        { "id": "b", "texte": "Est obligatoire, homologué et en état de marche." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le klaxon est un équipement obligatoire, homologué et fonctionnel (B) ; il n'est pas facultatif (A). Son usage est réservé à l'avertissement d'un danger.",
      "difficulte": 1
    },
    {
      "id": "MEC-0023",
      "theme": "mecanique",
      "enonce": "Le système ABS d'une moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Permet de freiner deux fois plus court sur le verglas en toutes circonstances." },
        { "id": "b", "texte": "Empêche le blocage des roues lors d'un freinage appuyé." },
        { "id": "c", "texte": "Aide à conserver le contrôle de la trajectoire en freinage d'urgence." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "L'ABS empêche les roues de se bloquer (B) et aide à conserver la maîtrise de la direction en freinage d'urgence (C). Il n'annule pas les lois physiques : pas de distance « deux fois plus courte » sur surface très glissante (A).",
      "difficulte": 2
    },
    {
      "id": "MEC-0024",
      "theme": "mecanique",
      "enonce": "À quelle fréquence une moto de tourisme passe-t-elle le contrôle technique ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tous les ans." },
        { "id": "b", "texte": "Tous les 5 ans." },
        { "id": "c", "texte": "Tous les 3 ans." }
      ],
      "bonnesReponses": ["c"],
      "explication": "La périodicité du contrôle technique moto est de 3 ans (C). Le contrôle annuel (A) n'existe pas pour ces véhicules, et les 5 ans (B) sont réservés aux véhicules de collection.",
      "difficulte": 1
    },
    {
      "id": "MEC-0025",
      "theme": "mecanique",
      "enonce": "Pour l'entretien de la chaîne de transmission, il faut surtout :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Ne jamais y toucher entre deux révisions." },
        { "id": "b", "texte": "La maintenir bien tendue et la graisser régulièrement." },
        { "id": "c", "texte": "La graisser une seule fois, à l'achat de la moto." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Une chaîne se règle à la bonne tension et se graisse régulièrement, par exemple après la pluie ou un lavage (B). La négliger (A) ou ne la graisser qu'une fois (C) use prématurément le kit chaîne et devient dangereux.",
      "difficulte": 1
    },
    {
      "id": "MEC-0026",
      "theme": "mecanique",
      "enonce": "Les plaquettes de frein d'une moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Durent toute la vie de la moto." },
        { "id": "b", "texte": "S'usent avec l'usage et se contrôlent régulièrement." },
        { "id": "c", "texte": "Se remplacent quand la garniture devient trop fine." },
        { "id": "d", "texte": "Ne concernent pas la sécurité." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "Les plaquettes sont des pièces d'usure : on les contrôle régulièrement (B) et on les remplace quand la garniture est trop fine (C). Elles ne durent pas toute la vie de la moto (A) et sont essentielles à la sécurité (D faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0027",
      "theme": "mecanique",
      "enonce": "Parmi les niveaux à surveiller sur une moto, on trouve :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "L'huile moteur." },
        { "id": "b", "texte": "Le liquide de frein." },
        { "id": "c", "texte": "Le niveau de l'autoradio." },
        { "id": "d", "texte": "Le liquide de refroidissement, si la moto en est équipée." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Les niveaux essentiels sont l'huile moteur (A), le liquide de frein (B) et, sur les motos à refroidissement liquide, le liquide de refroidissement (D). « Le niveau de l'autoradio » (C) n'a aucun sens mécanique.",
      "difficulte": 1
    },
    {
      "id": "MEC-0028",
      "theme": "mecanique",
      "enonce": "Sur le flanc d'un pneu, le sigle « TWI » (ou un petit triangle) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Aide à repérer les témoins d'usure." },
        { "id": "b", "texte": "Indique la pression de gonflage maximale." },
        { "id": "c", "texte": "Donne la date exacte de fabrication." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le marquage TWI (Tread Wear Indicator), ou un triangle, pointe vers les témoins d'usure logés dans les rainures (A) : quand la gomme arrive à leur niveau, le pneu est à la limite. La pression (B) et la date de fabrication (C) sont d'autres marquages.",
      "difficulte": 2
    },
    {
      "id": "MEC-0029",
      "theme": "mecanique",
      "enonce": "La transmission finale d'une moto (du moteur vers la roue arrière) peut se faire par :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Câble d'embrayage." },
        { "id": "b", "texte": "Chaîne." },
        { "id": "c", "texte": "Courroie." },
        { "id": "d", "texte": "Cardan (arbre de transmission)." }
      ],
      "bonnesReponses": ["b", "c", "d"],
      "explication": "La transmission finale se fait par chaîne (B), par courroie (C) ou par cardan (D) selon les modèles. Le câble d'embrayage (A) commande l'embrayage : il ne transmet pas la puissance à la roue.",
      "difficulte": 2
    },

    /* ---------- ÉQUIPEMENTS DE PROTECTION (8 — point faible renforcé) ---------- */
    {
      "id": "EQP-0001",
      "theme": "equipements",
      "enonce": "Concernant le casque à moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il est obligatoire et doit être homologué." },
        { "id": "b", "texte": "Il doit être correctement attaché." },
        { "id": "c", "texte": "Simplement posé sans être attaché, il protège suffisamment." },
        { "id": "d", "texte": "Après un choc important, il doit être remplacé." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Le casque homologué est obligatoire (A), doit être attaché (B) et remplacé après un choc important (D) car sa structure interne est altérée. Non attaché (C), il peut s'éjecter lors d'une chute.",
      "difficulte": 1
    },
    {
      "id": "EQP-0002",
      "theme": "equipements",
      "enonce": "Le port de gants à moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Est obligatoire pour le conducteur et le passager." },
        { "id": "b", "texte": "Impose des gants certifiés CE." },
        { "id": "c", "texte": "Est seulement conseillé, jamais obligatoire." },
        { "id": "d", "texte": "Protège les mains, premières exposées en cas de chute." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Des gants certifiés CE sont obligatoires pour le pilote et le passager (A, B) ; ils protègent les mains, premières exposées en cas de chute (D). Ce n'est donc pas une simple recommandation (C faux).",
      "difficulte": 2
    },
    {
      "id": "EQP-0003",
      "theme": "equipements",
      "enonce": "Que dit la réglementation sur le gilet de haute visibilité à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il doit être détenu (sur soi ou rangé sous la selle)." },
        { "id": "b", "texte": "Il faut le porter en cas d'arrêt d'urgence sur la chaussée ou la bande d'arrêt d'urgence." },
        { "id": "c", "texte": "Il n'est jamais nécessaire à moto." },
        { "id": "d", "texte": "Son absence peut être sanctionnée lors d'un arrêt d'urgence." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Le motard doit détenir un gilet rétroréfléchissant (A) et le porter lors d'un arrêt d'urgence (B) ; ne pas l'avoir alors est verbalisable (D). Il n'est donc pas inutile (C faux).",
      "difficulte": 2
    },
    {
      "id": "EQP-0004",
      "theme": "equipements",
      "enonce": "À propos du gilet ou blouson airbag pour moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il est fortement recommandé pour protéger le thorax et la colonne." },
        { "id": "b", "texte": "Il est obligatoire au même titre que le casque." },
        { "id": "c", "texte": "Il réduit la gravité de certaines blessures en cas de choc." },
        { "id": "d", "texte": "Il se déclenche pour amortir l'impact." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "L'airbag est vivement recommandé (A), réduit la gravité des blessures au tronc (C) et se déploie pour amortir le choc (D). Il n'est pas obligatoire, contrairement au casque et aux gants (B faux).",
      "difficulte": 2
    },
    {
      "id": "EQP-0005",
      "theme": "equipements",
      "enonce": "Quels équipements protègent efficacement en cas de chute ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un blouson doté de coques aux épaules et aux coudes." },
        { "id": "b", "texte": "Un pantalon renforcé ou de protection." },
        { "id": "c", "texte": "Un short et des baskets quand il fait chaud." },
        { "id": "d", "texte": "Des bottes ou chaussures montantes protégeant les chevilles." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Blouson à coques (A), pantalon renforcé (B) et chaussures montantes (D) limitent les blessures par abrasion et par choc. Short et baskets (C) n'offrent aucune protection : la peau est directement exposée.",
      "difficulte": 1
    },
    {
      "id": "EQP-0006",
      "theme": "equipements",
      "enonce": "À propos de l'écran (visière) du casque :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Il protège des projections et du vent." },
        { "id": "b", "texte": "Un écran rayé ou teinté gêne fortement la vision de nuit." },
        { "id": "c", "texte": "Un écran teinté est parfaitement adapté à la conduite de nuit." },
        { "id": "d", "texte": "Il doit rester propre pour une bonne visibilité." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "La visière protège des projections (A) et doit rester propre (D) ; un écran rayé ou teinté dégrade la vue de nuit (B). Un écran teinté la nuit (C) est au contraire dangereux.",
      "difficulte": 2
    },
    {
      "id": "EQP-0007",
      "theme": "equipements",
      "enonce": "Par forte chaleur, comment s'équiper à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Conserver un équipement de protection adapté, mais ventilé." },
        { "id": "b", "texte": "Rouler en tee-shirt pour avoir moins chaud." },
        { "id": "c", "texte": "S'hydrater régulièrement." },
        { "id": "d", "texte": "Privilégier des matières résistantes à l'abrasion." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "Même par forte chaleur, on garde un équipement protecteur mais ventilé (A), on s'hydrate (C) et on choisit des matières résistantes (D). Le tee-shirt (B) expose à de graves brûlures par abrasion en cas de glissade.",
      "difficulte": 2
    },
    {
      "id": "EQP-0008",
      "theme": "equipements",
      "enonce": "Concernant l'homologation des équipements de protection (EPI) moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le casque porte une étiquette d'homologation (norme ECE)." },
        { "id": "b", "texte": "Les gants moto homologués portent un marquage CE." },
        { "id": "c", "texte": "Un vêtement de ville offre la même protection qu'un EPI." },
        { "id": "d", "texte": "Les protections (dorsale, coques) répondent à des normes spécifiques." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Le casque porte une homologation ECE (A), les gants un marquage CE (B) et les protections des normes dédiées (D). Un vêtement de ville (C) n'a ni la résistance ni les renforts d'un EPI certifié.",
      "difficulte": 2
    },

    /* ---------- DOCUMENTS ET INFRACTIONS (6) ---------- */
    {
      "id": "DOC-0001",
      "theme": "documents",
      "enonce": "Lors d'un contrôle, quels documents devez-vous pouvoir présenter ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Votre permis de conduire valide pour la catégorie." },
        { "id": "b", "texte": "Le certificat d'immatriculation (carte grise) du véhicule." },
        { "id": "c", "texte": "La preuve d'une assurance en cours de validité." },
        { "id": "d", "texte": "Votre acte de naissance." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "On doit pouvoir présenter le permis adapté (A), la carte grise (B) et justifier de l'assurance (C). L'acte de naissance (D) n'est pas requis pour conduire.",
      "difficulte": 1
    },
    {
      "id": "DOC-0002",
      "theme": "documents",
      "enonce": "L'assurance d'un deux-roues motorisé :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La responsabilité civile (« au tiers ») est obligatoire." },
        { "id": "b", "texte": "Rouler sans assurance est un délit." },
        { "id": "c", "texte": "Elle est facultative pour les petites cylindrées." },
        { "id": "d", "texte": "Depuis 2024, la carte verte papier n'est plus exigée, le contrôle étant dématérialisé." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "L'assurance au tiers est obligatoire pour tout véhicule à moteur (A) et le défaut d'assurance est un délit (B). Aucune dérogation pour les petites cylindrées (C faux). Depuis avril 2024, le justificatif papier (carte verte) a disparu au profit d'un contrôle par fichier (D).",
      "difficulte": 2
    },
    {
      "id": "DOC-0003",
      "theme": "documents",
      "enonce": "Quel permis autorise la conduite d'une moto de plus de 35 kW (forte puissance) ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le permis A." },
        { "id": "b", "texte": "Le permis A2, directement et sans condition." },
        { "id": "c", "texte": "Le permis A, accessible après 2 ans de permis A2 et une formation." },
        { "id": "d", "texte": "Le permis B seul." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "La moto puissante relève du permis A (A), obtenu après 2 ans de permis A2 et une formation de 7 h (C). Le A2 est limité à 35 kW (B faux) et le permis B seul ne suffit pas (D faux).",
      "difficulte": 2
    },
    {
      "id": "DOC-0004",
      "theme": "documents",
      "enonce": "Avec un permis B obtenu depuis plus de 2 ans, conduire une 125 cm³ exige :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une formation pratique de 7 heures." },
        { "id": "b", "texte": "Rien de plus, le permis B suffit toujours." },
        { "id": "c", "texte": "Le respect des équipements obligatoires (casque, gants CE)." },
        { "id": "d", "texte": "Une cylindrée et une puissance limitées (125 cm³, 11 kW)." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "Conduire une 125 avec le permis B impose la formation de 7 h (A), le respect des équipements obligatoires (C) et une cylindrée ≤ 125 cm³ / 11 kW (D). Le permis B seul ne suffit donc pas sans cette formation (B faux).",
      "difficulte": 2
    },
    {
      "id": "DOC-0005",
      "theme": "documents",
      "enonce": "Le permis probatoire :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Démarre avec un capital de 6 points." },
        { "id": "b", "texte": "Dure 3 ans (réduit en cas d'apprentissage anticipé éligible)." },
        { "id": "c", "texte": "Démarre à 12 points comme un permis confirmé." },
        { "id": "d", "texte": "Voit son capital augmenter chaque année sans infraction." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Le permis probatoire commence à 6 points (A), dure 3 ans (B) et se crédite progressivement jusqu'à 12 points en l'absence d'infraction (D). Il ne démarre pas à 12 points (C faux).",
      "difficulte": 2
    },
    {
      "id": "DOC-0006",
      "theme": "documents",
      "enonce": "Parmi ces situations, lesquelles entraînent un retrait de points ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un excès de vitesse." },
        { "id": "b", "texte": "Le franchissement d'une ligne continue." },
        { "id": "c", "texte": "Se garer correctement devant chez soi." },
        { "id": "d", "texte": "L'usage d'un téléphone tenu en main au guidon." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Excès de vitesse (A), franchissement de ligne continue (B) et téléphone tenu en main (D) entraînent un retrait de points. Se garer correctement (C) n'en retire pas.",
      "difficulte": 1
    },

    /* ---------- PREMIERS SECOURS (8 — point faible renforcé) ---------- */
    {
      "id": "SEC-0001",
      "theme": "secours",
      "enonce": "Face à un accident, dans quel ordre faut-il agir ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protéger la zone." },
        { "id": "b", "texte": "Alerter les secours." },
        { "id": "c", "texte": "Secourir la ou les victimes." },
        { "id": "d", "texte": "Déplacer immédiatement la victime, dans tous les cas." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "On applique « Protéger – Alerter – Secourir » dans cet ordre (A, B, C). Déplacer systématiquement une victime (D) est dangereux : on ne la bouge qu'en cas de danger immédiat (incendie, etc.).",
      "difficulte": 1
    },
    {
      "id": "SEC-0002",
      "theme": "secours",
      "enonce": "Quels numéros permettent d'alerter les secours en France ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le 112 (numéro d'urgence européen)." },
        { "id": "b", "texte": "Le 15 (SAMU)." },
        { "id": "c", "texte": "Le 18 (sapeurs-pompiers)." },
        { "id": "d", "texte": "Le 30." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "Le 112 (A), le 15 / SAMU (B) et le 18 / pompiers (C) sont des numéros d'urgence valides ; le 17 joint la police/gendarmerie. Le 30 (D) n'est pas un numéro d'urgence.",
      "difficulte": 1
    },
    {
      "id": "SEC-0003",
      "theme": "secours",
      "enonce": "Un motard est inconscient après une chute, casque encore sur la tête. Que faire du casque ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le laisser en place par défaut, sauf nécessité vitale." },
        { "id": "b", "texte": "Le retirer seul et brutalement." },
        { "id": "c", "texte": "Le retirer à plusieurs et avec précaution s'il faut libérer les voies respiratoires." },
        { "id": "d", "texte": "Maintenir l'axe tête-cou de la victime." }
      ],
      "bonnesReponses": ["a", "c", "d"],
      "explication": "On laisse le casque en place par défaut (A) en maintenant l'axe tête-cou (D) ; on ne le retire, à plusieurs et délicatement, que si c'est vital pour libérer les voies aériennes (C). Un retrait seul et brutal (B) aggrave une éventuelle lésion cervicale.",
      "difficulte": 3
    },
    {
      "id": "SEC-0004",
      "theme": "secours",
      "enonce": "Une victime est inconsciente mais respire normalement. Quelles actions sont adaptées ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La placer en Position Latérale de Sécurité (PLS)." },
        { "id": "b", "texte": "Surveiller sa respiration en attendant les secours." },
        { "id": "c", "texte": "La laisser sur le dos sans surveillance." },
        { "id": "d", "texte": "Lui donner à boire." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Une victime inconsciente qui respire est placée en PLS (A) pour éviter l'étouffement, puis surveillée (B). La laisser sur le dos sans surveillance (C) risque l'obstruction, et donner à boire à un inconscient (D) est dangereux.",
      "difficulte": 2
    },
    {
      "id": "SEC-0005",
      "theme": "secours",
      "enonce": "Lorsque vous alertez les secours, quelles informations transmettre ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le lieu précis de l'accident." },
        { "id": "b", "texte": "Le nombre et l'état des victimes." },
        { "id": "c", "texte": "La nature de l'accident et les risques présents." },
        { "id": "d", "texte": "Raccrocher le plus vite possible, avant toute question." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "On indique le lieu précis (A), le nombre et l'état des victimes (B) et la nature de l'accident (C). Il ne faut pas raccrocher en premier (D) : on attend les consignes de l'opérateur.",
      "difficulte": 1
    },
    {
      "id": "SEC-0006",
      "theme": "secours",
      "enonce": "Une victime présente une hémorragie externe abondante. Que faire en priorité ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Comprimer directement la plaie." },
        { "id": "b", "texte": "Alerter les secours." },
        { "id": "c", "texte": "Attendre que le saignement s'arrête de lui-même." },
        { "id": "d", "texte": "Allonger la victime." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Devant une hémorragie, on comprime la plaie (A), on alerte (B) et on allonge la victime (D) pour limiter le malaise. Attendre passivement (C) met sa vie en danger.",
      "difficulte": 2
    },
    {
      "id": "SEC-0007",
      "theme": "secours",
      "enonce": "Pour « protéger » sur les lieux d'un accident, vous pouvez :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Allumer vos feux de détresse et baliser la zone." },
        { "id": "b", "texte": "Enfiler un gilet de haute visibilité." },
        { "id": "c", "texte": "Vous placer au milieu de la chaussée sans protection." },
        { "id": "d", "texte": "Éloigner les témoins du danger et signaler en amont." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Protéger, c'est baliser et signaler (A), se rendre visible avec un gilet (B) et sécuriser les personnes en amont (D). Se tenir au milieu de la voie sans protection (C) crée un risque de suraccident.",
      "difficulte": 2
    },
    {
      "id": "SEC-0008",
      "theme": "secours",
      "enonce": "Une personne s'est brûlée au contact d'un pot d'échappement. Quels gestes sont adaptés ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Refroidir la brûlure à l'eau tempérée." },
        { "id": "b", "texte": "Percer les cloques." },
        { "id": "c", "texte": "Retirer bagues et montre avant que la zone ne gonfle." },
        { "id": "d", "texte": "Appliquer du beurre ou un corps gras." }
      ],
      "bonnesReponses": ["a", "c"],
      "explication": "On refroidit la brûlure à l'eau (A) et on retire bijoux et montre avant l'œdème (C). Percer les cloques (B) ou appliquer un corps gras (D) favorise l'infection et aggrave la lésion.",
      "difficulte": 2
    },

    /* ---------- ENVIRONNEMENT ET ÉCO-CONDUITE (5) ---------- */
    {
      "id": "ENV-0001",
      "theme": "environnement",
      "enonce": "Quels comportements relèvent de l'éco-conduite à moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Anticiper et utiliser le frein moteur." },
        { "id": "b", "texte": "Maintenir un régime moteur modéré." },
        { "id": "c", "texte": "Accélérer fort puis freiner tard de façon systématique." },
        { "id": "d", "texte": "Adopter une vitesse stable et souple." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Anticiper avec le frein moteur (A), garder un régime modéré (B) et rouler à allure souple et stable (D) réduisent consommation et émissions. Les à-coups d'accélération/freinage (C) font l'inverse.",
      "difficulte": 1
    },
    {
      "id": "ENV-0002",
      "theme": "environnement",
      "enonce": "Quels sont les effets d'un sous-gonflage des pneus ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une augmentation de la consommation de carburant." },
        { "id": "b", "texte": "Une usure prématurée du pneu." },
        { "id": "c", "texte": "Aucune incidence notable." },
        { "id": "d", "texte": "Une dégradation de la tenue de route." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Un pneu sous-gonflé augmente la résistance au roulement, donc la consommation (A), s'use plus vite (B) et dégrade la tenue de route (D). L'effet est donc loin d'être nul (C faux).",
      "difficulte": 2
    },
    {
      "id": "ENV-0003",
      "theme": "environnement",
      "enonce": "En quoi l'entretien de la moto agit-il sur l'environnement ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un moteur bien entretenu pollue moins." },
        { "id": "b", "texte": "Une vidange et des filtres négligés augmentent les émissions." },
        { "id": "c", "texte": "L'entretien n'a aucun impact écologique." },
        { "id": "d", "texte": "Un bon réglage limite la surconsommation." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Un moteur entretenu pollue moins (A), tandis que vidange et filtres négligés accroissent les émissions (B) ; un bon réglage limite la surconsommation (D). L'entretien a donc bien un impact (C faux).",
      "difficulte": 1
    },
    {
      "id": "ENV-0004",
      "theme": "environnement",
      "enonce": "Concernant les nuisances sonores d'un deux-roues :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un échappement non conforme (débridé) est interdit." },
        { "id": "b", "texte": "Le bruit excessif est une nuisance sanctionnable." },
        { "id": "c", "texte": "Faire du bruit améliore la sécurité, c'est donc recommandé." },
        { "id": "d", "texte": "Le silencieux d'origine limite les nuisances." }
      ],
      "bonnesReponses": ["a", "b", "d"],
      "explication": "Un échappement non homologué est interdit (A) et le bruit excessif est verbalisable (B) ; le silencieux d'origine limite les nuisances (D). L'idée que « le bruit = la sécurité » (C) ne justifie pas une infraction.",
      "difficulte": 1
    },
    {
      "id": "ENV-0005",
      "theme": "environnement",
      "enonce": "Pour circuler dans une zone à faibles émissions (ZFE), un deux-roues doit :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Afficher une vignette Crit'Air correspondant à sa catégorie." },
        { "id": "b", "texte": "Respecter les restrictions de circulation en vigueur localement." },
        { "id": "c", "texte": "Pouvoir être contrôlé sur son niveau d'émissions." },
        { "id": "d", "texte": "Rien : les motos ne sont jamais concernées par les ZFE." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "Dans une ZFE, le deux-roues doit afficher sa vignette Crit'Air (A), respecter les restrictions locales (B) et peut être contrôlé (C). Les motos peuvent être concernées (D faux).",
      "difficulte": 2
    },

    /* ===== LOT PROPOSÉ PAR L'UTILISATEUR — vérifié, reformulé, réponses sourcées (2026) ===== */
    {
      "id": "MEC-0030",
      "theme": "mecanique",
      "enonce": "On peut contrôler de façon sommaire le voile (voilage) d'un disque de frein en approchant un repère fixe, comme un stylo, et en faisant tourner la roue :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "En plaçant un repère fixe (stylo, tournevis) près du disque et en tournant la roue, on voit si l'écart varie : c'est un contrôle sommaire du voilage (A). Le contrôle précis se fait au comparateur, mais ce repérage visuel reste utile (B faux).",
      "difficulte": 2
    },
    {
      "id": "MEC-0031",
      "theme": "mecanique",
      "enonce": "Les dents de la couronne de transmission sont usées. Je remplace :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Uniquement la couronne." },
        { "id": "b", "texte": "La couronne et la chaîne seulement." },
        { "id": "c", "texte": "L'ensemble du kit chaîne (chaîne, couronne et pignon)." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Chaîne, couronne et pignon s'usent ensemble : on remplace tout le kit chaîne (C). Ne changer que la couronne (A) ou couronne + chaîne sans le pignon (B) use prématurément les pièces neuves.",
      "difficulte": 2
    },
    {
      "id": "MEC-0032",
      "theme": "mecanique",
      "enonce": "Un pneu de type « sport » possède généralement une gomme :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Tendre." },
        { "id": "b", "texte": "Dure." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un pneu sport a une gomme plus tendre (A) : meilleure accroche, mais usure plus rapide. Une gomme dure (B) dure plus longtemps mais accroche moins (orientation longévité/routière).",
      "difficulte": 1
    },
    {
      "id": "MEC-0033",
      "theme": "mecanique",
      "enonce": "Les perçages (trous) visibles sur certains disques de frein contribuent à leur refroidissement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Les perçages favorisent le refroidissement du disque et l'évacuation de l'eau, des gaz et des poussières (A) : le freinage reste plus efficace et plus constant. Ils ne sont pas que décoratifs (B faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0034",
      "theme": "mecanique",
      "enonce": "Une jante de ma moto est endommagée (déformée ou fissurée). Je peux continuer à circuler :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Une jante endommagée compromet la tenue du pneu et la sécurité : on ne circule pas (B). Il faut la faire vérifier ou remplacer avant de reprendre la route (A faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0035",
      "theme": "mecanique",
      "enonce": "Ma moto doit posséder un dispositif réfléchissant (catadioptre) à l'arrière :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un catadioptre arrière est obligatoire (A) : il renvoie la lumière des autres véhicules et rend la moto visible la nuit. Son absence est une infraction (B faux).",
      "difficulte": 1
    },
    {
      "id": "EQP-0009",
      "theme": "equipements",
      "enonce": "Il pleut fortement. Je circule avec la visière de mon casque :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Fermée." },
        { "id": "b", "texte": "Ouverte." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Sous la pluie, on roule visière fermée (A) : elle protège les yeux des gouttes et des projections et préserve la vision. Visière ouverte (B), on est gêné, voire aveuglé.",
      "difficulte": 1
    },
    {
      "id": "EQP-0010",
      "theme": "equipements",
      "enonce": "Pour circuler à moto, il est obligatoire de porter au minimum :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un casque homologué." },
        { "id": "b", "texte": "Des gants certifiés (CE)." },
        { "id": "c", "texte": "Des bottes." },
        { "id": "d", "texte": "Un blouson." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Le minimum obligatoire est le casque homologué (A) et les gants certifiés CE (B), pour le conducteur comme pour le passager. Les bottes (C) et le blouson (D) sont vivement conseillés mais pas obligatoires.",
      "difficulte": 2
    },
    {
      "id": "EQP-0011",
      "theme": "equipements",
      "enonce": "Pour garantir une protection efficace, je peux acheter un casque d'occasion :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "On évite le casque d'occasion (B) : on ne connaît pas son histoire ; un choc, même invisible, peut avoir dégradé sa coque. Mieux vaut un casque neuf homologué (A faux).",
      "difficulte": 1
    },
    {
      "id": "EQP-0012",
      "theme": "equipements",
      "enonce": "Un blouson de moto sert principalement à :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Me protéger du froid." },
        { "id": "b", "texte": "Me protéger en cas de chute." },
        { "id": "c", "texte": "Me protéger de la pluie." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le rôle premier d'un blouson moto est la protection en cas de chute (B) : résistance à l'abrasion, coques aux épaules et coudes. Le froid (A) et la pluie (C) sont secondaires, gérés par des doublures ou membranes.",
      "difficulte": 1
    },
    {
      "id": "EQP-0013",
      "theme": "equipements",
      "enonce": "La nuit, l'utilisation de l'écran solaire interne (pare-soleil teinté) du casque est interdite :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "L'écran solaire teinté est interdit la nuit (A) : comme des lunettes de soleil, il réduit fortement la vision dans l'obscurité. On le relève la nuit (B faux).",
      "difficulte": 2
    },
    {
      "id": "EQP-0014",
      "theme": "equipements",
      "enonce": "Le port d'un blouson certifié « équipement de protection individuelle » (EPI) est :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Obligatoire." },
        { "id": "b", "texte": "Fortement conseillé." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le blouson certifié est fortement conseillé (B) mais non obligatoire : seuls le casque homologué et les gants certifiés le sont. Le porter réduit nettement les blessures en cas de chute.",
      "difficulte": 2
    },
    {
      "id": "DOC-0007",
      "theme": "documents",
      "enonce": "Je dois apposer sur ma moto le certificat (vignette) d'assurance :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Depuis le 1er avril 2024, la vignette et la carte verte ont disparu : on n'appose plus rien (B). Les forces de l'ordre vérifient l'assurance via le Fichier des véhicules assurés. L'assurance reste obligatoire, mais l'affichage non (A faux).",
      "difficulte": 2
    },
    {
      "id": "DOC-0008",
      "theme": "documents",
      "enonce": "En général, l'assurance de base (au tiers) de ma moto couvre aussi mon équipement (casque, blouson…) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "L'assurance de base (responsabilité civile) ne couvre pas votre propre équipement (B) : il faut une garantie spécifique. L'assurance au tiers indemnise surtout les autres victimes (A faux).",
      "difficulte": 2
    },
    {
      "id": "DOC-0009",
      "theme": "documents",
      "enonce": "Je viens d'obtenir le permis A1, c'est mon seul permis. Mon capital est de 12 points :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Un nouveau permis démarre en période probatoire avec 6 points (B), pas 12. Le capital monte ensuite progressivement jusqu'à 12 si aucune infraction n'est commise (A faux).",
      "difficulte": 2
    },
    {
      "id": "SEC-0009",
      "theme": "secours",
      "enonce": "Premier sur le lieu d'un accident impliquant une moto, j'actionne le coupe-circuit de la machine :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Couper le contact avec le coupe-circuit (A) supprime le risque d'incendie (carburant, étincelles) : c'est un geste de mise en sécurité avant de protéger, alerter et secourir (B faux).",
      "difficulte": 2
    },
    {
      "id": "SEC-0010",
      "theme": "secours",
      "enonce": "Un motard est blessé. Il est conseillé de lui retirer son casque pour l'aider à respirer :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "On ne retire pas le casque (B) : bouger le cou peut aggraver une lésion de la colonne. On le laisse en place et on confie ce geste aux secours, sauf nécessité vitale (arrêt respiratoire). Donc A est faux.",
      "difficulte": 3
    },
    {
      "id": "CND-0008",
      "theme": "conducteur",
      "enonce": "La très grande majorité des personnes décédées à moto sont :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Des hommes." },
        { "id": "b", "texte": "Des femmes." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Les hommes représentent environ 94 % des motards tués (A) : ils parcourent la grande majorité des kilomètres à moto. C'est lié à l'exposition et aux comportements, pas une fatalité de sexe.",
      "difficulte": 1
    },
    {
      "id": "CND-0009",
      "theme": "conducteur",
      "enonce": "Plus ma vitesse augmente, plus mon champ de vision :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Augmente." },
        { "id": "b", "texte": "Diminue." }
      ],
      "bonnesReponses": ["b"],
      "explication": "À vitesse élevée, le regard se porte loin et le champ visuel se rétrécit (effet « tunnel », B) : on perçoit moins les côtés, d'où l'importance d'anticiper. Le champ ne s'élargit pas avec la vitesse (A faux).",
      "difficulte": 2
    },
    {
      "id": "CND-0010",
      "theme": "conducteur",
      "enonce": "Je souhaite devenir motard. Mon budget peut se limiter à l'achat de la moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le budget ne se limite pas à la moto (B) : il faut prévoir l'équipement (casque, gants, blouson…), l'assurance, l'entretien, le carburant et le contrôle technique. Ne compter que la moto (A) est une erreur.",
      "difficulte": 1
    },
    {
      "id": "CND-0011",
      "theme": "conducteur",
      "enonce": "Même à l'arrêt (feu rouge, stop), je continue à surveiller le trafic derrière moi :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "À moto, on surveille aussi l'arrière à l'arrêt (A) : un véhicule arrivant trop vite peut ne pas vous voir. Garder un rapport engagé et une échappatoire permet de se dégager. Cesser de surveiller (B) est risqué.",
      "difficulte": 2
    },
    {
      "id": "RTE-0008",
      "theme": "route",
      "enonce": "Sur une moto, l'effet gyroscopique qui stabilise la machine devient notable à partir d'environ :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "10 km/h." },
        { "id": "b", "texte": "20 km/h." },
        { "id": "c", "texte": "30 km/h." }
      ],
      "bonnesReponses": ["c"],
      "explication": "L'effet gyroscopique des roues devient nettement perceptible vers 30 km/h (C) : la moto se stabilise d'elle-même. À très basse vitesse (A, B), il est faible, d'où un équilibre plus délicat.",
      "difficulte": 2
    },
    {
      "id": "RTE-0009",
      "theme": "route",
      "enonce": "Les accidents mortels à moto se produisent principalement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "En agglomération." },
        { "id": "b", "texte": "Hors agglomération." },
        { "id": "c", "texte": "Sur les autoroutes." }
      ],
      "bonnesReponses": ["b"],
      "explication": "La majorité des motards tués le sont hors agglomération (B), sur des routes où la vitesse est plus élevée (virages, obstacles). L'agglomération (A) concentre plutôt les accidents matériels ; l'autoroute (C) est moins meurtrière à moto.",
      "difficulte": 2
    },
    {
      "id": "RTE-0010",
      "theme": "route",
      "enonce": "À faible vitesse, il est souvent moins risqué d'éviter un obstacle que de réaliser un freinage d'urgence :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "À faible vitesse, un évitement maîtrisé est souvent préférable (A) à un freinage d'urgence qui peut bloquer une roue et faire chuter. Le choix dépend toujours de l'espace disponible (donc B est trop catégorique).",
      "difficulte": 3
    },
    {
      "id": "RTE-0011",
      "theme": "route",
      "enonce": "Mon passager est bien installé s'il se tient fermement (au conducteur ou aux poignées) et garde les pieds sur les repose-pieds :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un passager bien installé se tient fermement et garde les pieds sur les cale-pieds (A) : il accompagne les mouvements sans gêner la conduite. Un passager mal tenu déséquilibre la moto (B faux).",
      "difficulte": 1
    },
    {
      "id": "RTE-0012",
      "theme": "route",
      "enonce": "La traversée de rails (tramway) ou de bandes peintes réduit l'adhérence des pneus :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Rails et marquages sont glissants, surtout mouillés : l'adhérence chute (A). On les franchit sans freiner ni accélérer dessus. Croire qu'ils n'y changent rien (B) est faux.",
      "difficulte": 1
    },
    {
      "id": "RTE-0013",
      "theme": "route",
      "enonce": "Pour franchir des rails en sécurité, je les aborde aussi perpendiculairement que possible :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "On franchit les rails le plus perpendiculairement possible (A) pour éviter que la roue ne glisse le long du rail. Les aborder de biais (B) augmente fortement le risque de chute.",
      "difficulte": 2
    },
    {
      "id": "RTE-0014",
      "theme": "route",
      "enonce": "La répartition des bagages et la position du passager ont une influence importante sur la stabilité de la moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le poids et sa répartition modifient l'équilibre, le freinage et la tenue de route (A) : une charge mal placée déstabilise la moto. C'est loin d'être négligeable (B faux).",
      "difficulte": 1
    },
    {
      "id": "RTE-0015",
      "theme": "route",
      "enonce": "Pour transporter une charge en préservant la stabilité, il est préférable d'utiliser :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une sacoche de réservoir (charge basse et centrée)." },
        { "id": "b", "texte": "Un top-case lourd à l'arrière." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Mieux vaut une charge basse et proche du centre, comme une sacoche de réservoir (A) : la stabilité est préservée. Un top-case lourd, haut et en porte-à-faux arrière (B) dégrade la tenue de route, surtout à vitesse élevée.",
      "difficulte": 2
    },
    {
      "id": "RTE-0016",
      "theme": "route",
      "enonce": "Lors d'un freinage d'urgence, je privilégie en premier lieu l'utilisation :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Du frein avant." },
        { "id": "b", "texte": "Du frein arrière." }
      ],
      "bonnesReponses": ["a"],
      "explication": "C'est le frein avant qui fournit l'essentiel de la puissance de freinage (A), grâce au transfert de charge vers l'avant, tout en gardant le frein arrière en appui. Se reposer sur l'arrière seul (B) allonge la distance d'arrêt.",
      "difficulte": 2
    },
    {
      "id": "RTE-0017",
      "theme": "route",
      "enonce": "Un écran (bavette) fixé en bas d'une glissière, dans un virage, est un dispositif de sécurité passive pour les motards :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Ces écrans moto sont une sécurité passive (A) : ils n'empêchent pas l'accident mais limitent les blessures en cas de chute, en évitant le choc contre les supports de glissière. La sécurité active, elle, vise à éviter l'accident.",
      "difficulte": 2
    },
    {
      "id": "RTE-0018",
      "theme": "route",
      "enonce": "L'écran de protection moto installé sur une glissière de sécurité est un dispositif de sécurité active :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "C'est une sécurité passive, pas active (B) : il agit pendant la chute pour réduire les blessures. La sécurité active (ABS, visibilité, anticipation) vise à éviter l'accident avant qu'il n'arrive. Donc A est faux.",
      "difficulte": 2
    },
    {
      "id": "USG-0008",
      "theme": "usagers",
      "enonce": "La capacité d'accélération d'une moto peut surprendre les autres usagers :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Une moto accélère souvent plus vite qu'une voiture (A) : un automobiliste peut mal évaluer votre vitesse d'arrivée et s'engager devant vous. D'où l'importance d'anticiper et de se rendre visible (B faux).",
      "difficulte": 1
    },
    {
      "id": "SIG-0009",
      "theme": "signalisation",
      "enonce": "En circulation, de jour comme de nuit, l'allumage du ou des feux de croisement est :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Facultatif." },
        { "id": "b", "texte": "Obligatoire." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Les deux-roues motorisés circulent feux de croisement allumés en permanence (B), ce qui améliore leur visibilité. Ce n'est pas facultatif (A) et l'oubli est sanctionné.",
      "difficulte": 1
    },
    {
      "id": "SIG-0010",
      "theme": "signalisation",
      "enonce": "Deux motards sont autorisés à circuler de front (côte à côte) sur la même voie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Rouler de front sur une même voie n'est pas autorisé (B) : les motards se placent en quinconce (décalés) pour garder distances de sécurité et visibilité. Côte à côte (A) réduit les marges de manœuvre.",
      "difficulte": 2
    },
    {
      "id": "SIG-0011",
      "theme": "signalisation",
      "enonce": "À l'approche d'un passage piéton encombré, je m'arrête avant celui-ci pour ne pas le masquer :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "On s'arrête avant le passage (A) pour ne pas le bloquer ni cacher un piéton aux autres usagers. S'arrêter sur le passage (B) est dangereux et interdit.",
      "difficulte": 1
    },
    {
      "id": "SIG-0012",
      "theme": "signalisation",
      "enonce": "La circulation inter-files des motos est interdite en présence de travaux sur la voie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La circulation inter-files n'est autorisée que dans des conditions précises ; elle est notamment proscrite en présence de travaux (A), qui réduisent les largeurs et la sécurité. Continuer à se faufiler (B) est interdit et dangereux.",
      "difficulte": 3
    },
    {
      "id": "SIG-0013",
      "theme": "signalisation",
      "enonce": "La circulation inter-files est également interdite à l'approche d'un accident :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "À l'approche d'un accident, on ne se faufile pas entre les files (A) : présence de secours, de personnes et d'obstacles. On ralentit et on laisse le passage. Donc B est faux.",
      "difficulte": 3
    },

    /* ===== SIGNALISATION AVEC IMAGES (panneaux dessinés en SVG — données « media » embarquées) ===== */
    {
      "id": "SIG-0014",
      "theme": "signalisation",
      "enonce": "Vous arrivez devant ce panneau. Que devez-vous faire ?",
      "media": "images/stop.svg",
      "propositions": [
        { "id": "a", "texte": "Marquer un arrêt complet, même si la voie semble libre." },
        { "id": "b", "texte": "Céder le passage aux véhicules circulant sur la route abordée." },
        { "id": "c", "texte": "Ralentir et passer sans m'arrêter si rien ne vient." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Le panneau STOP impose un arrêt complet à la limite de la chaussée (A), puis de céder le passage à tous les véhicules (B). Ralentir sans s'arrêter (C) est une infraction, même la voie libre.",
      "difficulte": 1
    },
    {
      "id": "SIG-0015",
      "theme": "signalisation",
      "enonce": "Ce panneau m'autorise à emprunter cette voie :",
      "media": "images/sens-interdit.svg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "C'est un sens interdit : l'accès est interdit à tout véhicule (B). S'y engager (A) est une infraction grave et très dangereuse (on circulerait à contresens).",
      "difficulte": 1
    },
    {
      "id": "SIG-0016",
      "theme": "signalisation",
      "enonce": "Ce panneau m'oblige à marquer systématiquement un arrêt complet :",
      "media": "images/cedez-le-passage.svg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "« Cédez le passage » impose de laisser passer les autres véhicules, mais pas de s'arrêter systématiquement (B) : on peut continuer si la voie est libre. L'arrêt complet obligatoire, c'est le panneau STOP (donc A est faux).",
      "difficulte": 2
    },
    {
      "id": "SIG-0017",
      "theme": "signalisation",
      "enonce": "D'après ce panneau, la vitesse maximale autorisée est :",
      "media": "images/limitation-50.svg",
      "propositions": [
        { "id": "a", "texte": "30 km/h." },
        { "id": "b", "texte": "50 km/h." },
        { "id": "c", "texte": "70 km/h." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Ce panneau rond à bord rouge fixe une limitation de vitesse : ici 50 km/h (B). Elle reste valable jusqu'à un panneau de fin de limitation ou une nouvelle limitation.",
      "difficulte": 1
    },

    /* ===== SIGNALISATION ILLUSTRÉE — lot 2 (panneaux dessinés en SVG) ===== */
    {
      "id": "SIG-0018",
      "theme": "signalisation",
      "enonce": "Ce panneau signifie :",
      "media": "images/route-prioritaire.svg",
      "propositions": [
        { "id": "a", "texte": "Vous circulez sur une route prioritaire." },
        { "id": "b", "texte": "Vous devez céder le passage à chaque intersection." },
        { "id": "c", "texte": "Fin de route prioritaire." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le losange jaune indique que vous êtes sur une route prioritaire (A) : vous gardez la priorité aux intersections suivantes, sauf indication contraire. Ce n'est ni un « cédez le passage » (B) ni la fin de priorité (C).",
      "difficulte": 1
    },
    {
      "id": "SIG-0019",
      "theme": "signalisation",
      "enonce": "Ce panneau indique :",
      "media": "images/fin-route-prioritaire.svg",
      "propositions": [
        { "id": "a", "texte": "Le début d'une route prioritaire." },
        { "id": "b", "texte": "La fin de la route prioritaire." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le losange jaune barré marque la fin de la route prioritaire (B) : au-delà, vous n'êtes plus prioritaire et devez appliquer les règles ordinaires (souvent la priorité à droite).",
      "difficulte": 2
    },
    {
      "id": "SIG-0020",
      "theme": "signalisation",
      "enonce": "Ce panneau impose :",
      "media": "images/limitation-30.svg",
      "propositions": [
        { "id": "a", "texte": "Une vitesse maximale de 30 km/h." },
        { "id": "b", "texte": "Une vitesse minimale de 30 km/h." },
        { "id": "c", "texte": "Une distance de 30 mètres." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le cercle à bord rouge fixe une vitesse maximale de 30 km/h (A). Un « 30 » sur fond bleu indiquerait une vitesse minimale (B) ; il ne s'agit pas d'une distance (C).",
      "difficulte": 1
    },
    {
      "id": "SIG-0021",
      "theme": "signalisation",
      "enonce": "Ce panneau interdit :",
      "media": "images/stationnement-interdit.svg",
      "propositions": [
        { "id": "a", "texte": "Le stationnement (l'arrêt reste possible)." },
        { "id": "b", "texte": "L'arrêt et le stationnement." },
        { "id": "c", "texte": "La circulation." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le disque bleu avec une seule barre rouge interdit le stationnement (A), mais l'arrêt momentané reste autorisé. Avec deux barres en croix, ce serait arrêt ET stationnement interdits (B).",
      "difficulte": 2
    },
    {
      "id": "SIG-0022",
      "theme": "signalisation",
      "enonce": "Ce panneau interdit :",
      "media": "images/arret-stationnement-interdit.svg",
      "propositions": [
        { "id": "a", "texte": "Seulement le stationnement." },
        { "id": "b", "texte": "L'arrêt et le stationnement." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Les deux barres rouges en croix sur fond bleu interdisent à la fois l'arrêt et le stationnement (B). Une seule barre n'interdirait que le stationnement (A).",
      "difficulte": 2
    },
    {
      "id": "SIG-0023",
      "theme": "signalisation",
      "enonce": "Ce panneau (cercle blanc à bordure rouge) signifie :",
      "media": "images/acces-interdit.svg",
      "propositions": [
        { "id": "a", "texte": "Accès interdit à tout véhicule, dans les deux sens." },
        { "id": "b", "texte": "Sens interdit." },
        { "id": "c", "texte": "Stationnement interdit." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Ce panneau interdit la circulation à tout véhicule dans les deux sens (A). Le sens interdit (B) comporte une barre blanche horizontale ; le stationnement interdit (C) est bleu.",
      "difficulte": 2
    },
    {
      "id": "SIG-0024",
      "theme": "signalisation",
      "enonce": "Ce panneau interdit :",
      "media": "images/interdiction-demi-tour.svg",
      "propositions": [
        { "id": "a", "texte": "De faire demi-tour." },
        { "id": "b", "texte": "De tourner à gauche." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La flèche en demi-tour barrée interdit le demi-tour (A) jusqu'à la prochaine intersection. Ce n'est pas une interdiction de tourner à gauche (B).",
      "difficulte": 1
    },
    {
      "id": "SIG-0025",
      "theme": "signalisation",
      "enonce": "Ce panneau (rond bleu, flèche vers le haut) impose :",
      "media": "images/obligation-tout-droit.svg",
      "propositions": [
        { "id": "a", "texte": "De continuer tout droit." },
        { "id": "b", "texte": "Un sens interdit." },
        { "id": "c", "texte": "De s'arrêter." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le fond bleu indique une obligation : ici, continuer tout droit (A). Le bleu marque une obligation, pas une interdiction (B) ni un arrêt (C).",
      "difficulte": 1
    },
    {
      "id": "SIG-0026",
      "theme": "signalisation",
      "enonce": "Ce panneau vous oblige à :",
      "media": "images/obligation-droite.svg",
      "propositions": [
        { "id": "a", "texte": "Tourner à droite." },
        { "id": "b", "texte": "Tourner à gauche." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La flèche bleue dirigée vers la droite impose de tourner à droite (A). Le fond bleu = obligation de suivre la direction indiquée.",
      "difficulte": 1
    },
    {
      "id": "SIG-0027",
      "theme": "signalisation",
      "enonce": "Ce panneau bleu portant « 30 » signifie :",
      "media": "images/vitesse-minimale-30.svg",
      "propositions": [
        { "id": "a", "texte": "Vitesse maximale 30 km/h." },
        { "id": "b", "texte": "Vitesse minimale obligatoire de 30 km/h." },
        { "id": "c", "texte": "Fin de limitation à 30 km/h." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Sur fond bleu, c'est une obligation : rouler à au moins 30 km/h (vitesse minimale, B). Le même chiffre dans un cercle à bord rouge signifierait une vitesse maximale (A). Piège classique : bleu = obligation, rouge = interdiction.",
      "difficulte": 2
    },
    {
      "id": "SIG-0028",
      "theme": "signalisation",
      "enonce": "Ce panneau triangulaire à bord rouge annonce :",
      "media": "images/danger-generique.svg",
      "propositions": [
        { "id": "a", "texte": "Un danger non précisé (« autre danger »)." },
        { "id": "b", "texte": "Une interdiction." },
        { "id": "c", "texte": "Une obligation." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le triangle avec « ! » annonce un danger non précisé (A) : il faut redoubler de prudence. Les triangles signalent un danger, pas une interdiction (B, ronds rouges) ni une obligation (C, ronds bleus).",
      "difficulte": 1
    },
    {
      "id": "SIG-0029",
      "theme": "signalisation",
      "enonce": "Ce panneau annonce :",
      "media": "images/danger-virage-droite.svg",
      "propositions": [
        { "id": "a", "texte": "Un virage dangereux à droite." },
        { "id": "b", "texte": "Une obligation de tourner à droite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le triangle annonce un danger : ici un virage à droite (A). C'est une mise en garde, pas une obligation de tourner (B), qui serait un panneau rond bleu.",
      "difficulte": 1
    },
    {
      "id": "SIG-0030",
      "theme": "signalisation",
      "enonce": "Ce panneau annonce :",
      "media": "images/danger-feu-tricolore.svg",
      "propositions": [
        { "id": "a", "texte": "Des feux tricolores." },
        { "id": "b", "texte": "Un passage à niveau." },
        { "id": "c", "texte": "Une zone de stationnement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le triangle de danger avec les trois feux annonce des feux tricolores (A) : préparez-vous à devoir vous arrêter. Ce n'est ni un passage à niveau (B) ni du stationnement (C).",
      "difficulte": 1
    },
    {
      "id": "SIG-0031",
      "theme": "signalisation",
      "enonce": "Ce panneau annonce :",
      "media": "images/danger-passage-pietons.svg",
      "propositions": [
        { "id": "a", "texte": "Un passage pour piétons." },
        { "id": "b", "texte": "Une aire de jeux." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le triangle de danger avec un piéton annonce un passage pour piétons (A) : ralentissez et soyez prêt à céder le passage. Ce n'est pas une aire de jeux (B).",
      "difficulte": 1
    },
    {
      "id": "SIG-0032",
      "theme": "signalisation",
      "enonce": "Ce panneau (rond avec des barres obliques) signifie :",
      "media": "images/fin-toutes-interdictions.svg",
      "propositions": [
        { "id": "a", "texte": "Fin de toutes les interdictions précédemment signalées." },
        { "id": "b", "texte": "Début d'une zone d'interdictions." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Les barres obliques grises marquent la fin simultanée de toutes les interdictions précédentes (vitesse, dépassement, etc.) (A). Ce n'est pas le début d'une zone d'interdiction (B).",
      "difficulte": 2
    },

    /* ===== MÉCANIQUE — volume (texte) ===== */
    {
      "id": "MEC-0036",
      "theme": "mecanique",
      "enonce": "Le levier de frein s'enfonce mou ou trop loin vers la poignée. Cela peut révéler :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "De l'air ou un manque de liquide dans le circuit de frein." },
        { "id": "b", "texte": "Des pneus neufs." },
        { "id": "c", "texte": "Un réservoir de carburant plein." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un levier spongieux trahit souvent de l'air dans le circuit ou un niveau de liquide trop bas (A) : le freinage est dégradé, il faut faire vérifier. Cela n'a aucun rapport avec des pneus neufs (B) ou le carburant (C).",
      "difficulte": 2
    },
    {
      "id": "MEC-0037",
      "theme": "mecanique",
      "enonce": "Une suspension (amortisseurs) en mauvais état :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dégrade la tenue de route et l'efficacité du freinage." },
        { "id": "b", "texte": "N'a aucun effet sur la conduite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Des amortisseurs usés font « pomper » la moto, réduisent l'adhérence et allongent le freinage (A). Leur état est donc loin d'être sans effet (B).",
      "difficulte": 2
    },
    {
      "id": "MEC-0038",
      "theme": "mecanique",
      "enonce": "Avant de partir, je vérifie le bon fonctionnement des feux, du feu stop et des clignotants :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un éclairage et une signalisation en état sont essentiels pour voir et être vu (A) : une ampoule grillée (stop, clignotant) est dangereuse et verbalisable. On le vérifie régulièrement (B faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0039",
      "theme": "mecanique",
      "enonce": "La plaque d'immatriculation de ma moto doit être lisible et propre :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La plaque doit rester lisible (propre, non masquée, conforme) (A) : une plaque illisible ou non conforme est une infraction (B faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0040",
      "theme": "mecanique",
      "enonce": "Concernant les pressions de gonflage des pneus :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Elles sont souvent différentes à l'avant et à l'arrière, selon les préconisations." },
        { "id": "b", "texte": "Elles doivent être augmentées en cas de charge ou de passager." },
        { "id": "c", "texte": "Elles sont toujours strictement identiques avant et arrière." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Les pressions avant/arrière diffèrent souvent selon le constructeur (A) et s'augmentent avec une charge ou un passager (B). Elles ne sont donc pas systématiquement identiques (C). Se référer à la notice ou à l'étiquette constructeur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0041",
      "theme": "mecanique",
      "enonce": "Pour démarrer le moteur en sécurité :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Je me mets au point mort, ou j'engage une vitesse en gardant l'embrayage tiré." },
        { "id": "b", "texte": "Je laisse une vitesse engagée sans toucher l'embrayage." }
      ],
      "bonnesReponses": ["a"],
      "explication": "On démarre au point mort, ou embrayage débrayé si une vitesse est engagée (A), pour éviter tout départ intempestif. Démarrer en prise sans embrayer (B) ferait avancer la moto brutalement.",
      "difficulte": 2
    },
    {
      "id": "MEC-0042",
      "theme": "mecanique",
      "enonce": "Je trouve une tache d'huile sous ma moto après une nuit de stationnement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Cela peut signaler une fuite, à faire vérifier." },
        { "id": "b", "texte": "C'est toujours parfaitement normal." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Une tache d'huile ou de liquide peut révéler une fuite (joint, durite, fourche) (A) : à contrôler avant de rouler. Ce n'est pas anodin (B faux).",
      "difficulte": 1
    },
    {
      "id": "MEC-0043",
      "theme": "mecanique",
      "enonce": "Un niveau de liquide de frein anormalement bas peut indiquer :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une usure avancée des plaquettes." },
        { "id": "b", "texte": "Une fuite du circuit de freinage." },
        { "id": "c", "texte": "Que tout va parfaitement bien." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Le niveau baisse naturellement quand les plaquettes s'usent (A), mais une baisse marquée peut aussi venir d'une fuite (B) : dans tous les cas, on contrôle. Ce n'est pas un bon signe (C faux).",
      "difficulte": 2
    },
    {
      "id": "EQP-0015",
      "theme": "equipements",
      "enonce": "Pour circuler, mon casque doit être correctement attaché (jugulaire bouclée) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, il suffit de le poser sur la tête." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Un casque non attaché ne protège pas (il s'envole à la chute) et constitue une infraction : la jugulaire doit être bouclée (A). Simplement posé (B), il est inutile et illégal.",
      "difficulte": 1
    },
    {
      "id": "EQP-0016",
      "theme": "equipements",
      "enonce": "Un casque vendu pour rouler sur route doit être homologué (norme ECE) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Seul un casque homologué (étiquette ECE) est autorisé sur la route (A) : il a passé des tests de protection. Un casque non homologué (déco, jouet) est interdit (B faux).",
      "difficulte": 1
    },
    {
      "id": "EQP-0017",
      "theme": "equipements",
      "enonce": "Une protection dorsale sert principalement à :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protéger la colonne vertébrale en cas de choc." },
        { "id": "b", "texte": "Tenir chaud en hiver." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La dorsale protège la colonne vertébrale lors d'un choc ou d'une chute (A). Le confort thermique (B) n'est pas son rôle.",
      "difficulte": 1
    },
    {
      "id": "EQP-0018",
      "theme": "equipements",
      "enonce": "Pour être mieux vu des autres usagers, je privilégie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un équipement clair ou doté d'éléments rétroréfléchissants." },
        { "id": "b", "texte": "Un équipement entièrement sombre." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Des couleurs claires et des éléments rétroréfléchissants augmentent fortement la visibilité, surtout de nuit (A). Le tout-sombre (B) rend le motard difficile à voir.",
      "difficulte": 1
    },
    {
      "id": "EQP-0019",
      "theme": "equipements",
      "enonce": "Un gilet ou blouson airbag moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Se déclenche en cas de chute pour protéger le tronc et le cou." },
        { "id": "b", "texte": "Remplace le port du casque." }
      ],
      "bonnesReponses": ["a"],
      "explication": "L'airbag se gonfle lors d'une chute pour protéger thorax, dos et cervicales (A). Il complète l'équipement mais ne remplace pas le casque (B faux), qui reste obligatoire.",
      "difficulte": 2
    },
    {
      "id": "EQP-0020",
      "theme": "equipements",
      "enonce": "Le port de gants certifiés (CE) est obligatoire :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Pour le conducteur." },
        { "id": "b", "texte": "Pour le passager également." },
        { "id": "c", "texte": "Pour personne." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Les gants certifiés sont obligatoires pour le conducteur ET le passager (A, B). En leur absence, amende et retrait de point. Dire qu'ils ne le sont pour personne (C) est faux.",
      "difficulte": 2
    },
    {
      "id": "SEC-0011",
      "theme": "secours",
      "enonce": "Face à un accident, la conduite à tenir tient en trois mots :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Protéger." },
        { "id": "b", "texte": "Alerter." },
        { "id": "c", "texte": "Secourir." },
        { "id": "d", "texte": "Filmer la scène." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "La règle est Protéger, Alerter, Secourir (A, B, C) : on sécurise la zone, on prévient les secours, puis on porte assistance. Filmer (D) fait perdre un temps vital et est déplacé.",
      "difficulte": 2
    },
    {
      "id": "SEC-0012",
      "theme": "secours",
      "enonce": "Quels numéros permettent d'alerter les secours ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Le 112 (numéro d'urgence européen)." },
        { "id": "b", "texte": "Le 18 (pompiers)." },
        { "id": "c", "texte": "Le 15 (SAMU)." },
        { "id": "d", "texte": "Le 3949." }
      ],
      "bonnesReponses": ["a", "b", "c"],
      "explication": "Le 112 (A), le 18 (B) et le 15 (C) joignent les secours. Le 3949 (D) est un service d'emploi, sans rapport avec l'urgence.",
      "difficulte": 1
    },
    {
      "id": "SEC-0013",
      "theme": "secours",
      "enonce": "Avant de porter secours, je protège d'abord la zone (gilet, feux de détresse, baliser) pour éviter un suraccident :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "« Protéger » est la première étape (A) : se signaler et baliser évite un suraccident qui ferait d'autres victimes. Se précipiter sans sécuriser (B) est dangereux.",
      "difficulte": 1
    },
    {
      "id": "SEC-0014",
      "theme": "secours",
      "enonce": "Je déplace systématiquement la victime pour la mettre sur le côté :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, toujours." },
        { "id": "b", "texte": "Non, sauf danger immédiat (incendie, sur-accident)." }
      ],
      "bonnesReponses": ["b"],
      "explication": "On ne déplace pas une victime sauf danger imminent (B) : un mouvement peut aggraver une fracture ou une lésion de la colonne. On la déplace seulement si elle court un danger immédiat. La déplacer systématiquement (A) est une erreur.",
      "difficulte": 2
    },
    {
      "id": "SEC-0015",
      "theme": "secours",
      "enonce": "Si le retrait du casque est vraiment nécessaire (victime ne respirant plus), il se fait idéalement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À deux, en maintenant la tête et le cou dans l'axe." },
        { "id": "b", "texte": "Seul, en tirant rapidement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le retrait, réservé aux cas vitaux, se fait idéalement à deux en maintenant tête et cou alignés (A) pour limiter le risque pour la colonne. Tirer seul et vite (B) est dangereux.",
      "difficulte": 3
    },
    {
      "id": "SEC-0016",
      "theme": "secours",
      "enonce": "Pour réconforter un blessé, je lui donne à boire :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "On ne donne ni à boire ni à manger à un blessé (B) : cela peut provoquer un étouffement et compliquer une éventuelle opération. On le rassure et on le couvre en attendant les secours.",
      "difficulte": 1
    }

  ]
};
