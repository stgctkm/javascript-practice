var PersonInfo = function(firstName, lastName, tel, mail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tel = tel;
    this.mail = mail;
};

Object.defineProperties(PersonInfo.prototype, {
  firstName: {
    set: function(firstName) {
      this._firstName = firstName;
    },
    get: function() {
      return this._firstName;
    }
  },
  lastName: {
    set: function(lastName) {
      this._lastName = lastName;
    },
    get: function() {
      return this._lastName;
    }
  },
  tel: {
    set: function(tel) {
      this._tel = tel;
    },
    get: function() {
      return this._tel;
    }
  },
  mail: {
    set: function(mail) {
      this._mail = mail;
    },
    get: function() {
      return this._mail;
    }
  },
  getData: {
    value: function() {
      return 'lastName:' + this.lastName + "," +
            'firstName:' + this.firstName + "," +
            'tel:' + this.tel + "," +
            'mail:' + this.mail;
    }
  },
  display: {
    value: function() {
      console.log(this.getData());
    }
  },
});

var person = new PersonInfo('taro', 'hogera', '048-111-2222');
person.display();

var anotherPerson = Object.create(new PersonInfo("hanna", "piyoyo", '090-1111-2222', 'hanna@example.com'))
anotherPerson.display();
