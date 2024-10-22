FROM node:latest

RUN apt-get update

COPY tools/script.sh /usr/local/bin/script.sh

COPY tools/app /home/app

RUN chmod +x /usr/local/bin/script.sh

CMD ./usr/local/bin/script.sh