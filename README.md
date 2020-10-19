# fe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Install and run webserver (nginx)

| Command | Text |
| :---         |     ---:      |  
| git clone https://github.com/devfrontend/devfrontend.git    | clone project      |
| cd devfrontend    |  (project directory)      |
| npm run build   |  (build command)      |
| cd ./target   | (dist -- main directory )     |
| apt-get install nginx   | install nginx web server     |
| change nginx settings   | props file (/etc/nginx/sites-enabled/default)    |
| service nginx start   | start nginx web server     |

