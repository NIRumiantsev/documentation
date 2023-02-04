---
sidebar_position: 2
---

# Сегмент

Третий уровень разбиения приложения, согласно **назначению модуля в коде и реализации**

```sh
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-логика (components, ui-widgets, ...)
    |   ├── model/                  # Бизнес-логика (store, actions, effects, reducers, ...)
    |   ├── lib/                    # Инфраструктурная логика (utils/helpers)
    |   ├── config/                 # Конфигурация приложения (env-vars, ...)
    |   └── api/                    # Логика запросов к API (api instances, requests, ...)
```

## Общие правила {#general-rules}

Каждый из приведенных сегментов, представляет привычные нам уровни абстракций, при разработке ПО.

Каждый из сегментов отвечает за свою область, но при этом все вместе - **они формируют единый образ данного слайса и его логики**, а конкретно:

- его визуальное отображение (ui)
- его бизнес-логику (model)
- его вспомогательные модули (lib)

Также, в редких случаях, затрагивая:

- его конфигурацию (config)
- его логику работы с API-запросами (api)

:::tip

**Каждый сегмент может быть как файлом, так и директорией** - в зависимости от сложности реализуемого слайса

Т.е. вполне допустимы и такие варианты:

```sh
features/wallet/add-funds
    ├── ui.tsx
    ├── model.ts
    └── index.ts
```

```sh
pages/home/
    ├── index.tsx
    └── style.module.scss
```

:::

## `ui`

**UI-представление модуля**

Может содержать внутри:

- Компоненты вашего UI-фреймворка (React, Vue, Angular, ...)
- Canvas-виджеты
- *(любые другие модули ui-представления)*

### Примеры {#examples}

#### Комплексный UI для слоя {#complex-ui-for-the-layer}

```sh
{layer}/{slice}/
    ├── ui/
    |   ├── toolbar/
    |   |     ├── title/
    |   |     └── actions/
    |   ├── content/
    |   |     ├── sort/
    |   |     └── table/
    |   ├── index.tsx
    |   └── styles.module.scss
```

```tsx title={layer}/{slice}/ui/index.tsx
import { Layout } from "shared/ui";
import Toolbar from "./toolbar";
import Content from "./content";
import styles from "./styles.module.scss";

export const SomeForm = () => (
    <Layout className={styles.root}>
      <Toolbar className={styles.toolbar} />  
      <Content className={styles.content} />
    </Layout>
);
```

## `model`

**Бизнес-логика модуля**

Может содержать:

- Логику создания и обновления мини-стора под этот слайс
  - *В мире effector: `createStore` + `createDomain`*
  - *В мире redux: `createSlice`*
- Список событий, обрабатываемых моделью родительского слайса, и обновляющих его состояние
  - *В мире effector: `events`*
  - *В мире redux: `actions` + `dispatch`*
- Список асинхронных сайд-эффектов, для подгрузки данных и прочих асинхронных операций
  - *В мире effector: `effects`*
  - *В мире redux: `thunks` / `sagas` / `epics`*
- Список селекторов/контрактов/хуков для использования состояния слайса
  - *В мире effector: `useStore`, ...*
  - *В мире redux: `useSelector`, `selectors`*

## `lib`

**Вспомогательные библиотеки**

Обычно содержит набор утилит, помогающих написанию логики и распределенных по группам, т.е. отдельным библиотекам.

## `api`

**Логика взаимодействия с API**

Обычно содержит

- инстансы для работы с разными внешними API
- методы / фабрики для вызова конкретных эндпоинтов

*В редких случаях (react-query / graphql) сами запросы могут лежать рядом с местом использования*

- *Но чаще всего [рекомендуется][disc-api] располагать API-сегмент в `shared`-слое, чтобы снизить количество переплетений логики*

При этом, данный сегмент может как писаться вручную, так и генерироваться с помощью схемы API

- *Например с помощью `openapi-generator`, `swagger-codegen`*

### Примеры {#examples}

```ts title=**/**/api/user.ts
export class UserApi {
    constructor(config) {...}
    getList(params: GetListParams): Promise<User[]> {...}
    ...
}
```

```ts title=**/**/model/thunks.ts
import { userApi } from "shared/api"

// Создание инстансов API может происходить
// как на месте использования, так и в самом API-сегменте
//
// const userApi = new UserApi();

export const getUserListThunk = createAsyncThunk("...", (params) => {
    return userApi.getList(params);
});
```

## `config`

**Модуль конфигурации приложения и его окружения**

Обычно содержит конфигурацию приложения и методы, для работы с ним

### Примеры {#examples}

#### Использование переменных окружения {#using-environment-variables}

*Реализация зависит от проекта и команды, здесь приведен лишь один из вариантов*

```ts title=shared/config/index.ts
export const isDevEnv = NODE_ENV === "development";
export const OAUTH_TOKEN = getEnvVar("REACT_APP_OAUTH_TOKEN");
```

```tsx title=**/**/index.tsx
import { OAUTH_TOKEN, isDevEnv } from "shared/config";

export const OAuthProvider = () => (
    <OAuth
        debug={isDevEnv}
        token={OAUTH_TOKEN}
        ...
    />
)
```

## См. также {#see-also}

> `WIP:` Со временем будут появляться статьи по каждой абстракции

- [Адаптивность нейминга][refs-naming-adaptability]
- [(Обсуждение) Где должен лежать API][disc-api]

[refs-naming-adaptability]: /docs/about/understanding/naming

[disc-api]: https://github.com/feature-sliced/documentation/discussions/66
