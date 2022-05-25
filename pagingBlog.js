//item là những row: 1 ,2,3 ,4 ,5,7,8,9,10,11,12,13,14

//trang 1:1.2.3
//trang 2:4.5.6
//trang 3:7.8.9
//......

//itemPerPage=3(số item trong 1 page)
// currentPage=1(currentPage là trnag hiện tại, hiện tại đang ở trang 1)

// start=0 (phần tử đầu trong trang 1)
// end=itemParPage(phần tử cuối trong trang 1)

//  Tổng quát
//      start = ( currentPage-1 ) * itemParPage
//      end = currentPage * itemPerPage
const job = [
    { id: 1, img: "./assets/image/blog/blog1.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 2, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 3, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 4, img: "./assets/image/blog/blog4.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 5, img: "./assets/image/blog/blog1.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 6, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 7, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 8, img: "./assets/image/blog/blog4.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 9, img: "./assets/image/blog/blog4.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 10, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 11, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 12, img: "./assets/image/blog/blog1.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 13, img: "./assets/image/blog/blog1.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 14, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 15, img: "./assets/image/blog/blog2.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"},
    { id: 16, img: "./assets/image/blog/blog4.jpg", time:"DECEMBER 2, 2022 ADMIN", header:"Even the all-powerful Pointing", demo:" Every leader has their own style, philosophy,"}
    
]
let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPage=Math.ceil(job.length/perPage);
function getCurrentPage(currentPage){
    start = ( currentPage-1 ) * perPage;
    end = currentPage * perPage;
}
function rederJob() {
    html = '';
    const content = job.map((item, index) => {
        if (index >= start && index < end) {
            html+='<div class="col-blog reveal">';
            html+='<div class="img-blog">';
            html+='<a href="" class="img-blog-link" style="background-image: url('+item.img+');"> </a>'
            html+='</div>';
            html+='<div class="text-blog">';
            html+='<div class="time-blog">';
            html+='<p>'+item.time+' <i class="ti-comment-alt"></i> 3</p>';
            html+='</div>';
            html+='<h3 class="header-blog">';
            html+='<a href="">'+item.header+'</a>';
            html+='</h3>';
            html+='<p> '+item.demo+'</p>';
            html+='</div>';
            html+='</div>';
            return html;
        }

    })
    document.getElementById('blogg').innerHTML = html;
}
function rederListPage(){
    let html='';
   
    html+='<a class="active" href="#">1</a>';
    for(let i=2;i<=totalPage;i++){
        html +='<a href="javascript:void(0);">'+i+'</a>';
    }
    document.getElementById('number-page').innerHTML=html;
}
rederJob();
rederListPage();
function changePage(){
    const currentPages=document.querySelectorAll('.number-page a');
    console.log(currentPages);
    for(let i=0;i<currentPages.length;i++){
        currentPages[i].addEventListener('click',()=>{
            let value =1+i;
            currentPage =value;
            getCurrentPage(currentPage);
            $('.number-page a').removeClass('active');
            currentPages[i].classList.add('active')
            // $('.btn-prev').removeClass('btn-active');
            // $('.btn-next').removeClass('btn-active');
            rederJob();
        })
    }
}

changePage();
const btnNext=document.querySelector('.btn-next');
const btnPre=document.querySelector('.btn-prev');

btnNext.addEventListener('click',()=>{
    currentPage++;
    
    if(currentPage>totalPage){
        currentPage=totalPage;
    }
    if(currentPage===totalPage){
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    $('.number-page a:eq({currentPage-1})').addClass('active');
    console.log(start,end);
    getCurrentPage(currentPage);
    rederJob();
})

btnPre.addEventListener('click',()=>{
    currentPage--;
    
    if(currentPage<=1){
        currentPage=1;
    }
    if(currentPage===1){
        $('.btn-prev').addClass('btn-active');
    }

    $('.btn-next').removeClass('btn-active');
    $('.number-page a:eq($(currentPage-1))').addClass('active');
   
   
    console.log(start,end);
    getCurrentPage(currentPage);
    rederJob();
})