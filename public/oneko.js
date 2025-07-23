
// (function oneko() {
//   if (document.getElementById("oneko")) return;

//   const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   if (isReducedMotion) return;

//   const nekoEl = document.createElement("div");
//   nekoEl.id = "oneko";
//   nekoEl.setAttribute("aria-hidden", "true");
//   nekoEl.style.width = "32px";
//   nekoEl.style.height = "32px";
//   nekoEl.style.position = "fixed";
//   nekoEl.style.pointerEvents = "none";
//   nekoEl.style.imageRendering = "pixelated";
//   nekoEl.style.zIndex = 2147483647;
//   nekoEl.style.backgroundImage = `url('/oneko.gif')`;
//   nekoEl.style.backgroundSize = "auto";
//   nekoEl.style.transition = "opacity 0.5s ease";

//   // ✅ Start near top-right
//   let nekoPosX = window.innerWidth - 82;
//   let nekoPosY = 16;
//   nekoEl.style.left = `${nekoPosX}px`;
//   nekoEl.style.top = `${nekoPosY}px`;
//   nekoEl.style.opacity = "0";

//   document.body.appendChild(nekoEl);
//   requestAnimationFrame(() => {
//     nekoEl.style.opacity = "1";
//   });

//   let mousePosX = nekoPosX;
//   let mousePosY = nekoPosY;
//   let frameCount = 0;
//   let idleTime = 0;
//   let idleAnimation = null;
//   let idleAnimationFrame = 0;

//   const nekoSpeed = 10;

//   const spriteSets = {
//     idle: [[-3, -3]],
//     alert: [[-7, -3]],
//     scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
//     scratchWallN: [[0, 0], [0, -1]],
//     scratchWallS: [[-7, -1], [-6, -2]],
//     scratchWallE: [[-2, -2], [-2, -3]],
//     scratchWallW: [[-4, 0], [-4, -1]],
//     tired: [[-3, -2]],
//     sleeping: [[-2, 0], [-2, -1]],
//     N: [[-1, -2], [-1, -3]],
//     NE: [[0, -2], [0, -3]],
//     E: [[-3, 0], [-3, -1]],
//     SE: [[-5, -1], [-5, -2]],
//     S: [[-6, -3], [-7, -2]],
//     SW: [[-5, -3], [-6, -1]],
//     W: [[-4, -2], [-4, -3]],
//     NW: [[-1, 0], [-1, -1]],
//   };

//   function setSprite(name, frame) {
//     const sprite = spriteSets[name][frame % spriteSets[name].length];
//     nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
//   }

//   function resetIdleAnimation() {
//     idleAnimation = null;
//     idleAnimationFrame = 0;
//   }

//   function idle() {
//     idleTime += 1;
//     if (idleTime > 10 && Math.random() < 0.005 && idleAnimation === null) {
//       let options = ["sleeping", "scratchSelf"];
//       if (nekoPosX < 32) options.push("scratchWallW");
//       if (nekoPosY < 32) options.push("scratchWallN");
//       if (nekoPosX > window.innerWidth - 32) options.push("scratchWallE");
//       if (nekoPosY > window.innerHeight - 32) options.push("scratchWallS");
//       idleAnimation = options[Math.floor(Math.random() * options.length)];
//     }

//     switch (idleAnimation) {
//       case "sleeping":
//         setSprite(idleAnimationFrame < 8 ? "tired" : "sleeping", Math.floor(idleAnimationFrame / 4));
//         if (idleAnimationFrame > 192) resetIdleAnimation();
//         break;
//       case "scratchWallN":
//       case "scratchWallS":
//       case "scratchWallE":
//       case "scratchWallW":
//       case "scratchSelf":
//         setSprite(idleAnimation, idleAnimationFrame);
//         if (idleAnimationFrame > 9) resetIdleAnimation();
//         break;
//       default:
//         setSprite("idle", 0);
//         return;
//     }

//     idleAnimationFrame += 1;
//   }

//   function frame() {
//     frameCount += 1;
//     const dx = nekoPosX - mousePosX;
//     const dy = nekoPosY - mousePosY;
//     const dist = Math.sqrt(dx ** 2 + dy ** 2);

//     if (dist < nekoSpeed || dist < 48) {
//       idle();
//       return;
//     }

//     resetIdleAnimation();

//     if (idleTime > 1) {
//       setSprite("alert", 0);
//       idleTime = Math.min(idleTime, 7);
//       idleTime -= 1;
//       return;
//     }

//     let dir = "";
//     dir += dy / dist > 0.5 ? "N" : "";
//     dir += dy / dist < -0.5 ? "S" : "";
//     dir += dx / dist > 0.5 ? "W" : "";
//     dir += dx / dist < -0.5 ? "E" : "";
//     setSprite(dir, frameCount);

//     nekoPosX -= (dx / dist) * nekoSpeed;
//     nekoPosY -= (dy / dist) * nekoSpeed;

//     // ⛔ Clamp to stay on-screen
//     nekoPosX = Math.min(Math.max(0, nekoPosX), window.innerWidth - 48);
//     nekoPosY = Math.min(Math.max(0, nekoPosY), window.innerHeight - 48);

