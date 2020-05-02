const slider= document.querySelector(".slider");
const slider2= document.querySelector('.slider2');
const logo= document.querySelector('.logo');
const shop= document.querySelector('.shop');
const slajder=document.querySelector('.slajder');
const nawigacja= document.querySelector('.nawigacja');
const nawigacjaa= document.querySelector('.nawigacjaa');
const nawigacjaaa= document.querySelector('.nawigacjaaa');
const slajder2= document.querySelector('.slajder2');
const slajder3= document.querySelector('header');
const zdjecie= document.querySelector('.zdjecie');
const zdjecie2= document.querySelector('.zdjecie1');

const t1= new TimelineMax();

t1.fromTo(slider,1.2,{x:"-100%"}, {x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(slider2,1.2,{x:"100%"}, {x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(slajder3,1.2,{x:"100%"}, {x:"0%",ease:Power2.easeInOut},"-=1.2")

.fromTo(slajder,2.3,{x:"-200%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(zdjecie,1.2,{opacity:0,y:30},{opacity:1,y:0,},"-=1.2")
.fromTo(zdjecie2,1.2,{opacity:0,y:30},{opacity:1,y:0,},"-=1.2")
.fromTo(slajder2,1.5,{opacity:0,x:10},{opacity:1,x:0},"-=0.2")
.fromTo(logo,0.5,{opacity:0,x:10},{opacity:1,x:0},"-=0.9")
.fromTo(shop,0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.9")
.fromTo(nawigacja,1.2,{opacity:0,x:30},{opacity:1,x:0},"-=0.9")
.fromTo(nawigacjaa,1.2,{opacity:0,x:30},{opacity:1,x:0},"-=1")
.fromTo(nawigacjaaa,1.2,{opacity:0,x:30},{opacity:1,x:0},"-=1");
