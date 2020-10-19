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
| git clone https://github.com/gitvsnwallet/devfrontend.git    | clone project      |
| cd devfrontend    |  (project directory)      |
| npm run build   |  (build command)      |
| ls   | (dist -- main directory )     |
| apt-get install nginx   | install nginx web server     |
| change nginx settings   | props file (/etc/nginx/sites-enabled/default)    |
| service nginx start   | start nginx web server     |


## Nginx config file (path /etc/nginx/sites-enabled/default)
```
upstream backserver{
        server 209.188.21.146:8080;
}

server {
	listen 80;
  listen 443;

	root   /var/lib/jenkins/workspace/VSN-FE/dist;

	index index.html index.htm index.nginx-debian.html;

	server_name wallet.vision-network.io;

        
    location / {
                  index   index.html index.htm;
                  try_files $uri $uri/ /index.html;
                  proxy_redirect              off;
                  proxy_set_header Host               $host;
                  proxy_set_header X-Real-IP          $remote_addr;
                  proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
                  proxy_set_header X-Forwarded-Proto  $scheme;
                  proxy_ssl_server_name      on;
    }


	location /api {
        rewrite                         /api/(.*)/$1 break;
        proxy_pass                      http://backserver;
        proxy_connect_timeout           300;
        proxy_send_timeout              300;
        proxy_read_timeout              300;
        send_timeout                    300;

        proxy_set_header                Upgrade $http_upgrade;
        proxy_set_header                Connection "Upgrade";
        proxy_set_header                Host $http_host;
        proxy_set_header                X-Real-IP $remote_addr;
        proxy_set_header                X-Forwared-For $proxy_add_x_forwarded_for;
        proxy_set_header                Access-Control-Allow-Origin *;
        proxy_set_header                X-Frame-Options "ALLOWALL";
        proxy_pass_request_headers on;
        proxy_set_header charset "UTF-8";
        charset utf-8;
        source_charset utf-8;
    }
}
```
