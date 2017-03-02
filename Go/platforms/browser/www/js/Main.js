///Forside menu
$(function () {

    $myMenu = $("#myMenu");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetMenu',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myMenu.append("<li><a class='drawer-menu-item' href=\"" + post.Navn + ".HTML\"+ .html>" + post.Navn + "</a></li>");
            });
        }
    });

});
///forum
$(function () {

    $mydiv = $("#fnyhed");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetForumN',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $mydiv.append("<div class='foverskrift'>" + post.Overskrift + "</div></br><div class='ftekst'>" + post.Tekst + "</div><hr> ");

            });
        }
    });

});

$(function () {

    $mydis = $("#fdis");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetForumD',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $mydis.append("<div class='foverskrift'>" + post.Overskrift + "</div></br><div class='ftekst'>" + post.Tekst + "</div><hr> ");

            });
        }
    });

});

/// forside udtræk



$(function () {

    $mydivv = $("#nyhedf");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetNyheder',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $mydivv.append("<div class='foverskrift'>" + post.Overskrift + "</div></br><div class='ftekst'>" + post.Tekst + "</div><hr> ");

            });
        }
    });

});

$(function () {

    $mydif = $("#eventsf");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetEvents',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $mydif.append("<div class='foverskrift'>" + post.Overskrift + "</div></br><div class='ftekst'>" + post.Tekst + "</div><hr> ");

            });
        }
    });

});


$myfora = $("#forumliste");
$.ajax({
    type: 'GET',
    url: 'http://localhost:13105/api/Get/GetForumf',
    success: function (posts) {
        $.each(posts, function (i, post) {
            $myfora.append("<tr><td> <a href=\"" + post.Link + "\">" + post.Navn + "</a></td></tr>");

        });
    }
});

$('a#first').click(function(){
    $('div#opretf').show();
});
$('a#last').click(function(){
    $('div#opretf').hide();
});
