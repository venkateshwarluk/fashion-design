$(document).ready(function() {
    (function() {
        var phText;
        $('.contact-form .form-control').blur(onBlurPlaceHolderCtrl)
        $('.contact-form .form-control').focus(onFocusPlaceHolderCtrl);

        function onBlurPlaceHolderCtrl() {
            $(this).attr('placeholder', phText)
        }

        function onFocusPlaceHolderCtrl() {
            phText = $(this).attr('placeholder');
            $(this).attr('placeholder', '')
        }
    }());

})
