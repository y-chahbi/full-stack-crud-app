FROM debian:bullseye

RUN apt-get update
RUN apt-get install -y nodejs npm

COPY tools/script.sh /usr/local/bin/script.sh
RUN chmod +x /usr/local/bin/script.sh

CMD ./usr/local/bin/script.sh