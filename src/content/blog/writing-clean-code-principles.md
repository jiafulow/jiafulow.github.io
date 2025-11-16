---
title: 'Writing Clean Code: Principles That Actually Matter'
description: 'Forget the dogma. These are the clean code principles that make a real difference in day-to-day development.'
pubDate: 'Sep 8 2025'
category: 'Best Practices'
tags: ['clean-code', 'best-practices', 'refactoring', 'code-quality']
---

I've read Uncle Bob's "Clean Code" (and the internet's many takes on it). Some advice is gold, some is... debatable. Here are the principles I actually use and why they matter.

## Principle 1: Names Should Explain Themselves

**Bad:**
```javascript
const d = 86400000;
```

**Good:**
```javascript
const millisecondsPerDay = 86400000;
// or
const MS_PER_DAY = 86400000;
```

If you need a comment to explain what a variable does, the name isn't good enough.

**More examples:**
```javascript
// ❌ Bad
function proc(x) { ... }

// ✅ Good
function processPayment(order) { ... }

// ❌ Bad
const stuff = [];

// ✅ Good
const activeUsers = [];
```

**Exception:** Loop counters (`i`, `j`, `k`) are fine in small scopes. Everyone knows what they mean.

## Principle 2: Functions Should Do One Thing

**Bad:**
```javascript
function handleUserData(user) {
  // Validate
  if (!user.email) throw new Error('Email required');
  
  // Transform
  user.email = user.email.toLowerCase();
  
  // Save
  database.save(user);
  
  // Send email
  emailService.sendWelcome(user);
  
  // Log
  logger.info('User created');
}
```

**Good:**
```javascript
function createUser(user) {
  validateUser(user);
  const normalizedUser = normalizeUser(user);
  const savedUser = saveUser(normalizedUser);
  sendWelcomeEmail(savedUser);
  logUserCreation(savedUser);
  return savedUser;
}
```

Each function does one thing at one level of abstraction.

## Principle 3: Avoid Flag Arguments

**Bad:**
```javascript
function bookFlight(passenger, isPremium) {
  if (isPremium) {
    // Premium logic
  } else {
    // Standard logic
  }
}
```

**Good:**
```javascript
function bookPremiumFlight(passenger) { ... }
function bookStandardFlight(passenger) { ... }
```

Boolean arguments usually mean your function is doing two things.

## Principle 4: Keep Functions Small

Not a hard rule, but if your function doesn't fit on one screen, it's probably doing too much.

**My guideline:** If I can't understand what a function does in 10 seconds, it needs refactoring.

## Principle 5: Don't Repeat Yourself (DRY)

**Bad:**
```javascript
// In 5 different places
if (!user || !user.email || user.email.trim() === '') {
  throw new Error('Invalid email');
}
```

**Good:**
```javascript
function requireValidEmail(user) {
  if (!user?.email?.trim()) {
    throw new Error('Invalid email');
  }
}

// Now use it everywhere
requireValidEmail(user);
```

**But don't go crazy:** Sometimes duplication is better than the wrong abstraction.

## Principle 6: Comments Should Explain WHY, Not WHAT

**Bad:**
```javascript
// Increment counter
counter++;
```

I can see that. Thanks.

**Good:**
```javascript
// Using exponential backoff to avoid overwhelming the API
await sleep(Math.pow(2, retries) * 1000);
```

This explains the reasoning behind the code.

**Even better:**
```javascript
const backoffMs = Math.pow(2, retries) * 1000;
await sleep(backoffMs); // Exponential backoff
```

Name explains what, comment explains why.

## Principle 7: Return Early

**Bad:**
```javascript
function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        // Process order
      }
    }
  }
}
```

Nesting hell!

**Good:**
```javascript
function processOrder(order) {
  if (!order) return;
  if (order.items.length === 0) return;
  if (!order.isPaid) return;
  
  // Process order
}
```

Guard clauses make the logic flat and clear.

## Principle 8: Use Constants for Magic Numbers

**Bad:**
```javascript
setTimeout(callback, 3600000);
```

**Good:**
```javascript
const ONE_HOUR_MS = 60 * 60 * 1000;
setTimeout(callback, ONE_HOUR_MS);
```

Now I don't have to count zeros.

## Principle 9: Consistent Style Matters

Use a formatter (Prettier, Black, gofmt). Never debate style again.

These should all look the same:
```javascript
function getUserById(id) { ... }
function getOrderById(id) { ... }
function getProductById(id) { ... }
```

Not a mix of camelCase, snake_case, and PascalCase.

## Principle 10: Delete Dead Code

**Bad:**
```javascript
// This is old code but might be useful someday
// function oldImplementation() {
//   ...
// }
```

**Good:**
```javascript
// Just delete it
```

That's what Git is for. If you need it, check the history.

## What I DON'T Obsess Over

### Function Length

Some people say "functions must be < 20 lines." I say: if it's clear and focused, length doesn't matter.

### Perfect Abstraction

Don't abstract until you have 3 examples. Premature abstraction is worse than duplication.

### 100% Coverage

Write tests for important logic. Don't test getters/setters just to hit 100%.

### Zero Comments

Some logic is complex. A good comment explaining the business rule is valuable.

## The Real Goal

Clean code isn't about following rules. It's about:
- **Being kind to future developers** (including future you)
- **Making bugs obvious**
- **Enabling change without fear**

If your code does these things, it's clean enough.

## My Process

1. **Make it work** - Get the feature done
2. **Make it right** - Refactor for clarity
3. **Make it fast** - Only if needed

Most code doesn't need step 3.

## Tools That Help

- **ESLint/Prettier** - Automatic style
- **TypeScript** - Catch mistakes early
- **Code reviews** - Fresh eyes catch issues
- **Refactoring tools** - VS Code's rename/extract are amazing

## Conclusion

Clean code is a journey, not a destination. Every refactor makes it better. Don't aim for perfection—aim for "better than yesterday."

And remember: working code that's slightly messy is better than perfect code that doesn't exist.

Now go clean something up! 🧹
