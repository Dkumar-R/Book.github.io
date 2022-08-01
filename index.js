// console.log("Our Book Library was");

function Book(title, auther, type) {
    this.title = title;
    this.auther = auther;
    this.type = type;

}
// Display 
function Display() {

}

// Add method to display prototype.
Display.prototype.add = function (book) {
    // console.log("Adding to Web");
    tableBody = document.getElementById('tableBody')
    let UIString = `
                        <tr>
                        <td>${book.title}</td>
                        <td>${book.auther}</td>
                        <td>${book.type}</td>
                        </tr>`;
    tableBody.innerHTML += UIString;
}



//Clear Display method function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Validate function
Display.prototype.validate = function (book) {
    if (book.title.length < 2 || book.auther.length < 2) {
        // console.log("falas")
        return false;
    } else {
        // console.log("ture")
        return true
    }
}


Display.prototype.show = function (type, message1) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong>  ${message1}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    setTimeout(function () {
        message.innerHTML = ""
    }, 2000);
    // console.log(typeof (message))
}

// Add submit event when you clicked
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    // console.log('You have click submit');
    let title = document.getElementById('bookName').value;
    let auther = document.getElementById('Author').value;

    let type;
    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Programing.checked) {
        type = Programing.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }

    let book = new Book(title, auther, type,);
    // console.log(book);
    // console.log(typeof (book))

    // Display Method
    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show("success", "Your book was add <strong> : )</strong>");
    }
    else {
        // Show error to user.
        display.show("danger", "Your book was not add <strong>: (</strong>");
    }
    //---------------------------- localStorage save--------------------------------
    // console.log(book);
    // console.log(typeof (book))
    // let user = localStorage.setItem("book",JSON.parse(book));
    e.preventDefault();
}
// let libraryForm2 = document.getElementById('libraryForm');
// libraryForm2.addEventListener('submit', UpLocaleStore);
// function UpLocaleStore() {
//     // console.log('You have click submit');
//     let title = document.getElementById('bookName').value;
//     let auther = document.getElementById('Author').value;

//     let type;
//     if (Fiction.checked) {
//         type = Fiction.value;
//     }
//     else if (Programing.checked) {
//         type = Programing.value;
//     }
//     else if (Cooking.checked) {
//         type = Cooking.value;
//     }

//     let book = new Book(title, auther, type,);
    


// };
