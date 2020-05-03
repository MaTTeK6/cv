const row= document.querySelector('.row');
const row2= document.querySelector('.row2');
const row1= document.querySelector('.row1');
const nawigacja= document.querySelector('.navik');
const napis= document.querySelector('.napis');
const colsm3= document.querySelector('.col-sm3');
const slider= document.querySelector('.slider');

const t1= new TimelineMax();

t1.fromTo(row,1.2,{x:"-100%"}, {x:"0%",ease:Power2.easeInOut},)
.fromTo(row2,1.2,{x:"-100%"}, {x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(row1,1.2,{x:"-100%"}, {x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(nawigacja,1.2,{opacity:0,y:0},{opacity:1,y:0,},"-=0.2")
.fromTo(napis,1.2,{opacity:0,y:0},{opacity:1,y:0,},"-=0.5")
.fromTo(colsm3,1.3,{opacity:0,y:70},{opacity:1,y:0,},"-=0.2")
.fromTo(slider,1.2,{opacity:0,y:70},{opacity:1,y:0,},"-=0.9");
