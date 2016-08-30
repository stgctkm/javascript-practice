function SuperClass() {}

SuperClass.prototype = {
  show : function() {
    console.log("this is super class method.");
  }
}

function SubClass() {}
SubClass.prototype = new SuperClass();

SubClass.prototype.myShow = function() {
  console.log("this is sub class method.");
}

var sub = new SubClass();
sub.show();
sub.myShow();

//jsのプロトタイプチェーンは「インスタンスが生成された時点で固定」
//インスタンス生成後にprototypeを変更しても反映されない
