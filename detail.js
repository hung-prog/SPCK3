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
let heading = document.getElementById("heading")
let year = document.getElementById("year")
let poster = document.getElementById("poster")
let backgroundimg = document.getElementById("backgroundimg")
let category = document.getElementById("category")
let category1 = document.getElementById("category1")
let trailer = document.getElementById("trailer")
let Overview = document.getElementById("Overview")
let url = new URLSearchParams(window.location.search);
let slug = url.get("slug");
fetch(`https://phimapi.com/phim/${slug}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    heading.textContent = data.movie.name
    year.textContent = data.movie.year
    poster.src = data.movie.poster_url
    backgroundimg.src = data.movie.thumb_url
    category.innerHTML = data.movie.category[1].name
    time1.textContent = data.movie.time
    Overview.textContent = data.movie.content
    trailer.addEventListener("click", () => {
        window.location.href = `./watch.html?slug=${slug}`
    })
  })

  
  
  