// Activate hinge effect when h4 is click in last section
$('.funky-animations span').on('click', function() {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated hinge');
    });
});