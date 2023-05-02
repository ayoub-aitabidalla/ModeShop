let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//form validity
const form=document.querySelector("form")
    form.addEventListener('submit',e=>
    
    {
        if(!form.checkValidity())
        {
            e.preventDefault();
        }
        form.classList.add('was-validated')
    })