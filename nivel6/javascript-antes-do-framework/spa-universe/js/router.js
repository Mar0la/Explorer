export default class Router {
  routes = {}
  add(routeName,link) {
    this.routes[routeName] = link
  }

  imgs = {
    "/": "url('/nivel6/javascript-antes-do-framework/spa-universe/assets/mountains-universe-1.png')",
    "/exploracao": "url('/nivel6/javascript-antes-do-framework/spa-universe/assets/mountains-universe-2.png')",
    "/universo": "url('/nivel6/javascript-antes-do-framework/spa-universe/assets/mountains-universe-3.png')"
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname]  || this.routes["/"]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      if(this.imgs[pathname]){
        document.body.style.backgroundImage = this.imgs[pathname]
      }
      document.querySelector('#pag').innerHTML = html

      if(pathname === "/exploracao" || pathname === "/universo"){
        document.querySelector('#pag').style.textAlign = 'left'
      } else {
        document.querySelector('#pag').style.textAlign = 'center'
      }

      
    })
  }
 
}
