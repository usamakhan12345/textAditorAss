var boldBtn = document.getElementById("boldbtn");
var italicBtn = document.getElementById("italicbtn");
var underLine = document.getElementById("lineBtn");
var colorBtn = document.getElementById("colorBtn");
var txtLeft = document.getElementById("txtLeft");
var txtArea = document.getElementById("txtArea");
var centreBtn = document.getElementById("centreBtn")
var sizeBtn = document.getElementById("size") ;

var isBold = false

boldBtn.addEventListener('click', boldText)
italicBtn.addEventListener('click', ItalicText)
underLine.addEventListener('click', textUnderLine)
colorBtn.addEventListener('click', textChangeColor)
txtLeft.addEventListener('click', textLeft)
centreBtn.addEventListener('click', textCentre)
// sizeBtn.addEventListener('click',TextSizePlus)

function boldText(){
    
    if(isBold){
        txtArea.style.fontWeight = '500' ;
        boldBtn.style.fontWeight = '500' ;
        isBold = false ;

    }
    else {
        txtArea.style.fontWeight = 'bold' ;
        boldBtn.style.fontWeight = 'bold' ;
        isBold = true ;

    }
}
isItalic = false ;
function ItalicText(){
    if(isItalic) {
        txtArea.style.fontStyle = 'normal' ;
        italicBtn.style.fontStyle = 'normal' ;       
        isItalic = false 
    }
    else {
        txtArea.style.fontStyle = 'italic' ;
        italicBtn.style.fontStyle = 'italic' ;       
        isItalic = true 

    }
}

var isUnderLine = false ;
function textUnderLine(){
    if(isUnderLine) {
        txtArea.style.textDecoration = 'none' ;
        underLine.style.textDecoration = 'none' ;       
        isUnderLine = false 
    }
    else {
        txtArea.style.textDecoration = 'underline' ;
        underLine.style.textDecoration = 'underline' ;       
        isUnderLine = true 

    }
}
isColor = false ;
function textChangeColor(){
    if(isColor) {
        
        txtArea.style.color = 'black' ;
        colorBtn.style.color = 'black' ;       
        isColor = false 
    }
    else {
        txtArea.style.color = 'red' ;
        colorBtn.style.color = 'red' ;       
        isColor = true 

    }
}
isLeft = false ;
function textLeft(){
    if(isLeft) {
        txtArea.style.textAlign = 'right' ;
        // colorBtn.style.color = 'left' ;       
        isLeft = false 
    }
    else {
        txtArea.style.textAlign = 'left' ;
        // colorBtn.style.color = 'red' ;       
        isLeft = true 

    }
}
isCentre = false ;
function textCentre(){
    
    if(isCentre) {
        txtArea.style.textAlign = 'left' ;
        // colorBtn.style.color = 'left' ;       
        isLeft = false 
    }
    else {
        txtArea.style.textAlign = 'center' ;
        // colorBtn.style.color = 'red' ;       
        isLeft = true 

    }
}
