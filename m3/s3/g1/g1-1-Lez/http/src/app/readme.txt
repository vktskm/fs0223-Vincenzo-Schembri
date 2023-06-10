

- Qui c'è un interceptor già pronto che fa un clone di ogni richiesta eggiungendo headers personalizzati (user.interceptor.ts)
- Nell'app module è stato importato L'HttpClientModule che abilità le funzionalità relative al client HTTP per fare chiamate ajax
- l'interceptor è già registrato tra i providers in app.module.ts
- Il service user.service.ts contiene tutti i metodi già pronti per fare una crud usando l'HttpClient di Angular
- app.component.ts utilizza un metodo del service, dimostrando a tutti gli effetti il corretto utilizzo di subscribe e degli observable
