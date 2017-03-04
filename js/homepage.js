$(document).ready(function() {

    (function() {
        var preview = $('#full-screen-img-preview-overlay');
        var imgSrcs = [];
        var centerPreviewImg = preview.children('.center-image');
        var nextImgPreviewCtrl = preview.find('.pager .preview-next');
        var previousImgPreviewCtrl = preview.find('.pager .preview-previous');

        preview.children('.preview-close').click(hidePreview)
        nextImgPreviewCtrl.click(nextImgPreview)
        previousImgPreviewCtrl.click(previousImgPreview)

        $('.gal-overlay-top .icon-image.left').click(openPreview);

        function openPreview() {
            imgSrcs = [];
            var imgSrc = $(this).parents('.galary-col').find('img').attr('src');
            centerPreviewImg.attr('src', imgSrc);
            extractImgSrcs();
            var currentImgIndex = imgSrcs.indexOf(imgSrc);
            toggleNextPrevCtrls(currentImgIndex)
            preview.show();
        }

        function extractImgSrcs() {
            $('.galary-col').each(function (i, el) {
                var imgSrc = $(el).find('img').attr('src');
                var isExist = (imgSrcs.indexOf(imgSrc) !== - 1);
                if($(el).css('display') === 'block' && (!isExist)) {
                    imgSrcs.push(imgSrc);
                }
            });
        }

        function hidePreview() {
            preview.hide();
        }

        function toggleNextPrevCtrls(currentImgIndex) {
            var firstIndex = 0;
            var totalNumberOfImages = imgSrcs.length;
            var lastIndex = totalNumberOfImages - 1;

            if (currentImgIndex === firstIndex) {
                previousImgPreviewCtrl.parent().addClass('disabled');
            } else {
                previousImgPreviewCtrl.parent().removeClass('disabled');
            }

            if ( currentImgIndex === lastIndex ) {
                nextImgPreviewCtrl.parent().addClass('disabled');
            } else {
                nextImgPreviewCtrl.parent().removeClass('disabled');
            }

            if (totalNumberOfImages === 1) {
                nextImgPreviewCtrl.parent().addClass('disabled');
                previousImgPreviewCtrl.parent().addClass('disabled');
            }


        }

        function nextImgPreview(e) {
            e.preventDefault()
            var isDisabled = nextImgPreviewCtrl.parent().hasClass('disabled');
            var imgSrc = centerPreviewImg.attr('src');
            var currentImgIndex = imgSrcs.indexOf(imgSrc);
            var nextImgIndex = currentImgIndex + 1;

            if (!isDisabled) {
                centerPreviewImg.attr('src', imgSrcs[nextImgIndex]);
                currentImgIndex = nextImgIndex;
            }
            toggleNextPrevCtrls(currentImgIndex)
        }

        function previousImgPreview(e) {
            e.preventDefault();
            var isDisabled = previousImgPreviewCtrl.parent().hasClass('disabled');
            var imgSrc = centerPreviewImg.attr('src');
            var currentImgIndex = imgSrcs.indexOf(imgSrc);
            var previousImgIndex = currentImgIndex - 1;

            if (!isDisabled) {
                centerPreviewImg.attr('src', imgSrcs[previousImgIndex]);
                currentImgIndex = previousImgIndex;
            }
            toggleNextPrevCtrls(currentImgIndex)
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
                $('.galary-col').each(function() {
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
