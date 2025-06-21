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
const nav = document.getElementById('main-nav');

    // Thêm một trình lắng nghe sự kiện 'scroll' vào cửa sổ trình duyệt
    window.addEventListener('scroll', () => {
        // window.scrollY trả về số pixel đã được cuộn theo chiều dọc.
        // Nếu đã cuộn xuống hơn 50px...
        if (window.scrollY > 50) {
            // ...thêm lớp 'scrolled' vào navbar.
            nav.classList.add('scrolled');
        } else {
            // ...ngược lại, xóa lớp 'scrolled' đi.
            nav.classList.remove('scrolled');
        }
    });
    
let film = document.querySelector(".main-movie")
let url = new URLSearchParams(window.location.search);
let slug = url.get("slug");
fetch(`https://phimapi.com/phim/${slug}`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    film.src=data.episodes[0].server_data[0].link_embed
})