const fs = require('fs');
const path = require('path');
const os = require('os');

function findThemeFile(name) {
	const home = os.homedir();
	const dirs = [
		path.join(home, '.local', 'share', 'themes'),
		path.join(home, '.themes'),
		'/usr/share/themes'
	];
	for (const dir of dirs) {
		for (const v of [3, 2, 1]) {
			const p = path.join(dir, name, 'metacity-1', `metacity-theme-${v}.xml`);
			if (fs.existsSync(p)) return p;
		}
	}
	return null;
}

module.exports = { findThemeFile };
