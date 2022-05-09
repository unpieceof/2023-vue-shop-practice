import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el) {
    this.init(el)
}

ResultView.render = function(data = []){
    console.log(tag, 'render()', data)
    // 검색 결과(data)가 있으면 getSearchResultsHtml 함수를 통해 결과 그려줌
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다'
}

ResultView.getSearchResultsHtml = function(data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item) {
    return `<li>
        <img src = "${item.image}">
        <p>${item.name}</p>
    </li>`
}

export default ResultView