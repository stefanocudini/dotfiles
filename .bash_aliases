
alias ls='ls --color=auto -X'
#alias dir='dir --color=auto'
#alias vdir='vdir --color=auto'
alias tailf='tail -f'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias ll='ls -lhFrt'
alias la='ls -A'
alias l='ls -CF'
alias netstat='netstat -lntpa'
alias pkill='pkill -9'
alias aria2c='aria2c -x 16'
#alias qrshow='curl qrcode.show/"$1"'
alias dmesgf='tail -f /var/log/syslog'
alias df='df -h -x"squashfs"'
#alias docker-compose='docker compose'
#alias qr='qrencode -o- | display -'
alias gpgp='gpg'
alias it='setxkbmap it'
alias en='setxkbmap gb'
alias gitauthor='git log --all | grep Auth | sort -u'
alias xclip='xclip -sel clip'
alias kubestat='kubectl get pods --all-namespaces -w'
alias kube_router_port_forward='kubectl --namespace fleet-mng port-forward pods/router-0 8080:8080'
alias kube_router_logs='kubectl -n fleet-mng logs -f router-0'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

alias kubestat='kubectl get pods --all-namespaces -w'

function trim() {
  sed -e 's/^[[:space:]]*//'
}
