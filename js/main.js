$(document).ready(function(){
    $('#form-group').submit('click', function(e){
        performSearch();
    })
})

function performSearch(e){
    var request;
    e.preventDefault();

    request = $.ajax({
        url: "https://imdb8.p.rapidapi.com/auto-complete?q=",
        method: "GET",
        data: {
            q: $('#movieId').val(),
            addid: "c01cfa9b42mshb8aa517229d08bfp10c509jsn9a92779a9164",
            X_RapidAPI_Host: "imdb8.p.rapidapi.com"}
    }),
    
    request.done(function (response) {
        console.log(response);
    });
}