#!/usr/bin/env bash

# Load aliases:
# $ . .bash_aliases

alias php="docker-compose exec php php"
alias composer="docker-compose exec php composer"
alias symfony="docker-compose exec php php bin/console"

echo -e '\033[1;42mAPI aliases loaded\033[0m'
