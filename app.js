/*
Oyunun Fonksiyonları:
- Oyuncu min ve max değerleri arasında olan sayıyı tahmin etmeli
- Oyuncunun belirli bir tahmin hakkı olucak
- Oyuncunun kazanma durumunu bildir
- Tekrar denemesi için bir seçenek ver
*/

const guessInput = document.querySelector("#tahmin-input");
const guessBtn = document.querySelector("#tahmin-btn");
const game = document.querySelector("#oyun");
const message = document.querySelector(".message");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");

let min = 1;
let max = 10;
let winnigNumber = randomNum(min, max);
let hak = 3;

// imn ve max değerlerini arayüze gönderme
minNum.textContent = min;
maxNum.textContent = max;

function randomNum(min, max) {
  let tahminSayi = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(tahminSayi);
  return tahminSayi;
}

// yapılan tahmini izleme

guessBtn.addEventListener("click", () => {
  // input içerisine girilen sayıyı al ve sayıya çevir
  let guess = parseInt(guessInput.value);

  if (guess === winnigNumber) {
    gameover(true, `Kazandın! Doğru Tahmin: ${winnigNumber}`);
  } else {
    // hak azalacak
    hak--;

    if (hak === 0) {
      // oyun bitti

      gameover(false, `Kaybettin! Doğru Tahmin: ${winnigNumber} `);
    } else {
      // kalan hak 0 dan fazla ise
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      // kaç hak kaldığını söyle

      setMessage(`${guess} doğru değil , ${hak} hakkınız kaldı`, "red");
    }
  }
});

function gameover(won, msg) {
  let color = won ? "green" : "red";

  // inputu iptal et
  guessInput.disabled = true;

  // inputun çerçevesini değiştirme
  guessInput.borderColor = color;

  // kullanıcıyı bilgilendirme
  setMessage(msg);
}

function setMessage(msg, clr) {
  message.textContent = msg;
  message.style.color = clr;
}
