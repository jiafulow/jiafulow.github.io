---
title: 'VS Code Extensions That Actually Make Me More Productive'
description: 'My curated list of VS Code extensions that earn their place. No fluff, just tools that improve my daily workflow.'
pubDate: 'Aug 1 2025'
category: 'Tools'
tags: ['vscode', 'productivity', 'tools', 'developer-experience', 'workflow']
---

I've tried hundreds of VS Code extensions. Most got uninstalled after a day. These are the ones that stuck because they genuinely make me faster and happier.

## The Essential Ones

### 1. Prettier - Code Formatter

**Why:** Never think about formatting again.

**Settings I use:**
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5"
}
```

Format on save = zero effort, perfect consistency.

### 2. ESLint

**Why:** Catch errors before they become bugs.

Works with Prettier. Configure once, forget about it.

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### 3. GitLens

**Why:** Git superpowers built-in.

**Features I use:**
- Blame annotations (who wrote this line?)
- File history viewer
- Compare branches
- Rich commit search

The blame lens in particular saves me daily.

## Language-Specific

### 4. ES7+ React/Redux/React-Native snippets

**Why:** Type less boilerplate.

```
rafce → React Arrow Function Component Export
useS → useState hook
useE → useEffect hook
```

Massive time saver for React work.

### 5. TypeScript Error Translator

**Why:** Makes TS errors actually readable.

Turns this:
```
Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
```

Into plain English explanations. Life-changing for beginners.

### 6. Tailwind CSS IntelliSense

**Why:** Autocomplete for Tailwind classes.

If you use Tailwind, this is non-negotiable. Autocomplete, linting, and hover previews.

## Quality of Life

### 7. Auto Rename Tag

**Why:** Change opening tag, closing tag updates automatically.

```html
<div>...</div>
<!-- Change div to section -->
<section>...</section>  <!-- Updates automatically! -->
```

Small thing, huge time saver.

### 8. Bracket Pair Colorizer (Built-in now!)

**Why:** Match brackets visually.

Actually built into VS Code now:
```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active"
}
```

Makes nested code readable.

### 9. Better Comments

**Why:** Highlight different comment types.

```javascript
// TODO: Fix this bug
// ! IMPORTANT: Security issue
// ? Should this be async?
// * Key feature here
```

Color-coded comments are easier to scan.

### 10. Error Lens

**Why:** See errors inline.

Instead of hovering over red squiggles, see the error message right in your code:

```javascript
const x: number = "string";  // ← Type 'string' not assignable to 'number'
```

Controversial extension (some find it noisy), but I love it.

## Navigation & Search

### 11. Path Intellisense

**Why:** Autocomplete file paths.

```javascript
import './components/Button' // Autocompletes as you type
```

Especially useful for deep folder structures.

### 12. Advanced-new-file

**Why:** Create files fast.

`Cmd+N` → Type path → File created with directories

```
components/Button/Button.tsx  // Creates directories if needed
```

### 13. Bookmarks

**Why:** Mark important lines.

Toggle bookmarks with `Cmd+Alt+K`, jump between them with `Cmd+Alt+L`.

Great for navigating large files.

## Testing & Debugging

### 14. Jest Runner

**Why:** Run tests directly in editor.

Click gutter icon to run a single test. See results inline. No terminal switching.

```javascript
test('adds numbers', () => { // ← Click to run
  expect(add(1, 2)).toBe(3);
});
```

### 15. Thunder Client

**Why:** Postman alternative inside VS Code.

Test APIs without leaving your editor. Lighter than Postman, perfect for quick tests.

## Appearance

### 16. Material Icon Theme

**Why:** Beautiful file icons.

Makes the file tree actually pleasant to look at. Different icons for .tsx, .test.ts, etc.

### 17. GitHub Theme (or your favorite)

**Why:** Easy on the eyes.

My current theme. Changes with the seasons (literally, I switch themes).

**Other favorites:**
- Dracula Official
- Night Owl
- Nord
- Catppuccin

## Productivity Hacks

### 18. Paste JSON as Code

**Why:** Generate types from JSON.

Copy JSON, run command, get TypeScript interfaces. Magic.

```json
{ "name": "Max", "age": 30 }
```

Becomes:
```typescript
interface Root {
  name: string;
  age: number;
}
```

### 19. TODO Highlight

**Why:** Never lose track of TODOs.

Highlights TODO, FIXME, HACK in your code. Can list all TODOs in a sidebar.

### 20. Import Cost

**Why:** See bundle impact of imports.

```javascript
import _ from 'lodash';  // 72.5kb (gzipped: 24.7kb)
import debounce from 'lodash/debounce';  // 2.3kb (gzipped: 1.1kb)
```

Helps me make better import decisions.

## Remote Development

### 21. Remote - SSH

**Why:** Edit files on remote servers.

Connect to any server via SSH, edit files like they're local. Full VS Code experience.

### 22. Dev Containers

**Why:** Develop inside Docker containers.

Full development environment in a container. Everyone on the team has identical setup.

## The Settings I Actually Changed

```json
{
  // Editor
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "boundary",
  
  // Files
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  
  // Terminal
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.fontFamily": "JetBrains Mono",
  
  // Workbench
  "workbench.startupEditor": "none",
  "workbench.editor.enablePreview": false,
  
  // Git
  "git.autofetch": true,
  "git.confirmSync": false,
  
  // Emmet
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## Extensions I Uninstalled

**Auto Import** - Too aggressive, broken imports
**Code Spell Checker** - Too many false positives
**Live Share** - Rarely used, resource heavy
**Settings Sync** - Now built-in

## Keyboard Shortcuts I Actually Use

```json
{
  // My custom shortcuts
  "key": "cmd+shift+e",
  "command": "workbench.view.explorer"  // Toggle file explorer
},
{
  "key": "cmd+shift+f",
  "command": "workbench.action.findInFiles"  // Search in files
},
{
  "key": "cmd+shift+d",
  "command": "editor.action.duplicateLine"  // Duplicate line
}
```

## Performance Tips

Too many extensions = slow VS Code.

**Check what's slow:**
1. `Cmd+Shift+P` → "Developer: Show Running Extensions"
2. Sort by activation time
3. Uninstall slowest ones you don't use

**My rule:** If I haven't used an extension in a month, it's gone.

## Theme-Based Workflow

I use different themes for different modes:

- **Day:** GitHub Light
- **Night:** GitHub Dark
- **Focus:** Night Owl (minimal distractions)

Switch with `Cmd+K Cmd+T`

## The Setup Process

New machine? Here's my checklist:

1. Install VS Code
2. Sign in to sync settings
3. Extensions auto-install
4. Configure terminal (oh-my-zsh)
5. Set up Git config
6. Ready in 10 minutes

## Extension Packs I Avoid

"React Extension Pack" with 20 extensions? No thanks.

I prefer installing only what I need. Keeps VS Code fast.

## What I Use Outside VS Code

- **Warp** - Terminal
- **Raycast** - Launcher
- **Rectangle** - Window management
- **Obsidian** - Notes

VS Code is for coding. Other tools for other tasks.

## Conclusion

Extensions should enhance your workflow, not complicate it. Start minimal, add as you find pain points.

My core setup:
- Prettier + ESLint (code quality)
- GitLens (git visibility)
- Language-specific intellisense
- A theme I like looking at

Everything else is optional. Find what works for you.

What extensions do you use? Always curious about hidden gems!

Happy coding! 🚀
