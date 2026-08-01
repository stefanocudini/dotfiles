const BORDER_NAMES = ['left_width', 'right_width', 'bottom_height'];
const BLOCK_RE = /<frame_geometry[^>]+name="frame_geometry_normal"[^>]*>[\s\S]*?<\/frame_geometry>/;
const NAMES_PATTERN = BORDER_NAMES.join('|');

function readBorderValues(xml) {
	const block = xml.match(BLOCK_RE)?.[0] ?? '';
	const result = {};
	for (const m of block.matchAll(new RegExp(`<distance name="(${NAMES_PATTERN})" value="([^"]+)"`, 'g'))) {
		result[m[1]] = m[2];
	}
	return result;
}

function applyBorderValues(xml, width) {
	return xml.replace(BLOCK_RE, (block) =>
		block.replace(
			new RegExp(`(<distance name="(?:${NAMES_PATTERN})" value=")[^"]*(")`,'g'),
			`$1${width}$2`
		)
	);
}

module.exports = { readBorderValues, applyBorderValues, BORDER_NAMES };
