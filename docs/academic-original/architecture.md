# Architecture

## Goal
Turn this project into a cloud-hosted business operations platform instead of just a local database course project.

## Core Components
- Frontend: static client in `public/`
- Backend: Node.js and Express in `server.js`
- Database: MySQL
- Cloud database target: AWS RDS for MySQL
- Cloud file storage target: AWS S3
- Cloud hosting target: AWS EC2

## Request Flow
Browser -> Express server -> MySQL database

## Storage Flow
Application exports or source files -> AWS S3

## Deployment Direction
The app will first continue working locally.
Then the local MySQL database will be replaced with AWS RDS, and the Node.js backend will be deployed to AWS EC2.

## Why this matters
This file defines the cloud version of the project before deployment work starts.
