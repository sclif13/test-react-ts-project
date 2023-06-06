# Ссылки
1. vite - https://habr.com/ru/companies/timeweb/articles/691338/
2. git - https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-%D0%9F%D0%BE%D0%B4%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8
3. git решение проблем - https://habr.com/ru/articles/579486/


# Проблемы с git submodule
1. можно зарыться с командами git
2. необходимо давать теги комитам в библиотеки вида v1.2.3

# Фичи
1. Можно переключать модуль через git checkout v0.0 на нужную версию


# Исследуем git submodule

## 1. Подключаем репозиторий test-react-lib в папку shared

```
  git submodule add https://github.com/sclif13/test-react-ts-lib shared
```

## 2. Удалить submodule shared

```
  git rm -r shared
```
Если заново надо будет подключить submodule, то потребуется ключ -f в команде
```
  git submodule add -f https://github.com/sclif13/test-react-ts-lib shared
```

## 3. Создал для удобства alias @shared

```
  import { StyledT } from '@shared/components/styled';
```

## 4. Как можно посмотреть какой сейчас версии стоит submodule

```
  # git submodule status
e73a186ed4cd00b23cc178271939084605f39cda src/shared (v0.0)

```

## 5. Обновление submodule

```
  git submodule update --remote
```