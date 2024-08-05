/*버튼 0 누르면
- 모든버튼에 붙은 orange클래스명 제거
- 버튼 0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가

*/


/* 
          querySelector[0]랑 비슷
        버튼.eq(0).on('click', function(){
        버튼.removeClass('orange');
        버튼.eq(0).addClass('orange');
        내용.removeClass('show');
        내용.eq(0).addClass('show');
    });

        버튼.eq(1).on('click', function(){
            버튼.removeClass('orange');
            버튼.eq(1).addClass('orange');
            내용.removeClass('show');
            내용.eq(1).addClass('show');
    })

    버튼.eq(2).on('click', function(){
        버튼.removeClass('orange');
        버튼.eq(2).addClass('orange');
        내용.removeClass('show');
        내용.eq(2).addClass('show');
    })

    */




    var 버튼 = $('.tab-button');
    var 내용 = $('.tab-content');
    
    /* 
    for(let i = 0; i < $('.tab-button').length; i++){
        버튼.eq(i).on('click', function(){
        
            탭열기(i);
        });

    }
     */   


        $('.list').click(function(e){
            //지금 누른게 버튼0이면 탭열기(0);
            
            탭열기(e.target.dataset.id)
        })

        function 탭열기(숫자){
            버튼.removeClass('orange');
            버튼.eq(숫자).addClass('orange');
            내용.removeClass('show');
            내용.eq(숫자).addClass('show');
        }
            
    








    $('#modal-btn').on('click', function(){
        $('.black-bg').addClass('show-modal');
    })

    document.querySelector('.black-bg').addEventListener('click', function(e){
       // e.currentTarget; // 이벤트리스너 달린 곳
       // e.target; // 유저가 실제로 누른거
       // e.preventDefault();
       // e.stopPropagation();
        
       if(e.target == document.querySelector('.black-bg')){
        document.querySelector('.black-bg').classList.remove('show-modal');
       }


        
    })
    

    


