const button = document.querySelector("#love-button");
const message = document.querySelector("#extra-message");

const loveMessages = [
  "Rosiana, aku bersyukur punya kamu di hidupku. ♡",
  "Senyummu selalu jadi hal yang ingin kulihat setiap hari. ♡",
  "Aku akan selalu berusaha membuatmu merasa disayang. ♡",
  "Buatku, kamu istimewa dengan caramu sendiri. ♡",
  "Aku suka semua cerita dan waktu yang kita bagi bersama. ♡",
  "Semoga aku bisa terus menemani hari-harimu. ♡",
  "Di antara banyak hal baik, kamu salah satu yang paling kusyukuri. ♡",
  "Aku sayang kamu, Rosiana Maulida. Hari ini dan seterusnya. ♡"
];

let messageIndex = 0;

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = loveMessages[messageIndex];
    messageIndex = (messageIndex + 1) % loveMessages.length;
    button.textContent = "Pesan berikutnya ♡";
  });
}
