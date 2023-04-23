//2. 객체 만들기 정리

// (1). Object literal과 Factory function 사용하기

function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');

// 객체를 생성하는 Factory function을 만들고, 그 안에서 Object literal로 객체를 생성하여 리턴하는 방법입니다.

// (2). Constructor function 사용하기

function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user4 = new User('chris123@google.com', '1992-03-21');
const user5 = new User('jerry99@google.com', '1995-07-19');
const user6 = new User('alice@google.com', '1993-12-24');


// 따라서 우리는 이번 토픽에서 객체 지향 프로그래밍의 핵심 개념 4가지를 JavaScript로 배우고, 그 다음 단계인 웹 개발로 넘어갈 것입니다. 그런데 그 전에 잠깐 짚고 넘어가면 좋을 사실이 하나 있습니다.

// 사실 객체 지향 프로그래밍이 가능한 언어들은 크게 2가지 종류로 나눌 수 있는데요.

// 첫 번째는 클래스 기반의 객체 지향 언어, 
// 두 번째는 프로토타입 기반의 객체 지향 언어입니다.

// 대표적인, 클래스 기반의 객체 지향 언어로는 Java가 있고, 대표적인 프로토타입 기반의 객체 지향 언어로는 지금 우리가 배우고 있는 JavaScript가 있는데요.

// 사실 JavaScript에서 객체 지향 프로그래밍을 제대로 하기 위해서는 프로토타입(Prototype)이라고 하는 것이 무엇인지 알아야 합니다. 하지만 문제는 프로토타입을 몰라도 당장 웹 개발을 하는 데는 문제가 없고, 오히려 이 개념이 JavaScript와 웹 개발에 대한 여러분의 흥미를 떨어뜨릴 수도 있다는 점인데요.

// 그래서 일단 이번 토픽에서는 여러분이 웹 개발을 할 때 불편함을 겪지 않을 수준으로만 자바스크립트 객체 지향 프로그래밍을 배우고, 프로토타입에 관한 설명은 제외했습니다. 일단 여러분은 class 키워드를 사용한 코드를 통해 객체 지향 프로그래밍의 다양한 핵심 개념들을 이해하는데 집중해주시고,  이것들을 잘 기억해놨다가 나중에 웹 개발 토픽들에서 적용하면 됩니다.