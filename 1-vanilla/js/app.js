import MainController from "./controllers/MainController.js";

//controller 호출 시점은 DOM이 모두 로딩되고 난 후 
document.addEventListener('DOMContentLoaded', () => {
    MainController.init()
})