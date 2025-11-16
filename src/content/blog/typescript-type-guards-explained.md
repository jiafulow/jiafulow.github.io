---
title: 'TypeScript Type Guards: Your Code''s Bouncer'
description: 'A practical guide to using type guards in TypeScript to make your code safer and your compiler happier. Learn how to narrow types like a pro.'
pubDate: 'Oct 15 2025'
category: 'TypeScript'
tags: ['typescript', 'tutorial', 'type-safety', 'best-practices']
---

Type guards are like the bouncers of your TypeScript code—they check IDs (types) at the door and make sure everyone is who they say they are. Let's dive into how to use them effectively.

## What Are Type Guards?

Type guards are TypeScript's way of narrowing down types within a conditional block. They help the compiler understand what type a value actually is at runtime, making your code safer and more predictable.

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is a string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is a number here
    console.log(value.toFixed(2));
  }
}
```

## Built-in Type Guards

TypeScript provides several built-in type guards:

- `typeof` for primitives
- `instanceof` for class instances
- `in` operator for checking properties
- Truthiness checks

## Custom Type Guards

The real power comes from custom type guards. Use the `is` keyword to create type predicates:

```typescript
interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  lives: number;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}
```

## Discriminated Unions

My favorite pattern! Add a discriminator property to make type narrowing automatic:

```typescript
type Success = { status: 'success'; data: any };
type Error = { status: 'error'; message: string };
type Result = Success | Error;

function handleResult(result: Result) {
  if (result.status === 'success') {
    // TypeScript knows this is Success
    console.log(result.data);
  } else {
    // TypeScript knows this is Error
    console.log(result.message);
  }
}
```

## Common Pitfalls

**Don't lie to the compiler:**

```typescript
// Bad - lying about the type
function isBad(value: any): value is string {
  return true; // This will cause runtime errors!
}

// Good - actually check the type
function isGood(value: unknown): value is string {
  return typeof value === 'string';
}
```

## Conclusion

Type guards are essential for writing robust TypeScript. They bridge the gap between compile-time types and runtime reality. Use them liberally, but honestly—your future self will thank you when you're not debugging mysterious type errors at 2 AM.

Happy guarding! 🛡️
