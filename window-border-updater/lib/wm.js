const cp = require('child_process');

function restartWM(de) {
	const isWayland = !!process.env.WAYLAND_DISPLAY;

	if (de.includes('mate')) {
		cp.spawn('marco', ['--replace', '--no-composite'], { detached: true, stdio: 'ignore' }).unref();
	} else if (de.includes('xfce')) {
		cp.spawn('xfwm4', ['--replace'], { detached: true, stdio: 'ignore' }).unref();
	} else if (de.includes('gnome') || de.includes('ubuntu')) {
		if (isWayland) {
			console.log('WARN: Wayland rilevato — riavvia gnome-shell manualmente (Alt+F2 → r)');
		} else {
			cp.spawn('gnome-shell', ['--replace'], { detached: true, stdio: 'ignore' }).unref();
		}
	} else {
		console.log(`WARN: DE "${de}" non supportato — riavvia il window manager manualmente`);
	}
}

module.exports = { restartWM };
