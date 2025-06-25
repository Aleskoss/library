class Book{
  static library = []
  constructor(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID()
  }
  toggleReadStatus = () => {
    return this.read === "not yet" ? this.read = "read" : this.read = "not yet"
  }
  static addBookToLibrary = () => {
  const bookBtn = document.querySelector(".add-btn")
  bookBtn.addEventListener("click", (event) =>{
    event.preventDefault()
    let authorPrompt = document.querySelector("#author").value
    let titlePrompt = document.querySelector("#title").value
    let pagesPrompt = document.querySelector("#pages").value
    let book = new Book(titlePrompt, authorPrompt, pagesPrompt, "not yet")
    this.library.push(book)
    this.init()
  })
}
  static displayBooks = () => {
  const table = document.querySelector("table")
  while(table.lastChild){
    table.removeChild(table.lastChild)
  }
  const caption = document.createElement("caption")
  caption.textContent = "Books"
  const tRow = document.createElement("tr")
  const thTitle = document.createElement("th")
  thTitle.textContent = "Title"
  tRow.appendChild(thTitle)
  const thAuthor = document.createElement("th")
  thAuthor.textContent = "Author"
  tRow.appendChild(thAuthor)
  const thPages = document.createElement("th")
  thPages.textContent = "Pages"
  tRow.appendChild(thPages)
  const thRead = document.createElement("th")
  thRead.textContent = "Read"
  tRow.appendChild(thRead)
  table.appendChild(caption)
  table.appendChild(tRow)
  for(let i = 0 ; i < this.library.length ; i++){
    const tRow = document.createElement("tr")
    const tdTitle = document.createElement("td")
    const tdAuthor = document.createElement("td")
    const tdPages = document.createElement("td")
    const tdRead = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete")
    const readBtn = document.createElement("button")
    readBtn.classList.add("read")
    table.appendChild(tRow)
    tdTitle.textContent = this.library[i].title
    tdAuthor.textContent = this.library[i].author
    tdPages.textContent = this.library[i].pages
    tdRead.textContent = this.library[i].read
    readBtn.textContent = "Check as read"
    deleteBtn.textContent = "Delete"
    deleteBtn.dataset.id = this.library[i].id
    readBtn.dataset.id = this.library[i].id
    tRow.dataset.id = this.library[i].id
    tRow.appendChild(tdTitle)
    tRow.appendChild(tdAuthor)
    tRow.appendChild(tdPages)
    tRow.appendChild(tdRead)
    tRow.appendChild(deleteBtn)
    tRow.appendChild(readBtn)
  }
}
  static deleteBook = () => {
  const deleteBtns = document.querySelectorAll(".delete")
  deleteBtns.forEach((item) => item.addEventListener("click", () => {
    for(let book of this.library){
      if(item.dataset.id === book.id){
       this.library.splice(this.library.indexOf(book),1)
       localStorage.setItem("library", JSON.stringify(this.library))
      }
    }
    this.init()
  }))
}
  static changeReadStatus = () => {
  const readBtns = document.querySelectorAll(".read")
  readBtns.forEach((item) => item.addEventListener("click", () => {
    for(let book of this.library){
      if(item.dataset.id === book.id){
       this.library[this.library.indexOf(book)].toggleReadStatus()
      }
  }
  this.init()
}))
}
  static init(){
    this.displayBooks()
    this.changeReadStatus()
    this.deleteBook()
  }
}
let book = new Book("helo","asdasdasd","asdawdads","not yet")

Book.init()
Book.addBookToLibrary()
