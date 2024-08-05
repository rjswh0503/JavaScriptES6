var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// canvas 속성

// 등장 캐릭터 속성 object
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        //ctx.fillStyle = 'green';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y);
    }
}


var img1 = new Image();
img1.src = 'cactus.png';

var img2 = new Image();
img2.src = 'dinosaur.png';



// 장애물 class 
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        //ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y);
    }
}

// 타이머

var timer = 0;


var cactus여러개 = [];

var 점프timer = 0;

var animation;


// 1초에 60번 실행할 함수
function 프레임마다실행할것(){
    animation = requestAnimationFrame(프레임마다실행할것)
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer % 200 === 0){
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o) => {
        //x좌표가 0미만이면 제거
        if(a.x < 0){
            o.splice(i,1)
        }
        a.x--;
        충돌하냐(dino,a);
        a.draw();
    })


    if(점프 == true){
        dino.y--;
        점프timer++;
    }
    if(점프 == false){
        if(dino.y < 200){
            dino.y++;
        }
        
    }

    if(점프timer > 100){
        점프 = false;
        점프timer = 0;

    }

    


    dino.draw();
}

프레임마다실행할것();

//충돌확인
function 충돌하냐(dino,cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 <0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
       cancelAnimationFrame(animation);
    }
}


// 점프 기능
var 점프 = false
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        점프 = true;
    }
})