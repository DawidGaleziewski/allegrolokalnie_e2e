## goal of the project
practice test automation on:
https://allegrolokalnie.pl

## To run project
1. Install packages
npm install

2. Run tests
npx playwright test


# git commands
## start new feature branch
1. Make sure you are on master
git branch

2. Pull remote changes remotely to make sure you ar eup to date
git pull

3. Create a new branch and checkout to it
git checkout -b my-branch-name

## add new commit
1. Check what files changed
git status

2. Add files you want to a commit
git add tests/file_that_changed.spec.ts

3. Check once again if all was added to commit and if there are any more files you would like in new commit
git status

4. Create new commit with changes you added
git commit -m 'description of what commit does i.e add new tests'

5. Push changes to remote branch [if this is first time you are pushing this, git will show command how to setup new upstream for this branch]
git push


# How to debug tests
tldr:
to run test in debug:
1. right click next to a line number when a red dot appears on hover and selec "Add breakpoint"
2. right click next to a test green arrow and select "debug test"

make sure you have vs code + this installed:
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

full instruction:
https://playwright.dev/docs/debug



## how to run cypress:
use this command it will guide you further:
```bash
npm run cypress:open
```