/* ==========================================================================
   app.js -- 一覧の描画とモーダルの開閉。
   ゲームを追加するだけなら games.js だけ触ればよく、ここは編集不要。
   ========================================================================== */
(function () {
  "use strict";

  var list = (typeof GAMES !== "undefined" && Array.isArray(GAMES)) ? GAMES : [];

  var grid    = document.getElementById("grid");
  var empty   = document.getElementById("empty");
  var count   = document.getElementById("count");
  var overlay = document.getElementById("overlay");
  var mShot   = document.getElementById("m-shot");
  var mTitle  = document.getElementById("m-title");
  var mDesc   = document.getElementById("m-desc");
  var mPlay   = document.getElementById("m-play");

  var lastFocused = null;

  /* タイトルから決まった色を作る（画像が無いカードの背景色） */
  function tintOf(text) {
    var h = 0;
    for (var i = 0; i < text.length; i++) {
      h = (h * 31 + text.charCodeAt(i)) % 360;
    }
    return "hsl(" + h + " 32% 26%)";
  }

  /* ---------- カードを並べる ---------- */
  function render() {
    if (!list.length) {
      empty.hidden = false;
      count.textContent = "";
      return;
    }

    var frag = document.createDocumentFragment();

    list.forEach(function (game, index) {
      var title = String(game.title || "無題");
      var shot  = game.img ? String(game.img).trim() : "";
      var icon  = game.icon || "🎮";

      var card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.setAttribute("aria-label", title + " の詳細を開く");

      if (shot) {
        card.style.setProperty("--shot", 'url("' + shot.replace(/"/g, "%22") + '")');
        /* 画像が404なら絵文字表示に切り替える */
        var probe = new Image();
        probe.onerror = function () { toFallback(card, icon, title); };
        probe.src = shot;
      } else {
        toFallback(card, icon, title);
      }

      var label = document.createElement("span");
      label.className = "card-label";
      label.textContent = title;
      card.appendChild(label);

      card.addEventListener("click", function () { open(index, card); });

      frag.appendChild(card);
    });

    grid.appendChild(frag);
    count.textContent = list.length + " GAMES";
  }

  function toFallback(card, icon, title) {
    if (card.classList.contains("no-shot")) return;
    card.classList.add("no-shot");
    card.style.setProperty("--tint", tintOf(title));
    var em = document.createElement("span");
    em.className = "card-icon";
    em.textContent = icon;
    em.setAttribute("aria-hidden", "true");
    card.insertBefore(em, card.firstChild);
  }

  /* ---------- モーダル ---------- */
  function open(index, trigger) {
    var game = list[index];
    if (!game) return;

    lastFocused = trigger || document.activeElement;

    var title = String(game.title || "無題");
    var shot  = game.img ? String(game.img).trim() : "";

    mTitle.textContent = title;
    mDesc.textContent  = game.desc ? String(game.desc) : "";
    mDesc.hidden       = !game.desc;

    /* カードと同じ画像を、こちらはぼかさず表示 */
    mShot.className = "m-shot";
    mShot.textContent = "";
    mShot.style.backgroundImage = "";
    if (shot) {
      mShot.style.backgroundImage = 'url("' + shot.replace(/"/g, "%22") + '")';
    } else {
      mShot.classList.add("no-shot");
      mShot.textContent = game.icon || "🎮";
    }

    if (game.url) {
      mPlay.href = game.url;
      mPlay.removeAttribute("aria-disabled");
      mPlay.style.display = "";
    } else {
      mPlay.style.display = "none";
    }

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    mPlay.focus();
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.getElementById("m-x").addEventListener("click", close);
  document.getElementById("m-close").addEventListener("click", close);

  /* 背景の暗い部分をクリックしたら閉じる */
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  /* Esc で閉じる */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) close();
  });

  render();
})();
