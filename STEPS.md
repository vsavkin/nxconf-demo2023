## API

1. Break API
2. Convert to monorepo
3. Import API
4. `pnpm i @nx/node -D`
5. `nx g app api`
6. `rm -rf api/src`
7. `cp -r ../nxconf-demo2023-api/src api`
8. `pnpm i fastify fastify-plugins @fastify/sensible @fastify/autoload`
9. Update Transaction type

## Feature Testing

1. Create cypress: `nx g @nx/cypress:configuration --project=credit-card --devServerTarget=nxconf-demo2023:serve --verbose`
2. Write test
3. Run test: `nx e2e credit-card`

## MFE

1. Create Remotes for `tax-documents`, `credit-card`, `accounts-summary`: `nx g remote credit-card --directory src/app/credit-card`
2. Add `withModuleFederation` to `webpack.config.ts`

## Design System

1. `nx g lib --directory src/app/design-system/date`
2. `nx g setup-verdaccio`
3. `nx g storybook-configuration`

## CI

1. Author GHA + Workflows
