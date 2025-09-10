import runObserverDemo from "./observer/index";
import runSingletonDemo from "./singleton";
import runAdapterDemo from "./adapter/intex";
import runFactoryDemo from "./factory";

function log() {
  console.log(
    "______________________________________________________________________________________________\n"
  );
}

runObserverDemo();
log();
runSingletonDemo();
log();
runFactoryDemo();
log();
runAdapterDemo();
