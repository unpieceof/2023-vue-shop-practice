// View.js를 복사해서 사용
import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false) // Reset 속성은 숨김 처리, true/false는 대소문자 가림
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none' // show 상태면 css의 display 속성을 block, 아니면 none
}

// 검색어 입력 시 x 버튼 보이도록 하는 이벤트 매핑
FormView.bindEvents = function() {
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

// 키 입력 부분
FormView.onKeyup = function() {
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if(e.keyCode !== enter) return
    // FormView에서 입력한 값 전달(-> resultView)
    this.emit('@submit',{input: this.inputEl.value})
}

// Controller에서 사용하기 위해 export 필요
export default FormView