---
sidebar_position: 1
---

# Слой

Первый уровень разбиения приложения, согласно **скоупу влияния** модуля

![layers-flow-themed](/img/layers_flow.png)

## Структура {#structure}

```sh
└── src/
    ├── app/                    # Инициализирующая логика приложения
    ├── processes/              # (Опц.) Процессы приложения, протекающие над страницами
    ├── pages/                  # Страницы приложения
    ├── widgets/                # Самостоятельные и полноценные блоки для страниц
    ├── features/               # (Опц.) Обрабатываемые пользовательские сценарии
    ├── entities/               # (Опц.) Бизнес-сущности, которыми оперирует предметная область
    └── shared/                 # Переиспользуемые модули, без привязки к бизнес-логике
```

## Правила {#rules}

- Каждый слой располагается только на самом верхнем уровне, и не может встречаться еще раз на другом уровне вложенности

    ```diff
    // Плохо
    - pages/../features/..
    - features/../entities/..
    // Хорошо
    + pages/**
    + features/**
    ```

- Каждый слой может использовать (импортировать) только нижележащие слои
- Чем выше расположен слой, тем выше уровень его ответственности и знаний о других слоях (сверху-вниз)
  - `app` > (`processes`) > `pages` > (`widgets`) > `features` > `entities` > `shared`
- Чем ниже расположен слой - тем он больше используется в верхних слоях, а значит и тем больше опасности вносить в него изменения (снизу вверх)
  - `shared` > `entities` > `features` > (`widgets`) > `pages` > (`processes`) > `app`

<!-- use: https://www.tablesgenerator.com/markdown_tables# -->

| Layer     |                              Can use                              |                         Can be used by                         |
|-----------|:-----------------------------------------------------------------:|:--------------------------------------------------------------:|
| app       | `shared`, `entities`, `features`, `widgets`, `pages`, `processes` |                                -                               |
| processes |        `shared`, `entities`, `features`, `widgets`, `pages`       |                              `app`                             |
| pages     |            `shared`, `entities`, `features`, `widgets`            |                       `processes`, `app`                       |
| widgets   |                  `shared`, `entities`, `features`                 |                   `pages`, `processes`, `app`                  |
| features  |                        `shared`, `entities`                       |             `widgets`, `pages`, `processes`, `app`             |
| entities  |                              `shared`                             |       `features`, `widgets`, `pages`, `processes`, `app`       |
| shared    |                                 -                                 | `entities`, `features`, `widgets`, `pages`, `processes`, `app` |

## Как использовать? {#how-to-use}

1. **Сначала, выделить основные слои, актуальные для почти любого приложения:**
    - `app` - для инициализирующей логики приложения
    - `pages` - для экранов приложения
    - `shared` - для абстрактной общеиспользуемой логики (UIKIT / helpers / API)

2. **Затем, выделяйте остальные слои по мере необходимости:**
   - `widgets` - если логика на страницах начинает разрастаться и дублироваться
   - `entities` - если в проекте все равно разрастается количество деунифицированной логики
   - `features` - если в проекте становится сложно отследить начало и конец пользовательских сценариев, и контролировать их
   - `processes` - если же разрастается много надстраничной "сквозной логики"

## Типы слоев {#layers-types}

<!-- Оставил фразы в комментариях, на случай, если решим их вернуть -->

:::note

Стоит понимать, что не все из приведенных слоев обязательны, а нужны лишь, когда **этого требует сложность проекта и разбухающая ответственность** в существующей структуре

:::

### `app`

<!-- **Инициализирующая логика приложения** -->

![app-themed-bordered](/img/layers/app.png)

### `processes`

<!-- **Бизнес-процессы приложения, управляющие страницами** -->

![processes-themed-bordered](/img/layers/processes.png)

### `pages`

![pages-themed-bordered](/img/layers/pages.png)

### `widgets`

![widgets-themed-bordered](/img/layers/widgets.png)

### `features`

<!-- **Части функциональности приложения** -->

![features-themed-bordered](/img/layers/features.png)

### `entities`

<!-- **Бизнес-сущности** -->

![entities-themed-bordered](/img/layers/entities.png)

### `shared`

<!-- **Переиспользуемые модули, без привязки к бизнес-логике** -->

![shared-themed-bordered](/img/layers/shared.png)

## См. также {#see-also}

- [Адаптивность нейминга][refs-naming-adaptability]
- [Example: Viewer][refs-example-viewer]
  - *Пример распределения логики по слоям: от `shared` до `app`*
- [Про понимание потребностей пользователей и функциональность приложения][refs-needs]
  - *Для понимания слоя `features`*
- [(Дискуссия) Про переиспользуемые модули][disc-sharing]
  - *Для понимания слоя `shared`*

[refs-naming-adaptability]: /docs/about/understanding/naming
[refs-needs]: /docs/about/understanding/needs-driven

[refs-low-coupling]: /docs/reference/isolation/coupling-cohesion
[refs-example-viewer]: /docs/guides/examples/auth

[disc-sharing]: https://github.com/feature-sliced/documentation/discussions/14
