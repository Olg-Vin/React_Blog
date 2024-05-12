# package.json:

## dependencies 
    react - основа приложения и поставщик вспомогательных функций 
    react-dom - для работы с dom (document object model) - тип дерево элементов на страницке
    react-scripts - сборщик проекта (как spring boot)

## eslintConfig
    Служит для наблюдения за стилем кода - линтер

# package-lock.json:
    Сборник зависимостей (их ссылки в интернете), обновлять надо при каждом изменении package.json
    при помощи команды  npm i (install), в свою очередь npm ci генерит node_modules по pl