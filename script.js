/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 1
========================================== */

// =============================
// Get Elements
// =============================

const openGift = document.getElementById("openGift");

const giftPopup = document.getElementById("giftPopup");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const funnyMessage = document.getElementById("funnyMessage");

// =============================
// Open Gift
// =============================

openGift.addEventListener("click",()=>{

    document.querySelector(".card").style.display="none";

    giftPopup.style.display="flex";

});

// =============================
// Floating Hearts
// =============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const hearts=["❤️","💖","💕","💗","🤍"];

    heart.innerHTML=

    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=

    (18+Math.random()*18)+"px";

    heart.style.animationDuration=

    (5+Math.random()*4)+"s";

    document.getElementById("hearts")

    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);

// =============================
// Sparkles
// =============================

function createSparkle(){

    const star=document.createElement("div");

    star.className="sparkle";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=

    (10+Math.random()*10)+"px";

    document.getElementById("sparkles")

    .appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createSparkle,300);

// =============================
// Funny Messages
// =============================

const messages=[

"😂 Nice try!",

"🤭 Nope!",

"😜 You can't escape!",

"🎂 It's your birthday!",

"💖 This gift is just for you!",

"🥹 Please...? Just press YES!"

];

// =============================
// NO Button Counter
// =============================

let attempts=0;
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 2
========================================== */

// =====================================
// NO Button Escapes
// =====================================

noBtn.addEventListener("mouseover",moveNoButton);
noBtn.addEventListener("touchstart",moveNoButton);

function moveNoButton(){

    attempts++;

    funnyMessage.innerHTML =
    messages[Math.min(attempts-1,messages.length-1)];

    // After 6 attempts
    if(attempts >= 6){

        noButtonBecomeHeart();

        return;

    }

    // Random Position

    const popup =
    document.querySelector(".popup");

    const popupRect =
    popup.getBoundingClientRect();

    const maxX =
    popupRect.width - 130;

    const maxY =
    popupRect.height - 90;

    const x =
    Math.random()*maxX;

    const y =
    Math.random()*maxY;

    noBtn.style.position="absolute";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

    noBtn.style.transition=".25s";

}

// =====================================
// NO becomes Heart
// =====================================

function noButtonBecomeHeart(){

    noBtn.innerHTML="❤️";

    noBtn.style.background="transparent";

    noBtn.style.fontSize="42px";

    noBtn.style.border="none";

    noBtn.style.boxShadow="none";

    noBtn.style.pointerEvents="none";

    noBtn.style.transition="1s";

    noBtn.animate([

        {

            transform:"translateY(0px) scale(1)",

            opacity:1

        },

        {

            transform:"translateY(-180px) scale(1.8)",

            opacity:0

        }

    ],{

        duration:1800,

        fill:"forwards"

    });

    funnyMessage.innerHTML=

    "❤️ I knew you'd accept it!";

    // Grow YES Button

    setTimeout(()=>{

        yesBtn.style.transform="scale(1.25)";

        yesBtn.style.transition=".4s";

        yesBtn.style.boxShadow=

        "0 0 30px rgba(255,80,140,.5)";

        yesBtn.innerHTML=

        "🎁 YES! SHOW MY SURPRISE";

    },500);

}

// =====================================
// YES Button
// =====================================

yesBtn.addEventListener("click",()=>{

    giftPopup.style.display="none";

    document.getElementById("slideshow")

    .style.display="flex";

});
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 3
   PHOTO SLIDESHOW
========================================== */

/*
--------------------------------------------
PUT YOUR PHOTOS INSIDE:

Birthday Card/
│
├── index.html
│
└── images/
      photo1.jpg
      photo2.jpg
      photo3.jpg
      photo4.jpg
      photo5.jpg
      photo6.jpg
--------------------------------------------
*/

const photos=[

{

image:"images/photo1.jpg",

title:"❤️ My Cute Aunty",

caption:"Your smile makes every day brighter."

},

{

image:"images/photo2.jpg",

title:"🌸 Beautiful Memories",

caption:"Every moment with you is special."

},

{

image:"images/photo3.jpg",

title:"💖 Happiness",

caption:"May your heart always stay full of joy."

},

{

image:"images/photo4.jpg",

title:"🎂 Happy Birthday",

caption:"Wishing you endless smiles and laughter."

},

{

image:"images/photo5.jpg",

title:"💐 Stay Blessed",

caption:"May all your dreams come true."

},

{

image:"images/photo6.jpg",

title:"❤️ Forever Loved",

caption:"You deserve all the happiness in the world."

}

];

// ====================================

const slideshow=document.getElementById("slideshow");

const slideImage=document.getElementById("slideImage");

const photoTitle=document.getElementById("photoTitle");

const caption=document.getElementById("caption");

let currentPhoto=0;

// ====================================

