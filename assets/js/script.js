$(function () {
    // Autre solution : $('#upper').click((event) =>
    $('#upper').click(function () {
        // Augmente la hauteur de 10px. S'il dépasse 100px, il remet la hauteur à 10px.
        var maxHeight = $('#shape').height();
        // Autre solution : if ($(event.target).attr('id') == 'upper')
        if (maxHeight >= 100) {
            $('#shape').height(10);
        }
        else {
            $('#shape').animate({
                height: "+=10"
            }, 100)
            // Autre solution : $('#shape').height(height + 10);
        }
    });
    $('#frog').click(function () {
        // changer la couleur en vert
        $('#shape').css('background', 'green');
    });
    $('#reboot').click(function () {
        // Rafraichir la page, autre solution : location.href = location.href
        location.reload();
    });
    $('#hide').click(function () {
        // cacher le rectangle
        $('#shape').hide();
    });
    $('#show').click(function () {
        // faire réapparaitre le rectangle
        $('#shape').show();
    });
});