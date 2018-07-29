export const bloomer = (e, id) => {
  e.preventDefault();
  let el = document.getElementById(id);
  if (!el.classList.contains("bloom")) {
    el.classList.add("bloom");
  } else {
    el.classList.remove("bloom");
  }
};

export const scroller = (e, id) => {
  e.preventDefault();
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: "smooth"
  });
};
