/** @param {NS} ns */
export async function main(ns) {

	ns.ui.openTail();

	let current = ns.singularity.getCurrentWork()


	if (!ns.hasRootAccess("n00dles")) {
		ns.run("/worm/worm.nuke.js");
		await ns.sleep(10000);
	}

	ns.run("/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");
	ns.exec("/loop/combo.wgh.nocrack.loop.js", "home", 10, "n00dles");
	ns.run("/sleeves/startwork.js");

	if (current == null) {
		ns.run("work/uni.rothman.hack.js");
		ns.print("You start studying Algorithms at Rothman University.")
		await ns.sleep(2000)
	} else {
		if (current.classType != "Algorithms" && current.location != "Rothman University") {
			ns.run("work/uni.rothman.hack.js");
			ns.print("Changing work to studying Algorithms at Rothman University.")
		} else {
			current = ns.singularity.getCurrentWork()
			ns.print("You are studying " + current.classType + " at " + current.location)
		}
	}


	ns.print("Setting Hash sale type to cash.");
	ns.run("/hnet/cash.js");
	await ns.sleep(500);
	ns.print("Starting Hash sales.");
	ns.run("/bot/bot.hacknet.sellhashes.js");
	ns.run("/utils/selling.js");

	while (ns.getServerMoneyAvailable("home") < (ns.singularity.getDarkwebProgramCost("BruteSSH.exe") + 200000)) {
		await ns.sleep(1000)
	}

	if (!ns.hasTorRouter()) {
		ns.singularity.purchaseTor()
	}

	if (!ns.fileExists("BruteSSH.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("BruteSSH.exe")) {
		ns.singularity.purchaseProgram("BruteSSH.exe");
	}

	if (ns.getPurchasedServers() < 5) {
		let sToBuy = 5 - ns.getPurchasedServers()
		ns.exec("/serv/serv.buy.loop.js", "home", 1, "S", 64, sToBuy, 20000)
	}
	ns.kill("/loop/combo.wgh.nocrack.loop.js", "home", "n00dles");


	ns.exec("/init/init.batcher.pservPool.js", "home", 1, "n00dles", 1, 1, 5, 1000)
	ns.exec("/utils/monitor2.js", "home", 1, "n00dles")


	//await ns.sleep(1000)




} 