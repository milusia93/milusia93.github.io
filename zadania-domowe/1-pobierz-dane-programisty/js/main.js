$(document).ready(function(){

     $('.btnDownload').click(function(){
        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(data =>{
            // console.log(data)

            let newDiv = document.createElement('div');
            let imie = document.createElement('p');
            let nazwisko = document.createElement('p');
            let zawod = document.createElement('p');
            let firma = document.createElement('p');

            
            imie.innerText = `Imię: ${data.imie}`;
            nazwisko.innerText = `Imię: ${data.nazwisko}`;
            zawod.innerText = `Imię: ${data.zawod}`;
            firma.innerText = `Imię: ${data.firma}`;
            // console.log(data.imie);

            newDiv.setAttribute('id','dane-programisty');
            // console.log(newDiv);

            document.body.appendChild(newDiv);
            newDiv.appendChild(imie);
            newDiv.appendChild(nazwisko);
            newDiv.appendChild(zawod);
            newDiv.appendChild(firma);


            // document.body.newDiv.appendChild(firma);



        });
            
    });    
    
    
    
    
    
    
    
    
    
    
    // fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    //     .then(response => response.json())
    //     .then(data => {
 
    //         console.log(data);
    //     });  




    // $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    //     .then(response => response.json())
    //     .then(data => {
 
    //         console.log(data);
    //     }); 
    
    


    // $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
    //     console.log(data);
    // })




    // $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
    //     console.log(data);

    //     })



    // $('.btnDownload').click(function(){
    //     $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
    //         console.log(data)

    //         let newDiv = document.createElement('div');
    //         let imie = document.createElement('p');
    //         let nazwisko = document.createElement('p');
    //         let zawod = document.createElement('p');
    //         let firma = document.createElement('p');

    //         newDiv.innerText = 'new Div';
    //         imie.innerText = `Imię: ${data.imie}`;
    //         nazwisko.innerText = `Imię: ${data.nazwisko}`;
    //         zawod.innerText = `Imię: ${data.zawod}`;
    //         firma.innerText = `Imię: ${data.firma}`;
    //         console.log(data.imie);

    //         newDiv.setAttribute('id','dane-programisty');
    //         console.log(newDiv);

    //         document.body.appendChild(newDiv);
    //         newDiv.appendChild(imie);
    //         newDiv.appendChild(nazwisko);
    //         newDiv.appendChild(zawod);
    //         newDiv.appendChild(firma);


    //         // document.body.newDiv.appendChild(firma);





    //     });
            
    // });

    // $('.btnDownload').click(function(){
    //     $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
    //         $('.mainDiv').append('<div id="dane-programisty""></div>')
    //         $('#dane-programisty').append(data);

    //     });
            
    // });

    




});