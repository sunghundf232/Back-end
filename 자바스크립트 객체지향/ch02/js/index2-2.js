/*
(2) 캡슐화 - 객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는것

*/

class User{
  constructor(email,birthdate){
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item){
    console.log(`${this.email} buys ${item.name}`);
  }
  get email(){
    //return this._email;

    //이메일 보다 문장 자체를 리턴하려고 할때 
    //-->
    return `Eamil Address is ${this._email}`
  }
  //--> 프로퍼티 값을 구하는 함수




  set email(address){ //setter(세터) 메소드
    if(address.includes('@')){
      this._email = address;
    } else{
      throw new Error('귐둥이 쫑이님이시다 email address')
    }
  }
  //--> 이거 입력시 user1.email = '귐둥이 쫑이' 해도 메일형식으로 출력됨
  //--> 따라서 이상한 이메일 주소 방지
}

const item = {
  name :'귐둥이 쫑이',
  price:300000000000000,
};

const user1 = new User('쫑이는 귐둥이@google.com', '1992-03-21');
// user1.email = '귐둥이 쫑이' //if) e-mail 형식이 아니라 오류 --> 오류검증방법 : buy 밑에 있음) 이메일 형식이 아니라 에러 메시지 떠

user1.email = 'chris_robert@goggle.com';
console.log(user1._email)

console.log(user1.email)