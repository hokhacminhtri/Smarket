# SMARKET

### System to go to the market and support online essential purchases in the context of the covid epidemic

1. This project using for Information System Development subject

## Views using NodeJS

1. Configuration

- Framework: **ExpressJS**
- View engine: **PUG**

2. Launch

- Install module:
  `cd Views_NodeJS`
  `npm install`
- Start server with dev mode:
  `npm run dev`
- Start server:
  `npm start`

## API using .NET Core Framwork

1. Configuration

- .NET Core Framework 2.1
- Entity Framework Core 2.1.14 (Nuget Microsoft.EntiryFrameworkCore)
- Entity Framwork Core with SQL Server 2.1.14 (Nuget Microsoft.EntityFrameworkCore.SqlServer)
- Entity Framework Core Tool 2.1.14 (Nuget Microsoft.EntityFrameworkCore.Tools)
- DotNetEnv Package
- Visual Studio 2017

2. Launch

- Using file .env:
  `dotnet add package DotNetEnv`
  ```
  DotNetEnv.Env.Load();
  var username = Environment.GetEnvironmentVariable("USERNAME");
  var password = Environment.GetEnvironmentVariable("PASSWORD");
  ```
- Using Bcrypt
  `dotnet add package BCrypt.Net-Next`
  ```
  string PasswordHashed = BCrypt.Net.BCrypt.HashPassword("Pa$$w0rd", SaltRounds);
  bool verified = BCrypt.Net.BCrypt.Verify("Pa$$w0rd", PasswordHashed);
  ```

## API using Java Spring Boot

1. Configuration

- JAVA 17
- Java Spring Boot 4
- Eclipse 2021/9

2. Launch

- Open eclipse set /API_JAVASpringBoot is workspace
- Do: import project --> Maven --> Existing Maven Projects --> choose browser folder: API_JAVA --> Finish
- Access this link to know obvious : [ A way to import project to eclipse workspace](https://qaautomation.expert/2019/10/07/maven-how-to-import-maven-project-into-eclipse/)

## Database

1. Configuration

- Using Microsoft SQL Server Developer
- Using SQL Server Authentication for connection between backend and database

2. Launch

- Create database Smarket
- Excute file CreateTable.sql & ForeignKey.sql
- Editing file .env in folder DOTNET is suitable for each one include username, password

## Project images

<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result01.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result02.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result03.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result04.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result05.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result06.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result07.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result08.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result09.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result10.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result11.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result12.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result13.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result14.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result15.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result16.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result17.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result18.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result19.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result20.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result21.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result22.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result23.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result24.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result25.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result26.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result27.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result28.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result29.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result30.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result31.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result32.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result33.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result34.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result35.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result36.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result37.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result38.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result39.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result40.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658722428/Smarket/Github-README/result41.jpg" /></div>
