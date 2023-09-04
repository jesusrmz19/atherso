console.log('1, 2, 3... Testing Parcel 📦');
const navBtn = document.querySelector(".nav--btn");
const nav = document.querySelector(".nav--list");

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});