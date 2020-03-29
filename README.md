# npm-template

The **npm-template** provides instructions, preset configuration files for typescript, babel, and jest, and build tools to simplify the development of a typescript node module suitable for publishing to [npm](https://www.npmjs.com/).

## Usage
Perform the following steps to use this template to create your own npm package.

1. Copy the contents of this folder to your new project's folder and open the folder in vs code.  The files can be obtained from [github](https://github.com/samfreeman/sam-npm-template.git).
2. In *package.json*:
  a. change **name**
  b. change **description**
  c. change **keywords**
  d. change **repository.url**
  e. remove the **repository** section - you'll recreate that below
3. From the terminal, run `yarn install`
4. Create git repository:
  a. from [github](https://github.com/), create a new repository and get the address -- the `<url>`
  b. run `git init`
  c. run `git remote add origin <url>`
  d. run `git pull origin master`
  e. run `git push --set-upstream origin master`
5. Modify the **README.md** file (this file)
6. Add code files and tests to the `src` folder.
7. Make sure `src/main.ts` exports any elements your package supplies.
6. Publish your package to npm
  a. run `yarn build` -- make sure it succeeds
  b. run `yarn test` -- make sure all tests pass
  c. run `yarn cover` -- make sure all code is covered
  d. run `yarn publish` and follow the steps
