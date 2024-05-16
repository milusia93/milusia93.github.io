let endOfThePage = 0;

let preloding = false;

const showPreloader = () =>{
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    preloding = true;
}

const hidePreloader = () =>{
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloding = false;
}

const scrollToEndOfPage = () => {
    let d = document.documentElement
    let height = d.scrollHeight;
    let top = d.scrollTop;
    let cHeight = d.clientHeight;
    let sumTopCHeight = Math.ceil(top + cHeight);

    if (sumTopCHeight >= height){
        
        getData()
        endOfThePage += 1;
        console.log(`Scrolled to the end of the page: ${endOfThePage}`);
        }
}

const getData = () => {

    if(!preloding){
        showPreloader()

        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data =>{
            
            console.log(data)
            let body = document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);
            // let names = data
            // console.log(names)
            data.forEach(element => {
                let uId = document.createElement('p');
                let uName = document.createElement('p');
                let uUrl = document.createElement('p');

                uId.innerText = `User ID: ${element.id}`;
                uName.innerText = `User Name: ${element.name}`;
                uUrl.innerHTML = `User URL: ${element.website}<br>--------`;

                body.appendChild(uId);
                body.appendChild(uName);
                body.appendChild(uUrl);

            });
           
            hidePreloader()
        })
        .catch(error => {
            console.error(error);
        })

    }

}
window.addEventListener('scroll',scrollToEndOfPage);