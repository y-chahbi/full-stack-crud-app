FROM debian:bullseye

RUN apt-get update && apt-get install -y mariadb-server

COPY conf/50-server.cnf /etc/mysql/mariadb.conf.d/50-server.cnf
COPY tools/script.sh /usr/local/bin/script.sh
COPY tools/init.sql /usr/local/bin/init.sql
RUN chmod +x /usr/local/bin/script.sh

CMD ./usr/local/bin/script.sh