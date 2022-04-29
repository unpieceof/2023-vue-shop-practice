// 검색에 대한 데이터를 관리하는 모델
export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  // Promise 활용하여 비동기로 구현, 데이터 리턴 기능
  list() {
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}