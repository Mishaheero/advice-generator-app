const btn = document.querySelector(".btn");
const btnImg = document.querySelector("#btn-img");
const textId = document.querySelector("#text-id");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  btnImg.classList.add("rotate-animation");
  setTimeout(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        btnImg.classList.remove("rotate-animation");
        textId.textContent = "advice #" + data.slip.id;
        content.textContent = `"${data.slip.advice}"`;
      })
      .catch(error => {
        console.log(error);
        btnImg.classList.remove("rotate-animation");
      });
  }, 2000);
});
