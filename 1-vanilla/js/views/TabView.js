import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function(el) {
    this.init(el)
    this.bindClick()
    return this
}

TabView.setActiveTab = function(tabName) {
    //querySelect는 처음 만난 개체만 반환, All은 해당 개체 모두 반환
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : '' // TabName이 같은 경우에만 class에 active 추가
    } )
}

TabView.bindClick = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClick(li.innerHTML))
    })
}

TabView.onClick = function(tabName){
    this.setActiveTab(tabName)
    this.emit('@change', {tabName})
}

export default TabView