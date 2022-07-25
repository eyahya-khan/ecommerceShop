# Project setup for .net webapi with database
## 1. DB connection
* Step-1
- To activate Docker container (You need a docker.compose.yml)
- inside of project folder where docker.compose.yml, write the following code.
```bash
docker-compose up -d
```
* Step-2 
- Open Azure data studio
- Create a new connection
- Fill with the following data:
    Connection Type: Microsoft SQL Server
    Server = localhost,1433
    Auth type = SQL login
    user = sa
    Password = Password_2_Change_4_Real_Cases_&
    rest things :) = Default

## 2. WebApi  and WebApi.Test installation & setup
- Create a folder
 ```bash 
    mkdir shop24seven
    cd shop24seven 
 ```

- Create a solution
check sdk version 
```bash 
 dotnet --list-sdks
 ````

 ```bash 
dotnet new globaljson --sdk-version 6.0.201
dotnet new webapi -o shop24sevenApi
 ```
- Go to web folder
```bash 
    cd shop24sevenApi 
 ```
- Add Entity Framework
```bash 
   dotnet add package Microsoft.EntityFrameworkCore.Design
   dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
   dotnet add package Microsoft.EntityFrameworkCore.SqlServer
 ```
Check if this packages were added in the shop24sevenApi.csproj file. if not, add them manually, and run 
```bash 
    dotnet restore 
 ```
- Create Model file - shop24sevenApi/Models/Products.cs

- Create Context file - shop24sevenApi/Data/ProductsContext.cs
      (here DbSet<Modelname> Table name)

- Create SeedData (if any) - shop24sevenApi/Data/SeedData.cs 

- Add connecting string to appsettings.json
```bash 
  "ConnectionStrings": {
    "ProductsContext": "Server=azuredemosrv.database.windows.net;Database=azuredemo;User Id=eyahya-khan;password=kbaree123BD111"
  }
```
- Add DbContext and SeedData (if any) file to program.cs 
```bash
    builder.Services.AddDbContext<ProductsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProductsContext")));
```
- Add SeedData (if any) to program.cs after - var app = builder.Build();
```bash
using (var scope = app.Services.CreateScope())
{
  var services = scope.ServiceProvider;
  SeedData.Initialize(services);
}
```
- open MS SQL Server Management Studio from local pc
```bash
Server=azuredemosrv.database.windows.net;
Database=azuredemo;
User Id=eyahya-khan;
password=kbaree123BD111
```

- Migration means create database and table with code first approach
```bash
dotnet ef migrations add AddDatabaseAndTable
```
after then
```bash
dotnet ef database update
```
if you want to add any props or table or modify anything you need to run always above two line of code

If you want to remove migration
```bash
dotnet ef migrations remove
```
- Create controller to controll Db.


## 3. React Frontend connection
- Create react app inside shop24seven folder
```bash
    npx create-react-app shop24sevenclient
    cd shop24sevenclient
```
- For backend connection go to efCdCollection.Api/Program.cs and add COORS policy after - app.UseSwaggerUI();
```bash
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));
```

- npm i react-router-dom >>>> npm i styled-components
- npm install react-bootstrap bootstrap --save   >>>> import 'bootstrap/dist/css/bootstrap.min.css'; in index.js
- npm i react-custom-scrollbars-2
- npm i react-icons
- add in index.html for icon >>>>>>    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
      integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />





