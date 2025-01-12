const searchEl = document.getElementById('search')
const formEl = document.getElementById('form-el')
const popularContent = document.querySelector('.popular-content')
const popularContentSec = document.querySelector('.popular-content-s')
const popularContentAll = document.querySelector('.popular-content-all')
const popularTvShowAll = document.querySelector('.popular-tv-all')
const popularTvShow = document.querySelector('.popular-tv')
const popularContentTvShow = document.querySelector('.popular-tv-s')
const paginationEl = document.querySelectorAll('.pagination ul li')
const searchAR = document.querySelector('.search')


//a3060ea251b922c2f7e4008e9c533905   

//https://api.themoviedb.org/3/movie/550?api_key=a3060ea251b922c2f7e4008e9c533905
//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

 const movieAPI = 
 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=3';
  
  const secondMovieAPI = 
 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=2';
  
  const allMovieAPI = 
 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=';
  
  const alltvShowAPI = 
 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=';
  
  const TvShowAPI = 
 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=2';
 
 const secondTvAPI = 
 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=a3060ea251b922c2f7e4008e9c533905&page=3';
  
  
 const imagePath = 'https://image.tmdb.org/t/p/w500';
 
 const searchUrl = 
 'https://api.themoviedb.org/3/search/movie?api_key=a3060ea251b922c2f7e4008e9c533905&query="';
 
 const searchTvUrl = 
 'https://api.themoviedb.org/3/search/tv?api_key=a3060ea251b922c2f7e4008e9c533905&query="';
 
 
  getMovies(movieAPI);
  getSecondMovies(secondMovieAPI);
  getAllMovies(allMovieAPI);
  getAllTvShows(alltvShowAPI);
  getPopTvShow(TvShowAPI);
  getTopTvShow(secondTvAPI);
  
  //get movies function
  
   async function getMovies(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showMovies(data.results);
       }catch(Error){}
   }
   
   async function getSecondMovies(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showSecondMovies(data.results);
       }catch(Error){}
   }
   
   async function getAllMovies(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showAllMovies(data.results);
       }catch(Error){}
   }
   
   async function getAllTvShows(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showAllTvShows(data.results);
       }catch(Error){}
   }
   
    async function getPopTvShow(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showTvShows(data.results);
       }catch(Error){}
   }
   
    async function getTopTvShow(url){
       try{
           const result = await fetch(url);
           const data = await result.json();
            showTopTvShows(data.results);
       }catch(Error){}
   }
   
   
   
   
  function showMovies(movies){
           popularContent.innerHTML = "";
       movies.forEach((movie) => {
         const {title, poster_path, release_date, vote_average} = movie;
         const moviesDisplay = document.createElement('div');
         moviesDisplay.classList.add('popular-element');
         moviesDisplay.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${title}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${release_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularContent.append(moviesDisplay);
      })
   }
   
   function showSecondMovies(movies){
       popularContentSec.innerHTML = "";
       movies.forEach((movie) => {
         const {title, poster_path, release_date, vote_average} = movie;
         const moviesDisplayEl = document.createElement('div');
         moviesDisplayEl.classList.add('popular-element');
         moviesDisplayEl.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${title}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${release_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularContentSec.append(moviesDisplayEl);
      })
   }
   
   function showAllMovies(movies){
       popularContentAll.innerHTML = "";
       movies.forEach((movie) => {
         const {title, poster_path, release_date, vote_average} = movie;
         const moviesDisplayAll = document.createElement('div');
         moviesDisplayAll.classList.add('popular-element');
         moviesDisplayAll.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${title}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${release_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularContentAll.append(moviesDisplayAll);
      })
   }
   
   
   
   function showTvShows(movies){
       popularTvShow.innerHTML = "";
       movies.forEach((movie) => {
         const {name, poster_path, first_air_date, vote_average} = movie;
         const moviesDisplayAll = document.createElement('div');
         moviesDisplayAll.classList.add('popular-element');
         moviesDisplayAll.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${name}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${first_air_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularTvShow.append(moviesDisplayAll);
      })
   }
   
   function showTopTvShows(movies){
       popularContentTvShow.innerHTML = "";
       movies.forEach((movie) => {
         const {name, poster_path, first_air_date, vote_average} = movie;
         const moviesDisplayAll = document.createElement('div');
         moviesDisplayAll.classList.add('popular-element');
         moviesDisplayAll.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${name}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${first_air_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularContentTvShow.append(moviesDisplayAll);
      })
   }
   
   
   
   function showAllTvShows(movies){
       popularTvShowAll.innerHTML = "";
       movies.forEach((movie) => {
         const {name, poster_path, first_air_date, vote_average} = movie;
         const moviesDisplayTvAll = document.createElement('div');
         moviesDisplayTvAll.classList.add('popular-element');
         moviesDisplayTvAll.innerHTML = `
           <img src="${imagePath+poster_path}">
          <div class="desc_class">
              <p class="movie_name">${name}</p>
              <ion-icon class="desc_info" name="ellipsis-vertical-outline"></ion-icon>       
              </div>
          <div class="short_desc">
              <div class="year">Date: ${first_air_date}</div>
              <div class="rating"><ion-icon class="star" name="star-outline"></ion-icon>&nbsp;Rating: ${vote_average}</div>
          </div>
         ` 
         popularTvShowAll.append(moviesDisplayTvAll);
      })
   }
   
   searchEl.addEventListener('input', () =>{
       const searchTerm = searchEl.value;
       if(searchTerm && searchTerm !== ""){
           getAllMovies(searchUrl + searchTerm)
           getAllTvShows(searchTvUrl + searchTerm)
       }else{
           window.location.reload();
       }
       
       if(searchTerm.length >= 2){
         const header = document.querySelector('header')
         const populath = document.querySelectorAll('.popular-theme')
         const container = document.querySelectorAll('#container')
         header.style.display = 'none';
         populath.forEach((pop)=>{
         pop.classList.add('active')
         })
         container.forEach((contain)=>{
             contain.style.display = "none";
         })
       }else if(searchTerm == ""){
           header.style.display ="block";
             contain.style.display = "block";
           populath.classList.remove('active')
       }
   })
   
   
   searchAR.addEventListener('click', ()=>{
       searchEl.classList.toggle('active')
   })
   
   // for when clicked on the more info on each movies to display more moreContent
   
   const moreContent = document.getElementsByClassName('desc_info')
   
      for(let i = 0; i < moreContent.length; i++){
           moreContent[i].addEventListener('click', () =>{
           console.log('hi')
       })
      }

   
   // ends
   
   
   paginationEl.forEach((pages, index) =>{
       pages.addEventListener('click', ()=>{
           if(getAllMovies){
               getAllMovies(allMovieAPI + index);
           }
           if(getAllTvShows){
               getAllTvShows(alltvShowAPI + index)
           }
           removePage();
           pages.classList.add('active');
       });
   });
   
   function removePage(){
       paginationEl.forEach((pages)=>{
           pages.classList.remove('active');
       })
   }