/*버튼 0 누르면
- 모든버튼에 붙은 orange클래스명 제거
- 버튼 0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가

*/



    for(let i = 0; i < $('.tab-button').length; i++){

        $('.tab-button').eq(i).on('click', function(){
            $('.tab-button').removeClass('orange');
            $('.tab-button').eq(i).addClass('orange');
            $('.tab-content').removeClass('show');
            $('.tab-content').eq(i).addClass('show');
        
        })
    }



    $('#modal-btn').on('click', function(){
        $('.black-bg').addClass('show-modal');

    })


    document.querySelector('.black-bg').addEventListener('click', function(e){


        if(e.target == document.querySelector('.black-bg')){
            document.querySelector('.black-bg').classList.remove('show-modal');
        }
    })



    $('#close').on('click', function(){
        $('.show-modal').removeClass('show-modal');
    })

   



    $('form').on('submit', function(e){
        var 이메일 = document.getElementById('email').value;
        var 비밀번호 = document.getElementById('password').value;
        var 대문자 = /[A-Z]/;
         if(/\S+@\S+.\S+/.test(이메일) == ''){
            alert('이메일 형식이 아닙니다.');
            e.preventDefault();
        }else if(대문자.test(비밀번호) == '' || 비밀번호.length < 6){
            alert('비밀번호가 대문자 포함이 아니거나 6글자 이상이 아닙니다.');
            e.preventDefault();
        }

        
        

    })









/* 

$('.tab-button').eq(1).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
})


$('.tab-button').eq(2).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
})

*/







// Array 자료형 
var car = ['소나타',50000,'white'];


// Object 자료형 이름 붙여서 저장가능한게 장점
var car2 = {
    name: '람보르기니',
    price: [10000,50000,1000],
    color: 'white',
}


document.querySelector('.name').innerHTML = car2.name;
document.querySelector('.price').innerHTML = car2.price[0];