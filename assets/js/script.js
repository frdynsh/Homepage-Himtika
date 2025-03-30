(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(300);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var headerUpper = $('.header-upper');
			var headerTop = $('.header-top');
			var scrollLink = $('.scroll-to-top');
			
			// Cek jika scroll lebih dari 100px
			if (windowpos > 136) {
				// Menambahkan kelas sticky pada header-upper
				headerUpper.addClass('sticky');
				// Menyembunyikan header-top
				headerTop.fadeOut(300);
				// Menampilkan scroll-to-top
				scrollLink.fadeIn(1000);
			} else {
				// Menghapus kelas sticky pada header-upper
				headerUpper.removeClass('sticky');
				// Menampilkan kembali header-top
				headerTop.fadeIn(300);
				// Menyembunyikan scroll-to-top
				scrollLink.fadeOut(300);
			}
		}
	}
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	
	headerStyle();

	$(window).on('scroll', function() {
		headerStyle();
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	// Loading masuk page akan di gantikan dengan fungsi berikut
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

  // Mencegah Inspect Element dan View Source
  document.addEventListener("keydown", function (event) {
	if (
	  (event.ctrlKey &&
		(event.key === "u" ||
		  event.key === "i" ||
		  event.key === "j" ||
		  event.key === "s")) ||
	  (event.ctrlKey &&
		event.shiftKey &&
		(event.key === "I" || event.key === "J" || event.key === "C")) ||
	  event.key === "F12"
	) {
	  event.preventDefault();
	  console.log("Inspect Element telah dinonaktifkan!"); // Debugging
	}
  });
  // Mencegah Klik Kanan
  document.addEventListener("contextmenu", function (event) {
	event.preventDefault();
  });
  // Mencegah Drag & Drop pada Semua Gambar
  document.addEventListener("dragstart", function (event) {
	event.preventDefault();
  });
  // Mencegah Klik Kanan pada Gambar Secara Spesifik
  document.querySelectorAll("img").forEach((img) => {
	img.addEventListener("contextmenu", (event) => event.preventDefault());
  });
 
/* ================= Section FAQ ================= */
document.addEventListener("DOMContentLoaded", () => {
	const accordions = document.querySelectorAll(".accordion-toggle");
  
	accordions.forEach((accordion) => {
	  accordion.addEventListener("change", function () {
		// Menutup accordion lainnya saat yang ini dibuka
		accordions.forEach((item) => {
		  if (item !== this) item.checked = false;
		});
	  });
	});
  });