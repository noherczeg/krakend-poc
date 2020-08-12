#!/bin/sh

mkdir certs
openssl req -x509 -newkey rsa:2048 -keyout ./certs/krakend-server.key -out ./certs/krakend-server.cert -nodes -days 365 -subj '/CN=localhost'

chmod 755 ./certs/krakend-server.key
chmod 755 ./certs/krakend-server.cert

#openssl dhparam -out ./certs/dhparam.pem 1024
