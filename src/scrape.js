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


request('https://www.cbssports.com/fantasy/baseball/stats/sortable/points/C/standard/stats/2018/ytd', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('tr').each(function(i, element){
      var stats = $(this).children();

      // var url = stats.attr('href');
      var player = $(stats).eq(0).text();
      var atBats = $(stats).eq(1).text();

      var metadata = {
        player: player,
        atBats: atBats
      }
      // Our parsed meta data object

      console.log(metadata);
    })
  }
});