function showPhoto(){

slideImage.style.opacity=0;

photoTitle.style.opacity=0;

caption.style.opacity=0;

setTimeout(()=>{

slideImage.src=photos[currentPhoto].image;

photoTitle.innerHTML=photos[currentPhoto].title;

caption.innerHTML=photos[currentPhoto].caption;

slideImage.style.opacity=1;

photoTitle.style.opacity=1;

caption.style.opacity=1;

slideImage.animate([

{

transform:"scale(.9)",

opacity:.4

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:800,

fill:"forwards"

});

currentPhoto++;

if(currentPhoto>=photos.length){

setTimeout(endSlideshow,3500);

return;

}

setTimeout(showPhoto,3500);

},400);

}

// ====================================

function endSlideshow(){

slideshow.style.display="none";

document.getElementById("birthdayCard")

.style.display="flex";

typeWriter();

}

// ====================================

yesBtn.addEventListener("click",()=>{

currentPhoto=0;

showPhoto();

});
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 4
   BIRTHDAY LETTER
========================================== */

// =====================================
// Elements
// =====================================

const birthdayCard =
document.getElementById("birthdayCard");

const typingText =
document.getElementById("typingText");

const continueBtn =
document.getElementById("continueBtn");

// =====================================
// Birthday Letter
// =====================================

const birthdayMessage =

`Dear My Cute Aunty,

Happy Birthday! 🎂❤️

Today is a very special day because
it is the birthday of such a wonderful
person.

Thank you for always being caring,
kind, supportive and loving.

May your life always be filled with
happiness, good health,
success, peace and beautiful memories.

May God bless you with many more
years of joy and endless smiles.

Keep smiling because your smile
makes everyone around you happy.

I hope this little surprise made
your birthday even more special.

Have an amazing birthday!

With lots of love,

❤️ Sambhav ❤️`;

// =====================================
// Typewriter Effect
// =====================================

let letterIndex = 0;

typingText.innerHTML = "";

function typeWriter(){

    if(letterIndex < birthdayMessage.length){

        typingText.innerHTML +=
        birthdayMessage.charAt(letterIndex);

        birthdayCard.scrollTop =
        birthdayCard.scrollHeight;

        letterIndex++;

        setTimeout(typeWriter,35);

    }

    else{

        continueBtn.style.display="inline-block";

        continueBtn.animate([

        {
            transform:"scale(.8)",
            opacity:0
        },

        {
            transform:"scale(1)",
            opacity:1
        }

        ],{

            duration:700,

            fill:"forwards"

        });

    }

}

// =====================================
// Reset Letter
// =====================================

function resetLetter(){

    letterIndex = 0;

    typingText.innerHTML = "";

    continueBtn.style.display="none";

}
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 5
   CELEBRATION
========================================== */

// =====================================
// Containers
// =====================================

const balloons =
document.getElementById("balloons");

const confetti =
document.getElementById("confetti");

const fireworks =
document.getElementById("fireworks");

// =====================================
// Continue Button
// =====================================

continueBtn.addEventListener("click",()=>{

    birthdayCard.style.display="none";

    launchConfetti();

    launchBalloons();

    launchHeartRain();

    launchFireworks();

    setTimeout(()=>{

        document.getElementById("finalScreen")
        .style.display="flex";

    },9000);

});

// =====================================
// Confetti
// =====================================

function launchConfetti(){

const colors=[
"#ff4f8b",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff",
"#ffb703"
];

for(let i=0;i<220;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.animation=
"confettiFall "+(3+Math.random()*3)+"s linear forwards";

piece.style.transform=
"rotate("+Math.random()*360+"deg)";

confetti.appendChild(piece);

setTimeout(()=>{

piece.remove();

},7000);

}

}

// =====================================
// Balloons
// =====================================

function launchBalloons(){

const colors=[
"#ff5c8d",
"#ffd166",
"#4cc9f0",
"#90be6d",
"#9d4edd"
];

for(let i=0;i<18;i++){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=
Math.random()*100+"vw";

balloon.style.background=
colors[Math.floor(Math.random()*colors.length)];

balloon.style.bottom="-100px";

balloon.style.animation=
"balloonUp "+(8+Math.random()*5)+"s linear forwards";

balloons.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},14000);

}

}

// =====================================
// Heart Rain
// =====================================

function launchHeartRain(){

const hearts=[
"❤️","💖","💕","💗","💝"
];

for(let i=0;i<80;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML=
hearts[Math.floor(Math.random()*hearts.length)];

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=
(20+Math.random()*18)+"px";

heart.style.transition="6s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

},50);

setTimeout(()=>{

heart.remove();

},6500);

},i*120);

}

}

// =====================================
// Fireworks
// =====================================

function launchFireworks(){

let total=0;

const show=setInterval(()=>{

createFirework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight*0.6

);

total++;

if(total>=12){

clearInterval(show);

}

},700);

}

