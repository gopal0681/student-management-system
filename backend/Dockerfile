# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app
COPY . .

# Build Spring Boot jar
RUN mvn clean package -DskipTests

# ---------- Run Stage ----------
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy jar
COPY --from=builder /app/target/projects-0.0.1-SNAPSHOT.jar app.jar

# Expose default port (Render will override with $PORT)
EXPOSE 8080

# Pass Render environment variables to Spring Boot at runtime
ENTRYPOINT ["sh", "-c", "java \
  -Dserver.port=$PORT \
  -Dserver.address=0.0.0.0 \
  -Dspring.datasource.url=$SPRING_DATASOURCE_URL \
  -Dspring.datasource.username=$SPRING_DATASOURCE_USERNAME \
  -Dspring.datasource.password=$SPRING_DATASOURCE_PASSWORD \
  -jar app.jar"]