/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(500, 220);
	ns.ui.moveTail(655, 50);
	ns.disableLog('getServerMaxRam');
	ns.disableLog('getServerMoneyAvailable');
	ns.disableLog('sleep');

	let ram = ns.args[0];
	let cycleTime = ns.args[1];

	let baseCost = ns.getPurchasedServerCost(ram) - ns.getPurchasedServerCost(ram / 2)
	let upgQty = 0
	let purchServers = ns.getPurchasedServers();

	await ns.sleep(100);


	// check to see if any servers need to be upgraded still

	for (let server of purchServers) {
		if (ns.getServerMaxRam(server) < ram) {
			upgQty++
		}
	}
	ns.print(` ${(upgQty).toFixed(0)} `)

	while (upgQty > 0) {

		ns.print(` We still need to upgrade ${(upgQty).toFixed(0)} servers`);

		for (let server of purchServers) {
			// Establish how much ram this server currently has
			let serverRam = ns.getServerMaxRam(server)
				let upgCost = ns.getPurchasedServerCost(ram) - ns.getPurchasedServerCost(serverRam)
				let availMoney = ns.getServerMoneyAvailable("home")
				if (serverRam < ram) {

					if (availMoney > upgCost) {
						ns.upgradePurchasedServer(server, (ram));
						await ns.sleep(1000);
						ns.run("BearOS/worm/worm.killall.cloud.js");
						await ns.sleep(1000);
						ns.run("BearOS/worm/worm.wgh.nocrack.loop.cloudonly.js", 1, "n00dles");
						
						upgQty--
					}
				}
		}
		ns.print(` Saving my pennies! Normal upgrade cost is ${ns.formatNumber(baseCost)} each`);
		await ns.sleep(cycleTime);
	}
	ns.print(`We ae done, I am outta here!`)
}