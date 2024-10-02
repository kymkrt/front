// t10.js
'use strict'

// 이렇게 넣을수도 있다 배열도 가능
let arr1 = [
  '문자자료',
  5,
  true,
  // 개발자모드에서 화살표가 있으면 그것도 배열이다 배열객체
  [2,4,6,8],
  // 중괄호 형식 일반 오브젝트 객체 json 형식을 따라간다(key:value)
  // 개발자모드에서 봐도 키와 밸류가 나온다
  {
    tel : '010-1234-5678',
    address : '청주',
    age : 99
  },
  // 배열안에 함수도 가능
  function() {
    let atom=5; 
    console.log(atom+"안녕하세요");
  }
];
console.log("arr1 : ",arr1);
console.log("1. : ",arr1[1]);
// 배열객체
console.log("2-1. : ",arr1[3]);
// 3번 배열의 1번값 2중배열
console.log("2-2. : ",arr1[3][1]);
// 오브젝트 : 일반객체
// ABC 오름차순 순서 key기준
console.log("3. : ",arr1[4]);
// 이러면 값이 나옴
console.log("4. : ",arr1[4].tel);
// 배열안의 함수 : 실행이 아니라 함수 내용이 나온다
console.log("5. : ",arr1[5]);
// 함수 호출하려면 ()를 붙여야한다
arr1[5]();
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

arr1.push(50);
console.log("arr1 : ",arr1);

let str1 = arr1+'';
console.log("1. str1 : ",str1);
// 특정기호로 꺼낼때 join 사용
let str2 = arr1.join('-');
console.log("2. str2 : ",str2);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

arr1.forEach(function(data, idx){
  console.log(idx," : ", data);
});
// 위랑 똑같은 결과 애로우 펑션
arr1.forEach((data, idx) => console.log(idx," : ", data));
console.log("00000000000000000000000000000000000000");
// 위와 같음 나중에 체이닝에서 달라진다
arr1.map((data, idx) => console.log(idx," : ", data) );
console.log("99999999999999999999999999999999999999999999");

// 위와 같지만 거를수 있다
arr1.filter((data, idx) => console.log(idx," : ", data));
console.log("888888888888888888888888888888888888888");

// 안에 들어가는건 같음
// 이 조건을 만족하는 값을 출력하기 위해서 포이치를 못씀 체이닝으로 해서 맵을 써야함
// 보통 길어서 이렇게 자른다
arr1.filter((data, idx) => idx % 2 == 0)
  .map((data, idx) => console.log(idx," : ", data));
// ccl
// console.clear();

//배열안에서 정렬
let arr2 = [10, 8, 29, 15, 11, 17];
// 그대로 찍힘
console.log("arr2 : ",arr2);
//오른 차순 정렬 : sort() - 문자값으로 정렬한다 배열안에 있는걸 문자열로 인식
let res = arr2.sort();
// 이건 정렬안됨 앞에서부터 비교하기 때문
console.log("res : ", res);
console.log("77777777777777777777777777777777");

// 용도를 적어준다 애로우펑션
// ??? 자바의 컴패어, 컴패어러블?
// 음수가 나오면 바꿔줘라
res = arr2.sort((a, b) => a-b);
console.log("res : ",res);
console.log("66666666666666666666666666");

//내림차순 정렬
// 음수가 나오면 바꿔줘라라는건 같음
// 자바도 같다
res = arr2.sort((a, b) => b-a);
console.log("res : ",res);
console.log("555555555555555555555555");

//역순으로 출력 : reverse()
res = arr2.reverse();
console.log("res : ",res);
console.log("44444444444444444444444444444444444");

// 정렬이 아니라 그냥 거꾸로 나온다
let arr3 = [10, 8, 29, 15, 11, 17];
console.log("arr3 : ",arr3);
res = arr3.reverse();
console.log("arr3 : ",arr3);

//문자열에는 못쓴다 
// let str3 = 'asdfasdf';
// console.log(str3.reverse());
//지금 배운거 다 객체에만 사용가능?

//자바에서 Math랑 똑같다
let max = Math.max(10, 8, 29, 15, 11, 17);
console.log(max);
let min = Math.min(10, 8, 29, 15, 11, 17);
console.log(min);
console.log("33333333333333333333333333333");

// let max2 = Math.max(arr3);
// ...은 스프레드 연산자다 즉 배열안의 값을 펼쳐서 각각으로 넘겨주는 연산자다
// 이 함수들은 인자로 숫자를 받는데 배열을 넣으면 Nan(not a number 수학연산에 수가 아닌 다른거 넣으면 뜬다)이 나오는데 배열을 인식하지 못하기 때문이다
//그래서 ...로 배열안의 값을 풀어서 넣어주는거다 만약 풀어서 넣은 값 중에 숫자가 없다면 nan이 나올것이다
let max2 = Math.max(...arr3);
console.log("max2 : ",max2);
//min도 같음
let min2 = Math.min(...arr3);
console.log("min2 : ",min2);