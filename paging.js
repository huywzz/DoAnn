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
    { id: 1, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 2, name: "", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 3, name: "Frontend Devel", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 4, name: "Frontend Dev", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 5, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 6, name: "DevsOp", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 7, name: "PP", time: "Partime", company: "Facebook, Inc", address: "Western City, UK" },
    { id: 8, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 9, name: "Pi", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 10, name: "Front Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 11, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 12, name: "SE", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 13, name: "DA", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 14, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 15, name: "BFA", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 16, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 17, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 18, name: "CE", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 19, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 20, name: "AD", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 21, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 22, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 23, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" },
    { id: 24, name: "Frontend Development", time: "Partime", company: "Facebook, Inc", address: "Western City, UK",detail:"./seeDetail.html" }
]
let perPage = 6;
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
            html += '<div class="row-recent reveal">';
            html += '<div class="row-recent-container">';
            html += '<div class="row-item">';
            html += '<div class="name-job">';
            html += '<h2 class="name">' + item.name + '</h2>';
            html += '<div class="level">';
            html += ' <span class="sp-level">' + item.time + '</span>';
            html += '</div>';
            html += '</div>';

            html += '<div class="address-job">';

            html += '<div class="company">';
            html += '<i class="ti-layers-alt"></i>';
            html += '<a href="" class="company-name">' + item.company + '</a>';
            html += '</div>';

            html += '<div class="company">';
            html += '<i class="ti-location-pin"></i>';
            html += '<span href="" class="name-address">' + item.address + '</span>';
            html += '</div>';

            html += '</div>';

            html += '</div>';
            html += '<div class="apply">';
            html += '<i class="ti-location-pin"></i>';
            html += '<a href="'+item.detail+'" class="apply-job">Xem chi tiết</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            
            return html;
        }

    })
    document.getElementById('jobb').innerHTML = html;
}
function rederListPage(){
    let html='';
   
    html+='<a class="active" href="#">1</a>';
    for(let i=2;i<=totalPage;i++){
        html +='<a href="#">'+i+'</a>';
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