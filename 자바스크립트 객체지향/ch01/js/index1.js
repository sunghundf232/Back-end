console.log('안녕 나는야 세상에서 잘나가는 귐둥이 쫑이라고 해');

console.log('===');

const user = {
  eamil:'귐둥이쫑이@.귐둥이',
  birthdate:'2019-12-10',
  //--> 유저객체 상태(프로퍼티)
  buy(item){
    console.log(`${this.eamil} buys ${item.name}`);
  },
  //객체 행동(메소드)
};
//--> object Literal(객체를 나타내는 문자열)
const item = {
  name:'귐둥이 쫑이',
  price:0,
};

console.log(user.eamil);
console.log(user.birthdate);
user.buy(item);