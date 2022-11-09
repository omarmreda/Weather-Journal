/* Global Variables */
const apiKey ="fcfcd4784f0bad301080c1847755be09&units=metric";
const zipCodeIcon =document.getElementById("zip");
const temp = document.getElementById("temp");
const content = document.getElementById("content");
const cityResult=document.getElementById("city-result");
const feelingInput = document.getElementById("feelings");
const feellingOutput =document.getElementById("content");
const date=document.getElementById("date");
let serverUrl = "http://localhost:8000";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Get Weather data from openweathermap.org.
async function fetchData(){
        let zipCode = zipCodeIcon.value;
        let url=`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;   
    try {
        const res = await fetch(url);
const data = await res.json(); 
const tempOutput=data.main.temp;
console.log(data);
const cityOutput=data.name;
date.innerText= d;
// Updating most recent entry Dynamically.
temp.innerText=`Temperature: ${tempOutput}°C`;
cityResult.innerText=`City: ${cityOutput}`;
feellingOutput.innerText=`My felling is: ${feelingInput.value}`;
// saving project data and posting it to the server. 
projectData={date:d,city:cityOutput,temperature:tempOutput,feelings:feelingInput.value}
postData(serverUrl + "/add",projectData);
}
catch(error){
console.log(`error:${error}`)
temp.innerText=`Zipcode is incorrect.`
}
} 
// Making the generate button clickable.
const generateButton=document.getElementById("generate");
generateButton.addEventListener("click",()=>{
fetchData();
})
// Updating server(post function).
const postData = async (url="",projectData={})=>{
    const response =await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
    });
    try{
        const dataPosted=await response.json();
console.log(dataPosted);
return dataPosted;
    }catch(err){
console.log(`error:${err}`);
    }
}

