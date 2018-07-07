
$(function () {
// Selectors  
 var pageNav = $('#pageNav'),
     cardCurrentMatch = $("#cardCurrentMatch"),
     currentMatchHomeTeam = $('#currentMatchHomeTeam'),
     currentMatchAwayTeam = $('#currentMatchAwayTeam'),
     currentMatchMinute = $('#currentMatchMinute'),
     currentMatchHomeGoals   =$('#currentMatchHomeGoals'),
     currentMatchHomePenalties  =$('#currentMatchHomePenalties'),
     currentMatchAwayGoals  =$('#currentMatchAwayGoals'),
     currentMatchAwayPenalties  =$('#currentMatchAwayPenalties'),
     currentMatchHomeYellowCards =$('#currentMatchHomeYellowCards'),
     currentMatchHomeRedCards =$('#currentMatchHomeRedCards'),
     currentMatchAwayYellowCards =$('#currentMatchAwayYellowCards'),
     currentMatchAwayRedCards =$('#currentMatchAwayRedCards'),
     cardTemplate = $('#cardTemplate') .html(),
     cardContent =$('#cardContent');

var tabsItems= $('.tabs__item');
var tabsContents = $('.tabs__content');


//Statements
 pageNav.sticky({
//topSpacion: 25,
    zIndex: 10,

});

    var template = Handlebars.compile(cardTemplate);
    


    var setCurrentMatchValues = function(data) {
        //Match 
        var firstMatch = data[0],
            time = firstMatch.time;

        // Home Team
        var homeTeam= firstMatch.home_team.country,
            homeGoals = firstMatch.home_team.goals,
            homePenalties = firstMatch.home_team.penalties,
            homeYellowCards = firstMatch.home_team_statistics.yellow_cards,
            homeRedCards = firstMatch.home_team_statistics.red_cards;
        //Away Team
        var awayTeam= firstMatch.away_team.country,
            awayGoals = firstMatch.away_team.goals,
            awayPenalties = firstMatch.away_team.penalties,
            awayYellowCards = firstMatch.away_team_statistics.yellow_cards,
            awayRedCards = firstMatch.away_team_statistics.red_cards;


        //Set values
        currentMatchHomeTeam.text(homeTeam);
        currentMatchAwayTeam.text(awayTeam);
        currentMatchMinute.text(time);
        currentMatchHomeGoals.text(homeGoals);
        currentMatchHomePenalties.text(homePenalties);
        currentMatchAwayGoals.text(awayGoals);
        currentMatchAwayPenalties.text(awayPenalties);
        currentMatchHomeYellowCards.text(homeYellowCards);
        currentMatchHomeRedCards.text(homeRedCards);
        currentMatchAwayYellowCards.text(awayYellowCards);
        currentMatchAwayRedCards.text(awayRedCards);    

    };

 // Request

 $.ajax('https://worldcup.sfg.io/matches/current', {
    beforeSend: function () {
        cardCurrentMatch.addClass('loading');
    },
    success: function(data) {
        //setCurrentMatchValues(data);
        var myCard = template(data[0]);
        cardContent.append(myCard);
        
    },
    error: function (jqXHR, textStatus,) {
        alert('Sólo se permiten 10 peticiones por minuto'); 
    },
    complete: function () {
        cardCurrentMatch.removeClass('loading');
    }
 })
    //.done(setCurrentMatchValues);

// Lightbox config
lightbox.option({
    albumLabel:"Esta es la imagen %1 de %2",
    disableScrolling: true,
    positionFromTop: 100,
    fadeDuration: 1200,
    imageFadeDuration: 5000,
    wrapAround: true,
});

//Tabs Component
tabsItems.on('click', function() {
    // Se obtiene el número de índece que ocupa el item al que hacemos clic.
    var indexItem = tabsItems.index(this);

    // Se elimina la clase "active" a todos los items.

    tabsItems.removeClass('active');
      // Se elimina la clase "active" a todos los contents.

    tabsContents.removeClass('active');
       // Se añade la clase "active" al Item sobre el que se hace clic.

$(this).addClass('active');
$ (tabsContents [indexItem]).addClass('active');

});
});
