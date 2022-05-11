import View from './View.js'

const tag = '[TabView]'

const TagView = Object.create(View)

Tabview.setup = function(el) {
    this.init(el)
}

Tabview.setActiveTab = function(tabName) {
    Array.from(this.el.querySelector('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : '' // TabName이 같은 경우에만 class에 active 추가
    } )
}