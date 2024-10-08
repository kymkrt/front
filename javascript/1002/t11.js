//t11.js (문자함수 연습)
'use strict'
//           0         1         2         3         4         5
//           01234567890123456789012345678901234567890123456789012345
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let text2 = '   ABC    BCABC GHI  JKLABVMN.... ABC..... OPQ    ';
let text3 = '한국에 오신것을 환영합니다.';
let text4 = '010-1234-5678'

//length : 길이 명령어로 본다 그래서 ()가 없음
//substring() : 특정위치의 문자열을 추출
//indexOf() : 문자나 문자열을 검색(인덱스 번지 반환, 없으면 -1)
//lastIndexOf() : 문자열의 마지막에서부터 검색한다
//includes() : 문자열 검색(있으면 true 없으면 false)
//concat() : 문자열 결합
//trim() : 문자열의 앞뒤 공백만 제거 모든 공백 아님 트림스타트 트림엔드도 있다
//toUpperCase() : 영문자를 모두 대문자로 변환
//toLowerCase() : 영문자를 모두 소문자로 변환
//chatAt() : 문자열을 한문자씩 추출 처리
//chatCodeAt() : 지정된 한문자의 아스키 코드 값을 출력한다
//replace() : 지정된 문자열로 첫번째 값만 치환한다 자바에서는 다 바꾸지만 자바스크립트에서는 처음 하나만 바꾼다
//replaceAll() : 모든 값을 찾아서 모두 치환한다
//slice() : 지정된 (a, b) a번째 위치부터 b번째 위치 앞의 문자값을 추출한다.
//split(a) : a문자를 기준으로 분리시켜서 배열로 저장한다

let res = '', cnt=0;

res += ++cnt + ':' + text1.length + '<br />'; 
res += ++cnt + ':' + text2.length + '<br />'; 
res += ++cnt + ':' + text3.length + '<br />';  //한글도 한문자로 본다
res += ++cnt + ':' + text1.substring(10) + '<br />'; //10번째 인덱스 부터 뒤로 다 꺼냈다
res += ++cnt + ':' + text1.substring(10,13) + '<br />'; //뒷번호 바로 앞까지
res += ++cnt + ':' + text3.substring(10) + '<br />'; //한글도 한문자로 본다
res += ++cnt + ':' + text1.indexOf('ABC') + '<br />'; 
res += ++cnt + ':' + text2.indexOf('ABC') + '<br />'; 
res += ++cnt + ':' + text3.indexOf('ABC') + '<br />'; 
res += ++cnt + ':' + text1.lastIndexOf('ABC') + '<br />'; //앞에서든 뒤에서든 하나 밖에 없어서 0 
res += ++cnt + ':' + text2.lastIndexOf('ABC') + '<br />'; 
res += ++cnt + ':' + text3.lastIndexOf('ABC') + '<br />'; 
res += ++cnt + ':' + text3.includes('korea') + '<br />'; 
res += ++cnt + ':' + text3.includes('한국') + '<br />'; 
res += ++cnt + ':' + '미국'.concat(text3.substring(2)) + '<br />'; 
res += ++cnt + ':' + text1 + text2 + '<br />'; 
res += ++cnt + ':' + text1 + text2.trim() + '<br />'; 
res += ++cnt + ':' + text3.charAt(2) + '<br />'; 
res += ++cnt + ':' + text1.charCodeAt(2) + '<br />'; //아스키 코드
res += ++cnt + ':' + text1.replace('ABC','opq') + '<br />'; 
res += ++cnt + ':' + text2.replace('ABC','opq') + '<br />'; //처음 하나만 바꾼다
res += ++cnt + ':' + text2.replaceAll('ABC','opq') + '<br />'; //다 바꾸려면 All을 붙여야한다
res += ++cnt + ':' + text1.slice(5) + '<br />'; 
res += ++cnt + ':51' + text1.slice(5, 8) + '<br />'; //뒷번째 바로 앞까지
res += ++cnt + ':52' + text1.slice(-2) + '<br />'; //-면 뒤에서 부터
// 'ABC'를 기준으로 자르고 나서 0번째 값을 알려줘
res += ++cnt + ':' + text1.split('ABC')[0] + '<br />'; //자르고 앞의 값은 없기 때문에 아무것도 안나옴
res += ++cnt + ':' + text1.split('ABC')[1] + '<br />'; 
res += ++cnt + ':' + text4.split('-')[0] + '<br />'; 
res += ++cnt + ':' + text4.split('-')[1] + '<br />'; 
res += ++cnt + ':' + text4.split('-')[2] + '<br />'; 

let tels = text4.split('-');
//향상된 포문
for(let tel of tels) {
  console.log(`tel : ${tel}`);
}

let title = ['지역번호','국번호','전화번호'];
// 포이치문  tel부분은 그냥 변수다 여기에 값을 담아주는것 이름 상관없음
tels.forEach((tel) => {console.log(`tel : ${tel}`)});
// 인자 갯수와 종류
tels.forEach((tel, idx)=>{console.log(title[idx], " : ",tel);});

demo.innerHTML = res;