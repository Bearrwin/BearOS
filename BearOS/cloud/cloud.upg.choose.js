/** @param {NS} ns */
export async function main(ns) {

	/* ns.ui.openTail();
	ns.ui.resizeTail(300, 130);
	ns.ui.moveTail(1225, 485);
	ns.disableLog('ALL');
 */
	// saves remembering all the different options. another drop down box.
	const queryResponse = await ns.prompt("How many Gb of RAM should each server have", {
		type: "select",
		choices: [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]
	});

	// variables from above
		let ram = queryResponse
		let currentRam = ns.getServerMaxRam("S")

		if (ram >= 32 && currentRam < 32) {
			ns.run("BearOS/cloud/cloud.upg.loop.js", 1, 32, 10000)
		}

		if (ram >= 64 && currentRam < 64) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 64, 10000)
		}

		if (ram >= 128 && currentRam < 128) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 128, 10000)
		}

		if (ram >= 256 && currentRam < 256) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 256, 10000)
		}

		if (ram >= 512 && currentRam < 512) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 512, 10000)
		}

		if (ram >= 1024 && currentRam < 1024) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 1024, 10000)
		}

		if (ram >= 2048 && currentRam < 2048) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 2048, 10000)
		}

		if (ram >= 4096 && currentRam < 4096) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 4096, 10000)
		}

		if (ram >= 8192 && currentRam < 8192) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 8192, 10000)
		}

		if (ram >= 16384 && currentRam < 16384) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 16384, 10000)
		}

		if (ram >= 32768 && currentRam < 32768) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 32768, 10000)
		}

		if (ram >= 65536 && currentRam < 65536) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 65536, 10000)
		}

		if (ram >= 131072 && currentRam < 131072) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 131072, 10000)
		}

		if (ram >= 262144 && currentRam < 262144) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 262144, 10000)
		}

		if (ram >= 524288 && currentRam < 524288) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 524288, 10000)
		}

		if (ram >= 1048576 && currentRam < 1048576) {
			ns.run("/BearOS/cloud/cloud.upg.loop.js", 1, 1048576, 10000)
		}

}