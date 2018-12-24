$(document).ready(function() {

    var words = ["Alligator", "Anemon", "Angelfish", "Anole", "Anteater", "Antelope", "Antelope", "Ape", "Badger", "Bear", "Bear", "Bearde", "Beetle", "Bird", "Bison", "Boa", "Borer", "Camel", "Capybara", "Caracal", "Cardinal", "Caribou", "Ca", "Caterpillar", "Caterpillar", "Chameleon", "Cheetah", "Chimpanze", "Cougar", "Crane", "Crane", "Darter", "Ding", "Do", "Dolphin", "Donkey", "Dragonfly", "Eagle", "Egret", "Egret", "Elan", "Elephant", "Emu", "Firefinch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Frog", "Fulgorid", "Gemsbok", "Giraffe", "Goat", "Goatfish", "Grasshopper", "Guine", "Hamlet", "Hare", "Hippopotamus", "Hornbill", "Hornbill", "Horse", "Ibis", "Iguana", "Impala", "Jackrabbit", "Jaguar", "Jay", "Kangaroo", "Katydid", "Koala", "Kookaburra", "Lechwe", "Lemur", "Lemur", "Leopard", "Lion", "Lizard", "Lizard", "Lizard", "Locust", "Longclaw", "Lovebird", "Macaw", "Mandrill", "Mantis", "Marmo", "Mastigodryas", "Monkey", "Monkey", "Ocelo", "Octopus", "Oedemera", "Orca", "Owl", "Owl", "Panda", "Pelican", "Pig", "Pony", "Puffi", "Raccoo", "Raven", "Rhinoceros", "Sheep", "Sheep", "Sheep", "Skink", "Snake", "Snake", "Spanis", "Sparrowhawk", "Squid", "Squirrel", "Squirrel", "Starling", "Stork", "Stork", "Sunfish", "Swan", "Tang", "Tayra", "Tiger", "Toad", "Toad", "Tortoise", "Triggerfish", "Trunkfish", "Turkey", "Vulture", "Wallaby", "Walru", "Wapit", "Warthog", "Waterbuck", "Weaver", "Wildebeest", "Wolf", "Wolf", "Zebra"]
    var words = ["adress", "advokat", "affär", "afton", "apelsin", "apparat", "arbetsplats", "arm", "ask", "askkopp", "avdelning", "axel", "ändelse", "åker", "öken", "övning", "bagare", "bakelse", "balkong", "bana", "banan", "bandspelare", "bar", "barnskötare", "bänk", "båt", "berättelse", "bil", "bild", "biljett", "blomma", "blus", "bok", "boll", "brandman", "brevlåda", "bro", "bulle", "buss", "bussförare", "butik", "chaufför", "check", "cigarrett", "citron", "cykel", "dag", "dator", "dörr", "deltagare", "diskbänk", "diskmaskin", "dotter", "dräkt", "duk", "dusch", "elefant", "elev", "expedit", "fabrik", "familj", "far", "farbror", "fax", "färg", "fågel", "fåtölj", "förälder", "förman", "förmiddag", "film", "fisk", "fjärrkontroll", "flaska", "fläkt", "flicka", "fluga", "flygplats", "fot", "fotboll", "fotbollspelare", "frisör", "fru", "frukost", "frukt", "frys", "fysiker", "gaffel", "gardin", "gata", "glass", "gran", "grönsak", "gurka", "hall", "hamn", "hand", "handduk", "handske", "hatt", "händelse", "häst", "hållplats", "högtalare", "hund", "hustru", "hylla", "idé", "idiot", "iranier", "italienare", "jacka", "järnvägsstation", "jordgubbe", "journalist", "jumper", "kaka", "kalender", "kam", "kamera", "kamrat", "karta", "kassa", "kassörska", "kasse", "katt", "källare", "kille", "kiosk", "kjol", "klädhängare", "klänning", "klocka", "kniv", "ko", "kokbok", "kompis", "kopp", "kostym", "kran", "krona", "kropp", "kudde", "kund", "kurs", "kusin", "kvinna", "kyl", "lampa", "lapp", "lägenhet", "läkare", "lärare", "läxa", "låda", "lök", "lucka", "lunch", "madrass", "maka", "make", "mamma", "man", "mangel", "maskin", "matta", "människa", "målare", "månad", "möbel", "mössa", "medicin", "mekaniker", "mening", "minut", "moder", "moder", "morbror", "morgon", "morot", "moster", "mugg", "mun", "musiker", "nagel", "natt", "nyckel", "ordningsman", "ort", "pappa", "paprika", "park", "pärm", "påse", "påve", "peng", "penna", "pennvässare", "person", "personuppgift", "pipa", "plånbok", "pojke", "polis", "post", "rad", "radio", "rand", "räkning", "restaurang", "ring", "rock", "ros", "rot", "sak", "sand", "säng", "servitör", "servitris", "sida", "signal", "sjöman", "skådespelare", "sked", "skillnad", "sko", "skog", "skola", "skomakare", "släkting", "soffa", "sol", "somalier", "sommar", "son", "soppa", "sotare", "spegel", "spis", "stad", "stam", "station", "stereo", "stol", "strand", "strumpa", "svärson", "syster", "tabell", "tand", "tandborste", "tandkräm", "tanke", "tavla", "taxichaufför", "tändare", "tå", "tårta", "te", "teater", "tekniker", "telefon", "telefonsvarare", "teve", "text", "tid", "tidning", "timme", "tjej", "toalett", "toalettstol", "tomat", "tomte", "torktumlare", "trappa", "tröja", "triangel", "tulpan", "turist", "tvättfat", "tvättmaskin", "tvättstuga", "tvål", "vante", "vara", "vägg", "vän", "väska", "våning", "vår", "vårdcentral", "vecka", "verkstad", "video", "villa", "vinter", "ansikte", "apotek", "arbete", "armband", "askfat", "ägg", "äpple", "ärende", "år", "öga", "öra", "badkar", "badrum", "barn", "bälte", "ben", "berg", "besök", "bibliotek", "bilmärke", "block", "bord", "bröd", "brev", "café", "checkhäfte", "dagis", "datum", "element", "exempel", "fängelse", "fönster", "flerfamiljhus", "foto", "frimärke", "glas", "golv", "guld", "hallon", "halsband", "hav", "häfte", "hårstrå", "hem", "hjärta", "huss", "huvud", "intresse", "jobb", "kafé", "kapitel", "kök", "knä", "konto", "kvitto", "land", "lexikon", "meddelande", "namn", "nummer", "område", "ord", "paket", "papper", "par", "pass", "päron", "piano", "plommon", "porto", "pris", "problem", "program", "radergummi", "rum", "salt", "samtal", "schampo", "schema", "skåp", "snöre", "sovrum", "spel", "språk", "ställe", "strykbräde", "strykjärn", "suddgummi", "svar", "syskon", "system", "tak", "täcke", "tåg", "toaletpapper", "torg", "torkskåp", "träd", "tuggummi", "tvättställ", "tyg", "universitet", "vardagsrum", "vatten", "väder"]
    words.sort(function() { return 0.5 - Math.random() });

    var T1Points = 0;
    var T2Points = 0;
    var T3Points = 0;
    var T4Points = 0;
    var T5Points = 0;
    var T6Points = 0;
    
    
    //
    var numberOfTeams = 2;
    
    //
    var currentTeam = "T1";

    //
    var currentRound = 1;
    var numberOfRounds = 3;

    //
    var timer = -1;
    var timerValue = 45;

    // Initialize vibration
    var canVibrate = "vibrate" in navigator || "mozVibrate" in navigator;
    if (canVibrate && !("vibrate" in navigator))
    navigator.vibrate = navigator.mozVibrate;
    
    $(".buttonGroup1 button").on("click", function() {
        // Vibrate on tap
        navigator.vibrate(25);

        // Reset all buttons
        $(".buttonGroup1 button").each(function(){
            $(this).text(this.value);
        })

        // Replace text with bigger text
        $(this).text("")
        $(this).append("<h5>" + this.value + "</h5>")

        // Change variable
        numberOfTeams = this.value;
    });

    $(".buttonGroup2 button").on("click", function() {
        // Vibrate on tap
        navigator.vibrate(25);

        // Reset all buttons
        $(".buttonGroup2 button").each(function(){
            $(this).text(this.value);
        })

        // Replace text with bigger text
        $(this).text("")
        $(this).append("<h5>" + this.value + "</h5>")

        // Change variable
        numberOfRounds = this.value;
    });

    $(".buttonGroup3 button").on("click", function() {
        // Vibrate on tap
        navigator.vibrate(25);

        // Reset all buttons
        $(".buttonGroup3 button").each(function(){
            $(this).text(this.value);
        })

        // Replace text with bigger text
        $(this).text("")
        $(this).append("<h5>" + this.value + "</h5>")

        // Change variable
        timerValue = this.value;
    });

    $("#startButton").click(function(){
        $(".scoreBox").text("Team 1 - Points " + T1Points + " - Round " + currentRound + " / " + numberOfRounds);
        $("#content1").hide()
        $("#content3").show()
    })

    $("#startTurn").click(function(){
        $("#content3").hide()
        $("#content2").show()
        startTurn();
    })

    function startTurn () {
        timer = timerValue;
        $("#timer").text(timer);
        var new_word = words.pop()
        $("#currentWord").text(new_word)
        $("#content2").show()
    }

    $("#correctButton").click(function() {
        switch(currentTeam) {
            case "T1":
                T1Points++;
                $(".scoreBox").text("Team 1 - Points " + T1Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T2":
                T2Points++;
                $(".scoreBox").text("Team 2 - Points " + T2Points + " - Round " + currentRound + " / " + numberOfRounds);
                $("#teamResults2").text("Team 2: " + T2Points + " points");
                break;
            case "T3":
                T3Points++;
                $(".scoreBox").text("Team 3 - Points " + T3Points + " - Round " + currentRound + " / " + numberOfRounds);
                $("#teamResults3").text("Team 3: " + T3Points + " points");
                break;
            case "T4":
                T4Points++;
                $(".scoreBox").text("Team 4 - Points " + T4Points + " - Round " + currentRound + " / " + numberOfRounds);
                $("#teamResults4").text("Team 4: " + T4Points + " points");
                break;
            case "T5":
                T5Points++;
                $(".scoreBox").text("Team 5 - Points " + T5Points + " - Round " + currentRound + " / " + numberOfRounds);
                $("#teamResults5").text("Team 5: " + T5Points + " points");
                break;
            case "T6":
                T6Points++;
                $(".scoreBox").text("Team 6 - Points " + T6Points + " - Round " + currentRound + " / " + numberOfRounds);
                $("#teamResults6").text("Team 6: " + T6Points + " points");
                break;
        }
        var new_word = words.pop()
        $("#currentWord").text(new_word)
    })

    $("#skipButton").click(function() {
        var new_word = words.pop()
        $("#currentWord").text(new_word)
    })

    setInterval(function(){
        if(timer>-1){
            timer = timer - 1;
            $("#timer").text(timer)
            if(timer == -1){
                $("#content2").hide()
                $("#content3").show()
                currentTeam = nextTeam()
            }
        }
    }, 1000);

    function nextTeam() {
        switch(currentTeam) {
            case "T1":
                currentTeam = "T2"
                $(".scoreBox").text("Team 2 - Points " + T2Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T2":
                currentTeam = "T3"
                $(".scoreBox").text("Team 3 - Points " + T3Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T3":
                currentTeam = "T4"
                $(".scoreBox").text("Team 4 - Points " + T4Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T4":
                currentTeam = "T5"
                $(".scoreBox").text("Team 5 - Points " + T5Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T5":
                currentTeam = "T6"
                $(".scoreBox").text("Team 6 - Points " + T6Points + " - Round " + currentRound + " / " + numberOfRounds);
                break;
            case "T6":
                currentTeam = "T7"
                break;
        }
        if (currentTeam.slice(-1) > numberOfTeams){
            currentTeam = "T1";
            $(".scoreBox").text("Team 1 - Points " + T1Points + " - Round " + currentRound + " / " + numberOfRounds);
            $("#teamResults1").text("Team 1: " + T1Points + " points");
            currentRound += 1;
            if(currentRound > numberOfRounds){
                console.log("Game finished")
                finished();
            }
        }
        return currentTeam
    }

    function finished () {
        $("#content3").hide()
        $("#content4").show()
    }
})