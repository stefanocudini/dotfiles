# window-border-updater

Update window border width for Ubuntu 24 desktop environments.

Automatically detects the current desktop environment and modifies the Metacity theme XML file accordingly.

**Supported:** GNOME, MATE, Xfce · **Requires:** Node.js >= 20

## Install

```bash
git clone ...
cd window-border-updater
sudo npm link
```

## Usage

```bash
wbu -w 5        # set border width to 5px
wbu 5           # shorthand
wbu --status    # show current border values and theme file path
wbu --help
```

## Options

| Flag | Short | Description |
|---|---|---|
| `--width <px>` | `-w` | Border width in pixels (default: 10) |
| `--status` | `-s` | Show current border values and theme file path |
| `--help` | `-h` | Show help message |

A positional number is also accepted as width: `wbu 5`

## How it works

1. Detects the desktop environment via `$XDG_CURRENT_DESKTOP`
2. Reads the WM theme name from `gsettings`
3. Locates the Metacity XML file in:
   - `~/.local/share/themes/`
   - `~/.themes/`
   - `/usr/share/themes/`
4. Modifies `left_width`, `right_width`, `bottom_height` in `frame_geometry_normal`
5. Creates a `.save` backup on first run
6. Restarts the window manager

## License

ISC · Copyright (c) 2026, Stefano Cudini - opengeo.tech
