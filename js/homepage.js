$(document).ready(function() {

    (function() {
        var preview = $('#full-screen-img-preview-overlay');
        var centerPreviewImg = preview.children('.center-image');
        var nextImgPreviewCtrl = preview.children('.preview-next');
        var previousImgPreviewCtrl = preview.children('.preview-previous');
        var currentGalCol;

        preview.children('.preview-close').click(hidePreview)
        nextImgPreviewCtrl.click(nextImgPreview)
        previousImgPreviewCtrl.click(previousImgPreview)

        $('.gal-overlay-top .icon-image.left').click(openPreview);

        function openPreview() {
            currentGalCol = $(this).parents('.galary-col');
            toggleNextPrevCtrls(currentGalCol)
            var imgSrc = currentGalCol.find('img').attr('src');
            centerPreviewImg.attr('src', imgSrc);
            preview.show();
        }

        function hidePreview() {
            preview.hide()
        }

        function nextImgPreview() {
            currentGalCol = currentGalCol.next();
            toggleNextPrevCtrls(currentGalCol)
            var imgSrc = currentGalCol.find('img').attr('src');
            centerPreviewImg.attr('src', imgSrc);
            preview.show();
        }

        function previousImgPreview() {
            currentGalCol = currentGalCol.prev();
            toggleNextPrevCtrls(currentGalCol)
            var imgSrc = currentGalCol.find('img').attr('src');
            centerPreviewImg.attr('src', imgSrc);
            preview.show();
        }

        function toggleNextPrevCtrls(currentGalCol) {
            var previousCol = currentGalCol.prev();
            var nextCol = currentGalCol.next();
            (nextCol.length === 0) ? nextImgPreviewCtrl.prop('disabled', true): nextImgPreviewCtrl.prop('disabled', false);
            (previousCol.length === 0) ? previousImgPreviewCtrl.prop('disabled', true): previousImgPreviewCtrl.prop('disabled', false);
        }
    })();


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
