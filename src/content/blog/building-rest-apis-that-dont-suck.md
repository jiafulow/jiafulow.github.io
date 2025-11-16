---
title: 'Building REST APIs That Don''t Suck: A Love Letter to Future Developers'
description: 'Design principles for creating REST APIs that are intuitive, well-documented, and won''t make other developers curse your name.'
pubDate: 'Oct 5 2025'
category: 'API Design'
tags: ['api', 'rest', 'backend', 'best-practices', 'design']
---

I've consumed a lot of APIs in my career. Some were delightful. Most were... not. Here's how to build APIs that fall into the first category.

## The Golden Rule: Be Consistent

Consistency is more important than perfection. Pick conventions and stick to them:

- `/users` not `/users` and `/user` and `/getUsers`
- `snake_case` or `camelCase`, never both
- Same error format everywhere
- Predictable pagination

Future developers will appreciate not having to memorize special cases.

## Resource Naming: Don't Overthink It

Use nouns (not verbs), be plural, be clear:

**Good:**
```
GET    /users
GET    /users/123
POST   /users
PUT    /users/123
DELETE /users/123
```

**Bad:**
```
GET    /getUsers
POST   /createNewUser
GET    /user/get?id=123
```

The HTTP method is the verb. The path is the noun. That's it.

## Nested Resources (Use Sparingly)

```
GET /users/123/posts           # Good
GET /users/123/posts/456       # Still good
GET /users/123/posts/456/comments/789/likes  # Too deep, stop
```

If you're nesting more than 2 levels, reconsider. Maybe `/comments/789/likes` is fine on its own.

## Status Codes: Use Them Correctly

You have many tools, use them:

- `200` - Success with body
- `201` - Created something
- `204` - Success, no body (deletes)
- `400` - Client messed up (bad request)
- `401` - Who are you? (unauthorized)
- `403` - I know who you are, still no (forbidden)
- `404` - Doesn't exist
- `500` - I messed up (server error)

Don't return `200 OK` with `{"error": "Something broke"}`. That's lying to the HTTP layer.

## Error Responses: Be Helpful

**Bad:**
```json
{
  "error": "Invalid input"
}
```

**Good:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": [
      {
        "field": "email",
        "issue": "Must be a valid email address"
      }
    ]
  }
}
```

The second one tells me exactly what to fix. Be the second one.

## Pagination: Think About Scale

```
GET /users?page=1&limit=20
```

Return:
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

Bonus points for cursor-based pagination for large datasets.

## Filtering and Sorting

Make it intuitive:
```
GET /users?role=admin&sort=created_at:desc&search=john
```

Document what filters are available. Not everyone wants to read your source code.

## Versioning: Plan for Change

You will need to make breaking changes. Plan for it:

- URL versioning: `/v1/users`, `/v2/users`
- Header versioning: `Accept: application/vnd.api.v2+json`

I prefer URL versioning because it's explicit and easy to test.

## Documentation: Not Optional

Use OpenAPI/Swagger. Generate docs from code when possible. Include:
- What each endpoint does
- Request/response examples
- Required vs optional fields
- Error responses

Postman collections are also nice. Make it easy to try your API.

## Rate Limiting: Be Transparent

Include headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1445412480
```

When limits are hit, return `429 Too Many Requests` with a helpful message.

## Authentication: Keep It Standard

- Use OAuth 2.0 or JWT
- Use Bearer tokens
- Never pass credentials in URLs
- Always use HTTPS (seriously, it's 2025)

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## The Test: Can a New Developer Understand It?

Before shipping, ask:
- Can someone figure out how to use this without asking me?
- Are the error messages helpful?
- Is the documentation complete?
- Would I enjoy working with this API?

If you answer no to any of these, keep iterating.

## Tools I Love

- **Postman** - Testing and documentation
- **Insomnia** - Alternative to Postman
- **Swagger UI** - Interactive API docs
- **httpie** - Beautiful CLI for testing

## Conclusion

Good API design is about empathy. You're building an interface for other humans (including future you). Make it intuitive, consistent, and well-documented.

Your future self—and every developer who uses your API—will thank you.

Now go build something beautiful! 🚀
