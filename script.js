const nameInput = document.querySelector('.nameInput')
const info1Input = document.querySelector('.info1Input')
const info2Input = document.querySelector('.info2Input')
const info3Input = document.querySelector('.info3Input')
const info4Input = document.querySelector('.info4Input')
const info5Input = document.querySelector('.info5Input')
const info6Input = document.querySelector('.info6Input')
const countryInput = document.querySelector('.countryInput')
const fileInput = document.querySelector('.fileInput')

const name = document.querySelector('.name')
const info1 = document.querySelector('.info1')
const info2 = document.querySelector('.info2')
const info3 = document.querySelector('.info3')
const info4 = document.querySelector('.info4')
const info5 = document.querySelector('.info5')
const info6 = document.querySelector('.info6')
const img = document.querySelector('.image')
const flag = document.querySelector('.flag')

nameInput.addEventListener('change', e => {
  name.innerHTML = e.target.value
})

info1Input.addEventListener('change', e => {
  info1.innerHTML = e.target.value
})


info2Input.addEventListener('change', e => {
  info2.innerHTML = e.target.value
})


info3Input.addEventListener('change', e => {
  info3.innerHTML = e.target.value
})


info4Input.addEventListener('change', e => {
  info4.innerHTML = e.target.value
})


info5Input.addEventListener('change', e => {
  info5.innerHTML = e.target.value
})


info6Input.addEventListener('change', e => {
  info6.innerHTML = e.target.value
})

countryInput.addEventListener('change', e => {
  const value = e.target.value
  if(value === 'Кыргызстан'){
    flag.setAttribute('src' , './kyrgyzstan.png')
  }else if(value === 'Россия'){
    flag.setAttribute('src' , './russia.png')
  }else{
    flag.setAttribute('src' , './china.png')
  }

})


fileInput.addEventListener("change", function(event) {
  var file = event.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;
      img.style.display = "block";
    }
    reader.readAsDataURL(file);
  }
})
document.getElementById("btnCapture").addEventListener("click", function() {
  html2canvas(document.getElementById("capture")).then(function(canvas) {
    var link = document.createElement('a');
    link.download = 'capture.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
