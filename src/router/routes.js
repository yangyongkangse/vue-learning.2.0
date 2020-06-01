import common from "./modules/common";
import dashboard from "./modules/dashboard";
import form from "./modules/form";
import handle from "./modules/handle";
const routes = [...handle,...form,...dashboard,...common];
export default routes;
