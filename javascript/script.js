const library = JSON.parse(localStorage.getItem("library")) || []

function Book(title,author,pages){
  this.title = title
  this.author = author
  this.pages = pages
  this.id = crypto.randomUUID()
}
Book.prototype.bookInfo = function(){
  console.log(`The ${this.title} was written by ${this.author}
    and has ${this.pages}`)
}
function addBookToLibrary(){
  let authorPrompt = prompt("Who is the author")
  let titlePrompt = prompt("Book title")
  let pagesPrompt = prompt("How many pages")
  library.push(new Book(titlePrompt, authorPrompt, pagesPrompt))
  localStorage.setItem("library", JSON.stringify(library))
}

addBookToLibrary()

function displayBooks(){
  const table = document.querySelector("table")
  for(let i = 0; i < library.length)
}