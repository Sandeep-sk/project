// dummy data of profiles of applicants
const profiles = [{ name: "sandy", age: 20, language: "javaScript", framework: 'reactjs', img: 'https://randomuser.me/api/portraits/men/55.jpg', city: "Punjab" },
 { name: "sandy", age: 22, language: "python", framework: 'flask', img: 'https://randomuser.me/api/portraits/men/45.jpg', city: "mumbai" },
  { name: "honey", age: 24, language: "python", framework: 'django', img: 'https://randomuser.me/api/portraits/men/75.jpg', city: "pune" }, 
  { name: "john", age: 26, language: "vanilla js", framework: 'angularjs', img: 'https://randomuser.me/api/portraits/men/25.jpg', city: "kolkata" },
   { name: "shubham", age: 28, language: "javaScript", framework: 'nodejs', img: 'https://randomuser.me/api/portraits/men/35.jpg', city: "goa" },
    { name: "rohit", age: 40, language: "c++", framework: 'c#', img: 'https://randomuser.me/api/portraits/men/33.jpg', city: "khashmir" }];
// iterator to itreates candidates
function cvScanner(profiles) {
    let index = 0;
    return {
        next: function () {
           return  index< profiles.length ? { value: profiles[index++], done: false }:
            { done: true };
        }

    };
}

const candidates = cvScanner(profiles);

nextCandidate();

document.getElementById('btn').addEventListener('click',nextCandidate);
function nextCandidate(event){
     const currentCandidate=candidates.next().value; // get the object
    console.log(currentCandidate);
    if(currentCandidate!=undefined){

        
        let html=`
        <div class="container">
        <img src="${currentCandidate.img}" alt="Image" id="img">
        <ul class="details" id="details">
        <li id="name">Name:${currentCandidate.name}</li>
        <li id="age">Age:${currentCandidate.age}</li>
        <li id="city">City:${currentCandidate.city}</li>
        <li id="language">Language:${currentCandidate.language}</li>
        <li id="framework">FrameWork:${currentCandidate.framework}</li>
        </ul>
        </div>`;
        document.querySelector('#scannerContent').innerHTML=html;
    } 
    else{
        alert('All Application done!');
        window.location.reload();
    }
    
}


