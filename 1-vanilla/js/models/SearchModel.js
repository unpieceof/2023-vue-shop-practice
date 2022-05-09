// 검색 결과 모델
const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://img-cf.kurly.com/shop/data/goods/1637805742998y0.jpeg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://img-cf.kurly.com/shop/data/goods/1574338903215y0.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}