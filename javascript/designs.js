;(function () {
    document.addEventListener('DOMContentLoaded', exeScript); //exectute exeScript function after html content loaded;

    function exeScript() {
        var galCtrlButtons = document.getElementsByClassName('gal-ctrls'); // list of galary ctrl buttons
        for (var i = 0; i < galCtrlButtons.length; i++) {
            galCtrlButtons[i].addEventListener('click', galCtrl)
        }
    }

    function galCtrl(e) {
        var galImagCols = document.getElementsByClassName('galary-col');
        var totalCols = galImagCols.length - 1;
        var key = e.target.dataset.ctrl;
        if (key === 'all'){
            for (var i = 0; i <= totalCols; i++ ) {
                galImagCols[i].style.display = 'block'
            }
        } else {
            for (var i = 0; i <= totalCols; i++ ) {
                if (galImagCols[i].classList.contains(key)) {
                    galImagCols[i].style.display = 'block'
                } else {
                    galImagCols[i].style.display = 'none'
                }
            }
        }
    }
}());