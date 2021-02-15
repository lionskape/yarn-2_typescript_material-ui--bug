# Yarn 2 TS type inferring bug

Here is a reproducible example of the bug.

### Expected result:
onChange event inferred correctly (App.tsx, lines 6, 9, 18).
No errors, when compiled in strict mode. Same behaviour as using Yarn V1 and npm

### Actual result:
onChange event has `any` type
```
src/App.tsx:9:51 - error TS7006: Parameter 'event' implicitly has an 'any' type.
src/App.tsx:18:20 - error TS7006: Parameter 'event' implicitly has an 'any' type.
```

### Reproducing steps:
*NOT: Do not forget to start with a clean repo between experiments (error may not be reproduced on a dirty copy).*
1. Clone repo
2. `npm install -g yarn`
3. `yarn set version berry`
4. `yarn`
5. `yarn build`

## NOTE: Yarn V1 works properly, npm works properly
