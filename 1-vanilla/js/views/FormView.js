// View.js를 복사해서 사용
import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(False) // Reset 속성은 숨김 처리
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none' // show 상태면 css의 display 속성을 block, 아니면 none
}

// Controller에서 사용하기 위해 export 필요
export default FormView