const vino  = fetch("https://restcountries.eu/rest/v2/all")
.then((data) => data.json())

  const display = document.createElement("div");
  display.setAttribute("class", "container");

async function btnFunction(){
   
       const countryName = document.querySelector(".search-country").value
       
       const data = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
       const countries = await data.json();
  
   const info = document.createElement("div");
        info.setAttribute("class", "info-container");

  display.innerHTML="";
  
      countries.forEach((a)=>{
       
  info.innerHTML = `
  <div class="flag-container">
       <img class="flag" src=${a.flag}  />
  </div>
  
  <div class="details">
    <h2>${a.name}</h2>
    <p><b>Population:</b>${a.population}</p>
    <p><b>Region:</b>${a.region}</p>
    <p><b>Capital:</b>${a.capital}</p>
  </div>
</div>
 `;
})
       console.log(countries[0].name);
       console.log(countries[0].region);
       console.log(countries[0].capital);
       console.log(countries[0].population);
 
display.append(info)
document.body.append(display);
}