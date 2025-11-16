---
title: '5 React Hooks Mistakes I Made So You Don''t Have To'
description: 'Common React Hooks pitfalls and how to avoid them. Learn from my mistakes and save yourself hours of debugging.'
pubDate: 'Sep 28 2025'
category: 'React'
tags: ['react', 'hooks', 'javascript', 'frontend', 'mistakes']
---

I've been using React Hooks since they were released, and I've made every mistake in the book. Here are the big ones so you can learn from my pain.

## Mistake 1: Forgetting Dependencies

```javascript
// 🚫 Wrong
useEffect(() => {
  fetchUser(userId);
}, []); // userId is missing!

// ✅ Right
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

The empty dependency array means "run once on mount." But if `userId` changes, your effect won't re-run and your UI will be stale.

**Pro tip:** Enable the `eslint-plugin-react-hooks` rule. It'll yell at you about missing dependencies.

## Mistake 2: Using State for Everything

Not everything needs to be state:

```javascript
// 🚫 Wrong - Derived state
const [users, setUsers] = useState([]);
const [activeUsers, setActiveUsers] = useState([]);

useEffect(() => {
  setActiveUsers(users.filter(u => u.active));
}, [users]);

// ✅ Right - Compute it
const [users, setUsers] = useState([]);
const activeUsers = users.filter(u => u.active);
```

If you can calculate it from existing state, just calculate it. No need to store it separately.

## Mistake 3: Infinite Loops from Hell

```javascript
// 🚫 Wrong - Creates infinite loop
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // This triggers re-render, which runs effect...
}); // No dependency array = runs every render!

// ✅ Right - Only run once
useEffect(() => {
  setCount(c => c + 1);
}, []); // Empty array = only on mount
```

I've crashed more browsers this way than I'd like to admit.

## Mistake 4: Async Functions in useEffect

```javascript
// 🚫 Wrong
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);

// ✅ Right
useEffect(() => {
  async function loadData() {
    const data = await fetchData();
    setData(data);
  }
  loadData();
}, []);

// ✅ Even Better - Handle cleanup
useEffect(() => {
  let cancelled = false;
  
  async function loadData() {
    const data = await fetchData();
    if (!cancelled) {
      setData(data);
    }
  }
  
  loadData();
  
  return () => {
    cancelled = true;
  };
}, []);
```

`useEffect` expects a cleanup function, not a Promise. Async functions return Promises.

## Mistake 5: Creating Functions Inside Dependencies

```javascript
// 🚫 Wrong - New function every render
useEffect(() => {
  handleData();
}, [handleData]); // handleData is recreated every render!

// ✅ Right - Wrap in useCallback
const handleData = useCallback(() => {
  // ... do stuff
}, [/* dependencies */]);

useEffect(() => {
  handleData();
}, [handleData]);
```

Or better yet, just put the function inside the effect if it's only used there.

## Bonus Mistake: Overusing useCallback/useMemo

```javascript
// 🚫 Probably unnecessary
const memoizedValue = useMemo(() => {
  return 2 + 2;
}, []);

// ✅ Just do it
const value = 2 + 2;
```

Only use `useMemo` and `useCallback` when you have a **proven** performance problem. They're not free—they add complexity and memory overhead.

**When to actually use them:**
- Heavy computations
- Preventing child re-renders (with React.memo)
- Dependencies of other hooks

## The Mental Model

Think of hooks as:
- `useState` - A variable that persists between renders
- `useEffect` - "After this renders, do this thing"
- `useCallback` - "Remember this function"
- `useMemo` - "Remember this computed value"

## Debugging Tools

1. **React DevTools** - See component renders in real-time
2. **Why Did You Render** - Library to detect unnecessary renders
3. **useWhyDidYouUpdate** - Custom hook to log what changed

## Conclusion

Hooks are powerful but not magic. They're just JavaScript functions with rules. Learn the rules, use the linter, and you'll avoid 90% of the headaches.

And if you do hit an infinite loop, don't panic. Just check your dependencies and make sure you're not creating new objects/functions every render.

We've all been there. 😅

Happy hooking! 🪝
