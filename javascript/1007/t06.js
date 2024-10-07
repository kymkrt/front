//t06.js
'use strict'

function regCheck() {
  // 전체에서 찾아야되니까 글로발 g 멀티라인이니까 m
  //g 안쓰면 한줄만 체크함
  const regEx1 = /atom/gm; //atom이라는 문자열이 있으면 true 없으면 false 여러줄에서의 처리
  // 한줄이라 m안붙임 s 생략가능
  const regEx2 = /atom/g; //atom이라는 문자열이 있으면 true 없으면 false 한줄에서의 처리
  // | or 연산자
  const regEx3 = /mbc|kbs|sbs/g; //mbc, kbs, sbs를 포함하고 있느냐
  const regEx4 = /홍길(동|순)/g; //홍길동 또는 홍길순을 포함하고 있느냐
  const regEx5 = /[a-z]/g; //영문 소문자를 포함하고 있느냐
  const regEx6 = /[^a-z]/g; //영문 소문자를 포함하고 있지 않느냐
  const regEx7 = /[A-Z]/g; //영문 대문자를 포함하고 있느냐
  const regEx8 = /[^A-Z]/g; //영문 대문자를 포함하고 있지 않느냐
  const regEx9 = /[0-9]/g; //숫자0-9를 포함하고 있느냐
  const regEx10 = /[^0-9]/g; //숫자0-9를 포함하고 있지 않느냐
  const regEx11 = /[가-힣]/g; //한글을 포함하고 있느냐
  const regEx12 = /[^가-힣]/g; //한글을 포함하고 있지 않느냐
  const regEx13 = /[a-zA-z0-9]/g; //영문자와 숫자를 포함하고 있느냐
  const regEx14 = /[^a-zA-z0-9]/g; //영문자와 숫자만 포함하고 있느냐
  const regEx15 = /[a-zA-z0-9_]/g; //영문자와 숫자, _을 포함하고 있느냐

  //.은 제어코드가 아니라는걸 알려주기 위해 \ 필요
  const regEx16 = /\./g; //.을 포함하고 있느냐
  const regEx17 = /\d/g; //숫자를 포함하고 있느냐
  //부정의 의미는 대문자 자바랑 같음
  const regEx18 = /\D/g; //숫자를 포함하고 있지 않느냐
  const regEx19 = /\w/g; //영문자, 숫자, 밑줄_을 포함하고 있느냐
  const regEx20 = /\W/g; //영문자, 숫자, 밑줄_을 포함하고 있지 않느냐
  const regEx21 = /\s/g; //공백을 포함하고 있느냐

  const regEx22 = /홍길동?/g; //?앞의 글자가 0개이거나 1개를 포함하느냐 없어도 되고 1개있어도 되고
  const regEx23 = /홍길동+/g; //+앞의 글자가 1개이상을 포함하느냐
  const regEx24 = /홍길동*/g; //*앞의 글자가 0개이상을 포함하느냐

  let content = document.getElementById("content").value.trim();

  if(content == "") alert("문자열을 입력하세요");
  //이중에 ^들어간건 다 ! 지워야함
  // else if(!content.match(regEx1)) alert("본문에 atom문자열을 포함하고 있지 않습니다")
  // else if(!content.match(regEx2)) alert("본문에 atom문자열을 포함하고 있지 않습니다")
  // else if(!content.match(regEx3)) alert("본문에 mbc 또는 kbs 또는 sbs 문자열을 포함하고 있지 않습니다")
  // else if(!content.match(regEx4)) alert("본문에 홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다")
  // else if(!content.match(regEx5)) alert("본문에 영문 소문자를 포함하고 있지 않습니다")
  // else if(!content.match(regEx6)) alert("본문에 영문 소문자만을 포함하고 있지 않습니다")
  // else if(!content.match(regEx7)) alert("본문에 영문 대문자를 포함하고 있지 않습니다")
  // else if(!content.match(regEx8)) alert("본문에 영문 대문자만을 포함하고 있지 않습니다")
  // else if(!content.match(regEx9)) alert("본문에 영문 대문자만을 포함하고 있지 않습니다")
  // else if(!content.match(regEx10)) alert("본문에 영문 대문자만을 포함하고 있지 않습니다")
  // else if(!content.match(regEx11)) alert("본문에 한글을 포함하고 있지 않습니다")
  // else if(!content.match(regEx12)) alert("본문에 한글만을 포함하고 있지 않습니다")
  // test 사용법 보통 매치 보다 test 더 많이 씀
  // else if(!regEx13.test(content)) alert("본문에 영문자와 숫자가 있지 않습니다")
//부정에 부정은 안된다
  // else if(regEx14.test(content)) alert("본문에 영문자와 숫자가 있지 않습니다")
  // else if(!regEx15.test(content)) alert("본문에 영문자와 숫자와 _이 있지 않습니다")
  // else if(!regEx16.test(content)) alert("본문에 .이 없습니다")
  // else if(regEx18.test(content)) alert("본문에 숫자만을 포함하고 있지 않습니다")
  // else if(regEx20.test(content)) alert("본문에 영문자 숫자 밑줄_만을 포함하고 있지 않습니다")
  // else if(regEx21.test(content)) alert("본문에 공백이 포함되어 있습니다")
  else if(regEx22.test(content)) alert("본문에 홍길 또는 홍길?이 포함되어 있습니다")
  // else if(regEx23.test(content)) alert("본문에 홍길동 또는 홍길동~이 포함되어 있습니다")
  //이거 왜 홍길덩을 통과하지? 없너도도 포함
  // else if(regEx24.test(content)) alert("본문에 홍길동이 없거나 또는 홍길동~이 포함되어 있습니다")
  else alert("정상적으로 통과되셨습니다")
}