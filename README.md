# Full-Stack-System-To-Register-Service

## 1 General Information

### Technologies' versions used

Node's version: 18.14

NPM's version: 9.5.1

Java's version: 17.0.6

Original source: [Página para Cadastro de Serviços - Spring Boot e React](https://www.youtube.com/watch?v=Sun4wXH88V4)

##  Description

Development of a page to register services with ReactJS (frontend) and Spring Boot (backend).

# 2 Setting up the environment

If the installed Java is not a LTS (Long Term Support) version, change to one out of the LTS ones: 8, 11 or 17.

**Note**: There are various Java available to be downloaded, such as the [Oracle JDK](https://www.oracle.com/java/technologies/downloads) and the [Amazon Corretto OpenJDK](https://aws.amazon.com/pt/corretto/?filtered-posts.sort-by=item.additionalFields.createdDate&filtered-posts.sort-order=desc). 

**Note**: It's important having the newest LTS version of [Node](https://nodejs.org/en/) on the PC.

# 3 Creating the project

**Initial settings**<br>
a. Open the CMD<br>
a. Type `mkdir Full-Stack-System-To-Register-Service`<br>
b. Type `cd Full-Stack-System-To-Register-Service`<br>
**Note**: Every operation after the steps bellow must happen inside the `Full-Stack-System-To-Register-Service` folder

**Backend**<br>
a. To create the backend, use the [spring initializer](https://start.spring.io)<br>
b. Set the initial settings<br>
c.  In the dependencies, pick:<br>
c.1 `Lombok`<br>
c.2 `Spring Boot DevTools`<br>
c.3 `Spring Web`<br>
c.4 `Spring Data JPA`<br>
c.5 `H2 Database`<br>
d. Generate the backend

**To create the front end**<br>
a. Open the CMD<br>
b. Type `npm create vite frontend -- --template react`<br>
c. Type `cd frontend`<br>
d. Type `npm install`


# 4 Running the project

To run the project wholly, open two CMDs.

On the 1st CMD, type `cd frontend`, then `npm run dev`.

On the 2nd CMD, type `cd backend`, then `./mvnw clean spring-boot:run`.

Both need be running at the same time.
