const  wrapper = document.querySelector('.wrapper'),
searchInput = wrapper.querySelector('.search input'),
temp = wrapper.querySelector(".temperature"),
infoText= wrapper.querySelector(".info-text");
let  wIcon=wrapper.querySelector('.weather-part img'),
currentDate=wrapper.querySelector('.date'),
searchBtn=wrapper.querySelector(".search-btn"),
removeIcon = wrapper.querySelector(".search span");

let months=['January' ,'Febrauary', 'March', 'April' ,'May', 'June','July','August' ,'September' ,'October','November' ,'December'];
let days=['sunday', 'Monday','Tuesday','Wedenesday','Thursday','Friday','Saturaday'];

const regionNames = new Intl.DisplayNames(
  ['en'], {type: 'region'}
);

function showWeather(city,result){
  console.log(result);
  if(result.cod == "404"){
    infoText.innerHTML=`Can't find the city <span>${city}</span>`;
  }else{
      wrapper.classList.add("active");
      let country=regionNames.of(result.sys.country);
      let description=result.weather[0].description;
      let id =result.weather[0].id;
      const {temp, feels_like, humidity} = result.main;
      const d = new Date();
      var month=months[d.getMonth()];
      var day=days[d.getDay()];
      var date=d.getDate();

      wrapper.querySelector('.temperature .numb').innerText=Math.floor((temp-273.15));
      wrapper.querySelector('.weather').innerText=description;
      wrapper.querySelector('.location .city-name').innerText=city;
      wrapper.querySelector('.location .country-name').innerText=country;
      currentDate.querySelector('.day').innerText=day;
      currentDate.querySelector('.current-date').innerText=date;
      currentDate.querySelector(".month").innerText=month;
      wrapper.querySelector('.feels .temp .numb').innerText=Math.floor((feels_like-273.15));
      wrapper.querySelector('.humidity  .perc').innerText=humidity+"%";
      console.log(humidity);
    if(id == 800){
        wIcon.src = "./Weather Icons/clear.svg";
    }else if(id >= 200 && id <= 232){
        wIcon.src = "./Weather Icons/storm.svg";  
    }else if(id >= 600 && id <= 622){
        wIcon.src = "./Weather Icons/snowy.svg";
    }else if(id >= 701 && id <= 781){
        wIcon.src = "./Weather Icons/haze.svg";
    }else if(id >= 801 && id <= 804){
        wIcon.src = "./Weather Icons/cloud.svg";
    }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
        wIcon.src = "./Weather Icons/rain.svg";
    }
      infoText.innerText = "";
      searchInput.value="";
      
  }

}


function fetchWeather(city , data){
  if(data.length == 0){
    infoText.innerHTML=`Can't find the city <span>${city}</span>`;
  }else{
    var lat=data[0].lat;
    var lon=data[0].lon;
    let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4de20f4adc0cc2190615b7e525188780`;
    fetch(url).then(res =>res.json()).then(result =>showWeather(city,result));
  }
   
}

function fetchCity(city){
  wrapper.classList.remove("active");
  infoText.style.color='#000';
  infoText.innerHTML = `Getting the weather of <span>"${city}"</span>`;
  let url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=4de20f4adc0cc2190615b7e525188780`;
  fetch(url).then(res =>res.json()).then(data => fetchWeather(city ,data));

}

searchInput.addEventListener('keyup', e =>{
  if(e.key === 'Enter' && e.target.value){
      fetchCity(e.target.value);
  }

});

searchBtn.addEventListener('click' ,()=>{
   if(searchInput.value!=null){
    fetchCity(searchInput.value);  
   }

})

removeIcon.addEventListener("click",()=>{
  searchInput.value='';
})

$(document).ready(function(){
  var autocomplete;
  var id='location';
autocomplete=new google.maps.places.Autocomplete((document.getElementById(id)),{types:['geocode'],})
})


// let url=`http://api.openweathermap.org/geo/1.0/direct?q=Kanpur&limit=5&appid=4de20f4adc0cc2190615b7e525188780`;
// let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4de20f4adc0cc2190615b7e525188780`;
// fetch(url).then(res =>res.json()).then(data => console.log(data))