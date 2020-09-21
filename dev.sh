#!/usr/bin/env sh

echo "\n"
echo "d20.cz SRD generator (dev)"
echo "generuji: $SELECT_SRD"
echo "\n"

#yarn install
#yarn upgrade

# ./clearSrdData.sh
# ./sourceRsync.sh

if [ "$SELECT_SRD" = "DnD5e" ]; then \
  yarn srd:gen grimoar-jmen;
  yarn srd:gen grimoar-moci;
  yarn srd:gen grimoar-skol;
  yarn srd:gen soupis;
fi;

vuepress dev Srd/$SELECT_SRD --host 0.0.0.0
