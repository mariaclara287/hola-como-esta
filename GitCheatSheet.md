# Git Cheat Sheet

## Comandos Básicos de Git

### Inicializar un repositorio
```bash
git init
```

### Clonar un repositorio
```bash
git clone <url-del-repositorio>
```

### Ver el estado del repositorio
```bash
git status
```

### Agregar archivos al staging area
```bash
git add <archivo>
git add .  # Agregar todos los archivos
```

### Hacer un commit
```bash
git commit -m "Mensaje del commit"
```

### Ver el historial de commits
```bash
git log
```

### Crear una rama
```bash
git branch <nombre-de-la-rama>
```

### Cambiar a una rama
```bash
git checkout <nombre-de-la-rama>
```

### Fusionar ramas
```bash
git merge <nombre-de-la-rama>
```

### Subir cambios a un repositorio remoto
```bash
git push origin <nombre-de-la-rama>
```

### Descargar cambios del repositorio remoto
```bash
git pull origin <nombre-de-la-rama>
```

### Ver diferencias
```bash
git diff
```

### Deshacer cambios
```bash
git reset --hard HEAD  # Deshacer todos los cambios no commiteados
git revert <hash-del-commit>  # Revertir un commit específico
```

## Recursos Adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Git Cheat Sheet en español](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)