(function() {

  $(function(){


    $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c960db365b5eeb982f1e87b9d5d10cf2&hash=7afae6072081e592c4a2b9125b28b448&limit=100", function (data) {

      let characters = data.data.results;
      for (var i = 0; i < characters.length; i++) {
        let imageSource = characters[i].thumbnail.path;
        let imageExtension = characters[i].thumbnail.extension;
        let imageLink = imageSource + "." + imageExtension;
        $('#heroTable').append('<tr><td>' + characters[i].name + '</td><td><img width = 200px height = 200px src="' + imageLink + '"/></td></tr>');
      }

      // let imageSource = data.data.results[0].thumbnail.path;
      // let imageExtension = data.data.results[0].thumbnail.extension;
      // let imageLink = imageSource + "." + imageExtension;
      // $('#heroImage').attr("src",imageLink);

    })


    $('#submit-button').click(function (e) {
      e.preventDefault();

      let searchWord = $('#marvelSearch').val();


      $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c960db365b5eeb982f1e87b9d5d10cf2&hash=7afae6072081e592c4a2b9125b28b448&nameStartsWith=" + searchWord, function (data) {

      let characters = data.data.results;
      $('#heroTable').html('')

      for (var i = 0; i < characters.length; i++) {
        let imageSource = characters[i].thumbnail.path;
        let imageExtension = characters[i].thumbnail.extension;
        let imageLink = imageSource + "." + imageExtension;
        $('#heroTable').append('<tr><td>' + characters[i].name + '</td><td><img width = 200px height = 200px src="' + imageLink + '"/></td></tr>');
      }

      });


    })










})

})()
