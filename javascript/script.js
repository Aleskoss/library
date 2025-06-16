const library = JSON.parse(localStorage.getItem("library")) || []

function Book(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID()
}
Book.prototype.bookInfo = function(){
  console.log(`The ${this.title} was written by ${this.author}
    and has ${this.pages}`)
}
function addBookToLibrary(){
  let authorPrompt = document.querySelector("#author").value
  let titlePrompt = document.querySelector("#title").value
  let pagesPrompt = document.querySelector("#pages").value
  let read = document.querySelector("#read").value
  read === "on" ? read = "yes" : read = "not yet"
  library.push(new Book(titlePrompt, authorPrompt, pagesPrompt, read))
  localStorage.setItem("library", JSON.stringify(library))
  deleteBtn.dataset.add("delete-btn")
}

function displayBooks(){
  const table = document.querySelector("table")
  for(let i = 0 ; i < library.length ; i++){
    const tRow = document.createElement("tr")
    const tdTitle = document.createElement("td")
    const tdAuthor = document.createElement("td")
    const tdPages = document.createElement("td")
    const tdId = document.createElement("td")
    const tdRead = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    table.appendChild(tRow)
    tdTitle.textContent = library[i].title
    tdAuthor.textContent = library[i].author
    tdPages.textContent = library[i].pages
    tdId.textContent = library[i].id
    tdRead.textContent = library[i].read
    deleteBtn.textContent = "Delete"
    deleteBtn.dataset.id = library[i].id
    tRow.appendChild(tdTitle)
    tRow.appendChild(tdAuthor)
    tRow.appendChild(tdPages)
    tRow.appendChild(tdId)
    tRow.appendChild(tdRead)
    tRow.appendChild(deleteBtn)
  }
}

displayBooks()


const bookBtn = document.querySelector(".add-btn")

bookBtn.addEventListener("click", addBookToLibrary)

function deleteFromLibrary(){

}

