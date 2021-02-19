## Transfered
https://github.com/stealify/graalvm-nodejs-interop/blob/main/README.md


# node-graalvm
Node.JS on GraalVM

This project enables Node.js to use GraalVM and its Higperformance JavaScript engine via C Bindings to GraalVM. This project is still work in progress and not an officially supported Node.js branch. For more context into this project, please refer to the original PR.

It Also includes a NodeJS Compatible GraalJS Runtime Implementation Its goal is To Replace NodeJS with a more performant Solution for Services and Command Line scripting. NodeJS Was a good Project but it can Physical never reach the Performance of a Meta-circular evaluator stack like GraalVM offers it. The Development
of Nativ Integrations is also much more fast in Java Most Times and there is still nothing stoping us from calling c if needed.

# How it works?
A rebuild of node and native addon modules with truffle-js via GraalVM by Oracle Labs.

# Installing prebuilt.

## With npm already installed on the system
npm i -g 



# Installing vertx Distribution ES4x
```sh
# install
yarn global add es4x-pm # OR npm install -g es4x-pm

# create a project file
es4x init

# create a hello world
cat << EOF
vertx.createHttpServer()
  .requestHandler(req => req.response().end('Hello ES4X world!'))
  .listen(8080);
EOF > index.js

# install dependencies (npm and maven)
yarn # OR npm install

# run it
yarn start # OR npm start
```

# Build

## linux

## macos

## Windows


## References
https://github.com/joeferner/node-java
this project is the succesor of the stealify/node-java fork
