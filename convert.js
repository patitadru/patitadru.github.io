window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded() {
   document.getElementById("cInput").addEventListener("input", function (event){
      document.getElementById('fInput').value = "";
   })
   
   document.getElementById("fInput").addEventListener("input", function (event){
      document.getElementById('cInput').value = "";
      })
   document.getElementById("convertButton").addEventListener("click", function(){
      var cTemp = document.getElementById('cInput').value;
      var fTemp = document.getElementById('fInput').value;
      if(cTemp != ''){
        var cTofTemp = convertCtoF(cTemp);
        document.getElementById('fInput').value= cTofTemp;
      }else if(fTemp != ''){
         var fTocTemp = convertFtoC(fTemp);
        document.getElementById('cInput').value= fTocTemp;
      }
   })
   
}

function convertCtoF(celsius) {
   // This function converts Celsius to Farenheit
   var convertCtoF = celsius * 9/5 +32;
   if(convertCtoF.toFixed(2) < 32) {
      document.getElementById('weatherImage').src = "cold.png" 
   }
   else if (convertCtoF.toFixed(2)>= 32 && convertCtoF.toFixed(2)<=50){
      document.getElementById('weatherImage').src = "cool.png" 

   } else if(convertCtoF.toFixed(2)>50){
      document.getElementById('weatherImage').src = "warm.png" 

   }
   const Fahrenheit = parseFloat(convertCtoF)
   if(isNaN(Fahrenheit)){
      document.getElementById("errorMessage").innerHTML=celsius+" is not a number"
      return "";
   } else {
      document.getElementById("errorMessage").innerHTML=""
   }
   return Fahrenheit;
}

function convertFtoC(fTemp) {
   // TODO: Complete the function
   var convertFtoC =  (fTemp - 32) * 5 / 9;
   console.log(parseFloat(fTemp))
   if(parseFloat(fTemp) < 32) {
      document.getElementById('weatherImage').src = "cold.png" 
   }
   else if (parseFloat(fTemp)>= 32 && parseFloat(fTemp)<=50){
      document.getElementById('weatherImage').src = "cool.png" 

   } else if(parseFloat(fTemp)>50){
      document.getElementById('weatherImage').src = "warm.png" 

   }
  const Celsius = parseFloat(convertFtoC)
   if(isNaN(Celsius)){
      document.getElementById("errorMessage").innerHTML=fTemp+" is not a number"
      return "";
   } else {
      document.getElementById("errorMessage").innerHTML=""
   }
   return Celsius;
}

function clearCelsius() {
   document.getElementById('cInput').value = "";

}

function clearFahrenheit () {
   document.getElementById('fInput').value = "";
}

