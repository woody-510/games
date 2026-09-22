/* ==========================================================================
   games.js  --  ゲームを増やすのはこのファイルだけ。他は触らなくていい。
   --------------------------------------------------------------------------
   ↓このカタマリを丸ごとコピペして、中身を書き換えるだけ。
   末尾のカンマ , を消さないこと。

  {
    title: "ゲームタイトル",
    url:   "https://woody-510.github.io/リポ名/",
    img:   "images/ファイル名.png",
    desc:  "ここに短い解説。"
  },

   img : images/ フォルダにスクショを放り込んで、その名前を書く。
         フルURL（https://...）でもOK。
         書かなくても（"" や 省略）動く → 絵文字＋単色の自動フォールバック。
         画像のサイズ・縦横比はバラバラでOK。はみ出さず自動で収まる。
   icon: 画像が無いとき出る絵文字。省略時は 🎮。
   ========================================================================== */

const GAMES = [

  {
    title: "戦慄の迷宮",
    url:   "https://woody-510.github.io/quizzes-mazes/",
    img:   "images/quizzes-mazes.png",
    desc:  "謎解きと迷路を融合させたミニゲームです。"
  },

  {
    title: "パーティーゲーム",
    url:   "https://woody-510.github.io/wolf/",
    img:   "images/wolf.png",
    desc:  "パーティーゲームを作りました。新作追加予定。"
  },

  {
    title: "叡明高校からの脱出",
    url:   "https://woody-510.github.io/eimei-game/",
    img:   "images/eimei-game.png",
    desc:  "脱出ゲームです。パスワードは個人的に連絡してください。"
  },

  {
    title: "RICOCHET ARENA",
    url:   "https://woody-510.github.io/ricochet-arena/",
    img:   "images/ricochet-arena.png",
    desc:  "シューティングゲームです。"
  },

  {
    title: "TENWORLD DASH",
    url:   "https://woody-510.github.io/tenworld-dash/",
    img:   "images/tenworld-dash.png",
    desc:  "右に向かって障害物を避けながら走るゲームです。"
  },

  /* ↓ここから下は games/ フォルダに直接置いているゲーム。
     別リポジトリを作っていないので url は相対パスで書く。 */

  {
    title: "The Cursed Corridor",
    url:   "games/cursed-corridor.html",
    img:   "images/cursed-corridor.png",
    desc:  "ジャンプで障害物を避け続けるホラー風のランゲームです。"
  },

  {
    title: "Cursed Memory Match",
    url:   "games/cursed-memory.html",
    img:   "images/cursed-memory.png",
    desc:  "ホラー風の神経衰弱です。ジョーカーに気をつけてください。"
  },

  {
    title: "GEM MINER",
    url:   "games/gem-miner.html",
    img:   "images/gem-miner.png",
    desc:  "クリックで宝石を掘って設備を強化していく放置ゲームです。"
  },

  {
    title: "Retro Dungeon Crawler",
    url:   "games/retro-dungeon.html",
    img:   "images/retro-dungeon.png",
    desc:  "全10ステージの迷宮を探索するダンジョンゲームです。"
  },

];
