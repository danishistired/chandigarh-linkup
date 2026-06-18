//#region node_modules/.nitro/vite/services/ssr/assets/webring-uyjaPj_e.js
var members = { members: [{
	"name": "radish",
	"gh": "danishistired",
	"url": "https://danishv.me"
}] }.members;
function findIndex(name) {
	return members.findIndex((m) => m.name.toLowerCase() === name.toLowerCase());
}
function neighbour(name, dir) {
	const i = findIndex(name);
	if (i === -1) return null;
	return members[(i + (dir === "next" ? 1 : -1) + members.length) % members.length];
}
function random() {
	if (members.length === 0) return null;
	return members[Math.floor(Math.random() * members.length)];
}
//#endregion
export { neighbour as n, random as r, members as t };
