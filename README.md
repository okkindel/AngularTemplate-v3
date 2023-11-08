# Angular App Template

New version of app template for hackathons etc, created with the use of modern and sexy technologies.

## Features

- husky
- eslint
- translations
- theming
- angular material
- prettier
- docker via nginx
- toastr
- no tests
- strict null check
- roles
- jwt token
- breadcrumbs

# Code style guide:

- arrange the imports from the longest to the shortest, first
  single then multi-line
- there are repositories in the `api` directory, we do not call API directly from the components
- each endpoint must have a model mapping in the `api` directory
- each directory has an `index.ts` file, we do not import directly, but only via index
- do not do indirect imports (`/src/app`) only direct or after the `@` sign, declared in tsconfig
- follow commit style guide (below)
- use a pretier for formatting
- align multi-line parameters in the constructor to the first one (we are not listening to the prettier here :|)
- do not commit anything that causes eslint errors (`ng lint`), a husky will fire before each commit to check it

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build-prod` to build the project. The build artifacts will be stored in the `dist/` directory. You can also use the dockerfile provided in the project
