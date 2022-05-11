import FormView from "../views/FormView.js"
import ResultView from "../views/ResultView.js"
import SearchModel from "../models/SearchModel.js"
import TabView from "../views/TabView.js"

const tag = '[MainController]'

export default{
    init() {
        FormView.setup(document.querySelector('form')) // index.html의 form을 인자로 넘겨 줌
            .on('@submit', e => this.onSubmit(e.detail.input)) //FormView에서 전달한 값 받음
            .on('@reset', e => this.onResetForm())
        
        ResultView.setup(document.querySelector('#search-result'))

        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        this.selectedTab = '추천 검색어'
        this.renderView()
        
    },

    renderView(){
        console.log(tag, 'renderView()')
        TabView.setActiveTab(this.selectedTab)
        ResultView.hide()
    },

    search(query) {
        console.log(tag, 'search()', query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()')
        ResultView.hide()
    },

    onSearchResult(data) {
        ResultView.render(data)
    },

    onChangeTab(tabName) {
        debugger
    }
}