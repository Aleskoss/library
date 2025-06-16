let library = JSON.parse(localStorage.getItem("library")) || []

function Book(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID()
}
Book.prototype.toggleStatus = function(){

}
function addBookToLibrary(){
  const bookBtn = document.querySelector(".add-btn")
  bookBtn.addEventListener("click", () =>{
    let authorPrompt = document.querySelector("#author").value
    let titlePrompt = document.querySelector("#title").value
    let pagesPrompt = document.querySelector("#pages").value
    library.push(new Book(titlePrompt, authorPrompt, pagesPrompt, "not yet"))
    localStorage.setItem("library", JSON.stringify(library))
    displayBooks()
  })
}
function displayBooks(){
  const table = document.querySelector("table")
  while(table.lastChild){
    table.removeChild(table.lastChild)
  }
  const tRow = document.createElement("tr")
  const caption = document.createElement("caption")
  caption.textContent = "Books"
  tRow.appendChild(caption)
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
  table.appendChild(tRow)
  for(let i = 0 ; i < library.length ; i++){
    const tRow = document.createElement("tr")
    const tdTitle = document.createElement("td")
    const tdAuthor = document.createElement("td")
    const tdPages = document.createElement("td")
    const tdRead = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete")
    table.appendChild(tRow)
    tdTitle.textContent = library[i].title
    tdAuthor.textContent = library[i].author
    tdPages.textContent = library[i].pages
    tdRead.textContent = library[i].read
    deleteBtn.textContent = "Delete"
    deleteBtn.dataset.id = library[i].id
    tRow.dataset.id = library[i].id
    tRow.appendChild(tdTitle)
    tRow.appendChild(tdAuthor)
    tRow.appendChild(tdPages)
    tRow.appendChild(tdRead)
    tRow.appendChild(deleteBtn)
  }
}

function deleteBook(){
  const deleteBtns = document.querySelectorAll(".delete")
  deleteBtns.forEach((item) => item.addEventListener("click", () => {
    for(let book of library){
      if(item.dataset.id === book.id){
       library.splice(library.indexOf(book),1)
       localStorage.setItem("library", JSON.stringify(library))
      }
    }
    displayBooks()
  }))
}

displayBooks()

addBookToLibrary()

deleteBook()