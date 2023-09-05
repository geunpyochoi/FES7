import ColaGenerator from "./JS/colaGenerator.js";
import VendingMachineFunc from "./JS/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setup();