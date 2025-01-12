const header = document.querySelector('header');
 const sliders = document.querySelectorAll('.slide');
 const slideContent = document.querySelectorAll('.slide-content');
 const leftBtn = document.getElementsByClassName('left')[0];
 const rightBtn = document.getElementsByClassName('right')[0];
 
  let activeSlides = 1;
  
  const menuNav = document.getElementsByClassName('menu-nav')[0]
   const menu = document.getElementsByClassName('menu')[0]


window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        menuNav.classList.add('active');
        menu.classList.add('active');
    }else{
        menuNav.classList.remove('active');
        menu.classList.remove('active');
    }
})

  
  
  // set body background
 function bgbody(){
      header.style.backgroundImage = sliders[activeSlides].style.backgroundImage;
  }
  
  
  
  function setActiveSlide(){
      sliders.forEach((slides)=> slides.classList.remove('active'));
      sliders[activeSlides].classList.add('active');
  }
  function setActiveContent(){
      slideContent.forEach((slideContents)=> slideContents.classList.remove('active'));
      slideContent[activeSlides].classList.add('active');
  }
  
 /* rightBtn.addEventListener('click', () =>{
      next();
      bgbody();
      setActiveSlide();
      setActiveContent();
  })
  
  leftBtn.addEventListener('click', () =>{
      previous();
      bgbody();
      setActiveSlide();
      setActiveContent();
  })*/
  
  
  function next(){
      activeSlides++;
      if(activeSlides > sliders.length - 1){
          activeSlides = 0;
      }
      bgbody();
      setActiveSlide();
      setActiveContent();
  }
  
 /* function previous(){
      activeSlides--;
      if(activeSlides < 0){
          activeSlides = sliders.length - 1;
      }
      bgbody();
      setActiveSlide();
      setActiveContent();
  }*/
  
  setInterval(() => {
      next();
      bgbody();
      setActiveSlide();
      setActiveContent();
  }, 7000);