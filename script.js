var changeColor = document.querySelector('#change-color');
let increment = 0;
changeColor.addEventListener('click', (e)=>{
var condition = increment++;
if (increment === (2*condition+1)) {
        changeColor.innerHTML = "White Theme";
}
else if (increment=== (condition*(condition+1))){
    changeColor.innerHTML = 'Dark Theme';
}
console.log(increment);
var themeChange = document.querySelector('#themeChange');
var divTheme = document.querySelector('.paragraph');
themeChange.classList.toggle("darkTheme");
divTheme.classList.toggle("divDark");
console.log("adnan");
})
