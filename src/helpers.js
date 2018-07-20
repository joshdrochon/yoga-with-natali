export const scroller = id => {
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: "smooth"
  });
};
