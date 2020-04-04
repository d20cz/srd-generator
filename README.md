# d20.cz Generator static SRD 

## Folder structure

Markdown source files for individual books

- ```Srd``` - Zde se dávají statická data SRD
- ```Gen``` - Zde se dávají data pro generované zborníky SRD
- ```build``` - vygenerované statické stránky v zipu 


## Technical

Powered by [VuePress](https://vuepress.vuejs.org/)

### Build static 

Je potřeba stáhnout aktuální md soubory a složky z Google Drive

```.env``` -  Odkomentovat generované srd SELECT_SRD a a nastavit DEV=0

```bash
docker-compose up
```

### Development

Je potřeba stáhnout aktuální md soubory a složky z Google Drive

```.env``` -  Odkomentovat generované srd SELECT_SRD a a nastavit DEV=1

```bash
docker-compose up
```