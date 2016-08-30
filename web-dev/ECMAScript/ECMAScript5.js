var PersonInfo = Object.create({}, {
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

var person = Object.create(PersonInfo, {
  firstName: {value: 'taro'},
  lastName: {value: "hogera"},
  tel: {value: "048-111-2222"},
  mail: {value: 'taro@example.com'}
});

person.display();
