### Bundling the app (in Spring Boot containers with Webpack and React)

During this session I will show how to config, bundle and package application into Spring Boot containers. There will be three modules:

- parent
- front-end
- back-end

Front-end will be React app, which is built with Webpack. UI is a minimalistic yet nice list of items (such as payments) that come from back-end.

Back-end will be REST API, built on Spring. API endpoints serve as internal front-end as external ones. Config honors packaging for different environments (dev, prod, etc).

Thanks Justin for the base [material](http://justincalleja.com/2016/04/17/serving-a-webpack-bundle-in-spring-boot/). Languages: Javascript and Java.


### Additional material:

- Material UI for React: http://www.material-ui.com/
- Nordea API real: https://developer.nordeaopenbanking.com/app/documentation
- Nordea API example: https://github.com/markusl/nordea-api-demo
- 3 modules in Spring: https://stackoverflow.com/questions/4150180/how-to-make-one-module-depend-on-another-module-artifact
- Spring Boot: https://spring.io/guides/gs/spring-boot/