# XYZ Business Operations Data Platform

Business operations data platform for managing employees, departments, customers, vendors, products, applications, interviews, sales, and reporting workflows.

This project began as a relational database system and is being rebuilt into a portfolio project focused on backend engineering, cloud deployment, and structured business data management.

---

## Project Overview

XYZ Company manufactures products using vendor-supplied parts and operates across multiple departments and marketing sites. This system is designed to manage and expose operational business data across core functions such as staffing, hiring, sales, vendor sourcing, and product composition.

The platform currently includes a MySQL relational database, a Node.js and Express backend, and a browser-based query interface. The long-term direction is to move this project toward a cloud deployment model using AWS services for application hosting, database management, and file storage.

### Current Scope
- Employee records and supervisor relationships
- Department assignment history
- Job postings, applications, interviews, and interview outcomes
- Product composition, vendor parts, and pricing data
- Sales tracking by customer and marketing site
- SQL views and query workflows for reporting and analysis

### Project Direction
- Local development with MySQL and Express
- Cloud deployment path defined in `docs/architecture.md`
- Planned migration toward AWS RDS, EC2, and S3

---

## Architecture

See `docs/architecture.md` for the cloud deployment direction and system design.

---

## Technology Stack

### Current
- Frontend: HTML, Bootstrap 5, JavaScript
- Backend: Node.js, Express
- Database: MySQL
- Data generation: Jupyter Notebook

### Cloud Target
- Application hosting: AWS EC2
- Managed database: AWS RDS for MySQL
- File storage: AWS S3

---

## Local Setup

### Prerequisites
- MySQL Server
- Node.js and npm

### Installation

    git clone https://github.com/AndreSanabria/XYZ-cloud-platform.git
    cd XYZ-cloud-platform
    npm install

### Database Setup
1. Open `XYZ.sql` in MySQL Workbench or MySQL CLI.
2. Execute the script to create the schema, tables, and constraints.
3. Optionally use `DataGenerator.ipynb` to generate or populate sample data.

### Run the Application

    node server.js

Then open `http://localhost:3000`

---

## Features

### Browser-Based Query Interface
- Run preset SQL queries from the web interface
- Modify existing queries or enter custom queries manually
- View results in a structured table format

### Reporting and Analysis
- SQL views for recurring business insight queries
- Query support for staffing, sales, interview, and vendor analysis
- Relational design intended to support realistic operational workflows

### Data Modeling
- Normalized relational schema
- Foreign key constraints across major business entities
- Support for structured relationships such as supervisor chains, applications, interviews, and vendor part sourcing

---

## Example Business Queries

- Find employees who do not supervise anyone
- Identify top-performing product categories
- Retrieve selected interviewees and their contact information
- Compare vendor pricing for required parts
- Analyze salary and sales-related records

---

## Demo

![Demo of SQL Console](screenshots/demo.gif)

---

## Repository Contents

- `XYZ.sql` — full database schema and constraints
- `server.js` — Express backend
- `public/` — browser-based client interface
- `DataGenerator.ipynb` — sample data generation notebook
- `docs/` — diagrams, schema artifacts, and architecture notes
- `screenshots/demo.gif` — application demo

---

## Documentation

The `docs/` folder includes database design and supporting materials such as:
- ER and EER diagrams
- relational schema diagrams
- dependency documentation
- query and view reference material
- architecture planning for cloud migration

---

## Project Status

### Current State
This project currently runs as a local full-stack application using Node.js, Express, and MySQL.

### Next Direction
This project is being reworked into a stronger backend and cloud portfolio project by:
- improving project structure and documentation
- defining cloud architecture
- preparing for deployment to AWS
- repositioning the system as a business operations data platform instead of a course-only submission

---

## Notes

- The relational model is designed around normalized business entities
- Supervisor self-reference is disallowed in the schema design
- The system models multiple business domains in a single relational platform
- Cloud deployment is a planned next-stage implementation, not a completed production deployment yet

---

## Contact

**Andre Sanabria**  
[Andre.E.Sanabria.G@gmail.com](mailto:Andre.E.Sanabria.G@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/andre-san06)
