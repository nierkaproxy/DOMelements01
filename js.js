import allCountries from './data.js';


const my_main_div = document.getElementById('main_div');

// i index.html isihard-kodinu header elementa ir pasiselectinu cia 
const continents_buttons = document.querySelector('header')
// susikuriu tuscia masyva su stringu 'all'
const meniu = ['all'];
// toliau 120 eilute

allCountries.map((country, index) => {
    console.log(index + 1);
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
    const p_divas = document.createElement('div');


    p_divas.setAttribute('class', 'p_divas');
    my_country_region.setAttribute("class", "continent");
    my_country_name.innerText = country.name.common;
    my_flags.src = country.flags.png;
    my_country_region.innerText = country.continents;
    lang_title.innerText = 'Languages:'
    country_borders_name.innerText = 'Neighbours: '
    // my_flags.setAttribute('src', country.flags.png);

    if (country.continents == "Africa") {
        my_country_region.setAttribute(
            'style',
            'background-color: yellow;'
        )
    } else if (country.continents == "Europe") {
        my_country_region.setAttribute(
            'style',
            'background-color: lightgreen;'
        )
    } else if (country.continents == "South America") {
        my_country_region.setAttribute(
            'style',
            'background-color: lightblue;'
        )
    } else if (country.continents == "North America") {
        my_country_region.setAttribute(
            'style',
            'background-color: pink;'
        )
    } else if (country.continents == "Asia") {
        my_country_region.setAttribute(
            'style',
            'background-color: orange;'
        )
    } else if (country.continents == "Oceania") {
        my_country_region.setAttribute(
            'style',
            'background-color: beige;'
        )
    } else {
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


    if (Array.isArray(country.capital)) {
        console.log(`Capital: ${country.capital[0]}`);
        my_country_capital.innerText = `Capital: ${country.capital[0]}`;

    } else {
        console.log("Capital data not found")
        my_country_capital.innerText = "Capital data not found"

    }

    for (let j in country.languages) {
        console.log(`Language: ${country.languages[j]} `)
        const li = document.createElement('div');
        li.textContent = `${country.languages[j]}`;
        my_country_lang.appendChild(li);
        naujas_divas.append(my_country_lang);
    }

    for (let k in country.currencies) {
        console.log(country.currencies[k].name)
        my_currency.innerText = `Currency: ${country.currencies[k].name}`
        naujas_divas.appendChild(my_currency)
    }

    if (Array.isArray(country.borders)) {
        naujas_divas.appendChild(country_borders_name);
    }

    for (let h in country.borders) {
        console.log(country.borders[h])
        const country_borders = document.createElement('p');
        country_borders.innerText = `${country.borders[h]}`
        p_divas.append(country_borders)
        naujas_divas.appendChild(p_divas)
    }


    // i tuscia masyva pushinu unikalius kontinentus
    if (!meniu.includes(country.continents[0])) {
        meniu.push(country.continents[0]);
    }
    //toliau 130 eilute

    my_main_div.appendChild(naujas_divas);
    console.log("********************************");
})

// pas mane visi kontinentai kortelese yra h5 elementai, tai visus juos pasiselectinu
const card_continents = document.querySelectorAll('h5');
const my_buttons = document.getElementsByTagName('button');

console.log(meniu)
meniu.forEach(continent => {
    const myBtn = document.createElement('button');
    myBtn.innerText = continent;
    continents_buttons.appendChild(myBtn);

})

console.log(my_buttons)
console.log(card_continents)

for (let one_category of my_buttons) {
    one_category.addEventListener('click',
        () => { getCountries(one_category.innerText) })
}

const getCountries = (continent) => {
    console.log(continent)
    for (let i of card_continents) {
        if (continent === i.innerText || continent === 'all') {
            i.parentElement.setAttribute(
                'style',
                'display: block;'
            )
        } else {
            i.parentElement.setAttribute(
                'style',
                'display: none;'
            )
        }
    }
}


