/** @param {NS} ns */
import { npcList, threadMax } from "BearOS/func/func.js";

export async function main(ns) {
/* 
	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');
 */
	let target = ns.args[0];
	let servers = npcList(ns);

	for (let server of servers) {
		await ns.scp("BearOS/loop/combo.wgh.nocrack.loop.js", server, "home")
		let available_threads = threadMax(ns, server, 2.8)
			if (available_threads >= 1) {
				ns.print(available_threads);
				ns.exec("BearOS/loop/combo.wgh.nocrack.loop.js", server, available_threads, target);
			}
	}
}