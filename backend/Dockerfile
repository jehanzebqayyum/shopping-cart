FROM openjdk:latest
VOLUME /tmp
ADD target/shopping-cart-backend-1.0.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
