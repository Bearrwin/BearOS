/** @param {NS} ns */
import { cloudQty } from "BearOS/func/func.js";

export async function main(ns) {

	ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');

	let currWork = ns.singularity.getCurrentWork()
		let cloudMaxQty = ns.getPurchasedServerLimit()
		let cloudMaxSize = ns.getPurchasedServerMaxRam()
		let cloudCurrQty = cloudQty(ns)
		let buySize = 64
		let cloudEndQty = cloudMaxQty
		let cSize = 16384
		let sf9 = ns.peek(10010109)
		let currentCity = ns.getPlayer().city
		let currWork = ns.singularity.getCurrentWork()

		//let thisBN =
		//let freshBN =

		// Is this a game reload - wait until ports have been initialsed
		// BearOS/init/init.ports.js then exit the while loop

		while (ns.peek(10010001) != "true") {
			await ns.sleep(1000)
		}

		// Check to see if thid is a freh BN or an aug install/soft reset.
		/*
		if (ns.peek(10010003) == "true"){

		run freshBN scripts
		ns.exit()
		}
		Run nuke worm
		Check home ram size
		For the following list start those being used
		BB
		Corp
		Sleeves
		Cloud
		Grafting
		Stocks
		Hacknet
		 */

		// Nuke all possible servers to gain root access
		ns.run("BearOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	// Run combo hack worm from all NPC servers we have root access to.
	await ns.run("BearOS/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");

	// Start sleeves working
	ns.run("BearOS/sleeves/startwork.js");

	if (sf99 < 3) {
		ns.run("BearOS/work/uni.rothman.hack.js");
		ns.print("You start studying Algorithms at Rothman University.")
		await ns.sleep(500)

	}
	ns.print("Setting Hash sale type to cash.");
	ns.run("BearOS/hnet/cash.js");
	await ns.sleep(500);
	ns.print("Starting Hash sales.");
	ns.run("BearOS/bot/bot.hacknet.sellhashes.js");
	ns.run("BearOS/utils/selling.js");

	while (ns.getServerMoneyAvailable("home") < 3000000) {
		await ns.sleep(1000)
	}

	if (currentCity != "Volhaven") {
		ns.run("BearOS/travel/Volhaven.js");
		await ns.sleep(1000)
	}
	ns.run("BearOS/work/uni.zb.hack.js");
	await ns.sleep(1000)

	if (!ns.hasTorRouter()) {
		ns.run("BearOS/darkweb/darkweb.tor.js");
		await ns.sleep(1000)
	}

	if (!ns.fileExists("BruteSSH.exe", "home")) {
		ns.run("BearOS/darkweb/darkweb.ssh.js");
	}

	if (!ns.fileExists("FTPCrack.exe", "home")) {
		ns.run("BearOS/darkweb/darkweb.ssh.js");
	}

	ns.run("BearOS/worm/worm.nuke.js");
	await ns.sleep(10000);

	ns.run("BearOS/worm/worm.killall.excepthome.js");
	await ns.sleep(1000);

	await ns.run("BearOS/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles");

	if (cloudCurrQty < cloudEndQty) {
		let sToBuy = cloudEndQty - cloudCurrQty
			ns.exec("BearOS/cloud/cloud.buy.loop.js", "home", 1, "S", buySize, sToBuy, 5000)
			while (cloudCurrQty < cloudEndQty) {
				cloudCurrQty = cloudQty(ns)
					ns.print("Waiting on funds to buy servers")
					await ns.sleep(10000);
			}
			ns.print("Finished buying servers, we now have ",  + cloudCurrQty)

			ns.exec("BearOS/cloud/cloud.upgtomax.loop.js", "home", 1, cSize)

	}

}

/*
ns.kill("/loop/combo.wgh.nocrack.loop.js", "home", "n00dles");


//ns.exec("/init/init.batcher.pservPool.js", "home", 1, "n00dles", 1, 1, 5, 1000)
//ns.exec("/utils/monitor2.js", "home", 1, "n00dles")


//await ns.sleep(1000)


*/
