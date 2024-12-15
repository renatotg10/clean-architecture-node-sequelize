@echo off

:: Criar a estrutura de diretórios
mkdir frontend
mkdir frontend\public
mkdir frontend\src
mkdir frontend\src\components
mkdir frontend\src\pages

:: Criar arquivos dentro da pasta public
echo <!-- index.html --> > frontend\public\index.html

:: Criar arquivos dentro da pasta src\components
echo // Navbar.js > frontend\src\components\Navbar.js
echo // UserForm.js > frontend\src\components\UserForm.js
echo // UserTable.js > frontend\src\components\UserTable.js

:: Criar arquivos dentro da pasta src\pages
echo // AddUser.js > frontend\src\pages\AddUser.js
echo // EditUser.js > frontend\src\pages\EditUser.js
echo // Home.js > frontend\src\pages\Home.js

:: Criar arquivos principais na pasta src
echo // App.js > frontend\src\App.js
echo // api.js > frontend\src\api.js
echo // index.css > frontend\src\index.css
echo // index.js > frontend\src\index.js

echo Estrutura criada com sucesso!
