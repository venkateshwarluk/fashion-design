$(document).ready(function() {

    (function() {
        $('.gal-ctrls').click(galCtroller)

        function galCtroller(e) {
            e.preventDefault();
            var key = $(e.target).data('ctrl');
            galNavCtrls(e.target);
            galColsController(key)
        }

        function galNavCtrls(activeElement) {
            $('.gal-ctrls').each(rmActiveClass)
            $(activeElement).parent().addClass('active');
        }

        function galColsController(key) {
            if (key === 'all') {
                $('.galary-col').each(function () {
                    show(this)
                });
            } else {
                $('.galary-col').each(function() {
                    $(this).hasClass(key) ? show(this) : hide(this)
                })
            }
        }

        function rmActiveClass() {
            $(this).parent().removeClass('active');
        }

        function show(elem) {
            $(elem).show()
        }

        function hide(elem) {
            $(elem).hide()
        }
    }());


});
