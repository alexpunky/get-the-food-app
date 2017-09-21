window.getthefood = window.getthefood||{};

(function(GetTheFood)
{
    "use strict";

    GetTheFood.Code = function() {

        function init() {
            document.getElementById('back').addEventListener('click', function() {
                console.log('test');
                var elts = document.getElementsByClassName('active');
                for (var i = 0; i < elts.length; i++) {
                    elts[i].classList.remove('active');
                }

                var element = document.getElementById('home');
                element.classList.add('active');

                console.log(element);
            });
        }

        init();
    };

})(window.getthefood);