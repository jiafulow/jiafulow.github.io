---
title: 'Testing Your Frontend: Unit vs Integration vs E2E'
description: 'Understanding the testing pyramid and when to use each type of test. Stop over-testing the wrong things and under-testing the right ones.'
pubDate: 'Aug 15 2025'
category: 'Testing'
tags: ['testing', 'frontend', 'jest', 'testing-library', 'best-practices']
---

The testing world is full of opinions. Here's mine: test what matters, in the way that makes sense. Let's break down the types and when to use each.

## The Testing Pyramid

```
       /\
      /E2E\
     /------\
    /Integration\
   /--------------\
  /   Unit Tests   \
 /------------------\
```

**Bottom (Unit):** Lots of them, fast, cheap
**Middle (Integration):** Fewer, slower, more valuable
**Top (E2E):** Handful, slowest, most realistic

Most projects have this upside down.

## Unit Tests: Test Individual Functions

**What to test:**
```javascript
// Pure functions
export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Test it
test('calculateTotal sums item prices', () => {
  const items = [
    { price: 10 },
    { price: 20 },
    { price: 30 }
  ];
  
  expect(calculateTotal(items)).toBe(60);
});
```

**When to use:**
- Business logic
- Utility functions
- Data transformations
- Algorithms

**When NOT to use:**
- React components (usually)
- API calls (use integration)
- UI interactions (use E2E)

## Integration Tests: Test Features

**What to test:**
```javascript
import { render, screen, waitFor } from '@testing-library/react';
import { UserProfile } from './UserProfile';

test('displays user data after loading', async () => {
  render(<UserProfile userId="123" />);
  
  // Loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  // Loaded state
  await waitFor(() => {
    expect(screen.getByText('Max Bytefield')).toBeInTheDocument();
  });
});
```

**When to use:**
- React components with state
- Multiple components working together
- API integration
- User workflows

This is your sweet spot. Most tests should be here.

## E2E Tests: Test Complete User Journeys

**What to test:**
```javascript
// Using Playwright or Cypress
test('user can complete checkout', async ({ page }) => {
  await page.goto('/');
  
  // Add item to cart
  await page.click('[data-testid="add-to-cart"]');
  
  // Go to checkout
  await page.click('[data-testid="cart"]');
  await page.click('[data-testid="checkout"]');
  
  // Fill form
  await page.fill('[name="email"]', 'max@example.com');
  await page.fill('[name="card"]', '4242424242424242');
  
  // Submit
  await page.click('[data-testid="submit-payment"]');
  
  // Verify success
  await expect(page.locator('text=Order confirmed')).toBeVisible();
});
```

**When to use:**
- Critical user paths (signup, checkout, etc.)
- Cross-browser testing
- Visual regression
- Smoke tests

**Keep them minimal.** E2E tests are slow and brittle.

## My Testing Philosophy

### 1. Test Behavior, Not Implementation

**Bad:**
```javascript
test('sets loading state', () => {
  const { result } = renderHook(() => useData());
  expect(result.current.loading).toBe(true);
});
```

**Good:**
```javascript
test('shows loading indicator', () => {
  render(<DataComponent />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
```

Users don't care about internal state. They care about what they see.

### 2. Write Tests That Give Confidence

Ask: "If this test passes, am I confident the feature works?"

If no, write a better test.

### 3. Don't Test Third-Party Libraries

```javascript
// ❌ Don't do this
test('axios makes GET request', () => {
  // Testing axios, not your code
});

// ✅ Do this
test('displays fetched user data', async () => {
  // Test YOUR code using axios
});
```

Trust that popular libraries work. Test how YOU use them.

## Tools I Use

### Jest (Unit & Integration)
```javascript
// Fast, great for logic and components
test('formats currency correctly', () => {
  expect(formatCurrency(1234.5)).toBe('$1,234.50');
});
```

### React Testing Library (Integration)
```javascript
// Tests components like users use them
test('submits form with valid data', async () => {
  render(<LoginForm />);
  
  await userEvent.type(screen.getByLabelText(/email/i), 'max@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'secret123');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

### Playwright (E2E)
```javascript
// Full browser automation, cross-browser
test('user can search products', async ({ page }) => {
  await page.goto('/');
  await page.fill('[placeholder="Search"]', 'laptop');
  await page.press('[placeholder="Search"]', 'Enter');
  
  await expect(page.locator('.product-card')).toHaveCount(10);
});
```

## Common Mistakes

### Mistake 1: Testing Implementation Details

```javascript
// ❌ Bad - testing internals
test('useState is called', () => {
  const spy = jest.spyOn(React, 'useState');
  render(<Counter />);
  expect(spy).toHaveBeenCalled();
});

// ✅ Good - testing behavior
test('increments counter', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### Mistake 2: Not Testing Error States

```javascript
// Don't just test the happy path
test('shows error message on failure', async () => {
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.json({ error: 'Server error' }, { status: 500 });
    })
  );
  
  render(<UserList />);
  
  await waitFor(() => {
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });
});
```

### Mistake 3: Slow Tests

```javascript
// ❌ Slow - waits full time
await sleep(5000);

// ✅ Fast - waits minimum needed
await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});
```

## Test Structure (AAA Pattern)

```javascript
test('user can add item to cart', async () => {
  // Arrange - Setup
  const product = { id: 1, name: 'Laptop', price: 999 };
  render(<ProductCard product={product} />);
  
  // Act - Do the thing
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
  
  // Assert - Check the result
  expect(screen.getByText(/added to cart/i)).toBeInTheDocument();
});
```

Keep this structure and tests stay readable.

## Mock Strategically

**Mock external dependencies:**
```javascript
// API calls
jest.mock('./api', () => ({
  fetchUser: jest.fn(() => Promise.resolve({ name: 'Max' }))
}));

// Third-party services
jest.mock('stripe', () => ({
  createPayment: jest.fn()
}));
```

**Don't mock your own code** (usually). That defeats the purpose.

## Coverage: A Guide, Not a Goal

```bash
npm test -- --coverage
```

**Good coverage:** Your critical paths are tested
**Bad coverage:** 100% lines but no assertions

I aim for:
- 80%+ on business logic
- 60%+ on UI components
- 100% on critical paths (auth, payments)

## Test Organization

```
src/
  components/
    Button.tsx
    Button.test.tsx       # Co-located
  utils/
    currency.ts
    currency.test.ts      # Co-located
  e2e/
    checkout.spec.ts      # Separate for E2E
```

Co-locate unit and integration tests. Separate E2E tests.

## Running Tests

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test"
  }
}
```

Run unit tests in watch mode while developing. Run E2E before deploying.

## Continuous Integration

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run test:e2e
```

Automate all the things!

## Conclusion

Good testing isn't about 100% coverage or following dogma. It's about:
- **Confidence** - Tests catch real bugs
- **Speed** - Tests run fast enough to use
- **Maintainability** - Tests don't break constantly

Focus on integration tests. They give the best bang for buck.

And remember: untested code is a liability, but over-tested code is too. Find the balance.

Now go write some tests! 🧪
