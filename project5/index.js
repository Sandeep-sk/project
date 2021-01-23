
const api=``; // use user api here
const xhr = new XMLHttpRequest();
//        ----------------------get request---------------
// xhr.open('GET', 'fetchedfile.json', true);
//use this below
// xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`,true); 
// just for demo without internet
xhr.open('GET',`fetchedfile.json`,true);
//what todo on progress (optional)
xhr.getResponseHeader("Content-type", 'application/json');
xhr.onprogress = function () {
    console.log('on progress');
}
xhr.onload = function () {
    if (this.status == 200) {
        let obj = JSON.parse(this.responseText);
        let feild = document.querySelector('.container');
        let details = "";
        obj['articles'].forEach(element => {
            details += `  <div class="container">
                                <div class="box">
                                    <h1 class="title">${element.title}</h1>
                                    <h2 class="publishedAt">${element.publishedAt}</h2>
                                    <div class="maincontent">
                                        <img class="urlToImage" src="bg.jpg">
                                        <div class="main">
                                            <p class="description"><b>Description: </b>${element.description}</p>
                                            <div class="detailsCollect">
                                            <p class="content"> <b>Content: </b>${element.content}</p>
                                            <a href="${element.url}" class"anchor">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
        });
        feild.innerHTML = details;
    }
    else {
        console.log('406 not acceptable');
    }
}
xhr.send();