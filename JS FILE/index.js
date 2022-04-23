

//  Color Generator Function
const colorGenerator = (color) =>{

    if (color) {
        displayColor(color);
    }
    else{
        // basically, the 'toString(20)' is for the number of words excluding space in the name of the color
        // for every time you change the number in the 'toString',change the first two numbers in the '20777215'
        const randomColor = Math.floor(Math.random()*20777215).toString(20);
        displayColor(randomColor);
    }

}
//  Display Color Function
const displayColor = (color) =>{
    let name_value = ntc.name(color);

    document.body.style.backgroundColor = name_value[0];
    colorInput.value = name_value[0];
    colorName.innerHTML = name_value[1];
    hexValue.innerHTML = name_value[0];
    
}

// Button Events 
genSearch.addEventListener("click", function(){
    colorGenerator(colorInput.value);
})

genBtn.addEventListener("click", function(){
    colorGenerator();
})
