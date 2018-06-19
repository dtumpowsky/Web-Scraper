var request = require('request');
var cheerio = require('cheerio');

//find Outfielder stats from previous day
function getOutFielders() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/OF/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};


//find First Baseman stats from previous day
function getFirstBaseman() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/1B/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find getSecondBaseman stats from previous day
function getSecondBaseman() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/2B/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find Shortstops stats from previous day
function getShortStops() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/SS/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find ThirdBaseman stats from previous day
function getThirdBasemen() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/3B/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find Catcher stats from previous day
function getCatchers() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/OF/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find Designated Hitter stats from previous day
function getDesignatedHitters() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/DH/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var atBats = $(stats).eq(1).text();
        var runs = $(stats).eq(2).text();
        var hits = $(stats).eq(3).text();
        var singles = $(stats).eq(4).text();
        var doubles = $(stats).eq(5).text();
        var tripples = $(stats).eq(6).text();
        var homeRuns = $(stats).eq(7).text();
        var rbi = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var stolenBases = $(stats).eq(11).text();
        var caughtStealing = $(stats).eq(12).text();
        var battingAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var slugging = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          atBats: atBats,
          runs: runs,
          hits: hits,
          singles: singles,
          doubles: doubles,
          tripples: tripples,
          homeRuns: homeRuns,
          rbi: rbi,
          walks: walks,
          strikeOuts: strikeOuts,
          stolenBases: stolenBases,
          caughtStealing: caughtStealing,
          battingAvg: battingAvg,
          onBasePercentage: onBasePercentage,
          slugging: slugging,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find Starting Pitcher stats from previous day
function getStartingPitchers() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/SP/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var innings = $(stats).eq(1).text();
        var gamesStarted = $(stats).eq(2).text();
        var qualityStarts = $(stats).eq(3).text();
        var completeGame = $(stats).eq(4).text();
        var wins = $(stats).eq(5).text();
        var losses = $(stats).eq(6).text();
        var blownSave = $(stats).eq(7).text();
        var strikeOuts = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var intentionalWalks = $(stats).eq(11).text();
        var hitsAllowed = $(stats).eq(12).text();
        var earnedRunAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var walksHitsPerInningsPitched = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          innings: innings,
          gamesStarted: gamesStarted,
          qualityStarts: qualityStarts,
          completeGame: completeGame,
          wins: wins,
          losses: losses,
          blownSave: blownSave,
          strikeOuts: strikeOuts,
          walks: walks,
          strikeOuts: strikeOuts,
          intentionalWalks: intentionalWalks,
          hitsAllowed: hitsAllowed,
          earnedRunAvg: earnedRunAvg,
          onBasePercentage: onBasePercentage,
          walksHitsPerInningsPitched: walksHitsPerInningsPitched,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};

//find Relief Pitcher stats from previous day
function getReliefPitchers() {
  request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/RP/standard/stats/2018/y?&print_rows=9999', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('tr').each(function(i, element){
        var stats = $(this).children();

        // var url = stats.attr('href');
        var player = $(stats).eq(0).text();
        var innings = $(stats).eq(1).text();
        var gamesStarted = $(stats).eq(2).text();
        var qualityStarts = $(stats).eq(3).text();
        var completeGame = $(stats).eq(4).text();
        var wins = $(stats).eq(5).text();
        var losses = $(stats).eq(6).text();
        var blownSave = $(stats).eq(7).text();
        var strikeOuts = $(stats).eq(8).text();
        var walks = $(stats).eq(9).text();
        var strikeOuts = $(stats).eq(10).text();
        var intentionalWalks = $(stats).eq(11).text();
        var hitsAllowed = $(stats).eq(12).text();
        var earnedRunAvg = $(stats).eq(13).text();
        var onBasePercentage = $(stats).eq(14).text();
        var walksHitsPerInningsPitched = $(stats).eq(15).text();
        var fantasyPoints = $(stats).eq(16).text();

        var metadata = {
          player: player,
          innings: innings,
          gamesStarted: gamesStarted,
          qualityStarts: qualityStarts,
          completeGame: completeGame,
          wins: wins,
          losses: losses,
          blownSave: blownSave,
          strikeOuts: strikeOuts,
          walks: walks,
          strikeOuts: strikeOuts,
          intentionalWalks: intentionalWalks,
          hitsAllowed: hitsAllowed,
          earnedRunAvg: earnedRunAvg,
          onBasePercentage: onBasePercentage,
          walksHitsPerInningsPitched: walksHitsPerInningsPitched,
          fantasyPoints: fantasyPoints
        }
        // Our parsed meta data object

        console.log(metadata);
      })
    }
  });
};
