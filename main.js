var app = new Vue({
    el: '#root',
    data: {
        isHidden: false,
        clicked: false,
        delete: false,
        choosedRecipe: [],
        pholder: ("Esplora la ricetta!"),
        recipe_001: ("Crema alle mandorle"),
        recipe_002: ("Crema di sedano e patate con funghi porcini"),
        recipe_003: ("Zuppa di fagiolini con le pere"),
        recipe_004: ("Fagottini di verza in salsa di peperoni"),
        recipe_005: ("Risotto rosso con filetto di coniglio"),
        recipe_006: ("Risotto allo zafferano con gamberetti"),
        recipe_007: ("Pasticcio rustico di gramigna"),
        recipe_008: ("Pere al vino rosso"),
        recipe_009: ("Bortsch (Russia)"),
        recipe_010: ("Pot au feu"),
        recipe_011: ("Brasato all’agro della Renania"),
        recipe_012: ("Boeuf Bourguignon"),
        recipe_013: ("Gulash ai peperoni"),
        recipe_014: ("Arrosto di maiale in salsa senape"),
        recipe_015: ("Chili con carne"),
        counterPhotos: 0,
        photos: [
            "slider_1.png",
            "slider_2.png",
            "slider_3.png",
            "slider_4.png"
        ],
        ricette: [{
                id: "recipe_001",
                nome: "Crema alle mandorle",
                ingredienti: "6 fette di pancarrè \n  5 spicchi di aglio \n  1 mazzetto di prezzemolo \n  150g di mandorle macinate \n  1.25 L di brodo di carne \n  1 pizzico di cumino \n  1 pizzico di zafferano \n  4 cucchiai di olio extra vergine d'oliva \n  Sale \n  Pepe",
                procedimento: "Tagliare il pancarré a cubetti. Sbucciare gli spicchi d'aglio e tagliarli a cubetti. Staccare le foglie di prezzemolo e tritarle. Sistemare tutti gli ingredienti, fino allo zafferano compreso, in una unità Ø 20 cm 4 lt., chiuderla con Secuquick softline 20 cm e riscaldare a fuoco massimo fino alla prima finestra \"soft\". Abbassare la fiamma e cuocere a fuoco basso per 5 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere poi Secuquick softline sotto l'acqua corrente e aprirlo.Ridurre la zuppa in purea, aggiungere l'olio extravergine d'oliva ed insaporire con sale e pepe.",
                tempoCottura: "circa 5",
                tempoPreparazione: "10",
                quantita: "6",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_002",
                nome: "Crema di sedano e patate con funghi porcini",
                ingredienti: "400 g di sedano rapa (sedano di Verona) \n  200 g di patate a polpa farinosa \n  150 g di funghi porcini \n  ½ mazzetto di prezzemolo \n  1 rametto di rosmarino \n  600 ml di brodo vegetale \n  2 cucchiaini di burro \n  4 cucchiai di panna da cucina \n  Sale \n  Pepe \n  vino bianco",
                procedimento: "Sbucciare e tagliare a cubetti il sedano rapa e le patate. Pulire i funghi porcini con un pennellino o un panno e tagliarli a cubetti. Staccare le foglie di prezzemolo e tritarle. Sistemare sedano, patate, rosmarino e brodo in una unità Ø 20 cm 3 lt. E chiudere con Secuquick softline 20 cm. Riscaldare a fuoco massimo fino alla prima finestra \"soft\" e proseguire la cottura veloce a fuoco basso per 8 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, riscaldare una padella Arcobaleno 0 20 cm a fuoco massimo fino alla finestra \"carne\". Abbassare il fuoco, aggiungere i funghi a cubetti e rosolarli mescolando. Aggiungere burro e prezzemolo, coprire con il coperchio e cuocere per 2 minuti a fuoco spento. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre il rametto di rosmarino dalla minestra e ridurla in purea. Incorporare la panna ed insaporire, a piacere, con sale, pepe e vino bianco Guarnire la crema con i porcini rosolati e servirla.",
                tempoCottura: "circa 10",
                tempoPreparazione: "30",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_003",
                nome: "Zuppa di fagiolini con le pere",
                ingredienti: "2 cipolle \n  200 g di pancetta affumicata \n  4 cosce di pollo (200 g cad.) \n  300 ml di brodo di pollo \n  ½ mazzetto di santoreggia \n  500 g di fagiolini \n  2 pere mature \n  Sale \n  Pepe",
                procedimento: "Sbucciare le cipolle e tagliarle a cubetti. Tagliare a cubetti anche la pancetta. Disporre entrambe in una unità Ø 24 cm 5 lt., coprirla con il coperchio e riscaldare a fuoco massimo fino alla finestra \"carne\". Togliere il coperchio e rosolare mescolando. Aggiungere le cosce di pollo e il brodo. Chiudere l'unità con Secuquick softline 24 cm. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\" e proseguire la cottura veloce a fuoco basso per 15 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, staccare le foglioline di santoreggia e tritarle. Mondare i fagiolini e spezzarli in tre pezzi. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Aggiungere i fagiolini e la santoreggia e chiudere nuovamente l'unità con secuquick softline. Riscaldare a fuoco massimo fino alla prima finestra \"soft\".",
                tempoCottura: "circa 20",
                tempoPreparazione: "30",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_004",
                nome: "Fagottini di verza in salsa di peperoni",
                ingredienti: "4 foglie di verza grandi sbollentate \n  1 cipolla \n  1/2 mazzetto di crescione \n  200 g di carne trita mista \n  1 cucchiaio di senape in grani \n   2 cucchiai di quark magro o ricotta magra \n  4 cucchiai di pangrattato \n  sale \n  pepe \n  2 peperoni rossi piccoli \n  1 tazza di brodo vegetale \n  50 ml di panna da cucina",
                procedimento: "Distendere le foglie di verza su un canovaccio e asciugarle tamponando, poi tagliare via la costola dura. Sbucciare la cipolla e tagliarla a cubetti; tagliare finemente il crescione. Mescolare cipolla e crescione insieme con carne trita, senape, ricotta e pangrattato. Aggiustare di sale e pepe. Distribuire il composto in modo uniforme sulle foglie di verza. Piegare all'interno i lati delle foglie di verza ed arrotolarle. Adagiare i fagottini di verza nell'inserto forato. Mondare i peperoni e tagliarli a cubetti, metterli in una unità Ø 20 cm 3 lt. insieme con il brodo vegetale ed inserire l'inserto forato nell'unità. Chiuderla con Secuquick softline 20 cm e riscaldare a fuoco massimo fino alla prima finestra \"soft\", poi abbassare la fiamma e cuocere a fuoco basso per 8 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre l'inserto forato con i fagottini di verza e tenerli in caldo. Aggiungere la panna alla salsa, ridurla in purea ed insaporirla.",
                tempoCottura: "circa 8",
                tempoPreparazione: "35",
                quantita: "2",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_005",
                nome: "Risotto rosso con filetto di coniglio",
                ingredienti: "1 cipolla \n  250 g di riso per risotti \n  600 ml di brodo vegetale \n  1 barattolo (400 g) di polpa di pomodoro \n  2 cucchiaini di concentrato di pomodoro \n  1 cucchiaino di miscela d'erbe aromatiche \n  1 mazzetto di basilico \n  4 filetti di coniglio \n  100 ml di panna da cucina \n  70 g di formaggio grana grattugiato \n  Sale \n  Pepe",
                procedimento: "Sbucciare e tagliare a cubetti la cipolla e mescolarla insieme con riso, brodo, pomodori, concentrato di pomodoro e la miscela d'erbe aromatiche in una unità Ø 20 cm 4 It. Chiudere l'unità con Secuquick softline 20 cm. Riscaldare a fuoco massimo fino alla prima finestra \"soft\". Abbassare la fiamma e cuocere a fuoco basso per 7 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, staccare le foglie di basilico e tritarle. Riscaldare una bistecchiera Ø 20 cm a fuoco massimo fino alla finestra \"carne\" ed arrostire i filetti di coniglio, da entrambi i lati, per 4 minuti circa a fuoco basso. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Incorporare il basilico con la panna ed il formaggio grana ed aggiustare di sale e pepe. Servire il risotto insieme con i filetti di coniglio.",
                tempoCottura: "circa 10",
                tempoPreparazione: "20",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_006",
                nome: "Risotto allo zafferano con gamberetti",
                ingredienti: "1 cipolla, 1 spicchio d'aglio \n  200 g di riso per risotti \n  150 g di piselli surgelati \n  100 ml di vino bianco secco \n  250 ml di brodo vegetale \n  250 ml di panna da cucina \n  1 bustina di zafferano \n  1/2 mazzetto di prezzemolo \n  sale \n  pepe",
                procedimento: "Sbucciare una cipolla e uno spicchio d’aglio e tagliarli a cubetti sottili. Mettere entrambi in una unita 0 20 cm 41 e coprirla con il coperchio Riscaldare a fuoco massimo fino alla finestra \"came\". Togliere il coperchio, aggiungere il riso e tostare brevemente a fuoco basso, 250 g di gamberetti crudi, sgusciati 80 g di formaggio grana, grattugiato mescolando. Aggiungere i piselli e il vino e fare evaporare quasi completamente il vino, sempre mescolando. Aggiungere brodo, panna e zafferano e amalgamare bene tutti gli ingredienti. Chiudere l'unità con Secuquick softline 20 cm. Riscaldare a fuoco massimo fino alla prima finestra \"soft\" e cuocere poi a fuoco basso per 7 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo staccare le foglie di prezzemolo e tritarle. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Rimettere l'unità sul fornello ed incorporare i gamberetti con il formaggio grattugiato. Coprire con il coperchio standard e lasciare riposare il risotto per 3 minuti circa, finché i gamberetti abbiano mutato il colore e siano diventati rossi. Cospargere il risotto con il prezzemolo tritato e servire.",
                tempoCottura: "circa 7",
                tempoPreparazione: "20",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_007",
                nome: "Pasticcio rustico di gramigna",
                ingredienti: "200 g di patate \n  2 cipolle \n 250 g di pasta corta (tipo gramigna) \n  300 ml di panna da cucina \n  500 ml di brodo vegetale \n  75 g di formaggio grattugiato (ad esempio \n  Greyerzer o formaggio grana) \n  pepe",
                procedimento: "Sbucciare le patate e tagliarle a cubetti piccoli. Sbucciare anche le cipolle e tagliarle a rondelle sottili. Mettere la pasta con le patate, la panna e il brodo vegetale in una unità Ø 20 cm 4 lt. Chiudere l'unità con Secuquick softline 20 cm. Riscaldare a fuoco massimo fino alla prima finestra \"soft\" e cuocere per 4 minuti a fuocobasso. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, mettere le rondelle di cipolla in una padella Arcobaleno Ø 20 cm e coprirla con il coperchio. Riscaldare a fuoco massimo fino alla finestra \"carne\". Togliere il coperchio e dorare le cipolle, mescolando. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Insaporire con pepe, incorporare metà delle cipolle e cospargere con il formaggio. Coprire l'unità con Navigenio capovolto e gratinare tutto per 8 minuti a regolazione alta. Servire il pasticcio con le cipolle rimaste.",
                tempoCottura: "circa 12",
                tempoPreparazione: "25",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_008",
                nome: "Pere al vino rosso",
                ingredienti: "6 pere piccole sode \n  1/2 baccello di vaniglia \n  750 ml di vino rosso secco \n  250 ml di sciroppo (ad esempio di lamponi o di ribes nero) \n  1/2 stecca di cannella \n  1 chiodo di garofano",
                procedimento: "Sbucciare le pere, tagliare il baccello di vaniglia per il lungo e disporre entrambi, insieme con gli altri ingredienti, in una unità Ø 20 cm 4 lt. Chiudere l'unità con Secuquick softline 20 cm. Riscaldare a fuoco massimo fino alla prima finestra \"soft\". Abbassare la fiamma e cuocere a fuoco basso per 8 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre le pere dall'unità e fare addensare il vino aromatico in modo da ottenere una consistenza sciropposa. Togliere l'unità dal fornello, disporre le pere nello sciroppo e lasciarle raffreddare. Di tanto in tanto scuotere brevemente l'unità oppure girare le pere. ",
                tempoCottura: "circa 8",
                tempoPreparazione: "25",
                quantita: "6",
                classificazione: "",
                macchina: "secuquik",
                tipo: "soft"
            },
            {
                id: "recipe_009",
                nome: "Bortsch (Russia)",
                ingredienti: "2 cipolle \n  200 g di carote \n  800g di barbabietole fresche \n  1kg di petto di manzo \n sale \n pepe \n 2 lt. di brodo di carne \n  2 foglie d'alloro \n  300g di cavolo cappuccio \n  1 peperone rosso \n  750 g di patate a polpa farinosa \n  50g di concentrato di pomodoro \n  4 cucchiai di aceto di vino rosso \n  1 mazzetto di aneto \n  150g di panna da cucina",
                procedimento: "Sbucciare e tagliare a cubetti cipolle, carote e barbabietole. Riscaldare una unità Ø 24 cm 6,5 lt. a fuoco massimo fino alla finestra \"carne\". Rosolare il petto di manzo, aggiungere cipolle e carote e rosolarle bene insieme. Girare la carne ed aggiustare di sale e pepe. Bagnare il tutto brodo di carne ed aggiungere le foglie d'alloro e le barbabietole. Chiudere l'unità con Secuquick softline. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\". Abbassare la fiamma e cuocere a fuoco basso per 40 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mondare il cavolo cappuccio e il peperone e tagliarli a listarelle sottili. Sbucciare le patate e grattugiarle. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Aggiungere la verdura rimasta e le patate e coprire con il coperchio standard. Riscaldare a fuoco massimo fino alla finestra \"verdura\", abbassare il fuoco e terminare la cottura a fuoco basso per 20 minuti. Estrarre la carne e lasciarla raffreddare brevemente. Se necessario, eliminare parte del grasso, tagliare la carne a cubetti e aggiungerla alla zuppa. Incorporare il concentrato di pomodoro ed insaporire il bortsch con sale, pepe ed aceto. Staccare le cimette di aneto e tritarle finemente. Servire il bortsch guarnito con un po' di panna ed aceto.",
                tempoCottura: "circa 40 + 20",
                tempoPreparazione: "80",
                quantita: "8",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_010",
                nome: "Pot au feu",
                ingredienti: "2 mazzetti di odori per brodo \n  2 cipolle \n  2 chiodi di garofano \n  2 foglie d'alloro \n  1.5kg di carne di manzo per bollito \n  2 lt. di brodo di carne \n  2 rametti di timo \n  2 cucchiaini di grani di pepe nero \n  300g di patate \n  4 carote \n  1-2 coste di sedano \n  300g di verza \n  1 gambo di porro \n  sale \n  pepe",
                procedimento: "Mondare gli odori e tagliarli a pezzetti. Sbucciare le cipolle e steccarle con una foglia d'alloro ed un chiodo di garofano. Mettere tutto insieme con la carne, il brodo, il timo ed i grani di pepe in una unità Ø 24 cm 6,5 lt. Chiudere con Secuquick softline. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\", poi abbassare la fiamma e cuocere a fuoco basso per 75 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, sbucciare patate e carote e tagliarle a cubetti grossolani. Mondare verza, porro e sedano e tagliare a pezzetti grossolani. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre la carne e passare il brodo a setaccio. Mettere il brodo, insieme con la verdura preparata nell'unità. Tagliare la carne a pezzetti ed aggiungerla al brodo. Chiudere nuovamente l'unità con Secuquick softline e riscaldare a fuoco massimo fino alla prima finestra \"soft\". Cuocere altri 5 minuti a fuoco basso. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Insaporire la zuppa con sale e pepe.",
                tempoCottura: "circa 60",
                tempoPreparazione: "90",
                quantita: "8",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_011",
                nome: "Brasato all’agro della Renania",
                ingredienti: "1 carota \n  1 cipolla \n  1 costa di sedano \n  150 g di porro \n  2 chiodi di garofano \n  1 foglia d'alloro \n  6 grani di pepe nero \n  6 bacche di ginepro \n  75 ml di aceto di vino rosso \n  500 ml di vino rosso secco \n  1.2 kg di arrosto di manzo (dalla spalla) \n  200 ml di brodo di manzo ristretto \n  amido di mais o di frumento \n  100 ml di panna da cucina \n  100 g di uvetta \n  sale \n  pepe",
                procedimento: "Sbucciare e tagliare a cubetti carota e cipolla. Mondare ed affettare con sedano. Mescolare con gli altri ingredienti, fino al vino rosso compreso, e sistemarvi la carne. Fare marinare la carne in frigorifero per 3 giorni, girandola di tanto in tanto. Riscaldare una unità Ø 24 cm 5 lt. a fuoco massimo fino alla finestra \"carne\". Estrarre la carne dalla marinata ed asciugarla tamponandola. Rosolare a fuoco basso da tutti i lati. Bagnare con la marinata ed il brodo di manzo. Chiudere l'unità con Secuquick softline 24 cm. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\". Abbassare la fiamma e cuocere a fuoco basso per 60 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre la carne ed affettarla. Passare la salsa a setaccio, addensarla leggermente con l'amido ed arricchire con la panna. Aggiungere l'uvetta alla salsa, insaporire e sistemare la carne nella salsa, lasciandola riposare alcuni minuti prima di servire.",
                tempoCottura: "circa 60",
                tempoPreparazione: "80",
                quantita: "6",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_012",
                nome: "Boeuf Bourguignon",
                ingredienti: "1 grossa cipolla \n  4 spicchi d'aglio \n  1 foglia d'alloro \n  3 chiodi di garofano \n  2 rametti di prezzemolo \n  1 rametto di timo \n  750 ml di vino rosso robusto \n  2 cl di brandy \n  800 g di arrosto di manzo (dalla spalla) \n  250 g di cipolline \n  150 g di pancetta a cubetti \n  2 cucchiaini di dado granulare per brodo \n  di carne istantaneo \n  250 g di funghi champignon \n  sale \n  pepe",
                procedimento: "Sbucciare la cipolla e gli spicchi d'aglio e tagliarli a cubetti. Mescolarli con gli altri ingredienti, fino al brandy, e marinarvi la carne di manzo per 3 giorni in frigorifero. Di tanto in tanto girare la carne. Sbucciare le cipolline. Estrarre la carne dalla marinata ed asciugarla tamponando. Passare la marinata a setaccio. Riscaldare una unità Ø 24 cm 5 lt. a fuoco massimo fino alla finestra \"carne\". Rosolare bene salsa la carne da tutti i lati, a fuoco basso. Aggiungere la pancetta, rosolarla brevemente insieme con la carne, quindi aggiungere le cipolline e rosolarle insieme. Bagnare con la marinata e versare il brodo. Chiudere l'unità con Secuquick softline 24 cm. Riscaldare dare a fuoco massimo fino alla prima finestra \"turbo\". Abbassare la fiamma e cuocere a fuoco basso per 45 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, pulire i funghi con un pennellino o un panno e, a seconda della dimensione, tagliarli a metà o in quarti. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre la carne dall'unità e tenerla in caldo. Aggiungere gli champignon alla salsa e fare ridurre della metà. Aggiustare di sale e pepe. Affettare la carne e servirla con la salsa.",
                tempoCottura: "circa 45",
                tempoPreparazione: "65",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_013",
                nome: "Gulash ai peperoni",
                ingredienti: "3 cipolle \n  1 peperone rosso \n  1 peperone giallo \n  1 peperone verde \n  2 pomodori \n  500 g di carne di manzo per gulasch \n  100 ml di vino rosso secco \n  100 ml di brodo di carne ristretto \n  2 cucchiaini di paprica dolce in polvere \n  2 cucchiai di panna da cucina \n  sale \n  pepe",
                procedimento: "Sbucciare le cipolle e tagliarle a cubetti. Mondare i peperoni e tagliarli a cubetti. Sbollentare i pomodori, pelarli e tagliarli a cubetti. Riscaldare una unità Ø 24 cm 3,5 lt. a fuoco massimo fino alla finestra \"carne\" e rosolarvi la carne, in più tornate, a fuoco basso. Nell'ultima tornata rosolare insieme anche le cipolle. Aggiungere i cubetti di peperoni e pomodori, il vino rosso ed il brodo di carne. Incorporare la paprica in polvere e chiudere l'unità con Secuquick softline 24 cm. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\", poi proseguire la cottura veloce a fuoco basso per 30 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Incorporare la panna e aggiustare sale e pepe.",
                tempoCottura: "circa 30",
                tempoPreparazione: "45",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_014",
                nome: "Arrosto di maiale in salsa senape",
                ingredienti: "2 cipolle \n  100 g di carote \n 100 g di sedano \n  1 kg di arrosto di maiale \n  200 ml di brodo di carne \n  100 ml di vino bianco secco \n  2 rametti di dragoncello \n  2-3 cucchiai di senape in grani \n  2 cucchiai di succo di limone \n  sale \n  pepe",
                procedimento: "Sbucciare le cipolle e la verdura e tagliare a cubetti piccoli. Riscaldare una unità Ø 24 cm 3,5 lt. a fuoco massimo fino alla finestra \"carne\". Rosolare l'arrosto di maiale a fuoco basso da tutti i lati, aggiungere cipolle e verdura e rosolarle insieme. Versare il brodo di carne ed il vino ed aggiustare di sale e pepe. Chiudere l'unità con Secuquick softline 24 cm. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\", poi proseguire la cottura veloce a fuoco basso per 40 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Nel frattempo, staccare le foglie di dragoncello e tritarle. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Estrarre la carne dall'unità e ridurre la salsa in purea. Incorporare senape e dragoncello ed insaporire con sale, pepe e succo di limone. Affettare l'arrosto e servirlo con la salsa.",
                tempoCottura: "circa 40",
                tempoPreparazione: "50",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            {
                id: "recipe_015",
                nome: "Chili con carne",
                ingredienti: "600 g di fagioli rossi Kidney secchi \n  4 cipolle \n  4 spicchi d'aglio \n  400 g di carote \n  3 coste di sedano \n  4 peperoncini rossi \n  1 \n 3 kg di carne trita di manzo \n  3 cucchiai di paprica dolce in polvere \n  2 barattoli di polpa di pomodoro (400 g cad.) \n  50 g di concentrato di pomodoro \n  1.5 lt. di brodo di carne \n  200 g di panna da cucina \n  sale \n  pepe",
                procedimento: "Fare ammorbidire i fagioli rossi Kidney in acqua fredda per una notte. Sbucciare e tagliare a cubetti cipolle, aglio e carote. Tagliare il sedano a pezzetti. Eliminare i semi dei peperoncini e tagliarli a cubetti. Riscaldare una unità Ø 24 cm 8 lt. a fuoco massimo fino alla finestra \"carne\" e rosolare la carne trita in più tornate, a fuoco basso, finché non si ‘sbriciola’. Aggiungere cipolle e aglio e rosolarli insieme. Aggiungere la verdura con la paprica in polvere, la polpa e il concentrato di pomodoro e metà dei peperoncini. Bagnare con il brodo, fare sgocciolare i fagioli, sciacquarli brevemente sotto acqua corrente ed aggiungerli. Chiudere l'unità con Secuquick softline 24 cm. Riscaldare a fuoco massimo fino alla prima finestra \"turbo\", poi proseguire la cottura veloce a fuoco basso per 25 minuti circa. Tenere sotto controllo l'intero processo di cottura con Audiotherm. Mettere Secuquick softline sotto l'acqua corrente e aprirlo. Incorporare la panna. Insaporire il chili con sale, pepe, i peperoncini rimasti e il pepe di Cayenna.",
                tempoCottura: "circa 25",
                tempoPreparazione: "50",
                quantita: "4",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            },
            /* {
                nome: "",
                ingredienti: "",
                procedimento: "",
                tempoCottura: "5",
                tempoPreparazione: "",
                quantita: "",
                classificazione: "",
                macchina: "secuquik",
                tipo: "turbo"
            }, */
        ]
    },
    created: function() {
        setInterval(() => {
            this.nextPhoto();
        }, 2000)
    },
    methods: {
        prevPhoto: function() {
            this.counterPhotos--;
            if (this.counterPhotos < 0) {
                this.counterPhotos = (this.photos.length - 1);
            }
        },
        nextPhoto: function() {
            this.counterPhotos++;
            if (this.counterPhotos > this.photos.length - 1) {
                this.counterPhotos = 0;
            }
        },
        clickCircle(index) {
            this.counterPhotos = index;
        },
        clickRecipe() {
            var c = 0;
            if (c % 2 == 0) {
                document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
                c++;
            } else {
                document.querySelector('.cont_modal').className = "cont_modal";
                c++;
            }
        },
        //Ricetta Selezionata:
        selectedRecipe(recipe_id) {
            this.clicked = true;
            //Accesso a elemento che mi serve e la sua posizione:
            this.ricette.forEach((element, index) => {
                if (recipe_id == element.id) {
                    var ricettaSelezionata = element;
                    this.choosedRecipe.push(ricettaSelezionata);
                }
            });
            console.log(this.choosedRecipe);
        },
        //Ricetta eliminata premendo sul pulsante X
        deleteRecipes() {
            this.delete = true;
            this.clicked = false;
            this.choosedRecipe = [];
        }
    }
});