$(document).on('click', '.wrapper .menu div', function() {
    //Get Number Of Any Index
    var numberIndex = $(this).index();

    //If Active or not
    if(!$(this).is('active')) {
        $('.wrapper .menu div').removeClass('active');
        $('.wrapper ul li').removeClass('active');

        $(this).addClass('active');
        $('.wrapper ul').find("li:eq(" + numberIndex + ")").addClass('active');

        var listItemHeight = $('.wrapper ul')
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $('.wrapper ul').height(listItemHeight + "px");    
    };
});

