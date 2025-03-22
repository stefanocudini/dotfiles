#!/bin/sh

apt update && apt install \
  apt-transport-https ca-certificates \
  curl aria2 pv nano \
  git meld colordiff \
  gimp vlc v4l-utils flameshot peek light-themes \
  ncat nmap htop nload secure-delete shred screen tmux tree \ 
  gnome-disks cryptsetup \
  saga spatialite-bin spatialite-gui 
