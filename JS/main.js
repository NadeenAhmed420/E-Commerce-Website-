/////////////////////js for product section

const items = document.querySelectorAll("[data-target]"); //featured-popular-new-added
const contents = document.querySelectorAll("[content]"); //content of each item

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    const target = document.querySelector(item.dataset.target);

    contents.forEach((content) => {
      content.classList.remove("active");
    }); //remove from featured
    target.classList.add("active");
  });
});

/////////////////////js for shop page
function mainGallary() {
  const mainImg = document.querySelector(".details-img");
  const smallImages = document.querySelectorAll(".details-small-img");

  smallImages.forEach((img) => {
    img.addEventListener("click", function () {
      //this for small image
      mainImg.src = this.src;
    });
  });
}
mainGallary();

$(".catagories-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
  nextArrow: '<button type="button" class="slick-next">&gt;</button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".new-arrival").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
  nextArrow: '<button type="button" class="slick-next">&gt;</button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
