---
title: 'My Developer Workflow: Tools and Habits That Keep Me Productive'
description: 'A peek into my daily development workflow, from morning routine to deployment. Real practices, not Instagram-perfect productivity porn.'
pubDate: 'Jul 18 2025'
category: 'Productivity'
tags: ['productivity', 'workflow', 'tools', 'habits', 'developer-experience']
---

People ask how I stay productive. Honestly? It's less about grinding and more about reducing friction. Here's my actual workflow, warts and all.

## Morning Routine (7:00 AM)

I'm not a morning person, but I've learned to fake it.

**Coffee first.** Non-negotiable. I have an Ember mug that keeps it at exactly 135°F. This is not sponsored, I'm just that serious about coffee temperature.

**Check GitHub notifications** (5 minutes max). Triage what needs immediate attention. Archive the rest. Inbox Zero for code.

**Review yesterday's TODOs.** I use a simple system:
- ✅ Done
- 🚧 In progress
- 📌 High priority
- 💭 Ideas for later

If a task has been "in progress" for 3+ days, it's too big. Break it down.

## Deep Work Block (7:30 AM - 11:30 AM)

This is my golden time. No meetings, no Slack, no distractions.

**What I do:**
- Tackle the hardest problem first
- Write code that requires deep thought
- Architectural decisions
- Complex refactoring

**What I DON'T do:**
- Check email (it can wait)
- Respond to Slack (async for a reason)
- Meetings (scheduled for afternoons)

**Tools:**
- **VS Code** in full screen
- **Raycast Do Not Disturb** mode
- **Spotify** instrumental playlist (Ratatat usually)
- **Focus** app to block distracting websites

**The Pomodoro-ish Technique:**

I don't strictly follow Pomodoro, but I take breaks:
- Work 90 minutes
- Break 10-15 minutes (walk, coffee, stare at wall)
- Repeat

Why 90? That's my natural focus cycle. Experiment to find yours.

## The Tools I Live In

### Terminal: Warp

Switched from iTerm2. Warp has:
- AI command suggestions
- Block-based output
- Better search
- Workflows (saved commands)

Favorite workflow:
```bash
# Git shortcuts
alias gst="git status"
alias gc="git commit -m"
alias gp="git push"
alias gpl="git pull --rebase"
alias gco="git checkout"
alias gcb="git checkout -b"
```

### Editor: VS Code

[See my extensions post for details](/blog/vscode-extensions-that-boost-productivity)

**Key settings:**
- Format on save
- Auto save on focus change
- Mini map disabled (I know my code)
- Breadcrumbs enabled

### Browser: Arc

Spaces keep work organized:
- Dev space (GitHub, docs, Stack Overflow)
- Research space (articles, videos)
- Tools space (Figma, Linear, analytics)

Cmd+T opens command bar. So fast.

### Task Management: Linear

Tried Jira, Trello, Asana, Notion. Linear won because:
- Fast (keyboard shortcuts for everything)
- Clean UI
- GitHub integration
- No bloat

My board:
- **Backlog** - Ideas, no commitment
- **Todo** - Committed this week
- **In Progress** - Currently working on (max 2)
- **Review** - Needs PR review
- **Done** - Shipped

## Midday Break (11:30 AM - 1:00 PM)

I actually take lunch. Shocking, I know.

**Why it matters:**
- Prevents afternoon crash
- Gives brain a rest
- Better afternoon focus

What I do:
- Make food (cooking is meditative)
- Walk outside (even 10 minutes helps)
- Read non-tech stuff
- Zero screen time if possible

## Afternoon: Meetings & Collaboration (1:00 PM - 4:00 PM)

All meetings go here. Protects morning deep work.

**Before each meeting:**
- Review agenda
- Prepare questions
- Check relevant PRs/code

**During meetings:**
- Take notes in Notion
- Action items get Linear tickets
- Follow up same day

**Meeting hygiene:**
- Default to 25 or 50 minutes (not 30/60)
- Always have agenda
- Record if possible (I use Loom)
- No meeting Wednesdays

## Code Review Process

I try to review PRs within 4 hours. Blocking someone sucks.

**My review checklist:**
- Does it solve the problem?
- Is it tested?
- Is it readable?
- Any security concerns?
- Performance implications?

