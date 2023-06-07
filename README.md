# Ссылки
1. vite - https://habr.com/ru/companies/timeweb/articles/691338/
2. git - https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-%D0%9F%D0%BE%D0%B4%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8
3. git решение проблем - https://habr.com/ru/articles/579486/
4. git subtree - https://www.atlassian.com/ru/git/tutorials/git-subtree
5. git subtree - https://gist.github.com/innerlee/18d32b283b91abe92bdc266b1be961e3


# Проблемы с git shared
1. можно зарыться с командами git
2. В отличии от submodule файлы сразу копируются в проект. Есть проблемы с импортом файлов, возможны конфликты между настройками. Вынес shared из src через команду ```git mv src/shared shared``` и попатчил eslintrc чтобы он резолвил импорты.
3. нельзя обновить subtree если есть незакоммиченные изменения.

# Исследуем git subtree

## 1. Подключаем репозиторий test-react-lib в папку shared

```
  git subtree add --prefix src/shared https://github.com/sclif13/test-react-ts-lib v0.1 --squash
```
- prefix - директория куда подключаем
- v0.1 - ссылка на тег или ветку
- --squash Обычно в главном репозитории не хранят полную историю подпроекта, но если вы захотите ее оставить, то просто не используйте флаг --squash

## 2. Удалить subtree shared

```
  git rm -rf src/shared
```

## 3. Создал для удобства alias @shared

```
  import { StyledT } from '@shared/components/styled';
```

## 4. Как можно посмотреть какой сейчас версии стоит subtree
неизвестно
