import $ from "jquery";

export const scroller = () => {
  $("#contact-tagline").click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#contact-form").offset().top
      },
      1000
    );
  });
};
