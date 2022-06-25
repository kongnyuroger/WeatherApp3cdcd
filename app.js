 var button = document.querySelector('.button');
 var inputValue = document.querySelector('.inputValue');
 var desc = document.querySelector('.desc');
 var nameOfCity = document.querySelector('.name');
 var temp = document.querySelector('.temp');


 fetch('https://api.openweathermap.org/data/2.5/weather?q=buea&appid=59e4e5885149aa4a718c835d5f04a5c9')
 .then(response => response.json())
 .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather']['0']['description'];

    nameOfCity.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
 })


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=59e4e5885149aa4a718c835d5f04a5c9')
   .then(response => response.json())
   .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather']['0']['description'];

      nameOfCity.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
   })

   

   .catch(err => alert("wrong city name!"))
})  



