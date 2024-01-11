// Selecting the parent element with the id "book-list" and the "ul" element inside it with 'const del' as variable
const del = document.querySelector('#book-list ul');
// Adding a click event listener to the parent element to handle delete 'del' button clicks 
del.addEventListener('click', function(e){
    // Checking if the clicked element has the class "delete" .target and className
    if (e.target.className = 'delete'){
        // Accessing the parent <li> element of the clicked delete button and removing it from the DOM 'cont li' 'parentElemtnt'
        const li = e.target.parentElement;
        // using the del variable remove the Child u already targeted 
        del.removeChild(li);
    }
});
// here we are trying to add book
// Selecting the "add-book" form and adding a with const addForm
const addForm = document.querySelector('#add-book');
//  event listener with submit as the listener to handle book addition
addForm.addEventListener('submit', function(e){    
    // Preventing the default form submission behavior
    e.preventDefault();
    // Getting the value entered in the book input field 'const book' as variable (.value)
    const book = addForm.querySelector('input[type="text"]').value;

    // Creating new elements for the book entry
    // create a const li variable...to creat a li element using doc.createEle
    const li = document.createElement('li');
    // create a const bookName variable...to link a span element using doc.createEle
    const bookName = document.createElement('span')
    //create a const deleteBtn variable...to creat a span element using doc.createEle
    const deleteBtn = document.createElement('span')

    // Adding content to the newly created elements
    // adding content delete in the deleteBtn using a method textContent & assigning "delete" to it
    deleteBtn.textContent = 'delete';
    // adding content book in the bookName using a method textContent & assigning book..the text the user provided
    bookName.textContent = book;

    // Appending the new elements to the document (inserting it in the html file)
    //using the appendChild function add bookName to li
    li.appendChild(bookName);
    //using the appendChild function add deleteBtn to li
    li.appendChild(deleteBtn);
    // now append all li to the parent element which is the ul...given as del
    del.appendChild(li);

    // Adding classes to the created elements for styling
    // using classList.add function and the class 'name' in bookName
    bookName.classList.add('name')
    // using classList.add function and the class 'delete' in deleteBtn
    deleteBtn.classList.add('delete')
});


// Handling the "hide books" checkbox to show or hide the book list
const hideBox = ______("#hide");
hideBox.___("change", function(e){
    if(hideBox.checked){
        del.______ = "none";
    } else {
        del.style.display = ______;
    }
});

// Handling the search bar input for filtering books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.___("keyup", function(e){
    // Getting the search term entered in the input field
    const term = e.target.value.toLowerCase();
    const books = del.______('li');

    // Looping through the books and displaying or hiding based on the search term
    Array.from(books).forEach(function(book){
        const title = book.______.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
            book.style.display = "block";
        } else {
            book.style.display =______
        }
    });
});

// Handling tabbed content for switching between panels
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.___("click", function(e){
    if(e.target.tagName == "LI"){
        // Getting the target panel based on the clicked tab and adding or removing "active" class
        const targetPanel = ______(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.______.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    }
});






















































































/* const del = document.querySelector("#book-list ul");



    del.addEventListener("click", function(e){
        if(e.target.className == "delete"){
            const li = e.target.parentElement;
            del.removeChild(li);
        }
        
    })

        const addForm = document.forms["add-book"];

        addForm.addEventListener("submit", function(e){
            e.preventDefault();
            const book = addForm.querySelector('input[type="text"]').value;
            

            
        // creating element

        const li = document.createElement("li")
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add content
        deleteBtn.textContent = "delete"
        bookName.textContent = book;

        //append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        del.appendChild(li);

        bookName.classList.add("name")
        deleteBtn.classList.add("delete")

        
})

//hide books
const hideBox = document.querySelector("#hide")
hideBox.addEventListener("change", function(e){
    if(hideBox.checked){
        del.style.display = "none";
    }else {
        del.style.display = "initial";
    }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const books = del.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title= book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!= -1){
            book.style.display ="block";
        }else{
            book.style.display = "none";
        }
    })
})

// tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add("active");
            }else{
                panel.classList.remove("active");
            }
        })
    }
}) */