$(function(){
    $('#bsup_inicio').click(function(){
        $('.page').fadeOut();
        $('#home_page').fadeIn();
    });

    $('#bsup_normas').click(function(){
        $('.page').fadeOut();
        $('#normas_page').fadeIn();
    });

    $('#bsup_adm').click(function(){
        $('.page').fadeOut();
        $('#adm_page').fadeIn();
        if($('#estado_opos').text() == 'open'){
            $('#formulario_adm').show();
            $('#estado_opos').html(`<i>Pruebas de Acceso: <span style="color:green">ABIERTAS<span></br> Instancia de acceso: 17/6/2022 - 20/6/2022</br> Prueba Teórica: 21/6/2022 a las 18:00 en la comisaria de Mission Row</br> Pruebas Prácticas: 22/6/2022 a las 17:00 en la comisaria de Mission Row</i>`)
        }else if($('#estado_opos').text().startsWith('res:') == true){
            $('#formulario_adm').hide();
            $('#adm_results').show();
            $('#admitidos_title').html(`<i>Resolucion de Acceso ${$('#estado_opos').text().replace("res:","")}</i>`)
            $('#estado_opos').html('<i>Pruebas de Acceso: <span style="color:red">CERRADAS<span></i>')
        }else{
            $('#formulario_adm').hide();
            $('#estado_opos').html('<i>Pruebas de Acceso: <span style="color:red">CERRADAS<span></i>')
        };
    });

    $('#bsup_dir').click(function(){
        $('.page').fadeOut();
        $('#dir_page').fadeIn();
    })

    $('#bsup_contact').click(function(){
        $('.page').fadeOut();
        $('#contact_page').fadeIn();
    })
    
    
    // SLIDER //
    //If you want to include more images, add the link name and URL of the image in the array list below.
        let images_list = [
            {"url":"https://cdn.discordapp.com/attachments/832336966787792947/944597822882340894/unknown.png","name":"image 1","link":""},
            {"url":"https://cdn.discordapp.com/attachments/832336966787792947/944599484602662962/unknown.png","name":"image 2","link":""},
            {"url":"https://media.discordapp.net/attachments/839996648259321867/849731842214723634/unknown.png","name":"image 3","link":""},
            {"url":"https://cdn.discordapp.com/attachments/832336966787792947/944939658633175060/unknown.png","name":"image 4","link":""},
        ];
    
        let slider_id = document.querySelector("#hcg-slider-1");
    
        // append all images
        let dots_div = "";
        let images_div = "";
        for (let i = 0; i < images_list.length; i++) {
            // if no link without href="" tag
            let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
            images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
                            '<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
                            '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                         '</a>';
            dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
        }
        slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
        slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;
    
        let slide_index = 0;
    
        let images = slider_id.querySelectorAll(".hcg-slides");
        let dots = slider_id.querySelectorAll(".hcg-slide-dot");
        function showSlides() {
            if (slide_index > images.length-1) {
                slide_index = 0;
            }
            if (slide_index < 0) {
                slide_index = images.length-1;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
                dots[i].classList.remove("dot-active");
                if (i == slide_index) {
                    images[i].style.display = "block";
                    dots[i].classList.add("dot-active");
                }
            }
        }
    
        function dot_click(event) {
            slide_index = event.target.dataset.id;
            showSlides();
        }
    
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", dot_click, false);
        }
        setInterval(function(){
            slide_index++;
            showSlides();
        }, 5000);
    
    })();
    
    
    