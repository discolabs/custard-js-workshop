import { CustardModule, STEP_CONTACT_INFORMATION } from "@discolabs/custard-js";

export class AcceptsTermsAndConditions extends CustardModule {

  id() {
    return 'accept-terms-and-conditions';
  }

  steps() {
    return STEP_CONTACT_INFORMATION;
  }

  selector() {
    return '[data-buyer-accepts-marketing]';
  }

  setup() {
    this.$element.after(this.options.html_templates.accept_terms_and_conditions);
  }

}
