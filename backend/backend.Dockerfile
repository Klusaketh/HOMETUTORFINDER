# ---------------------
# Stage 1: Build JAR
# ---------------------
FROM eclipse-temurin:21-jdk AS builder

WORKDIR /app

COPY mvnw .
COPY .mvn/ .mvn
COPY pom.xml .
COPY src ./src

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests spring-boot:repackage

# ---------------------
# Stage 2: Run JAR
# ---------------------
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 1202

ENTRYPOINT ["java", "-Dserver.port=1202", "-jar", "app.jar"]
