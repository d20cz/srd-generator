#!/usr/bin/env sh

echo "d20.cz SRD generator (build)"

if [ "$SELECT_SRD" = "DnD5e" ]; then \
  yarn srd:gen grimoar-jmen;
  yarn srd:gen grimoar-moci;
  yarn srd:gen grimoar-skol;
  yarn srd:gen soupis;
fi;

vuepress build Srd/$SELECT_SRD;

rm /var/www/html/build/$SELECT_SRD-$DEPLOY_VERSION.zip
cd build;
mkdir public

SRD_DEPLOY_DATE=$(date +"%d. %m. %Y")
cp -r /var/www/html/Srd/$SELECT_SRD/.vuepress/dist/* /var/www/html/build/public
find ./ -type f -exec sed -i -e "s/##SRD_DEPLOY_VERSION##/$DEPLOY_VERSION/g" {} \;
find ./ -type f -exec sed -i -e "s/##SRD_DEPLOY_DATE##/$SRD_DEPLOY_DATE/g" {} \;
zip -r /var/www/html/build/$SELECT_SRD-$DEPLOY_VERSION.zip public/*;
rm -rf /var/www/html/build/public