# Overview
Worked on Array methods:

### Map 5:5
- applies a function to every value in an array and returns a new array of the same size
### Filter 5:3
- uses comparison operators (==,<,>) as a way to return only specific values inside of a new array

### Reduce 5:1
- Takes an array of values and "reduces" those values down to a single value
- for instance if I have an array of `[1, 2, 3, 4, 5]` and I create a function call multiply and use it to reduce the down. It would do 1*2*3*4*5 and return a final value of `120`



## Git Practice

- When you are first creating a repo on your computer you will need to do `git init` this "initializes" your local repo.
- then, you want to connect your local repo with your remote (GitHub) repo, to do this you will use `git remote add origin`
- local(computer repo) ---> connects---> (Remote/Github)
- to check that they are connected you can use `git remote -v` and make sure it points to the remote repo address

#### Once your local and remote repos are linked you will only need the commands below:
- `git add .`
- `git commit -m "commit message"`
- `git push` ... if it is your first time push code to the remote (github) repo you will need to do `git push -u origin {{branch_name}}` if you don't you will get an error in your terminal and github will show you a command to use to push for the first time which is:
- ` git push --set-upstream origin {{branch_name}}`
