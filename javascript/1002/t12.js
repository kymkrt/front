//t12.js (숫자함수 연습)
'use strict'

let su1 = 10; 
let su2 = -20;
let su3 = 3.141592;
let su4 = -3.141592;
let cnt = 0;
let res = '';

//Math.max(), Math.min()
//

res += ++cnt + " : " + Math.ceil(su3) + '<br />'; //ceil() : 무조건 올림
//올려서 1을 더해줌 큰 정수값으로 올린다
res += ++cnt + " : " + Math.ceil(su4) + '<br />'; //ceil() : 무조건 올림
res += ++cnt + " : " + Math.floor(su3) + '<br />'; //floor() : 무조건 내림
res += ++cnt + " : " + Math.floor(su4) + '<br />'; //floor() : 무조건 내림
res += ++cnt + " : " + Math.trunc(su3) + '<br />'; //trunk() : 소수이하를 무조건 자름
res += ++cnt + " : " + Math.trunc(su4) + '<br />'; 
res += ++cnt + " : " + Math.pow(su1, 3) + '<br />'; //pow(수,얼마나 곱할지) : 지수승
res += ++cnt + " : " + Math.abs(su1) + '<br />'; //abs() : 절대값 무조건 양수
res += ++cnt + " : " + Math.abs(su2) + '<br />'; 
res += ++cnt + " : " + Math.sqrt(su1) + '<br />'; //sqrt() : 제곱근 구하는거 루트씌운다
res += ++cnt + " : " + Math.sqrt(16) + '<br />'; //sqrt() : 제곱근 구하는거 루트씌운다
// Math에 있는게 아니라 메소드로 존재한다
res += ++cnt + " : " + su3.toFixed(2) + '<br />'; //toFixed(a) : (a자리+1)에서 반올림 얘를 더 많이씀 라운드 보다
res += ++cnt + " : " + Math.round(su3) + '<br />'; //round() : 정수부로만 반올림된다

//난수 발생함수 : Math.random() 0-1 사이의 실수형 난수
res += ++cnt + " : " + Math.random() + '<br />'; 
res += ++cnt + " : " + (parseInt(Math.random() * 10) + 1) + '<br />'; //1에서 10까지의 정수 난수
res += ++cnt + " : " + (parseInt(Math.random() * (10-5+1)) + 5) + '<br />'; //5에서 10까지의 정수 난수




demo.innerHTML = res;