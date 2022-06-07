let wrapper = document.querySelector('.wrapper')
console.log(wrapper.firstElementChild)

wrapper.firstElementChild.addEventListener('click',()=>{
    wrapper.firstElementChild.nextElementSibling.classList.add('ripple')
      setTimeout(() => {
          
          wrapper.firstElementChild.nextElementSibling.classList.remove('ripple')
      }, 200);


})