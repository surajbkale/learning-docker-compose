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
