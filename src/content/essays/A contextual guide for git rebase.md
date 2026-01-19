---
layout: notes
title: A contextual guide for git rebase
date: 2025-09-10
updated: 2025-12-16
description: Contextual examples for easy git collab
type: Essay
category: Budding
---
Git has been the single most important tool I have learned to use in the past 7 years as a software developer. When working in a team with multiple developers contributing to a single codebase, probable git rebase has been the most useful command I have learned to use.

When do I use rebase?
- When I have create a new branch, let's say 2 weeks ago, but the base branch has had more commits during that time and my branch is no longer aligned with the base branch. Sometimes this include conflicts.
- When someone has run git push --force over a branch I have locally.

Let's explore the different scenarios.

## 1. My branch is old and base branch has newer commits

Let's imagine the following scenario:
I have the base branch called ``develop`` where all my colleagues make merges when they finish implemented a new feature. Now, imagine that I got the request to implement a new feature on file ``index.ts``. When we see the list of commits, we see the following thing.

```sh
> git checkout develop
> git lg
234567 (origin/develop) changes-develop-2 (5 days ago) <greta>
345678 changes-develop-1 (4 days ago) <greta>
```

The current state of develop has 2 commits only. In which both were made by the user greta.
Now, I will create a new branch and start working on this. That would mean that both branches will have the same commits.

```sh
> git checkout -b feature/awesome-feature-1 # This creates a new branch.
> git lg # We see that the list of commits is the same.
234567 (origin/develop) changes-develop-2 (5 days ago) <greta>
345678 changes-develop-1 (6 days ago) <greta>
```

On this list, I can see that the branch ``feature/awesome-feature-1`` is a copy of develop and has the same commits.
Now, after I make my changes, I will create a new commit with my username ``jurgen``.

```sh
> git commit -m 'Changing button color.'
987654 (feature/awesome-feature-1) Changing button color. (1 second ago) <jurgen>
234567 (origin/develop) changes-develop-2 (5 days ago) <greta>
345678 changes-develop-1 (6 days ago) <greta>
```

Now, let's imagine that with so many changes, this feature was not a priority anymore, and you leave the branch sitting for 2 weeks. By then, develop will have new commits.

```sh
> git checkout develop
> git lg
678901 (origin/develop) changes-develop-5 (3 days ago) <john>
567890 changes-develop-4 (9 days ago) <greta>
456789 changes-develop-3 (10 days ago) <john>
234567 changes-develop-2 (19 days ago) <greta>
345678 changes-develop-1 (20 days ago) <greta>
```

We can see here that the branch ``develop`` has had 3 new commits by different users.
Here 2 things may have happened. Our branch has no conflicts or it has conflicts. Let's explore both cases.

### 1.1 My feature branch does not have conflicts.

In the case that there are no conflicts between develop and your awesome branch, you should not have problems merging your branch. However, this depends on the merging strategy of your team.
Some teams prefer to simply merge feature branches, others merge and rebase, and others squash merge. All of this different strategies have different philosophies and may have an impact on the traceability of your old code.
Either way, it should be safe to merge an old branch. In the case that your team cares about keeping your git history clean and merges pull requests, you will need to rebase.

If you decide to rebase, you will need to get the``develop``changes in your local machine. Then, we first checkout to ``develop``and we pull. This is done in order to get the latest changes made in develop. If you are working on a big team, changes to your base branch may come at any time and when we rebase we want to ensure we have the latest changes.

```sh
> git checkout develop
> git lg
678901 (origin/develop) changes-develop-5 (3 days ago) <john>
567890 changes-develop-4 (9 days ago) <greta>
456789 changes-develop-3 (10 days ago) <john>
234567 changes-develop-2 (19 days ago) <greta>
345678 changes-develop-1 (20 days ago) <greta>
```

OK, now that develop is the same locally and in your remote repo. Let's do the rebase.
If you go to your feature branch, you will see that your commits look old.

```sh
> git checkout feature/awesome-feature-1 # This creates a new branch.
> git lg # We see that the list of commits is the same.
> 987654 (feature/awesome-feature-1) Changing button color. (14 days ago) <jurgen>
234567 changes-develop-2 (19 days ago) <greta>
345678 changes-develop-1 (20 days ago) <greta>
```

So then, we will need to make a rebase. To do so, we imagine the branches as 2 columns, where things are being stacked one over the previous commit.
