#!/bin/sh

apt update && apt install \
  apt-transport-https ca-certificates \
  curl aria2 \
  git meld colordiff \
  gimp flameshot peek \
  ncat nmap htop nload screen tmux \ 
  gnome-disks \
  saga spatialite-bin spatialite-gui 
