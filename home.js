document.addEventListener('DOMContentLoaded', function() {
  // Chạy code sau khi toàn bộ DOM đã được tải

  var mybutton = document.getElementById("scrollToTopBtn");

  // Khi người dùng cuộn xuống 100px từ đầu tài liệu, hiển thị nút
  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      if (mybutton) mybutton.style.display = "block";
    } else {
      if (mybutton) mybutton.style.display = "none";
    }
  }

  // Khi người dùng nhấp vào nút, cuộn lên đầu tài liệu
  if (mybutton) { // Kiểm tra xem nút có tồn tại không trước khi thêm listener
    mybutton.addEventListener('click', topFunction);
  }

  function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
});




const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-items");

// toggle.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });
const nav = document.getElementById('main-nav');

    // Thêm một trình lắng nghe sự kiện 'scroll' vào cửa sổ trình duyệt
    window.addEventListener('scroll', () => {
        // window.scrollY trả về số pixel đã được cuộn theo chiều dọc.
        // Nếu đã cuộn xuống hơn 50px...
        if (window.scrollY > 200) {
            // ...thêm lớp 'scrolled' vào navbar.
            nav.classList.add('scrolled');
        } else {
            // ...ngược lại, xóa lớp 'scrolled' đi.
            nav.classList.remove('scrolled');
        }
    });
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC0OPVi9giNxcKOmm_2OiNPuGxIBCTpTyE",
    authDomain: "coffee-shop-39965.firebaseapp.com",
    projectId: "coffee-shop-39965",
    storageBucket: "coffee-shop-39965.firebasestorage.app",
    messagingSenderId: "179220694821",
    appId: "1:179220694821:web:18d2eaddbf86a2c4437ccc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  
  let list = document.getElementsByClassName('movie-list')[0]
  let div = document.createElement('div')
  fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.items.forEach((film,index) => {
      let div = document.createElement('div')
      div.classList.add('movie-item')
      div.innerHTML= `
      <span class="movie-number">${index+1}</span>
            <img src="${film.poster_url}">
            <div class="play-button"></div>
            
      `
      div.addEventListener('click',()=>{
        window.location.href = `./detail.html?slug=${film.slug}`
      })
    list.appendChild(div)
    });
})
let list_movie = document.querySelector('.movie-list-new')
fetch(`https://phimapi.com/v1/api/the-loai/tinh-cam`)
 .then(res => res.json())
 .then(res => {
  console.log(res)
  res.data.items.forEach((film,index) => {
     let div = document.createElement('div')
     div.classList.add('movie-item')
     div.innerHTML=`
     <span class="movie-number">${index+1}</span>
            <img src="https://phimimg.com/${film.poster_url}">
            <div class="play-button"></div>
     `
     div.addEventListener('click',()=>{
        window.location.href = `./detail.html?slug=${film.slug}`
      })
    list_movie.appendChild(div)
  })
 })
 let search=document.getElementsByClassName("search")[0]
 let btn=document.getElementsByClassName("submit")[0]
 btn.addEventListener('click', ()=>{
    window.location.href=`./search.html`
 })
