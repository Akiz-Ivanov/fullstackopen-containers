# Full Stack Open — Part 12: Containers
 
Exercises and solutions for [Part 12](https://fullstackopen.com/en/part12) of the [Full Stack Open](https://fullstackopen.com) course, covering Docker, Docker Compose, and nginx.

## Exercises 22–23: My containerized dev/prod environment
 
Per the exercise instructions, exercises 22 and 23 ask for a containerized dev and production environment of one of my own full-stack apps.
 
I used my Bloglist app (originally built in Part 4, extended through Parts 5–7, and containerized here on top of its existing Part 11 CI/CD setup):
 
🔗 [fullstackopen-bloglist-cicd](https://github.com/Akiz-Ivanov/fullstackopen-bloglist-cicd)
 
That repo includes:
- `dev.Dockerfile` / `Dockerfile` for both frontend and backend
- `docker-compose.dev.yml` / `docker-compose.yml`
- `nginx.dev.conf` / `nginx.conf`
- A scoped MongoDB user set up via an init script
- A seed script for local test data
 
## Structure
 
```
└── todo-app/
    ├── todo-frontend/      # React + Vite todo app
    │   ├── dev.Dockerfile
    │   └── Dockerfile
    ├── todo-backend/       # Express.js REST API
    │   ├── mongo/           # Mongo image + init script
    │   ├── dev.Dockerfile
    │   └── Dockerfile
    ├── todo-tests/         # Playwright end-to-end (smoke) tests
    ├── nginx.dev.conf
    ├── nginx.conf
    ├── docker-compose.dev.yml
    └── docker-compose.yml
```
 
## Topics covered
 
- Containers vs. virtual machines
- Multi-stage Docker builds
- Docker Compose for multi-service orchestration (frontend, backend, MongoDB, Redis)
- nginx as a reverse proxy in front of a containerized stack
- Separating development environments (hot reload, bind mounts) from production environments (immutable builds, no exposed internal ports)
- End-to-end smoke testing against a containerized stack in CI

## Running the todo app
 
### Development
 
```
cd todo-app
docker compose -f docker-compose.dev.yml up --build
```
 
App: [http://localhost:8080](http://localhost:8080)
 
### Production
 
```
cd todo-app
docker compose -f docker-compose.yml up --build
```
 
App: [http://localhost:8080](http://localhost:8080)

## Related
 
- [fullstackopen](https://github.com/Akiz-Ivanov/fullstackopen) — main course repo
- [fullstackopen-cicd](https://github.com/Akiz-Ivanov/fullstackopen-cicd) — Part 11-12 exercise set