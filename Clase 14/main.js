

let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
// Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Error al guardar el producto',
//     footer: '<a href="">Why do I have this issue?</a>'
// })
// Swal.fire({
//     position: 'center',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 2000,
// })
// Swal.fire({
//     title: 'Sweet!',
//     text: 'Modal with a custom image.',
//     imageUrl: 'https://unsplash.it/400/200',
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
// })
// })


//TOASTIFY
// boton.addEventListener("click", () => {
//     Toastify({
//         text: "This is a toast",        
//         duration: 3000,
//         }).showToast();
// })
// boton.addEventListener("click", () => {
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
// })


boton.addEventListener("click", () => {

})
//LUXON
const DateTime=luxon.DateTime;
// const dt=DateTime.local(2023,5,30,18);
// console.log(dt);

const now =DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.second);
// console.log(now.zoneName);

console.log(now.toLocaleString(DateTime.DATE_FULL));
console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
console.log(now.setLocale('en').toLocaleString(DateTime.DATE_FULL));
console.log(now.setLocale('es').toLocaleString(DateTime.DATE_FULL));