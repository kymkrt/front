//t04.js
'use stirct'

//클래스 첫글자 대문자
class Member {
  //생성자의 매개변수명과 필드명이 같을 경우에는 생략가능하다 - 매개변수가 필드가 되는것 
  // name;
  // age;

  //생성자
  constructor(name, age, color) {
    // 여기도 _가능
    this._name = name;
    this.age = age;
    this.color = color;
  }

  //getter 생성
  //생략되서 뭐가 올지 모르기 때문에 그냥 get 하고 이름?
  get name() {
    // return this.name;
    // 헷갈리니까 필드값에 _ 추가. 없어도 되지만 콜백지옥에 있을수 있어서 구별
    return this._name;
  }

  get age() {
    return this._age;
  }

  get color() {
    return this._color;
  }

  //setter 생성
  set name(name) {
    //매개명인지 필드명인지 구별? 필드명에 _ 추가
    this._name = name;
  }

  set age(age) {
    // this._age = age;
    // 유효성검사
    if(age < 1) age = 1;
    this._age = age;
  }

  set color(color) {
    this._color = color;
  }
}