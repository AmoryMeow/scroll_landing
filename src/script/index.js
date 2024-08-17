const images = document.querySelectorAll(".image");

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        images.forEach((img) => {
          img.classList.remove("image_active");

          if (
            img.id.replace("image", "") === item.target.id.replace("block", "")
          ) {
            img.classList.add("image_active");
          }
        });
      }
    });
  },
  { threshold: 0.6 }
);

const blocks = document.querySelectorAll(".block").forEach((block) => {
  observer.observe(block);
});
