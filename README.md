# Electron-cpp-threejs-sample
An example code that demos the electron app and calling C++ node addons

# Build && Run

1. cd addon
2. npm install
3. ./node_modules/.bin/node-gyp rebuild --debug --target=1.7.10 --arch=x64 --dist-url=https://atom.io/download/electron
4. cd ./../electron-app
5. npm install
6. ./node_modules/.bin/electron .

# Reference
https://nodejs.org/docs/latest/api/addons.html  
https://electronjs.org/docs/tutorial/quick-start
