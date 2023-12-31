//Defining UI
const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

//Listen for value when calculated clicked
calculateBtn.addEventListener('click',calculateResult);
//Listen for value when option is clicked
temperatureUnit.addEventListener('click',changeUIUnit);

//Defining variables in global scope so that it can be use in outer function.
let celsius,fahrenheit,kelvin;

//Calculate function
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    //Checking the input and assigning if statement according to that
    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            UIresultOutput();
        }

    e.preventDefault();
};

//Dynamically Unit changing function
function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
}

//Appending result into UI function
function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    if(celsius < 0){
        
        document.body.style.backgroundImage = "url('https://www.learnreligions.com/thmb/1EH7zA1xz3TYv9WvaOOlF0nZuSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/himalaya-mountains-landscape-from-kalapattar-view-point-at-sunset--everest-region--nepal-864223704-5c7374c546e0fb0001835dc3.jpg')";
    }
   else if(celsius >= 0  &&  celsius <= 10){
        document.body.style.backgroundImage = "url('https://cdn.britannica.com/06/152306-050-39E998B3/iceberg.jpg')";
    }
    else if (celsius > 10  &&  celsius <= 25) {
        document.body.style.backgroundImage = "url('https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg')";
    }
    else if (celsius > 25  &&  celsius <= 35) {
        document.body.style.backgroundImage = "url('https://a.cdn-hotels.com/gdcs/production93/d498/e9d1655b-1dda-4e21-8402-c7a77c920611.jpg')";
    }
    else if (celsius > 35  &&  celsius <= 45) {
        document.body.style.backgroundImage = "url('https://www.travelandleisure.com/thmb/6pmQIQcehr_iHFpob9v653jrqLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sturts-stony-desert-australia-LILDESERTS0519-19036cd0298e4e3bb67bffbe5e41c1be.jpg')";
    }
    else if( celsius >45 ){
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/6646374.jpg')";
    }

    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}