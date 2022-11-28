import allCountries from './data.js';
// console.log(allCountries);


// for(let i = 0; i <= 249; i++){
//     console.log(`${i +1} data:`)
//     console.log(`Country name: ${allCountries[i].name.common}`)

//     if(!allCountries[i].capital){
//     console.log("Data about capital not found...")
//     console.log("*************************************")
// }else{
//     console.log(`Capital: ${allCountries[i].capital[0]}`)
//     console.log("*************************************")
// }}


const my_main_div = document.getElementById('main_div');




allCountries.map((country, index)=>{
    console.log(index +1);
    console.log(country.name.common);

    const naujas_divas = document.createElement('div');
    const my_country_name = document.createElement('h3');
    const my_flags = document.createElement('img');
    const my_country_capital = document.createElement('h4');

    my_country_name.innerText = country.name.common;
    my_flags.src = country.flags.png;
    // my_flags.setAttribute('src', country.flags.png);

    my_main_div.appendChild(my_country_name);
    my_main_div.appendChild(my_flags);
    naujas_divas.appendChild(my_country_name);
    naujas_divas.appendChild(my_flags);

    if(Array.isArray(country.capital)){
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0];
        console.log("*************************")
    }else{
        console.log("Data not found")
        my_country_capital.innerText = "Data not found"
        console.log("*************************")
    }

    naujas_divas.appendChild(my_country_capital);
    my_main_div.appendChild(naujas_divas);
})


//1. isspausdinti kuriam continentui priklauso salis

//2. isprintinti kalbas