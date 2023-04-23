// constructor function(생성자 함수)

//객체 생성시 단어 첫번째 대문자

function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`); 
  };
}


const item = {
  name: '스웨터',
  price: 300000,
};


const user1 =  new User('christ1234@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);


console.log('===')
const user4 =  new User('christ1234@google.com', '1992-03-21');
console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item)
