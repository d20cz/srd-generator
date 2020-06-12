#!/usr/bin/env sh

for m in $(find Source/srd.d20.cz/ -type f -name "*.md");
do
  echo $m;
  sed -i -e :a -re 's/<!--.*?-->//g;/<!--/N;//ba' $m;
done;

rm Source/srd.d20.cz/DnD5e/pruvodce-pana-jeskyne/7-kapitola.md
cat Source/srd.d20.cz/DnD5e/pruvodce-pana-jeskyne/7-kapitola-a.md  \
    Source/srd.d20.cz/DnD5e/pruvodce-pana-jeskyne/7-kapitola-b.md  \
    >> Source/srd.d20.cz/DnD5e/pruvodce-pana-jeskyne/7-kapitola.md

rm Source/srd.d20.cz/DnD5e/prirucka-hrace/3-kapitola.md
cat Source/srd.d20.cz/DnD5e/prirucka-hrace/3-kapitola-a.md  \
    Source/srd.d20.cz/DnD5e/prirucka-hrace/3-kapitola-b.md  \
    >> Source/srd.d20.cz/DnD5e/prirucka-hrace/3-kapitola.md

rm Source/srd.d20.cz/DnD5e/prirucka-hrace/11-kapitola.md
cat Source/srd.d20.cz/DnD5e/prirucka-hrace/11-kapitola-a.md  \
    Source/srd.d20.cz/DnD5e/prirucka-hrace/11-kapitola-b.md  \
    >> Source/srd.d20.cz/DnD5e/prirucka-hrace/11-kapitola.md


rsync -rv \
  --include="README.md" \
  --include="faq/***" \
  --exclude="*" \
  Source/srd.d20.cz/Index/ Srd/Index

rsync -rv \
  --include="README.md" \
  --include="fae/***" \
  --include="fate-core-system/***" \
  --include="fate-system-toolkit/***" \
  --include="fate-prevodni-prirucka/***" \
  --include="fate-star-wars/***" \
  --include="images/***" \
  --include="dfa/***" \
  --exclude="*" \
  Source/srd.d20.cz/Fate/ Srd/Fate

rsync -rv \
  --include="README.md" \
  --include="e2/***" \
  --exclude="*" \
  Source/srd.d20.cz/AW/ Srd/AW

rsync -rv \
  --include="README.md" \
  --include="prirucka-hrace/***" \
  --include="pruvodce-pana-jeskyne/***" \
  --include="bestiar/***" \
  --include="dobrodruhuv-pruvodce/***" \
  --include="xanathar/***" \
  --exclude="*" \
  Source/srd.d20.cz/DnD5e/ Srd/DnD5e

rsync -rv \
  --include="snippets/***" \
  --include="templates/***" \
  --exclude="*" \
  Source/srd.d20.cz/DnD5e/ Gen/DnD5e

rm -rf \
  Srd/DnD5e/pruvodce-pana-jeskyne/7-kapitola-a.md \
  Srd/DnD5e/pruvodce-pana-jeskyne/7-kapitola-b.md \
  Srd/DnD5e/prirucka-hrace/3-kapitola-a.md \
  Srd/DnD5e/prirucka-hrace/3-kapitola-b.md \
  Srd/DnD5e/prirucka-hrace/11-kapitola-a.md \
  Srd/DnD5e/prirucka-hrace/11-kapitola-b.md