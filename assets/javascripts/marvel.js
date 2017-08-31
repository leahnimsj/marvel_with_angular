(function() {

  $(function(){


    function populateMarvelCharacters() {
      $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c960db365b5eeb982f1e87b9d5d10cf2&hash=7afae6072081e592c4a2b9125b28b448&limit=100", function (data) {

        let characters = data.data.results;
        for (var i = 0; i < characters.length; i++) {
          let imageSource = characters[i].thumbnail.path;
          let imageExtension = characters[i].thumbnail.extension;
          let imageLink = imageSource + "." + imageExtension;
          $('#heroTable').append('<tr><td>' + characters[i].name + '</td><td><img width = 200px height = 200px src="' + imageLink + '"/></td></tr>');
        }

      })
    }

    populateMarvelCharacters();



    $('#submit-button').click(function (e) {
      e.preventDefault();
      $('#heroTable').html('');

      let searchWord = $('#marvelSearch').val();

      if (searchWord == "") {
        return populateMarvelCharacters();

      }


      $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c960db365b5eeb982f1e87b9d5d10cf2&hash=7afae6072081e592c4a2b9125b28b448&nameStartsWith=" + searchWord, function (data) {

      let characters = data.data.results;


      if (characters.length == 0) {

        // if there are no responses then reuse function to populate all the characters

        populateMarvelCharacters();


      } else {

        // if there are responses then populate screen with characters whose names start with

        for (var i = 0; i < characters.length; i++) {
        let imageSource = characters[i].thumbnail.path;
        let imageExtension = characters[i].thumbnail.extension;
        let imageLink = imageSource + "." + imageExtension;
        $('#heroTable').append('<tr><td>' + characters[i].name + '</td><td><img width = 200px height = 200px src="' + imageLink + '"/></td></tr>');
      }

      }

      });





    })










})

})()
