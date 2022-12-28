
// menu link active onclick

const anChor = document.querySelectorAll('.main-menu a');


if (anChor != null) {
  anChor.forEach(el => {
    let isHash = el.getAttribute('href') == '#';
    let isActive = el.pathname === location.pathname;
    el.closest('li').classList.toggle('active', isActive);
    if (isHash) {
      el.closest('li').classList.remove('active');
    }
    el.addEventListener('click', () => {
      if (isHash) {
        const lis = document.querySelectorAll('.main-menu li');
        lis.forEach(li => {
          li.classList.remove('active');
        })
        el.closest('li').classList.toggle('active', isActive);
      }
      document.getElementById("mySidenav").style.transform = "translateX(-100%)";
      document.documentElement.style.overflow = "auto";
    });
  });
}

// sticky header js
$(window).scroll(function (e) {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 20) {
    $('#site-header').addClass('sticky');
  } else {

    $('#site-header').removeClass('sticky')
  }
});

// custom tabs js

if ($(".custom-tabs").length) {

  const tabLink = document.querySelectorAll('.custom-tabs ul li > span');
  const allTabs = document.querySelectorAll('.custom-tabs .tab-content .ctm-tabs-pan');
  tabLink.forEach(link => {
    link.addEventListener('click', () => {
      const lis = document.querySelectorAll('.custom-tabs ul li');
      lis.forEach(li => {
        li.classList.remove('active');
      })
      link.closest('li').classList.add('active');
      const currentTab = link.getAttribute('data-toggle');
      const targetTab = document.querySelector(`.custom-tabs .ctm-tabs-pan[data-target="${currentTab}"]`)
      allTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      targetTab.classList.add('active');

    });
  });
}

// home hero slider
if ($(".hero-slider-home").length) {
  $(".hero-slider-home").slick({
    infinite: true,
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<span class="slick-prev arrow-btn"><svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7174 0.44946C15.1612 0.893238 15.2015 1.58768 14.8384 2.07703L14.7174 2.21723L3.93516 13L14.7174 23.7828C15.1612 24.2266 15.2015 24.921 14.8384 25.4104L14.7174 25.5506C14.2736 25.9943 13.5792 26.0347 13.0898 25.6716L12.9496 25.5506L1.28295 13.8839C0.839168 13.4401 0.798824 12.7457 1.16192 12.2563L1.28295 12.1161L12.9496 0.44946C13.4378 -0.0386954 14.2292 -0.0386954 14.7174 0.44946Z" fill="white"/></svg></span>',
    nextArrow:
      '<span class="slick-next arrow-btn"><svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.28311 25.5506C0.839331 25.1068 0.798988 24.4123 1.16208 23.923L1.28311 23.7828L12.0653 13L1.28311 2.21722C0.839331 1.77344 0.798988 1.079 1.16208 0.589651L1.28311 0.449454C1.72689 0.00567675 2.42133 -0.0346672 2.91068 0.328424L3.05088 0.449454L14.7175 12.1161C15.1613 12.5599 15.2017 13.2543 14.8386 13.7437L14.7175 13.8839L3.05088 25.5506C2.56272 26.0387 1.77126 26.0387 1.28311 25.5506Z" fill="white"/></svg></span>',
    arrows: true,
  });
}

// slick arrows position

if ($(".hero-slider-home").length) {
  const container = document.querySelector('.container');

  const arrowPos = () => {
    const offSetLeft = container.offsetLeft + 15;
    const arrowleft = document.querySelector('.hero-slider-home .slick-prev');
    const arrowRight = document.querySelector('.hero-slider-home .slick-next');
    arrowleft.style.left = offSetLeft + 'px';
    arrowRight.style.right = offSetLeft + 'px';
  }

  window.addEventListener('resize', arrowPos);
  window.addEventListener('load', arrowPos);
}

// scroll btn
if ($("#scrollBtn").length) {
  const scrollBtn = document.getElementById('scrollBtn');
  scrollBtn.addEventListener('click', () => {
    const secScroll = scrollBtn.closest('section').offsetHeight;
    window.scrollTo(0, secScroll - 50);
  })
}

// mobile menu js

function openNav() {
  document.getElementById("mySidenav").style.transform = "translateX(0%)";
  document.documentElement.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.transform = "translateX(-120%)";
  document.documentElement.style.overflow = "auto";
}

// if page content is less then viewport height

const pageHeight = () => {
  const mainElement = document.getElementById('main-content');
  const footerElement = document.getElementById('site-footer');
  const ftHeight = footerElement.offsetHeight;
  mainElement.style.minHeight = `total( 100vh - ${ftHeight}px)`;
}

addEventListener('resize', pageHeight);
addEventListener('load', pageHeight);

// product detail quantity increase js

const quantityBlock = document.querySelector('.quantity-counter-block');
const priceElment = document.getElementById('price');
let price = 6999.00;
if (quantityBlock != null) {
  const minusBtn = quantityBlock.querySelector('.minus');
  const plusBtn = quantityBlock.querySelector('.plus');
  const input = quantityBlock.querySelector('input');
  input.value = ('0' + input.value).slice(-2);
  const total = input.value * price;
  priceElment.innerText = '$' + total.toFixed(2);
  minusBtn.addEventListener('click', () => {
    if (input.value != 1) {
      input.value--;
      if (input.value < 10) {
        input.value = '0' + input.value;
      }
      const total = input.value * price;
      priceElment.innerText = '$' + total.toFixed(2);
    }
  });
  plusBtn.addEventListener('click', () => {
    input.value++;
    if (input.value < 10) {
      input.value = '0' + input.value;
    }
    const total = input.value * price;
    priceElment.innerText = '$' + total.toFixed(2);
  });
}
// faq page
$('.accordion-item').click( function(){
        if($(this).hasClass('active')){
            $('.accordion-item').removeClass('active');
        }
        else{
            $('.accordion-item').removeClass('active');
            $(this).addClass('active');
        }
    });
    $(document).ready(function(){
        $('.accordion-collapse.collapse').removeClass('show');
        
    });

// AOS js
AOS.init({
  once:true
});






