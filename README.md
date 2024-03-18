# Run backend
- Install Java 17
- In terminal:
  1. `cd backend`
  2. `cd <project>`
  3. `./mvnw clean install`
  4. `./mvnw spring-boot:run`

# Run frontend
1. `cd frontend`
2. `yarn install && yarn run dev`

# Run database
Install docker app
- `brew install docker --cask`
- Create account if you don't have an account (Free)
Install docker-compose
- `brew install docker-compose`
In root of both projects (frontend & backend)
- In terminal:
    1. `docker-compose up`
    2. Got to **http://localhost:9000** 
    3. PgAdmin: Username: _root@root.com_, Password: _root_
