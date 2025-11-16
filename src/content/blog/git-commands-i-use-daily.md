---
title: 'Git Commands I Actually Use (And the Scary Ones I Google Every Time)'
description: 'A practical guide to Git commands that make up 90% of daily work, plus the dangerous ones you should handle with care.'
pubDate: 'Sep 20 2025'
category: 'Tools'
tags: ['git', 'terminal', 'productivity', 'tools', 'workflow']
---

Let's be real: we all use about 10 Git commands regularly and Google the rest when needed. Here's my daily toolkit and the commands I bookmark for emergencies.

## The Daily Drivers (90% of My Git Usage)

### 1. Check What's Changed
```bash
git status
git diff
git diff --staged
```

I probably run `git status` 50 times a day. No shame.

### 2. Commit Stuff
```bash
git add .
git add -p  # Stage in chunks - super useful!
git commit -m "Add feature X"
git commit --amend  # Fix the last commit
```

**Pro tip:** Use `git add -p` to review changes before staging. Catches a lot of `console.log()` statements.

### 3. Branch Management
```bash
git branch  # List branches
git checkout -b feature/new-thing
git checkout main
git branch -d feature/old-thing  # Delete merged branch
```

Or with the newer syntax:
```bash
git switch main
git switch -c feature/new-thing
```

### 4. Sync with Remote
```bash
git pull
git push
git push -u origin feature-branch  # First push
git fetch  # Get updates without merging
```

### 5. View History
```bash
git log
git log --oneline  # Compact view
git log --graph --all  # Pretty visualization
```

Add this alias to your `.gitconfig`:
```bash
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

Then use `git lg` for a beautiful log!

## The "I Need to Google This" Commands

### Undo Commits (But Keep Changes)
```bash
git reset HEAD~1  # Undo last commit, keep changes
git reset --soft HEAD~1  # Keep changes staged
git reset --hard HEAD~1  # ⚠️ DESTROY last commit
```

**Warning:** `--hard` is permanent. Commits and changes are gone. Make sure you mean it.

### Undo Commits (Remote)
```bash
# If you pushed by mistake
git revert HEAD  # Safe - creates new commit
git push

# If you REALLY need to force it (be careful!)
git reset --hard HEAD~1
git push --force  # ⚠️ Will rewrite history!
```

**Rule:** Never force push to `main` or shared branches. You will make enemies.

### Stash: The Temporary Drawer
```bash
git stash  # Save work temporarily
git stash pop  # Get it back
git stash list  # See all stashes
git stash apply stash@{0}  # Apply specific stash
git stash drop  # Delete a stash
```

I use this when I need to quickly switch branches but have uncommitted work.

### Cherry-Pick: Steal Commits
```bash
git cherry-pick abc123  # Apply commit from another branch
```

Useful when you committed to the wrong branch.

### Rebase: Rewrite History
```bash
git rebase main  # Move your commits on top of main
git rebase -i HEAD~3  # Interactive rebase last 3 commits
```

Interactive rebase lets you:
- Squash commits together
- Reword commit messages
- Reorder commits
- Delete commits

**Warning:** Only rebase local commits. Never rebase pushed commits unless you're alone.

### Find Who Broke It
```bash
git blame filename.js  # See who wrote each line
git bisect start  # Binary search for the bad commit
```

`git bisect` is magic for finding which commit broke things.

### Clean Up
```bash
git clean -n  # Preview what will be deleted
git clean -fd  # Delete untracked files and directories
```

### The Nuclear Option
```bash
# When everything is broken and you just want a fresh start
git fetch origin
git reset --hard origin/main
```

This throws away ALL local changes. Use sparingly.

## My Aliases

In `~/.gitconfig`:
```ini
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --graph --all --oneline
    undo = reset --soft HEAD~1
```

Now I can type `git co` instead of `git checkout`. Saves dozens of keystrokes daily.

## The Dangerous Ones

These I handle with extreme caution:

- `git reset --hard` - Destroys uncommitted changes
- `git push --force` - Rewrites remote history
- `git clean -fd` - Deletes untracked files
- `git rebase` on public branches - Confuses everyone

**Golden Rule:** If you're unsure, make a backup branch first:
```bash
git branch backup-just-in-case
```

## Oh Sh*t, Git!

For when things go wrong, bookmark [ohshitgit.com](https://ohshitgit.com). It's saved me countless times.

## Tools I Love

- **lazygit** - TUI for Git (terminal UI)
- **tig** - Text-mode interface for Git
- **VS Code Git Integration** - For when I'm feeling GUI-ish
- **GitHub CLI** - `gh pr create` is magic

## Conclusion

You don't need to memorize every Git command. Know the basics cold, bookmark the advanced stuff, and don't be afraid to Google.

And remember: the worst Git mistake you can make is not using Git at all.

Happy committing! 🚀

P.S. Always read the command before hitting enter. Especially with `--force` or `--hard`. Trust me on this.
