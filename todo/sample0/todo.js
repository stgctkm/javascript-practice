var todoList= (function(){

    var values = [];

    return {
        Item: function (title) {
            this.title = title;
            this.date = new Date();
            this.asText = function () {
                return title + ", " + this.date;
            }
        },

        add: function (item) {
            values.push(item);
        },

        asText: function () {
            var content = "";
            for (var i = 0; i < values.length; i++) {
                content += values[i].asText() + "<br/>";
            }
            return content;
        }
    }

})();

(function() {
    window.document.getElementById("add").addEventListener("click", function () {
        todoList.add(new todoList.Item(window.document.getElementById("title").value));
        window.document.getElementById("items").innerHTML = todoList.asText();
    }, false);
})();

var item1 = new todoList.Item("hoge");
var item2 = new todoList.Item("fuga");

todoList.add(item1);
todoList.add(item2);


window.document.getElementById("items").innerHTML = todoList.asText();
