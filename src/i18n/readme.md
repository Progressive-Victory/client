# Localization

This folder contains an implementations of [Project Fluent](https://github.com/projectfluent/fluent.js)

## How to use

Creat the i18n object
```ts
import i18n from '@progressive-victory/client';
const localize = new i18n();
```
Then add Locales to the object
```ts
import {Locale} from 'discord.js'
async () => {
  // Optional add gobal vaules across locals 
  await localize.setGlobalResource('./Path/Global.ftl')
  

  await localize.setLocale(./Path/en-US, Locale.EnglishUS)
}
```
### Translation
Import localize from where it was created. To trasnlate there are to options:

First Full Translation

```ts
localize.t('key', 'bundlename', Locale.EnglishUS, options)
```

Staged Translation
```ts
const tLocale = localize.getLocale(Locale.EnglishUS)
tLocale.t('key', 'bundlename', options)
```
the option peramiter is for [Variables](https://projectfluent.org/fluent/guide/variables.html)

#### Debugging

If you see the following error:

```bash
  [cause]: [
    ReferenceError: Unknown variable: $channel
        at resolveVariableReference (/d/bots/crm-bot/node_modules/@fluent/bundle/index.js:213:31)
        at resolveExpression (/d/bots/crm-bot/node_modules/@fluent/bundle/index.js:181:24)
        at resolveComplexPattern (/d/bots/crm-bot/node_modules/@fluent/bundle/index.js:349:25)
        at FluentBundle.formatPattern (/d/bots/crm-bot/node_modules/@fluent/bundle/index.js:702:29)
        at i18n.t (/d/bots/crm-bot/dist/i18n/i18n.js:104:28)
        at t (/d/bots/crm-bot/dist/i18n/index.js:32:17)
        at renameOrganizing (/d/bots/crm-bot/dist/structures/helpers.js:264:41)
        at Event.onReady [as execute] (/d/bots/crm-bot/dist/events/ready.js:43:49)
        at ExtendedClient.<anonymous> (/d/bots/crm-bot/dist/Client/Client.js:170:56)
        at Object.onceWrapper (node:events:640:26)
  ]
```

Then you are missing `args` in your translation function.
In this case, the solution would be:

```ts
t({
    key: 'vc-rename-error',
    locale: channel.guild.preferredLocale,
    ns: 'lead',
    args: { channel: channel.name } // Add this object
})
```
