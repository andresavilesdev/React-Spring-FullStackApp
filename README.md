# Product Manager

## Descripción
Product Manager es una aplicación Full Stack CRUD donde se pueden crear, actualizar, eliminar y ver productos a través de una tabla. El diseño de la interfaz está hecho con CSS puro.

## Tecnologías utilizadas
- **Frontend:** React con Vite, CSS puro
- **Backend:** Spring Boot
- **Base de datos:** MySQL (local, con posibilidad de dockerización en el futuro)

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd product-manager
```

### 2. Configuración del Backend (Spring Boot)
1. Asegúrate de tener MySQL instalado y en ejecución.
2. Configura el archivo `application.properties` en `src/main/resources/` con tu usuario y contraseña de MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/nombre_basedatos
   spring.datasource.username=TU_USUARIO
   spring.datasource.password=TU_CONTRASEÑA
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   ```
3. Ejecuta la aplicación de Spring Boot:
   ```bash
   mvn spring-boot:run
   ```

### 3. Configuración del Frontend (React)
1. Instala las dependencias:
   ```bash
   cd frontend
   npm install
   ```
2. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

## API Endpoints

- **Obtener productos:** `GET /products`
- **Crear producto:** `POST /products`
- **Actualizar producto:** `PUT /products/{id}`
- **Eliminar producto:** `DELETE /products/{id}`

## Estructura del Proyecto

```
product-manager/
│── backend/ (Spring Boot)
│── frontend/ (React)
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── services/    # Archivo para manejar peticiones API
│   │   ├── App.js       # Punto de entrada principal
│   │   ├── index.js     # Renderizado de la aplicación
│   ├── public/
│   ├── package.json
```

## Próximas mejoras
- Dockerizar la base de datos para facilitar la configuración.
- Mejorar la interfaz con alguna librería de estilos como Material UI o Tailwind.
- Implementar validaciones en los formularios.

## Contribuciones
Si deseas contribuir, por favor, abre un issue o envía un pull request con tus mejoras.

## Licencia
Este proyecto está bajo la licencia MIT.

