function Person(firstName, lastName, mail) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.mail = mail;
}

// Person.prototype.getData = function() {
//   return '姓:' + this.lastName + ', 名:' + this.firstName + ", mail:" + this.mail;
// };

// doesn't work here.
// object literal must be defined beforehand!!
// var person = new Person('taro', 'yamada', 'taro@example.com');

Person.prototype = {
  getName : function() {
    return '姓:' + this.lastName + ', 名:' + this.firstName;
  },
  getData : function() {
    return '姓:' + this.lastName + ', 名:' + this.firstName + ", mail:" + this.mail;
  }
};

var person = new Person('taro', 'yamada', 'taro@example.com');
console.log(person.getData());

//この書き方ならインスタンスの生成後からでも定義できる
Person.prototype.getHoge = function() {
  return "hoge";
};

console.log(person.getHoge());
