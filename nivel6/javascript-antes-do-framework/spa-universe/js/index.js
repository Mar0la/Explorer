import  Router  from "./router.js";
const router = new Router()

const rootDir = "/nivel6/javascript-antes-do-framework/spa-universe";
router.add("/", `${rootDir}/pages/home.html`)
router.add("/universo", `${rootDir}/pages/universo.html`)
router.add("/exploracao", `${rootDir}/pages/exploracao.html`)


router.handle()
window.onpopstate = (event) => router.handle(event);
window.route = (event) => router.route(event);