//     nekoEl.style.left = `${nekoPosX}px`;
//     nekoEl.style.top = `${nekoPosY}px`;
//   }

//   document.addEventListener("mousemove", function (event) {
//     mousePosX = event.clientX;
//     mousePosY = event.clientY;
//   });

//   let lastFrameTimestamp;
//   function onAnimationFrame(timestamp) {
//     if (!nekoEl.isConnected) return;
//     if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
//     if (timestamp - lastFrameTimestamp > 100) {
//       lastFrameTimestamp = timestamp;
//       frame();
//     }
//     window.requestAnimationFrame(onAnimationFrame);
//   }

//   window.requestAnimationFrame(onAnimationFrame);
// })();
(function oneko() {
  if (document.getElementById("oneko")) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion) return;

  const nekoEl = document.createElement("div");
  nekoEl.id = "oneko";
  nekoEl.setAttribute("aria-hidden", "true");
  nekoEl.style.width = "32px";
  nekoEl.style.height = "32px";
  nekoEl.style.position = "fixed";
  nekoEl.style.pointerEvents = "none";
  nekoEl.style.imageRendering = "pixelated";
  nekoEl.style.zIndex = 2147483647;
  nekoEl.style.backgroundImage = `url('/oneko.gif')`;
  nekoEl.style.backgroundSize = "auto";
  nekoEl.style.transition = "opacity 0.5s ease";
  nekoEl.style.opacity = "0";

  // 🔍 Detect if mobile
  const isMobile = window.innerWidth <= 768;

  // 📍 Initial positions based on device
  let nekoPosX = isMobile
    ? window.innerWidth - 120  // mobile right edge
    : window.innerWidth - 75; // desktop, further left

  let nekoPosY = isMobile ? 15 : 16; // top offset

  nekoEl.style.left = `${nekoPosX}px`;
  nekoEl.style.top = `${nekoPosY}px`;

  document.body.appendChild(nekoEl);
  requestAnimationFrame(() => {
    nekoEl.style.opacity = "1";
  });

  let mousePosX = nekoPosX;
  let mousePosY = nekoPosY;
  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;

  const nekoSpeed = 10;

  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
    scratchWallN: [[0, 0], [0, -1]],
    scratchWallS: [[-7, -1], [-6, -2]],
    scratchWallE: [[-2, -2], [-2, -3]],
    scratchWallW: [[-4, 0], [-4, -1]],
    tired: [[-3, -2]],
    sleeping: [[-2, 0], [-2, -1]],
    N: [[-1, -2], [-1, -3]],
    NE: [[0, -2], [0, -3]],
    E: [[-3, 0], [-3, -1]],
    SE: [[-5, -1], [-5, -2]],
    S: [[-6, -3], [-7, -2]],
    SW: [[-5, -3], [-6, -1]],
    W: [[-4, -2], [-4, -3]],
    NW: [[-1, 0], [-1, -1]],
  };

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;
    if (idleTime > 10 && Math.random() < 0.005 && idleAnimation === null) {
      let options = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) options.push("scratchWallW");
      if (nekoPosY < 32) options.push("scratchWallN");
      if (nekoPosX > window.innerWidth - 32) options.push("scratchWallE");
      if (nekoPosY > window.innerHeight - 32) options.push("scratchWallS");
      idleAnimation = options[Math.floor(Math.random() * options.length)];
    }

    switch (idleAnimation) {
      case "sleeping":
        setSprite(idleAnimationFrame < 8 ? "tired" : "sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) resetIdleAnimation();
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) resetIdleAnimation();
        break;
      default:
        setSprite("idle", 0);
        return;
    }

    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    const dx = nekoPosX - mousePosX;
    const dy = nekoPosY - mousePosY;
    const dist = Math.sqrt(dx ** 2 + dy ** 2);

    if (dist < nekoSpeed || dist < 48) {
      idle();
      return;
    }

    resetIdleAnimation();

    if (idleTime > 1) {
      setSprite("alert", 0);
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let dir = "";
    dir += dy / dist > 0.5 ? "N" : "";
    dir += dy / dist < -0.5 ? "S" : "";
    dir += dx / dist > 0.5 ? "W" : "";
    dir += dx / dist < -0.5 ? "E" : "";
    setSprite(dir, frameCount);

    nekoPosX -= (dx / dist) * nekoSpeed;
    nekoPosY -= (dy / dist) * nekoSpeed;

    nekoPosX = Math.min(Math.max(0, nekoPosX), window.innerWidth - 48);
    nekoPosY = Math.min(Math.max(0, nekoPosY), window.innerHeight - 48);

    nekoEl.style.left = `${nekoPosX}px`;
    nekoEl.style.top = `${nekoPosY}px`;
  }

  document.addEventListener("mousemove", function (event) {
    mousePosX = event.clientX;
    mousePosY = event.clientY;
  });

  let lastFrameTimestamp;
  function onAnimationFrame(timestamp) {
    if (!nekoEl.isConnected) return;
    if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  window.requestAnimationFrame(onAnimationFrame);
})();
