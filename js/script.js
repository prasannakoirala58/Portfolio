window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-head").style.top = "-150px";
  } else {
    document.getElementById("scroll-head").style.top = "0px";
  }
}
