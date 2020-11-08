$(document).ready(function(){
    $('#submitWeather').click(function(){
       var city = $("#city") .val();
       if(city != ''){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=19d0d447ec194ab3d3c7e902acb8cbbf",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = show(data);

                $("#show").html(widget);

                $("#city") .val('');
            }
        });
       }else{
           $('#error').html('Field cannot be empty');
       }
    });
});

function show(data){
    var date = new Date(data.dt * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return "<h2><strong>Current weather for: </strong>" + data.name + ", " + data.sys.country + ". " + months[date.getMonth()] + " " + date.getDate() +  ", " + date.getFullYear() + "</h2>" +
           "<h3><img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'></h3>" +
           "<h3><strong>Temperature</strong>: " + data.main.temp + " °C</h3>" +
           "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>" +
           "<h3><strong>Wind speed</strong>: " + data.wind.speed + " m/s</h3>" 
};
