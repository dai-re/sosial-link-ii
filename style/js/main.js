let sos = document.getElementById('sosialbtn');
let card = document.getElementById('maincard');
let sosi = document.getElementById('sosial');
let igs = document.getElementById('shareig');
let igb = document.getElementById('igb');
let igw = document.getElementById('igwindow');

let fbs = document.getElementById('sharefb');
let fbb = document.getElementById('fbb');
let fbw = document.getElementById('fbwindow');

let tws = document.getElementById('sharetw');
let twb = document.getElementById('twb');
let tww = document.getElementById('twwindow');

let ghs = document.getElementById('sharegh');
let ghb = document.getElementById('ghb');
let ghw = document.getElementById('ghwindow');

let closesig = document.getElementById('closeig');
let closesfb = document.getElementById('closefb');
let closestw = document.getElementById('closetw');
let closesgh = document.getElementById('closegh');




closesig.onclick = function() {
  igw.classList.remove('top');
}
closesfb.onclick = function() {
  fbw.classList.remove('top');
}
closestw.onclick = function() {
  tww.classList.remove('top');
}
closesgh.onclick = function() {
  ghw.classList.remove('top');
}

sos.onclick = function() {
  card.classList.toggle('sosactive');
  sosi.classList.toggle('sosiactive');
  // card.style.height = '300px';
};



igb.onclick = function() {
  igw.classList.toggle('top');
}
igs.onclick = function() {
  navigator.share({
    text: "dai's sosial",
    url: "https://www.instagram.com/dei.terada"
  })
}


fbb.onclick = function() {
  fbw.classList.toggle('top');
}
fbs.onclick = function() {
  navigator.share({
    text: "dai's sosial",
    url: "https://facebook.com/deiterada"
  })
}


twb.onclick = function() {
  tww.classList.toggle('top');
}
tws.onclick = function() {
  navigator.share({
    text: "dai's sosial",
    url: "https://twitter.com/03ii00"
  })
}


ghb.onclick = function() {
  ghw.classList.toggle('top');
}
ghs.onclick = function() {
  navigator.share({
    text: "dai's sosial",
    url: "https://github.com/dai-re"
  })
}
