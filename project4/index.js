showfunction();
//-------------------------------------------------------------------------------------
// add click event on add notes button to get the text value and store in localStorage
let clickbtn = document.getElementById('btn').addEventListener('click', get);
function get() {
    var getTextElement = document.getElementById('txt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        var notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); // get the value of notes
    }
    if (getTextElement.value == "") {
        // console.log("First write someting");
        alert("First Add somthing");
    }
    else {
        notesobj.push(getTextElement.value);
    }
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showfunction();
    document.getElementById('txt').value = "";
}
//-------------------------------------------------------------------------------------
// showfunction is used to print content form localStroage
function showfunction() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        var notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); // get the value of notes
    }
    let html = "";
    notesobj.forEach(function (element, index) {

        html += `
            <div class="box">
                    <h1 id="h1">Notes${index + 1}</h1>
                    <p id="p">${element}</p>
                    <button  class="btn" type="submit"  onclick ="deletenote(${index})" id="delete" class="btn">Delete</button>
            </div>
        `;
    });

    if (typeof localStorage.notes == 'undefined') {
        document.getElementById('sectioninside').innerHTML = 'Nothing have to show';
    }
    else if (typeof localStorage.notes == '[]') {
        document.getElementById('sectioninside').innerHTML = 'Nothing have to show';
    }
    else {
        document.getElementById('sectioninside').innerHTML = html;

    }
}
//-------------------------------------------------------------------------------------
// deleting an element(div complete tag) from localStorage 

function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        var notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes); // get the value of notes
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showfunction();
}
//-------------------------------------------------------------------------------------
//                      Searching element in paragraph 
let searchelement = document.getElementById('idinput');
searchelement.addEventListener("input", function () {
    let a = document.getElementsByClassName('box');
    Array.from(a).forEach((element) => {
        let notetext = element.getElementsByTagName('p')[0];
        let inputvalue = searchelement.value.toLowerCase();
        if (notetext.innerText.includes(inputvalue)) {
            // console.log("yes");
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});
//-------------------------------------------------------------------------------------
// add color effect on heading 
//                                on mouse moving, on heading changing its color and make it permanent
document.getElementById('firsth1').addEventListener('mousemove',function(element){
    console.log(element.offsetX,element.offsetY);
    document.getElementById('firsth1').style.color=`rgb(${element.offsetX},${element.offsetX},${element.offsetY+99})`;
});



