//factory function



function createUser(email, birthdate) {
  const user = {
    // email:email,
    // birthdate:birthdate,
    //--> a1:a2 같으면 a2 지워도 됨 

    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const item = {
  name: '스웨터',
  price: 300000,
};

const user1 = createUser('christ1234@google.com', '1992-03-21');
const user2 = createUser('jerry99@google.com', '1995-07-19');
const user3 = createUser('alice@google.com', '1993-12-24');
//--> 펙토리 펑션

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);