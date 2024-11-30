@echo off

:: Criar a estrutura de diretórios
mkdir config
mkdir src\app\routes
mkdir src\app
mkdir src\config
mkdir src\domain\entities
mkdir src\infrastructure\models
mkdir src\infrastructure\repositories
mkdir src\usecases

:: Criar arquivos dentro das pastas
echo // config.js > config\config.js
echo // userRoutes.mjs > src\app\routes\userRoutes.mjs
echo // server.mjs > src\app\server.mjs
echo // database.mjs > src\config\database.mjs
echo // user.mjs > src\domain\entities\user.mjs
echo // user.mjs > src\infrastructure\models\user.mjs
echo // userRepository.mjs > src\infrastructure\repositories\userRepository.mjs
echo // userUseCase.mjs > src\usecases\userUseCase.mjs
echo // index.mjs > src\index.mjs

echo Estrutura criada com sucesso!