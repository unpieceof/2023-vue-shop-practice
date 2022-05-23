import FormView from "../views/FormView.js"
import ResultView from "../views/ResultView.js"
import SearchModel from "../models/SearchModel.js"
import KeywordModel from "../models/KeywordModel.js"

import TabView from "../views/TabView.js"
import KeywordView from "../views/KeywordView.js"

const tag = '[MainController]'

export default{
    init() {
        FormView.setup(document.querySelector('form')) // index.html의 form을 인자로 넘겨 줌
            .on('@submit', e => this.onSubmit(e.detail.input)) //FormView에서 전달한 값 받음
            .on('@reset', e => this.onResetForm())

        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
        ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '추천 검색어'
        this.renderView()
        
    },

    renderView(){
        console.log(tag, 'renderView()')
        TabView.setActiveTab(this.selectedTab)

        if(this.selectedTab === '추천 검색어'){
            KeywordModel.list().then(data => {
                KeywordView.render(data)
            })
        } else{
            debugger
        }

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