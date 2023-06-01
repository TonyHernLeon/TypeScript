# Notas
* _**EN GIT Proyecto** == Repositorio._
* _**EN GIT Rama** = Lugar donde estamos trabajando._
* _EN GIT LAS **CARPETAS VACÍAS** SE LAS PASA POR EL FORRO. (si quieres la carpeta **utilizamos .gitkeep**)_

# Comandos
> ## Fundamentales
> > * _**git help** -> Ayuda de git._
> > * _**git init** -> Inicia un repositorio. Se hace en el directorio que queramos añadir a git y se creará una carpeta .git oculta._
> > * _**git diff** -> Para ver cambios de un archivo con una comparación de contenido._
> > * _**git mv oldName newName** -> Para cambiar el nombre._
> > * _**git clone --single-branch --branch nombreBranch urlRepository** -> Nos descargará el código del branch que le indiquemos en concreto._
> > * _**git status** -> Muestra el estado del repositorio (proyecto) en el que estamos._
> > * _**git commit** -> Realiza el commit de los archivos del directorio que hayamos añadido._
> > * _**git reflog** -> Ver lo sucedido en orden cronológico._
> ## Configuración
> > * _**git config --global** -> Configuración global. Se pueden añadir más parametros para identificar al usuario._
> > * _**git config --global -e** -> Editor de configuración global de git._
> > * _**git config --global init.defaultBranch nombreRama** -> pone por defecto la rama que indicamos._
> > * _**git config --global alias.nombreAlias "comandoQueQuierasAñadir"** -> Para crear alias._
> ## Log
> > * _**git log** -> Log de git._
> > * _**git log --online** -> Otra forma de mostrar el log._
> > * _**git log --online --decorate --all --graph** -> Otra forma de mostrar el log._
> ## Add (Añadir a stage)
> > * _**git add archivoConExtension**-> Para "señalar" archivos a los que haremos commit (mandar al stage). Si se pone "." cogerá todos los archivos del directorio._
> > * _**git add '*'.ext** -> Añade todos los archivos de la misma extensión en la localización._
> > * _**git add loc/'*'.ext** -> Añade todos los archivos de la extensión en la localización indicada._
> > * _**git add loc/** -> Añade al stage todo lo que haya en la localización y lo que cuelgue de este._
> > * _**git status --short** -> Da info más resumida del estado._
> ## Branch (Ramas)
> > * _**git checkout -b nombreRamaNew** -> Se crea una nueva rama y se cambia a esta._
> > * _**git branch -m nombreRamaOld nombreRamaNew** -> Cambiar el nombre de la rama, se hace normalmente para cambiar master por main._
> > * _**git checkout nombreRama** -> cambia a la rama existente que le indicado._
> > * _**git branch -d nombreRama** -> Elimina rama existente._
> ## Commit
> > * _**git commit -am "Message".**_
> > * _**git commit -amend -m "Mensaje"** -> Para cambiar el mensaje de commit._
> ## Reset
> > * _**git reset --soft HEAD^** -> Para volver al commit antes del último commit._
> > * _**git reset --mixed numCommit** -> Sin borrar cambios de contenido desliga los archivos que se haya hecho hasta del número de commit en adelante._
> > * _**git reset --hard numCommit** -> Borra todos los cambios de contenido y desliga los archivos como con --mixed._

# Alias
### _Los alias mejoran la usabilidad de los comandos en Git, ya que puedes crear una llamada de un comando junto a algunos de sus flags. Estos son algunos ejemplos._

### Para borrar un alias deberemos utilizar el siguiente comando:
`git config --global --unset alias.nombreAlias`

## Log Performance - git lg
`git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all" `

## Status Performance V1.0 - git s
`git config --global alias.s 'status --short'`

## Status Performance V2.0 - git s
`git config --global alias.s 'status -sb'`
## Webs de alias
https://opensource.com/article/20/11/git-aliases
