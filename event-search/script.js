(function() {

    var searchForm = document.getElementById('search-form');
    var searchInput = document.getElementById('search-input');
    var eventList = document.getElementById('event-list');

    // var element = document.createElement('script');
    // element.src = 'http://api.atnd.org/events/?format=jsonp';
    // document.body.appendChild(element);
    //
    // window.callback = function(data) {
    //     console.log(data);
    // };

    var searchEvents = function() {
        event.preventDefault();
        var keyword = searchInput.value;

        if (!keyword) return;

        eventList.innerHTML = '<li>Searching...</li>'


        var element = document.createElement('script');
        element.src = 'http://api.atnd.org/events/?format=jsonp&keyword=' + encodeURI(keyword);
        document.body.appendChild(element);
        document.body.removeChild(element);
    };

    var showEvents = function(data) {
        eventList.innerHTML = '';
        if (data && data.events instanceof Array) {
            data.events.forEach(function(eventData) {
                var eventInfo = eventData.event;
                var time = document.createElement('time');
                time.textContent = formatDate(eventInfo.started_at);
                var a = document.createElement('a');
                a.href = encodeURI(eventInfo.event_url);
                a.target = '_blank';
                a.textContent = eventInfo.title;
                var li = document.createElement('li');
                li.appendChild(time);
                li.appendChild(a);
                eventList.appendChild(li);
            });
        }
    };

    var formatDate = function(date) {
        var date = new Date(date);
        return (date.getMonth() + 1) + '/' + date.getDate();
    };

    searchForm.addEventListener('submit', searchEvents);

    window.callback = showEvents;
})();


(function() {
    'use strict';

    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.atnd.org/events/?format=json');

    request.onload = function() {
        console.log(this.response);
    };

    request.onError = function(error) {
        console.error(error);
    };

    request.send();
})();