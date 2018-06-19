var request = require('request');
var cheerio = require('cheerio');





// request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/C/standard/stats/2018/ytd', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     $("td").each(function(i, element){
//       var stats = $(this).prev();
//       console.log(stats.text());
//     })
//   }
// });


request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/1B/standard/stats/2018/ytd', function (error, response, html) {
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
