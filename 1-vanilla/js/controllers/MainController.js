import FormView from "../views/FormView.js"
import ResultView from "../views/ResultView.js"

const tag = '[MainController]'

export default{
    init() {
        FormView.setup(document.querySelector('form')) // index.html의 form을 인자로 넘겨 줌
            .on('@submit', e => this.onSubmit(e.detail.input)) //FormView에서 전달한 값 받음
            .on('@reset', e => this.onResetForm())
        
        ResultView.setup(document.querySelector('#search-result'))
    },

    search(query) {
        console.log(tag, 'search()', query)
        //search api
        this.onSearchResult([]) //data 받아서 넘겨 줌
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()')
    },

    onSearchResult(data) {
        ResultView.render(data)
    }
}