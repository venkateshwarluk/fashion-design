   //-----------------------nav bar higilight------------
                document.addEventListener('DOMContentLoaded', function () {
                    'use strict;'
                    var h = location.href;
                    var e = document.querySelectorAll('.nav.navbar-nav li a')
                    for (var a of e) {
                        if (a.href === h) {
                            var li = a.parentElement;
                            li.className = 'active';
                        }
                    }

                })