/**
 * Created by elporfirio on 24/05/17.
 */
$(document).ready(function(){
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);

    $('.do-request').on('click', function(){
         $.get('http://jsonplaceholder.typicode.com/posts')
             .done(function(result){
                 $('#results').text(JSON.stringify(result, null, 2));
             })
             .fail(function(error){
                 console.error(error);
             })
    })
});

function configureLoadingScreen(screen){
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
}