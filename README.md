## Manual Installation
 - Install nodejs locally ()
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - or
    - Go to neon.tech and your db credentials
 - Change the .env file and update the credentials
 
 - RUN
   - npx prisma migrate dev
   - npx prisma generate
   - npx run build
   - npx run start


## Docker Installation
 - Create a network `docker network create node_app_network`
 - Install Docker 
 - Start the Postgres - `docker run --network node_app_network --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
 - Build the image - `docker build --network=host -t user-project .`
 - Start the image - `docker run --network node_app_network -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 user-project`


## Docker Compose Installation
 - Install Docker, Docker-compose
 - RUN `docker-compose up`
