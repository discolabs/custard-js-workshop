import { Custard, CustardModule, STEPS_ALL } from "@discolabs/custard-js";

class LogToConsoleModule extends CustardModule {

  id() {
    return 'log-to-console';
  }

  steps() {
    return STEPS_ALL;
  }

  selector() {
    return 'body';
  }

  setup() {
    console.log('checkout.js loaded.');
  }

}

window.custard = new Custard([
  LogToConsoleModule
]);
