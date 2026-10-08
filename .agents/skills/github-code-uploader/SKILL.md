---
name: github-code-uploader
description: Sube el código del espacio de trabajo local a un repositorio en GitHub, inicializando Git si es necesario, creando el repositorio remoto si no existe y subiendo los archivos.
---

# Subidor de Código a GitHub (GitHub Code Uploader)

Esta skill permite al agente automatizar el proceso de subir el código local del espacio de trabajo actual a un repositorio remoto de GitHub.

## Cuándo usar esta skill
Úsala cuando el usuario te pida subir su código actual a GitHub, crear un nuevo repositorio en GitHub para el proyecto actual, o sincronizar sus cambios locales con un repositorio remoto existente.

## Instrucciones de Ejecución

### 1. Comprobaciones Previas
- Identifica el directorio del proyecto local (el workspace actual).
- Verifica si Git está inicializado en la carpeta local buscando la carpeta `.git` o ejecutando `git status`.
- Pregunta al usuario o deduce:
  - Nombre del repositorio en GitHub.
  - Si el repositorio debe ser público o privado.
  - El usuario u organización propietario de la cuenta de GitHub.
  - La rama de destino (por defecto `main`).

### 2. Creación del Repositorio Remoto (Si no existe)
Si el repositorio remoto no existe aún en GitHub:
- Utiliza la herramienta `create_repository` del servidor MCP de GitHub (`github-mcp-server`) para crearlo en la cuenta del usuario.
- Configura el nombre y la visibilidad (público/privado) según las preferencias del usuario.

### 3. Inicialización y Preparación Local (Si es necesario)
Si el repositorio local no está inicializado con Git:
- Ejecuta `git init` en el directorio raíz del espacio de trabajo.
- Crea un archivo `.gitignore` adecuado para el lenguaje de programación del proyecto si no existe (por ejemplo, omitiendo `node_modules/`, `.env`, archivos de compilación, etc.).
- Agrega todos los archivos con `git add .`.
- Haz el primer commit ejecutando `git commit -m "Initial commit"` (o el mensaje que indique el usuario).

### 4. Vinculación y Subida (Push)
- Renombra la rama principal a `main` si es necesario (`git branch -M main`).
- Vincula el repositorio remoto:
  - Obtén la URL del repositorio remoto recién creado o el proporcionado por el usuario (ej. `https://github.com/usuario/repositorio.git`).
  - Agrégalo como remoto ejecutando `git remote add origin <URL>`. Si ya existe un remoto `origin`, puedes actualizarlo con `git remote set-url origin <URL>`.
- Sube los archivos ejecutando `git push -u origin main`. Si el comando requiere autenticación, recuerda al usuario que debe configurar sus credenciales locales o el token.

## Lista de verificación / Checklist
- [ ] ¿Existe un archivo `.gitignore` que prevenga la subida de carpetas pesadas (como `node_modules`) o credenciales secretas (como archivos `.env`)?
- [ ] ¿Se ha comprobado el estado de Git en local?
- [ ] ¿El repositorio remoto fue creado exitosamente o ya existía?
- [ ] ¿Los comandos de Git se ejecutaron en el directorio de trabajo correcto (`Cwd`)?
- [ ] ¿Se realizó el `git push` a la rama correcta?
