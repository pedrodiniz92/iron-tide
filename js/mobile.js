(function () {
  const touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  window.IS_TOUCH = touch;
  if (!touch) return;
  window.touchAimX = null;
  const stage = document.querySelector(".stage");
  const frame = document.querySelector(".frame") || document.body;
  if (!stage) return;
  document.body.classList.add("touch");

  function pressKey(key, shift) {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: key, shiftKey: !!shift, bubbles: true }));
    if (key !== " ") releaseKey(key);
  }
  function releaseKey(key) {
    document.dispatchEvent(new KeyboardEvent("keyup", { key: key, bubbles: true }));
  }

  const pad = document.createElement("div");
  pad.id = "touchPad";
  stage.appendChild(pad);

  const btns = document.createElement("div");
  btns.id = "touchBtns";
  btns.innerHTML =
    '<button id="tbDash" type="button" data-i18n="DASH">' + t("DASH") + '</button>' +
    '<button id="tbPause" type="button">II</button>' +
    '<button id="tbFire" type="button" data-i18n="FIRE">' + t("FIRE") + '</button>' +
    '<button id="tbBomb" type="button" data-i18n="BOMB">' + t("BOMB") + '</button>' +
    '<button id="tbLaser" type="button" data-i18n="LASER">' + t("LASER") + '</button>' +
    '<button id="tbDetonate" type="button" data-i18n="DETONATE">' + t("DETONATE") + '</button>';
  frame.appendChild(btns);

  function aimFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    window.touchAimX = (e.clientX - rect.left) * (W / rect.width);
  }

  pad.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    if (state === "choices") {
      pickUpgradeAt(e);
      return;
    }
    if (state === "ready" || state === "gameover" || state === "victory") {
      tryStart();
      return;
    }
    aimFromEvent(e);
  });
  pad.addEventListener("pointermove", (e) => {
    if (state === "playing") aimFromEvent(e);
  });
  function endPad() {
    window.touchAimX = null;
  }
  pad.addEventListener("pointerup", endPad);
  pad.addEventListener("pointercancel", endPad);

  let fireTimer = null;
  const fireBtn = document.getElementById("tbFire");
  fireBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    stopFire();
    pressKey(" ");
    fireTimer = window.setInterval(() => pressKey(" "), 120);
  });
  function stopFire() {
    releaseKey(" ");
    if (fireTimer) {
      clearInterval(fireTimer);
      fireTimer = null;
    }
  }
  fireBtn.addEventListener("pointerup", stopFire);
  fireBtn.addEventListener("pointercancel", stopFire);
  fireBtn.addEventListener("pointerleave", stopFire);

  document.getElementById("tbBomb").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    pressKey("q");
  });
  document.getElementById("tbLaser").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    pressKey("e");
  });
  document.getElementById("tbDetonate").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    pressKey("w");
  });
  document.getElementById("tbDash").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    initAudio();
    const rect = canvas.getBoundingClientRect();
    const dashX = (e.clientX - rect.left) * (W / rect.width);
    const goLeft = dashX < player.x + player.w / 2;
    pressKey(goLeft ? "ArrowLeft" : "ArrowRight", true);
    releaseKey(goLeft ? "ArrowLeft" : "ArrowRight");
  });
  document.getElementById("tbPause").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    pressKey("p");
  });
})();
