import { Custard } from "@discolabs/custard-js";
import { AcceptsTermsAndConditions } from "./modules/accept_terms_and_conditions";

window.custard = new Custard([
  AcceptsTermsAndConditions
]);
