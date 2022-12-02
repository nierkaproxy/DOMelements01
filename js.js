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
    console.log(`Country name: ${country.name.common}`);
    console.log(`Continent: ${country.continents}`);

    
    const naujas_divas = document.createElement('div');
    const my_country_name = document.createElement('h2');
    const my_flags = document.createElement('img');
    const my_country_capital = document.createElement('h3');
    const my_country_region = document.createElement('h5');
    const my_country_lang = document.createElement('h4');
    const my_currency = document.createElement('h4');
    const lang_title = document.createElement('h3');
    const country_borders_name = document.createElement('h4');

    
    my_country_region.setAttribute("class", "continent");
    my_country_name.innerText = country.name.common;
    my_flags.src = country.flags.png;
    my_country_region.innerText = country.continents;
    lang_title.innerText = 'Languages:'
    country_borders_name.innerText = 'Neighbours: '
    // my_flags.setAttribute('src', country.flags.png);

    if(country.continents == "Africa"){
        my_country_region.setAttribute(
            'style',
            'background-color: yellow;'
        )
    }else if(country.continents == "Europe"){
        my_country_region.setAttribute(
            'style',
            'background-color: lightgreen;'
        )
    }else if(country.continents == "South America"){
        my_country_region.setAttribute(
            'style',
            'background-color: lightblue;'
        )
    }else if(country.continents == "North America"){
        my_country_region.setAttribute(
            'style',
            'background-color: pink;'
        )
    }else if(country.continents == "Asia"){
        my_country_region.setAttribute(
            'style',
            'background-color: orange;'
        )
    }else if(country.continents == "Oceania"){
        my_country_region.setAttribute(
            'style',
            'background-color: beige;'
        )
    }else{
        my_country_region.setAttribute(
            'style',
            'background-color: blue;'
        )
    }

    naujas_divas.appendChild(my_country_region);
    naujas_divas.appendChild(my_flags);
    naujas_divas.appendChild(my_country_name);
    naujas_divas.appendChild(my_country_capital);
    naujas_divas.appendChild(lang_title);
  

    if(Array.isArray(country.capital)){
        console.log(`Capital: ${country.capital[0]}`);
        my_country_capital.innerText = `Capital: ${country.capital[0]}`;

    }else{
        console.log("Capital data not found")
        my_country_capital.innerText = "Capital data not found"

    }

    for(let j in country.languages){
        console.log(`Language: ${country.languages[j]}`)
        const li = document.createElement('div');
        li.textContent = `${country.languages[j]}`;
        my_country_lang.appendChild(li);
        naujas_divas.append(my_country_lang);
    }

    for(let k in country.currencies){
        console.log(country.currencies[k].name)
        my_currency.innerText = `Currency: ${country.currencies[k].name}`
        naujas_divas.appendChild(my_currency)
    }

    if(Array.isArray(country.borders)){
        naujas_divas.appendChild(country_borders_name);
    }

    for(let h in country.borders){
        console.log(country.borders[h])
        const country_borders = document.createElement('p');
        country_borders.innerText = `${country.borders[h]}`
        naujas_divas.append(country_borders)
    }
    

    my_main_div.appendChild(naujas_divas);
    console.log("********************************");
})
// const buttonai = document.querySelector('header')


// const getCountry = () => {
//     if(buttonai == "Africa"){
        
//     }
// }

// buttonai.addEventListener('click', getCountry)

// naudoti includes del buttonu, ir ne i hardkodinti

