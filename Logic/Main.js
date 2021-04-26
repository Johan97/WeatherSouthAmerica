//add Event listener button 
document.getElementById('buttondone').addEventListener('click',e =>{

    var currentvalue = document.getElementById('informationcity').value;
    
    //Promise
    let p = new Promise((resolve,reject) =>{
      if (currentvalue!='') {
        resolve(console.log('Enter resolved PROMISE addEventListener'));
      } else {
        reject(console.log('Enter reject PROMISE addEventListener'));
      }
    })
    p.then(res =>{
      cf.getapi(currentvalue);
      console.log('PROMISE SUCCES in addEventListener');

    })
    .catch(err =>{
      alert('Field CITY is empty');
      console.log('PROMISE FAILED in addEventListener');
    });
    
});//End addEventListener


//Class Fetch
class Fetch{
  constructor(){}
  
  async getapi(city){
    
      //console.log('Print input GET API method');
      var response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e7fd49155959b0f3d3e3927b6ab5d8f3');
      var data = await response.json();
      console.log(data);
      cs.toprint(data);
      return data;

  }//End method getapi
}//End class Fetch


//Class Show
class Show{
  constructor (){}

  toprint(data){

    //Promise
    let p = new Promise((resolve,reject) =>{
      if(data!=null){
        resolve(console.log('Enter resolve PROMISE Class Show, Method toprint'));
      }else{
        reject(console.log('Enter reject PROMISE Class Show, Method toprint'));
      }
    });

    p.then(res =>{
      //console.log('I print assigned values ​​from the openweathermap API');
      var city = data['name'];
      //console.log(city);
      var country = data['sys']['country'];
      //console.log(country);
      var main = data['weather'][0]['main'];
      //console.log(main);
      var description = data['weather'][0]['description'];
      //console.log(description);
      var icon = data['weather'][0]['icon'];
      //console.log(icon);
      var temp = data['main']['temp'];
      //console.log(temp);
      var temperaturemin = data['main']['temp_min'];
      //console.log(temperaturemin);
      var temperaturemax = data['main']['temp_max'];
      //console.log(temperaturemax);
      //var timezone = data['sys']['timezone'];
      //console.log(timezone);
      var latitude = data['coord']['lat'];
      //console.log(latitude);
      var length = data['coord']['lon'];
      //console.log(length);
      
      //calculate degrees centigrade
      let c =  temp - 273.15;
      c = Math.round(c) + ' °C';
      let cmin = temperaturemin - 273.15;
      cmin = Math.round(cmin) + ' °C';
      let cmax = temperaturemax - 273.15;
      cmax = Math.round(cmax) + ' °C';

      let concaicon = '<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png">';
      //console.log(concaicon);
      //------show information to user
      document.getElementById('cityname').innerHTML = 'City name: ' + city + ' - Country: ' + country;
      //countrynamejs.innerHTML = 'Country'country;
      document.getElementById('icon').innerHTML = concaicon;
      document.getElementById('wheater').innerHTML = '<strong>Now:</strong> ' + main + ' - <strong>Comments:</strong> ' + description;
      document.getElementById('temperature').innerHTML = '<strong>Temperature in the city:</strong> ' + c;
      document.getElementById('temperature_min').innerHTML = '<strong>Min temperature in the city:</strong> ' + cmin;
      document.getElementById('temperature_max').innerHTML = '<strong>Max temperature in the city:</strong> ' + cmax;
      //document.getElementById('timezone').innerHTML = '<strong>Timezone: </strong>' + timezone;
      document.getElementById('latitude').innerHTML = '<strong>Latitude:</strong> ' + latitude;
      document.getElementById('length').innerHTML = '<strong>Length:</strong> ' + length;
      document.getElementById('idshowinformation').style.visibility = 'visible';
      //set coor to Map
      initMap(latitude,length);
      cf2.getapi(city);
      alert('Your information was consulted successfully');
      console.log('PROMISE SUCCES in Class Show, Method toprint');
    })
    .catch(err =>{
      console.log('PROMISE FAILED in Class Show, Method toprint');
      alert('Information not found');
    });

        
  }//End method toprint

}//End Class Show



//Funtion Map
let map;
function initMap(a,b) {

  //Promise
  let p = new Promise((resolve,reject) =>{
    if (a,b!=undefined) {
      resolve(console.log('Enter resolve PROMISE Funtion initMap'));
    } else {
      reject(console.log('Enter reject PROMISE Funtion initMap'));
    }
  });
  p.then(res =>{
    console.log('Enter map class');
    //console.log(a);
    //console.log(b);
    coord = {lat:a, lng:b};
    map = new google.maps.Map(document.getElementById("map"), {
      center: { 
        lat: a, 
        lng: b
      },
      zoom: 8,
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
      });
      document.getElementById('map').style.visibility = 'visible';
      console.log('PROMISE SUCCES in Funtion initMap');
  })
  .catch(err =>{
    console.log('PROMISE FAILED in Funtion initMap');
    console.log('Coordinates not found');
  });
  
}//End function initMap


//Class Fetch2
class Fetch2{
  async getapi(city){

      //console.log('Print input GET API method');
      var response = await fetch('https://restcountries.eu/rest/v2/capital/' + city);
      //console.log(response);
      var data = await response.json();
      //console.log(data);
      cs2.toprint(data);
      return data;
  }//End method getappi Fetch2
}//End class Fetch2


//Class Show2
class Show2{
  constructor(){

  }

  toprint(data){

//Promise
    let p = new Promise((resolve,reject) => {
      if (data!='') {
        resolve(console.log('Enter resolve PROMISE Class Show2 - method toprint'));
      }else{
        reject(console.log('Enter resolve PROMISE Class Show2 - method toprint'));
      }
    })
    p.then(res => {
      var country = data[0]['name'];
    //var flag = data[0]['flag'];
    //var x = data[0]['cioc'];
    var x = data[0]['alpha3Code'];
    var region = data[0]['region'];
    var subregion = data[0]['subregion'];
    var population = data[0]['population'];
    var demonym = data[0]['demonym'];
    var xlowercase = x.toLowerCase();
    //console.log(xlowercase);
    let conflag = '<img width="50%" height="25%" src="https://restcountries.eu/data/'+xlowercase+'.svg">';

    document.getElementById('p').innerHTML = country;
    document.getElementById('flag').innerHTML =  conflag;
    document.getElementById('region').innerHTML = region + ' - ' + subregion;
    document.getElementById('population').innerHTML = '<strong>Population:</strong> ' + population;
    document.getElementById('demonym').innerHTML = '<strong>Demonym:</strong> ' + demonym;
    document.getElementById('idshowrest').style.visibility = 'visible';
    })
    .catch(err => {
      console.log('FALIED PROMISE in class Show2 - method toprint  ');
    });  
  }//End method toprint
}//End class Show2


var cf = new Fetch();
var cs = new Show();
var cf2 = new Fetch2();
var cs2 = new Show2();