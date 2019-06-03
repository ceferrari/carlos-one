import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope, faHeart, faGraduationCap, faHome, faInfo, faList, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { faFontAwesome, faMicrosoft, faVuejs } from "@fortawesome/free-brands-svg-icons";

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

export { FontAwesomeIcon };
