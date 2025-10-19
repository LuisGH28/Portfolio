(function () {
  const catHTML = `
    <div class="kawaii-cat-container hide-left" id="kawaiiCat">
      <div class="kawaii-speech-bubble">¡Miau! 🐾</div>

      <div class="kawaii-ear left"><div class="kawaii-ear-inner"></div></div>
      <div class="kawaii-ear right"><div class="kawaii-ear-inner"></div></div>

      <div class="kawaii-head">
        <div class="kawaii-eyes">
          <div class="kawaii-eye"></div>
          <div class="kawaii-eye"></div>
        </div>
        <div class="kawaii-nose"></div>
        <div class="kawaii-mouth"></div>
        <div class="kawaii-cheek left"></div>
        <div class="kawaii-cheek right"></div>
        <div class="kawaii-whisker l1"></div>
        <div class="kawaii-whisker l2"></div>
        <div class="kawaii-whisker r1"></div>
        <div class="kawaii-whisker r2"></div>
      </div>

      <div class="kawaii-body"></div>

      <div class="kawaii-paw left">
        <div class="kawaii-paw-pads">
          <div class="kawaii-pad"></div>
          <div class="kawaii-pad"></div>
          <div class="kawaii-pad"></div>
        </div>
      </div>
      <div class="kawaii-paw right"></div>

      <div class="kawaii-tail"></div>
    </div>

    <audio id="michi-audio" src="./assets/sfx/miau.mp3" preload="auto"></audio>
  `;

  document.body.insertAdjacentHTML("beforeend", catHTML);

  const cat = document.getElementById("kawaiiCat");
  const audio = document.getElementById("michi-audio");
  let currentSide = null;

  function clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
  }

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function showCat() {
    const sides = ["left", "right"];
    const side = sides[Math.floor(Math.random() * sides.length)];

    cat.classList.remove("hide-left", "hide-right", "show-left", "show-right");

    const minTop = 80;
    const maxTop = Math.max(120, window.innerHeight - 280);
    const randomTop = clamp(rand(minTop, maxTop), 60, window.innerHeight - 240);
    cat.style.top = randomTop + "px";
    cat.style.bottom = "";
    cat.style.left = "";
    cat.style.right = "";

    if (side === "left") {
      cat.classList.add("hide-left");
      setTimeout(() => {
        cat.classList.remove("hide-left");
        cat.classList.add("show-left");
      }, 10);
    } else {
      cat.classList.add("hide-right");
      setTimeout(() => {
        cat.classList.remove("hide-right");
        cat.classList.add("show-right");
      }, 10);
    }

    currentSide = side;
    setTimeout(hideCat, 4000);
  }

  function hideCat() {
    cat.classList.remove("show-left", "show-right");

    if (currentSide === "left") cat.classList.add("hide-left");
    else cat.classList.add("hide-right");

    const waitTime = Math.floor(Math.random() * 4000) + 3000; // 3–7 s
    setTimeout(showCat, waitTime);
  }

  function enableMeow() {
    const paw = cat.querySelector(".kawaii-paw.left");
    if (paw && audio) {
      paw.addEventListener("click", (e) => {
        e.stopPropagation();
        try {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        } catch (_) {}
      });
    }
  }

  setTimeout(() => {
    showCat();
    enableMeow();
  }, 1500);
})();
