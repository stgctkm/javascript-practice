(function() {
    'use strict';
    var passedTime = 0;
    var intervalId = null;

    var timerElement = document.getElementById('timer');
    // setInterval(function () {
    //     timerElement.textContent = formatTime(new Date());
    // }, 1000);

    // var formatTime = function(date) {
    //     return fillZero(date.getHours()) + ':' + fillZero(date.getMinutes()) + ':' + fillZero(date.getSeconds());
    // };

    var fillZero = function(number) {
        return ('0' + number).slice(-2);
    };

    var start = function() {
        if (intervalId !== null) {
            return;
        }
        intervalId = setInterval(function() {
            passedTime++;
            render();
        }, 1000);
    };

    var stop = function() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    var reset = function() {
        stop();
        passedTime = 0;
        render();
    };

    var render = function() {
        var minutes = Math.floor(passedTime / 60);
        var seconds = passedTime % 60;
        timerElement.textContent = fillZero(minutes) + ':' + fillZero(seconds);
    };

    document.getElementById('start').addEventListener('click', start);
    document.getElementById('stop').addEventListener('click', stop);
    document.getElementById('reset').addEventListener('click', reset);
})();