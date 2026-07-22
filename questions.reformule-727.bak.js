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
    "version": "2026.9",
    "total": 727,
    "note": "727 questions ETM originales (dont un lot couvrant 100% des thèmes de l'ebook ETM 2026, reformulé). Format examen 2023. Visuels légaux (SVG + photos libres, crédits dans CREDITS.md)."
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
      "media": "images/stop.svg",
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
      "media": "images/ligne-continue.svg",
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
      "media": "images/danger-generique.svg",
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
      "media": "images/sens-interdit.svg",
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
      "media": "images/distance-securite.svg",
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
      "media": "images/photo-pluie-route.jpg",
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
      "media": "images/photo-pneu-use.jpg",
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
      "media": "images/photo-chaine-moto.jpg",
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
      "media": "images/photo-pneu-use.jpg",
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
      "media": "images/photo-pneu-use.jpg",
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
      "media": "images/tableau-bord-temoins.svg",
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
      "media": "images/photo-chaine-moto.jpg",
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
      "media": "images/photo-pneu-use.jpg",
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
      "media": "images/gilet-jaune.svg",
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
      "media": "images/photo-equipement.jpg",
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
      "media": "images/numeros-urgence.svg",
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
      "media": "images/pls.svg",
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
      "media": "images/gilet-jaune.svg",
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
      "media": "images/photo-frein-disque.jpg",
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
      "media": "images/photo-chaine-moto.jpg",
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
      "media": "images/photo-frein-disque.jpg",
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
      "media": "images/photo-pluie-route.jpg",
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
      "media": "images/photo-passage-pietons.jpg",
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
      "media": "images/photo-circulation-file.jpg",
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
      "media": "images/photo-circulation-file.jpg",
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
      "media": "images/casque-homologation.svg",
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
      "media": "images/numeros-urgence.svg",
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
      "media": "images/gilet-jaune.svg",
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
    },

    /* ========== LOT 2026-06-27 (questions originales, tous thèmes) ========== */

    /* ---------- DOCUMENTS ET INFRACTIONS ---------- */
    {
      "id": "DOC-0010",
      "theme": "documents",
      "enonce": "Je viens d'obtenir le permis A2 comme premier permis. Dois-je apposer un disque « A » à l'arrière de ma moto ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, comme tout conducteur en période probatoire." },
        { "id": "b", "texte": "Non, les deux-roues motorisés bénéficient d'une dérogation." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Le disque « A » (jeune conducteur) est obligatoire en période probatoire pour les voitures, mais les motos et scooters en sont dispensés (B) : il n'existe pas d'emplacement adapté pour l'apposer.",
      "difficulte": 2
    },
    {
      "id": "DOC-0011",
      "theme": "documents",
      "enonce": "En période probatoire, dois-je respecter les limitations de vitesse réduites imposées aux conducteurs débutants ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, elles ne concernent que les voitures." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : pendant la période probatoire, les vitesses maximales sont abaissées (par ex. 110 km/h au lieu de 130 sur autoroute, 100 au lieu de 110, 80 au lieu de 90 si limite à 90). Cela s'applique aussi aux motards débutants.",
      "difficulte": 2
    },
    {
      "id": "DOC-0012",
      "theme": "documents",
      "enonce": "Après 3 ans sans commettre d'infraction, un permis moto probatoire (filière classique) comptera :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "6 points." },
        { "id": "b", "texte": "9 points." },
        { "id": "c", "texte": "12 points." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Le permis probatoire démarre à 6 points et gagne 2 points par an sans infraction (filière classique sur 3 ans). Au terme des 3 ans, il atteint le maximum de 12 points (C).",
      "difficulte": 2
    },
    {
      "id": "DOC-0013",
      "theme": "documents",
      "enonce": "Si je roule sans avoir attaché la jugulaire de mon casque, je risque :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un retrait de 3 points sur mon permis." },
        { "id": "b", "texte": "Une amende forfaitaire de 135 €." },
        { "id": "c", "texte": "Le retrait immédiat de la carte grise." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Un casque non attaché équivaut à l'absence de casque : amende forfaitaire de 135 € (B) ET retrait de 3 points (A). La carte grise (C) n'est pas concernée.",
      "difficulte": 2
    },
    {
      "id": "DOC-0014",
      "theme": "documents",
      "enonce": "En circulant sur une voie réservée aux bus (hors cas autorisé), est-ce que je commets une infraction ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : sauf autorisation explicite (panonceau), la voie de bus est interdite aux motos. L'emprunter est une infraction.",
      "difficulte": 1
    },
    {
      "id": "DOC-0015",
      "theme": "documents",
      "enonce": "En circulant indûment sur une voie de bus, je risque :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un retrait de points sur mon permis." },
        { "id": "b", "texte": "Une amende forfaitaire de 135 €." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Circuler sur une voie de bus est une contravention de 4e classe : amende forfaitaire de 135 € (B), sans retrait de points.",
      "difficulte": 2
    },

    /* ---------- LA ROUTE ET LES RISQUES DE CONDUITE ---------- */
    {
      "id": "RTE-0019",
      "theme": "route",
      "enonce": "Le feu de croisement (code) doit être allumé en permanence à moto, de jour comme de nuit :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, seulement la nuit." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à moto, l'allumage des feux de croisement est obligatoire en permanence, y compris en plein jour, pour être vu des autres usagers.",
      "difficulte": 1
    },
    {
      "id": "RTE-0020",
      "theme": "route",
      "enonce": "Je peux m'arrêter quelques instants sur un pont pour prendre une photographie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, si je me gare bien à droite." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : l'arrêt et le stationnement sont dangereux et interdits sur un pont (visibilité réduite, chaussée étroite). On ne s'y arrête jamais pour une photo.",
      "difficulte": 2
    },
    {
      "id": "RTE-0021",
      "theme": "route",
      "enonce": "Lors d'une sortie de route à moto dans un virage, le facteur principal est souvent une vitesse excessive :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la majorité des sorties de route en virage sont dues à une vitesse trop élevée à l'entrée de la courbe, qui empêche de tenir sa trajectoire.",
      "difficulte": 2
    },
    {
      "id": "RTE-0022",
      "theme": "route",
      "enonce": "Ce risque de sortie de route en virage peut être réduit en ralentissant à l'approche du virage :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on ralentit AVANT le virage (« je freine droit »), puis on accélère progressivement à la sortie. Cela permet de garder le contrôle de la trajectoire.",
      "difficulte": 1
    },
    {
      "id": "RTE-0023",
      "theme": "route",
      "enonce": "À l'approche d'un nid-de-poule, ma trajectoire doit en tenir compte :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, j'adapte ma trajectoire pour l'éviter en sécurité." },
        { "id": "b", "texte": "Non, je passe dessus sans rien changer." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un nid-de-poule peut déséquilibrer la moto. J'anticipe et j'ajuste ma trajectoire pour l'éviter, à condition de ne pas mettre en danger les autres usagers.",
      "difficulte": 1
    },
    {
      "id": "RTE-0024",
      "theme": "route",
      "enonce": "Pour éviter ce nid-de-poule, je le fixe du regard :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, pour bien le viser." },
        { "id": "b", "texte": "Non, je regarde là où je veux passer." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : à moto, on va là où l'on regarde. Fixer l'obstacle attire la moto vers lui. Il faut porter le regard vers l'espace libre où l'on veut passer.",
      "difficulte": 2
    },
    {
      "id": "RTE-0025",
      "theme": "route",
      "enonce": "Dans une rue étroite, un bus arrive en face. Que dois-je faire ?",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Je ralentis." },
        { "id": "b", "texte": "Je serre à droite." },
        { "id": "c", "texte": "Je klaxonne pour qu'il s'arrête." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Je ralentis (A) et je serre à droite (B) pour laisser passer le bus en sécurité, quitte à m'arrêter. Klaxonner (C) est inutile et n'élargit pas la rue.",
      "difficulte": 1
    },
    {
      "id": "RTE-0026",
      "theme": "route",
      "enonce": "Pour bien aborder un virage à gauche, je me place sur la partie droite de ma voie :",
      "media": "images/virage-gauche-trajectoire.svg",
      "propositions": [
        { "id": "a", "texte": "Oui, pour améliorer la visibilité et ouvrir le virage." },
        { "id": "b", "texte": "Non, je reste collé à l'axe central." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : se placer à droite de sa voie avant un virage à gauche augmente le champ de vision et éloigne du trafic venant en face. On évite de coller la ligne axiale.",
      "difficulte": 2
    },
    {
      "id": "RTE-0027",
      "theme": "route",
      "enonce": "Le sol peut être glissant à proximité d'une station-service :",
      "media": "images/station-service.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : traces d'hydrocarbures, de gasoil ou d'huile rendent le sol glissant aux abords d'une station-service. La vigilance s'impose, surtout en manœuvre.",
      "difficulte": 1
    },
    {
      "id": "RTE-0028",
      "theme": "route",
      "enonce": "Je reste vigilant sur l'endroit où je stationne ma moto et où je pose mon pied d'appui :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un sol gras, meuble ou en pente peut faire glisser le pied ou basculer la moto. On choisit un appui stable et propre.",
      "difficulte": 1
    },
    {
      "id": "RTE-0029",
      "theme": "route",
      "enonce": "Plus la moto est inclinée en courbe, plus le corps du motard est positionné :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À l'intérieur de la courbe." },
        { "id": "b", "texte": "À l'extérieur de la courbe." }
      ],
      "bonnesReponses": ["a"],
      "explication": "À l'intérieur (A) : en déplaçant son buste vers l'intérieur du virage, le motard limite l'angle d'inclinaison de la moto et garde de la marge d'adhérence.",
      "difficulte": 2
    },
    {
      "id": "RTE-0030",
      "theme": "route",
      "enonce": "Une voie d'insertion me permet notamment d'effectuer plusieurs contrôles en vision directe :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la voie d'insertion sert à prendre de la vitesse et à réaliser des contrôles directs (coup d'œil par-dessus l'épaule, dans l'angle mort) avant de se rabattre.",
      "difficulte": 2
    },
    {
      "id": "RTE-0031",
      "theme": "route",
      "enonce": "Lors d'un arrêt à moto, seul le pied droit peut être posé au sol :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : on pose généralement le pied gauche au sol et on garde le pied droit sur la pédale de frein arrière pour stabiliser la moto. Il n'y a pas d'obligation de poser le pied droit.",
      "difficulte": 2
    },
    {
      "id": "RTE-0032",
      "theme": "route",
      "enonce": "Un motard parcourt en moyenne, chaque année :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Environ 4 000 km." },
        { "id": "b", "texte": "Environ 10 000 km." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Environ 4 000 km par an (A) : la moto est souvent un véhicule de loisir ou d'appoint, d'où un kilométrage annuel moyen bien inférieur à celui d'une voiture.",
      "difficulte": 2
    },

    /* ---------- LE CONDUCTEUR (PERCEPTION) ---------- */
    {
      "id": "CND-0012",
      "theme": "conducteur",
      "enonce": "La vision centrale permet :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "De voir loin et de façon précise." },
        { "id": "b", "texte": "De voir sur une grande largeur." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La vision centrale est nette et précise mais étroite (A) : elle sert à lire les détails au loin. La vision périphérique, elle, couvre une grande largeur mais reste floue.",
      "difficulte": 2
    },
    {
      "id": "CND-0013",
      "theme": "conducteur",
      "enonce": "La propreté de mon casque (visière) influence l'évaluation des distances :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une visière sale, rayée ou embuée déforme la vision et fausse l'appréciation des distances et des vitesses. On la garde propre et en bon état.",
      "difficulte": 1
    },
    {
      "id": "CND-0014",
      "theme": "conducteur",
      "enonce": "La propreté de ma visière influence aussi la perception des risques :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une visière dégradée masque des indices (piéton, obstacle, véhicule) et retarde la détection du danger, donc dégrade la perception des risques.",
      "difficulte": 1
    },
    {
      "id": "CND-0015",
      "theme": "conducteur",
      "enonce": "Je suis autorisé à conduire une moto si mon champ visuel binoculaire horizontal est au moins de :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "60°." },
        { "id": "b", "texte": "80°." },
        { "id": "c", "texte": "120°." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Le champ visuel binoculaire horizontal minimal exigé pour conduire est de 120° (C). En dessous, l'aptitude médicale à la conduite n'est pas remplie.",
      "difficulte": 3
    },

    /* ---------- LES AUTRES USAGERS ---------- */
    {
      "id": "USG-0009",
      "theme": "usagers",
      "enonce": "La solidarité entre motards est plus importante que celle entre automobilistes :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, le partage de la route et l'entraide valent pour tous." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : la courtoisie, la vigilance et l'entraide concernent tous les usagers de la route. Aucune catégorie n'a une solidarité « supérieure » aux autres.",
      "difficulte": 2
    },

    /* ---------- MÉCANIQUE ET VÉRIFICATIONS ---------- */
    {
      "id": "MEC-0044",
      "theme": "mecanique",
      "enonce": "L'avertisseur sonore (klaxon) est un accessoire de sécurité :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : le klaxon permet de signaler sa présence et de prévenir un danger. Il fait partie des organes de sécurité à vérifier régulièrement.",
      "difficulte": 1
    },
    {
      "id": "MEC-0045",
      "theme": "mecanique",
      "enonce": "Le klaxon permet d'avertir les autres usagers d'un danger hors agglomération :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : hors agglomération, le klaxon peut être utilisé pour avertir d'un danger ou annoncer un dépassement. En agglomération, il est réservé au danger immédiat.",
      "difficulte": 2
    },
    {
      "id": "MEC-0046",
      "theme": "mecanique",
      "enonce": "Un feu de croisement éclaire la route à une distance minimale de :",
      "media": "images/portee-feux.svg",
      "propositions": [
        { "id": "a", "texte": "30 mètres." },
        { "id": "b", "texte": "100 mètres." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le feu de croisement éclaire environ 30 mètres (A), sans éblouir les usagers venant en face. Le feu de route, lui, porte à environ 100 mètres.",
      "difficulte": 2
    },
    {
      "id": "MEC-0047",
      "theme": "mecanique",
      "enonce": "Dans la notice du constructeur, je peux trouver le type de carburant à utiliser :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la notice (manuel du propriétaire) précise le carburant, les pressions de pneus, les niveaux et les périodicités d'entretien propres au modèle.",
      "difficulte": 1
    },
    {
      "id": "MEC-0048",
      "theme": "mecanique",
      "enonce": "Sur un pneu, le repère qui indique l'emplacement du témoin d'usure est :",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        { "id": "a", "texte": "Le marquage « TWI » (ou un petit triangle) sur le flanc du pneu." },
        { "id": "b", "texte": "Une flèche peinte en blanc sur la bande de roulement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Le marquage « TWI » ou un petit triangle sur le flanc (A) indique l'emplacement du témoin d'usure : un petit bloc de gomme situé au fond des rainures. Quand la gomme arrive à son niveau, le pneu doit être remplacé.",
      "difficulte": 2
    },
    {
      "id": "MEC-0049",
      "theme": "mecanique",
      "enonce": "Le niveau du liquide de frein avant se contrôle réservoir à l'horizontale :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : pour une lecture fiable, on place le bocal (sur le guidon) à l'horizontale, moto droite, avant de comparer le niveau aux repères MIN/MAX.",
      "difficulte": 2
    },
    {
      "id": "MEC-0050",
      "theme": "mecanique",
      "enonce": "On reconnaît qu'une moto est équipée de l'ABS à la présence d'une couronne dentée (capteur) près du disque de frein :",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la couronne dentée (cible) lue par un capteur près du disque, et le témoin ABS au tableau de bord, signalent un système ABS, qui empêche le blocage des roues au freinage.",
      "difficulte": 2
    },
    {
      "id": "MEC-0051",
      "theme": "mecanique",
      "enonce": "La distance de freinage peut être allongée par des amortisseurs usés :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : des amortisseurs usés dégradent le contact du pneu avec le sol (la roue rebondit), ce qui réduit l'adhérence et allonge la distance de freinage.",
      "difficulte": 2
    },
    {
      "id": "MEC-0052",
      "theme": "mecanique",
      "enonce": "Une bulle (saute-vent) sur la moto contribue à réduire la fatigue du motard :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la bulle dévie le flux d'air, réduit la pression du vent sur le buste et le bruit, ce qui diminue la fatigue, surtout sur longs trajets et à vitesse élevée.",
      "difficulte": 1
    },
    {
      "id": "MEC-0053",
      "theme": "mecanique",
      "enonce": "Je vérifie régulièrement la fourche avant de ma moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la fourche fait partie des organes de sécurité (suspension, direction, freinage). On contrôle son état et l'absence de fuite d'huile.",
      "difficulte": 1
    },
    {
      "id": "MEC-0054",
      "theme": "mecanique",
      "enonce": "Pour être en bon état, les tubes de fourche doivent être :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Secs." },
        { "id": "b", "texte": "Huileux." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Secs (A) : des tubes de fourche gras ou huileux trahissent une fuite des joints spi. La suspension perd alors de son efficacité et l'huile peut souiller le frein.",
      "difficulte": 2
    },
    {
      "id": "MEC-0055",
      "theme": "mecanique",
      "enonce": "Sans bouchons de valve, mes pneus risquent de se dégonfler plus facilement :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : le bouchon protège la valve des poussières et de l'humidité et limite les fuites d'air. Sans lui, le risque de dégonflage lent augmente.",
      "difficulte": 2
    },
    {
      "id": "MEC-0056",
      "theme": "mecanique",
      "enonce": "Un point dur dans la direction diminue la capacité d'accélération de ma moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : un point dur dans la direction affecte la maniabilité et la sécurité (roulements de direction), mais pas l'accélération, qui dépend du moteur et de la transmission.",
      "difficulte": 2
    },

    /* ---------- ÉQUIPEMENTS DE PROTECTION ---------- */
    {
      "id": "EQP-0021",
      "theme": "equipements",
      "enonce": "Des bottes homologuées sont obligatoires pour circuler à moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, mais elles sont fortement recommandées." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : seuls le casque homologué et les gants certifiés CE sont obligatoires. Les bottes (comme le blouson) sont vivement recommandées mais pas imposées par la loi.",
      "difficulte": 2
    },
    {
      "id": "EQP-0022",
      "theme": "equipements",
      "enonce": "Un casque a une durée de vie limitée :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : les matériaux vieillissent (environ 5 ans selon les fabricants). Un casque ayant subi un choc, même sans trace visible, doit être remplacé.",
      "difficulte": 1
    },
    {
      "id": "EQP-0023",
      "theme": "equipements",
      "enonce": "Le réglage des rétroviseurs se fait moteur arrêté, assis sur la moto en position de conduite :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, on les règle en roulant." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on règle les rétroviseurs à l'arrêt, installé en position de conduite, pour obtenir le bon champ de vision arrière. Les régler en roulant (B) est dangereux.",
      "difficulte": 1
    },
    {
      "id": "EQP-0024",
      "theme": "equipements",
      "enonce": "Transporter des objets rigides dans un sac à dos est interdit :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : ce n'est pas interdit par la loi. En revanche, c'est déconseillé car dangereux en cas de chute (voir question suivante).",
      "difficulte": 2
    },
    {
      "id": "EQP-0025",
      "theme": "equipements",
      "enonce": "Transporter des objets rigides dans un sac à dos est dangereux :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : en cas de chute, un objet rigide dans le dos peut provoquer de graves blessures (colonne vertébrale). Mieux vaut un top-case ou des sacoches.",
      "difficulte": 1
    },
    {
      "id": "EQP-0026",
      "theme": "equipements",
      "enonce": "En cas de forte décélération, le poids d'un casque peut entraîner des lésions cervicales chez un jeune enfant :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : les cervicales d'un jeune enfant sont fragiles ; le poids du casque lors d'un choc ou d'un freinage brutal peut les léser. Le transport d'enfants à moto demande une grande prudence.",
      "difficulte": 2
    },
    {
      "id": "EQP-0027",
      "theme": "equipements",
      "enonce": "Mon casque est sale, je le nettoie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Avec ma main." },
        { "id": "b", "texte": "Avec un chiffon doux et humide." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Avec un chiffon doux et humide (B), sans produit agressif ni solvant qui abîmeraient la visière. La main (A) risque de rayer la visière avec des poussières.",
      "difficulte": 1
    },

    /* ---------- PREMIERS SECOURS ---------- */
    {
      "id": "SEC-0017",
      "theme": "secours",
      "enonce": "En cas de panne ou d'accident sur le bord de la route, je suis plus en sécurité :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "À côté de ma moto." },
        { "id": "b", "texte": "Derrière la glissière de sécurité." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Derrière la glissière de sécurité (B) : on se met à l'abri d'un éventuel sur-accident. Rester près de la moto sur la chaussée (A) est dangereux.",
      "difficulte": 1
    },
    {
      "id": "SEC-0018",
      "theme": "secours",
      "enonce": "Premier sur le lieu d'un accident impliquant une moto, j'actionne le bouton coupe-circuit de celle-ci :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : couper le contact (coupe-circuit) arrête le moteur et limite le risque d'incendie. C'est un geste de protection à faire avant d'alerter et de secourir.",
      "difficulte": 2
    },

    /* ---------- ENVIRONNEMENT ET ÉCO-CONDUITE ---------- */
    {
      "id": "ENV-0006",
      "theme": "environnement",
      "enonce": "Il est préférable d'équiper sa moto ou son scooter avec des pneus « verts » (basse résistance au roulement) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : les pneus « verts » réduisent la résistance au roulement, donc la consommation de carburant et les émissions, tout en conservant l'adhérence.",
      "difficulte": 2
    },
    {
      "id": "ENV-0007",
      "theme": "environnement",
      "enonce": "Un motard adoptant une conduite agressive et sportive économise du carburant :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui, il arrive plus vite à destination." },
        { "id": "b", "texte": "Oui, il maîtrise bien sa moto." },
        { "id": "c", "texte": "Non, au contraire." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Non, au contraire (C) : accélérations brutales et fortes vitesses augmentent nettement la consommation. Une conduite souple et anticipée est la plus économe.",
      "difficulte": 1
    },

    /* ---------- SIGNALISATION ---------- */
    {
      "id": "SIG-0033",
      "theme": "signalisation",
      "enonce": "Hors agglomération, un panneau de danger (triangulaire) est généralement implanté :",
      "media": "images/danger-generique.svg",
      "propositions": [
        { "id": "a", "texte": "À environ 50 mètres du danger." },
        { "id": "b", "texte": "À l'endroit exact du danger." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Hors agglomération, le panneau de danger est implanté le plus souvent à environ 50 m du danger qu'il annonce (A), laissant le temps d'adapter sa conduite. En agglomération, il est placé juste avant le danger.",
      "difficulte": 2
    },

    /* ========== LOT 2026-06-28 (questions originales, tous thèmes) ========== */

    /* ---------- MÉCANIQUE ET VÉRIFICATIONS ---------- */
    {
      "id": "MEC-0057",
      "theme": "mecanique",
      "enonce": "Lors du remplissage du réservoir d'essence, je coupe le moteur :",
      "media": "images/station-service.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on coupe le moteur avant de faire le plein. Une étincelle ou la chaleur du moteur près des vapeurs d'essence présente un risque d'incendie.",
      "difficulte": 1
    },
    {
      "id": "MEC-0058",
      "theme": "mecanique",
      "enonce": "Lors du remplissage du réservoir d'essence, j'éteins ma cigarette :",
      "media": "images/station-service.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : toute flamme ou braise est interdite près d'une pompe à carburant. Les vapeurs d'essence sont très inflammables.",
      "difficulte": 1
    },
    {
      "id": "MEC-0059",
      "theme": "mecanique",
      "enonce": "Je vérifie régulièrement l'usure des plaquettes et des disques de frein :",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : plaquettes et disques sont des organes de sécurité. Des plaquettes trop usées ou un disque rayé/voilé allongent la distance de freinage.",
      "difficulte": 1
    },
    {
      "id": "MEC-0060",
      "theme": "mecanique",
      "enonce": "Sur la roue avant, la grande pièce métallique percée sur laquelle viennent serrer les plaquettes est :",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        { "id": "a", "texte": "Le disque de frein." },
        { "id": "b", "texte": "La couronne de l'ABS." }
      ],
      "bonnesReponses": ["a"],
      "explication": "C'est le disque de frein (A) : les plaquettes, logées dans l'étrier, viennent le pincer. La couronne d'ABS est une petite pièce dentée lue par un capteur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0061",
      "theme": "mecanique",
      "enonce": "Un manque d'huile moteur entraîne :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Une surchauffe du moteur." },
        { "id": "b", "texte": "Une absence de freinage." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Une surchauffe du moteur (A) : l'huile lubrifie et refroidit les pièces en mouvement. Le freinage, lui, dépend du liquide de frein, pas de l'huile moteur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0062",
      "theme": "mecanique",
      "enonce": "Un scooter est généralement équipé d'une transmission automatique (sans levier d'embrayage à actionner) :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la plupart des scooters utilisent un variateur (transmission automatique), sans levier d'embrayage ni sélecteur de vitesses.",
      "difficulte": 1
    },
    {
      "id": "MEC-0063",
      "theme": "mecanique",
      "enonce": "Une boîte de vitesses automatique dispense d'utiliser un levier d'embrayage et un sélecteur de vitesses :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : avec une transmission automatique, le passage des rapports se fait seul ; il n'y a ni embrayage ni sélecteur à manœuvrer.",
      "difficulte": 1
    },
    {
      "id": "MEC-0064",
      "theme": "mecanique",
      "enonce": "L'étiquette européenne d'un pneu permet notamment de connaître le bruit de roulement qu'il émet :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : l'étiquette européenne renseigne sur l'adhérence sur sol mouillé, l'efficacité énergétique (consommation) et le bruit de roulement émis.",
      "difficulte": 2
    },
    {
      "id": "MEC-0065",
      "theme": "mecanique",
      "enonce": "Une trace d'huile est visible sur la fourche de ma moto. Il est nécessaire de consulter un professionnel :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une trace d'huile signale une fuite d'un joint de fourche. Il faut faire intervenir un professionnel ; la suspension et la sécurité sont en jeu.",
      "difficulte": 1
    },
    {
      "id": "MEC-0066",
      "theme": "mecanique",
      "enonce": "Une fuite d'huile sur la fourche peut avoir des conséquences sur le freinage de ma moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : l'huile peut couler sur le disque ou la plaquette de frein avant et réduire fortement leur efficacité. La suspension dégradée nuit aussi au freinage.",
      "difficulte": 2
    },
    {
      "id": "MEC-0067",
      "theme": "mecanique",
      "enonce": "Généralement, la chaîne de transmission d'une moto doit avoir un débattement (jeu) d'environ :",
      "media": "images/photo-chaine-moto.jpg",
      "propositions": [
        { "id": "a", "texte": "25 à 35 mm." },
        { "id": "b", "texte": "55 à 65 mm." },
        { "id": "c", "texte": "85 à 95 mm." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Environ 25 à 35 mm (A) : trop tendue, la chaîne s'use et force sur les roulements ; trop détendue, elle peut sauter. On se réfère à la notice du constructeur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0068",
      "theme": "mecanique",
      "enonce": "Lorsque j'actionne le contact de ma moto, tous les voyants s'allument :",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à la mise du contact, les voyants s'allument brièvement (auto-test). S'ils ne s'allument pas, une ampoule témoin peut être défaillante.",
      "difficulte": 2
    },
    {
      "id": "MEC-0069",
      "theme": "mecanique",
      "enonce": "Le feu Stop de ma moto s'allume lorsque j'actionne le levier de frein avant :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : le feu Stop est commandé par les deux freins. Actionner le levier de frein avant l'allume.",
      "difficulte": 1
    },
    {
      "id": "MEC-0070",
      "theme": "mecanique",
      "enonce": "Le feu Stop de ma moto s'allume aussi lorsque j'actionne la pédale de frein arrière :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un contacteur sur le frein arrière (pédale) allume aussi le feu Stop. Les deux commandes de frein déclenchent le feu.",
      "difficulte": 1
    },
    {
      "id": "MEC-0071",
      "theme": "mecanique",
      "enonce": "À vitesse identique et sur sol sec, une voiture freine généralement sur une distance plus courte qu'une moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la voiture dispose de quatre pneus et d'une surface de contact totale supérieure, ce qui lui donne en général une meilleure capacité de freinage que la moto.",
      "difficulte": 2
    },
    {
      "id": "MEC-0072",
      "theme": "mecanique",
      "enonce": "L'appoint de liquide de refroidissement se fait moteur froid :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on fait l'appoint moteur froid. Le circuit est alors sans pression, ce qui évite les projections de liquide brûlant.",
      "difficulte": 2
    },
    {
      "id": "MEC-0073",
      "theme": "mecanique",
      "enonce": "L'appoint de liquide de refroidissement se fait moteur chaud :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : moteur chaud, le circuit est sous pression et le liquide brûlant. Ouvrir le bouchon expose à de graves brûlures. On attend que le moteur refroidisse.",
      "difficulte": 2
    },
    {
      "id": "MEC-0074",
      "theme": "mecanique",
      "enonce": "Le sous-gonflage d'un pneu entraîne notamment une surconsommation de carburant :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un pneu sous-gonflé augmente la résistance au roulement, donc la consommation. Il s'use aussi plus vite et chauffe davantage.",
      "difficulte": 2
    },
    {
      "id": "MEC-0075",
      "theme": "mecanique",
      "enonce": "Le sous-gonflage d'un pneu entraîne une augmentation du risque de chute :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un pneu sous-gonflé dégrade la tenue de route, la stabilité et la précision en virage, ce qui augmente le risque de chute.",
      "difficulte": 2
    },

    /* ---------- LA ROUTE ET LES RISQUES DE CONDUITE ---------- */
    {
      "id": "RTE-0033",
      "theme": "route",
      "enonce": "Même à l'arrêt (à un feu, un stop), je continue de contrôler derrière moi :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à l'arrêt, un véhicule peut arriver trop vite par l'arrière. Surveiller ses rétroviseurs permet de réagir (s'écarter) et d'éviter d'être percuté.",
      "difficulte": 2
    },
    {
      "id": "RTE-0034",
      "theme": "route",
      "enonce": "À l'arrêt, je maintiens mon frein pour que le feu Stop reste allumé :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : garder le frein actionné maintient le feu Stop allumé et me rend plus visible des véhicules qui arrivent derrière.",
      "difficulte": 2
    },
    {
      "id": "RTE-0035",
      "theme": "route",
      "enonce": "Je règle l'itinéraire sur mon GPS :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Avant mon départ." },
        { "id": "b", "texte": "Pendant que je circule." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Avant mon départ (A) : manipuler un GPS en roulant détourne le regard et les mains. On programme l'itinéraire à l'arrêt.",
      "difficulte": 1
    },
    {
      "id": "RTE-0036",
      "theme": "route",
      "enonce": "La chaussée des carrefours à sens giratoire est toujours en dévers extérieur :",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : le dévers d'un giratoire varie d'un aménagement à l'autre. Le mot « toujours » est faux : on reste prudent car le dévers peut surprendre.",
      "difficulte": 3
    },
    {
      "id": "RTE-0037",
      "theme": "route",
      "enonce": "Dans près de 40 % des accidents mortels à moto, aucun tiers n'est impliqué :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une grande part des accidents mortels à moto sont des pertes de contrôle seul en cause (vitesse, trajectoire). D'où l'importance d'adapter son allure.",
      "difficulte": 2
    },
    {
      "id": "RTE-0038",
      "theme": "route",
      "enonce": "À une intersection, un facteur fréquent d'accident est la confiance excessive dans son régime de priorité :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : être prioritaire ne garantit pas que l'autre cédera le passage. Compter aveuglément sur sa priorité, surtout à moto où l'on est peu visible, est dangereux.",
      "difficulte": 2
    },
    {
      "id": "RTE-0039",
      "theme": "route",
      "enonce": "Les hommes représentent environ 96 % des conducteurs de moto tués :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la très grande majorité des motards tués sont des hommes (environ 96 %). La vigilance et une conduite adaptée concernent tout le monde.",
      "difficulte": 2
    },
    {
      "id": "RTE-0040",
      "theme": "route",
      "enonce": "Je souhaite faire demi-tour dans un giratoire, je me positionne :",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        { "id": "a", "texte": "À l'intérieur de l'anneau." },
        { "id": "b", "texte": "À l'extérieur de l'anneau." }
      ],
      "bonnesReponses": ["a"],
      "explication": "À l'intérieur de l'anneau (A) : pour ressortir à l'opposé (demi-tour), on se place sur la voie intérieure, puis on rejoint la sortie en surveillant ses angles morts.",
      "difficulte": 2
    },
    {
      "id": "RTE-0041",
      "theme": "route",
      "enonce": "Pour faire demi-tour dans un giratoire, j'actionne le clignotant gauche immédiatement (dès l'entrée) :",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on indique son intention de tourner/contourner avec le clignotant gauche dès l'entrée, puis on met le clignotant droit juste avant de sortir.",
      "difficulte": 2
    },
    {
      "id": "RTE-0042",
      "theme": "route",
      "enonce": "Rouler en roue arrière (« wheeling ») rend impossible le contrôle de la trajectoire :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : roue avant en l'air, on ne peut plus diriger ni freiner correctement. C'est une manœuvre dangereuse et interdite sur la voie publique.",
      "difficulte": 1
    },
    {
      "id": "RTE-0043",
      "theme": "route",
      "enonce": "Ce comportement (rodéo motorisé sur la voie publique) peut exposer le motard à une amende pouvant atteindre 15 000 € :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : le rodéo motorisé est un délit, puni jusqu'à 1 an de prison et 15 000 € d'amende, avec confiscation possible du véhicule.",
      "difficulte": 2
    },

    /* ---------- ÉQUIPEMENTS DE PROTECTION ---------- */
    {
      "id": "EQP-0028",
      "theme": "equipements",
      "enonce": "Je transporte des objets rigides de préférence :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Dans un sac à dos." },
        { "id": "b", "texte": "Dans une sacoche ou un top-case de moto." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Dans une sacoche ou un top-case (B) : un objet rigide dans un sac à dos peut blesser gravement le dos en cas de chute. On le range plutôt sur la moto.",
      "difficulte": 1
    },
    {
      "id": "EQP-0029",
      "theme": "equipements",
      "enonce": "Mon trajet dure plusieurs heures. Je peux utiliser des bouchons d'oreilles spécifiques pour améliorer ma concentration :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : des bouchons adaptés atténuent le bruit du vent (qui peut dépasser 100 dB) tout en laissant percevoir l'environnement, ce qui aide à rester concentré.",
      "difficulte": 2
    },
    {
      "id": "EQP-0030",
      "theme": "equipements",
      "enonce": "Sur un long trajet, les bouchons d'oreilles spécifiques aident à diminuer ma fatigue :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : l'exposition prolongée au bruit du vent est très fatigante. Réduire ce bruit limite la fatigue et préserve l'audition.",
      "difficulte": 1
    },
    {
      "id": "EQP-0031",
      "theme": "equipements",
      "enonce": "Une bonne ergonomie des différentes commandes améliore mon confort :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : des commandes bien réglées et accessibles (leviers, poignées, sélecteur) limitent la fatigue et rendent la conduite plus agréable.",
      "difficulte": 1
    },
    {
      "id": "EQP-0032",
      "theme": "equipements",
      "enonce": "Une bonne ergonomie des différentes commandes améliore aussi ma sécurité :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : des commandes bien positionnées permettent des réactions plus rapides et précises (freinage, embrayage), ce qui améliore la sécurité.",
      "difficulte": 1
    },
    {
      "id": "EQP-0033",
      "theme": "equipements",
      "enonce": "Lors de l'épreuve pratique du permis moto, je peux porter :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un blouson à manches courtes." },
        { "id": "b", "texte": "Un blouson à manches longues." },
        { "id": "c", "texte": "Des bottes montantes en cuir." },
        { "id": "d", "texte": "Des bottes montantes en caoutchouc." }
      ],
      "bonnesReponses": ["b", "c"],
      "explication": "Sont exigés un équipement couvrant et protecteur : blouson à manches longues (B) et bottes montantes en cuir (C, ou matière équivalente protégeant la cheville). Manches courtes (A) et bottes en caoutchouc (D) ne sont pas adaptées.",
      "difficulte": 2
    },

    /* ---------- DOCUMENTS ET INFRACTIONS ---------- */
    {
      "id": "DOC-0016",
      "theme": "documents",
      "enonce": "L'assurance responsabilité civile est obligatoire :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : tout véhicule terrestre à moteur doit être assuré au minimum en responsabilité civile (« au tiers »). Rouler sans assurance est un délit.",
      "difficulte": 1
    },
    {
      "id": "DOC-0017",
      "theme": "documents",
      "enonce": "L'assurance responsabilité civile couvre les dégâts corporels et matériels causés à des tiers :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la responsabilité civile indemnise les dommages causés aux autres. En revanche, elle ne couvre pas mes propres dommages : il faut pour cela une garantie complémentaire.",
      "difficulte": 2
    },
    {
      "id": "DOC-0018",
      "theme": "documents",
      "enonce": "Le permis AM (anciennement BSR) est accessible dès l'âge de :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "14 ans." },
        { "id": "b", "texte": "15 ans." },
        { "id": "c", "texte": "16 ans." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Dès 14 ans (A) : le permis AM permet de conduire un cyclomoteur (50 cm³) ou un quadricycle léger. La moto (permis A1) n'est accessible qu'à partir de 16 ans.",
      "difficulte": 2
    },
    {
      "id": "DOC-0019",
      "theme": "documents",
      "enonce": "Je perds au maximum 6 points en ne commettant qu'une seule infraction :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une seule infraction fait perdre au maximum 6 points, même si elle en cumule plusieurs. Au-delà, c'est qu'il s'agit de plusieurs infractions.",
      "difficulte": 2
    },
    {
      "id": "DOC-0020",
      "theme": "documents",
      "enonce": "Le permis de conduire probatoire possède un capital initial de :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "3 points." },
        { "id": "b", "texte": "6 points." }
      ],
      "bonnesReponses": ["b"],
      "explication": "6 points (B) au départ. Le permis monte progressivement jusqu'à 12 points si aucune infraction n'est commise pendant la période probatoire.",
      "difficulte": 1
    },
    {
      "id": "DOC-0021",
      "theme": "documents",
      "enonce": "Sans infraction, le capital de points du permis probatoire (filière classique) augmente chaque année de :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "2 points." },
        { "id": "b", "texte": "3 points." }
      ],
      "bonnesReponses": ["a"],
      "explication": "2 points par an (A) en filière classique (sur 3 ans : 6 → 8 → 10 → 12). En conduite accompagnée, c'est 3 points par an sur 2 ans.",
      "difficulte": 2
    },
    {
      "id": "DOC-0022",
      "theme": "documents",
      "enonce": "En cas de changement de domicile, je dispose d'un délai d'un mois pour faire modifier le certificat d'immatriculation de ma moto :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on dispose d'un mois pour déclarer son changement d'adresse sur le certificat d'immatriculation (carte grise). C'est gratuit pour les trois premiers changements.",
      "difficulte": 2
    },

    /* ---------- LES AUTRES USAGERS ---------- */
    {
      "id": "USG-0010",
      "theme": "usagers",
      "enonce": "Je roule longuement à hauteur de la portière arrière d'une voiture : je risque de me trouver dans son angle mort :",
      "media": "images/angle-mort.svg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à hauteur de la portière arrière, je suis souvent invisible dans les rétroviseurs du conducteur. C'est une zone d'angle mort où il ne faut pas s'attarder.",
      "difficulte": 1
    },
    {
      "id": "USG-0011",
      "theme": "usagers",
      "enonce": "Me trouvant dans l'angle mort d'un véhicule, je maintiens ma position par rapport à lui :",
      "media": "images/angle-mort.svg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : il faut sortir de l'angle mort, soit en accélérant pour dépasser, soit en ralentissant pour se replacer derrière, afin de redevenir visible.",
      "difficulte": 2
    },
    {
      "id": "USG-0012",
      "theme": "usagers",
      "enonce": "À une intersection, je peux être certain qu'un automobiliste qui arrive a bien détecté ma présence :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : à moto, on est peu visible et facilement masqué. On ne présume jamais avoir été vu : on garde une marge de sécurité et on est prêt à réagir.",
      "difficulte": 2
    },
    {
      "id": "USG-0013",
      "theme": "usagers",
      "enonce": "Dans le doute sur le fait d'avoir été vu par un autre conducteur, je ralentis :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : ralentir me laisse le temps de réagir si l'autre s'engage. C'est le bon réflexe quand je ne suis pas sûr d'avoir été détecté.",
      "difficulte": 1
    },
    {
      "id": "USG-0014",
      "theme": "usagers",
      "enonce": "Un agent règle la circulation près d'un passage pour piétons ; je dois m'arrêter :",
      "media": "images/photo-passage-pietons.jpg",
      "propositions": [
        { "id": "a", "texte": "À côté de l'agent." },
        { "id": "b", "texte": "Avant le passage pour les piétons." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Avant le passage pour les piétons (B) : on s'arrête en deçà du passage pour ne pas le bloquer ni gêner les piétons, et non à hauteur de l'agent.",
      "difficulte": 2
    },
    {
      "id": "USG-0015",
      "theme": "usagers",
      "enonce": "Une personne circulant à vélo ou à trottinette possède une zone d'incertitude (trajectoire imprévisible) plus grande qu'un piéton :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : plus rapide et sensible aux obstacles (nids-de-poule, portières), un cycliste ou un trottinettiste peut dévier brusquement. On lui laisse une marge plus large.",
      "difficulte": 2
    },
    {
      "id": "USG-0016",
      "theme": "usagers",
      "enonce": "Mon passager se tient de préférence avec :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Un bras au niveau de ma taille et la main de l'autre bras à la poignée." },
        { "id": "b", "texte": "Les deux mains à la poignée." },
        { "id": "c", "texte": "Les deux bras au niveau de ma taille." }
      ],
      "bonnesReponses": ["c"],
      "explication": "Les deux bras au niveau de ma taille (C) : c'est la position la plus sûre, qui assure une bonne tenue et permet d'anticiper accélérations et freinages, à défaut d'utiliser les poignées prévues.",
      "difficulte": 2
    },

    /* ---------- SIGNALISATION ET RÈGLES DE CIRCULATION ---------- */
    {
      "id": "SIG-0034",
      "theme": "signalisation",
      "enonce": "Pour tourner à droite à une intersection, je me place sur la partie droite de ma voie :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, je reste au milieu." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on se place à droite et on signale son intention (clignotant) à l'avance pour tourner à droite, en surveillant cyclistes et piétons.",
      "difficulte": 1
    },
    {
      "id": "SIG-0035",
      "theme": "signalisation",
      "enonce": "À un feu tricolore, je m'arrête au niveau :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "De la ligne d'effet des feux (ligne d'arrêt au sol)." },
        { "id": "b", "texte": "Du feu tricolore lui-même." }
      ],
      "bonnesReponses": ["a"],
      "explication": "De la ligne d'effet des feux (A) : c'est la ligne blanche tracée au sol qui marque l'endroit où s'arrêter, généralement en retrait du feu.",
      "difficulte": 2
    },
    {
      "id": "SIG-0036",
      "theme": "signalisation",
      "enonce": "Franchir une ligne continue pour effectuer un dépassement est :",
      "media": "images/ligne-continue.svg",
      "propositions": [
        { "id": "a", "texte": "Autorisé si la voie est libre." },
        { "id": "b", "texte": "Interdit." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Interdit (B) : la ligne continue ne doit être ni franchie ni chevauchée. Dépasser en la franchissant est une infraction, même voie libre.",
      "difficulte": 1
    },
    {
      "id": "SIG-0037",
      "theme": "signalisation",
      "enonce": "En dépassant par le franchissement d'une ligne continue, je risque :",
      "media": "images/ligne-continue.svg",
      "propositions": [
        { "id": "a", "texte": "Un retrait de points." },
        { "id": "b", "texte": "Une amende." },
        { "id": "c", "texte": "Aucune sanction si la voie est libre." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "A et B : franchir une ligne continue est sanctionné par une amende (135 €) ET un retrait de 3 points sur le permis. C'est une infraction même si la voie est libre (C est faux).",
      "difficulte": 2
    },

    /* ---------- ENVIRONNEMENT ET ÉCO-CONDUITE ---------- */
    {
      "id": "ENV-0008",
      "theme": "environnement",
      "enonce": "La propreté du radiateur évite une surconsommation de carburant :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : un radiateur encrassé refroidit mal le moteur, qui consomme alors davantage et s'use plus vite. Un bon refroidissement aide à maîtriser la consommation.",
      "difficulte": 2
    },
    {
      "id": "ENV-0009",
      "theme": "environnement",
      "enonce": "La vignette Crit'Air est obligatoire pour circuler :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "Uniquement dans certaines agglomérations ou certaines zones (ZFE)." },
        { "id": "b", "texte": "Dans toute la France." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Uniquement dans certaines zones (A) : la vignette Crit'Air est exigée dans les zones à faibles émissions (ZFE) et lors des pics de pollution. Elle n'est pas obligatoire partout.",
      "difficulte": 2
    },

    /* ---------- PREMIERS SECOURS ---------- */
    {
      "id": "SEC-0019",
      "theme": "secours",
      "enonce": "Témoin d'un accident corporel, après avoir sécurisé la zone, je préviens en premier lieu :",
      "media": null,
      "propositions": [
        { "id": "a", "texte": "La police ou la gendarmerie (ou les secours : 112)." },
        { "id": "b", "texte": "Un médecin généraliste." }
      ],
      "bonnesReponses": ["a"],
      "explication": "La police/gendarmerie ou les secours (A), via le 112, 15, 17 ou 18 : ils dépêchent les moyens adaptés. Appeler un médecin généraliste (B) ferait perdre un temps précieux.",
      "difficulte": 1
    },

    /* ========== LOT 2026-06-28 ILLUSTRÉ (SVG dessinés + photos sous licence libre, voir CREDITS.md) ========== */

    {
      "id": "SIG-0038",
      "theme": "signalisation",
      "enonce": "Vous arrivez devant ce panneau. Que signifie-t-il ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        { "id": "a", "texte": "Il annonce un carrefour à sens giratoire." },
        { "id": "b", "texte": "Je dois céder le passage aux usagers déjà engagés sur l'anneau." },
        { "id": "c", "texte": "J'ai la priorité sur les véhicules circulant sur l'anneau." }
      ],
      "bonnesReponses": ["a", "b"],
      "explication": "Ce panneau annonce un carrefour à sens giratoire (A). En l'absence d'indication contraire, je cède le passage à ceux qui sont déjà sur l'anneau (B). Je n'ai donc pas la priorité (C est faux).",
      "difficulte": 1
    },
    {
      "id": "SIG-0039",
      "theme": "signalisation",
      "enonce": "Ce panneau de danger signale :",
      "media": "images/danger-chaussee-glissante.svg",
      "propositions": [
        { "id": "a", "texte": "Une chaussée glissante." },
        { "id": "b", "texte": "Une zone de stationnement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "C'est le panneau « chaussée glissante » (A). À moto, on adapte sa vitesse et on évite les freinages ou accélérations brusques sur ce type de revêtement.",
      "difficulte": 1
    },
    {
      "id": "SIG-0040",
      "theme": "signalisation",
      "enonce": "Que m'annonce ce panneau ?",
      "media": "images/chaussee-retrecie.svg",
      "propositions": [
        { "id": "a", "texte": "Un rétrécissement de la chaussée." },
        { "id": "b", "texte": "Un élargissement de la chaussée." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Ce panneau annonce un rétrécissement de la chaussée (A). Je reste vigilant car la voie devient plus étroite et le croisement plus délicat.",
      "difficulte": 1
    },
    {
      "id": "SIG-0041",
      "theme": "signalisation",
      "enonce": "Devant ce panneau, quel comportement adopter ?",
      "media": "images/danger-travaux.svg",
      "propositions": [
        { "id": "a", "texte": "Ralentir et redoubler de prudence : il annonce des travaux." },
        { "id": "b", "texte": "Accélérer pour passer la zone au plus vite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Ce panneau annonce des travaux (A) : présence possible d'ouvriers, d'engins, de gravillons ou de boue. Je ralentis et reste prudent.",
      "difficulte": 1
    },
    {
      "id": "SIG-0042",
      "theme": "signalisation",
      "enonce": "Ce panneau m'avertit que je peux rencontrer :",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        { "id": "a", "texte": "Des cyclistes." },
        { "id": "b", "texte": "Des poids lourds uniquement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Ce panneau signale un endroit fréquenté par des cyclistes (A). Je laisse une marge latérale suffisante au dépassement et j'anticipe leurs trajectoires.",
      "difficulte": 1
    },
    {
      "id": "USG-0017",
      "theme": "usagers",
      "enonce": "Sur ce schéma, la moto (en bleu) se trouve dans une zone à risque par rapport à la voiture blanche :",
      "media": "images/angle-mort.svg",
      "propositions": [
        { "id": "a", "texte": "Oui, elle est dans un angle mort." },
        { "id": "b", "texte": "Non, le conducteur la voit parfaitement." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la moto est dans un angle mort (zones rouges), invisible dans les rétroviseurs. Il faut quitter cette zone en accélérant ou en ralentissant.",
      "difficulte": 1
    },
    {
      "id": "RTE-0044",
      "theme": "route",
      "enonce": "Cette trajectoire (en bleu) est conseillée pour aborder ce virage à gauche en sécurité :",
      "media": "images/virage-gauche-trajectoire.svg",
      "propositions": [
        { "id": "a", "texte": "Oui : je me place à l'extérieur, puis je serre la corde, puis je ressors à l'extérieur." },
        { "id": "b", "texte": "Non : je dois rester collé à la ligne axiale." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : entrer par l'extérieur améliore la visibilité, puis « serrer la corde » et ressortir large permet de garder une trajectoire fluide, loin du trafic venant en face.",
      "difficulte": 2
    },
    {
      "id": "MEC-0076",
      "theme": "mecanique",
      "enonce": "Sur ce tableau de bord, à la mise du contact, ces témoins s'allument brièvement :",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        { "id": "a", "texte": "Oui, c'est l'auto-test des voyants." },
        { "id": "b", "texte": "Non, cela signale forcément une panne." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à la mise du contact, les voyants s'allument un court instant (auto-test). S'ils restent allumés en roulant (ex. le rouge « ! » ou l'ABS), c'est le signe d'une anomalie.",
      "difficulte": 2
    },
    {
      "id": "SIG-0043",
      "theme": "signalisation",
      "enonce": "Sur ce schéma, la moto veut dépasser en franchissant la ligne centrale. Cette manœuvre est :",
      "media": "images/ligne-continue.svg",
      "propositions": [
        { "id": "a", "texte": "Autorisée si la voie d'en face est libre." },
        { "id": "b", "texte": "Interdite : la ligne est continue." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Interdite (B) : on ne franchit pas une ligne continue, même pour dépasser un véhicule lent. Il faut attendre une ligne discontinue et une visibilité suffisante.",
      "difficulte": 1
    },
    {
      "id": "MEC-0077",
      "theme": "mecanique",
      "enonce": "Sur ce schéma comparant les deux faisceaux, le feu de croisement éclaire environ :",
      "media": "images/portee-feux.svg",
      "propositions": [
        { "id": "a", "texte": "30 mètres." },
        { "id": "b", "texte": "100 mètres." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Environ 30 mètres (A) pour le feu de croisement, qui n'éblouit pas les usagers venant en face. Le feu de route, lui, porte à environ 100 mètres.",
      "difficulte": 2
    },
    {
      "id": "RTE-0045",
      "theme": "route",
      "enonce": "Pour quitter ce carrefour à sens giratoire, j'annonce ma sortie avec le clignotant droit et je me rabats vers la droite :",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, je sors sans signaler." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : on met le clignotant droit juste avant la sortie voulue et on se rabat en surveillant ses angles morts. Sortir sans signaler (B) surprend les autres usagers.",
      "difficulte": 1
    },
    {
      "id": "MEC-0078",
      "theme": "mecanique",
      "enonce": "Sur cette photo, cette moto est équipée d'une bulle (saute-vent) :",
      "media": "images/tableau-bord-moto-photo.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : la partie transparente devant le compteur est une bulle (saute-vent). Elle dévie le flux d'air, réduit le bruit et la fatigue sur les longs trajets.",
      "difficulte": 1
    },
    {
      "id": "RTE-0046",
      "theme": "route",
      "enonce": "Aux abords de cette station-service, le sol peut être glissant :",
      "media": "images/station-service.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : traces d'hydrocarbures et d'huile rendent le sol glissant. Je manœuvre doucement et je choisis un appui stable pour mon pied.",
      "difficulte": 1
    },

    /* ========== LOT 2026-06-28 PHOTOS RÉELLES (Wikimedia Commons, licences libres — voir CREDITS.md) ========== */

    {
      "id": "MEC-0079",
      "theme": "mecanique",
      "enonce": "Sur ce pneu, à quoi servent principalement les rainures (sculptures) ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        { "id": "a", "texte": "À évacuer l'eau pour garder l'adhérence sur sol mouillé." },
        { "id": "b", "texte": "À décorer le pneu, sans rôle pour la sécurité." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Les rainures évacuent l'eau (A) et conservent l'adhérence sous la pluie. Quand elles sont trop usées (témoin d'usure atteint), le pneu doit être remplacé.",
      "difficulte": 1
    },
    {
      "id": "MEC-0080",
      "theme": "mecanique",
      "enonce": "Sur cette roue avant, comment s'appelle la pièce métallique percée que viennent pincer les plaquettes ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        { "id": "a", "texte": "Le disque de frein." },
        { "id": "b", "texte": "La jante." },
        { "id": "c", "texte": "Le pneu." }
      ],
      "bonnesReponses": ["a"],
      "explication": "C'est le disque de frein (A), pincé par les plaquettes logées dans l'étrier (la pièce noire). La jante (B) supporte le pneu (C) ; ni l'une ni l'autre ne servent à freiner.",
      "difficulte": 1
    },
    {
      "id": "MEC-0081",
      "theme": "mecanique",
      "enonce": "Cette moto est entraînée par une transmission par chaîne. Celle-ci doit être régulièrement graissée et tendue :",
      "media": "images/photo-chaine-moto.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, elle ne demande aucun entretien." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : une chaîne mal graissée ou mal tendue s'use vite, peut sauter ou casser. On contrôle sa tension et sa lubrification régulièrement.",
      "difficulte": 1
    },
    {
      "id": "EQP-0034",
      "theme": "equipements",
      "enonce": "L'équipement porté par ce motard le protège-t-il correctement en cas de chute ?",
      "media": "images/photo-equipement.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui, il est bien protégé." },
        { "id": "b", "texte": "Non : casque ouvert, simple tee-shirt, pas de protection adaptée." }
      ],
      "bonnesReponses": ["b"],
      "explication": "Non (B) : casque « bol » sans protection du visage, tee-shirt et lunettes ne protègent pas en cas de chute. Il faudrait un casque couvrant, un blouson, des gants homologués, un pantalon et des bottes résistants.",
      "difficulte": 1
    },
    {
      "id": "RTE-0047",
      "theme": "route",
      "enonce": "Sur cette moto, ce feu de croisement avant doit rester allumé, même en plein jour :",
      "media": "images/photo-phare-moto.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, uniquement la nuit." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : à moto, l'allumage des feux est obligatoire de jour comme de nuit pour être vu le plus tôt possible par les autres usagers.",
      "difficulte": 1
    },
    {
      "id": "RTE-0048",
      "theme": "route",
      "enonce": "Dans une circulation aussi dense, quel comportement adopter ?",
      "media": "images/photo-circulation-file.jpg",
      "propositions": [
        { "id": "a", "texte": "Augmenter ma vigilance et anticiper les mouvements des autres." },
        { "id": "b", "texte": "Accélérer pour me dégager du trafic au plus vite." }
      ],
      "bonnesReponses": ["a"],
      "explication": "J'augmente ma vigilance et j'anticipe (A) : changements de file, piétons, ouvertures de portières sont fréquents. Accélérer (B) réduit le temps de réaction et augmente le danger.",
      "difficulte": 1
    },
    {
      "id": "USG-0018",
      "theme": "usagers",
      "enonce": "À l'approche de ce passage pour piétons, un piéton qui manifeste son intention de traverser est prioritaire :",
      "media": "images/photo-passage-pietons.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui, je dois lui céder le passage." },
        { "id": "b", "texte": "Non, c'est à lui d'attendre." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : je dois céder le passage au piéton engagé ou manifestant son intention de traverser. Je ralentis et m'arrête avant le passage si nécessaire.",
      "difficulte": 1
    },
    {
      "id": "USG-0019",
      "theme": "usagers",
      "enonce": "Pour dépasser ce cycliste en agglomération, quelle marge latérale dois-je laisser au minimum ?",
      "media": "images/photo-cycliste-ville.jpg",
      "propositions": [
        { "id": "a", "texte": "Au moins 1 mètre." },
        { "id": "b", "texte": "Au moins 1,50 mètre." },
        { "id": "c", "texte": "Aucune marge précise n'est exigée." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Au moins 1 mètre en agglomération (A) — et 1,50 m hors agglomération (B vaut pour la route, pas la ville). Une marge est toujours exigée (C est faux) : un cycliste peut dévier.",
      "difficulte": 2
    },
    {
      "id": "RTE-0049",
      "theme": "route",
      "enonce": "Sur une chaussée mouillée comme ici, j'augmente mes distances de sécurité :",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui." },
        { "id": "b", "texte": "Non, l'adhérence est la même que sur sol sec." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : sous la pluie, l'adhérence baisse et la distance de freinage s'allonge. J'augmente les distances, je freine en douceur et j'évite les marquages et plaques glissantes.",
      "difficulte": 1
    },
    {
      "id": "RTE-0050",
      "theme": "route",
      "enonce": "Dans ce brouillard, quel est le bon comportement ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        { "id": "a", "texte": "Ralentir et adapter mon allure à la visibilité réduite." },
        { "id": "b", "texte": "Maintenir ma vitesse habituelle." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Je ralentis (A) : la visibilité est fortement réduite. J'adapte mon allure pour pouvoir m'arrêter dans la distance que je vois, et j'utilise mes feux adaptés.",
      "difficulte": 1
    },
    {
      "id": "RTE-0051",
      "theme": "route",
      "enonce": "Sur cette route couverte de gravillons, mon adhérence est réduite :",
      "media": "images/photo-gravillons.jpg",
      "propositions": [
        { "id": "a", "texte": "Oui, je ralentis et j'évite les freinages et accélérations brusques." },
        { "id": "b", "texte": "Non, les gravillons n'ont aucun effet à moto." }
      ],
      "bonnesReponses": ["a"],
      "explication": "Oui (A) : les gravillons réduisent fortement l'adhérence, surtout en courbe. Je ralentis, je garde la moto droite autant que possible et j'évite les gestes brusques.",
      "difficulte": 1
    },

    /* ---------- SIGNALISATION ET RÈGLES DE CIRCULATION — ebook (56) ---------- */
    {
      "id": "SIG-0044",
      "theme": "signalisation",
      "enonce": "En circulant à moto, vous apercevez un panneau triangulaire, à fond blanc et bordé de rouge. Que devez-vous en conclure ?",
      "media": "images/danger-generique.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il vous informe d'un simple point d'intérêt touristique"
        },
        {
          "id": "b",
          "texte": "Il vous signale un danger particulier à venir sur la route"
        },
        {
          "id": "c",
          "texte": "Il vous impose une manœuvre obligatoire"
        },
        {
          "id": "d",
          "texte": "Il vous autorise à dépasser librement"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La forme triangulaire à bordure rouge est la signature des panneaux de danger : elle prévient d'un risque imminent (virage serré, chantier, chaussée glissante...) pour que vous adaptiez votre allure. Les autres propositions décrivent d'autres familles de panneaux : le carré bleu pour l'indication, le rond bleu pour l'obligation, et aucun panneau ne vaut autorisation formelle de dépasser.",
      "difficulte": 1
    },
    {
      "id": "SIG-0045",
      "theme": "signalisation",
      "enonce": "Concernant les panneaux qui interdisent une manœuvre (stationner, dépasser...), quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils sont toujours de forme triangulaire"
        },
        {
          "id": "b",
          "texte": "Ils se reconnaissent à leur forme ronde"
        },
        {
          "id": "c",
          "texte": "Leur contour est marqué par un bord rouge"
        },
        {
          "id": "d",
          "texte": "Ils donnent une information pratique, sans contrainte"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les panneaux d'interdiction sont ronds et bordés de rouge, ce qui les distingue des panneaux de danger (triangulaires) et des panneaux d'obligation (ronds mais à fond bleu, sans bord rouge). Ils imposent une véritable contrainte, contrairement aux panneaux d'indication qui se contentent d'informer.",
      "difficulte": 1
    },
    {
      "id": "SIG-0046",
      "theme": "signalisation",
      "enonce": "Un panneau rond, à fond bleu, portant un pictogramme blanc, signifie généralement...",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une simple information pour le conducteur"
        },
        {
          "id": "b",
          "texte": "Un danger à anticiper"
        },
        {
          "id": "c",
          "texte": "Une obligation à respecter"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le rond à fond bleu est la marque des panneaux d'obligation : il impose une action précise, comme une direction à suivre. Le danger se signale par un triangle à bord rouge, et l'information neutre relève des panneaux d'indication, de forme différente.",
      "difficulte": 1
    },
    {
      "id": "SIG-0047",
      "theme": "signalisation",
      "enonce": "À propos des panneaux qui donnent des informations pratiques (direction, services, aménagements), lesquelles de ces caractéristiques sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils sont le plus souvent carrés ou rectangulaires"
        },
        {
          "id": "b",
          "texte": "Leur fond est généralement bleu (ou vert sur autoroute)"
        },
        {
          "id": "c",
          "texte": "Ils sont toujours triangulaires et bordés de rouge"
        },
        {
          "id": "d",
          "texte": "Ils servent uniquement à interdire une manœuvre"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Les panneaux d'indication adoptent des formes carrées ou rectangulaires, avec un fond bleu en général (vert sur autoroute), pour renseigner sur les directions, services ou aménagements. La forme triangulaire bordée de rouge appartient aux panneaux de danger, et interdire une manœuvre est le rôle des panneaux ronds à bord rouge.",
      "difficulte": 2
    },
    {
      "id": "SIG-0048",
      "theme": "signalisation",
      "enonce": "Sur une aire d'autoroute, vous croisez un panneau bleu portant des pictogrammes blancs. Que peut-il vous annoncer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La présence d'une station-service à proximité"
        },
        {
          "id": "b",
          "texte": "Un point de restauration ou une aire de repos"
        },
        {
          "id": "c",
          "texte": "L'obligation de tourner à droite"
        },
        {
          "id": "d",
          "texte": "La fin du réseau autoroutier"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Ces panneaux bleus à pictogrammes blancs sont des panneaux d'indication : ils signalent les services accessibles sur l'aire, comme une station-service ou un point de restauration. Ils n'imposent aucune manœuvre, ce qui relèverait d'un panneau d'obligation rond et bleu, et ne concernent pas la fin de l'autoroute, annoncée par un panneau distinct.",
      "difficulte": 1
    },
    {
      "id": "SIG-0049",
      "theme": "signalisation",
      "enonce": "Une ligne blanche continue sépare deux voies de circulation sur votre trajet. Quelle est la règle à retenir ?",
      "media": "images/ligne-continue.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous pouvez la franchir pour dépasser un véhicule lent"
        },
        {
          "id": "b",
          "texte": "Le franchissement de cette ligne est interdit"
        },
        {
          "id": "c",
          "texte": "Elle indique seulement une limite de chantier"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une ligne blanche continue au sol interdit de la franchir ou de la chevaucher, notamment pour dépasser ou changer de voie, car elle marque une zone où cette manœuvre serait dangereuse. Seule une ligne discontinue autorise le franchissement lorsque la sécurité le permet.",
      "difficulte": 2
    },
    {
      "id": "SIG-0050",
      "theme": "signalisation",
      "enonce": "Vous repérez un marquage au sol en zigzag de couleur jaune. Comment devez-vous l'interpréter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le stationnement et l'arrêt y sont interdits"
        },
        {
          "id": "b",
          "texte": "Vous pouvez vous y arrêter quelques minutes"
        },
        {
          "id": "c",
          "texte": "C'est une zone réservée au dépassement"
        },
        {
          "id": "d",
          "texte": "Cela annonce un radar automatique"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le marquage en zigzag jaune signale une zone où l'arrêt et le stationnement sont interdits, le plus souvent à proximité d'un arrêt de bus ou d'un accès sensible, afin de préserver la visibilité et la fluidité. Il n'a aucun lien avec le dépassement ni avec un dispositif de contrôle de vitesse.",
      "difficulte": 2
    },
    {
      "id": "SIG-0051",
      "theme": "signalisation",
      "enonce": "Que pouvez-vous affirmer à juste titre sur les feux tricolores rencontrés à une intersection ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils servent à réguler la circulation au niveau du carrefour"
        },
        {
          "id": "b",
          "texte": "Le feu rouge impose l'arrêt du véhicule"
        },
        {
          "id": "c",
          "texte": "Le feu rouge autorise à ralentir sans s'arrêter si la voie paraît libre"
        },
        {
          "id": "d",
          "texte": "Ils ne s'adressent qu'aux automobilistes, pas aux deux-roues"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Les feux tricolores organisent le passage des différents flux à une intersection, et le rouge impose un arrêt total, sans exception liée à l'état apparent de la voie. Cette règle s'applique à tous les usagers, motards compris : ignorer un feu rouge reste une infraction quel que soit le véhicule.",
      "difficulte": 2
    },
    {
      "id": "SIG-0052",
      "theme": "signalisation",
      "enonce": "Un panneau de limitation de vitesse est implanté en bord de route. À partir de quand et pour qui cette limite s'applique-t-elle ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Dès l'endroit où le panneau est implanté"
        },
        {
          "id": "b",
          "texte": "Uniquement à partir du prochain carrefour"
        },
        {
          "id": "c",
          "texte": "Jusqu'au panneau de fin de prescription ou la fin de la zone concernée"
        },
        {
          "id": "d",
          "texte": "Uniquement aux automobiles, pas aux motos"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La limitation affichée s'applique dès l'implantation du panneau et reste valable jusqu'au panneau de fin de prescription, ou à défaut jusqu'à la prochaine intersection. Elle concerne tous les véhicules, motos comprises, et le carrefour suivant n'a de rôle que s'il n'existe pas de panneau de fin.",
      "difficulte": 2
    },
    {
      "id": "SIG-0053",
      "theme": "signalisation",
      "enonce": "Parmi ces correspondances entre l'apparence d'un panneau et sa catégorie, lesquelles sont justes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un triangle à bord rouge signale un danger"
        },
        {
          "id": "b",
          "texte": "Un rond à bord rouge signale une interdiction"
        },
        {
          "id": "c",
          "texte": "Un rond à fond bleu signale une obligation"
        },
        {
          "id": "d",
          "texte": "Un carré à bord rouge signale une indication"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Chaque famille de panneaux se reconnaît à sa forme et sa couleur : triangle bordé de rouge pour le danger, rond bordé de rouge pour l'interdiction, rond à fond bleu pour l'obligation. Les panneaux d'indication se présentent en carré ou rectangle à fond bleu (ou vert sur autoroute), sans le bord rouge réservé aux prescriptions plus contraignantes.",
      "difficulte": 3
    },
    {
      "id": "SIG-0054",
      "theme": "signalisation",
      "enonce": "Vous approchez d'un rond-point annoncé par le panneau triangulaire « Cédez le passage ». En arrivant, à qui devez-vous laisser le passage ?",
      "media": "images/cedez-le-passage.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous avez la priorité car vous arrivez sur une voie plus large que celle de l'anneau."
        },
        {
          "id": "b",
          "texte": "Uniquement au véhicule situé le plus près du centre du rond-point, quelle que soit la signalisation en place."
        },
        {
          "id": "c",
          "texte": "Aux véhicules déjà engagés dans l'anneau, qui viennent en général de votre gauche."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le panneau « Cédez le passage » impose de laisser la priorité aux usagers déjà engagés dans l'anneau, qui arrivent le plus souvent de la gauche : c'est la règle de base des carrefours giratoires en France. Croire que l'on a priorité en arrivant est faux, ce panneau signifie exactement l'inverse. Cette priorité intérieure peut toutefois être modifiée par une signalisation ou un marquage particulier sur certains giratoires, donc l'affirmer « quelle que soit la signalisation » est également incorrect.",
      "difficulte": 1
    },
    {
      "id": "SIG-0055",
      "theme": "signalisation",
      "enonce": "En circulant à moto, vous vous apercevez trop tard que vous dépassez la sortie que vous vouliez prendre dans un rond-point. Que faites-vous ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous continuez votre trajectoire dans l'anneau et vous prenez la sortie suivante."
        },
        {
          "id": "b",
          "texte": "Vous freinez fort pour rejoindre malgré tout la sortie manquée."
        },
        {
          "id": "c",
          "texte": "Vous vous arrêtez dans l'anneau pour laisser passer la circulation et faire demi-tour."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Rien n'oblige à sortir à la première occasion : il suffit de rester sur sa trajectoire dans l'anneau jusqu'à la prochaine sortie utile, en toute sécurité. Freiner brutalement pour rattraper une sortie déjà dépassée surprend les véhicules qui suivent, et s'arrêter dans l'anneau pour faire demi-tour est une manœuvre dangereuse et interdite dans un giratoire.",
      "difficulte": 1
    },
    {
      "id": "SIG-0056",
      "theme": "signalisation",
      "enonce": "Vous êtes sur le point de quitter un rond-point à moto. Quelles sont les bonnes pratiques à adopter ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Se positionner, si possible, dans la voie correspondant à la sortie visée avant même d'entrer dans l'anneau."
        },
        {
          "id": "b",
          "texte": "Activer le clignotant droit un peu avant d'atteindre la sortie choisie."
        },
        {
          "id": "c",
          "texte": "Se contenter du clignotant utilisé lors de l'entrée dans le rond-point pour indiquer la sortie."
        },
        {
          "id": "d",
          "texte": "Attendre d'être déjà engagé sur la voie de sortie pour actionner un clignotant."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Choisir sa voie en fonction de sa sortie dès l'entrée et activer le clignotant droit juste avant de sortir permet aux autres usagers d'anticiper votre trajectoire. Se fier uniquement au clignotant utilisé à l'entrée ne renseigne personne sur une intention de sortie, et signaler seulement une fois sur la bretelle de sortie arrive trop tard pour être utile aux véhicules qui vous suivent.",
      "difficulte": 2
    },
    {
      "id": "SIG-0057",
      "theme": "signalisation",
      "enonce": "Parmi ces comportements adoptés à l'intérieur d'un rond-point, lesquels sont réellement dangereux et à proscrire ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Changer de voie au dernier moment sans vérifier ses rétroviseurs ni son angle mort."
        },
        {
          "id": "b",
          "texte": "S'arrêter pour laisser un piéton terminer de traverser sur un passage piéton situé dans l'anneau."
        },
        {
          "id": "c",
          "texte": "Accélérer brutalement sans raison alors que la trajectoire est parfaitement dégagée."
        },
        {
          "id": "d",
          "texte": "Réduire progressivement sa vitesse en abordant le rond-point pour mieux observer la circulation."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Changer de voie sans contrôle et accélérer brutalement sans raison surprennent les autres usagers et créent un risque de collision, un danger accru à moto où la marge d'erreur est réduite. S'arrêter pour un piéton qui traverse reste au contraire une obligation, et ralentir à l'approche du rond-point est justement le comportement recommandé, pas une erreur.",
      "difficulte": 2
    },
    {
      "id": "SIG-0058",
      "theme": "signalisation",
      "enonce": "Pourquoi est-il recommandé de ralentir nettement à l'approche d'un rond-point, notamment à moto ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que la réglementation impose une vitesse maximale unique de 30 km/h dans tous les giratoires."
        },
        {
          "id": "b",
          "texte": "Pour avoir le temps d'observer la circulation dans l'anneau et de choisir le bon moment pour s'y engager."
        },
        {
          "id": "c",
          "texte": "Parce qu'un panneau de limitation spécifique, toujours inférieur à celui de la route, s'applique dans tous les rond-points."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Ralentir à l'approche permet d'observer les véhicules déjà engagés, d'évaluer leur vitesse et de choisir le bon moment pour s'insérer sans gêner personne, ce qui compte particulièrement à moto où l'équilibre à très basse vitesse demande de l'anticipation. Il n'existe pas de limitation de vitesse universelle et automatique propre aux rond-points : la vitesse autorisée reste celle indiquée par la signalisation réellement en place à cet endroit.",
      "difficulte": 1
    },
    {
      "id": "SIG-0059",
      "theme": "signalisation",
      "enonce": "À l'approche d'un rond-point à moto, quel panneau vous indique que vous devrez laisser la priorité aux véhicules déjà présents sur l'anneau ?",
      "media": "images/sens-giratoire.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le panneau triangulaire \"Cédez le passage\""
        },
        {
          "id": "b",
          "texte": "Le panneau octogonal \"Stop\""
        },
        {
          "id": "c",
          "texte": "Un panneau de sens interdit"
        },
        {
          "id": "d",
          "texte": "Un panneau de priorité à droite"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les carrefours giratoires sont annoncés par le panneau \"Cédez le passage\", qui rappelle que les véhicules déjà engagés sur l'anneau sont prioritaires. Le Stop imposerait un arrêt obligatoire, ce qui n'est pas la règle standard des ronds-points ; le sens interdit et la priorité à droite ne concernent pas l'entrée dans un giratoire.",
      "difficulte": 1
    },
    {
      "id": "SIG-0060",
      "theme": "signalisation",
      "enonce": "Vous roulez sur un rond-point à deux voies et votre sortie approche. Quelles sont les bonnes pratiques à adopter ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Ne mettre aucun clignotant, les autres usagers doivent anticiper votre trajectoire"
        },
        {
          "id": "b",
          "texte": "Activer le clignotant droit avant de quitter l'anneau"
        },
        {
          "id": "c",
          "texte": "Klaxonner pour signaler votre changement de direction"
        },
        {
          "id": "d",
          "texte": "Si c'est la toute première sortie, activer le clignotant droit dès l'entrée sur le giratoire"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le clignotant droit doit toujours annoncer votre sortie du giratoire : pour la première sortie, il s'active dès l'entrée sur l'anneau ; pour une sortie plus lointaine, il ne s'active qu'en approchant de la sortie choisie. Rouler sans clignotant surprend les autres usagers, et le klaxon n'a pas vocation à indiquer une trajectoire.",
      "difficulte": 2
    },
    {
      "id": "SIG-0061",
      "theme": "signalisation",
      "enonce": "Sur un rond-point à plusieurs voies, laquelle de ces affirmations décrit correctement la règle de priorité en France ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le conducteur qui souhaite s'insérer doit céder le passage aux véhicules déjà engagés sur l'anneau"
        },
        {
          "id": "b",
          "texte": "Ces véhicules déjà engagés arrivent de la gauche de celui qui veut entrer, et c'est à eux que revient la priorité"
        },
        {
          "id": "c",
          "texte": "La règle habituelle de priorité à droite des carrefours classiques ne s'applique pas dans un giratoire"
        },
        {
          "id": "d",
          "texte": "Il est possible de s'insérer sans céder le passage si votre véhicule est plus rapide que les autres"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Dans un giratoire, la logique s'inverse par rapport à un carrefour ordinaire : ce n'est plus la priorité à droite qui s'applique, mais la priorité aux véhicules déjà présents sur l'anneau, qui se trouvent à la gauche de celui qui souhaite entrer. La vitesse d'un véhicule ne lui donne jamais le droit de s'insérer sans céder le passage.",
      "difficulte": 3
    },
    {
      "id": "SIG-0062",
      "theme": "signalisation",
      "enonce": "Dans un rond-point à deux voies, vous devez prendre une sortie lointaine (par exemple la troisième). Quelle voie devez-vous emprunter en circulant sur l'anneau ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "La voie extérieure (côté droit)"
        },
        {
          "id": "b",
          "texte": "La voie du milieu, si elle existe"
        },
        {
          "id": "c",
          "texte": "La voie intérieure (côté gauche)"
        },
        {
          "id": "d",
          "texte": "N'importe laquelle, selon la circulation du moment"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Pour une sortie éloignée, on reste sur la voie intérieure afin de ne pas couper la route à ceux qui quittent le giratoire aux premières sorties, et on ne se rabat sur la voie extérieure qu'au moment d'atteindre sa propre sortie. La voie extérieure est réservée aux deux premières sorties : le choix de voie n'est jamais laissé au hasard.",
      "difficulte": 2
    },
    {
      "id": "SIG-0063",
      "theme": "signalisation",
      "enonce": "Vous approchez à moto d'un rond-point dont la visibilité est réduite (virage serré, haie, brouillard...). Que devez-vous faire ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour traverser le giratoire plus rapidement"
        },
        {
          "id": "b",
          "texte": "Ralentir et vous tenir prêt à céder le passage aux véhicules déjà engagés"
        },
        {
          "id": "c",
          "texte": "Vous rapprocher du véhicule qui précède pour profiter de sa trajectoire"
        },
        {
          "id": "d",
          "texte": "Vous arrêter systématiquement, même en l'absence de panneau Stop"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une visibilité réduite impose de ralentir pour pouvoir observer la circulation sur l'anneau et céder le passage si nécessaire, la priorité restant aux véhicules déjà engagés. Accélérer ou suivre de près un autre véhicule augmente le risque de collision, et s'arrêter systématiquement sans panneau Stop n'est pas la règle, même s'il faut rester prêt à le faire.",
      "difficulte": 1
    },
    {
      "id": "SIG-0064",
      "theme": "signalisation",
      "enonce": "Vous approchez une intersection en zone rurale, sans aucun panneau annonçant une priorité particulière. Quelle règle devez-vous appliquer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le véhicule arrivé en premier à l'intersection a la priorité"
        },
        {
          "id": "b",
          "texte": "Vous devez céder le passage au véhicule venant de votre droite"
        },
        {
          "id": "c",
          "texte": "Le véhicule le plus lourd (camion, tracteur...) est toujours prioritaire"
        },
        {
          "id": "d",
          "texte": "C'est au conducteur le plus expérimenté de passer en premier"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En l'absence de toute signalisation, la priorité à droite s'applique systématiquement en France : chaque conducteur doit céder le passage aux véhicules venant de sa droite. Ni l'ordre d'arrivée, ni le gabarit du véhicule, ni l'expérience du conducteur n'entrent en compte dans cette règle de base.",
      "difficulte": 1
    },
    {
      "id": "SIG-0065",
      "theme": "signalisation",
      "enonce": "À moto, vous repérez des panneaux de priorité à l'approche d'un carrefour. Parmi ces affirmations, lesquelles sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le panneau triangulaire à pointe basse bordé de rouge 'Cédez le passage' vous oblige à laisser passer les véhicules de la voie abordée, sans arrêt obligatoire si elle est dégagée"
        },
        {
          "id": "b",
          "texte": "Le panneau octogonal rouge 'Stop' vous impose un arrêt complet, même si vous ne voyez aucun véhicule arriver"
        },
        {
          "id": "c",
          "texte": "Ces deux panneaux imposent exactement la même obligation d'arrêt"
        },
        {
          "id": "d",
          "texte": "Un panneau 'Stop' peut être ignoré la nuit lorsque la circulation est nulle"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le panneau 'Cédez le passage' (triangle inversé à bordure rouge) impose de laisser la priorité sans obliger à un arrêt total si la voie est libre, tandis que le 'Stop' (octogone rouge) impose toujours un arrêt complet avant de céder le passage, quelle que soit la visibilité ou l'heure. Ces deux panneaux ne sont donc pas équivalents, et l'obligation de s'arrêter au Stop ne dépend jamais de la circulation apparente.",
      "difficulte": 2
    },
    {
      "id": "SIG-0066",
      "theme": "signalisation",
      "enonce": "En moto, vous vous engagez dans un carrefour à sens giratoire. Comment s'applique la priorité ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous êtes prioritaire sur les véhicules qui circulent déjà dans l'anneau"
        },
        {
          "id": "b",
          "texte": "La priorité dépend du gabarit du véhicule engagé dans l'anneau"
        },
        {
          "id": "c",
          "texte": "Vous devez céder le passage aux véhicules déjà engagés dans l'anneau, qui se présentent à votre gauche"
        },
        {
          "id": "d",
          "texte": "Vous ne devez céder le passage que si un panneau spécifique l'indique expressément à cette entrée"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Dans un giratoire, les usagers déjà engagés dans l'anneau sont prioritaires : ils circulent dans le sens inverse des aiguilles d'une montre et se présentent donc à votre gauche au moment où vous entrez. Cette règle s'applique par défaut, indépendamment du gabarit des véhicules et même sans panneau supplémentaire à l'entrée.",
      "difficulte": 2
    },
    {
      "id": "SIG-0067",
      "theme": "signalisation",
      "enonce": "Pour quelles raisons un motard doit-il se montrer particulièrement vigilant face aux règles de priorité, par rapport à un automobiliste ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le faible gabarit de la moto la rend souvent moins visible pour les autres usagers"
        },
        {
          "id": "b",
          "texte": "Il doit anticiper en permanence les mouvements parfois imprévisibles des autres véhicules"
        },
        {
          "id": "c",
          "texte": "Une chaussée glissante ou instable augmente le risque au moment de respecter une priorité"
        },
        {
          "id": "d",
          "texte": "Un motard est dispensé de céder le passage lorsque la chaussée est mouillée"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Trois raisons imposent une vigilance renforcée au motard : sa faible visibilité pour les autres usagers, la nécessité d'anticiper leurs mouvements, et les risques accrus sur une chaussée glissante ou instable, notamment lors d'un freinage. Aucune règle ne dispense un motard de céder le passage en raison de l'état de la route : croire l'inverse est dangereux.",
      "difficulte": 2
    },
    {
      "id": "SIG-0068",
      "theme": "signalisation",
      "enonce": "Vous approchez à moto d'une intersection en agglomération, sans aucun panneau ni marquage de priorité. Par défaut, à qui devez-vous céder le passage ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le véhicule circulant le plus vite"
        },
        {
          "id": "b",
          "texte": "Le véhicule venant de votre droite"
        },
        {
          "id": "c",
          "texte": "Le véhicule venant de votre gauche"
        },
        {
          "id": "d",
          "texte": "Le premier véhicule arrêté à l'intersection"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En l'absence de toute signalisation, le Code de la route impose la priorité à droite : c'est au véhicule qui arrive de votre droite d'avoir la priorité, et donc à vous de lui céder le passage. La vitesse du véhicule, son gabarit ou l'ordre d'arrivée à l'intersection n'entrent jamais en compte dans cette règle par défaut.",
      "difficulte": 1
    },
    {
      "id": "SIG-0069",
      "theme": "signalisation",
      "enonce": "Un panneau Cédez-le-passage est implanté à une intersection qui serait normalement soumise à la priorité à droite. Quelle règle s'applique réellement ?",
      "media": "images/cedez-le-passage.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La signalisation (panneau, marquage, feu) prévaut sur la priorité à droite"
        },
        {
          "id": "b",
          "texte": "La priorité à droite reste la règle, le panneau n'a qu'une valeur indicative"
        },
        {
          "id": "c",
          "texte": "Vous choisissez librement d'appliquer l'une ou l'autre règle"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Dès qu'une signalisation (panneau Cédez-le-passage ou Stop, marquage au sol, feu tricolore) est présente, elle prévaut systématiquement sur la règle générale de priorité à droite. Un tel panneau n'a donc rien d'indicatif : il impose une obligation, et il n'existe aucune liberté de choisir entre les deux règles.",
      "difficulte": 2
    },
    {
      "id": "SIG-0070",
      "theme": "signalisation",
      "enonce": "Vous abordez à moto un rond-point ne comportant aucune signalisation particulière. Quelles sont les bonnes pratiques à adopter ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Ralentir et céder le passage aux véhicules déjà engagés dans l'anneau"
        },
        {
          "id": "b",
          "texte": "Accélérer pour vous insérer avant les véhicules déjà présents"
        },
        {
          "id": "c",
          "texte": "Vous positionner en fonction de la sortie que vous prévoyez de prendre"
        },
        {
          "id": "d",
          "texte": "Vous placer au centre de l'anneau pour mieux voir les sorties"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Sur un rond-point sans signalisation particulière, les véhicules déjà engagés dans l'anneau ont la priorité : vous devez ralentir à l'approche, céder le passage, et vous positionner sur la voie correspondant à la sortie que vous comptez prendre. Accélérer pour s'imposer ou rouler au centre de l'anneau sont des comportements dangereux et non conformes.",
      "difficulte": 2
    },
    {
      "id": "SIG-0071",
      "theme": "signalisation",
      "enonce": "À moto, en agglomération, quelles affirmations sur la vitesse maximale autorisée sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La limite par défaut est de 70 km/h"
        },
        {
          "id": "b",
          "texte": "Aucun panneau ne peut abaisser la limite en dessous de 50 km/h"
        },
        {
          "id": "c",
          "texte": "Par défaut, la vitesse est limitée à 50 km/h"
        },
        {
          "id": "d",
          "texte": "Une zone de rencontre ou une rue signalée à 30 km/h impose cette limite, même en agglomération"
        }
      ],
      "bonnesReponses": [
        "c",
        "d"
      ],
      "explication": "Sauf signalisation contraire, la vitesse maximale en agglomération est fixée à 50 km/h. Mais un panneau ou une zone de rencontre signalée à 30 km/h impose cette limite plus stricte, qui prime alors sur la limite générale ; 70 km/h ne correspond à aucune limite d'agglomération standard.",
      "difficulte": 1
    },
    {
      "id": "SIG-0072",
      "theme": "signalisation",
      "enonce": "Sur autoroute, à moto, quelles limitations de vitesse s'appliquent réellement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "130 km/h par temps sec"
        },
        {
          "id": "b",
          "texte": "Ces limitations ne concernent pas les motocyclistes, seulement les voitures"
        },
        {
          "id": "c",
          "texte": "90 km/h en toutes circonstances, pluie ou non"
        },
        {
          "id": "d",
          "texte": "110 km/h par temps de pluie"
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Sur autoroute, la vitesse est limitée à 130 km/h par temps sec, et abaissée à 110 km/h dès qu'il pleut ; cette règle s'applique aux motocyclistes comme aux automobilistes. Il n'existe pas de limite unique de 90 km/h « en toutes circonstances », et les motards ne bénéficient d'aucune exemption à ces plafonds.",
      "difficulte": 2
    },
    {
      "id": "SIG-0073",
      "theme": "signalisation",
      "enonce": "Pouvez-vous stationner votre moto sur un trottoir en ville ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Oui, une moto peut toujours se garer sur le trottoir, contrairement aux voitures"
        },
        {
          "id": "b",
          "texte": "Non, c'est interdit sauf signalisation ou aménagement qui l'autorise expressément"
        },
        {
          "id": "c",
          "texte": "Oui, à condition de rester moins de 5 minutes"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le stationnement sur un trottoir est interdit par principe, car il gêne la circulation des piétons ; seule une signalisation ou un aménagement spécifique (marquage, panneau) peut l'autoriser explicitement. Il n'existe pas de tolérance liée à la nature du véhicule (moto) ni à la brièveté de l'arrêt.",
      "difficulte": 1
    },
    {
      "id": "SIG-0074",
      "theme": "signalisation",
      "enonce": "Vous arrivez à moto face à un feu rouge. Quelle est la conduite à tenir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Continuer si aucun véhicule n'arrive sur la voie transversale"
        },
        {
          "id": "b",
          "texte": "Ralentir fortement mais poursuivre votre trajectoire sans vous arrêter"
        },
        {
          "id": "c",
          "texte": "Vous arrêter avant la ligne d'arrêt, ou avant le feu s'il n'y en a pas"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Au feu rouge, l'arrêt est obligatoire avant la ligne d'arrêt, ou avant le feu lui-même si aucune ligne n'est marquée. L'absence apparente de trafic sur la voie transversale ne dispense jamais de cette obligation, et ralentir sans s'arrêter reste une infraction.",
      "difficulte": 1
    },
    {
      "id": "SIG-0075",
      "theme": "signalisation",
      "enonce": "Concernant la distance de sécurité à respecter à moto avec le véhicule qui précède, quelles affirmations sont vraies ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Elle doit être d'au moins 2 secondes par temps sec"
        },
        {
          "id": "b",
          "texte": "À moto, il est recommandé de prendre une marge supplémentaire par rapport à une voiture"
        },
        {
          "id": "c",
          "texte": "Une seconde d'intervalle suffit dans toutes les situations"
        },
        {
          "id": "d",
          "texte": "Elle doit être augmentée en cas de pluie ou de trafic dense"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "La distance de sécurité minimale est d'au moins 2 secondes par temps sec, un intervalle qui doit être augmenté en cas de pluie ou de trafic dense, et les motards ont intérêt à garder une marge encore plus large qu'une voiture (moindre stabilité, freinage plus sensible). Une seconde d'écart n'est jamais suffisante, quelles que soient les conditions.",
      "difficulte": 2
    },
    {
      "id": "SIG-0076",
      "theme": "signalisation",
      "enonce": "Vous envisagez de dépasser un véhicule lent, à moto, sur une route nationale à double sens. Que devez-vous vérifier avant de vous déporter ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il suffit d'actionner le clignotant, le reste importe peu"
        },
        {
          "id": "b",
          "texte": "Disposer d'une visibilité suffisante et d'un marquage routier autorisant le dépassement"
        },
        {
          "id": "c",
          "texte": "Vérifier vos rétroviseurs et vos angles morts avant de vous déporter"
        },
        {
          "id": "d",
          "texte": "Le dépassement est de toute façon toujours interdit sur ce type de route"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Avant de dépasser sur une route à double sens, il faut disposer d'une visibilité suffisante et d'un marquage routier qui autorise la manœuvre (pas de ligne continue), et vérifier ses rétroviseurs ainsi que ses angles morts avant de se déporter. Le seul clignotant ne rend pas la manœuvre sûre, et le dépassement n'est pas interdit par principe sur ce type de route dès que les conditions le permettent.",
      "difficulte": 3
    },
    {
      "id": "SIG-0077",
      "theme": "signalisation",
      "enonce": "Concernant le filtrage entre les files de véhicules ralentis ou à l'arrêt, quelle attitude devez-vous adopter à moto ?",
      "media": "images/photo-circulation-file.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Filtrer à vitesse élevée pour gagner du temps, sans se soucier des angles morts"
        },
        {
          "id": "b",
          "texte": "Le filtrage est interdit en toutes circonstances, sur toutes les routes de France"
        },
        {
          "id": "c",
          "texte": "Le filtrage est totalement libre, sans aucune règle à respecter"
        },
        {
          "id": "d",
          "texte": "Filtrer prudemment, en restant prévisible et en respectant les règles et recommandations en vigueur localement"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Le filtrage entre les files doit rester une manœuvre prudente et prévisible, réalisée dans le respect des règles et recommandations en vigueur localement, notamment en surveillant ses angles morts. Ce n'est ni une pratique totalement libre, ni une manœuvre à mener à vitesse élevée, ni une interdiction absolue sur l'ensemble du réseau routier français.",
      "difficulte": 3
    },
    {
      "id": "SIG-0078",
      "theme": "signalisation",
      "enonce": "Concernant les limitations de vitesse applicables à une moto en France, quelles affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "En agglomération, la vitesse est limitée à 50 km/h."
        },
        {
          "id": "b",
          "texte": "Sur autoroute, la vitesse maximale autorisée passe à 110 km/h lorsqu'il pleut."
        },
        {
          "id": "c",
          "texte": "Hors agglomération, la vitesse maximale autorisée est de 100 km/h."
        },
        {
          "id": "d",
          "texte": "Sur autoroute, par temps sec, la vitesse maximale autorisée est de 150 km/h."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "En agglomération, la limite générale est de 50 km/h, et par temps de pluie sur autoroute elle est abaissée à 110 km/h (contre 130 km/h par temps sec) pour compenser l'allongement des distances de freinage. Hors agglomération, la limite est en réalité de 80 km/h, et non 100 km/h ; sur autoroute par temps sec, la limite reste 130 km/h, jamais 150 km/h.",
      "difficulte": 2
    },
    {
      "id": "SIG-0079",
      "theme": "signalisation",
      "enonce": "Quelles conséquences directes une vitesse excessive peut-elle avoir sur la conduite d'une moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le temps de réaction disponible avant un obstacle diminue."
        },
        {
          "id": "b",
          "texte": "La distance nécessaire pour s'arrêter augmente."
        },
        {
          "id": "c",
          "texte": "L'adhérence des pneus au sol s'améliore."
        },
        {
          "id": "d",
          "texte": "La gravité des chocs en cas d'accident augmente."
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "Plus la vitesse est élevée, moins le motard dispose de temps pour analyser une situation et réagir, ce qui allonge d'autant la distance de freinage nécessaire et aggrave les conséquences d'un choc éventuel. En revanche, la vitesse ne procure aucun gain d'adhérence : au contraire, elle réduit la marge de sécurité entre les pneus et la chaussée.",
      "difficulte": 2
    },
    {
      "id": "SIG-0080",
      "theme": "signalisation",
      "enonce": "Un motard est contrôlé en excès de vitesse. Quelles sanctions peut-il réellement encourir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une amende."
        },
        {
          "id": "b",
          "texte": "Un retrait de points sur son permis de conduire."
        },
        {
          "id": "c",
          "texte": "La confiscation immédiate du véhicule, quel que soit le dépassement constaté."
        },
        {
          "id": "d",
          "texte": "La suspension de son permis de conduire."
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "L'excès de vitesse peut entraîner une amende, un retrait de points, et selon la gravité, une suspension du permis. La confiscation du véhicule existe bien dans l'arsenal des sanctions, mais elle n'est pas automatique pour tout dépassement : elle est réservée aux cas de grand excès de vitesse, notamment en récidive.",
      "difficulte": 3
    },
    {
      "id": "SIG-0081",
      "theme": "signalisation",
      "enonce": "Vous circulez à moto et rencontrez à la fois du brouillard dense et une zone de travaux. Que devez-vous faire concernant votre vitesse ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "La réduire, même si elle reste inférieure à la limite légale du tronçon."
        },
        {
          "id": "b",
          "texte": "La maintenir au niveau de la limite légale affichée, puisqu'elle n'a pas changé."
        },
        {
          "id": "c",
          "texte": "L'augmenter légèrement pour sortir plus vite de la zone à risque."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La limite légale n'est qu'un plafond : elle ne dispense jamais d'adapter sa vitesse aux conditions réelles de circulation (météo dégradée, travaux, trafic dense). Maintenir la vitesse limite ou accélérer dans une zone à visibilité réduite ou en travaux augmente le risque d'accident au lieu de le réduire.",
      "difficulte": 1
    },
    {
      "id": "SIG-0082",
      "theme": "signalisation",
      "enonce": "En circulation, vous apercevez un panneau rond à fond blanc cerclé de rouge, traversé par une seule barre oblique noire. Comment devez-vous interpréter ce panneau au guidon de votre moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vous pouvez marquer un arrêt bref, mais pas stationner votre moto"
        },
        {
          "id": "b",
          "texte": "Il vous est interdit de vous arrêter comme de stationner"
        },
        {
          "id": "c",
          "texte": "Le stationnement est autorisé mais payant"
        },
        {
          "id": "d",
          "texte": "L'emplacement est réservé aux deux-roues motorisés"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un disque rouge barré d'un seul trait signale une interdiction de stationner : l'arrêt bref (le temps de faire monter ou descendre un passager, par exemple) reste toléré. Le disque barré de deux traits interdit en plus l'arrêt. Le panneau bleu avec un « P » et la mention « payant » signale le stationnement payant, et la réserve aux deux-roues se signale par un pictogramme moto, pas par ce disque rouge.",
      "difficulte": 1
    },
    {
      "id": "SIG-0083",
      "theme": "signalisation",
      "enonce": "Parmi ces emplacements, lesquels vous interdisent totalement de vous arrêter et de stationner avec votre moto, même quelques secondes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un passage piéton"
        },
        {
          "id": "b",
          "texte": "Un couloir réservé aux bus"
        },
        {
          "id": "c",
          "texte": "Un emplacement marqué au sol pour le stationnement des motos"
        },
        {
          "id": "d",
          "texte": "Un parking souterrain payant"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Les passages piétons et les couloirs de bus figurent parmi les emplacements où l'arrêt et le stationnement sont interdits, car ils gênent gravement la circulation des piétons ou des transports en commun. À l'inverse, un emplacement dédié aux motos ou un parking payant sont des zones prévues pour stationner, donc parfaitement autorisées.",
      "difficulte": 2
    },
    {
      "id": "SIG-0084",
      "theme": "signalisation",
      "enonce": "Vous devez vous immobiliser en amont d'un passage piéton. Quelle distance minimale faut-il respecter pour ne pas masquer la visibilité entre vous et les piétons qui traversent ?",
      "media": "images/danger-passage-pietons.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "5 mètres"
        },
        {
          "id": "b",
          "texte": "10 mètres"
        },
        {
          "id": "c",
          "texte": "3 mètres"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le Code de la route impose de laisser au moins 5 mètres en amont d'un passage piéton avant tout arrêt ou stationnement, afin que conducteurs et piétons se voient bien mutuellement. Ni 10 mètres ni 3 mètres ne correspondent à la distance réglementaire pour ce cas précis.",
      "difficulte": 1
    },
    {
      "id": "SIG-0085",
      "theme": "signalisation",
      "enonce": "La nuit, ou lorsque le brouillard réduit fortement la visibilité, vous devez garer votre moto en bordure de chaussée. Que devez-vous faire ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Laisser un feu de position allumé pour signaler la présence de la moto"
        },
        {
          "id": "b",
          "texte": "Ne rien faire de particulier dès que le moteur est coupé"
        },
        {
          "id": "c",
          "texte": "Garder vos feux de croisement allumés en permanence"
        },
        {
          "id": "d",
          "texte": "Cette précaution n'est utile qu'en plein jour"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Par visibilité insuffisante (nuit, brouillard), tout véhicule arrêté ou stationné sur la chaussée doit rester signalé, au minimum par un feu de position, pour être vu des autres usagers. Éteindre tous les feux serait dangereux, les feux de croisement sont destinés à la conduite et non au stationnement, et l'obligation vise justement les situations de faible visibilité, pas le plein jour.",
      "difficulte": 2
    },
    {
      "id": "SIG-0086",
      "theme": "signalisation",
      "enonce": "Un marquage au sol représentant un pictogramme moto délimite un emplacement de stationnement le long d'un trottoir. Un automobiliste y gare sa voiture, faute de place ailleurs. Est-ce régulier ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Non, cet emplacement est réservé au stationnement des motos et scooters"
        },
        {
          "id": "b",
          "texte": "Oui, tant qu'aucune moto n'occupe la place au même moment"
        },
        {
          "id": "c",
          "texte": "Oui, car un simple marquage au sol n'a pas de valeur réglementaire"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un emplacement signalé pour le stationnement des deux-roues motorisés leur est exclusivement réservé : y garer une voiture constitue une infraction, même si la place est libre à ce moment-là. Le marquage au sol a bien une valeur réglementaire, au même titre qu'un panneau vertical.",
      "difficulte": 2
    },
    {
      "id": "SIG-0087",
      "theme": "signalisation",
      "enonce": "Sur route, juste avant d'entamer un dépassement à moto, quels contrôles devez-vous impérativement effectuer ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vérifier que la voie de gauche est libre sur une distance suffisante, sans véhicule arrivant en face."
        },
        {
          "id": "b",
          "texte": "Klaxonner le véhicule que vous suivez pour annoncer votre manœuvre."
        },
        {
          "id": "c",
          "texte": "Contrôler vos rétroviseurs et votre angle mort."
        },
        {
          "id": "d",
          "texte": "Vous rapprocher du véhicule à dépasser pour réduire le temps de la manœuvre."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Avant tout dépassement, il faut s'assurer que la voie opposée est dégagée sur une distance suffisante et vérifier rétroviseurs et angle mort, pour ne pas être surpris par un véhicule qui vous suit ou vous double déjà. Le klaxon n'est pas un outil de vérification, et se rapprocher du véhicule précédent réduit dangereusement votre visibilité et votre marge de sécurité.",
      "difficulte": 2
    },
    {
      "id": "SIG-0088",
      "theme": "signalisation",
      "enonce": "Quel signal devez-vous actionner pour annoncer votre intention de dépasser un véhicule ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le klaxon."
        },
        {
          "id": "b",
          "texte": "Les feux de détresse."
        },
        {
          "id": "c",
          "texte": "Le clignotant gauche."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le clignotant gauche indique clairement votre intention de vous déporter avant le déboîtement. Le klaxon n'est qu'un avertisseur sonore d'urgence qui ne remplace pas la signalisation lumineuse, et les feux de détresse s'utilisent en cas d'arrêt ou de danger, pas pour dépasser.",
      "difficulte": 1
    },
    {
      "id": "SIG-0089",
      "theme": "signalisation",
      "enonce": "Une fois le dépassement engagé, quelle est la bonne façon de le mener à moto ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Rester à hauteur du véhicule dépassé un instant pour comparer votre vitesse à la sienne."
        },
        {
          "id": "b",
          "texte": "Ralentir progressivement pendant la manœuvre pour garder de la marge."
        },
        {
          "id": "c",
          "texte": "Vous rabattre à droite dès que vous arrivez à sa hauteur, sans attendre d'être suffisamment devant lui."
        },
        {
          "id": "d",
          "texte": "Réaliser la manœuvre franchement et sans vous attarder à hauteur du véhicule dépassé."
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Un dépassement doit être franc et rapide afin de limiter le temps passé exposé sur la voie opposée. Ralentir en pleine manœuvre ou rester à hauteur du véhicule prolonge inutilement ce risque, et se rabattre dès que vous atteignez sa hauteur, sans marge devant lui, ne laisse pas l'espace de sécurité nécessaire.",
      "difficulte": 2
    },
    {
      "id": "SIG-0090",
      "theme": "signalisation",
      "enonce": "Dans quel cas un motard peut-il exceptionnellement dépasser par la droite ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Chaque fois que la voie de gauche est simplement un peu plus lente que la vôtre."
        },
        {
          "id": "b",
          "texte": "Lorsque la circulation est répartie sur plusieurs files et que celle de gauche est arrêtée ou roule au ralenti."
        },
        {
          "id": "c",
          "texte": "Dès que vous êtes en retard sur votre trajet."
        },
        {
          "id": "d",
          "texte": "Lorsque le véhicule qui vous précède a clairement amorcé un virage à gauche."
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le dépassement s'effectue en principe par la gauche ; il n'est autorisé par la droite que dans des cas précis prévus par le code de la route : une circulation organisée en files parallèles où la file de gauche est immobilisée ou très lente, ou un véhicule précédent qui s'est déporté pour tourner à gauche. Être simplement plus rapide que la file de gauche ou être en retard ne justifie jamais un dépassement par la droite.",
      "difficulte": 3
    },
    {
      "id": "SIG-0091",
      "theme": "signalisation",
      "enonce": "Vous croisez un véhicule sur une route étroite où il n'y a pas assez d'espace pour deux manœuvres à la fois. Que devez-vous vous interdire de faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Serrer votre droite."
        },
        {
          "id": "b",
          "texte": "Doubler un autre véhicule pendant ce croisement."
        },
        {
          "id": "c",
          "texte": "Réduire votre allure."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Dans un croisement où l'espace est limité, tenter en plus de dépasser un véhicule cumule deux manœuvres délicates sur une chaussée trop étroite : c'est interdit. Serrer sa droite et réduire son allure sont au contraire les bons réflexes à adopter dans cette situation.",
      "difficulte": 2
    },
    {
      "id": "SIG-0092",
      "theme": "signalisation",
      "enonce": "Sur une route étroite, lorsque vous croisez un véhicule venant en face, quelle attitude devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire votre vitesse."
        },
        {
          "id": "b",
          "texte": "Maintenir votre allure habituelle."
        },
        {
          "id": "c",
          "texte": "Accélérer légèrement pour raccourcir le croisement."
        },
        {
          "id": "d",
          "texte": "Vous rapprocher au maximum du bord droit de la chaussée."
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Le code de la route impose de serrer sa droite et, si besoin, de ralentir lors d'un croisement sur voie étroite, afin de laisser un espace suffisant à l'autre véhicule. Garder son allure habituelle ou accélérer réduit dangereusement cette marge, ce qui est d'autant plus risqué à moto où la stabilité dépend de la trajectoire choisie.",
      "difficulte": 2
    },
    {
      "id": "SIG-0093",
      "theme": "signalisation",
      "enonce": "À l'approche de quels endroits le dépassement est-il interdit, indépendamment de toute signalisation particulière ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une ligne droite parfaitement dégagée."
        },
        {
          "id": "b",
          "texte": "Un passage pour piétons."
        },
        {
          "id": "c",
          "texte": "Une intersection."
        },
        {
          "id": "d",
          "texte": "Un virage ou un sommet de côte à visibilité réduite."
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Le dépassement est interdit dès que la visibilité ou la priorité d'un autre usager peut être compromise : intersections, passages pour piétons, virages et sommets de côte sans visibilité suffisante. À l'inverse, une ligne droite bien dégagée est justement une configuration favorable au dépassement.",
      "difficulte": 2
    },
    {
      "id": "SIG-0094",
      "theme": "signalisation",
      "enonce": "Pourquoi le dépassement dans un virage est-il particulièrement dangereux à moto ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce qu'il n'y a en réalité aucun risque particulier."
        },
        {
          "id": "b",
          "texte": "Parce que la visibilité sur la voie opposée y est réduite."
        },
        {
          "id": "c",
          "texte": "Parce que l'adhérence y est toujours insuffisante."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En virage, le champ de vision sur ce qui arrive en face est limité, ce qui empêche de juger si la voie est réellement libre sur une distance suffisante. L'adhérence n'est pas systématiquement réduite, cela dépend de l'état de la route, mais le manque de visibilité suffit à lui seul à justifier l'interdiction de dépasser à cet endroit.",
      "difficulte": 1
    },
    {
      "id": "SIG-0095",
      "theme": "signalisation",
      "enonce": "Une ligne blanche continue sépare les deux sens de circulation. Qui a le droit de la franchir pour dépasser ?",
      "media": "images/ligne-continue.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Aucun véhicule, quel qu'il soit."
        },
        {
          "id": "b",
          "texte": "Les motos uniquement, car elles sont plus étroites."
        },
        {
          "id": "c",
          "texte": "Les véhicules les plus lents seulement."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Une ligne continue interdit le franchissement à tous les véhicules sans exception, y compris les motos : leur largeur ou leur maniabilité ne change rien à cette interdiction. Aucune catégorie de véhicule n'est dispensée de cette règle du code de la route.",
      "difficulte": 1
    },
    {
      "id": "SIG-0096",
      "theme": "signalisation",
      "enonce": "Un véhicule de police roulant sirène hurlante et gyrophares allumés se rapproche derrière vous alors que vous circulez à moto sur une route à double sens de circulation. Quelle réaction adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Conserver votre vitesse et votre position, il doit vous dépasser sans que vous interveniez"
        },
        {
          "id": "b",
          "texte": "Faciliter son passage en vous rabattant et en vous arrêtant si la configuration de la route l'exige"
        },
        {
          "id": "c",
          "texte": "Accélérer pour libérer rapidement la chaussée devant lui"
        },
        {
          "id": "d",
          "texte": "Freiner fortement au milieu de la voie pour l'inciter à vous dépasser par la gauche"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le code de la route impose de céder le passage à un véhicule bénéficiant de la priorité (sirène et feux spéciaux activés), en se rabattant et en s'arrêtant si besoin pour lui faciliter le passage. Continuer sans réagir ou accélérer retarde son intervention et reste dangereux, tandis qu'un freinage brutal au milieu de la chaussée crée un obstacle imprévisible pour ce véhicule comme pour les usagers derrière vous.",
      "difficulte": 1
    },
    {
      "id": "SIG-0097",
      "theme": "signalisation",
      "enonce": "Parmi ces véhicules, lesquels sont considérés comme prioritaires et peuvent, en intervention avec leurs équipements spéciaux activés, s'affranchir de certaines règles de circulation (feux, priorités, limitations de vitesse) ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un véhicule de police, sirène et gyrophare en fonctionnement"
        },
        {
          "id": "b",
          "texte": "Une ambulance du SAMU en intervention, feux spéciaux et avertisseur sonore activés"
        },
        {
          "id": "c",
          "texte": "Un camion de pompiers en intervention, sirène et feux spéciaux allumés"
        },
        {
          "id": "d",
          "texte": "Un poids lourd de transport de marchandises signalant sa présence au klaxon"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Les véhicules d'intérêt général prioritaires (police, SAMU/ambulances, sapeurs-pompiers) peuvent, lorsqu'ils interviennent avec feux spéciaux et avertisseur sonore activés, déroger à certaines règles de circulation à condition de ne mettre personne en danger. Un poids lourd de livraison, même en klaxonnant, ne bénéficie d'aucun statut prioritaire ni d'aucune dérogation : il reste un simple véhicule encombrant à contourner avec prudence.",
      "difficulte": 2
    },
    {
      "id": "SIG-0098",
      "theme": "signalisation",
      "enonce": "Vous circulez derrière un camion qui entame une manœuvre pour se garer le long d'un trottoir. Quelle attitude devez-vous avoir en tant que motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Patienter en gardant une distance de sécurité accrue, en surveillant ses angles morts et en anticipant un arrêt ou un changement de trajectoire brusque"
        },
        {
          "id": "b",
          "texte": "Klaxonner pour l'inciter à accélérer sa manœuvre"
        },
        {
          "id": "c",
          "texte": "Vous rapprocher pour profiter immédiatement de l'espace libéré dès qu'il avance"
        },
        {
          "id": "d",
          "texte": "Le dépasser rapidement avant qu'il ne termine sa manœuvre"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un véhicule encombrant comme un camion a besoin de plus d'espace pour manœuvrer et peut s'arrêter ou changer de trajectoire sans prévenir : il faut donc patienter à distance accrue en surveillant ses angles morts, où votre moto est facilement invisible. Klaxonner n'accélère rien et peut surprendre le conducteur, se rapprocher réduit dangereusement votre marge de réaction, et tenter un dépassement pendant la manœuvre expose à un choc si le camion braque ou recule sans que vous l'ayez anticipé.",
      "difficulte": 2
    },
    {
      "id": "SIG-0099",
      "theme": "signalisation",
      "enonce": "Un bus est arrêté à un point d'arrêt, feux de détresse allumés, pour laisser descendre des passagers. Pourquoi devez-vous rester prudent avant de le dépasser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que le code de la route interdit dans tous les cas de dépasser un bus à l'arrêt"
        },
        {
          "id": "b",
          "texte": "Parce qu'un passager qui vient de descendre peut traverser la chaussée devant ou derrière le véhicule"
        },
        {
          "id": "c",
          "texte": "Parce que le bus peut redémarrer et se rabattre sur sa voie sans que vous l'ayez anticipé"
        },
        {
          "id": "d",
          "texte": "Parce qu'un motard bénéficie toujours d'une priorité de passage absolue sur un bus"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Un bus à l'arrêt présente un double risque : un passager qui vient de descendre peut traverser la rue en étant peu visible, et le bus lui-même peut redémarrer et reprendre sa voie sans prévenir. Il n'existe pas d'interdiction générale de dépasser un bus arrêté hors contexte scolaire signalé, et aucune règle n'accorde à un deux-roues une priorité automatique sur ce type de véhicule : la prudence reste votre seule protection.",
      "difficulte": 2
    },

    /* ---------- LE CONDUCTEUR (PERCEPTION, ALCOOL, FATIGUE) — ebook (80) ---------- */
    {
      "id": "CND-0016",
      "theme": "conducteur",
      "enonce": "À moto, pourquoi devez-vous systématiquement contrôler vos angles morts avant de changer de file ?",
      "media": "images/angle-mort.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour économiser du carburant"
        },
        {
          "id": "b",
          "texte": "Pour vérifier l'état de la chaussée derrière la moto"
        },
        {
          "id": "c",
          "texte": "Pour repérer un véhicule ou un cycliste qui ne serait pas visible dans les rétroviseurs"
        },
        {
          "id": "d",
          "texte": "Pour donner une meilleure image de sa conduite aux autres usagers"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Les rétroviseurs ne couvrent pas toute la zone arrière-latérale : un véhicule ou un cycliste peut donc s'y trouver sans être visible. Tourner la tête pour vérifier l'angle mort avant toute manœuvre permet de détecter ce danger et d'éviter une collision. La consommation de carburant, l'état de la chaussée ou l'image donnée aux autres usagers n'ont aucun rapport avec cette vérification de sécurité.",
      "difficulte": 1
    },
    {
      "id": "CND-0017",
      "theme": "conducteur",
      "enonce": "Juste avant de changer de direction ou de file sur votre moto, que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Se fier uniquement au clignotant pour prévenir les autres usagers"
        },
        {
          "id": "b",
          "texte": "Regarder dans les rétroviseurs"
        },
        {
          "id": "c",
          "texte": "Accélérer avant de manœuvrer pour se dégager plus vite"
        },
        {
          "id": "d",
          "texte": "Tourner brièvement la tête pour contrôler l'angle mort"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le contrôle avant une manœuvre combine deux étapes complémentaires : un coup d'œil aux rétroviseurs, puis un tour de tête pour vérifier l'angle mort, zone que les rétroviseurs ne couvrent pas. Le clignotant informe les autres usagers de votre intention mais ne remplace jamais cette double vérification visuelle, et accélérer avant de manœuvrer augmente le risque au lieu de le réduire.",
      "difficulte": 2
    },
    {
      "id": "CND-0018",
      "theme": "conducteur",
      "enonce": "Sous la pluie, dans le brouillard ou sur une chaussée glissante, comment devez-vous adapter votre conduite à moto ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Conserver la même distance de sécurité qu'en conditions sèches"
        },
        {
          "id": "b",
          "texte": "Réduire votre vitesse"
        },
        {
          "id": "c",
          "texte": "Rouler plus vite pour limiter le temps d'exposition au danger"
        },
        {
          "id": "d",
          "texte": "Augmenter la distance de sécurité avec le véhicule qui précède"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Une chaussée mouillée, verglacée ou une visibilité réduite allongent les distances de freinage et de perception : il faut donc rouler plus lentement et laisser davantage d'espace avec le véhicule précédent. Garder la distance habituelle ou accélérer pour « écourter » le danger revient au contraire à réduire sa marge de sécurité au moment où elle est la plus nécessaire.",
      "difficulte": 1
    },
    {
      "id": "CND-0019",
      "theme": "conducteur",
      "enonce": "Comment devez-vous vous comporter en abordant une intersection très fréquentée à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vous arrêter au milieu de l'intersection pour mieux évaluer la situation"
        },
        {
          "id": "b",
          "texte": "Redoubler de prudence et respecter les règles de priorité"
        },
        {
          "id": "c",
          "texte": "Accélérer pour dégager rapidement l'intersection"
        },
        {
          "id": "d",
          "texte": "Rester attentif aux mouvements imprévus des autres usagers"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Une intersection animée multiplie les trajectoires possibles : le motard doit donc renforcer sa vigilance, respecter scrupuleusement les priorités et surveiller les mouvements des autres véhicules ou piétons. S'arrêter au milieu de la chaussée crée un obstacle dangereux, et accélérer pour « passer plus vite » réduit le temps de réaction disponible en cas d'imprévu.",
      "difficulte": 2
    },
    {
      "id": "CND-0020",
      "theme": "conducteur",
      "enonce": "Pourquoi un motard doit-il anticiper le comportement des autres usagers de la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour pouvoir réagir plus vite et éviter un accident"
        },
        {
          "id": "b",
          "texte": "Pour rendre le trajet plus stimulant"
        },
        {
          "id": "c",
          "texte": "Pour pouvoir se concentrer sur d'autres tâches en parallèle"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Anticiper, c'est prévoir les actions probables des autres véhicules ou piétons pour disposer d'un temps de réaction suffisant et éviter une situation dangereuse. Ce n'est en aucun cas une façon de rendre la conduite plus « excitante », et cela ne permet jamais de relâcher son attention sur une autre tâche : la conduite reste l'unique priorité.",
      "difficulte": 1
    },
    {
      "id": "CND-0021",
      "theme": "conducteur",
      "enonce": "Face aux dangers propres à une route de campagne (virages aveugles, obstacles, faible visibilité), quelle attitude adopter à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour franchir rapidement les zones dangereuses"
        },
        {
          "id": "b",
          "texte": "Ne pas tenir compte de la signalisation, souvent absente sur ce type de route"
        },
        {
          "id": "c",
          "texte": "Réduire sa vitesse et adapter sa conduite à la configuration de la route"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Sur une route de campagne, la visibilité limitée et les obstacles imprévus imposent de ralentir et d'adapter sa trajectoire à la configuration des lieux. Accélérer réduit d'autant la marge de manœuvre en cas de surprise, et la signalisation, même moins dense qu'en ville, reste présente et doit toujours être respectée.",
      "difficulte": 1
    },
    {
      "id": "CND-0022",
      "theme": "conducteur",
      "enonce": "Quelle est la bonne pratique concernant l'usage des rétroviseurs à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les regarder uniquement au moment de tourner"
        },
        {
          "id": "b",
          "texte": "Les consulter fréquemment pour connaître la position et la vitesse des véhicules qui suivent"
        },
        {
          "id": "c",
          "texte": "S'en dispenser si la route est peu fréquentée"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les rétroviseurs doivent être consultés régulièrement, et pas seulement lors d'un changement de direction, afin de suivre en permanence la position et la vitesse des véhicules situés derrière soi. Se limiter aux moments de manœuvre ou renoncer à ce contrôle sur une route peu fréquentée expose à des surprises, notamment un véhicule qui rattrape rapidement.",
      "difficulte": 1
    },
    {
      "id": "CND-0023",
      "theme": "conducteur",
      "enonce": "Parmi les éléments suivants, lesquels peuvent vous alerter d'un danger potentiel sur la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement la couleur du revêtement"
        },
        {
          "id": "b",
          "texte": "Les panneaux de signalisation"
        },
        {
          "id": "c",
          "texte": "Le comportement des autres véhicules"
        },
        {
          "id": "d",
          "texte": "Les marquages au sol"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Un motard vigilant croise plusieurs types d'indices : panneaux, marquages au sol et comportement des autres véhicules (freinage brusque, changement de file inattendu) signalent tous un danger potentiel. La couleur du revêtement seule ne constitue pas un indice fiable et ne doit pas être considérée comme le seul élément à surveiller.",
      "difficulte": 2
    },
    {
      "id": "CND-0024",
      "theme": "conducteur",
      "enonce": "En quoi une observation constante de l'environnement améliore-t-elle la sécurité d'un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle autorise à rouler plus vite en toute sécurité"
        },
        {
          "id": "b",
          "texte": "Elle rend inutile la vérification régulière des rétroviseurs"
        },
        {
          "id": "c",
          "texte": "Elle permet de détecter un danger avant qu'il ne devienne critique"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Observer en permanence son environnement permet de repérer un risque à un stade précoce, laissant le temps d'anticiper une réaction adaptée plutôt que de subir l'événement. Cette vigilance ne dispense jamais de consulter les rétroviseurs, et elle n'autorise pas non plus à augmenter sa vitesse : l'objectif reste la sécurité, pas la performance.",
      "difficulte": 1
    },
    {
      "id": "CND-0025",
      "theme": "conducteur",
      "enonce": "Pourquoi faut-il éviter de tourner excessivement la tête en conduisant une moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela peut déstabiliser l'équilibre et le contrôle du véhicule"
        },
        {
          "id": "b",
          "texte": "Cela rend la conduite monotone"
        },
        {
          "id": "c",
          "texte": "Cela empêche d'utiliser les rétroviseurs"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Sur une moto, le regard et les mouvements de tête influencent directement la trajectoire et l'équilibre : un mouvement de tête trop ample ou trop long peut donc déséquilibrer le véhicule. Ce n'est ni une question de monotonie de la conduite, ni un obstacle à l'usage des rétroviseurs, qui reste toujours possible avec un mouvement de tête bref et maîtrisé.",
      "difficulte": 2
    },
    {
      "id": "CND-0026",
      "theme": "conducteur",
      "enonce": "Pourquoi faut-il être particulièrement vigilant à proximité des écoles ou des parcs à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que c'est uniquement une règle destinée à éviter une amende"
        },
        {
          "id": "b",
          "texte": "Parce que les enfants peuvent surgir et traverser sans prévenir"
        },
        {
          "id": "c",
          "texte": "Parce que la vitesse y est habituellement plus élevée qu'ailleurs"
        },
        {
          "id": "d",
          "texte": "Parce qu'il faut anticiper en réduisant sa vitesse dans ces zones"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Les enfants sont des usagers imprévisibles qui peuvent s'engager sur la chaussée sans avertissement, ce qui impose au motard de réduire sa vitesse par anticipation à proximité des écoles et des parcs. Cette vigilance ne se justifie pas par la crainte d'une sanction, et la vitesse pratiquée dans ces zones est en réalité généralement plus limitée, pas plus élevée.",
      "difficulte": 2
    },
    {
      "id": "CND-0027",
      "theme": "conducteur",
      "enonce": "Que signifie concrètement « observer de façon permanente et active » lorsqu'on conduit une moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Surveiller uniquement la route droit devant soi"
        },
        {
          "id": "b",
          "texte": "Se concentrer sur la signalisation en ignorant les autres véhicules"
        },
        {
          "id": "c",
          "texte": "Observer en continu l'ensemble de l'environnement, y compris rétroviseurs et angles morts"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "L'observation active consiste à balayer en permanence tout l'environnement de conduite (devant, sur les côtés et derrière, via les rétroviseurs et les angles morts) plutôt que de fixer un seul point. Se limiter à la route devant soi ou à la seule signalisation laisse des zones de danger totalement hors de contrôle.",
      "difficulte": 1
    },
    {
      "id": "CND-0028",
      "theme": "conducteur",
      "enonce": "Parmi les usagers suivants, lesquels sont considérés comme vulnérables et nécessitent une vigilance accrue de la part d'un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les poids lourds"
        },
        {
          "id": "b",
          "texte": "Les piétons"
        },
        {
          "id": "c",
          "texte": "Les cyclistes"
        },
        {
          "id": "d",
          "texte": "Les enfants"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Piétons, cyclistes et enfants sont des usagers vulnérables : peu protégés et parfois imprévisibles, ils demandent une attention renforcée, en particulier près des écoles, parcs et passages piétons. Les poids lourds, à l'inverse, ne relèvent pas de cette catégorie : ce sont eux qui présentent un risque pour les autres du fait de leur masse et de leurs angles morts étendus.",
      "difficulte": 1
    },
    {
      "id": "CND-0029",
      "theme": "conducteur",
      "enonce": "Pour un motard, que signifie réellement « bien analyser son environnement de conduite » ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réagir uniquement après qu'un danger s'est matérialisé"
        },
        {
          "id": "b",
          "texte": "Identifier les éléments environnants, évaluer les risques et réagir de façon appropriée"
        },
        {
          "id": "c",
          "texte": "Se contenter de suivre le véhicule qui précède"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Analyser son environnement est un processus en trois temps : identifier ce qui se passe autour de soi, évaluer le niveau de risque, puis réagir de la manière la plus adaptée. Attendre que le danger soit déjà là ou se contenter de suivre le véhicule devant soi revient à renoncer à cette anticipation, pourtant essentielle à la sécurité du motard.",
      "difficulte": 3
    },
    {
      "id": "CND-0030",
      "theme": "conducteur",
      "enonce": "Une fois installé sur votre moto avant de démarrer, quelles affirmations décrivent une posture correcte ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le dos doit rester droit."
        },
        {
          "id": "b",
          "texte": "Les bras doivent être totalement tendus et raidis."
        },
        {
          "id": "c",
          "texte": "Les bras doivent être légèrement fléchis pour amortir les irrégularités de la route."
        },
        {
          "id": "d",
          "texte": "Les pieds doivent pouvoir atteindre facilement les commandes."
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "La bonne posture associe un dos droit, des bras légèrement fléchis qui absorbent les chocs de la route, et des pieds bien positionnés pour actionner facilement le frein arrière et le sélecteur de vitesses. Des bras totalement tendus et raidis transmettent au contraire les vibrations au buste et réduisent la précision de conduite : cette position est donc à éviter.",
      "difficulte": 1
    },
    {
      "id": "CND-0031",
      "theme": "conducteur",
      "enonce": "À moto, quelle part de la puissance de freinage totale est assurée principalement par le frein avant ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Environ 30 %"
        },
        {
          "id": "b",
          "texte": "Environ 50 %"
        },
        {
          "id": "c",
          "texte": "Environ 70 %"
        },
        {
          "id": "d",
          "texte": "Environ 90 %"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le frein avant assure à lui seul environ 70 % de la puissance de freinage d'une moto, car le transfert de masse vers l'avant lors du freinage plaque la roue avant au sol tandis que l'arrière s'allège. Il ne doit donc jamais être négligé, mais reste à doser progressivement avec le frein arrière pour éviter tout blocage de roue.",
      "difficulte": 2
    },
    {
      "id": "CND-0032",
      "theme": "conducteur",
      "enonce": "Quelle est la bonne pratique pour accélérer en toute sécurité au guidon d'une moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Donner des à-coups de gaz pour tester l'adhérence du pneu."
        },
        {
          "id": "b",
          "texte": "Ouvrir les gaz progressivement, en anticipant la manœuvre et en tenant compte de l'état de la route."
        },
        {
          "id": "c",
          "texte": "Ne jamais réaccélérer avant la sortie complète d'un virage."
        },
        {
          "id": "d",
          "texte": "Accélérer au maximum dès que la voie est dégagée, sans tenir compte des conditions de circulation."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une accélération sûre est progressive : on ouvre les gaz en douceur, en anticipant ce qui va suivre et en adaptant sa vitesse à l'état de la chaussée et à la circulation. Un coup de gaz brusque ou une ouverture maximale sans discernement déstabilise la moto, alors qu'une légère réaccélération en sortie de virage aide au contraire à rétablir l'équilibre du véhicule.",
      "difficulte": 1
    },
    {
      "id": "CND-0033",
      "theme": "conducteur",
      "enonce": "Pour négocier un virage en toute sécurité à moto, quelles techniques faut-il appliquer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire sa vitesse avant d'entrer dans le virage."
        },
        {
          "id": "b",
          "texte": "Se pencher du côté opposé au virage pour contrebalancer la moto."
        },
        {
          "id": "c",
          "texte": "Se pencher dans la direction du virage."
        },
        {
          "id": "d",
          "texte": "Accélérer fortement dès l'entrée du virage."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La technique correcte consiste à ralentir avant d'entrer dans le virage, puis à se pencher avec la moto dans la direction de celui-ci pour conserver l'équilibre, avant de réaccélérer doucement à la sortie. Se pencher du côté opposé ou accélérer fort dès l'entrée compromet l'adhérence et la stabilité, avec un risque de chute ou de sortie de trajectoire.",
      "difficulte": 2
    },
    {
      "id": "CND-0034",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il nécessaire de doser progressivement la pression sur les freins d'une moto plutôt que de freiner d'un coup sec ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour économiser l'usure des plaquettes de frein."
        },
        {
          "id": "b",
          "texte": "Pour éviter que les freins ne surchauffent."
        },
        {
          "id": "c",
          "texte": "Pour éviter le blocage d'une roue et garder la maîtrise du véhicule."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un freinage progressif évite le blocage d'une roue, qui ferait perdre l'adhérence et donc la maîtrise de la moto, en particulier sur une machine sans ABS. L'économie des plaquettes ou la surchauffe ne sont pas les enjeux ici : c'est la sécurité de la trajectoire et l'équilibre du véhicule qui sont en cause.",
      "difficulte": 1
    },
    {
      "id": "CND-0035",
      "theme": "conducteur",
      "enonce": "En moto, laisser un intervalle suffisant avec le véhicule qui vous précède sert principalement à...",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Disposer du temps de réaction nécessaire si ce véhicule freine brusquement."
        },
        {
          "id": "b",
          "texte": "Limiter le risque de heurter l'arrière de ce véhicule, surtout sur chaussée glissante."
        },
        {
          "id": "c",
          "texte": "Réduire la consommation de carburant de la moto."
        },
        {
          "id": "d",
          "texte": "Diminuer l'usure de la chaîne de transmission."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Un intervalle suffisant vous laisse le temps de freiner si le véhicule devant vous ralentit brutalement, et limite le risque de heurter son arrière, notamment sur une chaussée humide où l'adhérence est réduite. La consommation de carburant et l'usure de la chaîne dépendent d'autres facteurs (conduite en douceur, entretien) et n'ont aucun lien avec la distance de sécurité.",
      "difficulte": 2
    },
    {
      "id": "CND-0036",
      "theme": "conducteur",
      "enonce": "Que signifie concrètement la « règle des deux secondes » utilisée pour évaluer une distance de sécurité correcte ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Rester à environ deux mètres du véhicule qui vous précède, quelle que soit la vitesse."
        },
        {
          "id": "b",
          "texte": "Laisser s'écouler deux secondes entre le passage du véhicule qui vous précède devant un repère fixe et votre propre passage à ce même repère."
        },
        {
          "id": "c",
          "texte": "Circuler à une vitesse inférieure de 20 km/h à la limite autorisée."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La méthode consiste à choisir un point fixe (poteau, panneau) et à compter mentalement « mille-un, mille-deux » à partir du moment où le véhicule devant vous le dépasse ; si vous atteignez ce point avant la fin du compte, vous êtes trop proche. Une distance fixe en mètres ne s'adapte pas à la vitesse, et rouler plus lentement que la limite ne garantit pas à lui seul un intervalle suffisant.",
      "difficulte": 1
    },
    {
      "id": "CND-0037",
      "theme": "conducteur",
      "enonce": "Dans quelles circonstances devez-vous augmenter l'espace laissé avec le véhicule qui vous précède ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Sur chaussée mouillée, enneigée ou verglacée."
        },
        {
          "id": "b",
          "texte": "Sur une route sèche et dégagée, par beau temps."
        },
        {
          "id": "c",
          "texte": "Lorsque vous roulez à vitesse élevée."
        },
        {
          "id": "d",
          "texte": "En circulation dense."
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Il faut allonger la distance de sécurité par pluie, neige ou verglas car l'adhérence et le freinage sont dégradés, à vitesse élevée car la distance de freinage augmente avec la vitesse, et en circulation dense car le risque de freinages brusques en chaîne est plus important. Sur route sèche et dégagée par beau temps, les conditions sont optimales et l'intervalle habituel de deux secondes reste suffisant.",
      "difficulte": 2
    },
    {
      "id": "CND-0038",
      "theme": "conducteur",
      "enonce": "À 90 km/h, quelle distance de sécurité correspond approximativement à un intervalle de deux secondes avec le véhicule qui vous précède ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "30 mètres."
        },
        {
          "id": "b",
          "texte": "50 mètres."
        },
        {
          "id": "c",
          "texte": "70 mètres."
        },
        {
          "id": "d",
          "texte": "90 mètres."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "À 90 km/h, un véhicule parcourt environ 25 mètres par seconde, ce qui donne environ 50 mètres pour un intervalle de deux secondes. Les autres valeurs ne correspondent pas à ce calcul : elles sous-estimeraient ou surestimeraient l'espace réellement nécessaire pour réagir.",
      "difficulte": 1
    },
    {
      "id": "CND-0039",
      "theme": "conducteur",
      "enonce": "À 50 km/h, quelle distance de sécurité correspond approximativement à un intervalle de deux secondes avec le véhicule qui vous précède ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "28 mètres."
        },
        {
          "id": "b",
          "texte": "15 mètres."
        },
        {
          "id": "c",
          "texte": "40 mètres."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "À 50 km/h, un véhicule parcourt environ 14 mètres par seconde, soit environ 28 mètres pour un intervalle de deux secondes. 15 mètres serait insuffisant pour réagir à temps, tandis que 40 mètres correspond à une distance plus proche de celle requise à une vitesse plus élevée.",
      "difficulte": 1
    },
    {
      "id": "CND-0040",
      "theme": "conducteur",
      "enonce": "Vous roulez à moto et vous préparez à vous insérer sur la voie de gauche pour dépasser un véhicule. Quel geste est indispensable pour prévenir les autres usagers de cette manœuvre ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Un appel de phares"
        },
        {
          "id": "b",
          "texte": "Un signe de la main vers l'arrière"
        },
        {
          "id": "c",
          "texte": "L'activation du clignotant correspondant"
        },
        {
          "id": "d",
          "texte": "Un coup d'avertisseur sonore"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le clignotant est le signal réglementaire à actionner suffisamment en amont pour annoncer tout changement de voie ou de direction et laisser aux autres usagers le temps d'anticiper. L'appel de phares et le klaxon ne remplacent pas cette obligation : ils sont réservés à d'autres usages (signaler sa présence, avertir d'un danger). Lâcher le guidon pour faire un signe de la main est en plus risqué à moto.",
      "difficulte": 1
    },
    {
      "id": "CND-0041",
      "theme": "conducteur",
      "enonce": "À l'approche d'un carrefour, vous croisez le regard d'un automobiliste qui s'engage. Quel est l'intérêt de cet échange visuel pour votre sécurité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il permet de vérifier que l'autre conducteur vous a bien vu et a compris vos intentions"
        },
        {
          "id": "b",
          "texte": "Il remplace avantageusement l'usage du clignotant"
        },
        {
          "id": "c",
          "texte": "Il dispense de respecter les règles de priorité à ce carrefour"
        },
        {
          "id": "d",
          "texte": "Il est particulièrement utile aux intersections et aux passages piétons pour confirmer une compréhension mutuelle"
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Le contact visuel confirme que vous avez été vu et compris, ce qui est précieux aux intersections et passages piétons où les trajectoires se croisent. Il complète les autres signaux mais ne remplace jamais le clignotant, qui reste obligatoire pour annoncer un changement de direction, et ne dispense en aucun cas de respecter les règles de priorité.",
      "difficulte": 2
    },
    {
      "id": "CND-0042",
      "theme": "conducteur",
      "enonce": "Dans quelle situation l'usage de l'avertisseur sonore (klaxon) est-il justifié à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour attirer immédiatement l'attention en cas de danger"
        },
        {
          "id": "b",
          "texte": "Pour annoncer un changement de direction"
        },
        {
          "id": "c",
          "texte": "Pour saluer un autre motard que vous croisez"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "L'avertisseur sonore doit être utilisé avec parcimonie, réservé aux situations où il faut attirer l'attention sur un danger immédiat, par exemple un usager qui ne vous a pas vu. Il ne sert pas à indiquer une direction, c'est le rôle du clignotant, ni à saluer : un usage abusif du klaxon peut au contraire distraire ou agacer inutilement les autres usagers.",
      "difficulte": 1
    },
    {
      "id": "CND-0043",
      "theme": "conducteur",
      "enonce": "Vous circulez sur une voie unique et vous vous rapprochez progressivement du bord droit à l'approche d'une intersection. Que peut en déduire un usager attentif circulant derrière vous ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Que vous n'avez aucune intention particulière, c'est un hasard"
        },
        {
          "id": "b",
          "texte": "Que vous remplacez ainsi totalement l'usage du clignotant"
        },
        {
          "id": "c",
          "texte": "Que votre position sur la chaussée peut communiquer une intention, au même titre que d'autres signaux"
        },
        {
          "id": "d",
          "texte": "Que vous vous préparez probablement à tourner ou à vous arrêter à droite"
        }
      ],
      "bonnesReponses": [
        "c",
        "d"
      ],
      "explication": "Le positionnement sur la chaussée fait partie des signaux non verbaux qu'un motard peut donner : se rapprocher du bord droit avant un virage laisse deviner une intention de tourner ou de s'arrêter à droite. Cela reste un indice complémentaire et non un substitut au clignotant, qui doit toujours être actionné pour annoncer clairement la manœuvre.",
      "difficulte": 2
    },
    {
      "id": "CND-0044",
      "theme": "conducteur",
      "enonce": "Parmi les comportements suivants, lesquels correspondent aux bonnes pratiques recommandées à un motard pour mieux communiquer avec les autres usagers et rouler en sécurité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Coller le véhicule qui précède pour rester davantage dans son champ de vision"
        },
        {
          "id": "b",
          "texte": "Porter un équipement réfléchissant et rouler avec les feux allumés même en plein jour"
        },
        {
          "id": "c",
          "texte": "Anticiper les erreurs possibles des autres conducteurs plutôt que de leur faire systématiquement confiance"
        },
        {
          "id": "d",
          "texte": "Conserver une distance de sécurité suffisante pour pouvoir réagir à temps en cas d'imprévu"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Un motard est moins visible qu'une voiture : porter un équipement réfléchissant et rouler feux allumés de jour réduit ce risque. Il doit aussi anticiper les fautes possibles des autres usagers (conduite préventive) et garder une distance de sécurité suffisante pour disposer d'un temps de réaction. À l'inverse, réduire l'écart avec le véhicule qui précède supprime toute marge de manœuvre et augmente le risque de collision.",
      "difficulte": 2
    },
    {
      "id": "CND-0045",
      "theme": "conducteur",
      "enonce": "Concernant l'acuité visuelle minimale exigée pour conduire une moto en France, que dit la réglementation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle doit atteindre au moins 8/10, sans possibilité de correction optique."
        },
        {
          "id": "b",
          "texte": "Elle doit atteindre au moins 5/10, mesurée avec les deux yeux ouverts ensemble."
        },
        {
          "id": "c",
          "texte": "Le port de lunettes ou de lentilles est autorisé pour atteindre ce seuil."
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Le seuil réglementaire du groupe léger (motos comprises) est de 5/10 en vision binoculaire, et la correction par lunettes ou lentilles est admise pour l'atteindre. L'exigence de 8/10 sans correction est fausse : ce chiffre ne correspond pas au seuil retenu et la correction n'est jamais interdite.",
      "difficulte": 2
    },
    {
      "id": "CND-0046",
      "theme": "conducteur",
      "enonce": "Quel est le champ visuel horizontal minimal requis pour obtenir un permis de conduire du groupe léger (dont la moto) en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "90°"
        },
        {
          "id": "b",
          "texte": "150°"
        },
        {
          "id": "c",
          "texte": "120°"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La norme retenue fixe un champ visuel horizontal d'au moins 120°, nécessaire pour repérer un danger latéral avant qu'il n'entre dans l'axe de vision centrale. 90° serait insuffisant pour ce rôle d'alerte, et 150° dépasse l'exigence réellement fixée par la réglementation.",
      "difficulte": 2
    },
    {
      "id": "CND-0047",
      "theme": "conducteur",
      "enonce": "Un candidat totalement sourd peut-il légalement passer et obtenir le permis moto en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Non, un seuil d'audition minimal est exigé pour tous les permis, y compris le permis moto."
        },
        {
          "id": "b",
          "texte": "Oui, aucun seuil d'audition n'est imposé pour le permis du groupe léger, motos comprises."
        },
        {
          "id": "c",
          "texte": "Oui, mais uniquement grâce à une dérogation médicale renouvelée chaque année."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "À la différence de la vision, l'audition ne fait l'objet d'aucun seuil réglementaire pour le permis du groupe léger : une personne sourde peut légalement conduire une moto. Les propositions a et c inventent des contraintes (seuil obligatoire, dérogation annuelle) qui n'existent pas dans les textes.",
      "difficulte": 2
    },
    {
      "id": "CND-0048",
      "theme": "conducteur",
      "enonce": "À quoi sert principalement la vision périphérique lorsque vous roulez à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Détecter un danger qui arrive sur le côté sans avoir à tourner la tête."
        },
        {
          "id": "b",
          "texte": "Lire distinctement un panneau de signalisation encore lointain."
        },
        {
          "id": "c",
          "texte": "Distinguer plus finement les couleurs des feux tricolores."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La vision périphérique couvre les zones latérales du champ visuel et permet de repérer un danger venant du côté, en particulier aux intersections et lors des dépassements. Lire un panneau lointain relève de la vision centrale (acuité), et distinguer des couleurs est une fonction visuelle distincte.",
      "difficulte": 1
    },
    {
      "id": "CND-0049",
      "theme": "conducteur",
      "enonce": "Concernant l'éblouissement à moto, quelles affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des lunettes ou une visière teintée aident à réduire la gêne en plein jour."
        },
        {
          "id": "b",
          "texte": "Il est conseillé de garder la même visière très teintée, de jour comme de nuit."
        },
        {
          "id": "c",
          "texte": "Une visière fortement teintée est interdite dès la tombée de la nuit ou par visibilité insuffisante."
        },
        {
          "id": "d",
          "texte": "L'éblouissement ne concerne que les automobilistes, pas les motards."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Une teinte adaptée réduit l'éblouissement de jour, mais devient dangereuse la nuit car elle diminue trop la luminosité perçue : son usage est donc proscrit dans ces conditions. La proposition b contredit directement cette interdiction, et d est fausse puisque les motards, exposés sans pare-brise protecteur, sont au moins aussi concernés par l'éblouissement.",
      "difficulte": 2
    },
    {
      "id": "CND-0050",
      "theme": "conducteur",
      "enonce": "Sous le casque, quels sons un motard doit-il impérativement pouvoir percevoir pour rouler en sécurité ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une conversation avec un passager à l'arrêt."
        },
        {
          "id": "b",
          "texte": "La sirène d'un véhicule d'urgence prioritaire."
        },
        {
          "id": "c",
          "texte": "De la musique diffusée en continu."
        },
        {
          "id": "d",
          "texte": "Le signal sonore d'un passage à niveau."
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Percevoir rapidement une sirène ou l'avertisseur d'un passage à niveau permet de réagir à temps (céder le passage, s'arrêter). Discuter avec un passager à l'arrêt n'a aucun enjeu de sécurité routière, et écouter de la musique en continu réduit au contraire la vigilance auditive nécessaire.",
      "difficulte": 1
    },
    {
      "id": "CND-0051",
      "theme": "conducteur",
      "enonce": "Que prévoit la réglementation française sur les protections auditives et les écouteurs pour un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des bouchons d'oreille passifs, qui n'émettent aucun son, peuvent être utilisés pour se protéger du bruit du vent."
        },
        {
          "id": "b",
          "texte": "Toute protection auditive, quelle qu'elle soit, est strictement interdite à moto."
        },
        {
          "id": "c",
          "texte": "Porter une oreillette qui diffuse de la musique ou des appels est interdit en conduisant."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Les bouchons passifs, qui atténuent le bruit sans émettre de son, restent autorisés, alors que le port d'un dispositif diffusant un son (musique, appels) est interdit en conduisant, y compris à moto. La proposition b est fausse puisque la protection passive du bruit n'est pas interdite en elle-même.",
      "difficulte": 3
    },
    {
      "id": "CND-0052",
      "theme": "conducteur",
      "enonce": "Le permis d'un motard porte une mention imposant le port d'une correction visuelle. Que doit-il en conclure ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cette mention n'est qu'indicative et n'entraîne aucune obligation réelle."
        },
        {
          "id": "b",
          "texte": "Il doit la respecter à chaque trajet, y compris les plus courts."
        },
        {
          "id": "c",
          "texte": "Ne pas la respecter peut entraîner une sanction, comme pour d'autres restrictions liées au permis."
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Quand une correction est mentionnée sur le permis, elle est obligatoire à chaque conduite, sans exception pour les petits trajets, et son non-respect est sanctionnable au même titre qu'une autre restriction de permis non respectée. La proposition a minimise à tort une obligation bien réelle.",
      "difficulte": 2
    },
    {
      "id": "CND-0053",
      "theme": "conducteur",
      "enonce": "Pourquoi est-il conseillé à un motard de faire contrôler régulièrement sa vue, même sans gêne apparente ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce qu'il ne consultera un professionnel qu'après un accident."
        },
        {
          "id": "b",
          "texte": "Parce que la vue peut évoluer progressivement sans que l'on s'en rende compte soi-même."
        },
        {
          "id": "c",
          "texte": "Parce qu'il suffit de se fier à son propre ressenti, sans examen."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une baisse de vue peut être progressive et passer inaperçue, d'où l'intérêt d'un contrôle régulier permettant de la détecter avant qu'elle ne compromette la sécurité. Attendre un accident ou se fier uniquement à son ressenti revient à ignorer une dégradation souvent indétectable sans examen.",
      "difficulte": 1
    },
    {
      "id": "CND-0054",
      "theme": "conducteur",
      "enonce": "Parmi les éléments suivants, lesquels comptent parmi les aspects de la vision essentiels à une conduite moto sécurisée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "L'acuité visuelle"
        },
        {
          "id": "b",
          "texte": "Le champ visuel"
        },
        {
          "id": "c",
          "texte": "La force de préhension des mains"
        },
        {
          "id": "d",
          "texte": "La perception des couleurs des feux et panneaux"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "Une conduite sûre repose sur plusieurs composantes visuelles complémentaires : la netteté de l'image (acuité), l'étendue du champ visuel pour repérer les dangers latéraux, et la perception des couleurs pour interpréter feux et panneaux. La force de préhension relève de la motricité des mains, pas de la vision.",
      "difficulte": 2
    },
    {
      "id": "CND-0055",
      "theme": "conducteur",
      "enonce": "Quelle différence existe-t-il, en France, entre les exigences de vision et d'audition pour le permis moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les deux sont soumises à un seuil chiffré strictement identique."
        },
        {
          "id": "b",
          "texte": "Seule l'audition fait l'objet d'un contrôle réglementaire strict."
        },
        {
          "id": "c",
          "texte": "Seule la vision fait l'objet d'un seuil réglementaire ; aucun test d'audition n'est légalement imposé."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La réglementation fixe des seuils précis pour la vision (acuité, champ visuel) mais ne prévoit aucun test d'audition obligatoire pour le permis du groupe léger ; un contrôle auditif reste une simple recommandation de prudence. Les deux autres propositions inversent ou inventent des exigences inexistantes.",
      "difficulte": 2
    },
    {
      "id": "CND-0056",
      "theme": "conducteur",
      "enonce": "Vous avez un doute sérieux sur la qualité de votre vision ou de votre audition. Quelle est la bonne démarche à adopter avant tout ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Continuer à rouler normalement en attendant que le doute se confirme."
        },
        {
          "id": "b",
          "texte": "Faire réaliser un test de vision ou d'audition par un professionnel de santé."
        },
        {
          "id": "c",
          "texte": "Se contenter de rouler uniquement de jour."
        },
        {
          "id": "d",
          "texte": "Changer simplement de modèle de casque."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Face à un doute, la démarche adaptée est de consulter un professionnel pour objectiver le problème par un test ; adapter ensuite sa conduite peut compléter cette démarche mais ne la remplace pas. Continuer à rouler, se limiter au jour ou changer de casque ne traitent en rien la cause potentielle du problème.",
      "difficulte": 1
    },
    {
      "id": "CND-0057",
      "theme": "conducteur",
      "enonce": "En moto, bien évaluer les distances et les vitesses des autres véhicules sert avant tout à :",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Reconnaître la couleur de la carrosserie des autres véhicules."
        },
        {
          "id": "b",
          "texte": "Respecter uniquement la limitation de vitesse affichée."
        },
        {
          "id": "c",
          "texte": "Compter précisément le nombre de véhicules présents sur la chaussée."
        },
        {
          "id": "d",
          "texte": "Anticiper un dépassement ou une manœuvre en toute sécurité."
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Bien estimer distance et vitesse relative permet d'anticiper un dépassement, une insertion ou un freinage d'urgence en toute sécurité. Respecter la limitation affichée relève de la lecture des panneaux, pas de l'estimation de distance ou de vitesse, et la couleur ou le nombre de véhicules n'a aucune utilité sécuritaire directe.",
      "difficulte": 1
    },
    {
      "id": "CND-0058",
      "theme": "conducteur",
      "enonce": "Comment l'acuité visuelle exigée pour le permis de conduire est-elle réellement exprimée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "En dioptries, comme la puissance de correction d'une paire de lunettes."
        },
        {
          "id": "b",
          "texte": "Sous forme de fraction, par exemple 5/10 ou 10/10."
        },
        {
          "id": "c",
          "texte": "En pourcentage par rapport à un œil jugé « parfait »."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'acuité visuelle se mesure par une fraction (type 5/10) qui reflète la finesse de perception des détails à une distance donnée. Les dioptries mesurent une grandeur différente, la puissance de correction optique nécessaire en cas de myopie ou d'hypermétropie, et le pourcentage n'est pas l'unité utilisée en France.",
      "difficulte": 3
    },
    {
      "id": "CND-0059",
      "theme": "conducteur",
      "enonce": "Un candidat qui ne voit que d'un seul œil (vision dite monoculaire) peut-il obtenir le permis moto en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Non, la vision binoculaire est une condition absolue, sans aucune exception possible."
        },
        {
          "id": "b",
          "texte": "Oui, automatiquement, sans aucun contrôle médical particulier."
        },
        {
          "id": "c",
          "texte": "Oui, si l'œil fonctionnel atteint le seuil d'acuité requis et qu'un avis médical valide la situation."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La réglementation prévoit une exception pour la vision monoculaire : si l'œil valide atteint le seuil d'acuité exigé et qu'un avis médical confirme l'aptitude, le permis peut être délivré. Affirmer une interdiction absolue ou, à l'inverse, une délivrance automatique sans contrôle sont deux extrêmes également faux.",
      "difficulte": 3
    },
    {
      "id": "CND-0060",
      "theme": "conducteur",
      "enonce": "Vous roulez depuis plusieurs heures et sentez la fatigue s'installer. En quoi cet état représente-t-il un danger particulier à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle ralentit vos réflexes et altère votre capacité à réagir rapidement"
        },
        {
          "id": "b",
          "texte": "Elle rend votre conduite plus prudente et plus sûre"
        },
        {
          "id": "c",
          "texte": "Elle n'a aucune incidence sur la conduite d'un deux-roues"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La fatigue diminue la vigilance, allonge le temps de réaction et perturbe la prise de décision, des capacités essentielles à moto où l'équilibre et les réflexes sont sollicités en permanence. Elle ne rend jamais la conduite plus sûre (b), et ignorer son effet sur la vigilance (c) est risqué : un simple micro-endormissement peut suffire à provoquer une chute.",
      "difficulte": 1
    },
    {
      "id": "CND-0061",
      "theme": "conducteur",
      "enonce": "Parmi les signes suivants, lesquels doivent vous alerter sur un état de fatigue au guidon ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des bâillements qui se répètent"
        },
        {
          "id": "b",
          "texte": "Une difficulté à garder une vitesse régulière"
        },
        {
          "id": "c",
          "texte": "Une sensation de grande vivacité et de réflexes affûtés"
        },
        {
          "id": "d",
          "texte": "Des paupières de plus en plus lourdes"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "Bâillements répétés, paupières lourdes et difficulté à tenir une allure stable sont des signaux caractéristiques de la fatigue, au même titre que le coup de fatigue soudain ou la perte de concentration. Une sensation de vivacité accrue (c) correspond au contraire à l'état d'un conducteur bien reposé, pas fatigué : ce n'est donc pas un signe d'alerte.",
      "difficulte": 2
    },
    {
      "id": "CND-0062",
      "theme": "conducteur",
      "enonce": "Avant d'entamer un long trajet à moto, quelles habitudes permettent réellement de limiter les risques liés à la fatigue ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Bien dormir la nuit précédant le départ"
        },
        {
          "id": "b",
          "texte": "Prendre un repas copieux juste avant d'enfourcher la moto pour \"faire le plein d'énergie\""
        },
        {
          "id": "c",
          "texte": "Privilégier des repas légers et rester bien hydraté"
        },
        {
          "id": "d",
          "texte": "Rouler d'une seule traite pour raccourcir le trajet global"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Un sommeil suffisant avant le départ, associé à une alimentation légère et à une bonne hydratation, aide à rester vigilant sur la durée. À l'inverse, un repas copieux (b) favorise la somnolence digestive, et rouler sans jamais s'arrêter (d) accélère l'apparition de la fatigue au lieu de la prévenir.",
      "difficulte": 2
    },
    {
      "id": "CND-0063",
      "theme": "conducteur",
      "enonce": "Vous ressentez clairement les premiers signes de fatigue en roulant. Quelle est la bonne réaction à adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vous arrêter dès que possible dans un endroit sûr pour faire une vraie pause"
        },
        {
          "id": "b",
          "texte": "Continuer à rouler en vous forçant à vous concentrer davantage"
        },
        {
          "id": "c",
          "texte": "Boire un café et repartir immédiatement, cela suffit à écarter le risque"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Dès que la fatigue se manifeste, s'arrêter dans un lieu sécurisé et faire une pause, éventuellement une courte sieste, est la seule réaction fiable. Continuer en se forçant à se concentrer (b) ne compense pas la baisse réelle des réflexes, et une boisson caféinée (c) peut aider ponctuellement mais ne doit jamais être le seul moyen utilisé pour éviter une vraie pause.",
      "difficulte": 1
    },
    {
      "id": "CND-0064",
      "theme": "conducteur",
      "enonce": "Lors d'un trajet moto de plusieurs heures, à quel rythme est-il recommandé de marquer des pauses pour prévenir la fatigue ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Environ toutes les deux heures"
        },
        {
          "id": "b",
          "texte": "Environ toutes les quatre heures"
        },
        {
          "id": "c",
          "texte": "Environ toutes les six heures"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La règle généralement recommandée est de marquer une pause environ toutes les deux heures de conduite, ce qui permet de relâcher la tension physique et de retrouver de l'attention. Espacer davantage les arrêts (b et c) laisse trop de temps à la fatigue pour s'installer, surtout à moto où la posture et la vigilance sont sollicitées en continu.",
      "difficulte": 1
    },
    {
      "id": "CND-0065",
      "theme": "conducteur",
      "enonce": "Après plusieurs heures de route, la fatigue s'installe progressivement chez le motard. Quelle est sa principale conséquence sur la conduite ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle n'a aucune incidence sur la conduite si le trajet reste court"
        },
        {
          "id": "b",
          "texte": "Elle améliore la perception des distances avec les autres véhicules"
        },
        {
          "id": "c",
          "texte": "Elle diminue la capacité de réaction et le niveau de vigilance"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La fatigue ralentit le traitement de l'information par le cerveau, ce qui allonge le temps de réaction et réduit la vigilance face aux dangers imprévus. Elle ne peut en aucun cas améliorer la perception, et ses effets se font sentir dès les premiers signes, quelle que soit la longueur du trajet.",
      "difficulte": 1
    },
    {
      "id": "CND-0066",
      "theme": "conducteur",
      "enonce": "Hors conducteurs novices soumis au permis probatoire, quel taux d'alcoolémie ne devez-vous pas dépasser pour prendre le guidon en toute légalité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "0,5 g/l de sang"
        },
        {
          "id": "b",
          "texte": "0,8 g/l de sang"
        },
        {
          "id": "c",
          "texte": "0,2 g/l de sang"
        },
        {
          "id": "d",
          "texte": "Aucune limite n'est fixée pour les conducteurs de deux-roues"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le code de la route fixe la limite légale générale à 0,5 g/l de sang (soit 0,25 mg/l d'air expiré) ; les conducteurs en permis probatoire doivent, eux, respecter un seuil plus strict de 0,2 g/l. Le seuil de 0,8 g/l correspond au passage en délit et non à une limite autorisée, et il n'existe aucune exemption réservée aux deux-roues.",
      "difficulte": 2
    },
    {
      "id": "CND-0067",
      "theme": "conducteur",
      "enonce": "Sommeil suffisant, alimentation équilibrée, activité physique régulière : quel est l'intérêt de tout cela pour un motard avant de prendre la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela permet d'impressionner les autres usagers de la route"
        },
        {
          "id": "b",
          "texte": "Cela ne sert à rien sur un trajet court"
        },
        {
          "id": "c",
          "texte": "Cela aide à maintenir une vigilance optimale"
        },
        {
          "id": "d",
          "texte": "Cela permet de conserver des réflexes rapides"
        }
      ],
      "bonnesReponses": [
        "c",
        "d"
      ],
      "explication": "Une bonne hygiène de vie (sommeil, alimentation, activité physique) entretient la vigilance et la rapidité des réflexes, deux qualités indispensables pour réagir à un imprévu sur la route. Cela n'a rien à voir avec l'image renvoyée aux autres usagers, et comme un accident peut survenir dès les premiers mètres, la durée du trajet ne dispense jamais d'être en forme.",
      "difficulte": 2
    },
    {
      "id": "CND-0068",
      "theme": "conducteur",
      "enonce": "Vous bâillez sans arrêt et vos paupières s'alourdissent au guidon. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Continuer à rouler jusqu'à destination pour ne pas perdre de temps"
        },
        {
          "id": "b",
          "texte": "Augmenter votre vitesse pour écourter le trajet"
        },
        {
          "id": "c",
          "texte": "Ouvrir la visière du casque pour vous « réveiller » et poursuivre la route"
        },
        {
          "id": "d",
          "texte": "Vous arrêter dès que possible pour vous reposer"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Bâillements répétés et yeux lourds sont des signaux d'alerte de la fatigue qui imposent de s'arrêter pour se reposer, voire dormir, avant de reprendre la route. Continuer, accélérer ou chercher un geste ponctuel pour se « réveiller » ne compense jamais la baisse réelle des réflexes et de la vigilance.",
      "difficulte": 1
    },
    {
      "id": "CND-0069",
      "theme": "conducteur",
      "enonce": "Concernant les distractions au guidon (téléphone, GPS...), que devez-vous retenir pour rouler en sécurité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il faut garder les deux mains sur le guidon et le regard fixé sur la route"
        },
        {
          "id": "b",
          "texte": "Consulter son téléphone est sans danger à un feu rouge, moteur tournant"
        },
        {
          "id": "c",
          "texte": "Manipuler le GPS en roulant est une pratique dangereuse à éviter"
        },
        {
          "id": "d",
          "texte": "Seule la vitesse excessive constitue une réelle distraction au guidon"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La sécurité impose de garder les mains sur le guidon et les yeux sur la route, et manipuler un GPS en roulant détourne dangereusement l'attention. Consulter son téléphone à un feu, moteur tournant, reste risqué car cela retarde la réaction en cas de redémarrage brusque de la circulation ; et la distraction ne se limite pas à la vitesse, tout comportement qui capte l'attention du conducteur est un facteur de risque.",
      "difficulte": 2
    },
    {
      "id": "CND-0070",
      "theme": "conducteur",
      "enonce": "Avant de partir rouler, un motard prend un antihistaminique en vente libre contre ses allergies. Quel risque cela fait-il courir sur sa conduite ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Aucun risque, ces médicaments n'ont pas d'effet sur la conduite"
        },
        {
          "id": "b",
          "texte": "Une meilleure perception des distances"
        },
        {
          "id": "c",
          "texte": "Une somnolence qui réduit la vigilance et allonge le temps de réaction"
        },
        {
          "id": "d",
          "texte": "Une vigilance accrue et des réflexes plus rapides"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Les antihistaminiques, même vendus sans ordonnance, peuvent provoquer une somnolence importante qui réduit la vigilance et allonge le temps de réaction, ce qui est dangereux à moto. Ils ne procurent ni vigilance accrue ni meilleure perception des distances : le fait qu'un médicament soit en vente libre ne signifie pas qu'il soit sans risque au guidon.",
      "difficulte": 1
    },
    {
      "id": "CND-0071",
      "theme": "conducteur",
      "enonce": "Un motard suit un traitement à base d'analgésiques opioïdes prescrit contre une douleur chronique. Quel effet ce traitement peut-il avoir sur sa conduite ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une accélération du temps de réaction"
        },
        {
          "id": "b",
          "texte": "Une réduction des réflexes et de la capacité à décider rapidement"
        },
        {
          "id": "c",
          "texte": "Une meilleure gestion du stress au guidon"
        },
        {
          "id": "d",
          "texte": "Une amélioration de la coordination des gestes"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les analgésiques opioïdes diminuent les réflexes et la capacité à prendre des décisions rapides, deux qualités indispensables à moto. Ils n'accélèrent pas le temps de réaction, n'améliorent pas la coordination des gestes et ne facilitent pas la gestion du stress : leurs effets réels vont exactement dans le sens inverse de ces propositions.",
      "difficulte": 2
    },
    {
      "id": "CND-0072",
      "theme": "conducteur",
      "enonce": "Quelle substance illicite est réputée ralentir le temps de réaction, fausser la perception des distances et diminuer la coordination du conducteur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cocaïne"
        },
        {
          "id": "b",
          "texte": "Ecstasy"
        },
        {
          "id": "c",
          "texte": "Cannabis"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le cannabis ralentit le temps de réaction, fausse la perception des distances et réduit la coordination, ce qui en fait une substance particulièrement dangereuse au guidon. La cocaïne agit différemment : stimulant, elle peut donner une vigilance passagère mais pousse surtout à l'imprudence. L'ecstasy, elle, est plutôt associée à des troubles des perceptions sensorielles.",
      "difficulte": 2
    },
    {
      "id": "CND-0073",
      "theme": "conducteur",
      "enonce": "Quelle drogue est particulièrement connue pour provoquer des hallucinations et perturber les perceptions sensorielles d'un conducteur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ecstasy"
        },
        {
          "id": "b",
          "texte": "Cannabis"
        },
        {
          "id": "c",
          "texte": "Cocaïne"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "L'ecstasy est connue pour altérer les perceptions sensorielles et peut provoquer des hallucinations ainsi que des pertes de concentration, la rendant incompatible avec la conduite d'une moto. Le cannabis affecte plutôt le temps de réaction et la coordination, tandis que la cocaïne est un stimulant qui favorise l'imprudence sans provoquer ce type d'hallucinations sensorielles.",
      "difficulte": 2
    },
    {
      "id": "CND-0074",
      "theme": "conducteur",
      "enonce": "En France, quelles peuvent être les conséquences légales pour un motard contrôlé positif à un dépistage de drogues au guidon ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une amende"
        },
        {
          "id": "b",
          "texte": "Une récompense pour civisme"
        },
        {
          "id": "c",
          "texte": "La suspension du permis de conduire"
        },
        {
          "id": "d",
          "texte": "Une peine de prison possible"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "La conduite sous l'influence de drogues est sévèrement sanctionnée en France : amende, suspension du permis de conduire et peine de prison sont toutes prévues par la loi selon la gravité des faits, notamment lors de dépistages réalisés en contrôle routier ou après un accident. Il n'existe évidemment aucune 'récompense' pour ce type de comportement, qui met en danger le conducteur et les autres usagers.",
      "difficulte": 2
    },
    {
      "id": "CND-0075",
      "theme": "conducteur",
      "enonce": "De manière générale, quels effets secondaires liés à la prise de médicaments (sur ordonnance ou en vente libre) peuvent compromettre la sécurité d'un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une diminution de la coordination des gestes"
        },
        {
          "id": "b",
          "texte": "Une amélioration du temps de réaction"
        },
        {
          "id": "c",
          "texte": "Une difficulté à juger correctement les distances et la vitesse"
        },
        {
          "id": "d",
          "texte": "Une meilleure anticipation des dangers de la route"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Certains médicaments peuvent réduire la coordination des gestes et rendre plus difficile l'évaluation correcte des distances et de la vitesse, deux capacités essentielles à moto. Ils n'améliorent en aucun cas le temps de réaction ni l'anticipation des dangers : au contraire, ils tendent à les détériorer, ce qui impose la plus grande prudence avant de prendre la route sous traitement.",
      "difficulte": 1
    },
    {
      "id": "CND-0076",
      "theme": "conducteur",
      "enonce": "En France, quel taux d'alcoolémie ne doit pas être dépassé par un titulaire du permis moto qui n'est plus en période probatoire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "0,2 g par litre de sang"
        },
        {
          "id": "b",
          "texte": "0,5 g par litre de sang"
        },
        {
          "id": "c",
          "texte": "0,8 g par litre de sang"
        },
        {
          "id": "d",
          "texte": "1,0 g par litre de sang"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le seuil légal général est de 0,5 g d'alcool par litre de sang (soit 0,25 mg/L d'air expiré) ; au-delà, le conducteur est en infraction. Le seuil de 0,2 g/L existe bien en droit français, mais il ne s'applique qu'aux conducteurs en permis probatoire, pas à la règle générale visée ici. 0,8 et 1,0 g/L dépassent largement la limite autorisée et correspondent déjà à un délit. Sur une moto, même un taux inférieur au seuil légal accroît le risque, car tenir l'équilibre demande une vigilance plus fine qu'en voiture.",
      "difficulte": 1
    },
    {
      "id": "CND-0077",
      "theme": "conducteur",
      "enonce": "Quelle est la conséquence de l'alcool sur le temps de réaction d'un motard face à un danger soudain ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il le raccourcit"
        },
        {
          "id": "b",
          "texte": "Il l'allonge"
        },
        {
          "id": "c",
          "texte": "Il reste identique"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'alcool agit comme un dépresseur du système nerveux central : il ralentit les réflexes, donc le temps nécessaire pour freiner ou éviter un obstacle s'allonge. À moto, où chaque fraction de seconde compte pour garder l'équilibre et éviter un choc, cet allongement est particulièrement dangereux. Il ne raccourcit jamais les réflexes et n'est jamais sans effet, contrairement aux deux autres propositions.",
      "difficulte": 1
    },
    {
      "id": "CND-0078",
      "theme": "conducteur",
      "enonce": "Pourquoi un motard est-il plus exposé qu'un automobiliste aux effets de l'alcool sur la conduite ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que l'alcool perturbe la coordination fine nécessaire à l'équilibre, à la vitesse et à la direction"
        },
        {
          "id": "b",
          "texte": "Parce que l'alcool pousse à sous-estimer les dangers en altérant le jugement"
        },
        {
          "id": "c",
          "texte": "Parce que l'alcool améliore la concentration sur la trajectoire"
        },
        {
          "id": "d",
          "texte": "Parce que l'alcool stabilise l'équilibre à basse vitesse"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Contrairement à une voiture, une moto exige un équilibre actif permanent : l'alcool dégrade cette coordination fine et altère le jugement, ce qui pousse à prendre des risques inconsidérés et à minimiser le danger. L'alcool n'améliore jamais la concentration ni ne stabilise l'équilibre : c'est un dépresseur qui dégrade toutes les capacités utiles à la conduite, y compris la vision.",
      "difficulte": 2
    },
    {
      "id": "CND-0079",
      "theme": "conducteur",
      "enonce": "Un motard est contrôlé positif à l'alcoolémie. Quelles sanctions peut-il encourir, notamment si des circonstances aggravantes ou une récidive sont retenues ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une amende"
        },
        {
          "id": "b",
          "texte": "Un retrait de points pouvant conduire à la suspension ou à l'annulation du permis"
        },
        {
          "id": "c",
          "texte": "Une peine de prison"
        },
        {
          "id": "d",
          "texte": "Aucune sanction si aucun accident n'a eu lieu"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "La loi prévoit un éventail de sanctions cumulables pour la conduite sous alcool : amende, retrait de points, suspension ou annulation du permis, et de la prison en cas de circonstances aggravantes ou de récidive. L'infraction est constituée par le simple fait de conduire avec un taux excessif, qu'il y ait eu ou non un accident : l'absence de choc ne protège donc pas le conducteur.",
      "difficulte": 2
    },
    {
      "id": "CND-0080",
      "theme": "conducteur",
      "enonce": "Vous avez bu de l'alcool lors d'une soirée et deviez repartir à moto. Quelle attitude adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler plus lentement pour compenser l'effet de l'alcool"
        },
        {
          "id": "b",
          "texte": "Attendre quelques heures que les effets diminuent, puis reprendre la route normalement"
        },
        {
          "id": "c",
          "texte": "Laisser la moto sur place et rentrer en taxi ou en transport en commun"
        },
        {
          "id": "d",
          "texte": "Prévoir un autre moyen de transport avant même de commencer à boire"
        }
      ],
      "bonnesReponses": [
        "c",
        "d"
      ],
      "explication": "La seule solution sûre est de ne pas prendre le guidon après avoir bu : mieux vaut anticiper une solution de repli (taxi, transport en commun, proche sobre) avant la soirée et s'y tenir le moment venu. Rouler plus lentement ne compense pas l'altération des réflexes et du jugement, et 'attendre que ça passe' est trompeur, car l'élimination de l'alcool est lente et difficile à évaluer soi-même avec certitude.",
      "difficulte": 2
    },
    {
      "id": "CND-0081",
      "theme": "conducteur",
      "enonce": "Lors d'un long trajet à moto, pourquoi est-il recommandé de s'arrêter environ un quart d'heure toutes les deux heures ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour relâcher la tension et restaurer la vigilance, la fatigue faisant baisser les réflexes"
        },
        {
          "id": "b",
          "texte": "Parce que la loi impose cet arrêt à tous les conducteurs de deux-roues"
        },
        {
          "id": "c",
          "texte": "Uniquement pour refaire le plein de carburant"
        },
        {
          "id": "d",
          "texte": "Pour discuter avec d'autres motards présents sur l'aire de repos"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La fatigue réduit la vigilance et allonge le temps de réaction : une pause régulière permet de récupérer avant que les réflexes ne se dégradent. Il ne s'agit pas d'une obligation légale pour les motards (contrairement aux professionnels du transport soumis à des temps de conduite réglementés) ; le ravitaillement en carburant ou la convivialité ne sont que des effets secondaires possibles, pas la raison de sécurité recherchée.",
      "difficulte": 1
    },
    {
      "id": "CND-0082",
      "theme": "conducteur",
      "enonce": "Concernant l'alcoolémie autorisée au guidon en France, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La limite générale est fixée à 0,5 gramme d'alcool par litre de sang"
        },
        {
          "id": "b",
          "texte": "Les titulaires du permis probatoire doivent respecter une limite abaissée à 0,2 g/L"
        },
        {
          "id": "c",
          "texte": "La limite autorisée est de 0,8 g/L, comme dans certains pays voisins"
        },
        {
          "id": "d",
          "texte": "Chaque département fixe librement son propre seuil pour les deux-roues"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "En France, la limite générale d'alcoolémie au volant comme au guidon est de 0,5 g/L de sang (0,25 mg/L d'air expiré) ; les conducteurs en période probatoire doivent quant à eux respecter un seuil réduit à 0,2 g/L. Le seuil de 0,8 g/L n'existe pas dans la réglementation française, et cette limite est fixée par la loi nationale, jamais localement par les départements.",
      "difficulte": 2
    },
    {
      "id": "CND-0083",
      "theme": "conducteur",
      "enonce": "Quel effet le stress peut-il avoir sur un motard au guidon ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il diminue la concentration et altère la capacité de jugement"
        },
        {
          "id": "b",
          "texte": "Il affine les réflexes et raccourcit le temps de réaction"
        },
        {
          "id": "c",
          "texte": "Il est sans incidence sur la vigilance"
        },
        {
          "id": "d",
          "texte": "Il ne concerne que les conducteurs débutants"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le stress perturbe la concentration et fausse le jugement, ce qui peut conduire à des décisions inadaptées sur la route. Il ne renforce ni les réflexes ni la vigilance ; il s'agit d'un phénomène qui peut affecter tout conducteur, quelle que soit son expérience, et non uniquement les débutants.",
      "difficulte": 1
    },
    {
      "id": "CND-0084",
      "theme": "conducteur",
      "enonce": "Avant de prendre la route à moto, quelle précaution faut-il adopter vis-à-vis des médicaments ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vérifier systématiquement la notice, y compris pour les médicaments en vente libre, car certains provoquent de la somnolence"
        },
        {
          "id": "b",
          "texte": "Ne se méfier que des médicaments délivrés sur ordonnance"
        },
        {
          "id": "c",
          "texte": "Considérer qu'aucun médicament ne modifie les capacités de conduite"
        },
        {
          "id": "d",
          "texte": "Ignorer la notice si le traitement paraît léger"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Certains médicaments, même vendus sans ordonnance, peuvent provoquer somnolence ou baisse de vigilance : il faut donc toujours vérifier leurs effets secondaires avant de rouler. Le risque ne se limite pas aux traitements prescrits ou aux traitements « lourds », et affirmer qu'aucun médicament n'a d'effet sur la conduite est faux.",
      "difficulte": 1
    },
    {
      "id": "CND-0085",
      "theme": "conducteur",
      "enonce": "Pourquoi faut-il s'assurer que son casque et son équipement de protection sont en bon état avant de rouler ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce qu'un équipement en bon état protège efficacement en cas de chute ou d'accident"
        },
        {
          "id": "b",
          "texte": "Parce que le port d'un casque homologué est une obligation légale, sanctionnée si elle n'est pas respectée"
        },
        {
          "id": "c",
          "texte": "Uniquement pour le confort pendant le trajet"
        },
        {
          "id": "d",
          "texte": "Parce que c'est une question de tendance esthétique"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Un équipement de protection en bon état (casque, gants, blouson...) limite les conséquences d'une chute, et le port du casque homologué est une obligation légale en France sanctionnée par une amende. Le confort et l'aspect esthétique ne sont que des bénéfices secondaires, pas la justification principale de cette exigence de sécurité.",
      "difficulte": 2
    },
    {
      "id": "CND-0086",
      "theme": "conducteur",
      "enonce": "Concernant les seuils légaux d'alcoolémie applicables aux motards en France, quelles affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un conducteur titulaire du permis depuis plus de trois ans ne doit pas dépasser 0,5 g d'alcool par litre de sang"
        },
        {
          "id": "b",
          "texte": "Un conducteur en période probatoire est soumis à une limite abaissée de 0,2 g/L"
        },
        {
          "id": "c",
          "texte": "La limite légale est fixée à 0,8 g/L pour l'ensemble des conducteurs, sans distinction"
        },
        {
          "id": "d",
          "texte": "Il n'existe aucun seuil chiffré, seule l'appréciation des forces de l'ordre fait foi"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le taux légal général est de 0,5 g/L de sang, mais il est abaissé à 0,2 g/L pour les conducteurs en permis probatoire (et les conducteurs professionnels de transport). 0,8 g/L n'est pas une limite autorisée : c'est le seuil au-delà duquel l'infraction devient un délit, avec des peines aggravées. Le seuil est mesuré objectivement par éthylotest ou prise de sang, il ne dépend pas de l'appréciation subjective des gendarmes.",
      "difficulte": 2
    },
    {
      "id": "CND-0087",
      "theme": "conducteur",
      "enonce": "Lors d'un contrôle routier, que peut révéler un test de dépistage de stupéfiants (salivaire ou sanguin) effectué sur un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement une éventuelle consommation de cannabis"
        },
        {
          "id": "b",
          "texte": "Uniquement la présence d'alcool dans le sang"
        },
        {
          "id": "c",
          "texte": "La présence de cannabis, de cocaïne, d'amphétamines ou d'autres substances psychoactives"
        },
        {
          "id": "d",
          "texte": "Rien, ce type de dépistage n'est pas utilisé sur la route"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Les tests de dépistage utilisés lors des contrôles routiers permettent d'identifier plusieurs familles de stupéfiants (cannabis, cocaïne, amphétamines, etc.), pas seulement le cannabis. L'alcool est recherché séparément par un éthylotest ou un éthylomètre, pas par ce test. Ces contrôles sont fréquents et parfaitement légaux, contrairement à ce que suggère la dernière proposition.",
      "difficulte": 1
    },
    {
      "id": "CND-0088",
      "theme": "conducteur",
      "enonce": "Un motard qui a bu de l'alcool avant de prendre la route peut ressentir quels effets réels sur sa conduite ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une meilleure coordination des gestes sur les commandes"
        },
        {
          "id": "b",
          "texte": "Un temps de réaction allongé face à un danger"
        },
        {
          "id": "c",
          "texte": "Une vision périphérique plus nette qu'à l'état sobre"
        },
        {
          "id": "d",
          "texte": "Une confiance en ses capacités supérieure à la réalité"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "L'alcool ralentit le traitement de l'information par le cerveau, ce qui allonge le temps de réaction, et il donne une fausse sensation de confiance qui pousse à sous-estimer les risques pris. À l'inverse, il dégrade la coordination motrice et altère la vision (notamment périphérique), il ne les améliore jamais.",
      "difficulte": 2
    },
    {
      "id": "CND-0089",
      "theme": "conducteur",
      "enonce": "Quelles peuvent être les conséquences pour un motard contrôlé positif aux stupéfiants au guidon ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un bonus sur son contrat d'assurance moto"
        },
        {
          "id": "b",
          "texte": "Un retrait de points sur son permis de conduire"
        },
        {
          "id": "c",
          "texte": "Une amende, voire une peine de prison selon les cas"
        },
        {
          "id": "d",
          "texte": "Aucune sanction s'il s'agit d'un contrôle isolé et d'une première fois"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Conduire sous l'influence de stupéfiants est un délit dès qu'une trace est détectée : il entraîne un retrait de points, une amende, une suspension ou une annulation du permis, et peut aller jusqu'à l'emprisonnement en cas d'accident. Il n'y a pas de tolérance pour un « premier contrôle », et il n'existe évidemment aucun avantage à en tirer.",
      "difficulte": 2
    },
    {
      "id": "CND-0090",
      "theme": "conducteur",
      "enonce": "Vous êtes arrivé à moto à une soirée où vous avez consommé de l'alcool. Quelle est l'attitude à privilégier pour le retour ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Reprendre la route en roulant plus lentement que d'habitude"
        },
        {
          "id": "b",
          "texte": "Estimer soi-même le moment où les effets de l'alcool ont disparu avant de repartir"
        },
        {
          "id": "c",
          "texte": "Laisser la moto sur place et rentrer en taxi, en transport en commun ou avec un proche resté sobre"
        },
        {
          "id": "d",
          "texte": "Boire un café serré puis repartir normalement"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La seule précaution fiable est de renoncer à conduire et de recourir à une solution alternative : taxi, transport en commun ou conducteur sobre désigné à l'avance. Rouler « prudemment » ne compense pas l'altération des réflexes, estimer soi-même sa propre sobriété est illusoire, et le café n'a aucun effet sur le taux d'alcoolémie.",
      "difficulte": 1
    },
    {
      "id": "CND-0091",
      "theme": "conducteur",
      "enonce": "Vous roulez depuis plusieurs heures. Quel ensemble de signes doit vous alerter sur un état de fatigue au guidon ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une conduite plus agressive et des accélérations brutales"
        },
        {
          "id": "b",
          "texte": "Une hausse anormale de la température du moteur"
        },
        {
          "id": "c",
          "texte": "Des bâillements répétés, des paupières lourdes et une difficulté à rester concentré"
        },
        {
          "id": "d",
          "texte": "Un besoin soudain d'augmenter la vitesse pour \"se réveiller\""
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La fatigue au guidon se manifeste par des bâillements répétés, des paupières lourdes et une difficulté à maintenir sa concentration sur la route. Une conduite agressive ou un besoin d'accélérer relèvent plutôt de l'impatience, pas de la fatigue. La température du moteur, quant à elle, est un paramètre purement mécanique, sans lien avec l'état du conducteur.",
      "difficulte": 1
    },
    {
      "id": "CND-0092",
      "theme": "conducteur",
      "enonce": "Vous sentez les premiers signes de fatigue pendant un trajet à moto. Quelle est la bonne réaction ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ouvrir la visière du casque et continuer à rouler pour prendre l'air"
        },
        {
          "id": "b",
          "texte": "Augmenter le volume de son intercom pour rester éveillé"
        },
        {
          "id": "c",
          "texte": "S'arrêter dès que possible pour se reposer"
        },
        {
          "id": "d",
          "texte": "Accélérer afin d'arriver plus vite à destination"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Dès les premiers signes de fatigue, il faut s'arrêter au plus vite pour se reposer : espérer que l'air frais ou la musique suffisent à relancer la vigilance est illusoire. Accélérer pour \"en finir plus vite\" augmente le risque d'accident sans résoudre le problème de vigilance, qui est le vrai danger.",
      "difficulte": 1
    },
    {
      "id": "CND-0093",
      "theme": "conducteur",
      "enonce": "Pour un trajet moto de nuit, quelles précautions permettent d'améliorer votre visibilité pour les autres usagers ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Porter un blouson ou un gilet muni de bandes rétroréfléchissantes"
        },
        {
          "id": "b",
          "texte": "Choisir un casque et un équipement de couleur sombre pour rester discret"
        },
        {
          "id": "c",
          "texte": "Vérifier que les feux et catadioptres de la moto fonctionnent correctement"
        },
        {
          "id": "d",
          "texte": "Porter des lunettes de soleil teintées pour réduire l'éblouissement"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La nuit, il faut porter des équipements rétroréfléchissants et s'assurer que les feux et catadioptres sont en bon état pour être vu des autres usagers. Un équipement sombre réduit au contraire votre visibilité, et des lunettes teintées la nuit aggravent encore la perception déjà limitée par l'obscurité.",
      "difficulte": 2
    },
    {
      "id": "CND-0094",
      "theme": "conducteur",
      "enonce": "Pourquoi les motards sont-ils invités à éviter, autant que possible, de rouler entre 2 heures et 5 heures du matin ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que la circulation y est habituellement plus dense"
        },
        {
          "id": "b",
          "texte": "Parce que l'éclairage public y est généralement coupé"
        },
        {
          "id": "c",
          "texte": "Parce que la réglementation interdit d'y circuler à moto"
        },
        {
          "id": "d",
          "texte": "Parce que c'est la période où la somnolence atteint son maximum"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Entre 2h et 5h du matin, le rythme biologique entraîne une baisse naturelle de vigilance qui rend la somnolence maximale à cette heure, même chez un conducteur qui n'était pas fatigué au départ. Il n'existe ni interdiction réglementaire de circuler à moto la nuit ni coupure systématique de l'éclairage public à cette heure, et la densité de circulation n'est pas le facteur en cause.",
      "difficulte": 1
    },
    {
      "id": "CND-0095",
      "theme": "conducteur",
      "enonce": "La visibilité étant réduite de nuit, quel comportement le motard doit-il adopter pour limiter les risques ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour réduire le temps passé sur la route"
        },
        {
          "id": "b",
          "texte": "Réduire sa vitesse pour compenser la baisse de visibilité"
        },
        {
          "id": "c",
          "texte": "Rouler avec les feux de croisement éteints pour ne pas gêner les autres usagers"
        },
        {
          "id": "d",
          "texte": "Redoubler d'attention face aux usagers et obstacles moins visibles"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "La nuit, il faut rouler moins vite et rester particulièrement attentif aux éléments de la route, y compris aux autres conducteurs, parfois eux-mêmes fatigués ou moins vigilants. Accélérer pour raccourcir le trajet ou circuler sans feux de croisement va au contraire à l'encontre de la sécurité et de la réglementation, qui impose un éclairage de nuit.",
      "difficulte": 2
    },

    /* ---------- LA ROUTE ET LES RISQUES DE CONDUITE — ebook (53) ---------- */
    {
      "id": "RTE-0052",
      "theme": "route",
      "enonce": "En circulation urbaine, à quel endroit de votre voie devez-vous vous placer pour rester bien visible des véhicules qui vous encadrent ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Au centre de la voie de circulation"
        },
        {
          "id": "b",
          "texte": "Le plus près possible du trottoir"
        },
        {
          "id": "c",
          "texte": "En alternant de file selon la densité du trafic"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "En ville, se positionner au centre de la voie vous rend bien visible des conducteurs qui vous précèdent et vous suivent. Se coller au trottoir vous expose aux dangers latéraux (portières, piétons) et réduit votre visibilité ; changer de file en permanence rend vos déplacements imprévisibles pour les autres usagers.",
      "difficulte": 1
    },
    {
      "id": "RTE-0053",
      "theme": "route",
      "enonce": "Quel est l'intérêt principal de conserver un intervalle suffisant avec le véhicule qui roule devant vous à moto ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Disposer du temps nécessaire pour réagir si ce véhicule freine brusquement"
        },
        {
          "id": "b",
          "texte": "Pouvoir le dépasser plus facilement sans avertir"
        },
        {
          "id": "c",
          "texte": "Réduire la consommation de carburant de la moto"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "L'intervalle de sécurité vous donne le temps de freiner ou d'éviter un obstacle en cas de freinage brusque du véhicule qui précède ; il doit être augmenté par temps de pluie ou de gel. Il n'a aucun rapport avec la facilité de dépassement ni avec la consommation.",
      "difficulte": 1
    },
    {
      "id": "RTE-0054",
      "theme": "route",
      "enonce": "Sur route, en ligne droite et hors manœuvre de dépassement, quel placement dans votre voie vous procure la meilleure vue d'ensemble de la circulation à venir ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Un léger décalage vers la gauche de la voie"
        },
        {
          "id": "b",
          "texte": "Un léger décalage vers la droite de la voie"
        },
        {
          "id": "c",
          "texte": "Le centre strict de la voie, sans jamais varier"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Se décaler légèrement à gauche dans sa voie, tout en y restant, ouvre le champ de vision sur ce qui arrive en face et dans les virages. Rouler collé à droite réduit cette anticipation et rapproche des accotements ; un centrage strict et permanent n'apporte pas cet avantage de vision.",
      "difficulte": 2
    },
    {
      "id": "RTE-0055",
      "theme": "route",
      "enonce": "Lorsque la chaussée devient glissante, sous la pluie ou par temps de gel, quelle double précaution devez-vous prendre ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire votre vitesse"
        },
        {
          "id": "b",
          "texte": "Adapter votre trajectoire sur la chaussée"
        },
        {
          "id": "c",
          "texte": "Accélérer pour traverser la zone à risque plus vite"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Sur chaussée glissante, il faut à la fois ralentir et ajuster sa position pour éviter les zones les plus glissantes (marquages, plaques). Accélérer va à l'inverse du bon comportement et augmente fortement le risque de perte d'adhérence.",
      "difficulte": 2
    },
    {
      "id": "RTE-0056",
      "theme": "route",
      "enonce": "Face à un poids lourd ou un autocar, quelle attitude adopter vis-à-vis de leurs angles morts ?",
      "media": "images/angle-mort.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Ne pas rester longtemps dans ces zones où le conducteur ne peut pas vous voir"
        },
        {
          "id": "b",
          "texte": "Vous rapprocher le plus possible du véhicule pour capter son attention"
        },
        {
          "id": "c",
          "texte": "Redoubler de vigilance en vous positionnant là où le conducteur peut vous apercevoir"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Les angles morts des poids lourds et des bus sont des zones où le conducteur ne peut absolument pas vous voir : il faut éviter d'y stationner et se placer, dès que possible, dans son champ de vision (rétroviseurs). Se rapprocher du véhicule ne le fait pas vous remarquer, cela vous rend au contraire invisible et vous met en danger.",
      "difficulte": 2
    },
    {
      "id": "RTE-0057",
      "theme": "route",
      "enonce": "Sur la route, quel facteur est le plus souvent associé à la perte de contrôle d'une moto et à la gravité des accidents ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le respect scrupuleux des distances de sécurité"
        },
        {
          "id": "b",
          "texte": "Le dépassement des limites de vitesse autorisées"
        },
        {
          "id": "c",
          "texte": "L'usage fréquent des clignotants"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les motos étant plus légères et plus véloces que les autres véhicules, un excès de vitesse augmente fortement le risque de perte de contrôle, notamment en virage ou en freinage d'urgence. Respecter les distances de sécurité et utiliser ses clignotants sont au contraire des comportements qui réduisent le risque d'accident, pas des causes de danger.",
      "difficulte": 1
    },
    {
      "id": "RTE-0058",
      "theme": "route",
      "enonce": "Vous partez rouler avec votre moto. Quel est le véritable intérêt de porter un casque homologué ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il évite de payer une amende en cas de contrôle"
        },
        {
          "id": "b",
          "texte": "Il permet de moins utiliser le klaxon"
        },
        {
          "id": "c",
          "texte": "Il protège la tête et réduit la gravité des blessures en cas de chute"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le casque homologué absorbe une partie du choc et protège la tête, siège des blessures les plus graves et souvent mortelles en cas de chute. L'obligation légale existe justement parce que le casque sauve des vies, mais son rôle premier reste la protection physique, pas l'évitement d'une sanction. Le klaxon n'a évidemment aucun lien avec cet équipement de sécurité.",
      "difficulte": 1
    },
    {
      "id": "RTE-0059",
      "theme": "route",
      "enonce": "Parmi les situations suivantes, lesquelles augmentent réellement le risque d'accident pour un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Signaler chaque changement de direction avec les clignotants"
        },
        {
          "id": "b",
          "texte": "Manquer de vigilance en approchant une intersection"
        },
        {
          "id": "c",
          "texte": "Aborder un virage à une vitesse inadaptée"
        },
        {
          "id": "d",
          "texte": "Circuler entre les files de voitures pour gagner du temps"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Une grande partie des accidents de moto se produit aux intersections, où un manque de vigilance empêche d'anticiper les manœuvres des autres usagers ; prendre un virage trop vite ou circuler entre les files surprend les autres conducteurs et peut provoquer une chute ou une collision. À l'inverse, signaler ses changements de direction avec les clignotants est un comportement qui améliore la sécurité, pas un facteur de risque.",
      "difficulte": 2
    },
    {
      "id": "RTE-0060",
      "theme": "route",
      "enonce": "Quelle condition météorologique impose au motard d'adapter le plus fortement sa vitesse et ses distances de sécurité, en raison de la perte d'adhérence qu'elle provoque ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un ciel dégagé et ensoleillé"
        },
        {
          "id": "b",
          "texte": "Un ciel simplement couvert, sans précipitation"
        },
        {
          "id": "c",
          "texte": "La pluie"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La pluie réduit fortement l'adhérence des pneus sur la chaussée et allonge les distances de freinage, ce qui impose au motard d'adapter sa vitesse et ses distances de sécurité. Un ciel ensoleillé ou simplement couvert, sans précipitation, ne modifie pas l'état de la route de la même façon et ne justifie pas cette même prudence renforcée.",
      "difficulte": 1
    },
    {
      "id": "RTE-0061",
      "theme": "route",
      "enonce": "Quelles habitudes permettent réellement à un motard d'être mieux vu par les autres usagers de la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler tous feux éteints, même en plein jour"
        },
        {
          "id": "b",
          "texte": "Porter un équipement comportant des éléments réfléchissants"
        },
        {
          "id": "c",
          "texte": "Porter des écouteurs pour mieux se concentrer sur la route"
        },
        {
          "id": "d",
          "texte": "Garder ses feux de croisement allumés, même en plein jour"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Porter des équipements réfléchissants et rouler avec ses feux de croisement allumés, même le jour, permet aux autres usagers de repérer plus facilement un motard, silhouette naturellement moins visible qu'une voiture. Rouler sans éclairage réduit au contraire cette visibilité, et les écouteurs n'ont aucun effet sur le fait d'être vu : ils nuisent même à l'attention auditive nécessaire à la conduite.",
      "difficulte": 2
    },
    {
      "id": "RTE-0062",
      "theme": "route",
      "enonce": "Le code de la route vous impose, en moto, d'adapter votre vitesse à la visibilité, à l'état de la chaussée et à la densité du trafic, même si vous roulez sous la limite affichée. Quel est le véritable objectif de cette obligation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire votre consommation de carburant"
        },
        {
          "id": "b",
          "texte": "Éviter une amende, indépendamment du risque réel"
        },
        {
          "id": "c",
          "texte": "Garder la maîtrise du véhicule et pouvoir vous arrêter dans la distance qui reste visible devant vous"
        },
        {
          "id": "d",
          "texte": "Respecter uniquement le panneau de limitation, qui suffirait en toutes circonstances"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "L'article R413-17 du code de la route impose de conserver à tout moment la maîtrise du véhicule et de pouvoir s'arrêter dans la distance de visibilité : la limitation affichée n'est qu'un plafond, pas une vitesse forcément sûre par pluie, brouillard ou trafic dense. La consommation de carburant n'a aucun rapport avec cette règle de sécurité, et se contenter de respecter le panneau ne suffit pas si les conditions imposent de ralentir davantage.",
      "difficulte": 2
    },
    {
      "id": "RTE-0063",
      "theme": "route",
      "enonce": "Vous partez rouler après une très mauvaise nuit de sommeil. Quels effets la fatigue peut-elle avoir sur votre conduite à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle ralentit votre temps de réaction"
        },
        {
          "id": "b",
          "texte": "Elle améliore votre capacité de concentration"
        },
        {
          "id": "c",
          "texte": "Elle réduit votre aptitude à prendre des décisions rapides"
        },
        {
          "id": "d",
          "texte": "Elle diminue la vigilance et l'attention portée à la route"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "La fatigue allonge le temps de réaction, réduit la capacité à décider vite face à un imprévu et diminue la vigilance générale : c'est pourquoi il est essentiel d'être bien reposé avant de prendre la moto. Elle ne peut en aucun cas améliorer la concentration, elle produit l'effet strictement inverse.",
      "difficulte": 2
    },
    {
      "id": "RTE-0064",
      "theme": "route",
      "enonce": "Quel taux d'alcoolémie maximal un motard doit-il respecter pour conduire légalement en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "0,5 g/L de sang pour tous les conducteurs, sans aucune distinction"
        },
        {
          "id": "b",
          "texte": "0,5 g/L de sang, abaissé à 0,2 g/L pendant la période de permis probatoire"
        },
        {
          "id": "c",
          "texte": "0,8 g/L de sang"
        },
        {
          "id": "d",
          "texte": "0 g/L de sang, sans aucune tolérance"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le seuil légal général est de 0,5 g/L de sang, mais il est abaissé à 0,2 g/L pour les titulaires du permis probatoire (les premières années après l'obtention du permis). 0,8 g/L était l'ancien seuil, aujourd'hui dépassé, et il existe bien une tolérance résiduelle : le seuil zéro absolu ne s'applique pas aux conducteurs classiques en France.",
      "difficulte": 3
    },
    {
      "id": "RTE-0065",
      "theme": "route",
      "enonce": "En roulant, vous recevez un appel sur votre téléphone connecté à un kit oreillette intégré au casque. Que faut-il en penser ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Cela améliore la vigilance sur les longs trajets"
        },
        {
          "id": "b",
          "texte": "Cela détourne votre attention de la route"
        },
        {
          "id": "c",
          "texte": "Cela reste totalement autorisé en moto dès qu'un kit oreillette est utilisé"
        },
        {
          "id": "d",
          "texte": "Cela allonge votre temps de réaction face à un imprévu"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Téléphoner en conduisant détourne l'attention et allonge le temps de réaction, même avec un dispositif mains-libres : le cerveau ne peut pas traiter pleinement deux tâches à la fois. De plus, le port d'une oreillette ou d'un kit intra-casque pour téléphoner est interdit pour tous les conducteurs depuis 2015 (amende et retrait de points), donc l'usage n'est pas « totalement autorisé », et il n'améliore certainement pas la vigilance.",
      "difficulte": 2
    },
    {
      "id": "RTE-0066",
      "theme": "route",
      "enonce": "Quels comportements caractérisent une attitude défensive et anticipative sur la route à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour s'écarter rapidement des autres véhicules"
        },
        {
          "id": "b",
          "texte": "Anticiper les actions et les erreurs possibles des autres usagers"
        },
        {
          "id": "c",
          "texte": "Rester prêt à réagir immédiatement en cas d'imprévu"
        },
        {
          "id": "d",
          "texte": "Adopter une conduite courtoise et respectueuse des règles de circulation"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "La conduite défensive repose sur l'anticipation des comportements des autres usagers, une disponibilité constante pour réagir à l'imprévu, et le respect courtois des règles : c'est ce qui réduit le risque de situations dangereuses. Augmenter sa vitesse pour se dégager des autres véhicules est au contraire une conduite à risque, qui réduit les marges de sécurité au lieu de les augmenter.",
      "difficulte": 1
    },
    {
      "id": "RTE-0067",
      "theme": "route",
      "enonce": "Vous roulez en ville et cherchez à adopter une conduite préventive (défensive) à moto. Parmi les comportements suivants, lesquels correspondent réellement à cette approche ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Anticiper les situations dangereuses avant qu'elles ne se produisent"
        },
        {
          "id": "b",
          "texte": "Garder une distance de sécurité suffisante avec le véhicule qui précède"
        },
        {
          "id": "c",
          "texte": "Accélérer pour semer un véhicule qui vous colle de trop près"
        },
        {
          "id": "d",
          "texte": "Redoubler de vigilance aux intersections et aux passages pour piétons"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "La conduite préventive repose sur l'anticipation des dangers, une distance de sécurité suffisante et une vigilance renforcée aux endroits à risque comme les intersections, les passages piétons ou par mauvais temps. Accélérer pour échapper à un véhicule qui suit trop près est au contraire une réaction dangereuse qui augmente le risque de perte de contrôle, à l'opposé de l'esprit de la conduite défensive.",
      "difficulte": 2
    },
    {
      "id": "RTE-0068",
      "theme": "route",
      "enonce": "Quelle attitude un motard doit-il adopter envers les autres usagers pour rouler de façon préventive ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rester courtois et respectueux, même en cas de tension"
        },
        {
          "id": "b",
          "texte": "Adopter un comportement ferme pour s'imposer face aux autres véhicules"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La conduite préventive implique de rester calme, patient et respectueux du code de la route face aux autres usagers. Chercher à s'imposer ou à s'affirmer par un comportement agressif augmente les tensions sur la route et donc le risque d'accident, ce qui va à l'encontre du principe même de prévention.",
      "difficulte": 1
    },
    {
      "id": "RTE-0069",
      "theme": "route",
      "enonce": "En tant que motard, pourquoi respecter les limitations de vitesse fait-il partie d'une conduite préventive efficace ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela permet d'éviter une sanction (amende, retrait de points)"
        },
        {
          "id": "b",
          "texte": "Cela réduit le risque d'accident en laissant plus de temps de réaction"
        },
        {
          "id": "c",
          "texte": "Cela garantit de ne jamais être doublé par un autre véhicule"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Respecter les limitations de vitesse répond à deux objectifs : éviter une sanction et surtout réduire le risque d'accident, car une vitesse adaptée à la circulation et à la visibilité laisse davantage de temps de réaction et de distance de freinage. Ne jamais être doublé n'a aucun rapport avec la sécurité routière et n'est pas un objectif de la conduite préventive.",
      "difficulte": 2
    },
    {
      "id": "RTE-0070",
      "theme": "route",
      "enonce": "Pendant que vous roulez, à quoi sert la vérification régulière de vos rétroviseurs ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "À ajuster la position de votre casque"
        },
        {
          "id": "b",
          "texte": "À surveiller la circulation qui arrive derrière vous"
        },
        {
          "id": "c",
          "texte": "À contrôler la pression de vos pneus"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Contrôler régulièrement ses rétroviseurs permet de surveiller ce qui se passe derrière soi avant de freiner, changer de file ou tourner, ce qui est essentiel à l'anticipation des dangers. Le réglage du casque et la pression des pneus sont des vérifications distinctes, sans lien avec l'usage des rétroviseurs.",
      "difficulte": 1
    },
    {
      "id": "RTE-0071",
      "theme": "route",
      "enonce": "Un motard porte un casque homologué, des gants, une veste et des bottes adaptées à chaque trajet. Quelle est la vraie raison de porter cet équipement complet ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour suivre les tendances vestimentaires du moment"
        },
        {
          "id": "b",
          "texte": "Pour être repéré plus facilement par les radars automatiques"
        },
        {
          "id": "c",
          "texte": "Pour réduire la gravité des blessures en cas de chute ou de choc"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "L'équipement de protection complet a pour seul véritable objectif de limiter la gravité des blessures en cas de chute ou de choc, le motard étant beaucoup plus exposé qu'un automobiliste. Ce choix n'a rien à voir avec la mode, ni avec un quelconque repérage par les dispositifs de contrôle de vitesse.",
      "difficulte": 1
    },
    {
      "id": "RTE-0072",
      "theme": "route",
      "enonce": "Sur le réseau routier français, un motard doit respecter des limitations de vitesse qui varient selon le type de voie. Parmi les propositions suivantes, lesquelles correspondent aux limitations générales applicables, hors signalisation contraire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "90 km/h sur une route à double sens hors agglomération, sans séparateur central"
        },
        {
          "id": "b",
          "texte": "130 km/h sur autoroute, par temps sec"
        },
        {
          "id": "c",
          "texte": "50 km/h en agglomération"
        },
        {
          "id": "d",
          "texte": "80 km/h sur une route à double sens hors agglomération, sans séparateur central"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Sauf signalisation locale portant certaines sections à 90 km/h, la limite par défaut hors agglomération sur une route à double sens sans séparateur central est de 80 km/h depuis 2018, et non 90 km/h. En agglomération, la limite reste 50 km/h, et sur autoroute elle atteint 130 km/h par temps sec. Ces limites s'appliquent aux motos comme aux autres véhicules, sans dérogation particulière.",
      "difficulte": 2
    },
    {
      "id": "RTE-0073",
      "theme": "route",
      "enonce": "Vous circulez à 50 km/h et souhaitez respecter un intervalle de sécurité suffisant avec le véhicule qui vous précède. Quelle distance minimale, correspondant à la règle des deux secondes, devez-vous laisser ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "15 mètres"
        },
        {
          "id": "b",
          "texte": "40 mètres"
        },
        {
          "id": "c",
          "texte": "28 mètres"
        },
        {
          "id": "d",
          "texte": "50 mètres"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La règle des deux secondes consiste à laisser la distance que le véhicule parcourrait en deux secondes : à 50 km/h (environ 13,9 m/s), cela représente environ 28 mètres. Une distance de 15 mètres serait insuffisante pour réagir à temps, tandis que 40 ou 50 mètres correspondraient plutôt à une vitesse plus élevée. Cet intervalle laisse le temps nécessaire pour freiner en cas d'imprévu.",
      "difficulte": 1
    },
    {
      "id": "RTE-0074",
      "theme": "route",
      "enonce": "En moto, pourquoi est-il recommandé de solliciter simultanément le frein avant et le frein arrière lors d'un freinage, plutôt que d'utiliser un seul des deux ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que cela répartit les forces de freinage entre les deux roues et améliore la stabilité de la moto"
        },
        {
          "id": "b",
          "texte": "Parce que cela permet de réduire la consommation de carburant"
        },
        {
          "id": "c",
          "texte": "Parce que cela évite uniquement l'usure du pneu avant"
        },
        {
          "id": "d",
          "texte": "Parce que cela optimise l'efficacité globale du freinage et réduit la distance d'arrêt"
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Combiner les deux freins répartit les forces sur les deux roues, ce qui stabilise la moto et raccourcit la distance d'arrêt par rapport à un freinage sur une seule roue. La consommation de carburant n'a aucun lien avec la répartition du freinage, et l'usure du pneu avant n'est pas la raison de cette recommandation : c'est bien la sécurité et l'efficacité du freinage qui priment.",
      "difficulte": 2
    },
    {
      "id": "RTE-0075",
      "theme": "route",
      "enonce": "Vous devez freiner en urgence à moto face à un danger soudain. Quelle est la technique à privilégier pour vous arrêter rapidement sans perdre le contrôle de la machine ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Débrayer immédiatement avant d'actionner les freins"
        },
        {
          "id": "b",
          "texte": "Freiner fermement et progressivement avec les deux freins, en gardant le corps équilibré et centré sur la moto"
        },
        {
          "id": "c",
          "texte": "Utiliser uniquement le frein avant pour un arrêt plus rapide"
        },
        {
          "id": "d",
          "texte": "Serrer les freins d'un coup sec dès la détection du danger"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En urgence, il faut appliquer une pression ferme mais progressive sur les deux freins tout en gardant le corps équilibré, ce qui offre le meilleur compromis entre puissance de freinage et stabilité. Freiner uniquement à l'avant augmente le risque de blocage de roue et de perte d'équilibre, un freinage brutal et soudain provoque un blocage de roue, et débrayer avant de freiner ne fait que retarder l'action efficace sans apporter de bénéfice.",
      "difficulte": 2
    },
    {
      "id": "RTE-0076",
      "theme": "route",
      "enonce": "Quel effet une chaussée mouillée ou de mauvaises conditions météorologiques peuvent-elles avoir sur le freinage d'une moto ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Aucune incidence sur la distance de freinage"
        },
        {
          "id": "b",
          "texte": "Une réduction de la distance de freinage grâce à un meilleur refroidissement des disques"
        },
        {
          "id": "c",
          "texte": "Une meilleure adhérence des pneus sur la chaussée"
        },
        {
          "id": "d",
          "texte": "Un allongement significatif de la distance nécessaire pour s'arrêter"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Sur chaussée mouillée ou par mauvais temps, l'adhérence des pneus diminue, ce qui allonge la distance de freinage nécessaire pour s'arrêter. Contrairement à une idée reçue, l'eau ne refroidit pas utilement les disques pour freiner plus court et ne renforce pas l'adhérence : elle la dégrade. C'est pourquoi il faut anticiper et augmenter les distances de sécurité par mauvais temps.",
      "difficulte": 1
    },
    {
      "id": "RTE-0077",
      "theme": "route",
      "enonce": "Vous roulez à moto sur autoroute et la chaussée est parfaitement sèche. Quelle vitesse maximale ne devez-vous pas dépasser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "110 km/h"
        },
        {
          "id": "b",
          "texte": "150 km/h"
        },
        {
          "id": "c",
          "texte": "130 km/h"
        },
        {
          "id": "d",
          "texte": "90 km/h"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Sur autoroute, la vitesse maximale autorisée est de 130 km/h lorsque la chaussée est sèche ; elle descend à 110 km/h dès qu'il pleut. Les 150 km/h n'existent dans aucune limitation du code de la route, et 90 km/h correspond au plafond d'une route nationale, pas d'une autoroute.",
      "difficulte": 1
    },
    {
      "id": "RTE-0078",
      "theme": "route",
      "enonce": "En circulant, vous apercevez un panneau indiquant « D912 ». Que pouvez-vous en conclure sur cette route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "C'est une route départementale"
        },
        {
          "id": "b",
          "texte": "Elle est entretenue par la commune traversée"
        },
        {
          "id": "c",
          "texte": "Sa gestion relève du département"
        },
        {
          "id": "d",
          "texte": "Son numéro est obligatoirement inférieur à 100"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La lettre D suivie d'un numéro identifie une route départementale, dont l'entretien et la gestion sont confiés au département, et non à la commune, qui gère elle les voies communales. Rien n'impose que la numérotation reste sous 100 : de nombreuses départementales portent des numéros à trois chiffres, comme ici D912.",
      "difficulte": 2
    },
    {
      "id": "RTE-0079",
      "theme": "route",
      "enonce": "Vous circulez à moto sur une route nationale à double sens, sans aucun séparateur central entre les deux voies. Quelle vitesse maximale devez-vous respecter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "90 km/h"
        },
        {
          "id": "b",
          "texte": "70 km/h"
        },
        {
          "id": "c",
          "texte": "60 km/h"
        },
        {
          "id": "d",
          "texte": "80 km/h"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Sans séparation centrale, la vitesse maximale sur une route nationale est limitée à 80 km/h ; elle ne remonte à 90 km/h que si la chaussée comporte un terre-plein ou un séparateur central. Les valeurs de 60 et 70 km/h ne correspondent à aucune limite générale applicable à ce type de route.",
      "difficulte": 2
    },
    {
      "id": "RTE-0080",
      "theme": "route",
      "enonce": "Une route communale traverse un hameau, puis se poursuit en rase campagne sans aucun panneau de limitation spécifique. Que devez-vous en déduire pour votre vitesse ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "50 km/h dans le hameau"
        },
        {
          "id": "b",
          "texte": "90 km/h en rase campagne"
        },
        {
          "id": "c",
          "texte": "80 km/h en rase campagne"
        },
        {
          "id": "d",
          "texte": "Ces limites peuvent être abaissées par un arrêté municipal local"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Une route communale, gérée par la municipalité, impose 50 km/h dès l'entrée dans une zone agglomérée et remonte en général à 80 km/h en rase campagne, jamais 90 km/h par défaut. Ces valeurs restent indicatives : la commune peut fixer des limitations plus basses par arrêté local selon la configuration de la voie.",
      "difficulte": 3
    },
    {
      "id": "RTE-0081",
      "theme": "route",
      "enonce": "Dans l'organisation du réseau routier français, quelle est la vocation première d'une route nationale ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Desservir exclusivement les hameaux isolés"
        },
        {
          "id": "b",
          "texte": "Relier les grandes villes entre elles"
        },
        {
          "id": "c",
          "texte": "Se substituer aux autoroutes sur les longs trajets"
        },
        {
          "id": "d",
          "texte": "Desservir les localités d'un même département"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les routes nationales structurent le réseau à l'échelle du pays en reliant les grandes villes entre elles. Desservir les localités d'un même département est le rôle des routes départementales, desservir les hameaux celui des routes communales, et les autoroutes restent la voie privilégiée pour les longs trajets rapides à accès limité.",
      "difficulte": 1
    },
    {
      "id": "RTE-0082",
      "theme": "route",
      "enonce": "Sur une autoroute française, par temps sec, quelle est la vitesse maximale autorisée pour un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "140 km/h"
        },
        {
          "id": "b",
          "texte": "110 km/h"
        },
        {
          "id": "c",
          "texte": "130 km/h"
        },
        {
          "id": "d",
          "texte": "120 km/h"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "En France, la vitesse maximale sur autoroute est fixée à 130 km/h par temps sec, aussi bien pour les motos que pour les voitures. 110 km/h correspond à la limite appliquée par temps de pluie, tandis que 120 et 140 km/h ne correspondent à aucune limite légale sur autoroute.",
      "difficulte": 1
    },
    {
      "id": "RTE-0083",
      "theme": "route",
      "enonce": "Il pleut et vous circulez sur autoroute à moto. Quelle vitesse ne devez-vous pas dépasser ?",
      "media": "images/limitation-130.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "100 km/h"
        },
        {
          "id": "b",
          "texte": "90 km/h"
        },
        {
          "id": "c",
          "texte": "130 km/h"
        },
        {
          "id": "d",
          "texte": "110 km/h"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Par temps de pluie, la vitesse maximale autorisée sur autoroute est abaissée à 110 km/h, au lieu de 130 km/h par temps sec, pour compenser l'allongement des distances de freinage. 90 et 100 km/h sont des valeurs plus basses qui ne correspondent à aucune limite réglementaire liée à la pluie, et 130 km/h ne s'applique que par temps sec.",
      "difficulte": 1
    },
    {
      "id": "RTE-0084",
      "theme": "route",
      "enonce": "Concernant la distance à respecter avec le véhicule qui vous précède sur autoroute, que devez-vous retenir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un intervalle d'au moins deux secondes doit être maintenu en conditions normales"
        },
        {
          "id": "b",
          "texte": "Une seconde suffit si vous restez attentif"
        },
        {
          "id": "c",
          "texte": "Cet intervalle doit être augmenté par mauvais temps"
        },
        {
          "id": "d",
          "texte": "La distance de sécurité ne varie jamais selon la météo"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La règle des deux secondes constitue le minimum à respecter par temps sec ; ce délai doit être allongé dès que les conditions se dégradent (pluie, vent, visibilité réduite) car les distances de freinage augmentent alors. Une seconde est insuffisante pour réagir en toute sécurité, et affirmer que la distance ne varie jamais avec la météo est donc faux.",
      "difficulte": 2
    },
    {
      "id": "RTE-0085",
      "theme": "route",
      "enonce": "Avant de changer de voie ou d'entamer un dépassement sur autoroute, quelles vérifications un motard doit-il effectuer ?",
      "media": "images/depassement.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Regarder dans les rétroviseurs"
        },
        {
          "id": "b",
          "texte": "Enclencher le clignotant correspondant"
        },
        {
          "id": "c",
          "texte": "Contrôler l'angle mort d'un coup d'œil par-dessus l'épaule"
        },
        {
          "id": "d",
          "texte": "Se déporter directement, la vitesse de la moto suffit à prévenir les autres usagers"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Un changement de voie sûr combine trois vérifications : les rétroviseurs, le clignotant pour signaler l'intention aux autres usagers, et un contrôle visuel de l'angle mort, car les rétroviseurs ne couvrent pas toute la zone latérale. Se déporter en comptant seulement sur la vitesse de la moto, sans ces précautions, est dangereux et ne remplace aucune de ces vérifications.",
      "difficulte": 2
    },
    {
      "id": "RTE-0086",
      "theme": "route",
      "enonce": "Vous approchez d'une zone de travaux sur l'autoroute. Quelle est l'attitude à adopter ?",
      "media": "images/danger-travaux.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour sortir vite de la zone"
        },
        {
          "id": "b",
          "texte": "Ralentir et respecter la signalisation temporaire ainsi que les consignes des agents"
        },
        {
          "id": "c",
          "texte": "Garder la même vitesse qu'en circulation normale"
        },
        {
          "id": "d",
          "texte": "Ignorer les panneaux si la voie semble dégagée"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En zone de travaux, la vitesse doit être réduite et les panneaux temporaires ainsi que les indications des agents doivent être scrupuleusement suivis, car la configuration de la chaussée peut changer brutalement (rétrécissement, basculement de voie). Accélérer, maintenir sa vitesse habituelle ou ignorer la signalisation expose à un danger immédiat et constitue une infraction.",
      "difficulte": 1
    },
    {
      "id": "RTE-0087",
      "theme": "route",
      "enonce": "Concernant l'accès des deux-roues motorisés à l'autoroute, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les cyclomoteurs, limités à 45 km/h, n'y ont pas accès"
        },
        {
          "id": "b",
          "texte": "Une moto de 125 cm³ peut circuler sur autoroute"
        },
        {
          "id": "c",
          "texte": "Toutes les motos, sans exception, y sont autorisées"
        },
        {
          "id": "d",
          "texte": "Seules les motos de plus de 500 cm³ peuvent y accéder"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "L'autoroute est interdite aux véhicules qui, par construction, ne peuvent pas dépasser 80 km/h, ce qui exclut les cyclomoteurs ; une moto de 125 cm³ dépasse largement cette vitesse et peut donc y circuler normalement. Dire que 'toutes les motos' sont autorisées est donc inexact puisque les cyclomoteurs sont exclus, et il n'existe aucun seuil réglementaire fixé à 500 cm³.",
      "difficulte": 3
    },
    {
      "id": "RTE-0088",
      "theme": "route",
      "enonce": "Vous sentez la fatigue s'installer au guidon lors d'un long trajet sur autoroute. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Augmenter la vitesse pour arriver plus vite"
        },
        {
          "id": "b",
          "texte": "Continuer sans vous arrêter jusqu'à destination"
        },
        {
          "id": "c",
          "texte": "Vous arrêter sur la bande d'arrêt d'urgence pour dormir"
        },
        {
          "id": "d",
          "texte": "Faire une pause régulière, environ toutes les deux heures"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "La fatigue altère fortement les réflexes et la vigilance : il est donc recommandé de faire une pause régulière, environ toutes les deux heures. Accélérer ou continuer sans s'arrêter aggrave le risque d'accident, et s'arrêter sur la bande d'arrêt d'urgence pour se reposer est interdit, cette bande étant réservée aux urgences réelles.",
      "difficulte": 1
    },
    {
      "id": "RTE-0089",
      "theme": "route",
      "enonce": "Dans quelle situation un motard est-il autorisé à s'arrêter sur la bande d'arrêt d'urgence de l'autoroute ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour dépasser un poids lourd qui roule lentement"
        },
        {
          "id": "b",
          "texte": "En cas de panne ou de malaise uniquement"
        },
        {
          "id": "c",
          "texte": "Pour faire une pause et se détendre"
        },
        {
          "id": "d",
          "texte": "Lorsque la circulation est dense sur les autres voies"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La bande d'arrêt d'urgence est strictement réservée aux situations exceptionnelles : panne du véhicule ou malaise du conducteur. Elle ne doit jamais servir à dépasser, à circuler normalement en cas de trafic dense, ni à s'arrêter pour se reposer ou faire une pause de confort.",
      "difficulte": 2
    },
    {
      "id": "RTE-0090",
      "theme": "route",
      "enonce": "Quel équipement de protection un motard doit-il porter pour un trajet sur autoroute ?",
      "media": "images/photo-equipement.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une tenue légère et aérée pour plus de confort"
        },
        {
          "id": "b",
          "texte": "Un casque homologué"
        },
        {
          "id": "c",
          "texte": "Une veste renforcée"
        },
        {
          "id": "d",
          "texte": "Des gants et des bottes adaptés"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Sur autoroute, la vitesse élevée impose un équipement de protection complet : casque homologué, veste renforcée, gants et bottes adaptés limitent les conséquences d'une chute ou d'une projection. Une tenue légère pensée pour le confort n'offre aucune protection contre l'abrasion ou les chocs et est donc à proscrire.",
      "difficulte": 1
    },
    {
      "id": "RTE-0091",
      "theme": "route",
      "enonce": "En approchant une intersection où plusieurs voies se croisent, qu'est-ce qui explique le niveau de risque élevé de cette zone pour un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La visibilité y est toujours parfaite dans toutes les directions"
        },
        {
          "id": "b",
          "texte": "Aucune règle de priorité ne s'y applique jamais"
        },
        {
          "id": "c",
          "texte": "Des véhicules peuvent surgir simultanément de plusieurs directions"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Une intersection concentre des flux venant de plusieurs directions à la fois, ce qui multiplie les risques de collision, notamment latérale, pour un deux-roues moins visible qu'une voiture. Dire que la visibilité y est toujours parfaite est faux : bâtiments, véhicules stationnés ou haies masquent souvent l'approche des autres usagers. Les règles de priorité (stop, cédez-le-passage, feux, priorité à droite) continuent au contraire de s'appliquer pleinement à ces endroits.",
      "difficulte": 1
    },
    {
      "id": "RTE-0092",
      "theme": "route",
      "enonce": "Vous roulez à l'approche d'un passage piéton situé près d'une école ou d'un parc. Quel danger devez-vous garder à l'esprit ?",
      "media": "images/danger-passage-pietons.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La chaussée y est systématiquement dégagée, sans surprise possible"
        },
        {
          "id": "b",
          "texte": "Une traversée soudaine, en particulier d'un enfant, même sans piéton visible au premier regard"
        },
        {
          "id": "c",
          "texte": "Seuls les véhicules motorisés circulent réellement dans ce type de zone"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "À proximité des écoles, parcs ou zones commerciales, un enfant ou un piéton peut s'engager brusquement sur la chaussée sans laisser le temps d'anticiper, d'où l'importance de lever le pied même si la voie paraît libre. L'idée d'une chaussée « systématiquement dégagée » est trompeuse et pousse à relâcher l'attention au pire moment. Ces zones sont justement définies par la présence potentielle de piétons, pas par leur absence.",
      "difficulte": 1
    },
    {
      "id": "RTE-0093",
      "theme": "route",
      "enonce": "Un rond-point est censé fluidifier la circulation. Pourquoi reste-t-il malgré tout une zone délicate à négocier en moto ?",
      "media": "images/giratoire-vue-aerienne.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "La trajectoire y est toujours rectiligne, sans changement de direction"
        },
        {
          "id": "b",
          "texte": "Les entrées et sorties multiples imposent des changements de voie fréquents"
        },
        {
          "id": "c",
          "texte": "Les angles morts des autres véhicules sont réduits par rapport à une ligne droite"
        },
        {
          "id": "d",
          "texte": "Il faut surveiller en permanence les points d'insertion et de sortie des autres usagers"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Un rond-point multiplie les points de conflit : chaque entrée et chaque sortie oblige les usagers à changer de voie ou de trajectoire, ce qui exige une vigilance constante sur les insertions et les sorties des autres véhicules. Affirmer que la trajectoire y est rectiligne est contradictoire avec la nature même d'un rond-point, qui impose justement des changements de direction. Les angles morts n'y sont pas réduits : ils sont au contraire plus nombreux à surveiller du fait des mouvements croisés.",
      "difficulte": 2
    },
    {
      "id": "RTE-0094",
      "theme": "route",
      "enonce": "Vous pénétrez dans une zone de travaux signalée sur la route. Quels risques concrets devez-vous anticiper avec votre moto ?",
      "media": "images/danger-travaux.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une signalisation strictement identique à celle utilisée hors travaux"
        },
        {
          "id": "b",
          "texte": "Des surfaces irrégulières, du gravier ou un revêtement dégradé"
        },
        {
          "id": "c",
          "texte": "Des déviations ou rétrécissements de voie modifiant la trajectoire habituelle"
        },
        {
          "id": "d",
          "texte": "La présence possible d'engins ou de personnel empiétant sur la chaussée"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Les chantiers combinent souvent plusieurs dangers à la fois : revêtement abîmé ou glissant, déviations imposant de nouvelles trajectoires, et engins ou ouvriers pouvant se trouver sur la voie, d'où la nécessité de réduire sa vitesse. La signalisation temporaire de travaux utilise en réalité des panneaux à fond jaune, distincts de la signalisation permanente, pour bien marquer ce changement de contexte : l'affirmation qu'elle serait identique est donc fausse.",
      "difficulte": 2
    },
    {
      "id": "RTE-0095",
      "theme": "route",
      "enonce": "Sur une petite route de campagne peu fréquentée, quel est le principal piège pour un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une circulation dense qui impose une vigilance de tous les instants"
        },
        {
          "id": "b",
          "texte": "Une absence totale de danger, compte tenu du faible trafic"
        },
        {
          "id": "c",
          "texte": "La présence possible d'animaux, d'engins agricoles ou de virages sans visibilité"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le faible trafic d'une route rurale ne supprime pas le danger : bétail échappé, tracteurs lents ou virages aveugles peuvent surprendre à tout moment et imposent une vitesse adaptée avec une bonne anticipation. Penser qu'une route peu fréquentée est sans risque est une erreur fréquente et dangereuse, tout comme croire à une circulation dense qui ne correspond pas à la réalité de ce type de voie.",
      "difficulte": 1
    },
    {
      "id": "RTE-0096",
      "theme": "route",
      "enonce": "Avant un trajet à moto de nuit, puis lorsque vous croisez un véhicule venant en face, quelles sont les bonnes pratiques à respecter concernant vos feux ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Contrôler avant le départ que tous vos feux (position, croisement, route, stop) fonctionnent correctement."
        },
        {
          "id": "b",
          "texte": "Garder vos feux de route allumés même en croisant un véhicule, pour continuer à bien voir la chaussée."
        },
        {
          "id": "c",
          "texte": "Passer en feux de croisement dès qu'un véhicule arrive en sens inverse, pour ne pas l'éblouir."
        },
        {
          "id": "d",
          "texte": "Klaxonner pour signaler votre présence plutôt que de changer l'éclairage."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Vérifier l'éclairage avant de partir est indispensable car il conditionne votre capacité à voir la route et celle des autres à vous voir, bien au-delà d'une simple question d'amende ou d'économie d'énergie. Le code de la route impose par ailleurs de passer en feux de croisement en croisant un véhicule pour ne pas l'éblouir : garder les feux de route serait dangereux, et klaxonner ne dispense pas de ce réflexe d'éclairage.",
      "difficulte": 2
    },
    {
      "id": "RTE-0097",
      "theme": "route",
      "enonce": "Pour lutter efficacement contre la baisse de vigilance lors d'un long trajet nocturne à moto, quelles sont les attitudes à adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler plus vite pour raccourcir le trajet et réduire le temps d'exposition à la fatigue."
        },
        {
          "id": "b",
          "texte": "S'arrêter faire une pause dès les premiers signes de fatigue, environ toutes les deux heures."
        },
        {
          "id": "c",
          "texte": "Se focaliser uniquement sur la chaussée sans jamais s'arrêter, pour rester concentré."
        },
        {
          "id": "d",
          "texte": "Boire un café pour se donner un coup de fouet ponctuel, en complément d'un vrai arrêt."
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "La seule véritable réponse à la fatigue au guidon est la pause régulière, prise dès les premiers signes (bâillements, yeux qui piquent, attention qui baisse) et idéalement toutes les deux heures. Le café peut donner un coup de fouet passager mais ne remplace jamais une vraie pause ; rouler plus vite ou se forcer à fixer la route sans jamais s'arrêter ne fait qu'augmenter le risque d'endormissement.",
      "difficulte": 2
    },
    {
      "id": "RTE-0098",
      "theme": "route",
      "enonce": "Quelle est la bonne façon d'adapter votre vitesse à moto lorsque vous roulez de nuit, par rapport à un trajet identique de jour ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "L'augmenter légèrement pour compenser le temps perdu par la prudence supplémentaire."
        },
        {
          "id": "b",
          "texte": "La conserver strictement identique, puisque la limitation légale ne change pas la nuit."
        },
        {
          "id": "c",
          "texte": "La réduire, pour pouvoir réagir et vous arrêter dans la distance que vos feux éclairent réellement."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La nuit, votre distance de visibilité se limite à la portée de vos feux, plus courte qu'en plein jour : il faut donc rouler assez lentement pour pouvoir réagir ou vous arrêter dans cette distance éclairée, même si la vitesse maximale autorisée reste la même. Conserver ou augmenter votre vitesse de jour revient à rouler au-delà de ce que vous voyez réellement, ce qui est très dangereux.",
      "difficulte": 2
    },
    {
      "id": "RTE-0099",
      "theme": "route",
      "enonce": "Quel équipement supplémentaire est conseillé à un motard pour être mieux repéré par les autres usagers pendant un trajet de nuit ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des lunettes de soleil, pour mieux distinguer les phares des véhicules croisés."
        },
        {
          "id": "b",
          "texte": "Des éléments ou vêtements réfléchissants sur la tenue ou le casque."
        },
        {
          "id": "c",
          "texte": "Rouler sans casque, pour mieux entendre les bruits de la circulation."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les éléments réfléchissants renvoient la lumière des phares des autres véhicules et rendent le motard beaucoup plus visible dans l'obscurité. Les lunettes de soleil sont à éviter de nuit car elles assombrissent encore la vision, et circuler sans casque homologué est de toute façon interdit par le code de la route, quelle que soit l'heure.",
      "difficulte": 1
    },
    {
      "id": "RTE-0100",
      "theme": "route",
      "enonce": "Une averse s'abat soudainement pendant que vous roulez à moto. Quel est le geste prioritaire pour continuer à rouler en sécurité ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour sortir au plus vite de la zone de pluie"
        },
        {
          "id": "b",
          "texte": "Réduire votre vitesse afin de garder la maîtrise de la moto"
        },
        {
          "id": "c",
          "texte": "Vous positionner au centre de la voie, la partie la plus roulée"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'adhérence des pneus diminue fortement sur route mouillée : réduire l'allure est le premier réflexe pour garder le contrôle de la moto. Accélérer est dangereux car cela réduit encore la marge de manœuvre, et le centre de la voie n'est pas plus sûr : c'est souvent là que se concentrent les traces de gomme et d'hydrocarbures, rendues glissantes par la pluie.",
      "difficulte": 1
    },
    {
      "id": "RTE-0101",
      "theme": "route",
      "enonce": "Pourquoi un motard doit-il augmenter ses distances de sécurité lorsqu'il pleut ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour pouvoir rouler plus vite sans risque"
        },
        {
          "id": "b",
          "texte": "Pour profiter plus longtemps du paysage"
        },
        {
          "id": "c",
          "texte": "Parce que la distance de freinage s'allonge sur chaussée mouillée"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Sur route mouillée, l'adhérence est réduite et la distance nécessaire pour s'arrêter augmente nettement : il faut donc laisser plus d'espace avec le véhicule qui précède. Les autres propositions n'ont aucun lien avec la sécurité : la distance de sécurité ne permet pas de rouler plus vite et n'a pas pour but d'admirer le paysage.",
      "difficulte": 1
    },
    {
      "id": "RTE-0102",
      "theme": "route",
      "enonce": "Vous devez traverser une zone de brouillard dense à moto. Quels réflexes adopter pour votre sécurité et votre visibilité ?",
      "media": "images/photo-brouillard.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Serrer au maximum le véhicule qui précède pour ne pas perdre la route"
        },
        {
          "id": "b",
          "texte": "Allumer les feux antibrouillard si la moto en est équipée"
        },
        {
          "id": "c",
          "texte": "Porter des vêtements réfléchissants pour être vu des autres usagers"
        },
        {
          "id": "d",
          "texte": "Retirer votre casque intégral pour mieux entendre la circulation"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Par temps de brouillard, il faut réduire la vitesse, augmenter les distances de sécurité, utiliser les feux antibrouillard et porter des équipements réfléchissants pour rester visible. Se rapprocher du véhicule qui précède est au contraire dangereux, car la visibilité et le temps de réaction sont réduits ; rouler sans casque intégral supprime une protection essentielle sans améliorer la sécurité.",
      "difficulte": 2
    },
    {
      "id": "RTE-0103",
      "theme": "route",
      "enonce": "La route est enneigée et par endroits verglacée. Quelle conduite adopter à moto si le trajet est vraiment indispensable ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler en cabrant légèrement la roue avant pour garder de la motricité"
        },
        {
          "id": "b",
          "texte": "Monter des pneus hiver et réduire nettement l'allure"
        },
        {
          "id": "c",
          "texte": "Éviter les freinages brusques et les changements de direction soudains"
        },
        {
          "id": "d",
          "texte": "Renoncer au trajet si les conditions le permettent, tant le risque de chute est élevé"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Sur neige ou verglas, la meilleure option reste de renoncer à rouler si possible ; si le trajet est indispensable, il faut équiper la moto de pneus hiver, réduire fortement la vitesse et proscrire les gestes brusques (freinage, changement de direction) qui font perdre une adhérence déjà réduite. Cabrer la roue avant est une manœuvre dangereuse qui ne figure dans aucune recommandation de sécurité.",
      "difficulte": 3
    },
    {
      "id": "RTE-0104",
      "theme": "route",
      "enonce": "Par forte chaleur, quel est le geste le plus efficace pour un motard afin de prévenir un coup de chaleur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler plus vite pour réduire le temps passé au soleil"
        },
        {
          "id": "b",
          "texte": "Porter une combinaison de couleur noire"
        },
        {
          "id": "c",
          "texte": "S'hydrater régulièrement pendant le trajet"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La chaleur augmente le risque de coup de chaleur : boire régulièrement est le geste essentiel pour compenser la perte en eau, en complément de vêtements ventilés et d'horaires de conduite évitant les heures les plus chaudes. Rouler plus vite n'a aucun effet protecteur, et une combinaison noire absorbe la chaleur au lieu de la réfléchir, ce qui aggrave la situation.",
      "difficulte": 1
    },

    /* ---------- LES AUTRES USAGERS — ebook (30) ---------- */
    {
      "id": "USG-0020",
      "theme": "usagers",
      "enonce": "Vous circulez à moto et apercevez un piéton qui s'engage sur un passage piéton juste devant vous. Quelle attitude devez-vous adopter ?",
      "media": "images/danger-passage-pietons.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Klaxonner pour l'inciter à se dépêcher"
        },
        {
          "id": "b",
          "texte": "Céder le passage et vous arrêter si nécessaire pour le laisser traverser"
        },
        {
          "id": "c",
          "texte": "Accélérer légèrement pour passer avant qu'il n'atteigne votre trajectoire"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le Code de la route impose de céder le passage à tout piéton engagé sur un passage piéton, ou qui manifeste clairement l'intention de s'y engager, quel que soit le véhicule que vous conduisez. Klaxonner pour le presser ou accélérer pour le devancer est à la fois interdit et dangereux, car cela ne lui laisse pas le temps de réagir.",
      "difficulte": 1
    },
    {
      "id": "USG-0021",
      "theme": "usagers",
      "enonce": "Une personne à mobilité réduite traverse lentement la chaussée devant votre moto. Quel comportement devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Klaxonner pour qu'elle accélère sa traversée"
        },
        {
          "id": "b",
          "texte": "Ralentir, et vous arrêter si nécessaire, pour la laisser traverser en sécurité"
        },
        {
          "id": "c",
          "texte": "Maintenir votre vitesse et la contourner au dernier moment"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une personne à mobilité réduite se déplace plus lentement et peut avoir du mal à réagir à un imprévu : il faut donc ralentir et s'arrêter si besoin pour lui laisser tout le temps nécessaire. La klaxonner ou la contourner en maintenant l'allure augmente le risque de la surprendre ou de la percuter.",
      "difficulte": 1
    },
    {
      "id": "USG-0022",
      "theme": "usagers",
      "enonce": "Vous croisez un piéton muni d'une canne blanche, ou accompagné d'un chien guide, qui s'engage sur la chaussée. Quel est le bon réflexe à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour libérer la voie le plus vite possible"
        },
        {
          "id": "b",
          "texte": "Passer au plus près pour ne pas le retarder"
        },
        {
          "id": "c",
          "texte": "Vous immobiliser et le laisser traverser calmement"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La canne blanche ou le chien guide signalent une personne malvoyante à laquelle une priorité de passage doit être accordée : le motard doit s'arrêter et attendre calmement. Accélérer ou passer tout près d'elle serait à la fois interdit et particulièrement dangereux, car elle ne peut pas voir votre approche.",
      "difficulte": 1
    },
    {
      "id": "USG-0023",
      "theme": "usagers",
      "enonce": "En agglomération, quel écart latéral minimal devez-vous respecter avec votre moto pour dépasser un cycliste ?",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "50 centimètres"
        },
        {
          "id": "b",
          "texte": "1 mètre"
        },
        {
          "id": "c",
          "texte": "2 mètres"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le Code de la route impose un écart latéral minimal de 1 mètre en agglomération lors du dépassement d'un cycliste, afin de lui laisser une marge suffisante en cas d'écart ou de déséquilibre. Un écart de 50 centimètres est insuffisant, et 2 mètres n'est pas la valeur retenue par la réglementation en ville.",
      "difficulte": 1
    },
    {
      "id": "USG-0024",
      "theme": "usagers",
      "enonce": "Vous roulez hors agglomération, là où les vitesses pratiquées sont plus élevées. Quel écart latéral minimal la réglementation impose-t-elle pour dépasser un cycliste ?",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "1 mètre"
        },
        {
          "id": "b",
          "texte": "1,5 mètre"
        },
        {
          "id": "c",
          "texte": "1 mètre, mais seulement en montée"
        },
        {
          "id": "d",
          "texte": "0,5 mètre"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Hors agglomération, l'écart latéral minimal légal passe à 1,5 mètre, contre 1 mètre en agglomération, car les vitesses plus élevées imposent une marge de sécurité plus grande. 0,5 mètre est bien trop faible, et il n'existe pas de règle particulière selon le relief de la route.",
      "difficulte": 2
    },
    {
      "id": "USG-0025",
      "theme": "usagers",
      "enonce": "Pourquoi est-il utile d'actionner votre clignotant tôt lorsque des piétons ou des cyclistes se trouvent à proximité de votre moto ?",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Cette précaution ne concerne que les voies rapides"
        },
        {
          "id": "b",
          "texte": "Cela n'a aucune incidence sur leur sécurité"
        },
        {
          "id": "c",
          "texte": "Cela permet de signaler vos intentions à l'avance et d'éviter de les surprendre"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un clignotant actionné suffisamment tôt informe les usagers vulnérables de votre manœuvre à venir et leur laisse le temps d'ajuster leur trajectoire, réduisant ainsi le risque de collision. Affirmer que cela est sans incidence, ou réservé aux voies rapides, est faux : c'est utile partout, en particulier près de piétons et de cyclistes.",
      "difficulte": 1
    },
    {
      "id": "USG-0026",
      "theme": "usagers",
      "enonce": "Vous approchez d'une zone 30 ou des abords d'une école à moto. Quelle conduite devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire fortement votre vitesse"
        },
        {
          "id": "b",
          "texte": "Rester prêt à vous arrêter à tout moment"
        },
        {
          "id": "c",
          "texte": "Accélérer pour traverser la zone le plus vite possible"
        },
        {
          "id": "d",
          "texte": "Allumer vos feux pour inciter les piétons à se dépêcher"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Les zones 30 et les abords d'école concentrent des usagers vulnérables, souvent des enfants imprévisibles : il faut donc réduire nettement l'allure et rester prêt à vous arrêter à tout instant. Accélérer pour en finir vite, ou utiliser vos feux pour presser les piétons, est exactement le comportement inverse de celui attendu.",
      "difficulte": 2
    },
    {
      "id": "USG-0027",
      "theme": "usagers",
      "enonce": "Vous vous apprêtez à dépasser un cycliste à moto sur une route où l'espace est limité. Quelles sont les bonnes pratiques à appliquer ?",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous rapprocher légèrement du cycliste pour réduire la durée du dépassement"
        },
        {
          "id": "b",
          "texte": "Élargir votre trajectoire pour dégager un espace latéral suffisant"
        },
        {
          "id": "c",
          "texte": "Patienter jusqu'à une portion de route dégagée si l'écart réglementaire n'est pas possible immédiatement"
        },
        {
          "id": "d",
          "texte": "Couper devant le cycliste juste après l'avoir dépassé pour reprendre votre file"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Il faut élargir sa trajectoire pour respecter l'écart latéral réglementaire, et si cet espace n'est pas disponible immédiatement, attendre une portion de route dégagée plutôt que de dépasser en serrant le cycliste. Se rapprocher de lui ou se rabattre brutalement juste après le dépassement réduit dangereusement la marge de sécurité.",
      "difficulte": 2
    },
    {
      "id": "USG-0028",
      "theme": "usagers",
      "enonce": "Votre itinéraire moto traverse des rails de tramway. Quel est le risque pour votre roue et quelle conduite devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le risque est nul, les rails n'affectent pas la tenue de route d'une moto"
        },
        {
          "id": "b",
          "texte": "La roue peut se coincer dans le rail : il faut garder la maîtrise de votre trajectoire et ne pas serrer un cycliste qui y serait déséquilibré"
        },
        {
          "id": "c",
          "texte": "Il faut rouler parallèlement aux rails pour réduire les vibrations"
        },
        {
          "id": "d",
          "texte": "Il faut accélérer fortement pour franchir les rails le plus vite possible"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La rainure des rails de tramway peut piéger une roue fine (moto ou vélo) et provoquer une chute ; il faut donc franchir les rails en gardant la maîtrise de sa trajectoire, avec un angle suffisant, et ne jamais serrer un cycliste qui y serait déséquilibré. Rouler parallèlement aux rails augmente au contraire le risque de coincement, et accélérer sans contrôle est dangereux.",
      "difficulte": 3
    },
    {
      "id": "USG-0029",
      "theme": "usagers",
      "enonce": "En tant que titulaire du permis moto, quelles précautions renforcées devez-vous appliquer face aux usagers vulnérables (piétons, cyclistes, personnes à mobilité réduite) ?",
      "media": "images/danger-cyclistes.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Adapter votre vitesse à leur présence"
        },
        {
          "id": "b",
          "texte": "Soigner votre visibilité (équipement contrasté, feux, anticipation des clignotants)"
        },
        {
          "id": "c",
          "texte": "Respecter des distances de sécurité suffisantes, notamment latérales lors d'un dépassement"
        },
        {
          "id": "d",
          "texte": "Considérer que ces usagers doivent systématiquement vous céder le passage"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Le motard, plus exposé et parfois moins visible qu'un automobiliste, doit renforcer vitesse adaptée, visibilité et distances de sécurité pour protéger les usagers vulnérables. Il est faux de considérer qu'ils doivent systématiquement vous céder le passage : la réglementation leur accorde au contraire souvent la priorité, notamment aux passages piétons.",
      "difficulte": 2
    },
    {
      "id": "USG-0030",
      "theme": "usagers",
      "enonce": "Vous roulez en voiture et un deux-roues motorisé circule près de vous. Pourquoi devez-vous vérifier vos angles morts avec un soin particulier avant toute manœuvre ?",
      "media": "images/angle-mort.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce qu'un deux-roues motorisé est plus difficile à repérer pour les autres conducteurs qu'une voiture."
        },
        {
          "id": "b",
          "texte": "Parce que les angles morts ne concernent que les poids lourds."
        },
        {
          "id": "c",
          "texte": "Parce que le code de la route interdit formellement à tout véhicule de dépasser un deux-roues motorisé."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un deux-roues motorisé, plus étroit et souvent moins visible qu'une automobile, se fond plus facilement dans le trafic et peut disparaître dans l'angle mort des autres conducteurs. C'est pourquoi il est essentiel, avant toute manœuvre, de vérifier soigneusement ses rétroviseurs et ses angles morts. Aucun texte n'interdit de dépasser un deux-roues, et les angles morts concernent tous les véhicules, pas seulement les poids lourds.",
      "difficulte": 1
    },
    {
      "id": "USG-0031",
      "theme": "usagers",
      "enonce": "Un deux-roues motorisé roule devant votre véhicule. Quelle distance de sécurité devez-vous conserver par rapport à lui ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La distance minimale légale, identique pour tous les véhicules quels qu'ils soient."
        },
        {
          "id": "b",
          "texte": "Une distance réduite, car une moto s'arrête plus rapidement qu'une voiture."
        },
        {
          "id": "c",
          "texte": "Une distance supérieure à celle qu'observerait un automobiliste suivant une autre voiture."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un deux-roues motorisé a besoin de plus d'espace qu'une voiture pour manœuvrer, éviter un obstacle ou changer brusquement de trajectoire : la distance de sécurité à respecter derrière lui doit donc être supérieure à celle observée derrière une automobile. La distance minimale légale ne suffit pas toujours à compenser cette instabilité propre aux deux-roues, et une bonne capacité de freinage ne justifie en rien de réduire cet écart.",
      "difficulte": 2
    },
    {
      "id": "USG-0032",
      "theme": "usagers",
      "enonce": "Vous partez à moto avec un passager. Quel équipement est légalement obligatoire, aussi bien pour vous que pour votre passager ?",
      "media": "images/photo-equipement.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une combinaison intégrale en cuir."
        },
        {
          "id": "b",
          "texte": "Des bottes montantes spécifiques à la moto."
        },
        {
          "id": "c",
          "texte": "Un casque homologué, correctement attaché."
        },
        {
          "id": "d",
          "texte": "Des lunettes de protection filtrantes."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Seul le port du casque homologué et correctement attaché est imposé par la réglementation, aussi bien pour le conducteur que pour le passager, quelle que soit la distance parcourue. La combinaison en cuir, les bottes montantes ou les lunettes de protection sont vivement recommandées pour la sécurité, mais elles ne constituent pas des obligations légales.",
      "difficulte": 1
    },
    {
      "id": "USG-0033",
      "theme": "usagers",
      "enonce": "Vous souhaitez remonter entre deux files de véhicules à l'arrêt ou circulant au ralenti. Que devez-vous savoir sur cette pratique, appelée circulation inter-files, en France ?",
      "media": "images/photo-circulation-file.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Elle n'est tolérée que la nuit, lorsque la circulation est plus fluide."
        },
        {
          "id": "b",
          "texte": "Elle n'est autorisée qu'à titre expérimental, dans certains départements désignés."
        },
        {
          "id": "c",
          "texte": "Vous pouvez la pratiquer sur toutes les autoroutes, quelle que soit la vitesse autorisée."
        },
        {
          "id": "d",
          "texte": "Vous devez limiter votre vitesse à 50 km/h maximum pendant la manœuvre."
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "La circulation inter-files reste une pratique encadrée : elle n'est autorisée qu'à titre expérimental dans certains départements désignés, et uniquement si le motard limite sa vitesse à 50 km/h maximum pendant la manœuvre. Elle n'est ni généralisée à toutes les autoroutes ni réservée à la nuit : ces conditions n'existent pas dans les textes qui encadrent cette expérimentation.",
      "difficulte": 3
    },
    {
      "id": "USG-0034",
      "theme": "usagers",
      "enonce": "Vous conduisez sous une pluie battante et un deux-roues motorisé circule à proximité. Pourquoi devez-vous redoubler de vigilance à son égard par rapport à une voiture dans les mêmes conditions ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que la réglementation vous oblige à rouler par mauvais temps sans jamais réduire votre vitesse."
        },
        {
          "id": "b",
          "texte": "Parce que la stabilité et l'adhérence d'un deux-roues sont plus sensibles aux intempéries qu'un véhicule à quatre roues."
        },
        {
          "id": "c",
          "texte": "Parce qu'un deux-roues motorisé n'est pas affecté par la pluie, le vent ou la neige."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Avec seulement deux points d'appui au sol, un deux-roues motorisé perd plus facilement son adhérence sous la pluie, le vent ou la neige qu'une voiture, ce qui impose de redoubler de prudence à son égard. Aucune règle n'impose de rouler sans adapter sa vitesse par mauvais temps, et affirmer qu'un deux-roues n'est pas affecté par les intempéries est directement contraire à la réalité.",
      "difficulte": 1
    },
    {
      "id": "USG-0035",
      "theme": "usagers",
      "enonce": "Vous roulez derrière un autobus en agglomération. Pourquoi devez-vous garder un intervalle important et ne jamais stationner dans son angle mort ?",
      "media": "images/angle-mort.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que les bus n'ont pas de rétroviseurs latéraux."
        },
        {
          "id": "b",
          "texte": "Parce que le conducteur du bus ne peut pas vous voir lorsque vous êtes dans cette zone."
        },
        {
          "id": "c",
          "texte": "Parce qu'un bus peut freiner brusquement, notamment à l'approche d'un arrêt."
        },
        {
          "id": "d",
          "texte": "Parce que la loi interdit tout dépassement d'un autobus."
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Un autobus possède de larges angles morts dans lesquels le conducteur ne peut pas apercevoir un deux-roues, et il peut ralentir ou s'arrêter sans prévenir près d'un arrêt : garder ses distances permet de rester visible et de réagir à temps. Les bus sont bien équipés de rétroviseurs (a est faux), et leur dépassement n'est pas interdit en soi, sous réserve de respecter les règles générales de dépassement (d est faux).",
      "difficulte": 2
    },
    {
      "id": "USG-0036",
      "theme": "usagers",
      "enonce": "Comment repérez-vous, en circulant à moto, qu'une voie est réservée aux véhicules de transport en commun ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement grâce à un revêtement de couleur rouge sur la chaussée."
        },
        {
          "id": "b",
          "texte": "Grâce à une signalisation verticale spécifique associée à un marquage au sol dédié."
        },
        {
          "id": "c",
          "texte": "Ces voies ne comportent aucune signalisation particulière."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une voie réservée aux transports en commun est annoncée par des panneaux spécifiques et un marquage au sol dédié (souvent le mot « BUS » peint sur la chaussée) : c'est ce double repère qu'il faut surveiller pour ne pas l'emprunter à tort. La couleur du revêtement n'est pas le critère officiel de reconnaissance (a), et ces voies sont bien signalées, contrairement à ce qu'affirme la proposition c.",
      "difficulte": 1
    },
    {
      "id": "USG-0037",
      "theme": "usagers",
      "enonce": "Parmi les véhicules suivants, lesquels appartiennent à la catégorie des véhicules de transport en commun que vous devez savoir identifier sur la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "L'autobus urbain."
        },
        {
          "id": "b",
          "texte": "La voiture personnelle utilisée pour du covoiturage entre collègues."
        },
        {
          "id": "c",
          "texte": "Le tramway."
        },
        {
          "id": "d",
          "texte": "Le trolleybus."
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Les véhicules de transport en commun regroupent notamment les autobus, les tramways, les trolleybus et les véhicules de transport scolaire, qui obéissent à des règles de circulation et de priorité particulières. Une voiture utilisée pour du covoiturage reste un véhicule particulier : elle ne bénéficie pas du statut ni des règles propres aux transports en commun, même lorsqu'elle transporte plusieurs personnes.",
      "difficulte": 2
    },
    {
      "id": "USG-0038",
      "theme": "usagers",
      "enonce": "Un autobus qui vous précède ralentit et enclenche son clignotant pour rejoindre un arrêt. Quelle attitude devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour le dépasser avant qu'il ne s'arrête complètement."
        },
        {
          "id": "b",
          "texte": "Klaxonner pour signaler votre présence et conserver votre vitesse."
        },
        {
          "id": "c",
          "texte": "Ralentir et laisser l'espace nécessaire pour que les passagers puissent descendre en sécurité."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "À l'approche d'un arrêt, un bus peut s'immobiliser rapidement et des passagers peuvent descendre puis traverser devant ou derrière le véhicule : il faut ralentir et garder ses distances pour anticiper ce mouvement. Accélérer pour le devancer au dernier moment (a) augmente le risque de collision avec un piéton ou avec le bus, et klaxonner en maintenant sa vitesse (b) ne remplace jamais la nécessité de ralentir.",
      "difficulte": 1
    },
    {
      "id": "USG-0039",
      "theme": "usagers",
      "enonce": "À moto, dans quel(s) cas devez-vous actionner vos clignotants avant de manœuvrer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement la nuit, quand la visibilité est réduite"
        },
        {
          "id": "b",
          "texte": "Avant de changer de voie de circulation"
        },
        {
          "id": "c",
          "texte": "Pour signaler aux autres que vous roulez plus vite qu'eux"
        },
        {
          "id": "d",
          "texte": "Avant tout changement de direction, y compris pour tourner à un carrefour"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le clignotant doit avertir les autres usagers dès qu'un changement de direction ou de voie est prévu, de jour comme de nuit : ce n'est pas un dispositif réservé à l'obscurité. Il n'a en revanche aucune fonction pour indiquer une vitesse ou une intention de dépassement rapide.",
      "difficulte": 1
    },
    {
      "id": "USG-0040",
      "theme": "usagers",
      "enonce": "En tant que motard, dans quelle situation l'usage du klaxon est-il justifié ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour saluer un autre motard que vous croisez"
        },
        {
          "id": "b",
          "texte": "Pour signaler votre présence en cas de danger potentiel"
        },
        {
          "id": "c",
          "texte": "Pour manifester votre impatience derrière un véhicule lent"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'avertisseur sonore sert exclusivement à prévenir un danger immédiat, par exemple pour alerter un usager qui ne vous a pas vu. Saluer ou exprimer son agacement ne sont pas des usages autorisés de ce dispositif.",
      "difficulte": 1
    },
    {
      "id": "USG-0041",
      "theme": "usagers",
      "enonce": "Vos clignotants tombent en panne et vous devez tourner à gauche au prochain carrefour. Quel geste du bras devez-vous adopter pour prévenir les autres usagers ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Lever l'avant-bras gauche à la verticale, main vers le haut"
        },
        {
          "id": "b",
          "texte": "Faire un signe de la main vers le bas"
        },
        {
          "id": "c",
          "texte": "Tendre le bras gauche à l'horizontale"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le code de la route prévoit que le bras gauche tendu à l'horizontale signale une intention de tourner ou de se déporter à gauche. Lever l'avant-bras gauche à la verticale signale au contraire un tournant à droite, et un geste vers le bas ne correspond à aucun signal réglementaire.",
      "difficulte": 2
    },
    {
      "id": "USG-0042",
      "theme": "usagers",
      "enonce": "Sur une voie de circulation classique, quelle position dans la voie permet généralement à un motard d'être le mieux vu par les autres usagers ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le plus à droite possible, au ras de l'accotement"
        },
        {
          "id": "b",
          "texte": "Relativement au centre de la voie"
        },
        {
          "id": "c",
          "texte": "Le plus à gauche possible, contre la ligne médiane"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Rester relativement au centre de sa voie maximise la visibilité du motard pour les autres véhicules et conserve une marge de manœuvre des deux côtés. Se coller à un bord de la voie réduit le champ de vision des autres conducteurs sur la moto et limite les possibilités d'évitement en cas d'imprévu.",
      "difficulte": 1
    },
    {
      "id": "USG-0043",
      "theme": "usagers",
      "enonce": "Quelles habitudes de conduite aident concrètement un motard à anticiper les dangers sur la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Fixer uniquement la roue du véhicule qui précède"
        },
        {
          "id": "b",
          "texte": "Consulter régulièrement ses rétroviseurs"
        },
        {
          "id": "c",
          "texte": "Ignorer les rétroviseurs pour rester concentré sur la route devant"
        },
        {
          "id": "d",
          "texte": "Porter le regard loin devant sur la chaussée"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Anticiper suppose une vision globale de l'environnement : regarder loin devant permet de détecter tôt un danger, et les rétroviseurs informent sur ce qui se passe derrière et sur les côtés. Fixer la roue du véhicule qui précède réduit le champ de vision périphérique, et se priver des rétroviseurs supprime une source d'information essentielle.",
      "difficulte": 2
    },
    {
      "id": "USG-0044",
      "theme": "usagers",
      "enonce": "Avant d'aborder un virage à droite dont vous ne voyez pas encore la sortie, quel ajustement de trajectoire dans votre voie améliore votre visibilité sur le virage ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Se déporter légèrement vers la droite de sa voie"
        },
        {
          "id": "b",
          "texte": "Rester strictement au centre sans ajustement"
        },
        {
          "id": "c",
          "texte": "Se déporter légèrement vers la gauche de sa voie"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Se placer légèrement à gauche de sa voie avant un virage à droite élargit l'angle de vue sur l'intérieur du virage et permet d'être repéré plus tôt par les véhicules venant en sens inverse ou débouchant d'un accès. Se déporter à droite ou rester strictement centré réduit au contraire cette visibilité anticipée.",
      "difficulte": 2
    },
    {
      "id": "USG-0045",
      "theme": "usagers",
      "enonce": "À moto, vous prenez l'habitude de regarder loin devant et de consulter fréquemment vos rétroviseurs. Quel est l'intérêt principal de cette observation permanente de l'environnement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle permet de repérer un danger avant qu'il ne se concrétise"
        },
        {
          "id": "b",
          "texte": "Elle autorise à rouler plus vite en toute sécurité"
        },
        {
          "id": "c",
          "texte": "Elle dispense de respecter les distances de sécurité"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "L'observation proactive (loin devant, rétroviseurs, environnement) permet de détecter les dangers potentiels avant qu'ils ne surviennent, ce qui laisse le temps de réagir. Elle n'a aucun lien avec la vitesse autorisée : rouler plus vite n'est ni son but ni une conséquence légale. Elle ne remplace jamais le respect des distances de sécurité, qui reste obligatoire quelle que soit la vigilance du conducteur.",
      "difficulte": 1
    },
    {
      "id": "USG-0046",
      "theme": "usagers",
      "enonce": "En circulation, plusieurs signes permettent de deviner ce qu'un autre usager va faire avant qu'il n'agisse. Parmi les éléments suivants, lesquels constituent réellement des indices utiles pour anticiper son comportement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La position d'une voiture dans sa voie de circulation"
        },
        {
          "id": "b",
          "texte": "Le clignotant activé par un conducteur"
        },
        {
          "id": "c",
          "texte": "Le mouvement de tête d'un piéton qui regarde avant de traverser"
        },
        {
          "id": "d",
          "texte": "La couleur de la carrosserie du véhicule"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "La position d'un véhicule dans sa voie, les clignotants, les feux de freinage et les mouvements de tête des piétons ou conducteurs sont autant d'indices qui révèlent une intention avant qu'elle ne se traduise en action. La couleur du véhicule, en revanche, n'apporte aucune information sur ce que son conducteur va faire : elle n'a aucune valeur prédictive pour l'anticipation.",
      "difficulte": 2
    },
    {
      "id": "USG-0047",
      "theme": "usagers",
      "enonce": "Vous repérez un indice annonçant qu'un usager va probablement créer une situation dangereuse. Une fois ce risque interprété, quelles réactions sont adaptées de votre part à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ralentir pour se ménager une marge de manœuvre"
        },
        {
          "id": "b",
          "texte": "Changer de voie si cela permet de s'écarter du danger"
        },
        {
          "id": "c",
          "texte": "Accélérer pour quitter la zone à risque le plus vite possible"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Après avoir observé et interprété un indice de danger, la réaction appropriée consiste à ralentir, changer de voie, ou encore avertir de sa présence par un coup de klaxon si nécessaire. Accélérer pour s'échapper est au contraire déconseillé : cela réduit la marge de réaction et augmente le risque, la vitesse ne devant jamais se substituer à la vigilance.",
      "difficulte": 2
    },
    {
      "id": "USG-0048",
      "theme": "usagers",
      "enonce": "Pourquoi un motocycliste doit-il impérativement conserver une distance de sécurité suffisante avec le véhicule qui le précède ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour disposer du temps nécessaire afin de réagir face à un imprévu"
        },
        {
          "id": "b",
          "texte": "Pour bénéficier de plus d'espace de manœuvre au quotidien"
        },
        {
          "id": "c",
          "texte": "Pour limiter la consommation de carburant de la moto"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La distance de sécurité sert avant tout à donner au motard le temps de réagir de façon sûre en cas d'événement imprévu (freinage brusque, obstacle, changement de trajectoire d'un usager). Avoir davantage d'espace pour manœuvrer n'est qu'une conséquence secondaire et non la raison essentielle, et cette distance n'a aucun effet sur la consommation de carburant.",
      "difficulte": 1
    },
    {
      "id": "USG-0049",
      "theme": "usagers",
      "enonce": "Vous roulez à moto sous une pluie battante, sur une chaussée glissante et avec une visibilité réduite. Comment cela doit-il influencer votre anticipation des comportements des autres usagers ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Ces conditions n'ont aucune incidence particulière sur la conduite"
        },
        {
          "id": "b",
          "texte": "Elles imposent une vigilance accrue et une anticipation renforcée"
        },
        {
          "id": "c",
          "texte": "Elles permettent de réduire les distances de sécurité habituelles"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une visibilité réduite et une chaussée glissante rendent les indices des autres usagers plus difficiles à percevoir et allongent les distances de freinage : il faut donc redoubler d'attention et anticiper davantage, jamais moins. Affirmer que ces conditions n'ont pas d'impact est faux, et il faut au contraire augmenter les distances de sécurité, jamais les réduire.",
      "difficulte": 2
    },

    /* ---------- MÉCANIQUE ET VÉRIFICATIONS DU DEUX-ROUES — ebook (30) ---------- */
    {
      "id": "MEC-0100",
      "theme": "mecanique",
      "enonce": "En tant que motard, pourquoi contrôlez-vous régulièrement la pression de vos pneus avant de rouler ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour diminuer automatiquement votre consommation de carburant en ville."
        },
        {
          "id": "b",
          "texte": "Pour vous dispenser de surveiller l'usure de la bande de roulement."
        },
        {
          "id": "c",
          "texte": "Pour conserver une bonne maniabilité et une stabilité optimale de la moto."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Les pneus sont le seul point de contact entre la moto et la route : une pression conforme aux préconisations du fabricant garantit la maniabilité et la stabilité du deux-roues. Elle n'agit pas directement sur la consommation de carburant, et contrôler la pression ne remplace pas la surveillance de l'usure des pneus, qui reste une vérification distincte et indispensable.",
      "difficulte": 1
    },
    {
      "id": "MEC-0101",
      "theme": "mecanique",
      "enonce": "Lors de l'entretien de votre moto, que devez-vous contrôler dans le système de freinage ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "L'état des plaquettes de frein."
        },
        {
          "id": "b",
          "texte": "La pression de vos pneus."
        },
        {
          "id": "c",
          "texte": "Le fonctionnement de vos clignotants."
        },
        {
          "id": "d",
          "texte": "Le niveau et l'état du liquide de frein."
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Le système de freinage doit être contrôlé dans son ensemble : plaquettes, liquide de frein, disques ou tambours, pour garantir une réponse rapide et efficace en cas de besoin. La pression des pneus relève de l'entretien des pneumatiques et les clignotants font partie de l'éclairage : ce sont des vérifications indépendantes du freinage.",
      "difficulte": 2
    },
    {
      "id": "MEC-0102",
      "theme": "mecanique",
      "enonce": "Quel est le rôle principal de la suspension de votre motocycle ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Absorber les irrégularités et les impacts de la route."
        },
        {
          "id": "b",
          "texte": "Participer à la transmission de la puissance vers la roue arrière."
        },
        {
          "id": "c",
          "texte": "Réduire la consommation de carburant de la moto."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La suspension absorbe les chocs de la route, ce qui préserve la stabilité de la moto et le confort du pilote. Ce n'est ni la suspension qui transmet la puissance à la roue arrière, c'est le rôle de la chaîne, ni elle qui influe sur la consommation de carburant, qui dépend du moteur.",
      "difficulte": 1
    },
    {
      "id": "MEC-0103",
      "theme": "mecanique",
      "enonce": "Parmi les équipements suivants, lesquels devez-vous vérifier pour être bien vu la nuit ou par mauvais temps ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les phares."
        },
        {
          "id": "b",
          "texte": "La luminosité de l'écran du tableau de bord."
        },
        {
          "id": "c",
          "texte": "Les feux arrière et les feux stop."
        },
        {
          "id": "d",
          "texte": "Les clignotants."
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Le système d'éclairage et de signalisation regroupe les phares, les feux arrière, les feux stop et les clignotants : tous doivent fonctionner pour voir et être vu, surtout de nuit ou par mauvais temps. La luminosité de l'écran du tableau de bord, elle, ne joue aucun rôle dans la visibilité de la moto pour les autres usagers.",
      "difficulte": 2
    },
    {
      "id": "MEC-0104",
      "theme": "mecanique",
      "enonce": "Pourquoi la chaîne de transmission de votre moto doit-elle rester correctement tendue et lubrifiée ?",
      "media": "images/photo-chaine-moto.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour augmenter la vitesse maximale de la moto."
        },
        {
          "id": "b",
          "texte": "Pour assurer une transmission fluide de la puissance jusqu'à la roue arrière."
        },
        {
          "id": "c",
          "texte": "Pour éviter qu'elle ne casse ou ne déraille, ce qui pourrait provoquer un accident."
        },
        {
          "id": "d",
          "texte": "Pour rendre la conduite plus silencieuse."
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Une chaîne bien tendue et lubrifiée transmet efficacement la puissance du moteur à la roue arrière ; mal entretenue, elle risque de casser ou de sauter, provoquant un accident. Elle n'a en revanche aucun effet sur la vitesse maximale de la moto, qui dépend du moteur, ni sur le niveau sonore, qui n'est pas l'enjeu de sécurité visé ici.",
      "difficulte": 2
    },
    {
      "id": "MEC-0105",
      "theme": "mecanique",
      "enonce": "Avant d'entamer un long trajet à moto, quel est l'intérêt de vérifier la pression de vos pneus ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Cela optimise la consommation de carburant et la tenue de route."
        },
        {
          "id": "b",
          "texte": "Cela prolonge la durée de vie des ampoules des feux."
        },
        {
          "id": "c",
          "texte": "Cela améliore l'adhérence et la stabilité du deux-roues."
        },
        {
          "id": "d",
          "texte": "Cela dispense de contrôler le niveau du liquide de frein."
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Une pression correcte agit directement sur la maniabilité, la stabilité et la consommation de carburant de la moto, car les pneus sont le seul point de contact avec la route. Elle n'a en revanche aucune influence sur les ampoules des feux, et ne remplace jamais le contrôle, totalement indépendant, du liquide de frein.",
      "difficulte": 2
    },
    {
      "id": "MEC-0106",
      "theme": "mecanique",
      "enonce": "Quelle est la bonne pratique concernant la surveillance des plaquettes de frein de votre moto ?",
      "media": "images/photo-frein-disque.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il suffit de les vérifier lorsqu'un bruit anormal apparaît au freinage."
        },
        {
          "id": "b",
          "texte": "Elles doivent être contrôlées régulièrement et changées dès qu'elles sont usées."
        },
        {
          "id": "c",
          "texte": "Un contrôle une fois par an est largement suffisant, quel que soit le kilométrage."
        },
        {
          "id": "d",
          "texte": "Leur état importe peu si le niveau de liquide de frein est correct."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'usure des plaquettes dépend du kilométrage et du style de conduite, pas d'une échéance fixe : elles doivent donc être surveillées régulièrement et remplacées dès qu'elles sont usées, sans attendre un bruit ou une date anniversaire. Le liquide de frein et les plaquettes forment deux points de contrôle distincts, l'un ne compense jamais l'autre.",
      "difficulte": 2
    },
    {
      "id": "MEC-0107",
      "theme": "mecanique",
      "enonce": "Vous constatez que votre feu stop ne s'allume plus lorsque vous freinez. Que devez-vous contrôler en priorité ?",
      "media": "images/stop.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le niveau d'huile moteur."
        },
        {
          "id": "b",
          "texte": "Le niveau du liquide de frein."
        },
        {
          "id": "c",
          "texte": "L'état de l'ampoule du feu stop."
        },
        {
          "id": "d",
          "texte": "La pression des pneus."
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Une ampoule défectueuse est la cause la plus courante d'un feu stop qui ne fonctionne plus : c'est donc le premier point à vérifier, avant de chercher une autre explication. L'huile moteur, le liquide de frein et la pression des pneus sont des éléments indépendants du circuit électrique d'éclairage.",
      "difficulte": 1
    },
    {
      "id": "MEC-0108",
      "theme": "mecanique",
      "enonce": "Quelle conséquence peut avoir un niveau de liquide de frein insuffisant sur votre moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Aucune, car les plaquettes de frein compensent automatiquement le manque."
        },
        {
          "id": "b",
          "texte": "Une usure accélérée des pneumatiques."
        },
        {
          "id": "c",
          "texte": "Une amélioration temporaire du freinage grâce à la pression résiduelle."
        },
        {
          "id": "d",
          "texte": "Une diminution de la capacité de freinage, pouvant aller jusqu'à la défaillance du système."
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Le liquide de frein transmet la force exercée sur la commande jusqu'aux plaquettes ; s'il est insuffisant, cette transmission est moins efficace et la puissance de freinage diminue, avec un risque de défaillance totale du système. Ni les plaquettes ni les pneus ne peuvent compenser ce manque, et il ne procure aucune amélioration, même temporaire.",
      "difficulte": 2
    },
    {
      "id": "MEC-0109",
      "theme": "mecanique",
      "enonce": "Pour rouler à moto dans de bonnes conditions d'adhérence en plein hiver, quels pneumatiques faut-il privilégier ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Des pneus été, qui restent performants toute l'année."
        },
        {
          "id": "b",
          "texte": "Des pneus hiver, conçus pour les températures basses."
        },
        {
          "id": "c",
          "texte": "Des pneus toutes saisons, adaptés à des conditions climatiques variées."
        },
        {
          "id": "d",
          "texte": "Des pneus usés, à condition qu'ils soient gonflés à la bonne pression."
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les pneus hiver et toutes saisons disposent d'une gomme et de sculptures conçues pour conserver leur adhérence sur chaussée froide ou humide, contrairement aux pneus été qui durcissent et perdent en efficacité sous de basses températures. Un pneu usé reste dangereux quelle que soit sa pression, car c'est la bande de roulement qui assure l'accroche au sol.",
      "difficulte": 2
    },
    {
      "id": "MEC-0110",
      "theme": "mecanique",
      "enonce": "Sur une moto, quelles sont les fonctions assurées par l'huile moteur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Lubrifier les pièces internes du moteur"
        },
        {
          "id": "b",
          "texte": "Contribuer à dissiper la chaleur produite par le moteur"
        },
        {
          "id": "c",
          "texte": "Remplacer le liquide de refroidissement du circuit"
        },
        {
          "id": "d",
          "texte": "Augmenter la vitesse maximale de la moto"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "L'huile moteur lubrifie les pièces internes, réduit les frottements entre elles et aide à dissiper la chaleur générée par leur fonctionnement. Elle ne remplace en rien le liquide de refroidissement, qui appartient à un circuit distinct, et elle n'a aucun effet sur la vitesse maximale de la moto.",
      "difficulte": 1
    },
    {
      "id": "MEC-0111",
      "theme": "mecanique",
      "enonce": "Que risque le moteur d'une moto dont le niveau d'huile n'est pas contrôlé et entretenu régulièrement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une meilleure lubrification des freins"
        },
        {
          "id": "b",
          "texte": "Une usure prématurée des pièces internes"
        },
        {
          "id": "c",
          "texte": "Une baisse de la consommation de carburant"
        },
        {
          "id": "d",
          "texte": "Des pannes mécaniques"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Un manque d'huile prive les pièces internes de lubrification : elles s'usent plus vite et le moteur peut finir par tomber en panne. L'huile moteur n'a aucun lien avec le circuit de freinage ni avec la consommation de carburant, qui dépendent d'autres organes de la moto.",
      "difficulte": 2
    },
    {
      "id": "MEC-0112",
      "theme": "mecanique",
      "enonce": "En l'absence d'indication contraire du constructeur, à quel rythme le liquide de frein d'une moto doit-il généralement être remplacé ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Environ chaque mois"
        },
        {
          "id": "b",
          "texte": "Environ tous les deux ans"
        },
        {
          "id": "c",
          "texte": "Environ tous les cinq ans"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le liquide de frein absorbe progressivement l'humidité de l'air, ce qui altère ses performances même sans fuite visible : c'est pourquoi les constructeurs recommandent généralement de le remplacer environ tous les deux ans. Un intervalle d'un mois est inutilement court, et attendre cinq ans expose à un freinage moins efficace.",
      "difficulte": 2
    },
    {
      "id": "MEC-0113",
      "theme": "mecanique",
      "enonce": "Vous constatez que le niveau de liquide de frein de votre moto est descendu près du repère minimum. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ajouter de l'eau pour remonter le niveau"
        },
        {
          "id": "b",
          "texte": "Continuer à rouler sans intervenir, les freins fonctionnant encore"
        },
        {
          "id": "c",
          "texte": "Compléter le réservoir avec le liquide de frein préconisé par le constructeur"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Seul le liquide de frein recommandé par le constructeur doit être utilisé pour compléter le niveau. L'eau abîme les composants du circuit et bout à basse température, ce qui peut faire perdre l'efficacité du freinage ; ignorer un niveau bas est tout aussi dangereux, car cela peut annoncer une baisse d'efficacité du système.",
      "difficulte": 1
    },
    {
      "id": "MEC-0114",
      "theme": "mecanique",
      "enonce": "Quelle est la bonne pratique pour gérer le niveau de carburant de sa moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Se fier au bruit du moteur pour estimer la réserve restante"
        },
        {
          "id": "b",
          "texte": "Vérifier le niveau à la jauge avant chaque sortie et anticiper le plein"
        },
        {
          "id": "c",
          "texte": "Ne contrôler le niveau qu'une fois par mois"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le carburant se vérifie visuellement à la jauge avant chaque sortie, ce qui permet d'anticiper le plein et d'éviter la panne sèche. Le bruit du moteur ne renseigne pas fiablement sur la quantité de carburant restante, et un contrôle mensuel est bien trop espacé pour un usage régulier de la moto.",
      "difficulte": 1
    },
    {
      "id": "MEC-0115",
      "theme": "mecanique",
      "enonce": "Vous remplacez le pot d'échappement d'origine de votre moto par un modèle plus sonore. Pourquoi devez-vous malgré tout respecter les limites de bruit et les normes Euro d'émissions en vigueur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement pour éviter une amende lors d'un contrôle routier."
        },
        {
          "id": "b",
          "texte": "Pour limiter la pollution sonore et respecter les normes environnementales en vigueur."
        },
        {
          "id": "c",
          "texte": "Parce que cela augmente automatiquement la puissance réelle du moteur."
        },
        {
          "id": "d",
          "texte": "Parce qu'un échappement modifié n'a pas besoin d'être homologué, contrairement à un échappement d'origine."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les normes Euro d'émissions et les limites de bruit existent avant tout pour réduire la pollution atmosphérique et les nuisances sonores pour les riverains et les autres usagers ; l'amende n'est qu'une sanction possible en cas de non-respect, pas la raison de la règle. Changer d'échappement ne rend pas le moteur plus puissant pour autant, et toute pièce ajoutée ou modifiée, y compris un échappement, doit être homologuée et conforme aux normes européennes.",
      "difficulte": 1
    },
    {
      "id": "MEC-0116",
      "theme": "mecanique",
      "enonce": "Un motard modifie lui-même son système de freinage sans respecter les spécifications du constructeur. Quelles conséquences cette modification peut-elle entraîner ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une distance de freinage plus longue qu'à l'origine."
        },
        {
          "id": "b",
          "texte": "Un risque d'accident accru en cas de freinage d'urgence."
        },
        {
          "id": "c",
          "texte": "Une meilleure adhérence des pneus par temps de pluie."
        },
        {
          "id": "d",
          "texte": "Une réduction automatique de la prime d'assurance."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Un système de freinage qui ne respecte plus les spécifications du constructeur perd en efficacité : la distance de freinage s'allonge et le risque d'accident augmente, notamment en cas de freinage d'urgence. Cette modification n'améliore en rien l'adhérence des pneus, et loin de faire baisser la prime, une modification non conforme peut au contraire pousser l'assureur à refuser la garantie en cas de sinistre.",
      "difficulte": 2
    },
    {
      "id": "MEC-0117",
      "theme": "mecanique",
      "enonce": "Avant d'ajouter ou de remplacer une pièce sur votre moto, quel document devez-vous consulter pour vérifier les spécifications et limites fixées par le fabricant ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La carte grise (certificat d'immatriculation) du véhicule."
        },
        {
          "id": "b",
          "texte": "Le manuel du propriétaire de la moto."
        },
        {
          "id": "c",
          "texte": "L'attestation d'assurance en cours."
        },
        {
          "id": "d",
          "texte": "Le contrat de vente initial de la moto."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le manuel du propriétaire indique les spécifications techniques et les limites de modification recommandées par le fabricant ; c'est donc la référence à consulter avant toute intervention. La carte grise ne porte que des informations administratives sur le véhicule, et ni l'attestation d'assurance ni le contrat de vente ne contiennent de données techniques utiles à ce sujet.",
      "difficulte": 1
    },
    {
      "id": "MEC-0118",
      "theme": "mecanique",
      "enonce": "Pour une modification technique complexe (freinage, échappement, éclairage...), quel est l'intérêt principal de faire appel à un professionnel plutôt que de s'en occuper soi-même ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela garantit que la modification reste conforme aux réglementations et sécuritaire."
        },
        {
          "id": "b",
          "texte": "Cela permet d'échapper à tout contrôle ultérieur sur la moto."
        },
        {
          "id": "c",
          "texte": "Cela dispense automatiquement la pièce installée d'homologation."
        },
        {
          "id": "d",
          "texte": "Cela revient toujours moins cher qu'un montage réalisé soi-même."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un professionnel connaît les réglementations en vigueur et installe les pièces dans le respect des spécifications du constructeur, ce qui garantit à la fois la conformité légale et la sécurité de la moto. Aucune intervention professionnelle ne supprime l'obligation d'homologation ni ne met la moto à l'abri d'un contrôle, et faire appel à un professionnel coûte en général plus cher qu'un montage soi-même, pas moins cher.",
      "difficulte": 1
    },
    {
      "id": "MEC-0119",
      "theme": "mecanique",
      "enonce": "Lors d'un contrôle, les forces de l'ordre constatent que votre moto présente des modifications non conformes aux réglementations. Que risquez-vous concrètement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une amende."
        },
        {
          "id": "b",
          "texte": "L'immobilisation immédiate de votre moto."
        },
        {
          "id": "c",
          "texte": "Un refus de votre assureur de couvrir les dommages en cas d'accident."
        },
        {
          "id": "d",
          "texte": "La suspension automatique de votre permis de conduire pendant un an."
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Des modifications non conformes exposent le conducteur à une amende, à une immobilisation du véhicule par les forces de l'ordre, ainsi qu'à un refus de prise en charge par l'assureur en cas de sinistre. Une suspension automatique du permis pour un an n'est en revanche pas une conséquence prévue pour ce type d'infraction : une telle sanction relève de fautes de conduite bien plus graves.",
      "difficulte": 3
    },
    {
      "id": "MEC-0120",
      "theme": "mecanique",
      "enonce": "Sur une moto, il existe un feu qui doit obligatoirement être allumé dès que la visibilité devient insuffisante, que ce soit en pleine journée (brouillard, forte pluie) ou à la nuit tombée. Lequel ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le feu de route"
        },
        {
          "id": "b",
          "texte": "Le feu de croisement"
        },
        {
          "id": "c",
          "texte": "Le feu de position"
        },
        {
          "id": "d",
          "texte": "Le feu de plaque"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le feu de croisement doit être utilisé dès que la visibilité est insuffisante, de jour comme de nuit : il permet à la fois de voir la route et d'être vu des autres usagers. Le feu de route ne s'utilise que la nuit pour voir plus loin et éblouit s'il reste allumé face à un véhicule. Le feu de position sert seulement à être vu à faible distance, notamment à l'arrêt, et le feu de plaque n'a qu'un rôle d'éclairage de l'immatriculation.",
      "difficulte": 1
    },
    {
      "id": "MEC-0121",
      "theme": "mecanique",
      "enonce": "Vous circulez de nuit en feu de route sur une route non éclairée. Parmi les affirmations suivantes sur ce feu, lesquelles sont correctes ?",
      "media": "images/portee-feux.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il permet de voir plus loin devant vous dans l'obscurité"
        },
        {
          "id": "b",
          "texte": "Il doit rester allumé en permanence, même face à un véhicule qui arrive en sens inverse"
        },
        {
          "id": "c",
          "texte": "Il doit être coupé, au profit du feu de croisement, dès qu'un véhicule arrive en face de vous"
        },
        {
          "id": "d",
          "texte": "Il remplace avantageusement le feu de croisement par temps de brouillard"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Le feu de route porte l'éclairage plus loin la nuit, mais il doit impérativement être basculé en feu de croisement dès qu'un véhicule arrive en sens inverse, pour ne pas éblouir son conducteur. Le garder allumé face à un véhicule (b) est donc dangereux et interdit, et par temps de brouillard c'est le feu de croisement, voire les feux de brouillard, qui doit être utilisé : le feu de route y crée au contraire un effet de halo qui réduit la visibilité (d).",
      "difficulte": 2
    },
    {
      "id": "MEC-0122",
      "theme": "mecanique",
      "enonce": "Une moto est arrêtée sur le bas-côté à la nuit tombée. Quel est le rôle des feux de position dans cette situation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Éclairer loin devant pour repérer les obstacles sur la route"
        },
        {
          "id": "b",
          "texte": "Signaler aux véhicules suiveurs qu'un freinage est en cours"
        },
        {
          "id": "c",
          "texte": "Éclairer la plaque d'immatriculation"
        },
        {
          "id": "d",
          "texte": "Permettre aux autres usagers de repérer la moto à faible distance"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Les feux de position servent à être vu à courte distance, ce qui est particulièrement utile pour un deux-roues arrêté sur le bas-côté la nuit. Éclairer loin devant relève des feux de croisement ou de route (a), signaler un freinage est le rôle du feu stop (b), et l'éclairage de la plaque est assuré par un feu distinct, le feu de plaque (c).",
      "difficulte": 1
    },
    {
      "id": "MEC-0123",
      "theme": "mecanique",
      "enonce": "Quel feu de la moto s'allume automatiquement lorsque vous actionnez le frein, pour prévenir les usagers qui vous suivent que vous ralentissez ou que vous vous arrêtez ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le feu de position"
        },
        {
          "id": "b",
          "texte": "Le feu stop"
        },
        {
          "id": "c",
          "texte": "Le feu de croisement"
        },
        {
          "id": "d",
          "texte": "Le feu de brouillard arrière"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le feu stop s'active dès l'actionnement du frein et avertit les véhicules suiveurs d'un ralentissement ou d'un arrêt imminent. Les feux de position et de croisement restent allumés en continu, sans lien avec le freinage, et le feu de brouillard arrière n'a qu'un rôle de visibilité par mauvais temps, pas de signalisation de freinage.",
      "difficulte": 1
    },
    {
      "id": "MEC-0124",
      "theme": "mecanique",
      "enonce": "À propos des feux de brouillard, avant et arrière, que l'on peut trouver sur une moto, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ce sont des équipements facultatifs, contrairement au feu de croisement ou au feu stop qui sont obligatoires"
        },
        {
          "id": "b",
          "texte": "Le feu de brouillard avant améliore la visibilité de la route en cas de forte pluie, de brouillard ou de neige"
        },
        {
          "id": "c",
          "texte": "Le feu de brouillard arrière aide les véhicules qui suivent à mieux repérer la moto lorsque la visibilité est mauvaise"
        },
        {
          "id": "d",
          "texte": "Ils doivent rester allumés en permanence, y compris par temps clair, pour une meilleure visibilité"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Les feux de brouillard avant et arrière sont facultatifs : l'avant améliore l'éclairage de la route en cas de brouillard, forte pluie ou neige, tandis que l'arrière aide les conducteurs suiveurs à repérer la moto dans ces mêmes conditions. Les laisser allumés en permanence par temps clair (d) est en revanche incorrect et même gênant, puisqu'ils sont conçus pour un usage ponctuel en cas de mauvaise visibilité.",
      "difficulte": 2
    },
    {
      "id": "MEC-0125",
      "theme": "mecanique",
      "enonce": "Vous devez resserrer un boulon important sur votre moto (fixation de roue, étrier de frein...) au couple préconisé par le constructeur. Quel outil devez-vous utiliser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une clé à molette"
        },
        {
          "id": "b",
          "texte": "Une clé dynamométrique"
        },
        {
          "id": "c",
          "texte": "Une pince multiprise"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La clé dynamométrique permet de mesurer et d'appliquer précisément le couple de serrage indiqué par le constructeur, évitant un serrage insuffisant (risque de desserrage en roulant) ou excessif (risque de casse de la pièce). La clé à molette et la pince multiprise ne permettent aucune mesure du couple appliqué et sont donc inadaptées à ce type d'opération sensible.",
      "difficulte": 1
    },
    {
      "id": "MEC-0126",
      "theme": "mecanique",
      "enonce": "Pourquoi devez-vous contrôler régulièrement la pression de vos pneus moto à l'aide d'un manomètre ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Pour optimiser l'adhérence et la tenue de route de la moto"
        },
        {
          "id": "b",
          "texte": "Pour garantir un freinage efficace et donc la sécurité"
        },
        {
          "id": "c",
          "texte": "Pour éviter d'avoir à vidanger l'huile moteur plus souvent"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Une pression de pneus correcte conditionne directement l'adhérence, la tenue de route et la distance de freinage, donc à la fois la sécurité et les performances de la moto. Elle n'a en revanche aucun lien avec la fréquence des vidanges d'huile moteur, qui dépend du kilométrage parcouru et du type de moteur.",
      "difficulte": 2
    },
    {
      "id": "MEC-0127",
      "theme": "mecanique",
      "enonce": "Pour intervenir en toute sécurité sur la chaîne ou la roue arrière de votre moto, quel équipement permet de la stabiliser en la surélevant ?",
      "media": "images/photo-chaine-moto.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Un cric hydraulique de voiture"
        },
        {
          "id": "b",
          "texte": "Un trépied de levage (béquille d'atelier)"
        },
        {
          "id": "c",
          "texte": "Une pince multiprise"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le trépied de levage, aussi appelé béquille d'atelier, est conçu pour soulever et stabiliser une moto en toute sécurité afin de travailler sur les éléments bas comme la chaîne ou la roue. Un cric de voiture n'offre pas la stabilité latérale nécessaire pour un deux-roues, et la pince multiprise est un outil de serrage, non de levage.",
      "difficulte": 1
    },
    {
      "id": "MEC-0128",
      "theme": "mecanique",
      "enonce": "Sur quels éléments de votre moto pouvez-vous utiliser un graisseur pour limiter les frottements et l'usure ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La chaîne de transmission"
        },
        {
          "id": "b",
          "texte": "Les câbles et articulations mobiles (leviers, béquille...)"
        },
        {
          "id": "c",
          "texte": "Les plaquettes et disques de frein"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le graisseur s'utilise sur la chaîne et les autres pièces mobiles soumises à friction, comme les câbles et articulations, pour prévenir leur usure prématurée. Il ne faut en revanche jamais lubrifier les plaquettes ni les disques de frein : cela réduirait leur adhérence et donc l'efficacité du freinage, ce qui serait dangereux.",
      "difficulte": 2
    },
    {
      "id": "MEC-0129",
      "theme": "mecanique",
      "enonce": "Quel outil est spécifiquement conçu pour nettoyer la chaîne de transmission avant de la relubrifier ?",
      "media": "images/photo-chaine-moto.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une pince multiprise"
        },
        {
          "id": "b",
          "texte": "Un nettoyeur de chaînes"
        },
        {
          "id": "c",
          "texte": "Une clé dynamométrique"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le nettoyeur de chaînes est un outil/produit spécialisé qui élimine la saleté et les résidus de graisse usagée avant l'application d'un lubrifiant neuf, assurant une transmission efficace de la puissance du moteur à la roue. La pince multiprise sert au serrage de pièces et la clé dynamométrique au respect du couple de serrage, aucune des deux n'étant destinée au nettoyage.",
      "difficulte": 1
    },

    /* ---------- ÉQUIPEMENTS DE PROTECTION — ebook (46) ---------- */
    {
      "id": "EQP-0035",
      "theme": "equipements",
      "enonce": "Parmi les casques homologués que vous pouvez porter à moto, lequel offre habituellement le meilleur niveau de protection pour la tête ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le casque crossover"
        },
        {
          "id": "b",
          "texte": "Le casque jet"
        },
        {
          "id": "c",
          "texte": "Le casque modulable"
        },
        {
          "id": "d",
          "texte": "Le casque intégral"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Le casque intégral enveloppe entièrement la tête, y compris le menton et la mâchoire, ce qui lui confère la meilleure protection parmi les casques homologués. Le casque jet laisse le visage à l'air libre, le modulable dispose d'une mentonnière articulée moins rigide qu'une coque fixe, et le crossover, pensé pour un usage mixte route/tout-terrain, reste lui aussi moins protecteur qu'un intégral.",
      "difficulte": 1
    },
    {
      "id": "EQP-0036",
      "theme": "equipements",
      "enonce": "Concernant l'obligation de porter des gants à moto en France, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils doivent porter un marquage CE attestant de leur homologation"
        },
        {
          "id": "b",
          "texte": "Cette obligation s'applique à tous les conducteurs et passagers depuis novembre 2016"
        },
        {
          "id": "c",
          "texte": "Cette obligation ne concerne que les motos de plus de 400 cm3"
        },
        {
          "id": "d",
          "texte": "Leur seul rôle est de protéger les mains du froid et de la pluie"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Depuis novembre 2016, tout conducteur et passager d'un deux-roues motorisé doit porter des gants homologués CE, quelle que soit la cylindrée du véhicule. Au-delà de la protection contre les intempéries, ces gants sont surtout conçus pour absorber les chocs et limiter les blessures aux mains en cas de chute.",
      "difficulte": 2
    },
    {
      "id": "EQP-0037",
      "theme": "equipements",
      "enonce": "Si vous êtes impliqué dans un accident ou tombez en panne sur la route à moto, quel équipement devez-vous pouvoir enfiler immédiatement ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Les gants renforcés"
        },
        {
          "id": "b",
          "texte": "Le casque intégral"
        },
        {
          "id": "c",
          "texte": "Le gilet de haute visibilité"
        },
        {
          "id": "d",
          "texte": "Les bottes montantes"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La réglementation impose au motard de disposer à bord d'un gilet haute visibilité à revêtir en cas d'accident ou de panne, afin d'être repéré par les autres usagers, notamment en conditions de faible luminosité. Le casque et les gants sont des équipements de conduite requis en permanence mais ne remplissent pas ce rôle de signalisation, et les bottes, bien que recommandées, ne sont pas concernées par cette obligation.",
      "difficulte": 1
    },
    {
      "id": "EQP-0038",
      "theme": "equipements",
      "enonce": "Sur les blousons et pantalons destinés à la pratique de la moto, que peut-on affirmer à juste titre ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils doivent obligatoirement être imperméables et de couleur noire"
        },
        {
          "id": "b",
          "texte": "Ils gagnent à être renforcés aux coudes, aux épaules et aux genoux"
        },
        {
          "id": "c",
          "texte": "Certains modèles intègrent un airbag qui se déclenche lors d'une chute"
        },
        {
          "id": "d",
          "texte": "Il vaut mieux privilégier un tissu imperméable mais non respirant"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les vêtements de moto protègent mieux lorsqu'ils renforcent les zones les plus exposées en cas de chute, comme les coudes, les épaules et les genoux, et certains modèles récents embarquent même un airbag à déclenchement automatique. Il n'existe aucune obligation légale de couleur ou d'imperméabilité totale, et l'idéal reste un équipement résistant tout en demeurant respirant, plutôt qu'étanche et étouffant.",
      "difficulte": 3
    },
    {
      "id": "EQP-0039",
      "theme": "equipements",
      "enonce": "Comment un motard peut-il légalement s'assurer que son casque respecte la réglementation en vigueur ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "En vérifiant qu'il est de couleur vive et donc bien visible"
        },
        {
          "id": "b",
          "texte": "En vérifiant qu'il est le plus léger possible"
        },
        {
          "id": "c",
          "texte": "En vérifiant la présence d'une étiquette d'homologation correspondant à une norme reconnue"
        },
        {
          "id": "d",
          "texte": "En vérifiant qu'il provient d'une marque reconnue"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un casque de moto n'est conforme que s'il est homologué selon une norme reconnue (ECE 22-05 ou ECE 22-06) et porte l'étiquette d'homologation correspondante. Ni la couleur, ni le poids, ni la notoriété de la marque ne constituent un critère légal de conformité, même si ce sont des éléments de confort ou de préférence personnelle.",
      "difficulte": 1
    },
    {
      "id": "EQP-0040",
      "theme": "equipements",
      "enonce": "Vous préparez votre trajet et hésitez entre plusieurs casques. Quel type vous garantit la meilleure protection de la tête et du visage en cas de choc ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Casque intégral"
        },
        {
          "id": "b",
          "texte": "Casque jet"
        },
        {
          "id": "c",
          "texte": "Casque modulable utilisé mentonnière relevée"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le casque intégral enveloppe entièrement la tête, le visage et le menton, ce qui lui permet d'offrir la meilleure protection en cas de choc. Le casque jet, plus léger et aéré, laisse le visage à découvert et protège donc moins bien. Utilisé mentonnière relevée, un casque modulable se comporte comme un casque jet et perd l'essentiel de sa protection faciale.",
      "difficulte": 1
    },
    {
      "id": "EQP-0041",
      "theme": "equipements",
      "enonce": "En France, que devez-vous savoir sur le port du casque à moto pour le conducteur et le passager ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le passager transporté doit lui aussi porter un casque homologué"
        },
        {
          "id": "b",
          "texte": "Le casque n'est obligatoire que pour le conducteur"
        },
        {
          "id": "c",
          "texte": "Le casque doit respecter la norme d'homologation ECE 22-05"
        },
        {
          "id": "d",
          "texte": "Un casque de vélo bien ajusté peut légalement remplacer un casque moto"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Le port d'un casque homologué à la norme ECE 22-05 est obligatoire aussi bien pour le conducteur que pour le passager, et non pour le seul conducteur. Un casque de vélo n'est ni homologué pour un usage motocycliste ni conçu pour absorber ce type de choc, il ne peut donc pas s'y substituer.",
      "difficulte": 2
    },
    {
      "id": "EQP-0042",
      "theme": "equipements",
      "enonce": "Pourquoi le port de gants est-il obligatoire lorsque vous roulez à moto en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour assortir la tenue à la couleur de la moto"
        },
        {
          "id": "b",
          "texte": "Pour améliorer uniquement l'adhérence sur les poignées"
        },
        {
          "id": "c",
          "texte": "Pour protéger les mains des chocs et des intempéries"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Les gants homologués sont obligatoires en moto car ils protègent les mains en cas de chute ou de choc, ainsi que du froid, de la pluie et du vent. Leur rôle ne se limite donc pas à l'esthétique ni à la seule prise en main du guidon, même si cela peut être un effet secondaire.",
      "difficulte": 1
    },
    {
      "id": "EQP-0043",
      "theme": "equipements",
      "enonce": "Concernant la veste, le pantalon et les bottes à porter pour rouler à moto, quelles propositions sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les bottes doivent laisser les chevilles totalement découvertes"
        },
        {
          "id": "b",
          "texte": "La veste et le pantalon doivent être renforcés aux épaules, coudes et genoux"
        },
        {
          "id": "c",
          "texte": "Les équipements munis de bandes réfléchissantes sont déconseillés pour un motard"
        },
        {
          "id": "d",
          "texte": "Les bottes doivent couvrir et renforcer la protection des chevilles"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "La veste et le pantalon protègent efficacement en cas de chute lorsqu'ils sont renforcés aux zones les plus exposées (épaules, coudes, genoux), et les bottes doivent couvrir et renforcer les chevilles plutôt que les laisser à nu. Les bandes réfléchissantes sont au contraire conseillées, car elles améliorent la visibilité du motard, notamment de nuit ou par mauvais temps.",
      "difficulte": 2
    },
    {
      "id": "EQP-0044",
      "theme": "equipements",
      "enonce": "Vous allez acheter un nouveau casque. Quels éléments devez-vous prendre en compte pour bien le choisir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le confort et la taille adaptés à votre morphologie"
        },
        {
          "id": "b",
          "texte": "La ventilation"
        },
        {
          "id": "c",
          "texte": "Uniquement le prix le plus bas"
        },
        {
          "id": "d",
          "texte": "Le poids du casque"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "Le choix d'un casque doit tenir compte du confort, de la taille adaptée à la morphologie, du poids et de la ventilation, afin d'assurer une utilisation sûre et agréable sur la durée. Se baser uniquement sur le prix le plus bas ne garantit ni un bon maintien ni une protection adaptée.",
      "difficulte": 2
    },
    {
      "id": "EQP-0045",
      "theme": "equipements",
      "enonce": "Quel est le statut de la protection dorsale pour un motard qui circule en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle est obligatoire, au même titre que le casque"
        },
        {
          "id": "b",
          "texte": "Elle est fortement recommandée pour protéger la colonne vertébrale en cas de chute"
        },
        {
          "id": "c",
          "texte": "Elle est totalement facultative et sans réel intérêt pour la sécurité"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La protection dorsale n'est pas une obligation légale comme le casque, mais elle est fortement recommandée car elle protège efficacement la colonne vertébrale en cas de chute ou de choc. La négliger n'est donc pas sans conséquence, contrairement à l'idée qu'elle serait sans réel intérêt.",
      "difficulte": 1
    },
    {
      "id": "EQP-0046",
      "theme": "equipements",
      "enonce": "Vous circulez à moto avec un passager installé derrière vous. Concernant l'obligation de porter un casque homologué, que dit la réglementation française ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Elle s'applique uniquement à vous, le passager n'étant pas concerné."
        },
        {
          "id": "b",
          "texte": "Elle s'applique à vous et à votre passager, sans aucune exception."
        },
        {
          "id": "c",
          "texte": "Elle ne s'applique qu'en dehors des agglomérations."
        },
        {
          "id": "d",
          "texte": "Elle ne s'applique que pour les trajets de plus de 50 km."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En France, le port du casque homologué est obligatoire pour le conducteur ET pour tout passager transporté sur une moto, quelle que soit la distance parcourue ou le type de voie emprunté. Aucune exception de lieu, de durée de trajet ou de statut (conducteur/passager) n'est prévue par le code de la route.",
      "difficulte": 1
    },
    {
      "id": "EQP-0047",
      "theme": "equipements",
      "enonce": "Quelles affirmations sur l'homologation d'un casque de moto vendu en France sont exactes ?",
      "media": "images/casque-homologation.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Un casque certifié selon la norme européenne ECE 22-05 peut être homologué."
        },
        {
          "id": "b",
          "texte": "La norme ECE 22-06, plus récente, est également reconnue pour l'homologation."
        },
        {
          "id": "c",
          "texte": "Un casque certifié uniquement selon la norme américaine DOT est valable en France."
        },
        {
          "id": "d",
          "texte": "Un casque homologué porte une étiquette avec la lettre « E » suivie d'un numéro."
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "L'homologation d'un casque de moto en France repose sur les normes européennes ECE 22-05 ou ECE 22-06 (la plus récente), attestées par une étiquette portant la lettre « E » suivie d'un numéro après des essais d'impact, de résistance et de rétention. Une certification purement américaine comme la norme DOT, sans équivalence européenne, ne suffit pas à rendre un casque légal sur le territoire français.",
      "difficulte": 3
    },
    {
      "id": "EQP-0048",
      "theme": "equipements",
      "enonce": "Parmi les types de casques homologués disponibles, lequel offre la protection la plus complète en cas de choc ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le casque jet, ouvert au niveau du visage."
        },
        {
          "id": "b",
          "texte": "Le casque intégral, qui enveloppe entièrement la tête et le menton."
        },
        {
          "id": "c",
          "texte": "Le casque modulable, avec mentonnière relevable."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le casque intégral forme une coque unique et rigide qui protège aussi la mâchoire et le menton, zones très exposées lors d'une chute : c'est la référence en matière de protection. Le casque jet laisse le visage à découvert, et le casque modulable, malgré son confort, comporte une jointure au niveau de la mentonnière qui le rend structurellement moins protecteur qu'un intégral d'une seule pièce.",
      "difficulte": 1
    },
    {
      "id": "EQP-0049",
      "theme": "equipements",
      "enonce": "Concernant l'entretien et le bon ajustement d'un casque de moto, quelles affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Même s'il semble en parfait état, il est recommandé de le remplacer après environ 5 ans d'utilisation."
        },
        {
          "id": "b",
          "texte": "Un casque correctement ajusté ne doit pas bouger sur la tête lorsqu'on la secoue."
        },
        {
          "id": "c",
          "texte": "Un casque doit être serré au maximum pour être réellement efficace."
        },
        {
          "id": "d",
          "texte": "Un entretien régulier suffit à rendre sa durée de vie illimitée."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Les matériaux d'un casque (mousse interne, coque, sangles) se dégradent avec le temps même sans choc visible, d'où un remplacement conseillé au bout d'environ 5 ans ; un bon ajustement se vérifie en secouant la tête, le casque ne devant pas bouger. Un serrage excessif n'est pas le critère de sécurité recherché, et un entretien soigné, s'il prolonge la durée de vie, ne la rend jamais illimitée.",
      "difficulte": 2
    },
    {
      "id": "EQP-0050",
      "theme": "equipements",
      "enonce": "Pourquoi la réglementation impose-t-elle le port de gants homologués CE aux motards, et depuis quand cette règle s'applique-t-elle en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que les mains sont particulièrement exposées en cas de chute, et cette obligation existe depuis le 20 novembre 2016"
        },
        {
          "id": "b",
          "texte": "Parce que cela améliore l'adhérence sur les poignées, et cette obligation existe depuis la création du permis moto"
        },
        {
          "id": "c",
          "texte": "Uniquement pour une question d'image et d'esthétique de la tenue du motard"
        },
        {
          "id": "d",
          "texte": "Parce que les mains sont parmi les premières parties du corps à heurter le sol en cas de chute, et la règle vise aussi bien le conducteur que le passager"
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "Le port de gants CE est obligatoire depuis le 20 novembre 2016 pour le conducteur et le passager d'une moto, d'un tricycle ou d'un quadricycle à moteur, car les mains touchent souvent le sol en premier lors d'une chute. L'argument de l'adhérence sur les poignées est une justification erronée : le but est la protection, pas la tenue de route. Il ne s'agit pas non plus d'une simple question d'apparence.",
      "difficulte": 2
    },
    {
      "id": "EQP-0051",
      "theme": "equipements",
      "enonce": "Pour être considérés conformes et réellement protecteurs, des gants de moto doivent notamment répondre à quels critères ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Porter le marquage CE attestant leur conformité aux exigences de sécurité"
        },
        {
          "id": "b",
          "texte": "Offrir une résistance suffisante à l'abrasion en cas de glissade sur le bitume"
        },
        {
          "id": "c",
          "texte": "Être assortis à la couleur de la moto ou de la combinaison du pilote"
        },
        {
          "id": "d",
          "texte": "Garantir une bonne préhension des commandes et une réelle liberté de mouvement"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "d"
      ],
      "explication": "Des gants homologués doivent afficher le marquage CE, résister à l'abrasion pour limiter les lésions en cas de chute, et rester ergonomiques afin de ne pas gêner la manipulation des commandes. La couleur ou l'assortiment esthétique n'entre en revanche dans aucun critère de sécurité ou d'homologation.",
      "difficulte": 2
    },
    {
      "id": "EQP-0052",
      "theme": "equipements",
      "enonce": "Un conducteur et son passager roulent tous les deux sans gants homologués. Quelle affirmation décrit correctement les sanctions encourues ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le conducteur risque une amende de 68 € et un retrait d'un point sur son permis ; le passager fautif n'encourt qu'une amende, sans retrait de points"
        },
        {
          "id": "b",
          "texte": "Seul le conducteur peut être verbalisé, l'obligation ne concernant jamais le passager"
        },
        {
          "id": "c",
          "texte": "Les deux risquent une amende de 135 € et un retrait de trois points chacun"
        },
        {
          "id": "d",
          "texte": "Aucune amende n'est prévue, seul un retrait de points est possible pour le conducteur"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le non-port de gants homologués est une contravention de 3e classe : le conducteur écope d'une amende de 68 € et d'un retrait d'un point, tandis que le passager en infraction est aussi verbalisé mais ne perd aucun point (les points sont attachés au permis de conduite, pas à celui du passager). Les montants de 135 € et le retrait de trois points correspondent à d'autres infractions, pas à celle-ci.",
      "difficulte": 3
    },
    {
      "id": "EQP-0053",
      "theme": "equipements",
      "enonce": "En quoi le fait de choisir des gants adaptés à la saison (été ou hiver) contribue-t-il concrètement à la sécurité du motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des gants d'hiver bien choisis apportent une isolation thermique qui aide à garder une bonne maîtrise des commandes par temps froid"
        },
        {
          "id": "b",
          "texte": "Un modèle inadapté à la saison peut nuire au confort et donc à la dextérité nécessaire pour bien manier les commandes"
        },
        {
          "id": "c",
          "texte": "La saison n'a aucune incidence, seul le marquage CE doit être vérifié avant l'achat"
        },
        {
          "id": "d",
          "texte": "Les gants d'été sont interdits par la réglementation en dehors de la période estivale"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Des gants pensés pour la saison (isolants en hiver, plus légers en été) préservent le confort et donc la précision des gestes sur les commandes, notamment par grand froid où les doigts perdent en sensibilité. Le marquage CE est nécessaire mais ne suffit pas à garantir un usage adapté aux conditions ; et rien n'interdit réglementairement un modèle été ou hiver selon la période.",
      "difficulte": 2
    },
    {
      "id": "EQP-0054",
      "theme": "equipements",
      "enonce": "Que doit faire un motard pour s'assurer que ses gants continuent à bien le protéger au fil du temps ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Contrôler régulièrement leur état d'usure et les remplacer dès qu'ils sont abîmés"
        },
        {
          "id": "b",
          "texte": "Se fier uniquement à la date d'achat pour décider quand les changer"
        },
        {
          "id": "c",
          "texte": "Ne les changer qu'en cas de perte, jamais pour une usure visible"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La protection réelle des gants dépend de leur état : il faut vérifier régulièrement leur usure et les remplacer dès qu'ils se détériorent, même récents. La date d'achat seule ne renseigne pas sur l'état du matériau, et attendre uniquement la perte des gants pour les renouveler laisse circuler avec un équipement déjà affaibli.",
      "difficulte": 1
    },
    {
      "id": "EQP-0055",
      "theme": "equipements",
      "enonce": "Un blouson moto homologué peut être conçu dans quels types de matériaux pour assurer une bonne résistance à l'abrasion ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le cuir"
        },
        {
          "id": "b",
          "texte": "Le coton ou la laine classique"
        },
        {
          "id": "c",
          "texte": "Un textile technique renforcé (type Kevlar, Cordura)"
        },
        {
          "id": "d",
          "texte": "Un plastique souple non technique"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Le cuir et les textiles techniques renforcés (Kevlar, Cordura) sont les deux familles de matériaux utilisées pour les blousons de protection car ils résistent bien à l'abrasion lors d'une glissade. Le coton, la laine ou un plastique souple non technique ne possèdent aucune propriété de résistance à la déchirure ou à l'abrasion et n'offrent donc pas de protection en cas de chute.",
      "difficulte": 2
    },
    {
      "id": "EQP-0056",
      "theme": "equipements",
      "enonce": "Pourquoi est-il recommandé de rouler avec un pantalon moto renforcé plutôt qu'un jean ou un pantalon ordinaire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il permet surtout de garder les jambes au chaud en hiver"
        },
        {
          "id": "b",
          "texte": "Il limite les blessures (abrasions, coupures) en cas de chute ou de glissade"
        },
        {
          "id": "c",
          "texte": "Il est exigé uniquement pour un usage sur circuit"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le rôle premier d'un pantalon renforcé (cuir ou textile technique avec protections aux genoux et aux hanches) est de réduire le risque de blessures graves lors d'une chute ou d'une glissade sur la chaussée. Le maintien de la chaleur n'est qu'un effet secondaire, pas la fonction protectrice recherchée, et cette recommandation vaut pour tout usage routier, pas seulement en compétition.",
      "difficulte": 1
    },
    {
      "id": "EQP-0057",
      "theme": "equipements",
      "enonce": "Quel est le principal atout du cuir par rapport à un textile technique dans un équipement de protection moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une meilleure ventilation par temps chaud"
        },
        {
          "id": "b",
          "texte": "Une grande résistance à l'abrasion et une bonne durabilité"
        },
        {
          "id": "c",
          "texte": "Un poids nettement inférieur à celui des textiles"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le cuir est apprécié pour sa robustesse et sa forte résistance à l'abrasion en cas de glissade sur le bitume. En revanche, il est généralement plus lourd et moins respirant que les textiles techniques comme le Kevlar ou le Cordura, qui sont justement recherchés pour leur légèreté et leur ventilation.",
      "difficulte": 2
    },
    {
      "id": "EQP-0058",
      "theme": "equipements",
      "enonce": "Sur un blouson de moto conçu pour la protection, quelles zones du corps doivent comporter des protections renforcées ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les coudes"
        },
        {
          "id": "b",
          "texte": "Les épaules"
        },
        {
          "id": "c",
          "texte": "Le dos"
        },
        {
          "id": "d",
          "texte": "Les poignets"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Un blouson de protection doit intégrer des renforts aux coudes, aux épaules et au dos, zones qui absorbent les chocs lors d'une chute. Les poignets ne sont pas une zone protégée par le blouson : c'est le rôle des gants, qui couvrent cette partie du corps.",
      "difficulte": 3
    },
    {
      "id": "EQP-0059",
      "theme": "equipements",
      "enonce": "Les fibres synthétiques comme le Kevlar ou le Cordura, présentes dans certains blousons et pantalons moto, sont surtout recherchées pour quelle qualité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un bon compromis entre légèreté, résistance à l'abrasion et ventilation"
        },
        {
          "id": "b",
          "texte": "Leur capacité à remplacer totalement le cuir dans toutes les situations de conduite"
        },
        {
          "id": "c",
          "texte": "Leur coût toujours inférieur à celui d'un vêtement en coton"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le Kevlar et le Cordura sont des textiles techniques choisis pour leur légèreté, leur résistance à l'abrasion et une meilleure ventilation que le cuir. Ils ne remplacent pas systématiquement le cuir : le choix dépend du style de conduite et des conditions, et leur prix n'est pas nécessairement inférieur à celui d'un vêtement en coton, contrairement à une idée reçue.",
      "difficulte": 2
    },
    {
      "id": "EQP-0060",
      "theme": "equipements",
      "enonce": "En tant que motard, vous vous équipez d'un airbag de protection. Sous quelles formes ce dispositif existe-t-il concrètement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une veste équipée d'un airbag, portée comme un vêtement"
        },
        {
          "id": "b",
          "texte": "Un airbag embarqué sur la moto, généralement au niveau du réservoir"
        },
        {
          "id": "c",
          "texte": "Un airbag intégré dans la coque du casque"
        },
        {
          "id": "d",
          "texte": "Un airbag logé dans les repose-pieds"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Deux familles de dispositifs existent réellement : la veste à airbag, portée par le motard, et l'airbag embarqué sur la moto, le plus souvent placé sur le réservoir pour amortir un choc frontal. Il n'existe pas d'airbag homologué intégré au casque ni aux repose-pieds sur les motos grand public : ce sont des propositions inventées pour tester la connaissance précise des deux systèmes réels.",
      "difficulte": 1
    },
    {
      "id": "EQP-0061",
      "theme": "equipements",
      "enonce": "Lors d'une chute, une veste à airbag se gonfle en une fraction de seconde. Quelles zones du corps du motard vise-t-elle à protéger en priorité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le thorax"
        },
        {
          "id": "b",
          "texte": "Le cou"
        },
        {
          "id": "c",
          "texte": "Les vertèbres (la colonne vertébrale)"
        },
        {
          "id": "d",
          "texte": "Les mains et les pieds"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "La veste à airbag est conçue pour stabiliser et amortir le buste, la nuque et la colonne vertébrale, trois zones particulièrement exposées lors d'une chute ou d'un choc à moto. Les mains et les pieds restent vulnérables mais ne sont pas la cible de ce dispositif, qui se concentre sur le haut du corps et l'axe vertébral.",
      "difficulte": 2
    },
    {
      "id": "EQP-0062",
      "theme": "equipements",
      "enonce": "Qu'est-ce qui déclenche automatiquement un airbag moto, qu'il soit intégré à une veste ou embarqué sur la machine ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une commande manuelle actionnée sur le guidon"
        },
        {
          "id": "b",
          "texte": "Un ensemble de capteurs qui détecte une collision ou une perte de contrôle"
        },
        {
          "id": "c",
          "texte": "Le franchissement d'un seuil de vitesse fixé par le fabricant"
        },
        {
          "id": "d",
          "texte": "Un signal transmis par le système de freinage ABS"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le déclenchement repose sur des capteurs qui surveillent en continu les mouvements et les forces subies par la moto ou par le motard, afin d'identifier en quelques millisecondes un choc ou une perte de contrôle. Il ne s'agit ni d'une action volontaire du pilote, ni d'un simple seuil de vitesse, ni d'un lien avec l'ABS, qui gère le freinage et non le déclenchement de l'airbag.",
      "difficulte": 2
    },
    {
      "id": "EQP-0063",
      "theme": "equipements",
      "enonce": "Concernant le port d'un airbag moto en France, laquelle de ces affirmations correspond à la réalité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il est légalement obligatoire pour circuler, comme le casque homologué"
        },
        {
          "id": "b",
          "texte": "Certains contrats d'assurance le recommandent fortement, voire l'exigent"
        },
        {
          "id": "c",
          "texte": "Son usage contribue à réduire la gravité des blessures et le risque de décès"
        },
        {
          "id": "d",
          "texte": "Il dispense le conducteur de porter des gants homologués"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "À la différence du casque homologué et des gants certifiés CE, qui sont obligatoires, l'airbag moto n'est pas imposé par la loi en France : il reste une recommandation, que certaines assurances encouragent voire conditionnent dans leurs garanties. Son intérêt en matière de sécurité est réel puisqu'il limite la gravité des traumatismes, mais il ne remplace en aucun cas l'obligation de porter des gants homologués.",
      "difficulte": 2
    },
    {
      "id": "EQP-0064",
      "theme": "equipements",
      "enonce": "Une fois les capteurs déclenchés lors d'un choc, en combien de temps une veste à airbag atteint-elle son gonflage complet ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "En quelques millisecondes"
        },
        {
          "id": "b",
          "texte": "En une à deux secondes"
        },
        {
          "id": "c",
          "texte": "En une dizaine de secondes"
        },
        {
          "id": "d",
          "texte": "Seulement une fois la moto immobilisée"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La vitesse de gonflage se compte en millisecondes, car l'airbag doit être pleinement déployé avant même que le motard n'entre en contact avec le sol ou un obstacle. Un délai d'une ou plusieurs secondes serait bien trop long face à un choc qui se produit lui-même en une fraction de seconde, et le dispositif n'attend évidemment pas l'arrêt de la moto pour agir.",
      "difficulte": 1
    },
    {
      "id": "EQP-0065",
      "theme": "equipements",
      "enonce": "Quel est le véritable intérêt du gilet de haute visibilité que tout motard doit avoir à disposition ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Éviter une sanction lors d'un contrôle routier"
        },
        {
          "id": "b",
          "texte": "Améliorer sa visibilité auprès des autres usagers et réduire le risque de collision"
        },
        {
          "id": "c",
          "texte": "Renforcer la résistance du blouson en cas de chute"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le gilet réfléchissant a pour but premier de rendre le motard visible des autres usagers, notamment quand la luminosité est faible, ce qui diminue le risque de collision. Ce n'est pas un équipement de protection contre les chocs, et sa finalité n'est pas d'échapper à une amende même si son absence peut être sanctionnée.",
      "difficulte": 1
    },
    {
      "id": "EQP-0066",
      "theme": "equipements",
      "enonce": "Un motard est immobilisé sur le bord d'une route après une panne et doit descendre de sa moto. Dans quel cas le Code de la route impose-t-il précisément le port du gilet réfléchissant ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Uniquement si c'est la nuit"
        },
        {
          "id": "b",
          "texte": "En cas de panne ou d'accident nécessitant de sortir du véhicule sur la chaussée"
        },
        {
          "id": "c",
          "texte": "Seulement s'il pleut"
        },
        {
          "id": "d",
          "texte": "Uniquement sur autoroute"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'obligation s'applique lorsque le motard doit quitter son véhicule arrêté sur la chaussée ou l'accotement à la suite d'une panne ou d'un accident, quelle que soit l'heure, la météo ou le type de route. La nuit et la pluie rendent le gilet d'autant plus utile, mais ce n'est pas ce qui déclenche légalement l'obligation.",
      "difficulte": 2
    },
    {
      "id": "EQP-0067",
      "theme": "equipements",
      "enonce": "Concrètement, à quoi servent les bandes rétro-réfléchissantes présentes sur un gilet de sécurité moto ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Elles renvoient la lumière des phares vers sa source, ce qui rend le motard visible dans l'obscurité"
        },
        {
          "id": "b",
          "texte": "Elles n'ont qu'une fonction esthétique, sans rôle sur la sécurité"
        },
        {
          "id": "c",
          "texte": "Elles restent perceptibles à bonne distance, laissant plus de temps aux autres conducteurs pour réagir"
        },
        {
          "id": "d",
          "texte": "Elles rendent le gilet totalement imperméable à la pluie"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Les bandes rétro-réfléchissantes réfléchissent la lumière des phares vers leur source, rendant le motard visible de nuit, et doivent être suffisamment larges pour être repérées à distance, ce qui augmente le temps de réaction des autres usagers. Elles ne remplissent aucune fonction imperméabilisante et leur rôle est loin d'être purement décoratif.",
      "difficulte": 2
    },
    {
      "id": "EQP-0068",
      "theme": "equipements",
      "enonce": "Pour être conforme à la réglementation, un gilet de sécurité moto doit présenter quelle(s) couleur(s) de fond ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Jaune fluorescent"
        },
        {
          "id": "b",
          "texte": "Vert foncé"
        },
        {
          "id": "c",
          "texte": "Orange fluorescent"
        },
        {
          "id": "d",
          "texte": "Bleu marine"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La norme applicable impose des couleurs de fond fluorescentes, jaune ou orange, associées à des bandes rétro-réfléchissantes, pour garantir un contraste maximal de jour comme de nuit. Le vert foncé et le bleu marine sont des teintes sombres qui n'apportent aucune haute visibilité et ne répondent pas à cette exigence.",
      "difficulte": 2
    },
    {
      "id": "EQP-0069",
      "theme": "equipements",
      "enonce": "Un motard porte un simple gilet jaune fluo acheté sans référence à une norme. Cela suffit-il à remplir l'obligation prévue par le Code de la route ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Oui, la couleur jaune suffit à elle seule"
        },
        {
          "id": "b",
          "texte": "Non, seul un gilet homologué conforme à la norme en vigueur est reconnu"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le Code de la route exige un gilet homologué, c'est-à-dire conforme à une norme précise portant sur la couleur fluorescente et les bandes rétro-réfléchissantes. Un vêtement jaune sans certification, même s'il y ressemble, ne remplit pas cette obligation légale.",
      "difficulte": 1
    },
    {
      "id": "EQP-0070",
      "theme": "equipements",
      "enonce": "En cas de chute ou de choc contre un obstacle, quel est le rôle principal d'une chaussure de moto adaptée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Améliorer l'aérodynamisme du pilote"
        },
        {
          "id": "b",
          "texte": "Protéger les pieds et les chevilles contre les chocs et les projections de débris"
        },
        {
          "id": "c",
          "texte": "Compléter esthétiquement la tenue de route"
        },
        {
          "id": "d",
          "texte": "Rendre le port du casque plus confortable"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les pieds et les chevilles sont très exposés lors d'une chute, d'un choc ou d'une projection de gravillons : une chaussure adaptée limite les blessures à ces endroits. Elle n'a aucune fonction aérodynamique, n'est pas qu'un accessoire esthétique et n'a aucun lien avec le port du casque.",
      "difficulte": 1
    },
    {
      "id": "EQP-0071",
      "theme": "equipements",
      "enonce": "Que dit la réglementation française sur l'obligation de porter des chaussures adaptées à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le port de chaussures montantes est imposé par le code de la route"
        },
        {
          "id": "b",
          "texte": "Aucun équipement n'est obligatoire à moto"
        },
        {
          "id": "c",
          "texte": "Seuls le casque homologué et les gants certifiés CE sont légalement obligatoires ; des chaussures adaptées sont fortement recommandées"
        },
        {
          "id": "d",
          "texte": "Les chaussures doivent être homologuées CE, exactement comme les gants"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "En France, seuls le casque homologué et, depuis 2016, des gants certifiés CE sont des obligations légales pour circuler à moto. Les chaussures adaptées ne sont pas exigées par la loi mais restent vivement conseillées vu l'exposition des pieds et des chevilles en cas de chute ; il est donc faux de dire qu'aucun équipement n'est obligatoire ou que les chaussures suivent une homologation CE comme les gants.",
      "difficulte": 2
    },
    {
      "id": "EQP-0072",
      "theme": "equipements",
      "enonce": "Quelle qualité doit avant tout présenter la semelle d'une chaussure de moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une couleur vive pour être plus visible"
        },
        {
          "id": "b",
          "texte": "Une épaisseur minimale fixée par la réglementation"
        },
        {
          "id": "c",
          "texte": "Une grande souplesse, utile uniquement pour marcher à pied"
        },
        {
          "id": "d",
          "texte": "Une bonne adhérence sur différents types de revêtements"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "La semelle doit surtout offrir une bonne accroche pour éviter de glisser à l'arrêt, sur chaussée mouillée ou lors de la mise pied à terre. Il n'existe pas d'épaisseur minimale imposée par la réglementation, la couleur n'a aucun effet sur la sécurité, et la souplesse seule ne garantit pas l'adhérence recherchée.",
      "difficulte": 1
    },
    {
      "id": "EQP-0073",
      "theme": "equipements",
      "enonce": "Parmi ces affirmations sur les différents types de chaussures moto, lesquelles correspondent à un usage adapté ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les bottes montantes jusqu'au genou offrent la protection la plus complète"
        },
        {
          "id": "b",
          "texte": "Les bottines, plus légères, conviennent surtout à un usage urbain ou par temps chaud"
        },
        {
          "id": "c",
          "texte": "Les chaussures de touring, étanches, sont conçues pour les longs trajets"
        },
        {
          "id": "d",
          "texte": "Les bottines sont le choix idéal pour un long trajet sur autoroute"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Chaque type de chaussure répond à un usage précis : les bottes couvrent la jambe jusqu'au genou pour la meilleure protection, les bottines légères sont pensées pour la ville et les temps chauds, et les chaussures de touring étanches sont dédiées aux longs trajets. C'est justement pour cette raison que les bottines, moins protectrices et moins adaptées à un usage prolongé, ne sont pas recommandées pour un long trajet autoroutier.",
      "difficulte": 2
    },
    {
      "id": "EQP-0074",
      "theme": "equipements",
      "enonce": "Quelles zones du pied doivent comporter des renforts sur une chaussure de sécurité moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les orteils, les talons et les chevilles"
        },
        {
          "id": "b",
          "texte": "Uniquement la semelle"
        },
        {
          "id": "c",
          "texte": "Le cuir sur toute la tige de la chaussure"
        },
        {
          "id": "d",
          "texte": "Les lacets et les œillets"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les orteils, les talons et les chevilles sont les zones les plus exposées aux chocs et doivent donc être renforcées sur une chaussure de sécurité moto. La semelle, le cuir de la tige ou les lacets ne constituent pas, à eux seuls, les renforts de protection recherchés.",
      "difficulte": 1
    },
    {
      "id": "EQP-0075",
      "theme": "equipements",
      "enonce": "Comment entretenir correctement des chaussures de sécurité moto pour préserver leur efficacité dans la durée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les passer systématiquement en machine à laver"
        },
        {
          "id": "b",
          "texte": "Les nettoyer régulièrement pour enlever débris et saletés"
        },
        {
          "id": "c",
          "texte": "Appliquer un produit imperméabilisant pour conserver leur étanchéité"
        },
        {
          "id": "d",
          "texte": "Ne jamais vérifier l'état des renforts, car ils ne s'usent pas"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Un nettoyage régulier pour retirer débris et saletés, associé à l'application d'un produit imperméabilisant, permet de conserver l'efficacité des chaussures. Le lave-linge est à proscrire car il peut abîmer les renforts et les traitements d'étanchéité, et les renforts s'usent bel et bien avec le temps : il faut contrôler leur état et remplacer les chaussures si nécessaire.",
      "difficulte": 2
    },
    {
      "id": "EQP-0076",
      "theme": "equipements",
      "enonce": "Concernant le gilet airbag pour motard, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il se déclenche automatiquement lors d'une chute pour protéger le torse."
        },
        {
          "id": "b",
          "texte": "Il protège les organes vitaux situés dans la région thoracique."
        },
        {
          "id": "c",
          "texte": "Il isole efficacement contre le froid et la pluie."
        },
        {
          "id": "d",
          "texte": "Il dispense le motard de porter un casque homologué."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le gilet airbag se gonfle automatiquement dès la détection d'une chute, ce qui protège le torse et les organes vitaux. Il n'a aucune fonction d'isolation thermique ou imperméable, et il ne remplace en rien le casque homologué, qui reste un équipement obligatoire distinct.",
      "difficulte": 1
    },
    {
      "id": "EQP-0077",
      "theme": "equipements",
      "enonce": "Vous envisagez d'ajouter une protection dorsale à votre équipement. Que faut-il savoir à ce sujet ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle protège la colonne vertébrale en cas de choc."
        },
        {
          "id": "b",
          "texte": "Pour offrir une protection fiable, elle doit répondre à la norme EN 1621-2:2014."
        },
        {
          "id": "c",
          "texte": "Elle ne peut être portée que si elle est intégrée au blouson."
        },
        {
          "id": "d",
          "texte": "Son port est imposé par le code de la route."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "La dorsale protège la colonne vertébrale en cas d'impact et doit respecter la norme EN 1621-2:2014 pour garantir un niveau de protection reconnu. Elle peut être intégrée à un blouson ou portée séparément, et reste un équipement facultatif : seuls le casque et les gants homologués sont obligatoires en moto.",
      "difficulte": 2
    },
    {
      "id": "EQP-0078",
      "theme": "equipements",
      "enonce": "Sur un trajet quotidien ou une route jugée à risque, pourquoi équiper ses genoux de protections dédiées ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour limiter les risques de fractures et de contusions en cas de chute."
        },
        {
          "id": "b",
          "texte": "Pour réduire la consommation de carburant de la moto."
        },
        {
          "id": "c",
          "texte": "Pour rendre cet équipement obligatoire aux yeux du code de la route."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les genouillères absorbent l'impact au niveau des articulations et réduisent le risque de fractures ou de contusions graves lors d'une chute, notamment sur les trajets répétés ou les routes accidentées. Elles n'ont aucun effet sur la consommation du véhicule et restent un équipement facultatif, non imposé par la réglementation.",
      "difficulte": 1
    },
    {
      "id": "EQP-0079",
      "theme": "equipements",
      "enonce": "Quel est le rôle des protège-coudes dans l'équipement du motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Protéger les coudes en cas de chute."
        },
        {
          "id": "b",
          "texte": "Servir uniquement d'accessoire esthétique sous le blouson."
        },
        {
          "id": "c",
          "texte": "Garantir à eux seuls une posture de conduite correcte."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Comme les genouillères, les protège-coudes offrent une protection supplémentaire à une articulation exposée en cas de chute. Ils n'ont pas de fonction esthétique particulière ni d'incidence sur la posture de conduite, qui dépend avant tout du réglage de la moto et de la position du pilote.",
      "difficulte": 1
    },
    {
      "id": "EQP-0080",
      "theme": "equipements",
      "enonce": "Parmi les équipements du motard, comment distinguer ce qui est légalement obligatoire de ce qui reste facultatif ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Seuls le casque homologué et les gants homologués sont strictement imposés par la réglementation."
        },
        {
          "id": "b",
          "texte": "Le gilet airbag, la dorsale, les genouillères et les protège-coudes restent des équipements facultatifs qui renforcent la sécurité."
        },
        {
          "id": "c",
          "texte": "Une fois casque et gants portés, aucune protection supplémentaire n'apporte de bénéfice réel."
        },
        {
          "id": "d",
          "texte": "La veste et les bottes sont, comme le casque, imposées par le code de la route."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "En France, seuls le casque homologué et les gants homologués sont légalement obligatoires à moto ; la veste, les bottes, le gilet airbag, la dorsale, les genouillères et les protège-coudes sont vivement recommandés mais restent facultatifs. Anticiper les risques en ajoutant ces protections augmente réellement les chances de sortir indemne d'un accident, contrairement à l'idée qu'elles seraient inutiles une fois le minimum légal respecté.",
      "difficulte": 3
    },

    /* ---------- DOCUMENTS ET INFRACTIONS — ebook (9) ---------- */
    {
      "id": "DOC-0023",
      "theme": "documents",
      "enonce": "Vous venez d'avoir 16 ans et vous obtenez votre permis A1. Quelle moto pouvez-vous légalement conduire avec ce permis ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une motocyclette légère de 125 cm³ maximum, dont la puissance ne dépasse pas 11 kW (environ 15 chevaux)"
        },
        {
          "id": "b",
          "texte": "Une moto de 35 kW, comme celles autorisées avec le permis A2"
        },
        {
          "id": "c",
          "texte": "N'importe quelle cylindrée, à condition de rester sous 45 km/h"
        },
        {
          "id": "d",
          "texte": "Une moto de plus de 47 chevaux, à condition d'être accompagné d'un motard expérimenté"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le permis A1 autorise la conduite de motocyclettes légères limitées à 125 cm³ et 11 kW, soit environ 15 chevaux. La limite de 35 kW correspond au permis A2, pas au A1 ; la limitation à 45 km/h concerne les cyclomoteurs relevant du permis AM ; et aucune dérogation d'accompagnement ne permet de dépasser la puissance autorisée par sa catégorie de permis.",
      "difficulte": 1
    },
    {
      "id": "DOC-0024",
      "theme": "documents",
      "enonce": "Concernant l'âge minimum exigé pour se présenter aux différents permis moto, laquelle ou lesquelles de ces affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le permis AM (cyclomoteur ou scooter 50 cm³) est accessible dès 14 ans"
        },
        {
          "id": "b",
          "texte": "Le permis A1 (125 cm³) peut être obtenu dès 16 ans"
        },
        {
          "id": "c",
          "texte": "Le permis A2 nécessite d'avoir au moins 18 ans"
        },
        {
          "id": "d",
          "texte": "Le permis A, sans limitation de puissance, peut être obtenu dès 18 ans sans être passé par le A2"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Chaque catégorie a son âge plancher : 14 ans pour l'AM, 16 ans pour l'A1 et 18 ans pour l'A2. Le permis A sans limitation de puissance suppose en revanche soit deux ans de permis A2 complétés par une formation de 7 heures, soit un accès direct réservé aux candidats d'au moins 24 ans : il n'existe donc aucune voie pour l'obtenir dès 18 ans.",
      "difficulte": 2
    },
    {
      "id": "DOC-0025",
      "theme": "documents",
      "enonce": "Un motard titulaire du permis A2 depuis quelques mois vous demande la puissance maximale autorisée pour sa moto. Que lui répondez-vous ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "15 chevaux maximum"
        },
        {
          "id": "b",
          "texte": "Environ 47,5 chevaux (35 kW) maximum"
        },
        {
          "id": "c",
          "texte": "70 chevaux maximum"
        },
        {
          "id": "d",
          "texte": "Aucune limite, le A2 permet déjà de conduire toutes les motos"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le permis A2 plafonne la puissance des motos à 35 kW, soit environ 47,5 chevaux. Les 15 chevaux correspondent à la limite du permis A1, tandis que l'absence de toute limite caractérise au contraire le permis A illimité : le A2 reste bien un permis intermédiaire et encadré.",
      "difficulte": 1
    },
    {
      "id": "DOC-0026",
      "theme": "documents",
      "enonce": "Après deux ans de permis A2, quelle démarche complémentaire permet d'accéder au permis A, sans limitation de puissance ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Suivre une formation complémentaire de 7 heures"
        },
        {
          "id": "b",
          "texte": "Suivre une formation complémentaire de 14 heures"
        },
        {
          "id": "c",
          "texte": "Aucune formation n'est nécessaire, le passage est automatique"
        },
        {
          "id": "d",
          "texte": "Repasser uniquement l'épreuve du code de la route"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Après deux années de détention du permis A2, une formation complémentaire de 7 heures suffit pour accéder au permis A sans restriction de puissance, sans repasser d'examen pratique ou théorique. Le passage n'est donc ni automatique, ni limité à une simple révision du code, et ne demande pas non plus le double de ce temps de formation.",
      "difficulte": 1
    },
    {
      "id": "DOC-0027",
      "theme": "documents",
      "enonce": "Sur la route, quels équipements le code de la route impose-t-il réellement à tout motard, sous peine de sanction en cas d'absence ?",
      "media": "images/photo-equipement.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le casque homologué"
        },
        {
          "id": "b",
          "texte": "Des gants certifiés (marquage CE)"
        },
        {
          "id": "c",
          "texte": "Un blouson renforcé"
        },
        {
          "id": "d",
          "texte": "Des chaussures montantes spécifiques"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Seuls le casque homologué et les gants certifiés CE sont rendus obligatoires par le code de la route, sous peine d'amende, pour tout conducteur de deux-roues motorisé. Le blouson, le pantalon renforcé et les chaussures montantes sont vivement recommandés pour la sécurité du motard, mais leur absence n'est pas une infraction sanctionnée au même titre que celle du casque ou des gants.",
      "difficulte": 3
    },
    {
      "id": "DOC-0028",
      "theme": "documents",
      "enonce": "Sur votre moto, vous n'avez souscrit que le contrat d'assurance imposé par la loi française. Que pouvez-vous affirmer à son sujet ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "C'est le seul contrat que la loi vous oblige à avoir pour circuler"
        },
        {
          "id": "b",
          "texte": "Il prend en charge la réparation de votre propre moto même si vous êtes responsable de l'accident"
        },
        {
          "id": "c",
          "texte": "Il couvre les dommages corporels et matériels que vous causez à autrui"
        },
        {
          "id": "d",
          "texte": "Il couvre vos propres blessures en cas d'accident dont vous êtes responsable"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "L'assurance dite \"au tiers\" (responsabilité civile) est le minimum légal obligatoire pour tout véhicule à moteur : elle ne couvre que les dommages causés à autrui, corporels comme matériels. En revanche, elle ne prend jamais en charge votre propre moto ni vos propres blessures quand vous êtes fautif ; pour cela, il faut une assurance tous risques ou une garantie personnelle du conducteur.",
      "difficulte": 2
    },
    {
      "id": "DOC-0029",
      "theme": "documents",
      "enonce": "Vous souhaitez que les réparations de votre moto soient prises en charge même si un accident survient de votre propre faute. Quelle formule facultative devez-vous choisir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Assurance au tiers"
        },
        {
          "id": "b",
          "texte": "Assurance intermédiaire"
        },
        {
          "id": "c",
          "texte": "Assurance tous risques"
        },
        {
          "id": "d",
          "texte": "Garantie assistance"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Seule l'assurance tous risques couvre l'ensemble des dommages subis par votre propre véhicule, y compris lorsque vous êtes responsable de l'accident : c'est la formule offrant la protection la plus complète. L'assurance intermédiaire va au-delà du tiers (vol, incendie, bris de glace...) mais ne couvre pas les dégâts dus à votre propre responsabilité, tandis que l'assistance ne concerne que le dépannage.",
      "difficulte": 1
    },
    {
      "id": "DOC-0030",
      "theme": "documents",
      "enonce": "Votre moto tombe en panne en pleine route. Quelle garantie facultative permet de faire intervenir un dépannage ou un remorquage ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La garantie personnelle du conducteur"
        },
        {
          "id": "b",
          "texte": "L'assurance au tiers"
        },
        {
          "id": "c",
          "texte": "La garantie assistance"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La garantie assistance a précisément pour objet de fournir une aide en cas de panne ou d'incident, comme le dépannage sur place ou le remorquage. La garantie personnelle du conducteur indemnise les blessures du motard, et l'assurance au tiers ne couvre que les dommages causés à autrui : aucune des deux ne concerne le dépannage routier.",
      "difficulte": 1
    },
    {
      "id": "DOC-0031",
      "theme": "documents",
      "enonce": "Au moment de choisir un contrat d'assurance pour votre moto, pourquoi devez-vous tenir compte du montant des primes proposées ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour ne pas vous exposer à des difficultés financières et choisir une formule adaptée à votre budget"
        },
        {
          "id": "b",
          "texte": "Parce que le montant des primes n'a aucune incidence sur votre décision"
        },
        {
          "id": "c",
          "texte": "Pour réduire le montant de votre impôt sur le revenu"
        },
        {
          "id": "d",
          "texte": "Parce que toutes les compagnies pratiquent exactement le même tarif"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Comparer les primes et les rapprocher de son budget évite de s'engager dans des dépenses excessives et permet de trouver une formule réellement adaptée à sa situation et à l'usage de sa moto. Les tarifs varient au contraire fortement d'un assureur à l'autre selon les garanties choisies, et n'ont aucun lien avec l'impôt sur le revenu.",
      "difficulte": 2
    },

    /* ---------- PREMIERS SECOURS — ebook (78) ---------- */
    {
      "id": "SEC-0020",
      "theme": "secours",
      "enonce": "Vous arrivez sur les lieux d'un accident de moto avant les secours. Quel doit être votre tout premier réflexe ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Aller directement porter assistance au motard"
        },
        {
          "id": "b",
          "texte": "Évaluer l'environnement pour repérer les dangers avant d'agir"
        },
        {
          "id": "c",
          "texte": "Composer immédiatement le numéro d'urgence"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Avant toute intervention, il faut vérifier que la zone est sûre (circulation, risque d'incendie, débris sur la chaussée) afin de ne pas se mettre soi-même en danger. Se précipiter vers le motard ou appeler les secours sans avoir évalué la situation expose le sauveteur et peut retarder une alerte précise et utile.",
      "difficulte": 1
    },
    {
      "id": "SEC-0021",
      "theme": "secours",
      "enonce": "Une fois assuré qu'il n'y a pas de danger immédiat pour vous, comment devez-vous signaler la présence de l'accident aux autres usagers de la route ?",
      "media": "images/gilet-jaune.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "En activant les feux de détresse du véhicule"
        },
        {
          "id": "b",
          "texte": "En klaxonnant de façon continue"
        },
        {
          "id": "c",
          "texte": "En plaçant un triangle de présignalisation"
        },
        {
          "id": "d",
          "texte": "En sifflant pour attirer l'attention"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Le triangle de présignalisation et les feux de détresse sont visibles de loin et de façon durable, ce qui permet d'alerter efficacement les véhicules qui approchent. Un coup de klaxon ou un sifflet ne portent pas assez loin et ne signalent pas correctement la présence d'un obstacle fixe sur la chaussée.",
      "difficulte": 2
    },
    {
      "id": "SEC-0022",
      "theme": "secours",
      "enonce": "Vous vous approchez d'un motard tombé au sol après une chute. Quelle est la toute première vérification à effectuer sur lui ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vérifier s'il respire normalement"
        },
        {
          "id": "b",
          "texte": "Contrôler son état de conscience en lui parlant et en lui demandant de serrer votre main"
        },
        {
          "id": "c",
          "texte": "Rechercher d'éventuelles plaies ouvertes"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "On vérifie d'abord l'état de conscience, en parlant à la victime et en lui demandant une réaction simple comme serrer la main. Ce n'est qu'ensuite que l'on contrôle la respiration, le pouls et les hémorragies, dans cet ordre.",
      "difficulte": 1
    },
    {
      "id": "SEC-0023",
      "theme": "secours",
      "enonce": "Lorsque vous alertez les secours après un accident de moto, quelles informations devez-vous absolument leur communiquer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le numéro de votre permis de conduire"
        },
        {
          "id": "b",
          "texte": "La localisation précise de l'accident"
        },
        {
          "id": "c",
          "texte": "Le nombre de victimes et leur état apparent"
        },
        {
          "id": "d",
          "texte": "La présence de dangers comme un incendie ou du carburant répandu"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Pour envoyer des moyens adaptés, les secours ont besoin de la localisation, du nombre et de l'état des victimes, ainsi que des dangers présents comme un feu ou du carburant renversé. Le numéro de permis de conduire n'apporte rien à la régulation médicale et ne doit jamais faire perdre de temps lors de l'appel.",
      "difficulte": 2
    },
    {
      "id": "SEC-0024",
      "theme": "secours",
      "enonce": "Un motard reste conscient mais se plaint d'une vive douleur après sa chute. Pourquoi ne faut-il pas le déplacer, sauf en cas de danger immédiat ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il est interdit par la loi de toucher un accidenté avant l'arrivée des secours"
        },
        {
          "id": "b",
          "texte": "Un déplacement inadapté peut aggraver une blessure, notamment au niveau de la colonne vertébrale"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Bouger une victime sans précaution peut transformer une fracture ou une lésion vertébrale non visible en blessure beaucoup plus grave. Aucune loi n'interdit de porter assistance à un blessé ; on évite simplement de le déplacer, sauf si un danger immédiat (feu, circulation) l'impose.",
      "difficulte": 1
    },
    {
      "id": "SEC-0025",
      "theme": "secours",
      "enonce": "Concernant le casque d'un motard accidenté et inconscient, quelle est la bonne conduite à tenir en attendant les secours ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le retirer systématiquement pour vérifier l'état du visage"
        },
        {
          "id": "b",
          "texte": "Le laisser en place, car un retrait maladroit peut aggraver une lésion de la colonne cervicale"
        },
        {
          "id": "c",
          "texte": "Le retirer dès que possible pour le confort de la victime"
        },
        {
          "id": "d",
          "texte": "Le retirer uniquement en cas de détresse respiratoire ou d'hémorragie grave"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le casque ne doit être retiré qu'en cas de nécessité absolue, comme une détresse respiratoire ou une hémorragie grave, car un geste mal maîtrisé peut aggraver une lésion cervicale déjà présente. Le retirer par habitude, par confort ou de façon systématique expose au contraire la victime à un risque supplémentaire.",
      "difficulte": 2
    },
    {
      "id": "SEC-0026",
      "theme": "secours",
      "enonce": "Quels numéros pouvez-vous composer en France pour alerter les secours après un accident de moto avec des blessés ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 17 (Police/Gendarmerie)"
        },
        {
          "id": "b",
          "texte": "Le 15 (SAMU)"
        },
        {
          "id": "c",
          "texte": "Le 112 (numéro d'urgence européen)"
        },
        {
          "id": "d",
          "texte": "Le 18 (Sapeurs-pompiers)"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Le 15, le 18 et le 112 permettent tous de déclencher une intervention médicale ou de secours pour des blessés ; le 112 fonctionne dans toute l'Union européenne, même avec un téléphone verrouillé ou hors réseau de son propre opérateur. Le 17 concerne d'abord les forces de l'ordre et n'est pas le réflexe prioritaire face à des victimes à secourir.",
      "difficulte": 2
    },
    {
      "id": "SEC-0027",
      "theme": "secours",
      "enonce": "Une victime d'accident est inconsciente mais respire normalement. Quelle position devez-vous lui donner en attendant les secours ?",
      "media": "images/pls.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "L'allonger à plat sur le dos"
        },
        {
          "id": "b",
          "texte": "L'asseoir contre un support"
        },
        {
          "id": "c",
          "texte": "La position latérale de sécurité (PLS)"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La position latérale de sécurité maintient les voies respiratoires dégagées et évite qu'une victime inconsciente ne s'étouffe en cas de vomissement. À plat sur le dos, elle risquerait une obstruction des voies aériennes ; assise, elle pourrait basculer et aggraver ses blessures.",
      "difficulte": 1
    },
    {
      "id": "SEC-0028",
      "theme": "secours",
      "enonce": "En circulant en France ou ailleurs en Europe, vous êtes témoin d'un accident et vous ne savez pas quel service prévenir en priorité. Quel numéro composez-vous ?",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 112"
        },
        {
          "id": "b",
          "texte": "Le 15"
        },
        {
          "id": "c",
          "texte": "Le 911"
        },
        {
          "id": "d",
          "texte": "Le 17"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le 112 est le numéro d'urgence unique européen, gratuit et joignable dans toute l'Union européenne : il faut le composer dès que vous n'êtes pas sûr du service compétent. Le 911 est un numéro nord-américain inutilisable en France, tandis que le 15 et le 17 sont des lignes françaises spécialisées à utiliser seulement quand vous savez déjà quel service appeler.",
      "difficulte": 1
    },
    {
      "id": "SEC-0029",
      "theme": "secours",
      "enonce": "Un motard s'effondre au bord de la route et présente des signes de détresse vitale. Quel numéro correspond, en France, au service médical d'urgence spécialisé pour ce type de situation ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 18"
        },
        {
          "id": "b",
          "texte": "Le 15"
        },
        {
          "id": "c",
          "texte": "Le 17"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le 15 est le numéro du SAMU, dédié aux urgences médicales et aux situations vitales ou médicalement complexes. Le 18 concerne d'abord les pompiers pour l'incendie ou le secours matériel, et le 17 la police-secours pour les questions de sécurité publique.",
      "difficulte": 1
    },
    {
      "id": "SEC-0030",
      "theme": "secours",
      "enonce": "Le moteur d'un véhicule accidenté commence à fumer et un départ de feu est possible. Quel numéro correspond au service généralement premier intervenant pour ce type de risque ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 15"
        },
        {
          "id": "b",
          "texte": "Le 114"
        },
        {
          "id": "c",
          "texte": "Le 18"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le 18 est le numéro des sapeurs-pompiers, souvent premiers sur les lieux en cas d'accident ou de risque d'incendie. Le 15 est réservé aux urgences médicales et le 114 est un numéro d'alerte destiné aux personnes sourdes ou malentendantes, pas au signalement d'un feu.",
      "difficulte": 1
    },
    {
      "id": "SEC-0031",
      "theme": "secours",
      "enonce": "Vous constatez qu'un objet volumineux obstrue dangereusement une voie de circulation, sans blessé mais avec un risque pour les autres usagers. Quel numéro sollicitez-vous pour une intervention de sécurité publique ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 15"
        },
        {
          "id": "b",
          "texte": "Le 18"
        },
        {
          "id": "c",
          "texte": "Le 112"
        },
        {
          "id": "d",
          "texte": "Le 17"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Le 17 correspond à la police-secours ou à la gendarmerie, compétentes pour les atteintes à la sécurité publique comme une voie bloquée ou une agression. Le 15 et le 18 sont davantage tournés vers les urgences médicales et les interventions des pompiers ; le 112 fonctionne aussi partout en France mais n'est pas le numéro spécifiquement dédié à ce type de signalement.",
      "difficulte": 1
    },
    {
      "id": "SEC-0032",
      "theme": "secours",
      "enonce": "Un motard sourd est témoin d'un accident et veut alerter les secours. Quel numéro et quel moyen de communication sont adaptés à sa situation ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 114, par SMS ou moyen équivalent"
        },
        {
          "id": "b",
          "texte": "Le 112, uniquement par appel vocal"
        },
        {
          "id": "c",
          "texte": "Le 15, par appel vocal standard"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le 114 est le numéro d'urgence dédié aux personnes sourdes ou malentendantes, accessible par SMS ou un moyen de communication équivalent. Le 112 et le 15 restent utilisables par les autres témoins, mais reposent sur un échange vocal inadapté à une personne qui ne peut ni parler au téléphone ni entendre l'opérateur.",
      "difficulte": 1
    },
    {
      "id": "SEC-0033",
      "theme": "secours",
      "enonce": "Parmi ces situations rencontrées après un accident de moto, lesquelles imposent d'alerter immédiatement les secours car elles représentent un danger grave et immédiat pour la vie ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La victime a une entorse bénigne et reste parfaitement consciente"
        },
        {
          "id": "b",
          "texte": "La victime est inconsciente et ne respire plus"
        },
        {
          "id": "c",
          "texte": "La victime présente une hémorragie abondante"
        },
        {
          "id": "d",
          "texte": "La victime a une détresse respiratoire marquée"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "L'arrêt cardiorespiratoire, l'hémorragie abondante et la détresse respiratoire marquée font partie des signes de danger grave et immédiat pour la vie qui imposent d'alerter sans délai, au même titre qu'une perte de conscience ou un traumatisme sévère. Une entorse bénigne chez une personne consciente et sans autre signe ne relève pas de l'urgence vitale, même si un avis médical reste utile ensuite.",
      "difficulte": 2
    },
    {
      "id": "SEC-0034",
      "theme": "secours",
      "enonce": "Vous êtes témoin d'un accident de la route en tant que motard. Que vous impose l'article 223-6 du Code pénal dans cette situation ?",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Régler immédiatement les frais de réparation des véhicules impliqués"
        },
        {
          "id": "b",
          "texte": "Vous arrêter et alerter les secours face à une personne en danger"
        },
        {
          "id": "c",
          "texte": "Publier les circonstances de l'accident sur les réseaux sociaux"
        },
        {
          "id": "d",
          "texte": "Porter assistance dans la mesure de vos moyens, sans prendre de risque déraisonnable pour vous-même"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "L'article 223-6 du Code pénal réprime la non-assistance à personne en danger : un témoin doit s'arrêter, alerter les secours et porter une aide adaptée à ses moyens, mais la loi ne l'oblige jamais à prendre un risque déraisonnable pour lui-même. Régler les réparations ou publier des informations sur l'accident n'ont aucun lien avec cette obligation légale.",
      "difficulte": 2
    },
    {
      "id": "SEC-0035",
      "theme": "secours",
      "enonce": "Vous arrivez sur les lieux d'un accident de moto avec des blessés, avant même l'arrivée des secours. Quelles sont les deux bonnes priorités immédiates ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Sécuriser les lieux avant d'intervenir pour ne pas créer un second accident"
        },
        {
          "id": "b",
          "texte": "Essayer de réparer ou déplacer la moto endommagée"
        },
        {
          "id": "c",
          "texte": "Déplacer immédiatement les blessés sur le bas-côté"
        },
        {
          "id": "d",
          "texte": "Rester calme et alerter rapidement les services d'urgence"
        }
      ],
      "bonnesReponses": [
        "a",
        "d"
      ],
      "explication": "La méthode enseignée consiste à sécuriser la zone pour éviter un second accident, puis à alerter calmement les secours en donnant des informations précises. Déplacer les blessés sans nécessité ou s'occuper du véhicule endommagé n'est pas prioritaire et peut aggraver leur état ou retarder l'alerte.",
      "difficulte": 2
    },
    {
      "id": "SEC-0036",
      "theme": "secours",
      "enonce": "Au téléphone avec le service d'urgence après un accident de moto, quelles informations sont réellement utiles à transmettre au régulateur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La localisation précise et le nombre/état des victimes"
        },
        {
          "id": "b",
          "texte": "La plaque d'immatriculation et le modèle de la moto accidentée"
        },
        {
          "id": "c",
          "texte": "La nature de l'accident (collision, malaise, incendie...)"
        },
        {
          "id": "d",
          "texte": "Votre profession et vos antécédents médicaux personnels"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Le régulateur a besoin de savoir où intervenir, ce qui s'est passé et combien de personnes sont concernées dans quel état, pour dimensionner les moyens envoyés. La plaque d'immatriculation, le modèle du véhicule ou votre profession ne changent rien à la prise en charge et font perdre un temps précieux.",
      "difficulte": 2
    },
    {
      "id": "SEC-0037",
      "theme": "secours",
      "enonce": "Après avoir alerté les secours, vous constatez que la victime est inconsciente mais respire normalement. Que faites-vous ?",
      "media": "images/pls.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous pratiquez un massage cardiaque"
        },
        {
          "id": "b",
          "texte": "Vous la mettez en position latérale de sécurité"
        },
        {
          "id": "c",
          "texte": "Vous la redressez en position assise"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une victime inconsciente qui respire doit être placée en position latérale de sécurité (PLS) pour dégager ses voies aériennes et éviter qu'elle ne s'étouffe en cas de vomissement. Le massage cardiaque ne se pratique qu'en l'absence de respiration, et l'asseoir favoriserait au contraire l'obstruction des voies respiratoires.",
      "difficulte": 1
    },
    {
      "id": "SEC-0038",
      "theme": "secours",
      "enonce": "Vous êtes impliqué ou témoin d'un accident sur autoroute et devez signaler le danger aux autres usagers avant l'arrivée des secours. Que faites-vous ?",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Vous klaxonnez de façon répétée pour attirer l'attention"
        },
        {
          "id": "b",
          "texte": "Vous enclenchez les feux de détresse du véhicule et placez un triangle de présignalisation"
        },
        {
          "id": "c",
          "texte": "Vous mettez un gilet réfléchissant si vous devez sortir du véhicule"
        },
        {
          "id": "d",
          "texte": "Vous agitez les bras au bord de la voie"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les feux de détresse, le triangle de présignalisation et un gilet réfléchissant rendent la zone dangereuse visible de loin, ce qui est essentiel sur autoroute où les vitesses sont élevées. Klaxonner ou agiter les bras n'est pas fiable à grande distance et vous expose personnellement sans réellement sécuriser la zone.",
      "difficulte": 2
    },
    {
      "id": "SEC-0039",
      "theme": "secours",
      "enonce": "Un accident se produit sur autoroute. Quelle information est indispensable à donner en priorité pour permettre aux secours de vous localiser rapidement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le nom complet du conducteur impliqué"
        },
        {
          "id": "b",
          "texte": "La marque et la couleur du véhicule accidenté"
        },
        {
          "id": "c",
          "texte": "Le numéro et le sens de l'autoroute avec le point kilométrique (ex. A6, km 42, sens Paris-Lyon)"
        },
        {
          "id": "d",
          "texte": "L'heure approximative de l'accident, sans autre précision"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Sur autoroute, le point kilométrique et le sens de circulation permettent de localiser l'accident en quelques secondes ; les bornes d'appel d'urgence, réparties le long de la voie, peuvent aussi transmettre automatiquement cette position. Le nom du conducteur, la couleur du véhicule ou l'heure approximative ne permettent absolument pas de localiser les lieux.",
      "difficulte": 2
    },
    {
      "id": "SEC-0040",
      "theme": "secours",
      "enonce": "En attendant l'arrivée des secours auprès d'une victime consciente, que devez-vous vous interdire de faire, sauf si un danger immédiat la menace ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Changer sa position ou la déplacer"
        },
        {
          "id": "b",
          "texte": "Lui parler pour la rassurer"
        },
        {
          "id": "c",
          "texte": "Surveiller sa respiration"
        },
        {
          "id": "d",
          "texte": "Rester en contact avec le régulateur"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Déplacer une victime peut aggraver des blessures invisibles, notamment au niveau du dos ou de la colonne vertébrale, sauf si elle est exposée à un danger immédiat comme un incendie ou la circulation. En revanche, la rassurer, surveiller son état et rester en lien avec le régulateur sont des actions recommandées en attendant les secours.",
      "difficulte": 1
    },
    {
      "id": "SEC-0041",
      "theme": "secours",
      "enonce": "En matière de sécurité routière, quelle attitude générale un motard doit-il adopter face au risque d'accident ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler plus vite pour s'éloigner rapidement des zones à risque"
        },
        {
          "id": "b",
          "texte": "Être informé des bons gestes et prêt à réagir efficacement en cas d'urgence"
        },
        {
          "id": "c",
          "texte": "Se concentrer uniquement sur sa propre trajectoire sans se soucier des autres usagers"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Connaître les numéros d'urgence, le script d'alerte et les gestes de premiers secours permet de réagir efficacement et sans perdre de temps si un accident survient. Rouler plus vite pour fuir un risque ou ignorer les autres usagers va à l'encontre d'une conduite responsable et augmente le danger pour tous.",
      "difficulte": 1
    },
    {
      "id": "SEC-0042",
      "theme": "secours",
      "enonce": "Le script d'alerte structuré enseigné pour appeler les secours (« Qui, Où, Quoi, Combien, État ») repose sur plusieurs types d'informations. Lesquelles en font partie ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La nature de l'incident (collision, malaise, incendie...)"
        },
        {
          "id": "b",
          "texte": "La couleur du casque porté par le motard impliqué"
        },
        {
          "id": "c",
          "texte": "Le nombre de victimes et leur état de conscience"
        },
        {
          "id": "d",
          "texte": "Les mesures déjà prises (garrot posé, massage cardiaque en cours...)"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Le « Quoi » correspond à la nature de l'incident, le « Combien »/« État » au nombre de victimes et à leur état, et il faut aussi préciser les gestes de secours déjà réalisés pour que le régulateur adapte ses instructions. Un détail comme la couleur du casque n'apporte en revanche aucune information utile à la prise en charge.",
      "difficulte": 3
    },
    {
      "id": "SEC-0043",
      "theme": "secours",
      "enonce": "Le régulateur des services d'urgence vient de vous donner des instructions après avoir recueilli toutes les informations sur l'accident. Que faites-vous ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vous raccrochez dès qu'il vous annonce l'envoi d'une ambulance"
        },
        {
          "id": "b",
          "texte": "Vous publiez la situation sur les réseaux sociaux pour prévenir vos proches"
        },
        {
          "id": "c",
          "texte": "Vous allez immédiatement chercher la victime dans le véhicule sans autre précaution"
        },
        {
          "id": "d",
          "texte": "Vous restez en ligne et suivez ses instructions jusqu'à nouvel ordre"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Il faut rester en ligne et suivre les instructions du régulateur, qui peut vous guider dans des gestes de premiers secours ou avoir besoin de précisions supplémentaires ; ne raccrochez jamais sans son autorisation. Aller chercher une victime sans précaution ou publier la situation sur les réseaux sociaux au lieu de rester disponible pour les secours est à proscrire.",
      "difficulte": 1
    },
    {
      "id": "SEC-0044",
      "theme": "secours",
      "enonce": "Donner votre nom au régulateur des secours est facultatif. Quel autre élément est en revanche conseillé de fournir pour qu'il puisse vous recontacter si besoin ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le numéro d'immatriculation de votre moto"
        },
        {
          "id": "b",
          "texte": "Votre numéro de sécurité sociale"
        },
        {
          "id": "c",
          "texte": "Votre numéro de téléphone"
        },
        {
          "id": "d",
          "texte": "Le nom de votre compagnie d'assurance"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Communiquer votre numéro de téléphone permet au régulateur de vous rappeler en cas de besoin, par exemple pour préciser votre position ou vous donner des instructions supplémentaires, même si votre identité reste facultative. La plaque d'immatriculation, le numéro de sécurité sociale ou le nom de votre assurance n'ont aucune utilité pour la coordination des secours à ce moment-là.",
      "difficulte": 1
    },
    {
      "id": "SEC-0045",
      "theme": "secours",
      "enonce": "Après une chute à moto, un témoin ouvre une trousse de premiers secours pour soigner une plaie légère. Parmi les objets suivants, lesquels sont réellement des bandages utilisables ?",
      "media": "images/tableau-bord-temoins.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Une compresse chauffante et un gel apaisant"
        },
        {
          "id": "b",
          "texte": "Une bande de gaze stérile"
        },
        {
          "id": "c",
          "texte": "Un coton-tige et une brosse à dents"
        },
        {
          "id": "d",
          "texte": "Un pansement adhésif"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Les bandages de premiers secours courants sont la bande de gaze stérile et le pansement adhésif : ils protègent la plaie et limitent le saignement. Une compresse chauffante n'a pas de fonction de bandage, et un coton-tige ou une brosse à dents n'ont rien à faire dans ce contexte.",
      "difficulte": 1
    },
    {
      "id": "SEC-0046",
      "theme": "secours",
      "enonce": "Vous arrivez le premier sur les lieux d'un accident de moto. Quelle doit être votre toute première action ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Appeler immédiatement les secours sans évaluer les dangers environnants"
        },
        {
          "id": "b",
          "texte": "Sécuriser la zone (signalisation, mise à l'écart des dangers) avant toute autre action"
        },
        {
          "id": "c",
          "texte": "Retirer aussitôt le blessé de la chaussée"
        },
        {
          "id": "d",
          "texte": "Commencer à bander la plaie la plus visible"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La règle de base des premiers secours est \"Protéger, Alerter, Secourir\" : on sécurise d'abord la zone pour éviter un second accident, avant d'alerter ou de soigner. Appeler les secours sans avoir écarté les dangers, déplacer le blessé sans nécessité, ou soigner une plaie avant d'avoir sécurisé les lieux exposent le sauveteur et la victime à un risque supplémentaire.",
      "difficulte": 1
    },
    {
      "id": "SEC-0047",
      "theme": "secours",
      "enonce": "Un motard s'est éraflé le bras lors d'une chute. Avant de poser un bandage sur la plaie, que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Poser directement le bandage sans nettoyer, pour gagner du temps"
        },
        {
          "id": "b",
          "texte": "Nettoyer la plaie à l'eau claire ou avec une solution antiseptique"
        },
        {
          "id": "c",
          "texte": "Serrer le bandage au maximum pour qu'il ne glisse pas"
        },
        {
          "id": "d",
          "texte": "Appliquer un pansement stérile directement sur la plaie avant de bander"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Avant de bander une plaie, il faut la nettoyer à l'eau claire ou avec une solution antiseptique, puis poser un pansement stérile directement dessus : cela limite fortement le risque d'infection. Bander sans nettoyer, ou serrer excessivement pour éviter que ça glisse, sont deux erreurs qui aggravent le risque infectieux ou compriment inutilement le membre.",
      "difficulte": 2
    },
    {
      "id": "SEC-0048",
      "theme": "secours",
      "enonce": "Un passager souffre d'une fracture probable de l'avant-bras après une chute et vous devez improviser une attelle en attendant les secours. Que pouvez-vous utiliser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un bâton ou un magazine fermement enroulé, pouvant servir de support rigide"
        },
        {
          "id": "b",
          "texte": "Une écharpe en tissu souple utilisée seule, sans rien de rigide"
        },
        {
          "id": "c",
          "texte": "Aucun objet de fortune : il faut attendre les secours sans rien faire"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Une attelle improvisée doit être rigide pour empêcher le membre de bouger : un bâton ou un magazine bien enroulé convient parfaitement. Un tissu souple seul ne maintient rien en place (il sert plutôt à fixer l'attelle ou à faire une écharpe), et ne rien faire est dangereux car l'immobilisation reste indispensable en attendant les secours.",
      "difficulte": 2
    },
    {
      "id": "SEC-0049",
      "theme": "secours",
      "enonce": "Pourquoi immobilise-t-on un membre lorsqu'une fracture est suspectée après un accident de moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour réduire la douleur ressentie par le blessé"
        },
        {
          "id": "b",
          "texte": "Pour faciliter la pose du bandage par le secouriste"
        },
        {
          "id": "c",
          "texte": "Pour empêcher que la blessure ne s'aggrave pendant l'attente ou le transport"
        },
        {
          "id": "d",
          "texte": "Pour rendre le trajet plus agréable pour le passager"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Immobiliser un membre fracturé réduit la douleur et empêche l'os ou les tissus environnants de subir des dommages supplémentaires. Ce n'est ni pour faciliter la pose d'un bandage ni pour le confort du trajet : ce sont au mieux des conséquences secondaires, pas l'objectif recherché par ce geste de secours.",
      "difficulte": 2
    },
    {
      "id": "SEC-0050",
      "theme": "secours",
      "enonce": "Vous suspectez une fracture chez un motard après sa chute. Quelle est la bonne conduite à tenir en attendant les secours ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Tenter de remettre l'os en place avant l'arrivée des secours"
        },
        {
          "id": "b",
          "texte": "Se contenter d'un bandage simple, sans immobiliser le membre"
        },
        {
          "id": "c",
          "texte": "Immobiliser le membre avec une attelle improvisée, sans chercher à repositionner l'os vous-même"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Face à une fracture suspectée, il faut immobiliser le membre avec une attelle sans jamais tenter de repositionner l'os soi-même : ce geste peut aggraver les lésions des vaisseaux, nerfs ou tissus environnants. Un simple bandage sans immobilisation est insuffisant car il ne bloque pas le membre.",
      "difficulte": 2
    },
    {
      "id": "SEC-0051",
      "theme": "secours",
      "enonce": "Vous devez confectionner une écharpe de soutien pour immobiliser le bras d'un motard blessé. Quel type de bandage utilisez-vous ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le bandage rouleau, plus rigide"
        },
        {
          "id": "b",
          "texte": "Un pansement adhésif large"
        },
        {
          "id": "c",
          "texte": "Le bandage triangulaire, qui permet de fabriquer une écharpe de soutien"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le bandage triangulaire est justement conçu pour confectionner une écharpe et immobiliser un bras, alors que le bandage rouleau sert à envelopper circulairement une plaie (coupure, éraflure). Un pansement adhésif large protège une plaie mais ne permet pas de soutenir un membre comme une écharpe.",
      "difficulte": 1
    },
    {
      "id": "SEC-0052",
      "theme": "secours",
      "enonce": "Vous venez de fixer une attelle avec un bandage sur le bras d'un blessé. Comment vous assurer que ce bandage ne coupe pas la circulation sanguine ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "L'enrouler fermement, sans couper la circulation"
        },
        {
          "id": "b",
          "texte": "Vérifier régulièrement que les doigts ne bleuissent pas ou ne s'engourdissent pas"
        },
        {
          "id": "c",
          "texte": "Le desserrer légèrement si la victime ressent des fourmillements"
        },
        {
          "id": "d",
          "texte": "Le serrer le plus fort possible pour bien maintenir l'attelle"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Un bandage doit être serré fermement pour maintenir l'attelle, mais sans couper la circulation : on surveille la couleur et la sensibilité des doigts, et on desserre légèrement en cas de fourmillements ou de doigts qui bleuissent. Serrer \"le plus fort possible\" est au contraire dangereux, car cela peut couper l'irrigation sanguine du membre.",
      "difficulte": 2
    },
    {
      "id": "SEC-0053",
      "theme": "secours",
      "enonce": "Un motard présente une hémorragie importante après un accident. Quelle est la priorité absolue avant tout autre geste ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Nettoyer la plaie avant toute autre chose"
        },
        {
          "id": "b",
          "texte": "Attendre l'arrivée des secours sans intervenir"
        },
        {
          "id": "c",
          "texte": "Comprimer fermement la plaie pour stopper le saignement"
        },
        {
          "id": "d",
          "texte": "Retirer systématiquement le casque du blessé pour mieux voir la plaie"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "En cas d'hémorragie importante, la priorité absolue est de comprimer fermement la plaie pour stopper le saignement avant tout autre geste. Nettoyer la plaie ou attendre passivement retarde une action vitale, et retirer systématiquement le casque n'est pas recommandé : cela peut aggraver une éventuelle lésion de la colonne cervicale.",
      "difficulte": 3
    },
    {
      "id": "SEC-0054",
      "theme": "secours",
      "enonce": "Vous trouvez un motard immobile et inconscient sur le bord de la route après une chute. Avant d'entreprendre une réanimation cardio-pulmonaire, que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Débuter aussitôt les compressions thoraciques, sans autre vérification"
        },
        {
          "id": "b",
          "texte": "Vous assurer que les lieux ne présentent pas de danger pour vous et pour la victime"
        },
        {
          "id": "c",
          "texte": "Vérifier si la victime répond et si elle respire normalement"
        },
        {
          "id": "d",
          "texte": "Déplacer systématiquement la victime hors de la chaussée avant tout examen"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Avant tout geste, le secouriste doit sécuriser la zone (circulation, danger) puis évaluer l'état de la victime (réponse, respiration) : c'est seulement après cette étape que l'on alerte les secours et que l'on débute la RCP si nécessaire. Commencer directement les compressions sans évaluation (a) fait perdre du temps sur un diagnostic essentiel, et déplacer la victime sans nécessité (d) peut aggraver d'éventuelles lésions liées à la chute.",
      "difficulte": 1
    },
    {
      "id": "SEC-0055",
      "theme": "secours",
      "enonce": "Pour réaliser des compressions thoraciques efficaces sur une victime en arrêt cardio-respiratoire, où le talon de la main doit-il être positionné ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Sur le côté gauche du thorax, au niveau du cœur"
        },
        {
          "id": "b",
          "texte": "Au centre de la poitrine, sur la partie basse du sternum"
        },
        {
          "id": "c",
          "texte": "Juste au-dessus du nombril, sur l'abdomen"
        },
        {
          "id": "d",
          "texte": "En haut du sternum, près de la base du cou"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le talon d'une main se place au centre du thorax, sur la moitié inférieure du sternum, l'autre main posée par-dessus avec les doigts entrelacés, bras tendus. Le cœur n'est pas positionné exactement sous le sein gauche (a), et un appui abdominal (c) ou trop haut près de la gorge (d) rend les compressions inefficaces, voire dangereuses.",
      "difficulte": 2
    },
    {
      "id": "SEC-0056",
      "theme": "secours",
      "enonce": "Chez un adulte, quelles caractéristiques correspondent à des compressions thoraciques correctement réalisées ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une profondeur maximale de 2 cm, pour ne pas blesser les côtes"
        },
        {
          "id": "b",
          "texte": "Une profondeur comprise entre 5 et 6 cm"
        },
        {
          "id": "c",
          "texte": "Une fréquence de 50 à 70 compressions par minute"
        },
        {
          "id": "d",
          "texte": "Une fréquence de 100 à 120 compressions par minute"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Chez l'adulte, chaque compression doit enfoncer le thorax d'au moins 5 cm sans dépasser 6 cm, à un rythme de 100 à 120 par minute, en laissant la poitrine se relâcher complètement entre deux compressions. Une profondeur de 2 cm (a) ne génère pas assez de circulation sanguine, et un rythme de 50 à 70/min (c) est trop lent pour être efficace.",
      "difficulte": 2
    },
    {
      "id": "SEC-0057",
      "theme": "secours",
      "enonce": "Concernant l'alternance entre compressions thoraciques et insufflations lors d'une RCP sur un adulte, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le protocole impose 15 compressions suivies d'une seule insufflation"
        },
        {
          "id": "b",
          "texte": "Le cycle de référence est 30 compressions suivies de 2 insufflations"
        },
        {
          "id": "c",
          "texte": "Les insufflations doivent toujours être données avant de débuter les compressions"
        },
        {
          "id": "d",
          "texte": "Un secouriste non formé ou mal à l'aise avec le bouche-à-bouche peut se limiter aux compressions thoraciques seules"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le cycle standard chez l'adulte est de 30 compressions thoraciques pour 2 insufflations, répété jusqu'à la prise en charge par les secours. Si le secouriste n'est pas formé aux insufflations ou n'est pas à l'aise avec cette technique, il peut pratiquer une RCP par compressions seules, qui reste efficace. Le ratio 15:1 (a) ne correspond à aucun protocole adulte, et les compressions doivent toujours être réalisées avant les insufflations, jamais après (c).",
      "difficulte": 2
    },
    {
      "id": "SEC-0058",
      "theme": "secours",
      "enonce": "Jusqu'à quand faut-il poursuivre les gestes de réanimation cardio-pulmonaire entrepris sur une victime ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pendant 5 minutes maximum, quelle que soit la situation"
        },
        {
          "id": "b",
          "texte": "Jusqu'à l'arrivée des secours ou l'apparition de signes de vie chez la victime"
        },
        {
          "id": "c",
          "texte": "Jusqu'à ce qu'un témoin présent sur les lieux vous demande d'arrêter"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La RCP doit être maintenue sans interruption jusqu'à la prise en charge de la victime par les services de secours, ou jusqu'à ce qu'elle montre des signes de vie (reprise de la respiration, mouvements). Il n'existe pas de durée limite fixe de 5 minutes (a), et l'avis d'un témoin non qualifié (c) ne justifie jamais d'arrêter des gestes qui maintiennent la victime en vie.",
      "difficulte": 1
    },
    {
      "id": "SEC-0059",
      "theme": "secours",
      "enonce": "Vous portez secours à un motard qui vient de chuter et dont l'état semble se dégrader. Parmi les signes suivants, lesquels doivent vous faire suspecter un état de choc ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une élévation importante du taux de sucre dans le sang"
        },
        {
          "id": "b",
          "texte": "Une peau pâle, froide et moite"
        },
        {
          "id": "c",
          "texte": "Un pouls rapide mais faible"
        },
        {
          "id": "d",
          "texte": "Un pouls lent et bondissant"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Un état de choc traduit une mauvaise oxygénation des organes : la peau devient pâle, froide et moite, et le pouls s'accélère tout en s'affaiblissant. Le taux de sucre sanguin n'est pas un signe de choc, et un pouls lent et bondissant traduit au contraire une bonne circulation, pas un état de choc.",
      "difficulte": 2
    },
    {
      "id": "SEC-0060",
      "theme": "secours",
      "enonce": "Sur les lieux d'un accident de moto, le conducteur présente les signes d'un état de choc mais reste conscient. Quelle est la priorité absolue avant tout autre geste ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Retirer immédiatement son casque pour vérifier son état"
        },
        {
          "id": "b",
          "texte": "Sécuriser les lieux puis alerter les secours (15 ou 112)"
        },
        {
          "id": "c",
          "texte": "Lui faire boire de l'eau sucrée pour compenser la perte de sang"
        },
        {
          "id": "d",
          "texte": "Le faire marcher doucement pour relancer la circulation sanguine"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La règle des premiers secours est Protéger-Alerter-Secourir : on écarte le danger puis on prévient les secours sans délai, avant tout autre geste. Retirer le casque sans nécessité peut aggraver une lésion cervicale, faire boire une personne en choc est proscrit, et la faire marcher est dangereux car elle peut perdre connaissance à tout moment.",
      "difficulte": 1
    },
    {
      "id": "SEC-0061",
      "theme": "secours",
      "enonce": "Un motard en état de choc vous réclame de l'eau car il a très soif. Que devez-vous faire ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accepter, car la déshydratation aggrave l'état de choc"
        },
        {
          "id": "b",
          "texte": "Refuser, car il risque de vomir ou de faire une fausse route"
        },
        {
          "id": "c",
          "texte": "Lui donner seulement quelques gorgées, sans plus"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Il ne faut jamais donner à boire ni à manger à une personne en état de choc : elle peut vomir ou faire une fausse route, et cela peut compliquer une anesthésie si une opération s'avère nécessaire. Le risque de déshydratation, bien réel, ne justifie ni un grand verre ni même quelques gorgées d'eau.",
      "difficulte": 1
    },
    {
      "id": "SEC-0062",
      "theme": "secours",
      "enonce": "Vous installez un motard en état de choc allongé sur le dos, jambes surélevées, en attendant les secours. Dans quel cas devez-vous adapter cette position ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "S'il a froid, en le laissant debout pour qu'il se réchauffe en bougeant"
        },
        {
          "id": "b",
          "texte": "S'il a du mal à respirer, en le redressant en position semi-assise"
        },
        {
          "id": "c",
          "texte": "S'il se plaint de soif, en le laissant s'asseoir pour boire plus facilement"
        },
        {
          "id": "d",
          "texte": "S'il perd connaissance en respirant normalement, en le plaçant en position latérale de sécurité"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "La position jambes surélevées favorise le retour du sang vers le cœur, mais elle doit être adaptée : en cas de détresse respiratoire, une position semi-assise soulage la respiration, et en cas de perte de connaissance avec respiration conservée, la position latérale de sécurité évite l'étouffement. Le laisser debout ou s'asseoir pour boire aggraverait au contraire son état de choc.",
      "difficulte": 3
    },
    {
      "id": "SEC-0063",
      "theme": "secours",
      "enonce": "Pourquoi devez-vous rester auprès du motard en état de choc et lui parler calmement jusqu'à l'arrivée des secours ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour lui donner régulièrement à boire contre la déshydratation"
        },
        {
          "id": "b",
          "texte": "Pour l'aider à retirer seul son équipement de protection"
        },
        {
          "id": "c",
          "texte": "Pour le rassurer, diminuer son stress et surveiller l'évolution de son état"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le stress aggrave l'état de choc : parler calmement à la victime la rassure, tout en permettant de surveiller sa conscience et sa respiration en attendant les secours. Il ne faut ni lui donner à boire, ni chercher à retirer son équipement de protection, qui doit rester en place sauf nécessité vitale évaluée par des secours qualifiés.",
      "difficulte": 1
    },
    {
      "id": "SEC-0064",
      "theme": "secours",
      "enonce": "Vous arrivez en premier sur les lieux d'un accident de moto. Quelles sont les bonnes pratiques à respecter avant d'intervenir auprès des victimes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Déplacer immédiatement la moto accidentée hors de la route"
        },
        {
          "id": "b",
          "texte": "Vous assurer de votre propre sécurité avant de vous approcher"
        },
        {
          "id": "c",
          "texte": "Sécuriser la zone (balisage, ralentissement de la circulation)"
        },
        {
          "id": "d",
          "texte": "Contacter l'assurance du motard pour constater les dégâts"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Avant tout geste de secours, il faut sécuriser les abords de l'accident (signalisation, gestion de la circulation) et s'assurer de sa propre sécurité, car un sauveteur blessé ne peut plus porter assistance à personne. Déplacer la moto ou contacter l'assurance ne sont d'aucune utilité face à une urgence vitale et font perdre un temps précieux.",
      "difficulte": 1
    },
    {
      "id": "SEC-0065",
      "theme": "secours",
      "enonce": "Un motard reste allongé au sol après sa chute et reste conscient. Pourquoi faut-il éviter de le déplacer sans raison impérieuse ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela salirait inutilement la chaussée"
        },
        {
          "id": "b",
          "texte": "Un déplacement risque d'aggraver une éventuelle lésion de la colonne vertébrale ou du cou"
        },
        {
          "id": "c",
          "texte": "Les secours n'interviennent que si la victime est restée exactement sur place"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Un choc violent à moto peut provoquer des lésions cervicales ou vertébrales invisibles à l'œil nu ; tout mouvement inapproprié peut transformer une lésion stable en dommage grave, voire irréversible. Les autres propositions n'ont aucun fondement : la propreté de la route n'a aucune importance et les secours interviennent quelle que soit la position de la victime.",
      "difficulte": 2
    },
    {
      "id": "SEC-0066",
      "theme": "secours",
      "enonce": "Vous devez appeler les secours après un accident de moto en France. Parmi ces numéros, lesquels sont effectivement utilisables ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "15"
        },
        {
          "id": "b",
          "texte": "911"
        },
        {
          "id": "c",
          "texte": "17"
        },
        {
          "id": "d",
          "texte": "112"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "En France, les secours sont joignables via le 15 (SAMU), le 17 (police) ou le 112, numéro d'urgence européen utilisable même depuis un mobile hors réseau de son propre opérateur. Le 911 est le numéro d'urgence nord-américain : il n'est pas opérationnel sur le territoire français.",
      "difficulte": 2
    },
    {
      "id": "SEC-0067",
      "theme": "secours",
      "enonce": "Sur les lieux de l'accident, le motard est inconscient et vous ne détectez aucune respiration. Quelle est la conduite à tenir ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le placer en position latérale de sécurité"
        },
        {
          "id": "b",
          "texte": "Patienter en observant simplement la victime jusqu'à l'arrivée des secours"
        },
        {
          "id": "c",
          "texte": "Débuter sans délai une réanimation cardio-pulmonaire"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "L'absence totale de respiration signe un arrêt cardio-respiratoire : il faut démarrer immédiatement la réanimation cardio-pulmonaire, car chaque minute perdue réduit fortement les chances de survie. La position latérale de sécurité est réservée aux victimes qui respirent, et rester passif fait perdre un temps vital.",
      "difficulte": 2
    },
    {
      "id": "SEC-0068",
      "theme": "secours",
      "enonce": "Le motard accidenté porte encore son casque intégral. Dans quel cas est-il justifié de le lui retirer complètement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Systématiquement, dès qu'un témoin arrive sur place"
        },
        {
          "id": "b",
          "texte": "Uniquement si la victime ne respire plus, afin de permettre les gestes de secours"
        },
        {
          "id": "c",
          "texte": "Jamais, quelle que soit la situation"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le casque ne doit être retiré que si la victime ne respire plus, car ce retrait devient alors nécessaire pour dégager les voies aériennes et pratiquer la réanimation. Dans tous les autres cas, on se contente de desserrer la sangle pour faciliter la respiration, un retrait maladroit du casque pouvant aggraver une lésion cervicale existante.",
      "difficulte": 3
    },
    {
      "id": "SEC-0069",
      "theme": "secours",
      "enonce": "La victime d'un accident de moto est inconsciente mais respire normalement. Quelle position devez-vous lui faire adopter en attendant les secours ?",
      "media": "images/pls.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Position assise, dos calé contre la moto"
        },
        {
          "id": "b",
          "texte": "À plat ventre, casque retiré"
        },
        {
          "id": "c",
          "texte": "Position latérale de sécurité"
        },
        {
          "id": "d",
          "texte": "Position debout, pour vérifier son équilibre"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Chez une victime inconsciente qui respire, la position latérale de sécurité (PLS) permet de dégager les voies aériennes et d'éviter une suffocation en cas de vomissement. Les positions assise ou debout sont à proscrire pour une personne inconsciente, et il ne faut pas retirer le casque tant qu'elle respire.",
      "difficulte": 1
    },
    {
      "id": "SEC-0070",
      "theme": "secours",
      "enonce": "En contactant les secours après un accident de moto, quelles informations devez-vous impérativement leur communiquer ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le numéro de série de la moto accidentée"
        },
        {
          "id": "b",
          "texte": "La localisation précise de l'accident"
        },
        {
          "id": "c",
          "texte": "Le nombre de personnes blessées et leur état apparent"
        },
        {
          "id": "d",
          "texte": "Le groupe sanguin de la victime"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les secours ont besoin de la localisation exacte et du nombre de victimes avec leur état apparent pour dimensionner et orienter leur intervention le plus rapidement possible. Le numéro de série de la moto et le groupe sanguin de la victime ne sont d'aucune utilité à cet instant et ne doivent pas retarder l'appel.",
      "difficulte": 1
    },
    {
      "id": "SEC-0071",
      "theme": "secours",
      "enonce": "Vous constatez qu'un passager blessé saigne abondamment après la chute. Quel geste de premiers secours devez-vous réaliser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Attendre l'arrivée des secours sans intervenir"
        },
        {
          "id": "b",
          "texte": "Appliquer une pression directe sur la plaie avec un tissu propre"
        },
        {
          "id": "c",
          "texte": "Nettoyer la plaie à l'eau avant toute chose"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Face à une hémorragie importante, il faut comprimer directement la plaie avec un tissu propre pour limiter la perte de sang en attendant les secours : un geste simple mais qui peut être vital. Rester passif laisse la victime perdre du sang inutilement, et nettoyer la plaie n'est pas la priorité face à un saignement abondant.",
      "difficulte": 1
    },
    {
      "id": "SEC-0072",
      "theme": "secours",
      "enonce": "Sur la route, vous portez secours à un motard victime d'un malaise cardiaque. À quoi sert concrètement le défibrillateur que les secours vous demandent d'utiliser ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il délivre un choc électrique destiné à rétablir un rythme cardiaque normal"
        },
        {
          "id": "b",
          "texte": "Il mesure la tension artérielle de la victime pour orienter les secours"
        },
        {
          "id": "c",
          "texte": "Il immobilise le thorax pour éviter d'aggraver une fracture"
        },
        {
          "id": "d",
          "texte": "Il insuffle de l'air dans les poumons de la victime"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le défibrillateur, automatisé ou manuel, délivre un choc électrique qui peut resynchroniser un cœur en arrêt cardiaque et lui permettre de retrouver un rythme efficace. Il ne mesure pas la tension, ne sert pas à immobiliser une fracture et n'assure pas la ventilation : ces gestes relèvent d'autres techniques de secours.",
      "difficulte": 1
    },
    {
      "id": "SEC-0073",
      "theme": "secours",
      "enonce": "Vous venez de récupérer un défibrillateur automatisé externe (DAE) près du lieu d'un accident de moto. Quelle action devez-vous réaliser en tout premier, avant de vous occuper des électrodes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ouvrir le boîtier et allumer l'appareil"
        },
        {
          "id": "b",
          "texte": "Placer directement les électrodes sur la victime"
        },
        {
          "id": "c",
          "texte": "Attendre l'arrivée des secours sans toucher à l'appareil"
        },
        {
          "id": "d",
          "texte": "Commencer par masser le thorax de la victime pendant une minute"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Sur un DAE, l'ouverture du boîtier déclenche généralement la mise en marche automatique de l'appareil, qui commence alors à guider l'utilisateur par des instructions vocales ou visuelles. La pose des électrodes n'intervient qu'après cette mise en route ; retarder l'usage de l'appareil ou commencer par un massage sans l'avoir allumé n'est pas la bonne séquence.",
      "difficulte": 1
    },
    {
      "id": "SEC-0074",
      "theme": "secours",
      "enonce": "Une fois les électrodes correctement posées sur le thorax de la victime, que fait le défibrillateur automatisé externe avant toute chose ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il délivre immédiatement un choc électrique"
        },
        {
          "id": "b",
          "texte": "Il analyse le rythme cardiaque de la victime"
        },
        {
          "id": "c",
          "texte": "Il se met en veille jusqu'à l'arrivée des secours"
        },
        {
          "id": "d",
          "texte": "Il demande de commencer un massage cardiaque sans délai"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le DAE analyse d'abord le rythme cardiaque afin de déterminer si un choc est réellement nécessaire : il ne délivre jamais de choc à l'aveugle. Ce n'est qu'à l'issue de cette analyse qu'il indique, le cas échéant, qu'un choc est requis ; les autres propositions ne correspondent pas à cette étape du protocole.",
      "difficulte": 2
    },
    {
      "id": "SEC-0075",
      "theme": "secours",
      "enonce": "Pour un défibrillateur automatisé externe classique, où faut-il positionner les deux électrodes sur le torse dénudé de la victime ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une sous la clavicule droite, l'autre sous l'aisselle gauche"
        },
        {
          "id": "b",
          "texte": "Une sur chaque bras, au niveau du biceps"
        },
        {
          "id": "c",
          "texte": "Une sur chaque jambe, au niveau de la cuisse"
        },
        {
          "id": "d",
          "texte": "Les deux électrodes superposées au centre du sternum"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Le positionnement standard place une électrode sous la clavicule droite et l'autre sous l'aisselle gauche, afin que le courant traverse le cœur. Un placement sur les bras, les jambes ou superposé sur le sternum ne permet pas au choc d'agir efficacement sur le muscle cardiaque.",
      "difficulte": 2
    },
    {
      "id": "SEC-0076",
      "theme": "secours",
      "enonce": "Le défibrillateur vient d'annoncer qu'un choc est nécessaire pour la victime. Parmi les actions suivantes, lesquelles faut-il respecter à ce moment précis ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vérifier que personne ne touche la victime avant d'appuyer"
        },
        {
          "id": "b",
          "texte": "Attendre le signal de l'appareil avant d'appuyer sur le bouton"
        },
        {
          "id": "c",
          "texte": "Appuyer sur le bouton de choc au moment indiqué par l'appareil"
        },
        {
          "id": "d",
          "texte": "Retirer les électrodes juste avant d'appuyer sur le bouton"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Avant de déclencher le choc, il faut s'assurer que personne ne touche la victime pour éviter tout risque, attendre précisément le signal du défibrillateur, puis appuyer sur le bouton dédié au moment indiqué. Retirer les électrodes annulerait le geste : elles doivent rester en place pendant tout le cycle d'analyse et de choc.",
      "difficulte": 3
    },
    {
      "id": "SEC-0077",
      "theme": "secours",
      "enonce": "Juste après avoir délivré un choc électrique à la victime, que fait automatiquement le défibrillateur ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Il analyse de nouveau le rythme cardiaque de la victime"
        },
        {
          "id": "b",
          "texte": "Il s'éteint définitivement pour éviter la surchauffe"
        },
        {
          "id": "c",
          "texte": "Il demande de recommencer la pose des électrodes depuis le début"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Après chaque choc, le DAE réanalyse automatiquement le rythme cardiaque pour déterminer si un nouveau choc est nécessaire ou si les gestes de réanimation doivent se poursuivre. L'appareil ne s'arrête pas de lui-même et ne demande pas de repositionner les électrodes, qui restent en place durant toute la prise en charge.",
      "difficulte": 1
    },
    {
      "id": "SEC-0078",
      "theme": "secours",
      "enonce": "En cas d'arrêt cardiaque d'un usager de la route, pourquoi la rapidité d'utilisation du défibrillateur change-t-elle autant les chances de survie ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Chaque minute sans défibrillation fait chuter les chances de survie d'environ 10 %"
        },
        {
          "id": "b",
          "texte": "Une défibrillation rapide peut doubler, voire tripler les chances de survie"
        },
        {
          "id": "c",
          "texte": "Le défibrillateur ne fonctionne correctement que si un médecin est présent"
        },
        {
          "id": "d",
          "texte": "La rapidité n'a d'effet que sur le confort de la victime, pas sur sa survie"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le temps est le facteur clé de la chaîne de survie : chaque minute perdue réduit les chances de survie d'environ 10 %, alors qu'une défibrillation précoce peut multiplier ces chances par deux ou trois. Le DAE est conçu pour être utilisé par toute personne présente sans nécessiter un médecin, et son intérêt dépasse largement le simple confort de la victime.",
      "difficulte": 2
    },
    {
      "id": "SEC-0079",
      "theme": "secours",
      "enonce": "En France, la loi impose-t-elle la présence d'un défibrillateur dans certains lieux ouverts au public ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Oui, certains établissements recevant du public doivent en être équipés selon leur catégorie"
        },
        {
          "id": "b",
          "texte": "Non, aucune obligation légale n'existe en la matière"
        },
        {
          "id": "c",
          "texte": "Oui, mais uniquement dans les hôpitaux"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La réglementation française impose progressivement l'installation de défibrillateurs dans les établissements recevant du public (ERP) selon leur catégorie et leur fréquentation, et pas seulement dans les hôpitaux qui en disposent déjà. Affirmer qu'aucune obligation n'existe est donc inexact.",
      "difficulte": 2
    },
    {
      "id": "SEC-0080",
      "theme": "secours",
      "enonce": "Concernant les différents types de défibrillateurs, quelles affirmations sont correctes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le défibrillateur automatisé externe (DAE) est conçu pour être utilisé par le grand public grâce à des instructions vocales ou visuelles"
        },
        {
          "id": "b",
          "texte": "Il existe aussi des défibrillateurs manuels, réservés à un usage par des professionnels de santé formés"
        },
        {
          "id": "c",
          "texte": "Seuls les médecins sont autorisés par la loi à utiliser un DAE"
        },
        {
          "id": "d",
          "texte": "L'utilisation d'un DAE nécessite une prescription médicale préalable"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Le DAE a justement été conçu pour être utilisable par le grand public, sans formation médicale poussée, grâce à ses instructions vocales et visuelles, tandis que le défibrillateur manuel reste réservé aux professionnels de santé. Aucune loi ne réserve l'usage du DAE aux médecins, et aucune prescription n'est requise pour s'en servir en urgence.",
      "difficulte": 1
    },
    {
      "id": "SEC-0081",
      "theme": "secours",
      "enonce": "Après une chute à moto, vous avez une éraflure au bras et devez vous en occuper avant l'arrivée des secours. Quel geste effectuez-vous en tout premier, avant même de toucher la plaie ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Vous appliquez directement un pansement"
        },
        {
          "id": "b",
          "texte": "Vous vous lavez les mains à l'eau et au savon"
        },
        {
          "id": "c",
          "texte": "Vous rincez immédiatement la plaie à l'eau claire"
        },
        {
          "id": "d",
          "texte": "Vous désinfectez la plaie à l'alcool"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Avant tout soin d'une plaie, il faut se laver les mains à l'eau et au savon pendant au moins 20 secondes, pour ne pas transmettre de germes lors du soin (et il faut recommencer après). Nettoyer, désinfecter ou couvrir la plaie viennent seulement une fois cette hygiène des mains réalisée.",
      "difficulte": 1
    },
    {
      "id": "SEC-0082",
      "theme": "secours",
      "enonce": "Pour nettoyer une plaie superficielle après une chute (avant-bras écorché sur le bitume), quels produits peut-on utiliser sans risque pour les tissus ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Eau claire et savon"
        },
        {
          "id": "b",
          "texte": "Sérum physiologique (eau saline)"
        },
        {
          "id": "c",
          "texte": "Alcool à 70°"
        },
        {
          "id": "d",
          "texte": "Eau oxygénée"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "L'eau claire savonneuse et le sérum physiologique éliminent saletés et débris sans agresser les tissus déjà lésés. L'alcool et l'eau oxygénée, malgré leur pouvoir désinfectant, abîment les cellules de la plaie et retardent la cicatrisation : ils sont donc à éviter sur une plaie ouverte.",
      "difficulte": 2
    },
    {
      "id": "SEC-0083",
      "theme": "secours",
      "enonce": "Pourquoi déconseille-t-on d'utiliser de l'alcool ou de l'eau oxygénée directement sur une plaie routière, par exemple une brûlure de bitume ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que ces produits sont inefficaces contre les bactéries"
        },
        {
          "id": "b",
          "texte": "Parce qu'ils endommagent les tissus déjà lésés"
        },
        {
          "id": "c",
          "texte": "Parce qu'ils sont trop coûteux pour un usage courant"
        },
        {
          "id": "d",
          "texte": "Parce qu'ils colorent durablement la peau"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'alcool et l'eau oxygénée agressent les cellules d'une plaie ouverte et ralentissent la cicatrisation, c'est pour cela qu'on les réserve à d'autres usages et non au contact direct d'un tissu déjà blessé. Leur efficacité antiseptique n'est pas en cause, et ni le coût ni la coloration de la peau n'expliquent cette recommandation.",
      "difficulte": 2
    },
    {
      "id": "SEC-0084",
      "theme": "secours",
      "enonce": "Une fois la plaie nettoyée, quel geste permet de limiter le risque d'infection avant de poser un pansement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Masser la zone pour activer la circulation"
        },
        {
          "id": "b",
          "texte": "Appliquer un antiseptique avec une compresse stérile ou un coton propre"
        },
        {
          "id": "c",
          "texte": "Souffler sur la plaie pour accélérer le séchage"
        },
        {
          "id": "d",
          "texte": "Appliquer une crème hydratante"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Après le nettoyage, appliquer un antiseptique avec une compresse stérile ou un coton propre limite la prolifération des bactéries et prévient l'infection. Masser la zone, souffler sur la plaie ou utiliser une simple crème hydratante n'ont aucun effet antiseptique et peuvent même favoriser une contamination.",
      "difficulte": 1
    },
    {
      "id": "SEC-0085",
      "theme": "secours",
      "enonce": "Parmi ces produits, lesquels sont des antiseptiques courants pouvant être appliqués sur une plaie déjà nettoyée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Bétadine"
        },
        {
          "id": "b",
          "texte": "Chlorhexidine"
        },
        {
          "id": "c",
          "texte": "Alcool à 90°"
        },
        {
          "id": "d",
          "texte": "Eau oxygénée"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "La bétadine et la chlorhexidine sont des antiseptiques adaptés à une plaie nettoyée, car ils préviennent l'infection sans agresser excessivement les tissus. L'alcool à 90° et l'eau oxygénée sont en revanche trop agressifs pour être appliqués directement sur une plaie ouverte.",
      "difficulte": 2
    },
    {
      "id": "SEC-0086",
      "theme": "secours",
      "enonce": "Comment protéger correctement une plaie une fois qu'elle a été nettoyée et désinfectée ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La laisser systématiquement à l'air libre, sans aucune protection"
        },
        {
          "id": "b",
          "texte": "La recouvrir d'un pansement propre et stérile"
        },
        {
          "id": "c",
          "texte": "L'envelopper dans un vêtement ou un tissu non stérile"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Un pansement propre et stérile protège la plaie de la poussière, des résidus de bitume et des germes extérieurs. Laisser systématiquement la plaie sans protection ou l'envelopper dans un tissu non stérile l'exposent au contraire à une contamination.",
      "difficulte": 1
    },
    {
      "id": "SEC-0087",
      "theme": "secours",
      "enonce": "À quel moment faut-il changer le pansement d'une plaie en cours de cicatrisation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une seule fois, à la pose initiale"
        },
        {
          "id": "b",
          "texte": "Régulièrement, et dès qu'il devient mouillé ou sale"
        },
        {
          "id": "c",
          "texte": "Uniquement quand la plaie a cessé de faire mal"
        },
        {
          "id": "d",
          "texte": "Jamais avant la guérison complète"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Le pansement doit être changé régulièrement, et systématiquement dès qu'il est mouillé ou souillé, pour garder la plaie propre et limiter le risque d'infection. Attendre la fin de la douleur ou la guérison complète pour le changer favorise au contraire la prolifération des bactéries.",
      "difficulte": 1
    },
    {
      "id": "SEC-0088",
      "theme": "secours",
      "enonce": "Dans les jours qui suivent une chute à moto, quels signes observés sur la plaie doivent vous alerter sur un possible début d'infection ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rougeur autour de la plaie"
        },
        {
          "id": "b",
          "texte": "Chaleur au toucher"
        },
        {
          "id": "c",
          "texte": "Écoulement de pus"
        },
        {
          "id": "d",
          "texte": "Douleur qui diminue progressivement de jour en jour"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Rougeur, chaleur locale et écoulement de pus sont des signes caractéristiques d'infection qui doivent pousser à consulter. À l'inverse, une douleur qui diminue progressivement est le signe d'une cicatrisation normale, pas d'une infection.",
      "difficulte": 3
    },
    {
      "id": "SEC-0089",
      "theme": "secours",
      "enonce": "Plusieurs jours après votre chute, vous constatez que la plaie de votre bras est rouge, chaude et laisse échapper du pus. Quelle est la bonne attitude à adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Continuer à appliquer uniquement de l'antiseptique en attendant que ça passe"
        },
        {
          "id": "b",
          "texte": "Consulter un professionnel de santé sans attendre"
        },
        {
          "id": "c",
          "texte": "Changer le pansement plus souvent, cela suffit"
        },
        {
          "id": "d",
          "texte": "Patienter une semaine pour voir si les symptômes s'aggravent"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Face à des signes d'infection (rougeur, chaleur, pus), il faut consulter un professionnel de santé immédiatement, car une infection non prise en charge peut s'aggraver rapidement. Se contenter de changer le pansement plus souvent, de poursuivre l'antiseptique seul ou d'attendre ne traite pas la cause du problème.",
      "difficulte": 2
    },
    {
      "id": "SEC-0090",
      "theme": "secours",
      "enonce": "Après une chute de moto sur une route peu fréquentée, vous n'avez que quelques secondes avant d'agir. Quel numéro composez-vous en priorité, valable dans toute l'Union européenne y compris en France ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Le 15"
        },
        {
          "id": "b",
          "texte": "Le 18"
        },
        {
          "id": "c",
          "texte": "Le 112"
        },
        {
          "id": "d",
          "texte": "Le 17"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Le 112 est le numéro d'urgence unique valable dans toute l'Union européenne : il est gratuit, fonctionne même sans code PIN et oriente automatiquement l'appel vers le service compétent (SAMU, pompiers ou police). Le 15, le 17 et le 18 sont des numéros purement français, réservés respectivement au SAMU, à la police et aux pompiers.",
      "difficulte": 1
    },
    {
      "id": "SEC-0091",
      "theme": "secours",
      "enonce": "Vous êtes le premier arrivé sur les lieux d'un accident de moto. Avant même de songer à alerter les secours ou à examiner le blessé, quelle action devez-vous entreprendre ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Retirer le casque du motard accidenté"
        },
        {
          "id": "b",
          "texte": "Contacter la famille de la victime"
        },
        {
          "id": "c",
          "texte": "Baliser et sécuriser la zone pour éviter un sur-accident"
        },
        {
          "id": "d",
          "texte": "Photographier la scène pour l'assurance"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "La méthode Protéger-Alerter-Secourir impose de sécuriser d'abord les lieux (signalisation, balisage) pour éviter qu'un autre véhicule ne heurte la victime ou les témoins. Retirer le casque d'un motard blessé est dangereux car cela peut aggraver une lésion cervicale ; contacter la famille ou photographier ne sont pas des priorités immédiates.",
      "difficulte": 1
    },
    {
      "id": "SEC-0092",
      "theme": "secours",
      "enonce": "En appelant le numéro d'urgence pour signaler un accident de moto, quelles informations devez-vous impérativement transmettre à l'opérateur ?",
      "media": "images/numeros-urgence.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La localisation précise de l'accident"
        },
        {
          "id": "b",
          "texte": "La gravité apparente des blessures"
        },
        {
          "id": "c",
          "texte": "Le nom de l'assureur du véhicule accidenté"
        },
        {
          "id": "d",
          "texte": "La marque et le modèle de la moto"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Pour que les secours interviennent vite et avec les moyens adaptés, il faut donner l'emplacement exact de l'accident et une estimation de sa gravité. L'assureur ou la marque du véhicule n'ont aucune utilité pour déclencher l'intervention et ne doivent pas retarder l'appel.",
      "difficulte": 2
    },
    {
      "id": "SEC-0093",
      "theme": "secours",
      "enonce": "Un motard est inconscient mais respire normalement lorsque vous le retrouvez au bord de la route. Quel geste devez-vous réaliser en attendant les secours ?",
      "media": "images/pls.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "La position latérale de sécurité (PLS)"
        },
        {
          "id": "b",
          "texte": "La réanimation cardio-pulmonaire"
        },
        {
          "id": "c",
          "texte": "Le maintenir sur le dos"
        },
        {
          "id": "d",
          "texte": "Des compressions thoraciques"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Une victime inconsciente qui respire doit être placée en position latérale de sécurité (PLS) afin de dégager ses voies aériennes et d'éviter qu'elle ne s'étouffe en cas de vomissement. La RCP et les compressions thoraciques ne s'utilisent qu'en l'absence de respiration ; la laisser sur le dos l'expose à un risque d'obstruction des voies respiratoires.",
      "difficulte": 1
    },
    {
      "id": "SEC-0094",
      "theme": "secours",
      "enonce": "Un motocycliste accidenté ne réagit pas et ne respire plus. Quel geste devez-vous entreprendre sans attendre ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La position latérale de sécurité"
        },
        {
          "id": "b",
          "texte": "Uniquement surveiller sa respiration"
        },
        {
          "id": "c",
          "texte": "Le redresser en position assise"
        },
        {
          "id": "d",
          "texte": "La réanimation cardio-pulmonaire (RCP)"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "L'absence de respiration signe un arrêt cardiorespiratoire : il faut débuter immédiatement la réanimation cardio-pulmonaire, qui associe compressions thoraciques et insufflations, jusqu'à l'arrivée des secours. La PLS ne convient qu'à une victime qui respire encore ; se contenter de surveiller ou redresser la victime ne fait que retarder un geste vital.",
      "difficulte": 2
    },
    {
      "id": "SEC-0095",
      "theme": "secours",
      "enonce": "Parmi ces organismes, lesquels proposent en France des formations certifiées aux gestes de premiers secours, accessibles notamment aux motocyclistes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La Croix-Rouge française"
        },
        {
          "id": "b",
          "texte": "L'Organisation mondiale de la santé"
        },
        {
          "id": "c",
          "texte": "La Protection Civile"
        },
        {
          "id": "d",
          "texte": "Les Sapeurs-Pompiers de France"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "En France, la Croix-Rouge française, la Protection Civile et les Sapeurs-Pompiers de France dispensent des formations de terrain certifiées aux premiers secours, ouvertes aux motocyclistes. L'Organisation mondiale de la santé est une agence des Nations unies qui émet des recommandations sanitaires internationales, mais n'organise pas de formations pratiques en France.",
      "difficulte": 3
    },
    {
      "id": "SEC-0096",
      "theme": "secours",
      "enonce": "Pourquoi la connaissance des gestes de premiers secours est-elle particulièrement utile pour un motocycliste ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Pour éviter une contravention en cas de contrôle routier"
        },
        {
          "id": "b",
          "texte": "Parce que le code de la route l'exige avant de conduire une moto"
        },
        {
          "id": "c",
          "texte": "Parce que cela dispense d'appeler les secours professionnels"
        },
        {
          "id": "d",
          "texte": "Parce qu'un motard, très exposé lors d'un choc, peut devoir agir vite comme premier témoin"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Sans carrosserie pour le protéger, un motocycliste est directement exposé en cas de choc, ce qui rend les accidents de moto souvent plus graves ; savoir réagir comme premier témoin peut limiter les séquelles, voire sauver une vie. Aucune réglementation ne conditionne la conduite d'une moto à une formation aux premiers secours, et connaître ces gestes ne remplace jamais l'appel aux secours professionnels.",
      "difficulte": 1
    },
    {
      "id": "SEC-0097",
      "theme": "secours",
      "enonce": "Sur les lieux d'un accident de la route, parmi les actions suivantes, lesquelles correspondent à des gestes de premiers secours réellement enseignés en formation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour dégager rapidement la chaussée"
        },
        {
          "id": "b",
          "texte": "Arrêter une hémorragie par compression"
        },
        {
          "id": "c",
          "texte": "Installer un dispositif de signalisation pour sécuriser la zone"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Arrêter une hémorragie et signaler la zone accidentée (triangle, gilet, feux de détresse) sont des gestes de secourisme routier de base, liés aux étapes Protéger et Secourir. Accélérer pour dégager la chaussée n'est pas un geste de secours : une manœuvre précipitée sur les lieux d'un accident augmente au contraire le risque de sur-accident.",
      "difficulte": 2
    },

    /* ---------- ENVIRONNEMENT ET ÉCO-CONDUITE — ebook (52) ---------- */
    {
      "id": "ENV-0010",
      "theme": "environnement",
      "enonce": "Vous roulez sur une route de montagne sinueuse, sous une pluie battante, quand un chevreuil surgit sur la chaussée. Parmi les facteurs suivants, lesquels relèvent des éléments NATURELS de l'environnement, à distinguer des éléments socio-économiques ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La pluie, qui réduit l'adhérence des pneus"
        },
        {
          "id": "b",
          "texte": "Les virages successifs liés au relief de la route"
        },
        {
          "id": "c",
          "texte": "La présence du chevreuil sur la chaussée"
        },
        {
          "id": "d",
          "texte": "La densité de circulation sur cet axe routier"
        }
      ],
      "bonnesReponses": [
        "a",
        "b",
        "c"
      ],
      "explication": "Les éléments naturels de l'environnement regroupent la météo (pluie, brouillard, neige, forte chaleur), la topographie (montées, descentes, virages) et la faune : ces trois facteurs imposent d'adapter votre vitesse et votre trajectoire. La densité de circulation appartient en revanche aux éléments socio-économiques, car elle dépend de l'activité humaine et non du milieu naturel.",
      "difficulte": 2
    },
    {
      "id": "ENV-0011",
      "theme": "environnement",
      "enonce": "Vous circulez à moto sur une petite route de campagne bordée de champs et de bois. Quel danger devez-vous particulièrement anticiper dans ce type d'environnement rural ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un embouteillage aux heures de pointe"
        },
        {
          "id": "b",
          "texte": "La traversée soudaine d'un animal sauvage"
        },
        {
          "id": "c",
          "texte": "Un feu tricolore mal réglé"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En zone rurale, la faune environnante constitue un risque naturel majeur : un animal peut surgir sans prévenir et provoquer une chute ou une collision. Les embouteillages et les feux tricolores défaillants sont des problématiques typiquement urbaines, liées à la densité de circulation et aux infrastructures, pas à la faune.",
      "difficulte": 1
    },
    {
      "id": "ENV-0012",
      "theme": "environnement",
      "enonce": "En traversant un centre-ville aux heures de pointe, avec une circulation très dense, comment devez-vous adapter votre conduite à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "En vous relâchant, la lenteur du trafic laissant plus de temps de réaction"
        },
        {
          "id": "b",
          "texte": "En roulant en interfile sans réduire votre attention"
        },
        {
          "id": "c",
          "texte": "En augmentant votre vigilance et votre anticipation face aux autres véhicules"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Une forte densité de circulation multiplie les interactions avec les autres usagers et donc les risques de manœuvres imprévues : elle exige davantage de vigilance et d'anticipation, pas moins. Penser que le trafic dense permet de se détendre, ou circuler entre les files sans y prêter attention, expose directement à l'accident.",
      "difficulte": 1
    },
    {
      "id": "ENV-0013",
      "theme": "environnement",
      "enonce": "Pourquoi devez-vous tenir compte de l'état du revêtement et de la qualité de la signalisation sur la route que vous emprunterez à moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce que l'état de la route n'a aucune incidence sur la conduite d'une moto"
        },
        {
          "id": "b",
          "texte": "Pour adapter votre vitesse et votre freinage à la qualité de la chaussée"
        },
        {
          "id": "c",
          "texte": "Parce qu'une bonne signalisation permet de mieux anticiper les dangers"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Les infrastructures routières font partie des éléments socio-économiques de l'environnement : une chaussée dégradée impose de revoir sa vitesse et son freinage, tandis qu'une signalisation claire aide à anticiper virages, obstacles ou intersections. Affirmer que l'état de la route est sans incidence est faux : à moto, un revêtement médiocre ou un défaut de signalisation augmente nettement le risque de chute.",
      "difficulte": 2
    },
    {
      "id": "ENV-0014",
      "theme": "environnement",
      "enonce": "Un piéton s'engage sur un passage protégé tandis qu'un cycliste change brusquement de file juste devant vous. Quelle attitude devez-vous adopter à moto face à ce type de situation ?",
      "media": "images/photo-passage-pietons.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer pour dépasser rapidement la zone à risque"
        },
        {
          "id": "b",
          "texte": "Anticiper les mouvements imprévisibles des piétons, cyclistes et autres véhicules"
        },
        {
          "id": "c",
          "texte": "Ignorer ces usagers tant qu'ils ne sont pas directement sur votre trajectoire"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La sécurité à moto impose une attention constante aux comportements des autres usagers, en particulier les plus vulnérables comme les piétons et les cyclistes, dont les mouvements peuvent être soudains. Accélérer pour « passer vite » ou ignorer les usagers qui ne sont pas encore sur votre trajectoire augmente au contraire le risque de collision, car leur trajectoire peut changer à tout moment.",
      "difficulte": 1
    },
    {
      "id": "ENV-0015",
      "theme": "environnement",
      "enonce": "Une zone traversée par une route a perdu une grande partie de sa végétation (arbres, plantes). En tant que motard, quel risque cela peut-il faire peser sur la chaussée que vous empruntez ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une réduction du nombre de virages sur l'itinéraire"
        },
        {
          "id": "b",
          "texte": "Un risque accru de glissements de terrain pouvant obstruer la chaussée"
        },
        {
          "id": "c",
          "texte": "Une amélioration de l'adhérence du revêtement par temps de pluie"
        },
        {
          "id": "d",
          "texte": "Un risque accru d'inondations pouvant endommager la route"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Les écosystèmes jouent un rôle d'équilibre : les arbres et la végétation fixent le sol et régulent l'écoulement des eaux. Quand ils disparaissent, le sol devient instable et l'eau s'évacue moins bien, ce qui augmente le risque de glissements de terrain et d'inondations pouvant endommager ou obstruer la route. Cela n'améliore en rien l'adhérence de la chaussée ni le tracé des virages, qui dépendent uniquement de la conception et de l'entretien de l'infrastructure.",
      "difficulte": 2
    },
    {
      "id": "ENV-0016",
      "theme": "environnement",
      "enonce": "Sur un itinéraire forestier, vous apercevez un ouvrage spécialement construit pour permettre aux animaux sauvages de franchir la route (passerelle ou tunnel dédié). Quel est l'intérêt principal de cet aménagement pour votre sécurité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Accélérer la migration des espèces vers de nouveaux territoires"
        },
        {
          "id": "b",
          "texte": "Remplacer la signalisation de danger animaux sur ce tronçon"
        },
        {
          "id": "c",
          "texte": "Réduire les collisions entre véhicules et animaux sauvages"
        },
        {
          "id": "d",
          "texte": "Élargir la chaussée pour faciliter le dépassement"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un passage à faune (écoduc, passerelle ou tunnel) permet aux animaux sauvages de traverser une route sans jamais croiser la circulation, ce qui réduit directement le risque de collision, particulièrement dangereux à moto. Il n'a pas pour effet d'accélérer les migrations, ne remplace pas la signalisation de danger qui reste nécessaire sur le tronçon, et n'a aucun rapport avec la largeur de la chaussée.",
      "difficulte": 1
    },
    {
      "id": "ENV-0017",
      "theme": "environnement",
      "enonce": "On qualifie parfois certains projets d'aménagement routier d'\"urbanisme neutre en biodiversité\". Qu'est-ce que cela signifie concrètement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Végétaliser systématiquement les bas-côtés avec des essences exotiques"
        },
        {
          "id": "b",
          "texte": "Concevoir les nouvelles infrastructures pour qu'elles n'aient pas d'impact sur la biodiversité locale"
        },
        {
          "id": "c",
          "texte": "Limiter la vitesse à 30 km/h sur tous les tronçons proches d'espaces naturels"
        },
        {
          "id": "d",
          "texte": "Supprimer l'éclairage public sur les axes traversant des zones naturelles"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'urbanisme neutre en biodiversité consiste à concevoir et implanter les nouvelles infrastructures (routes, échangeurs, etc.) de manière à ce qu'elles n'aient pas d'impact négatif sur la faune et la flore locales. Ce principe ne concerne ni le choix d'essences végétales importées, ni une limitation de vitesse générale, ni l'éclairage public, qui sont des mesures distinctes sans lien direct avec ce principe d'aménagement.",
      "difficulte": 2
    },
    {
      "id": "ENV-0018",
      "theme": "environnement",
      "enonce": "Vous roulez sur une route de campagne et croisez un panneau de danger annonçant un passage d'animaux sauvages. Quelle attitude devez-vous adopter ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ce panneau signale uniquement la présence d'un parc animalier à visiter"
        },
        {
          "id": "b",
          "texte": "Redoubler de vigilance et être prêt à ralentir, notamment en zone forestière ou rurale"
        },
        {
          "id": "c",
          "texte": "S'arrêter obligatoirement pendant 30 secondes avant de poursuivre"
        },
        {
          "id": "d",
          "texte": "Anticiper une possible traversée d'animaux et adapter votre vitesse"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Ce panneau de danger signale un risque réel de traversée d'animaux, fréquent près des forêts ou en zone rurale : il faut redoubler de vigilance, anticiper et adapter sa vitesse pour pouvoir s'arrêter si un animal surgit sur la chaussée. Il n'impose aucun arrêt systématique et ne concerne en rien un parc animalier, qui relève d'une signalisation touristique différente.",
      "difficulte": 2
    },
    {
      "id": "ENV-0019",
      "theme": "environnement",
      "enonce": "Avant de tracer un nouvel itinéraire, les services chargés de l'aménagement routier réalisent des études pour éviter certaines zones naturelles fragiles. Quel est l'objectif principal de cette précaution ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Réduire uniquement le coût de construction de la route"
        },
        {
          "id": "b",
          "texte": "Raccourcir le temps de trajet des usagers"
        },
        {
          "id": "c",
          "texte": "Éviter d'avoir à installer une signalisation de danger animaux"
        },
        {
          "id": "d",
          "texte": "Limiter l'impact sur la biodiversité et préserver la durabilité des écosystèmes locaux"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "Éviter les zones écologiquement sensibles dès la phase d'étude permet de préserver les habitats naturels et de limiter l'impact des infrastructures sur la biodiversité locale, condition nécessaire à des écosystèmes durables. Ce choix n'est pas motivé par le coût des travaux, le temps de trajet des usagers, ni par une volonté de s'affranchir de la signalisation animaux, qui reste installée partout où un risque de faune sauvage persiste.",
      "difficulte": 1
    },
    {
      "id": "ENV-0020",
      "theme": "environnement",
      "enonce": "Parmi les éléments suivants, lesquels comptent parmi les principales causes du réchauffement climatique lié à l'activité humaine ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La production d'électricité à partir du soleil et du vent"
        },
        {
          "id": "b",
          "texte": "Les émissions de CO2 issues des véhicules à moteur (voitures, motos, poids lourds)"
        },
        {
          "id": "c",
          "texte": "Les campagnes de reboisement menées à grande échelle"
        },
        {
          "id": "d",
          "texte": "Les activités industrielles fortement émettrices de gaz à effet de serre"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Le changement climatique résulte surtout de l'accumulation de gaz à effet de serre issus de la combustion d'énergies fossiles, que ce soit par les véhicules ou par l'industrie. Le reboisement absorbe du CO2 et limite donc le phénomène plutôt que de l'aggraver, et la production d'électricité renouvelable (solaire, éolien) n'émet quasiment pas de gaz à effet de serre : ce sont des solutions, pas des causes.",
      "difficulte": 1
    },
    {
      "id": "ENV-0021",
      "theme": "environnement",
      "enonce": "À moto, quel style de conduite augmente le plus vos émissions de CO2 ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une conduite à allure régulière, en anticipant les ralentissements"
        },
        {
          "id": "b",
          "texte": "Une succession d'accélérations franches suivies de freinages appuyés"
        },
        {
          "id": "c",
          "texte": "L'utilisation d'un carburant moins polluant comme un biocarburant"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les à-coups (accélérations brusques, freinages soudains) font consommer davantage de carburant et donc rejeter plus de CO2. À l'inverse, rouler à allure stable en anticipant le trafic, ou utiliser un carburant moins polluant, sont des pratiques qui réduisent l'empreinte carbone de votre moto.",
      "difficulte": 2
    },
    {
      "id": "ENV-0022",
      "theme": "environnement",
      "enonce": "Un entretien régulier de votre moto (pression des pneus, vidanges, filtres) a-t-il une influence sur ses émissions de CO2 ?",
      "media": "images/photo-pneu-use.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Non, l'entretien n'a aucun effet sur les émissions"
        },
        {
          "id": "b",
          "texte": "Oui, un bon entretien augmente les émissions de CO2"
        },
        {
          "id": "c",
          "texte": "Oui, un bon entretien réduit les émissions de CO2"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Un moteur bien entretenu (pneus à bonne pression, filtres propres, vidanges à jour) fonctionne de façon plus efficace et consomme moins de carburant, ce qui réduit ses émissions de CO2. L'entretien a donc un effet réel, et non nul comme le suggère une des propositions. Négliger l'entretien produit l'effet inverse : une surconsommation et davantage de rejets polluants.",
      "difficulte": 1
    },
    {
      "id": "ENV-0023",
      "theme": "environnement",
      "enonce": "La fonte des glaces et la montée du niveau des mers, liées au changement climatique, exposent particulièrement les zones littorales à quel risque ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une baisse générale du niveau des océans"
        },
        {
          "id": "b",
          "texte": "Un risque accru de submersion et d'inondation"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "En faisant fondre les glaciers et calottes polaires, le réchauffement climatique élève le niveau des mers. Cela accroît le risque de submersion et d'inondation des zones côtières, l'inverse de ce qu'affirme l'autre proposition : le niveau des océans augmente, il ne baisse pas.",
      "difficulte": 1
    },
    {
      "id": "ENV-0024",
      "theme": "environnement",
      "enonce": "Parmi les conséquences suivantes, lesquelles sont directement liées au changement climatique ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Une amélioration généralisée de la biodiversité"
        },
        {
          "id": "b",
          "texte": "Une hausse des températures moyennes à l'échelle mondiale"
        },
        {
          "id": "c",
          "texte": "Une multiplication des événements météorologiques extrêmes (sécheresses, inondations, ouragans)"
        },
        {
          "id": "d",
          "texte": "Une perturbation des écosystèmes et une perte de biodiversité"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Le changement climatique se traduit par une hausse des températures, une multiplication des phénomènes extrêmes et une perturbation des écosystèmes qui menace la biodiversité. Il l'appauvrit, il ne l'améliore pas : c'est donc l'inverse de la proposition évoquant une amélioration généralisée.",
      "difficulte": 2
    },
    {
      "id": "ENV-0025",
      "theme": "environnement",
      "enonce": "Quelles habitudes permettent réellement de réduire l'empreinte carbone de votre moto au quotidien ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler avec des pneus sous-gonflés"
        },
        {
          "id": "b",
          "texte": "Rouler à vitesse constante en anticipant les distances de freinage"
        },
        {
          "id": "c",
          "texte": "Multiplier les trajets courts avec redémarrages fréquents du moteur"
        },
        {
          "id": "d",
          "texte": "Privilégier un carburant moins polluant, comme un biocarburant"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Une conduite anticipative à vitesse stable et l'usage de carburants moins polluants limitent la consommation et donc les émissions de CO2. À l'inverse, des pneus sous-gonflés augmentent la résistance au roulement et la consommation, et des trajets courts à moteur froid sont moins efficaces en combustion, donc plus polluants.",
      "difficulte": 2
    },
    {
      "id": "ENV-0026",
      "theme": "environnement",
      "enonce": "Lorsque vous roulez, votre moto rejette différents gaz par le pot d'échappement. Lequel de ces groupes de substances correspond bien aux principaux polluants émis par un véhicule motorisé ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Dioxyde de carbone (CO2), oxydes d'azote (NOx), hydrocarbures non brûlés (HC) et particules fines (PM)"
        },
        {
          "id": "b",
          "texte": "Dioxyde de soufre (SO2), ammoniac (NH3), arsenic (As) et chlore (Cl)"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les gaz d'échappement des véhicules motorisés rejettent principalement du CO2, des oxydes d'azote (NOx), des hydrocarbures non brûlés (HC) et des particules fines (PM). Le dioxyde de soufre, l'ammoniac, l'arsenic et le chlore ne sont pas les polluants caractéristiques d'un pot d'échappement de deux-roues.",
      "difficulte": 1
    },
    {
      "id": "ENV-0027",
      "theme": "environnement",
      "enonce": "Rouler longtemps derrière un flux de circulation dense expose à des concentrations élevées de particules fines. Quel est l'effet réel de ces particules sur la santé ?",
      "media": "images/photo-circulation-file.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Elles provoquent une perte progressive de l'audition"
        },
        {
          "id": "b",
          "texte": "Elles augmentent les troubles respiratoires, les maladies cardiovasculaires et le risque de cancer du poumon"
        },
        {
          "id": "c",
          "texte": "Elles renforcent les défenses immunitaires"
        },
        {
          "id": "d",
          "texte": "Elles favorisent la pousse des cheveux"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les particules fines (PM), comme les oxydes d'azote (NOx), sont responsables de troubles respiratoires, de maladies cardiovasculaires et augmentent le risque de cancer du poumon. Elles n'ont aucun lien avec l'audition, le système immunitaire ou la pousse des cheveux.",
      "difficulte": 1
    },
    {
      "id": "ENV-0028",
      "theme": "environnement",
      "enonce": "Le bruit du moteur d'une moto ne s'arrête pas au niveau des oreilles : il a des répercussions plus larges sur les personnes qui y sont exposées régulièrement. Quelles peuvent être les conséquences de cette pollution sonore ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Des troubles du sommeil"
        },
        {
          "id": "b",
          "texte": "Une perte d'appétit"
        },
        {
          "id": "c",
          "texte": "Du stress et de l'anxiété"
        },
        {
          "id": "d",
          "texte": "Des problèmes auditifs"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "La pollution sonore générée par les moteurs perturbe le sommeil, génère du stress et de l'anxiété, et peut endommager l'audition en cas d'exposition répétée, ce qui nuit à la qualité de vie et à la santé mentale. La perte d'appétit n'est pas un effet reconnu de la pollution sonore.",
      "difficulte": 1
    },
    {
      "id": "ENV-0029",
      "theme": "environnement",
      "enonce": "Les oxydes d'azote (NOx) émis par les moteurs ne restent pas seulement dans l'air : ils retombent ensuite sur les sols et dans les cours d'eau. Quelle est leur véritable conséquence sur l'environnement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Ils stimulent la croissance des cultures agricoles et purifient les cours d'eau"
        },
        {
          "id": "b",
          "texte": "Ils favorisent l'acidification des sols et des plans d'eau et sont à l'origine des pluies acides"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les oxydes d'azote (NOx), associés au dioxyde de soufre (SO2), acidifient les sols et les plans d'eau et provoquent des pluies acides qui abîment les forêts et les zones agricoles. Ils n'ont aucun effet bénéfique sur les cultures ou la qualité de l'eau.",
      "difficulte": 2
    },
    {
      "id": "ENV-0030",
      "theme": "environnement",
      "enonce": "Un motard attentif à son impact environnemental peut agir concrètement sur l'entretien et la conduite de sa machine. Parmi ces comportements, lesquels réduisent réellement l'empreinte écologique d'une moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler avec des pneus usés pour économiser sur leur remplacement"
        },
        {
          "id": "b",
          "texte": "Entretenir régulièrement son véhicule"
        },
        {
          "id": "c",
          "texte": "Choisir des huiles très polluantes mais moins chères"
        },
        {
          "id": "d",
          "texte": "Respecter les limitations de vitesse"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Un entretien régulier, associé à l'usage d'huiles et de carburants moins polluants et au respect des limitations de vitesse, permet de réduire l'empreinte écologique d'une moto. Rouler avec des pneus usés ou choisir des lubrifiants très polluants va au contraire à l'encontre de cet objectif.",
      "difficulte": 1
    },
    {
      "id": "ENV-0031",
      "theme": "environnement",
      "enonce": "Sur la route comme dans la gestion des ressources naturelles utilisées par les transports, quel principe définit une gestion dite « durable » ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Consommer les ressources disponibles le plus rapidement possible pour ne pas être pénalisé par de futures restrictions."
        },
        {
          "id": "b",
          "texte": "Utiliser les ressources de façon raisonnée pour qu'elles restent disponibles pour les générations futures."
        },
        {
          "id": "c",
          "texte": "Privilégier la croissance économique, même si cela accélère l'épuisement des ressources."
        },
        {
          "id": "d",
          "texte": "Réserver l'usage des ressources naturelles aux seuls constructeurs de véhicules."
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La gestion durable consiste à utiliser l'eau, l'énergie et les matériaux renouvelables sans les épuiser, afin de préserver l'écosystème pour l'avenir. Consommer vite (a) ou viser le profit immédiat (c) va à l'encontre de cette logique de préservation, et cette gestion concerne tous les usagers, pas seulement les constructeurs (d).",
      "difficulte": 1
    },
    {
      "id": "ENV-0032",
      "theme": "environnement",
      "enonce": "Pourquoi la conservation des ressources naturelles concerne-t-elle directement un motard ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle vise à protéger et restaurer les ressources pour en garantir la disponibilité sur le long terme."
        },
        {
          "id": "b",
          "texte": "Rouler en moto électrique plutôt qu'en moto essence peut réduire les émissions de gaz à effet de serre."
        },
        {
          "id": "c",
          "texte": "Elle a pour but d'augmenter la consommation de carburant afin de soutenir les raffineries."
        },
        {
          "id": "d",
          "texte": "Elle repose avant tout sur la construction de nouvelles routes pour fluidifier le trafic."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "La conservation protège et restaure les ressources naturelles ; à l'échelle individuelle, choisir une moto électrique plutôt qu'une moto thermique illustre concrètement cette démarche en limitant les émissions de CO2. Augmenter la consommation de carburant (c) ou multiplier les routes (d) n'a aucun lien avec la conservation des ressources.",
      "difficulte": 2
    },
    {
      "id": "ENV-0033",
      "theme": "environnement",
      "enonce": "Quelles pratiques permettent concrètement à un motard de réduire la consommation de carburant de sa moto ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Adopter une conduite souple, sans accélérations ni freinages brusques."
        },
        {
          "id": "b",
          "texte": "Faire entretenir régulièrement sa moto."
        },
        {
          "id": "c",
          "texte": "Rouler avec une pression de pneus plus basse que celle recommandée par le constructeur."
        },
        {
          "id": "d",
          "texte": "Multiplier les trajets courts à froid pour « roder » le moteur plus souvent."
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Une conduite souple et un entretien régulier optimisent la combustion et limitent l'usure, réduisant ainsi la consommation et les émissions. À l'inverse, une sous-pression des pneus (c) augmente la résistance au roulement et donc la consommation, et multiplier les trajets courts à froid (d) n'a aucun effet réducteur.",
      "difficulte": 2
    },
    {
      "id": "ENV-0034",
      "theme": "environnement",
      "enonce": "Pour limiter l'impact environnemental de sa moto, quel type d'énergie ou de carburant un motard doit-il privilégier ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les biocarburants ou une motorisation électrique, plus respectueux de l'environnement que les carburants fossiles classiques."
        },
        {
          "id": "b",
          "texte": "L'essence plombée, dont l'usage reste autorisé pour les motos anciennes."
        },
        {
          "id": "c",
          "texte": "Le gazole non routier, habituellement réservé aux engins agricoles."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les biocarburants et les motos électriques réduisent les émissions polluantes par rapport aux carburants fossiles classiques. L'essence plombée est en réalité interdite à la vente en France depuis le 1er janvier 2000 (b est faux), et le gazole non routier n'est pas destiné aux véhicules circulant sur route comme les motos (c).",
      "difficulte": 1
    },
    {
      "id": "ENV-0035",
      "theme": "environnement",
      "enonce": "Quel dispositif la France a-t-elle mis en place pour encourager une gestion plus durable des ressources dans les transports ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Les Zones à Faibles Émissions (ZFE), associées à des incitations financières pour les véhicules électriques."
        },
        {
          "id": "b",
          "texte": "Des subventions pour l'achat de véhicules diesel."
        },
        {
          "id": "c",
          "texte": "La suppression du contrôle technique pour les deux-roues motorisés."
        },
        {
          "id": "d",
          "texte": "La gratuité générale du carburant pour les usagers professionnels."
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Les ZFE restreignent la circulation des véhicules les plus polluants dans certaines zones, en complément d'aides à l'achat de véhicules électriques : c'est le levier retenu par la France. Les subventions au diesel (b) iraient à l'inverse de cet objectif, et ni la suppression du contrôle technique moto (c, désormais bien réel et généralisé) ni la gratuité du carburant (d) ne relèvent d'une politique de gestion durable des ressources.",
      "difficulte": 2
    },
    {
      "id": "ENV-0036",
      "theme": "environnement",
      "enonce": "Depuis quelle année la norme antipollution Euro 5 s'applique-t-elle aux motos neuves commercialisées en France ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Depuis 2016"
        },
        {
          "id": "b",
          "texte": "Depuis 2020"
        },
        {
          "id": "c",
          "texte": "Depuis 2023"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La norme Euro 5, qui encadre les émissions polluantes des deux-roues motorisés, est en vigueur depuis janvier 2020 pour les nouveaux modèles homologués. 2016 correspond encore à la norme Euro 4, qui l'a précédée, et 2023 est postérieur à son entrée en application réelle.",
      "difficulte": 1
    },
    {
      "id": "ENV-0037",
      "theme": "environnement",
      "enonce": "Parmi les polluants suivants, lesquels la norme Euro 5 limite-t-elle directement pour les motos ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le dioxyde de soufre (SO2)"
        },
        {
          "id": "b",
          "texte": "Les oxydes d'azote (NOx)"
        },
        {
          "id": "c",
          "texte": "Le monoxyde de carbone (CO)"
        },
        {
          "id": "d",
          "texte": "Les particules fines"
        }
      ],
      "bonnesReponses": [
        "b",
        "c",
        "d"
      ],
      "explication": "Euro 5 fixe des seuils maximaux pour les oxydes d'azote, les hydrocarbures, le monoxyde de carbone et les particules fines rejetés par l'échappement des motos. Le dioxyde de soufre n'est pas un polluant ciblé par cette réglementation, centrée sur les résidus de combustion des carburants routiers.",
      "difficulte": 2
    },
    {
      "id": "ENV-0038",
      "theme": "environnement",
      "enonce": "Que désigne le sigle ZFE dans la réglementation française relative à la qualité de l'air ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Zone de Freinage Écologique"
        },
        {
          "id": "b",
          "texte": "Zone à Faibles Émissions"
        },
        {
          "id": "c",
          "texte": "Zone Franche pour l'Électrique"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Une ZFE (zone à faibles émissions) est un périmètre urbain, comme celui mis en place à Paris, où l'accès est restreint pour les véhicules les plus polluants selon leur classification. Les deux autres intitulés proposés n'existent pas dans le code de la route.",
      "difficulte": 1
    },
    {
      "id": "ENV-0039",
      "theme": "environnement",
      "enonce": "Sur quels éléments repose concrètement la restriction d'accès d'une moto à une zone à faibles émissions ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La puissance du moteur exprimée en kilowatts"
        },
        {
          "id": "b",
          "texte": "Le niveau d'émissions polluantes, matérialisé par la vignette Crit'Air"
        },
        {
          "id": "c",
          "texte": "La date de première mise en circulation du véhicule"
        },
        {
          "id": "d",
          "texte": "La cylindrée de la moto"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "L'accès aux ZFE est conditionné par la vignette Crit'Air, elle-même calculée à partir de la norme d'émission respectée par le véhicule et donc de sa date de première immatriculation : plus une moto est ancienne et polluante, plus elle risque d'être interdite d'accès à certains horaires. La puissance en kW et la cylindrée n'entrent pas dans ce classement.",
      "difficulte": 2
    },
    {
      "id": "ENV-0040",
      "theme": "environnement",
      "enonce": "Quel dispositif permet à un motard de bénéficier d'une aide financière de l'État pour remplacer une moto ancienne par un modèle électrique ou moins polluant ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le malus écologique"
        },
        {
          "id": "b",
          "texte": "La prime à la conversion"
        },
        {
          "id": "c",
          "texte": "La taxe sur les certificats d'immatriculation"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La prime à la conversion est une incitation financière et fiscale destinée à encourager le remplacement d'un véhicule polluant par une moto moins polluante ou électrique. Le malus écologique est au contraire une pénalité appliquée à l'achat d'un véhicule très émetteur, et la taxe sur les certificats d'immatriculation correspond aux frais de carte grise, sans lien avec une démarche environnementale.",
      "difficulte": 2
    },
    {
      "id": "ENV-0041",
      "theme": "environnement",
      "enonce": "Concernant la vérification du respect des normes environnementales par les motards, quelles affirmations sont exactes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Le contrôle technique périodique est obligatoire pour les deux-roues motorisés depuis 2024"
        },
        {
          "id": "b",
          "texte": "Les forces de l'ordre peuvent vérifier la conformité environnementale d'une moto lors d'un contrôle routier"
        },
        {
          "id": "c",
          "texte": "Seul le vendeur du véhicule est habilité à vérifier sa conformité aux normes d'émission"
        },
        {
          "id": "d",
          "texte": "La conformité environnementale n'est vérifiée qu'au moment de l'achat de la moto"
        }
      ],
      "bonnesReponses": [
        "a",
        "b"
      ],
      "explication": "Depuis le 15 avril 2024, le contrôle technique périodique des motos et scooters est obligatoire en France, ce qui permet notamment de vérifier le respect des normes d'émission ; les forces de l'ordre peuvent aussi procéder à ce type de vérification lors d'un contrôle routier. Aucune règle ne réserve ce contrôle au seul vendeur, et il ne se limite pas au moment de l'achat.",
      "difficulte": 3
    },
    {
      "id": "ENV-0042",
      "theme": "environnement",
      "enonce": "Sur le plan environnemental, quel est l'intérêt d'entretenir régulièrement votre moto (filtre à air propre, moteur bien réglé, vidanges respectées) ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela permet de rouler plus vite en toute sécurité"
        },
        {
          "id": "b",
          "texte": "Cela limite les émissions de polluants rejetées par le moteur"
        },
        {
          "id": "c",
          "texte": "Cela dispense de faire contrôler le système de freinage"
        },
        {
          "id": "d",
          "texte": "Cela évite uniquement les pannes mécaniques, sans effet sur la pollution"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Un moteur bien réglé, un filtre à air propre et des vidanges suivies permettent une combustion plus complète du carburant, ce qui réduit les émissions de polluants. Cet entretien n'a aucun rapport avec la vitesse ni avec le contrôle des freins, et son effet va bien au-delà de la simple prévention des pannes puisqu'il agit directement sur la pollution émise.",
      "difficulte": 1
    },
    {
      "id": "ENV-0043",
      "theme": "environnement",
      "enonce": "Vous souhaitez adopter une conduite plus respectueuse de l'environnement au guidon de votre moto. Quels comportements devez-vous privilégier ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Anticiper la circulation pour éviter les arrêts et redémarrages inutiles"
        },
        {
          "id": "b",
          "texte": "Multiplier les accélérations franches suivies de freinages brusques"
        },
        {
          "id": "c",
          "texte": "Rouler à une vitesse stable et modérée"
        },
        {
          "id": "d",
          "texte": "Éviter les à-coups d'accélérateur et de frein"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Une conduite éco-responsable repose sur l'anticipation du trafic, une vitesse stable et modérée, et l'absence d'à-coups sur l'accélérateur et le frein : ces habitudes réduisent la consommation de carburant et les émissions polluantes. À l'inverse, enchaîner accélérations franches et freinages brusques augmente la consommation, l'usure et donc la pollution.",
      "difficulte": 2
    },
    {
      "id": "ENV-0044",
      "theme": "environnement",
      "enonce": "Pour réduire l'empreinte carbone liée à l'usage de votre moto, quel type de carburant devriez-vous privilégier ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Un carburant classique à indice d'octane élevé"
        },
        {
          "id": "b",
          "texte": "Un carburant à faible teneur en carbone, comme un biocarburant"
        },
        {
          "id": "c",
          "texte": "Le gazole"
        },
        {
          "id": "d",
          "texte": "Un carburant additivé anti-usure"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Les carburants à faible teneur en carbone, tels que les biocarburants, permettent de réduire l'empreinte carbone de votre moto. Le gazole n'est pas un carburant utilisé sur les motos, et ni un indice d'octane élevé ni un additif anti-usure n'ont d'effet significatif sur les émissions de CO2.",
      "difficulte": 1
    },
    {
      "id": "ENV-0045",
      "theme": "environnement",
      "enonce": "Certains points de vente proposent de récupérer les batteries et pneus usagés de votre moto pour les recycler. Quel est l'intérêt de participer à ces programmes ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Percevoir une rémunération pour chaque pièce déposée"
        },
        {
          "id": "b",
          "texte": "Obtenir automatiquement des pièces neuves gratuites"
        },
        {
          "id": "c",
          "texte": "Réduire les déchets et limiter l'impact sur l'environnement"
        },
        {
          "id": "d",
          "texte": "Profiter d'une réduction sur le prix de l'essence"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "Recycler les batteries et les pneus usagés permet de réduire les déchets et de limiter l'impact environnemental de ces pièces, qui sont polluantes si elles ne sont pas traitées correctement. Ces programmes ne procurent ni argent, ni pièces neuves gratuites, ni avantage sur le prix du carburant.",
      "difficulte": 1
    },
    {
      "id": "ENV-0046",
      "theme": "environnement",
      "enonce": "En tant que motard soucieux de l'environnement, comment pouvez-vous contribuer à sensibiliser votre entourage sur ce sujet ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Participer à des ateliers ou actions de sensibilisation à l'environnement"
        },
        {
          "id": "b",
          "texte": "Éviter tout sujet lié à l'environnement pour ne pas importuner les autres conducteurs"
        },
        {
          "id": "c",
          "texte": "Partager vos connaissances sur l'éco-conduite avec d'autres motards"
        },
        {
          "id": "d",
          "texte": "Modifier le moteur de votre moto pour en augmenter les performances"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "La sensibilisation collective passe par le partage de connaissances entre conducteurs et la participation à des ateliers dédiés à la protection de l'environnement. Rester silencieux sur le sujet ne fait rien avancer, et modifier le moteur pour gagner en performance va généralement à l'encontre de la réduction des émissions polluantes.",
      "difficulte": 2
    },
    {
      "id": "ENV-0047",
      "theme": "environnement",
      "enonce": "Sur le plan environnemental, quels sont les effets réels d'une éco-conduite basée sur l'anticipation et des accélérations/freinages progressifs ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elle réduit la consommation de carburant"
        },
        {
          "id": "b",
          "texte": "Elle permet de rouler plus vite en circulation dense"
        },
        {
          "id": "c",
          "texte": "Elle limite l'usure des pneus et de la mécanique"
        },
        {
          "id": "d",
          "texte": "Elle augmente les émissions de CO2 de la moto"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "Une conduite souple et anticipée (éviter les accélérations et freinages brusques) économise du carburant et ménage les pneus, les freins et la mécanique. Elle ne consiste pas à rouler plus vite - au contraire, elle privilégie une allure régulière - et, en réduisant la consommation, elle diminue les émissions de CO2 plutôt que de les augmenter.",
      "difficulte": 1
    },
    {
      "id": "ENV-0048",
      "theme": "environnement",
      "enonce": "Pourquoi un motard soucieux de l'environnement doit-il vérifier régulièrement la pression de ses pneus ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Parce qu'un pneu sous-gonflé augmente la résistance au roulement et donc la consommation de carburant"
        },
        {
          "id": "b",
          "texte": "Parce qu'une pression plus élevée permet de dépasser la vitesse maximale autorisée"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un pneu sous-gonflé accroît la résistance au roulement : le moteur doit fournir plus d'efforts, ce qui augmente la consommation de carburant et les émissions associées. La pression des pneus n'a aucun lien avec la vitesse maximale autorisée, fixée par le code de la route et non par le gonflage des pneus.",
      "difficulte": 1
    },
    {
      "id": "ENV-0049",
      "theme": "environnement",
      "enonce": "Entre une moto à moteur thermique et une moto électrique de puissance comparable, laquelle limite le plus les émissions de CO2 lors de la circulation ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "La moto à essence"
        },
        {
          "id": "b",
          "texte": "La moto électrique"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "La moto électrique ne brûle pas de carburant fossile pendant son usage et n'émet donc pas de CO2 à l'échappement, contrairement à une moto à essence. C'est pourquoi les motorisations électriques sont présentées comme un levier majeur de réduction des émissions dans une démarche de développement durable.",
      "difficulte": 1
    },
    {
      "id": "ENV-0050",
      "theme": "environnement",
      "enonce": "Quelles pratiques permettent réellement de prolonger la durée de vie d'une moto tout en limitant son impact environnemental ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Reporter les révisions le plus longtemps possible"
        },
        {
          "id": "b",
          "texte": "Effectuer un entretien régulier du véhicule"
        },
        {
          "id": "c",
          "texte": "N'accepter que des pièces neuves, jamais de pièces recyclées"
        },
        {
          "id": "d",
          "texte": "Privilégier des pièces détachées recyclées ou écologiques lors des réparations"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "Un entretien régulier préserve l'efficacité énergétique et la longévité de la moto, et le choix de pièces recyclées ou écologiques limite l'impact environnemental des réparations. Reporter les révisions accélère au contraire l'usure et les pannes, et exclure systématiquement les pièces recyclées va à l'encontre de la logique de développement durable.",
      "difficulte": 2
    },
    {
      "id": "ENV-0051",
      "theme": "environnement",
      "enonce": "En quoi planifier son itinéraire pour éviter les embouteillages s'inscrit-il dans une conduite moto respectueuse de l'environnement ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Cela permet surtout de profiter davantage des paysages traversés"
        },
        {
          "id": "b",
          "texte": "Cela réduit la durée du trajet et donc la consommation de carburant liée aux arrêts et redémarrages"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Un itinéraire optimisé permet d'éviter les zones d'embouteillages et de réduire le temps de parcours, ce qui limite les phases d'arrêt-redémarrage particulièrement consommatrices de carburant, donc les émissions polluantes. Le confort visuel du trajet n'est pas le critère retenu par la démarche de développement durable, qui vise l'efficacité énergétique.",
      "difficulte": 2
    },
    {
      "id": "ENV-0052",
      "theme": "environnement",
      "enonce": "Un motard installe des panneaux photovoltaïques chez lui pour recharger sa moto électrique. Quelle énergie renouvelable exploite-t-il ainsi ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Énergie hydraulique"
        },
        {
          "id": "b",
          "texte": "Énergie solaire"
        },
        {
          "id": "c",
          "texte": "Énergie éolienne"
        },
        {
          "id": "d",
          "texte": "Biomasse"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "L'énergie solaire est captée par des panneaux photovoltaïques, qui convertissent directement la lumière du soleil en électricité. L'éolien exploite la force du vent, l'hydraulique celle de l'eau, et la biomasse la combustion de matières organiques : ce sont des principes physiques différents, sans lien avec le rayonnement solaire.",
      "difficulte": 1
    },
    {
      "id": "ENV-0053",
      "theme": "environnement",
      "enonce": "Par rapport aux énergies fossiles, quels sont réellement des atouts des énergies renouvelables ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Elles sont inépuisables à l'échelle humaine"
        },
        {
          "id": "b",
          "texte": "Elles coûtent forcément plus cher à produire"
        },
        {
          "id": "c",
          "texte": "Elles génèrent peu de déchets et de polluants"
        },
        {
          "id": "d",
          "texte": "Elles aident à réduire les émissions de gaz à effet de serre"
        }
      ],
      "bonnesReponses": [
        "a",
        "c",
        "d"
      ],
      "explication": "Les énergies renouvelables se régénèrent plus vite qu'elles ne sont consommées, ce qui les rend pratiquement inépuisables, tout en produisant peu de déchets et de polluants et en limitant les émissions de gaz à effet de serre par rapport aux combustibles fossiles. Elles ne sont pas systématiquement plus coûteuses : les coûts des filières solaire et éolienne ont fortement baissé avec le développement des technologies.",
      "difficulte": 2
    },
    {
      "id": "ENV-0054",
      "theme": "environnement",
      "enonce": "Comment un motard peut-il concrètement participer à la transition énergétique ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "En roulant systématiquement à pleine vitesse"
        },
        {
          "id": "b",
          "texte": "En optant pour une moto électrique rechargée avec une énergie renouvelable"
        },
        {
          "id": "c",
          "texte": "En soutenant l'installation de bornes de recharge alimentées en énergie renouvelable"
        },
        {
          "id": "d",
          "texte": "En privilégiant uniquement les motos essence les plus puissantes"
        }
      ],
      "bonnesReponses": [
        "b",
        "c"
      ],
      "explication": "Un motard contribue à la transition énergétique en choisissant une moto électrique rechargée grâce à une source d'énergie renouvelable, et en encourageant le déploiement de bornes de recharge alimentées par ces énergies dans les infrastructures publiques. Rouler vite ou privilégier des motos essence puissantes n'a aucun effet positif sur la réduction de l'empreinte carbone du transport.",
      "difficulte": 2
    },
    {
      "id": "ENV-0055",
      "theme": "environnement",
      "enonce": "Quelle énergie renouvelable est captée par des éoliennes qui transforment l'énergie cinétique du vent en électricité ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Énergie solaire"
        },
        {
          "id": "b",
          "texte": "Énergie hydraulique"
        },
        {
          "id": "c",
          "texte": "Énergie géothermique"
        },
        {
          "id": "d",
          "texte": "Énergie éolienne"
        }
      ],
      "bonnesReponses": [
        "d"
      ],
      "explication": "L'énergie éolienne est produite par la force du vent : les éoliennes transforment cette énergie cinétique en électricité grâce à leurs pales reliées à un générateur. Le solaire capte la lumière du soleil, l'hydraulique la force de l'eau et la géothermie la chaleur du sous-sol terrestre, trois mécanismes distincts qui ne reposent pas sur le vent.",
      "difficulte": 1
    },
    {
      "id": "ENV-0056",
      "theme": "environnement",
      "enonce": "Bois de chauffage et déchets agricoles transformés en énergie par combustion ou méthanisation : de quelle énergie renouvelable s'agit-il ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Biomasse"
        },
        {
          "id": "b",
          "texte": "Énergie hydraulique"
        },
        {
          "id": "c",
          "texte": "Énergie géothermique"
        },
        {
          "id": "d",
          "texte": "Énergie solaire"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "La biomasse consiste à utiliser des matières organiques, comme le bois ou les déchets agricoles, pour produire de l'énergie par combustion ou par méthanisation. L'eau (hydraulique), la chaleur du sous-sol (géothermie) et le rayonnement solaire sont d'autres sources renouvelables, mais elles ne reposent pas sur la transformation de matière organique.",
      "difficulte": 1
    },
    {
      "id": "ENV-0057",
      "theme": "environnement",
      "enonce": "Quel est le principal intérêt, pour un motard, de porter des équipements réfléchissants et de rouler avec ses feux de croisement allumés ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Être repéré plus tôt par les autres usagers de la route"
        },
        {
          "id": "b",
          "texte": "Suivre une tendance vestimentaire"
        },
        {
          "id": "c",
          "texte": "Se protéger du vent et du froid"
        },
        {
          "id": "d",
          "texte": "Éviter une amende en cas de contrôle routier"
        }
      ],
      "bonnesReponses": [
        "a"
      ],
      "explication": "Un motard doit avant tout chercher à être repéré par les autres usagers, en particulier par faible luminosité : équipements réfléchissants et feux de croisement allumés améliorent sa détection visuelle et réduisent le risque de collision. Ce n'est ni une question d'esthétique ni de protection contre le froid, et aucune sanction n'est prévue en France pour l'absence de gilet réfléchissant sur une moto.",
      "difficulte": 1
    },
    {
      "id": "ENV-0058",
      "theme": "environnement",
      "enonce": "À propos de l'intervalle de sécurité qu'un motard doit conserver avec le véhicule qui le précède, quelles affirmations sont correctes ?",
      "media": "images/distance-securite.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Il se mesure toujours en un nombre fixe de mètres, quelle que soit la vitesse"
        },
        {
          "id": "b",
          "texte": "Il correspond à un intervalle minimal d'environ deux secondes"
        },
        {
          "id": "c",
          "texte": "Il n'est obligatoire qu'en dehors des agglomérations"
        },
        {
          "id": "d",
          "texte": "Il doit être augmenté sur chaussée mouillée ou glissante"
        }
      ],
      "bonnesReponses": [
        "b",
        "d"
      ],
      "explication": "L'intervalle de sécurité s'exprime en temps, environ deux secondes derrière le véhicule précédent, ce qui adapte automatiquement la distance réelle à la vitesse. Il doit être augmenté dès que l'adhérence diminue, notamment par temps de pluie. Il ne se traduit donc pas par un nombre de mètres fixe et s'applique en toute circonstance, y compris en agglomération.",
      "difficulte": 2
    },
    {
      "id": "ENV-0059",
      "theme": "environnement",
      "enonce": "Comment un motard doit-il adapter sa conduite lorsque la chaussée devient glissante sous la pluie ?",
      "media": "images/photo-pluie-route.jpg",
      "propositions": [
        {
          "id": "a",
          "texte": "Rouler au centre de la voie pour éviter les flaques"
        },
        {
          "id": "b",
          "texte": "Réduire sa vitesse et renforcer sa vigilance"
        },
        {
          "id": "c",
          "texte": "Accélérer pour traverser plus vite les zones dangereuses"
        },
        {
          "id": "d",
          "texte": "Serrer le frein avant plus fort qu'en temps sec pour compenser la perte d'adhérence"
        }
      ],
      "bonnesReponses": [
        "b"
      ],
      "explication": "Sur route mouillée, l'adhérence des pneus diminue fortement : le motard doit ralentir et rester attentif aux flaques, marquages et plaques métalliques glissantes. Accélérer ou serrer excessivement le frein avant augmente au contraire le risque de perte d'adhérence et de chute, et rouler au centre de la voie n'apporte aucune garantie de sécurité.",
      "difficulte": 1
    },
    {
      "id": "ENV-0060",
      "theme": "environnement",
      "enonce": "Un motard approche d'un passage piéton où des piétons sont déjà en train de traverser. Que doit-il faire ?",
      "media": "images/danger-passage-pietons.svg",
      "propositions": [
        {
          "id": "a",
          "texte": "Céder le passage aux piétons déjà engagés sur la chaussée"
        },
        {
          "id": "b",
          "texte": "Accélérer pour dégager le passage avant qu'ils ne s'engagent davantage"
        },
        {
          "id": "c",
          "texte": "Ralentir suffisamment pour pouvoir s'arrêter si nécessaire"
        },
        {
          "id": "d",
          "texte": "Klaxonner pour inciter les piétons à se dépêcher"
        }
      ],
      "bonnesReponses": [
        "a",
        "c"
      ],
      "explication": "À l'approche d'un passage piéton, le motard doit réduire sa vitesse pour pouvoir s'arrêter et céder le passage aux piétons déjà engagés sur la chaussée, une priorité imposée par le code de la route. Accélérer pour les devancer ou klaxonner pour les presser sont des comportements dangereux et non conformes à la réglementation.",
      "difficulte": 2
    },
    {
      "id": "ENV-0061",
      "theme": "environnement",
      "enonce": "En circulation urbaine, quelle attitude un motard doit-il adopter envers les autres usagers de la route ?",
      "media": null,
      "propositions": [
        {
          "id": "a",
          "texte": "Adopter la même allure que sur autoroute"
        },
        {
          "id": "b",
          "texte": "Se concentrer uniquement sur les autres véhicules motorisés"
        },
        {
          "id": "c",
          "texte": "Rester attentif aux piétons, aux véhicules et respecter la signalisation lumineuse"
        },
        {
          "id": "d",
          "texte": "Ne ralentir que lorsqu'un feu passe au rouge"
        }
      ],
      "bonnesReponses": [
        "c"
      ],
      "explication": "En agglomération, l'environnement est plus complexe qu'ailleurs : piétons, véhicules et feux tricolores se multiplient, ce qui impose une vigilance globale et le respect strict de la signalisation lumineuse. Se limiter aux seuls véhicules motorisés, ignorer les feux tant qu'ils ne sont pas rouges, ou conserver une allure d'autoroute exposent à un risque accru d'accident.",
      "difficulte": 1
    }

  ]
};
