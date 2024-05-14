$(document).ready(function(){

    $('#get-data').click(function(){
        //wersja 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function(data){

        //         let pId = $('<p></p>').text(`Post Id: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let hr = $('<hr/>');
        //         // console.log(pId);

        //         let jqBody = $('body')
        //         jqBody.append(pId);
        //         jqBody.append(pUserId);
        //         jqBody.append(pTitle);
        //         jqBody.append(pBody);
        //         jqBody.append(hr);
        //     })
        //     .fail(function(error){
        //         console.error(error);
        //     })

        //wersja 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post Id: ${data.id}`);
            let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr/>');
            // console.log(pId);

            let jqBody = $('body')
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);
        })
        .fail(function(error){
            console.error(error);
        })

    })







});