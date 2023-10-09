import {GithubUser} from './gitHubUser.js'


export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

  }
  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login.toLowerCase() === username.toLowerCase())

      if(userExists) {
        throw new Error('Usuario ja cadastrado')
      }

      const user = await GithubUser.search(username)
  
      if(user.login === undefined) {
        throw new Error('Usuario n Encontrado')
      }
      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch(error) {
      alert(error.message)
    }
    
  }

  delete(user) {
   const filteredEntries = this.entries
      .filter(entry => entry.login !== user.login)
    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')
      
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()
  
    const emptyStateDiv = document.getElementById('ninguem-favoritado')
  
    if (this.entries.length === 0) {
      this.showEmptyState()
    } else {
      if (emptyStateDiv) {
        emptyStateDiv.remove()
      }
  
      this.entries.forEach(user => {
        const row = this.createRow()
        row.querySelector('.user img').src = `https:github.com/${user.login}.png`
        row.querySelector('.user a').href = `https:github.com/${user.login}`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = `/${user.login}`
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
  
        row.querySelector('.remove').onclick = () => {
          const isOk = confirm('Tem certeza que deseja deletar essa linha?')
          if (isOk) {
            this.delete(user)
          }
        }
        this.tbody.append(row)
      })
    }
  }
  
  showEmptyState() {
  const emptyStateDiv = document.getElementById('ninguem-favoritado')

  if (this.entries.length === 0 && !emptyStateDiv) {
    const createDiv = document.createElement("div")
    createDiv.id = 'ninguem-favoritado'
    createDiv.innerHTML = `
      <img src="./assets/Estrela.svg" alt="Nada favoritado">
      <p>Nenhum usuário favoritado</p>
    `
    
    document.querySelector('div').append(createDiv)
  } else if (emptyStateDiv) {
    emptyStateDiv.remove()
  }
}
  
  createRow() {
    const tr = document.createElement('tr')
   
    tr.innerHTML = 
    `<td class="user">
      <img src="https://github.com/Mar0la.png" alt="Imagem matheus">
      <a href="https://github.com/Mar0la">
        <p>Matheus Marins</p>
        <span>Mar0la</span>
      </a>
    </td>
    <td class="repositories">

    </td>
    <td class="followers">

    </td>
    <td class="ação">
      <button class="remove">Remover</button>
    </td>`
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    }) 
  }
}