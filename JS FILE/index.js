

//  Color Generator Function
const colorGenerator = (color) =>{

    if (color) {
        displayColor(color);
    }
    else{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
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

// colorGenerator();