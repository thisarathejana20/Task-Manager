FROM openjdk:23-jdk

WORKDIR /app

COPY Backend/task/target/**.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]