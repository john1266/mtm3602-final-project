                                                                                //background image//

async function getImg() {
    base_url =
      "https://api.nasa.gov/planetary/apod?api_key=KlgfX4HNuzKmhWbfNfAuDYwRag9Xx5mkw8qtynY2";
   
      const response = await fetch(base_url);
    const data = await response.json(); 
    console.log(data); 

   
    document.getElementById('bg').src = data.url;
  }
  getImg();

                                                                                    //clock//
function showTime(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var morning_night = '<Div class="message"> Good Morning!</div>';

    if( hr > 12)
    {
        hr-=12
        morning_night = 'Have A goodnight!';
    }

    
    if( hr == 0)
    {
        hr =12
    }

    setTimeout(showTime , 1000);

    var currentTime = hr + ':' + min + ':' + sec + ' ' + morning_night ;
    document.getElementById('clock').innerHTML = currentTime;
}
showTime();

                                                                                                //dates//  

const $Showmemorebutton = document.getElementById('Showmemore')
const $dates = document.getElementById('Calander')

let menuToggle = false

$Showmemorebutton.addEventListener('click', function(){

if (menuToggle === false) {
$dates.style.display = 'block'
menuToggle = true}

else if (menuToggle === true){
    $dates.style.display = 'none'
    menuToggle = false}
})

window.addEventListener('resize' , function(){

    if (window.innerWidth >= 768){
        $dates.style.display = 'none'
        menuToggle = false
    }
})

var today = new Date();
var dy = today.getDate();
var mt = today.getMonth()+1;
var yr = today.getUTCFullYear();

var today = yr + '/' + mt + '/' + dy ;
document.getElementById('Calander').innerHTML = today;

// setting changes //

var colorcg = ['#FF00FF','#FFD700','#ADD8E6','#FF0000','#FF8C00']

var i = 0;

document.getElementById ('changecolor').addEventListener('click' , function (){
    i = i < colorcg.length ?++i : 0; 
    document.getElementById('clock').style.color = colorcg[i]
})

var changesize = ['1rem','2rem','3rem','4rem','5rem']

var i = 0;

document.getElementById ('sizebt').addEventListener('click' , function (){
    i = i < changesize.length ?++i : 0; 
    document.getElementById('clock').style.fontSize = changesize[i]
})





//local storage//

window.localStorage.setItem('colorcg' , 'changesize');
window.localStorage.getItem('user');
