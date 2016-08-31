window.document.getElementsByClassName('className');

document.getElementById('id');
document.getElementsByName('name');
document.getElementsByTagName('tagName');



document.getElementById('id').firstChild.nodeValue;

//white node 改行、タブ、空白
//white node を除外してループ
item.nodeType == 1

1 = 要素ノード
2 = 属性ノード
3 = テキストノード
8 = コメントノード
9 = ドキュメントノード
10 = ドキュメントタイプ（ノード）

var anchor = document.createElement('a');

var href = document.createAttribute('href');
href.nodeValue = f.url.value;
anchor.setAttribute(href);
