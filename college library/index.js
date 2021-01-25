class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    show(args) {

        let messageField = document.querySelector('.messageComes');
        let message;
        if (args == 'Success') {
            message =
                `<div class="message">
            <h3><bold>${args}</bold>:Your Form has been submitted Sucessfully</h3>
            </div>`;

        }
        else {
            message =
                `<div class="message">
            <h3><bold>${args}</bold>:Your Form has not  Submitted some error occured</h3>
            </div>`;

        }
        messageField.innerHTML = message;
        setTimeout(() => {
            messageField.innerHTML = "";
        }, 3000);

    }
    clear() {
        document.getElementById('formid').reset();
    }
    showbooks() {

        let bookstore = localStorage.getItem('library');
        let tablebody = document.getElementById('idtable');
        if (bookstore == null) {
            document.getElementById('defaultmessage').innerHTML = `<div class="default">Add Your Books</div>`;
        }
        else {
            document.getElementById('defaultmessage').innerHTML ='';
            let array = JSON.parse(bookstore);
            array.forEach((book, index, array) => {
                let html;
                if ((index % 2 != 0)) {

                    html =
                        `<tr class="active-row">
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                     </tr>`;
                }
                else {

                    html =
                        `<tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                         <td>${book.type}</td>
                         </tr>`;
                }
                tablebody.innerHTML += html;
            })
        }
    }
    add(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            // console.log("not valid form data");
        }
        else {
            let html =
                `<tr class="tr">
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;
            let tablebody = document.getElementById('idtable');
            tablebody.innerHTML += html;
        }
    }

    store(book) {
        let libraryStore = localStorage.getItem('library');
        if (libraryStore == null) {
            var array = [];
        }
        else {
            array = JSON.parse(libraryStore)
        }
        array.push(book);
        localStorage.setItem('library', JSON.stringify(array));
    }
}
let showbooks = new Display();
showbooks.showbooks();

document.getElementById('formid').addEventListener('submit', submit);
function submit(event) {
    let name = document.getElementById('book').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let cooking = document.getElementById('cooking');
    let biography = document.getElementById('biography');
    let comic = document.getElementById('comic');
    let mystery = document.getElementById('mystery');
    let adventure = document.getElementById('adventure');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (comic.checked) {
        type = comic.value;
    }
    else if (mystery.checked) {
        type = mystery.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }
    else {
        type = biography.value;

    }

    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.store(book);
        display.add(book);
        display.show('Success');
    }
    else {
        display.show('Error');
    }
    display.clear();
    event.preventDefault();
}


