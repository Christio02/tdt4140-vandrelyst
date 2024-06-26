# Commands in git

Christian is horrible at remembering commands, so here is a list of commands that he uses often.

## Create a new local branch which tracks a remote branch

First, make sure that you are on the main branch.

- `git pull origin main`
To pull the latest changes from the main branch.

- `git checkout -b my-feature-branch origin/remote-branch-name`
This command creates a new branch from a remote branch. It is useful when you want to work on a feature that is not yet in your local repository. Insert the name of the remote branch in place of `remote-branch-name` and the name of your new local branch in place of `my-feature-branch`.

- `git branch --set-upstream-to=origin/remote-branch-name my-feature-branch`
To set the upstream branch for your local branch.

- `git push origin my-feature-branch`
To push your local branch to the specified remote branch.

- `git push origin --delete my-feature-branch`
To delete a remote branch.

## One time setup

- `git config push.default upstream`
Allows you to push to the upstream branch by default, even if the upstream
branch name is different from the local branch name.

- `git config --global fetch.prune true`
Removes references to remote branches that have been deleted.
Some people prefer to do this manually, but I like to keep my local repository clean.
If you have not done prune for a long time, `git remote show origin` will show you a large list of _stale_ branches that are no longer on the remote repository.

## Information about local and remote branches

- `git branch -a`
To list all branches, including remote branches.
- `git branch -vv`
To list all local branches, their upstream branches, and their status. Useful if you want to check that you have set the upstream branch for your local branch correctly.
- `git remote show origin`
To get detailed information about the remote repository. This includes the URL of the remote repository, the branches that are tracked, and the branches that are pushed to.

## Commit conventions

**feat** Commits, that adds or remove a new feature

**fix** Commits, that fixes a bug

**refactor** Commits, that rewrite/restructure your code, however does not change any API behaviour

**style** Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)

**test** Commits, that add missing tests or correcting existing tests

**docs** Commits, that affect documentation only

**build** Commits, that affect build components like build tool, ci pipeline, dependencies, project version

**chore** Miscellaneous commits e.g. modifying .gitignore
