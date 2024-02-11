# Commands in git

Christian is horrible at remembering commands, so here is a list of commands that he uses often.

- `git checkout -b my-feature-branch origin/remote-branch-name`
This command creates a new branch from a remote branch. It is useful when you want to work on a feature that is not yet in your local repository. Insert the name of the remote branch in place of `remote-branch-name` and the name of your new local branch in place of `my-feature-branch`.

- `git pull origin main`
To pull the latest changes from the main branch.

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
