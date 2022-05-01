import FormView from "../views/FormView"

const tag = '[MainController]'

export default{
    init() {
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form')) // index.html의 form을 인자로 넘겨 줌
    }
}