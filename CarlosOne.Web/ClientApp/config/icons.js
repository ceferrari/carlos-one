import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope, faHeart, faGraduationCap, faHome, faInfo, faList, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome, faMicrosoft, faVuejs } from "@fortawesome/free-brands-svg-icons";

// If not present, it won"t be visible within the application. Considering that you don"t want
// all the icons for no reason.This is a good way to avoid importing too many unnecessary things.
library.add(
  // Solid
  faEnvelope,
  faHeart,
  faGraduationCap,
  faHome,
  faInfo,
  faList,
  faSpinner,

  // Brands
  faFontAwesome,
  faMicrosoft,
  faVuejs
);

export {
  FontAwesomeIcon
};
