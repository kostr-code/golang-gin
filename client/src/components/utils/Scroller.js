import { scroller } from "react-scroll";

export default function scrollToCatalog() {
  scroller.scrollTo("catalog", {
    duration: 3000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
