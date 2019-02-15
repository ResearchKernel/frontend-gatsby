# Contribution Guidelines 

## Branches Introduction

We follow a simple pattern for collaborating with multiple developers, that makes us easy to manage our codebase. Please find the description of branches below. 


| Branch Name | Description |
| ------ | ------ |
|  **master** | Production branch [Never ever ever ever commit directly to this branch]. |
| **staging** | Staging branch [For testing production code before pushing to production]. |
| **develop** | Development branch [ Recent development changes]. |
| **patches** | Small patches for any branch.  |
| **tasks** | Branches for Collaborators to work on.  |

## Maintainers

#### Responsibilites
 - Ensure any install or build dependencies are removed before the end of the layer when doing a build.
 - Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.
 - Delete patches branch after merging.
 - Delete task brached after accepting PR.
 - Maintainers are responsible for Integration testing.
 - Conflicts resolving in develop, staging, and master. 

#### Do's and Don'ts
 - New task branch creation and assigning to the collaborators.
 - Accept PR only after testing and reviewing the code.
 - Do not commit changes direcly on any parent branch.
 - Do not accept PR without any unit tests.

# Collaborators

#### Responsibilites
 - Clone Repository on your local machine, and do changes in your assigned branch only.
 - Once the task is completed pull request on **develop branch** only, any pull request on Master or Staging will not be accepted.
 - Request PR review to repsitory's mantianer. If you don't do that, that will not be reviwed and merged to parent branch.

#### Do's and Don'ts
 - Follow coding styles.
 - Check if your changed are consistent with the coding styles before PR.
 - Run unit test before PR.
# Outside Conrtibutors

We are not open for Outside collaborators yet, please connect on Tusharmudagal3@gmail.com if you are interested in a particular task.
