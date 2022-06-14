let testimonials= document.querySelectorAll('.testimonial')

let i=0;

function testimonialswap(){
    console.log('hel')
  testimonials[i].classList.remove('active')
  i++
  console.log(i)
  if (i>=testimonials.length){
      i=0;
    }
    testimonials[i].classList.add('active')
  setTimeout(testimonialswap,7000)
}

testimonialswap()