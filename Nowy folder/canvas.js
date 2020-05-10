const canvas=document.getElementById('canvas');
const ctx= canvas.getContext('2d');

const image= document.getElementById("pacman");
const player=
{
    w:50,
    h:70,
    x:250,
    y:250,
    speed:10,
    dx:0,
    dy:0
};
function graplayer()
{
    ctx.drawImage(image,player.x,player.y,player.w,player.h);
}

function clear()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
function nowapozycja()
{
    player.x += player.dx;
    player.y +=player.dy;
    Sciana();
}
function Sciana()
{
    if(player.x<0)
    {
     player.x=0;   
    }
    if(player.x+player.w> canvas.width)
    {
        player.x=canvas.width - player.w;
    }
    if(player.y<0)
    {
     player.y=0;   
    }
    if(player.y+player.h>canvas.height)
    {
        player.y=canvas.height-player.h;
    }
}

function update(){
    clear();
    graplayer();
    nowapozycja();
    requestAnimationFrame(update);
}
function obrot()
{
    ctx.rotate(5*Math.PI/90);
}
function moveUp()
{
    player.dy=- player.speed;
    obrot();
}
function moveDown()
{
    player.dy=player.speed;
}
function moveRight()
{
    player.dx=player.speed;
}
function moveLeft()
{
    player.dx=-player.speed;
}
function KeyDown(e)
{
   if(e.key==="ArrowRight"||e.key=== "Right")
   {
       moveRight();
   }
   else if(e.key==='ArrowLeft'||e.key==="Left")
    {
        moveLeft();
    }
    else if(e.key==='ArrowUp'||e.key==="Up")
    {
        moveUp();
    }
    else if(e.key==='ArrowDown'||e.key==="Down")
    {
        moveDown();
    }
}

function KeyUp(e)
{
    if(
        e.key=="Right"||
        e.key=="ArrowRight" ||
        e.key=="Left"||
        e.key=="ArrowLeft"||
        e.key=="Up"||
        e.key=="ArrowUp"||
        e.key=="Down"||
        e.key=="ArrowDown"
    )
    {
        {
            player.dx=0;
            player.dy=0;
        }
    }
}
update();

document.addEventListener('keydown', KeyDown);
document.addEventListener('keyup',KeyUp);