import FormView from "../views/FormView.js"

const tag = '[MainController]'

export default{
    init() {
        FormView.setup(document.querySelector('form')) // index.html의 form을 인자로 넘겨 줌
            .on('@submit', e => this.onSubmit(e.detail.input)) //FormView에서 전달한 값 받음
            .on('@reset', e => this.onResetForm())
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()')
    }
}