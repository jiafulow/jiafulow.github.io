---
title: 'Docker for Local Development: It''s Not as Scary as You Think'
description: 'A practical guide to using Docker for local development without the overwhelming complexity. Just the parts you actually need.'
pubDate: 'Aug 30 2025'
category: 'DevOps'
tags: ['docker', 'devops', 'tools', 'development', 'tutorial']
---

Docker has a reputation for being complicated. It's not. Well, it *can* be, but for local development you only need like 10% of its features. Let's learn just that 10%.

## Why Docker for Local Dev?

**The problem:**
- "Works on my machine" syndrome
- Complex setup instructions
- Conflicting versions of tools
- Different OS behaviors

**The solution:**
- Consistent environment for everyone
- One command to start everything
- No polluting your local machine
- Easy to reset/rebuild

## The Basics You Need

### Docker Concepts (Simplified)

**Image:** The blueprint (like a class)
**Container:** A running instance (like an object)
**Dockerfile:** Instructions to build an image
**docker-compose.yml:** Config for multiple containers

That's it. That's all you need to know to start.

## Your First Dockerfile

Let's say you have a Node.js app:

```dockerfile
# Start from Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
```

**Build it:**
```bash
docker build -t my-app .
```

**Run it:**
```bash
docker run -p 3000:3000 my-app
```

Your app is now running in a container!

## Docker Compose: The Real MVP

For most projects, you need multiple services (app, database, cache). Docker Compose handles this:

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - postgres-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres-data:
```

**Start everything:**
```bash
docker-compose up
```

Boom. App, database, and Redis all running with one command.

## The Commands I Use Daily

```bash
# Start services
docker-compose up          # Run in foreground
docker-compose up -d       # Run in background

# Stop services
docker-compose down        # Stop and remove containers
docker-compose down -v     # Also remove volumes (fresh start)

# View logs
docker-compose logs        # All services
docker-compose logs app    # Specific service
docker-compose logs -f     # Follow logs

# Run commands in container
docker-compose exec app npm install
docker-compose exec db psql -U user mydb

# Rebuild after changes
docker-compose build
docker-compose up --build  # Build and start
```

That's 90% of what I use.

## Hot Reload / File Watching

Mount your code as a volume:

```yaml
services:
  app:
    volumes:
      - .:/app                  # Mount current directory
      - /app/node_modules       # Don't mount node_modules
```

Now changes to your code instantly reflect in the container!

## Environment Variables

**Option 1: In docker-compose.yml**
```yaml
environment:
  - NODE_ENV=development
  - API_KEY=secret123
```

**Option 2: .env file**
```env
NODE_ENV=development
API_KEY=secret123
```

```yaml
env_file:
  - .env
```

Docker Compose automatically reads `.env` files.

## Common Patterns

### Pattern 1: Database Migrations

```yaml
services:
  migrate:
    build: .
    command: npm run migrate
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
```

Run with:
```bash
docker-compose run migrate
```

### Pattern 2: Multiple Environments

**docker-compose.override.yml** (auto-loaded):
```yaml
# Development overrides
services:
  app:
    build:
      target: development
    volumes:
      - .:/app
```

**docker-compose.prod.yml**:
```yaml
# Production config
services:
  app:
    build:
      target: production
    restart: always
```

Use with:
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

### Pattern 3: Running Tests

```yaml
services:
  test:
    build: .
    command: npm test
    environment:
      - NODE_ENV=test
    depends_on:
      - db
```

```bash
docker-compose run test
```

## Debugging Inside Containers

**Method 1: Shell access**
```bash
docker-compose exec app sh
# Now you're inside the container
```

**Method 2: VS Code Remote Container**

Install "Remote - Containers" extension, then attach to running container. Full debugging support!

## Common Issues & Solutions

### Issue: "Port already in use"

Something's running on that port locally.

```bash
# Find and kill it
lsof -ti:3000 | xargs kill

# Or change the port in docker-compose.yml
ports:
  - "3001:3000"  # Map to different local port
```

### Issue: "Changes not reflecting"

Check your volumes are mounted correctly and your app watches for changes.

For Node:
```json
"scripts": {
  "start": "nodemon app.js"  // Use nodemon
}
```

### Issue: "Container keeps restarting"

Check logs:
```bash
docker-compose logs app
```

Usually it's a missing environment variable or failed database connection.

### Issue: "Out of disk space"

Docker accumulates images and volumes. Clean up:

```bash
docker system prune -a      # Remove everything unused
docker volume prune         # Remove unused volumes
```

## Multi-Stage Builds (Bonus)

Make your production images smaller:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]
```

Development uses the full builder stage, production only copies the built files.

## My .dockerignore

```
node_modules
npm-debug.log
.git
.env
.DS_Store
dist
coverage
```

Like `.gitignore` but for Docker. Keeps images small and builds fast.

## When NOT to Use Docker

- Simple scripts that don't need dependencies
- Projects with a single language and no external services
- When the setup is already simple

Don't Docker-ize everything just because you can.

## Tools I Use

- **Lazydocker** - TUI for managing containers
- **Docker Desktop** - GUI for Mac/Windows
- **VS Code Remote Containers** - Develop inside containers

## Conclusion

Docker isn't magic, and you don't need to understand everything to use it effectively. Start simple:

1. Write a Dockerfile
2. Create a docker-compose.yml
3. Run `docker-compose up`

The rest you'll learn as you need it.

Now go containerize something! 🐳
