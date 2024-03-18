# Adding packages to package lock

## Table of Contents 📚

- [Adding packages to package lock](#adding-packages-to-package-lock)
  - [Table of Contents 📚](#table-of-contents-)
  - [Add a new font to the project 🔤](#add-a-new-font-to-the-project-)

## Add a new font to the project 🔤

I wanted to add the FontAwesome regular star to the project, but the import failed.
Tried to write this: import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

But it failed. I had to add something to the package lock file. The following command was needed:

```bash
npm install --save @fortawesome/free-regular-svg-icons
```

After this was done, package lock got updated, and the import worked.
