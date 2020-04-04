#!/usr/bin/env sh

if [ "$SELECT_SRD" = "DnD5e" ]; then \
  yarn srd:gen grimoar-jmen;
  yarn srd:gen grimoar-moci;
  yarn srd:gen grimoar-skol;
  yarn srd:gen soupis;
fi;

vuepress build Srd/$SELECT_SRD;

NOW=$(date +"%Y-%m-%d-%H-%M")
rm /var/www/html/build/$SELECT_SRD-$NOW.zip
cd Srd/$SELECT_SRD/.vuepress/dist;
zip -r /var/www/html/build/$SELECT_SRD-$NOW.zip *;
