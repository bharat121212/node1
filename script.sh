cd ~/project/node1
git reset --hard
git pull origin development
docker-compose build --no-cache
docker-compose down
docker-compose up -d
