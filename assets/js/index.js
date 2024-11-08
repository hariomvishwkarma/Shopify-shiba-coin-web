function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();









  function openCity_market(evt, cityName) {
    var i, tabcontent_market, tablinks_market;
    tabcontent_market = document.getElementsByClassName("tabcontent_market");
    for (i = 0; i < tabcontent_market.length; i++) {
      tabcontent_market[i].style.display = "none";
    }
    tablinks_market = document.getElementsByClassName("tablinks_market");
    for (i = 0; i < tablinks_market.length; i++) {
      tablinks_market[i].className = tablinks_market[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen_market").click();


  function closeModal(){
    document.getElementById("allow_modal").style.display = "none";
  }
  // document.getElementById("allow_modal_close").click();







  
// Initialize main slider
const slideItems = document.querySelector('.slide__items');
const slideItemsNav = document.querySelector('.slide__items-nav');

// Main slider
if (slideItems) {
  new Slick(slideItems, {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slideItemsNav
  });
}

// Navigation slider
if (slideItemsNav) {
  new Slick(slideItemsNav, {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slideItems,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}























