let gender
let weight
function saveInfo(event){
    event.preventDefault()
    gender = document.getElementById('select').value
    weight = document.getElementById('inputWeight').value
    if (gender === "" || weight === "") {
        alert("Пожалуйста, заполните все поля");
        return
    }
    if (!isValid(weight)){
        alert('Интересный вес')
        return
    }
    // alert(`Пол: ${gender}, вес: ${weight}`)
    // console.log(gender)
    colorOfGender(gender)
}

function isValid (value){
    if (value <= 0){
        return false
    }
    return true
}

function colorOfGender(value){
    let button = document.getElementById("BtnSubmit");
    let info = document.getElementById('information')
    let select = document.getElementById('select')
    let input = document.getElementById('inputWeight')
    let head = document.getElementById('head')

    head.style.color = '#fff'

    if (value == 'Мужчина'){

        info.style.background = 'rgb(32, 158, 255)';

        select.style.background = 'rgb(0, 145, 255)';
        select.style.borderBottom = '#FF1053 solid 2px';
        input.style.background = 'rgb(0, 145, 255)';
        input.style.borderBottom = '#FF1053 solid 2px';

        // button.style.background = 'rgb(255, 252, 88)';

        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "rgb(255, 252, 88)";
          });
          
          button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "rgb(255, 252, 88)";
          });

          input.addEventListener("focus", function() {
            input.style.boxShadow = "0 0 25px rgb(255, 252, 69)";
          });
          
          input.addEventListener("blur", function() {
            input.style.boxShadow = "0 0 0 0";
          });

          select.addEventListener("focus", function() {
            select.style.boxShadow = "0 0 25px rgb(255, 252, 69)";
          });
          
          select.addEventListener("blur", function() {
            select.style.boxShadow = "0 0 0 0";
          });
    }
    else{

        info.style.background = '#FF0000';
    
        input.style.background = '#ce0000'
        select.style.background = '#ce0000'
        input.style.borderBottom = 'rgb(32, 158, 255) solid 2px'
        select.style.borderBottom = 'rgb(32, 158, 255) solid 2px'

        button.style.background = '#FFA500'

        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#FFC0CB";
          });
          
          button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#FFA500";
          });

          input.addEventListener("focus", function() {
            input.style.boxShadow = "0 0 25px #FFC0CB";
          });
          
          input.addEventListener("blur", function() {
            input.style.boxShadow = "0 0 0 0";
          });

          select.addEventListener("focus", function() {
            select.style.boxShadow = "0 0 25px #FFC0CB";
          });
          
          select.addEventListener("blur", function() {
            select.style.boxShadow = "0 0 0 0";
          });
    }
}
