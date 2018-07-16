define([] , function(){
    function generateCarCard(cars){
        var template = document.querySelector('#car-card').innerHTML;
        var title = cars.brand + ' ' +cars.model + ' '+ cars.year;
        template =template.replace('{{title}}',title);
        template =template.replace('{{details-id}}',cars.details_id);
        template =template.replace('{{image}}', cars.image);
        template =template.replace('{{price}}', cars.price);
        return template;
    }

    function appendsCars(cars){
        document.getElementById('first-load').innerHTML = "";
        var cardHtml = "";
        for(var i =0; i< cars.length; i++){
            cardHtml +=generateCarCard(cars[i].value);
        }
        document.querySelector('.mdl-grid').insertAdjacentHTML('beforeend',cardHtml);
        //fix for IE
        document.querySelector('.mdl-layout__content').style.display ='none';
        document.querySelector('.mdl-layout__content').style.display ='inline-block';
    }
    return{
        appendCars : appendsCars
    }
    
});