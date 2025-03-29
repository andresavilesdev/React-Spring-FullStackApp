# Product Manager

## Description
Product Manager is a Full Stack CRUD application where users can create, update, delete, and view products through a table. The interface design is made with pure CSS.

## Technologies Used
- **Frontend:** React with Vite, pure CSS
- **Backend:** Spring Boot
- **Database:** MySQL (local, with a future possibility of containerization)

## Installation and Execution

### 1. Clone the Repository
```bash
git clone https://github.com/andresavilesdev/React-Spring-FullStackApp
cd React-Spring-FullStackApp
```

### 2. Backend Configuration (Spring Boot)
1. Make sure MySQL is installed and running.
2. Configure the `application.properties` file in `src/main/resources/` with your MySQL username and password:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/database_name?createDatabaseIfNotExist=true
   spring.datasource.username=YOUR_USERNAME
   spring.datasource.password=YOUR_PASSWORD
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### 3. Frontend Configuration (React)
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Run the project in development mode:
   ```bash
   npm run dev
   ```

## API Endpoints

- **Get products:** `GET /products`
- **Create product:** `POST /products`
- **Update product:** `PUT /products/{id}`
- **Delete product:** `DELETE /products/{id}`

## Project Structure

```
product-manager/
│── backend-products/ (Spring Boot)
│── frontend-products/ (React)
│   ├── src/
│   │   ├── components/  # Reusable components
|   |      ├── ProductsApp.jsx  # Application rendering
│   │   ├── services/    # File for handling API requests
│   │   ├── Main.jsx       # Main entry point   
│   ├── public/
│   ├── package.json
```

## Future Improvements
- Containerize the database for easier configuration.
- Enhance the interface using a styling library like Material UI or Tailwind.
- Implement form validations.
