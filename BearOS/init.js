/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	ns.run("BearOS/init/init.reset.savedVar.js");
	await ns.sleep(1000)
	ns.run("BearOS/init/init.get.BNMults.js");
	await ns.sleep(1000)
	ns.run("BearOS/init/init.getSF.js");
	await ns.sleep(1000)
	ns.run("BearOS/init/init.getBN.js");
	await ns.sleep(1000)
	ns.run("BearOS/init/init.useParam.js");
	await ns.sleep(1000)
	ns.run("BearOS/init/init.ports.js");
	await ns.sleep(1000)
	ns.run("BearOS/start.js");

	ns.tprint("Initialisation complete, starting main operations.")

}