function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Tampilkan Semuanya";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lebih Sedikit";
        moreText.style.display = "inline";
    }
}
// gambar lokasi

const big_img = document.getElementById('img-big');
const small_img_1 = document.getElementById('img-small-1');
const small_img_2 = document.getElementById('img-small-2');
const small_img_3 = document.getElementById('img-small-3');
const small_img_4 = document.getElementById('img-small-4');

small_img_1.addEventListener('click', () => {
    big_img.innerHTML = ` <img src="assets/img/img-keseruan.png" class="img-thumbnail float-left" alt="...">`
})
small_img_2.addEventListener('click', () => {
    big_img.innerHTML = `<img src="assets/img/img-feature-lok-2.png" class="img-thumbnail float-left" alt="...">`
})
small_img_3.addEventListener('click', () => {
    big_img.innerHTML = `<img src="assets/img/feature-two.png" class="img-thumbnail float-left" alt="...">`
})
small_img_4.addEventListener('click', () => {
    big_img.innerHTML = `<img src="assets/img/img-feature-lok-1.png" class="img-thumbnail float-left" alt="...">`
})

const big_img_2 = document.getElementById('img-big-2');
const small_img_1_2 = document.getElementById('img-small-1-2');
const small_img_2_2 = document.getElementById('img-small-2-2');
const small_img_3_2 = document.getElementById('img-small-3-2');
const small_img_4_2 = document.getElementById('img-small-4-2');

small_img_1_2.addEventListener('click', () => {
    big_img_2.innerHTML = ` <img src="assets/img/Image 11.png" class="img-thumbnail float-left" alt="...">`
})

small_img_2_2.addEventListener('click', () => {
    big_img_2.innerHTML = ` <img src="assets/img/img-feature-lok-2.png" class="img-thumbnail float-left" alt="...">`
})
small_img_3_2.addEventListener('click', () => {
    big_img_2.innerHTML = ` <img src="assets/img/feature-two.png" class="img-thumbnail float-left" alt="...">`
})
small_img_4_2.addEventListener('click', () => {
    big_img_2.innerHTML = ` <img src="assets/img/img-feature-lok-1.png" class="img-thumbnail float-left" alt="...">`
})