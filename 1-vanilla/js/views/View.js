const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  /* on, emit은 함께 다님
  1. on : 이벤트 정의
  2. emit : 이벤트 방출(el에 이벤트 부여)
  */  
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}