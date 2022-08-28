// 객체 하나만을 전역 변수로 생성한 뒤
// 객체의 프로퍼티를 네임스페이스처럼 활용
const MYAPP = {}
MYAPP.person = {
    name: 'LEE',
    address: 'seoul'
}

console.log(MYAPP.person)
