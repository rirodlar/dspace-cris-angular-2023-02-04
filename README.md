[![Build Status](https://github.com/DSpace/dspace-angular/workflows/Build/badge.svg?branch=main)](https://github.com/4Science/dspace-angular/actions?query=workflow%3ABuild) [![Coverage Status](https://codecov.io/gh/DSpace/dspace-angular/branch/main/graph/badge.svg)](https://codecov.io/gh/4Science/dspace-angular) [![Universal Angular](https://img.shields.io/badge/universal-angular2-brightgreen.svg?style=flat)](https://github.com/angular/universal)

Dspace-Angular (USACH())
==============

> The DSpace-CRIS 7 User Interface built on [Angular](https://angular.io/), written in [TypeScript](https://www.typescriptlang.org/) and using [Angular Universal](https://angular.io/guide/universal).

This project is an extension of the DSpace 7 UI. For more information on the DSpace 7 release see the [DSpace 7.0 Release Status wiki page](https://wiki.lyrasis.org/display/DSPACE/DSpace+Release+7.0+Status)

You can find additional information on the DSpace 7 Angular UI on the [wiki](https://wiki.lyrasis.org/display/DSPACE/DSpace+7+-+Angular+UI+Development).


Quick start
-----------

**Ensure you're running [Node](https://nodejs.org) `v16.x` or `v18.x`, [npm](https://www.npmjs.com/) >= `v5.x` and [yarn](https://yarnpkg.com) == `v1.x`**

## Local 
```bash
git clone https://github.com/unidaddatosestadisticasistemas/dspacecris_front.git

cd dspace-angular

yarn install

# start the server (dev)
yarn start:dev

http://localhost:4000/
```

## Remote

```bash
cd /home/usuarioadm/dspace/dspace-cris-angular
sudo git pull
yarn build:prod
sudo cp -R dist /opt/dspacecris7-ui-deploy/
sudo systemctl restart tomcat9.service
```