// =====================================

function createFirework(x,y){

for(let i=0;i<35;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=x+"px";

fire.style.top=y+"px";

fire.style.background=
"hsl("+Math.random()*360+",100%,60%)";

fire.style.transform=
"translate("+
(Math.random()*220-110)+"px,"+
(Math.random()*220-110)+"px)";

fire.style.animation=
"explode 1.4s ease-out forwards";

fireworks.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1500);

}

}
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 6
   RESTART + FINAL POLISH
========================================== */

// =====================================
// Final Screen
// =====================================

const finalScreen =
document.getElementById("finalScreen");

const restart =
document.getElementById("restart");

// =====================================
// Optional Background Music
// =====================================

// Uncomment these lines if you add music later

/*
const music = new Audio("music/birthday.mp3");

music.loop = true;

music.volume = 0.5;

yesBtn.addEventListener("click",()=>{

    music.play();

});
*/

// =====================================
// Restart Everything
// =====================================

restart.addEventListener("click",()=>{

    location.reload();

});

// =====================================
// Final Screen Animation
// =====================================

function showFinalScreen(){

    finalScreen.style.display="flex";

    finalScreen.animate([

        {

            opacity:0,

            transform:"scale(.9)"

        },

        {

            opacity:1,

            transform:"scale(1)"

        }

    ],{

        duration:900,

        fill:"forwards"

    });

}

// Replace old timeout

continueBtn.addEventListener("click",()=>{

    setTimeout(showFinalScreen,9000);

});

// =====================================
// Floating Emojis
// =====================================

function floatingEmoji(){

    const emojis=[

        "🎉",

        "🎊",

        "🎂",

        "🎈",

        "💖",

        "✨",

        "🌸",

        "💐"

    ];

    const emoji=document.createElement("div");

    emoji.innerHTML=

    emojis[Math.floor(Math.random()*emojis.length)];

    emoji.style.position="fixed";

    emoji.style.left=Math.random()*100+"vw";

    emoji.style.bottom="-40px";

    emoji.style.fontSize=

    (18+Math.random()*20)+"px";

    emoji.style.transition="7s linear";

    emoji.style.pointerEvents="none";

    document.body.appendChild(emoji);

    setTimeout(()=>{

        emoji.style.bottom="110vh";

    },30);

    setTimeout(()=>{

        emoji.remove();

    },7200);

}

setInterval(floatingEmoji,1200);

// =====================================
// Greeting in Console
// =====================================

console.log(

"🎂 Happy Birthday Aunty ❤️");

console.log(

"Made with ❤️ by Sambhav");

// =====================================
// Keyboard Shortcut
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        if(giftPopup.style.display==="flex"){

            yesBtn.click();

        }

    }

});

// =====================================
// Small Surprise
// =====================================

let clicks=0;

document.body.addEventListener("click",()=>{

    clicks++;

    if(clicks===30){

        alert("💖 Thank you for enjoying this birthday surprise! 💖");

    }

});
/* ==========================================
   PREMIUM BIRTHDAY CARD
   JAVASCRIPT PART 7
   FINAL POLISH
========================================== */

// =====================================
// Prevent Double Clicks
// =====================================

let celebrationStarted = false;

continueBtn.addEventListener("click", () => {

    if (celebrationStarted) return;

    celebrationStarted = true;

});

// =====================================
// Fade Utility
// =====================================

function fadeOut(element, time = 600){

    element.style.transition =
    time + "ms";

    element.style.opacity = "0";

    setTimeout(() => {

        element.style.display = "none";

    }, time);

}

function fadeIn(element){

    element.style.display = "flex";

    element.style.opacity = "0";

    setTimeout(() => {

        element.style.transition = ".6s";

        element.style.opacity = "1";

    }, 20);

}

// =====================================
// Smooth Button Animation
// =====================================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "scale(1)";

    });

});

// =====================================
// Disable Text Selection
// =====================================

document.body.style.userSelect = "none";

// =====================================
// Smooth Scroll
// =====================================

document.documentElement.style.scrollBehavior = "smooth";

// =====================================
// Auto Focus YES Button
// =====================================

openGift.addEventListener("click", () => {

    setTimeout(() => {

        yesBtn.focus();

    },300);

});

// =====================================
// Ending Animation
// =====================================

const endingText = document.querySelector("#finalScreen h1");

if(endingText){

    endingText.animate([

        {

            transform:"scale(.95)",

            opacity:.8

        },

        {

            transform:"scale(1.05)",

            opacity:1

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:2500,

        iterations:Infinity

    });

}

// =====================================
// Goodbye Message
// =====================================

window.addEventListener("beforeunload",()=>{

    console.log(

    "❤️ Thank you for using the Birthday Card ❤️"

    );

});
