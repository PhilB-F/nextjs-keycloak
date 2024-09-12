# nextjs-keycloak

Next.js Keycloak Demo

## Run Next.js (dev mode) in VSCode Powershell Integrated Terminal

open a new terminal

```
cd .\nextjs-keycloak\
npm install
npm run dev
```

#### Log in with test user

[http://localhost:3000](http://localhost:3000)

 - username=Testu
 - password=password

## Run Keycloak (dev mode) in VSCode Powershell Integrated Terminal

open a new terminal

```
.\keycloak-25.0.4\keycloak-25.0.4\bin\kc.bat start-dev --verbose --http-port=8181 --http-management-port=8282
```

#### Login to Keycloak Admin

[Admin app]( http://localhost:8181/)

 - username = keycloak-admin 
 - password = keycl0@k


