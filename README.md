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

```.env``` -  Odkomentovat generované srd SELECT_SRD

```bash
docker-compose up build
```

### Development

Je potřeba stáhnout aktuální md soubory a složky z Google Drive

```.env``` -  Odkomentovat generované srd SELECT_SRD

```bash
docker-compose up server
```

#### Příklady spouštění dalších jednorázových skriptů

```bash
docker-compose run --rm u_yarn install
docker-compose run --rm u_yarn upgrade
docker-compose run --rm u_yarn srd:clearData
docker-compose run --rm u_yarn srd:sourceRsync
```