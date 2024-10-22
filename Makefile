all:
	sudo docker-compose -f srcs/docker-compose.yml up --build

init:
	sudo mkdir -p /home/ychahbi/data/MD
	sudo mkdir -p /home/ychahbi/data/NJ
	sudo docker-compose -f srcs/docker-compose.yml up --build

kill: $(clear)
	sudo docker-compose -f srcs/docker-compose.yml down
	sudo rm -rf /home/ychahbi/data


run:
	sudo docker-compose -f srcs/docker-compose.yml down
	sudo docker-compose -f srcs/docker-compose.yml up --build

end:
	sudo docker-compose -f srcs/docker-compose.yml down

clear: end
	sudo docker system prune -a