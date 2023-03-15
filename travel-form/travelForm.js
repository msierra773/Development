var airlineform = document["airline-form"];

const dietArray = [];

airlineform.addEventListener("submit", (e) => {

    for(let i = 0 ; i < airlineform.diet.length; i++)
    {
        if(airlineform.diet[i].checked)
        dietArray.push(airlineform.diet[i].value)
    }


  e.preventDefault();
  alert(
    "First Name : " +
      airlineform["first-name"].value +
      "\nLast Name : " +
      airlineform["last-name"].value +
      "\nAge : " +
      airlineform.age.value +
      "\nGender :" +
      airlineform.gender.value +
      "\nLocation : " +
      airlineform.city.value +
      "\nDietary :" +
      dietArray
  );
});