**Comments I leave:**
- 🔴 Must fix
- 🟡 Suggestion
- 💡 Idea for later
- 🎉 Nice work!

More positive comments = better team morale.

## Late Afternoon: Cleanup (4:00 PM - 5:30 PM)

**Tasks:**
- Respond to messages
- Update tickets
- Write documentation
- Plan tomorrow
- Review metrics

**The Daily Note:**

In Notion, I write:
```
## 2025-10-16

### Done
- Implemented user authentication
- Fixed pagination bug
- Reviewed 3 PRs

### Learned
- Redis caching patterns
- useCallback gotchas

### Tomorrow
- Write tests for auth
- Deploy to staging
- Review Alex's PR

### Blockers
- Waiting on design feedback
```

Takes 5 minutes. Invaluable for retrospectives.

## Tools That Integrate Everything

### Raycast

Replaced Spotlight. My most-used workflows:
- Open project folders
- Search GitHub
- Control Spotify
- Window management
- Clipboard history (game changer!)
- Emoji search (🚀)

**Custom scripts:**
```bash
# Create component with test and story
#!/bin/bash
name=$1
mkdir -p src/components/$name
touch src/components/$name/$name.tsx
touch src/components/$name/$name.test.tsx
touch src/components/$name/$name.stories.tsx
code src/components/$name/$name.tsx
```

### GitHub CLI

```bash
# Create PR from terminal
gh pr create --title "Fix: Authentication bug" --body "Closes #123"

# Check PR status
gh pr status

# Merge PR
gh pr merge 456 --squash
```

No context switching to browser!

## Automation & Scripts

If I do something twice, I automate it.

**Recent additions:**
```bash
# Update all dependencies
alias update="npm update && npm audit fix"

# Clean project
alias clean="rm -rf node_modules dist && npm install"

# Run tests in watch mode
alias tw="npm test -- --watch"

# Create new component (calls Raycast script)
alias newcomponent="~/scripts/new-component.sh"
```

## End of Day (5:30 PM)

**Shutdown ritual:**
1. Commit all changes (even WIP)
2. Push to remote
3. Update tomorrow's tasks
4. Close all apps
5. Actually stop working

That last one is hardest. But burnout helps no one.

## Weekly Review (Friday, 4 PM)

**Questions I ask:**
- What went well?
- What didn't?
- What did I learn?
- What will I change?

**Metrics I track:**
- PRs merged
- Issues closed
- New features shipped
- Bugs introduced (yes, really)

Not to beat myself up, but to improve systems.

## What I DON'T Do

**No hustle culture:**
- I work 40-45 hours/week
- No weekends
- Vacation means vacation

**No perfectionism:**
- Ship MVP, iterate
- Done > Perfect
- Technical debt is okay (with plan to fix)

**No notification hell:**
- Slack: Do Not Disturb by default
- Email: Check 2x per day
- Phone: Work apps removed

## The Tools That Didn't Stick

**Notion for tasks** - Too slow
**Pomodoro timer apps** - Too rigid
**RescueTime** - Made me anxious
**Todoist** - Too simple
**Monday.com** - Too complex

Find what works for YOU.

## The Real Secret

It's not about productivity hacks. It's about:

1. **Protecting deep work time**
2. **Reducing context switching**
3. **Automating repetitive tasks**
4. **Taking actual breaks**
5. **Saying no to things**

That's it. Everything else is optimization.

## My Setup

Since people always ask:

**Hardware:**
- MacBook Pro 16" M2 Max
- LG UltraFine 5K Display
- Keychron K2 Pro
- Logitech MX Master 3S
- Sony WH-1000XM5 headphones

**Software:**
- macOS Sonoma
- Warp terminal
- VS Code
- Arc browser
- Raycast
- Notion
- Linear

**Dotfiles:**
https://github.com/maxbytefield/dotfiles

(Not real, but you get the idea)

## Conclusion

Perfect productivity doesn't exist. Some days I'm in flow state, crushing it. Other days I stare at my screen and write 3 lines.

The goal isn't to be perfect. It's to:
- Remove friction
- Work sustainably
- Ship consistently
- Learn continuously

Find a rhythm that works for you, not what works for Tech Twitter.

Now go build something! (After you take a break.) 🚀

---

What's your workflow like? Always curious to hear how others work. Hit me up on Twitter/X!
