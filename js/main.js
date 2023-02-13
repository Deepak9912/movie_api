$(document).ready(function(){
    $('#searchForm').on('submit', function(e){
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
})

function getMovies(searchText){
    
}