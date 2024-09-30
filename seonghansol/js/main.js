$(document).ready(function(){
  const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    navigation: false, /* 오른쪽에 각 페이지의 paging */
    navigationPosition: 'left', /* 위치 */
    navigationTooltips: ['01', '02', '03', '04'], /* 툴팁 */
    showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

    lockAnchors:true,
    anchors: ['main', 'who', 'projects', 'thankyou'],

    autoScrolling:true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
    
    scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

    

    responsiveWidth: 1025 /* fullpage를 적용시키지 않을 모바일 사이즈 */
  });//fullpage


})