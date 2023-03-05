# 1 General Information

## Version's technologies used

Node's version: 18.14

NPM's version: 9.5.1

Java's version: 17.0.6

Original source: [Página para Cadastro de Serviços - Spring Boot e React](https://www.youtube.com/watch?v=Sun4wXH88V4)

##  Description

Development of a page to register services with ReactJS (frontend) and Spring Boot (backend).

# 2 Setting up the environment

If the installed Java is not a LTS (Long Term Support) version, change to one out of the LTS ones: 8, 11 or 17.

There are various Java available to be downloaded, such as the [Oracle JDK](https://www.oracle.com/java/technologies/downloads) and the [Amazon Corretto OpenJDK](https://aws.amazon.com/pt/corretto/?filtered-posts.sort-by=item.additionalFields.createdDate&filtered-posts.sort-order=desc). 

It's important having the newest LTS version of [Node](https://nodejs.org/en/) on the PC, because every new update brings more security to the Node.

# 3 Creating the project

1 Initial settings
  a Type ``mkdir Full-Stack-System-To-Register-Service``<br>
  b Type ``cd Full-Stack-System-To-Register-Service``<br>

2 To create the backend, use the [spring initializer](https://start.spring.io)<br>
  a Set the initial settings<br>
  b In the dependencies, pick:<br>
    1 ``Lombok``<br>
    2 ``Spring Boot DevTools``<br>
    3 ``Spring Web``<br>
    4 ``Spring Data JPA``<br>
    5 ``H2 Database``<br>
  c Generate the backend

3  

# 4 Running the project

To run the project wholly, open two CMDs.

On the 1st CMD, type ``cd frontend``, then ``npm run dev``.

On the 2nd CMD, type ``cd backend``, then ``./mvnw clean spring-boot:run``.

Both need be running at the same time.
