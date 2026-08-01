const cp = require('child_process');

function getDE() {
	const raw = process.env.XDG_CURRENT_DESKTOP || process.env.DESKTOP_SESSION || process.env.GDMSESSION || '';
	return raw.toLowerCase().split(':')[0].trim();
}

function getWmTheme(de) {
	const candidates = [];
	if (de.includes('mate')) candidates.push(['org.mate.Marco.general', 'theme']);
	candidates.push(['org.gnome.desktop.wm.preferences', 'theme']);
	candidates.push(['org.gnome.desktop.interface', 'gtk-theme']);

	for (const [schema, key] of candidates) {
		try {
			const out = cp.execSync(`gsettings get ${schema} ${key}`, { stdio: ['pipe', 'pipe', 'pipe'] });
			const name = out.toString().trim().replace(/'/g, '');
			if (name) return name;
		} catch (e) {}
	}
	return null;
}

module.exports = { getDE, getWmTheme };
