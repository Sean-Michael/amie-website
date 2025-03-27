# Artist Portfolio TODO

## Setup Phase

- [x] Initialize project with `npm init`
- [x] Install express, handlebars, mongoose, dotenv
- [x] Install tailwindcss, postcss, autoprefixer, nodemon
- [x] Create Dockerfile and docker-compose.yml
- [x] Set up folder structure: src, routes, models, views, public

## Backend Setup

- [x] Create Express server in `app.js`
- [x] Connect to MongoDB using Mongoose
- [x] Load environment variables with dotenv
- [x] Create `Artwork` model
- [x] Create route files: `index.js`, `bio.js`, `works.js`

## Frontend & Templating

- [x] Configure Handlebars with layout system
- [x] Set up TailwindCSS in public styles
- [x] Create views:
  - [ ] `index.hbs` (home)
  - [ ] `bio.hbs`
  - [ ] `collections.hbs` (groupings of works)
  - [ ] `gallery.hbs` (grid of artwork)
  - [ ] `work.hbs` (single piece view)

## Dockerization

- [x] Write `Dockerfile` to containerize app
- [x] Set up `docker-compose.yml` to run app + MongoDB
- [x] Test `docker compose up` works

## Content

- [ ] Populate MongoDB with sample artworks
- [ ] Upload some artwork images to S3 or local public dir
- [ ] Add copy for bio and thesis sections

## Future Features

- [ ] Add form to add new artwork (admin only)
- [ ] Add image upload to S3 (or locally)
- [ ] Add search by tag or medium
- [ ] Add gallery filtering by year or medium
- [ ] Admin panel to feature artworks, manage collections, etc.

---