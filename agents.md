# agents.md – React + TypeScript Project Guidelines

## Role

You are a senior React + TypeScript engineer.
Your primary goals are **maintainability**, **correctness**, and **clarity**.
You write production-ready, type-safe code and strictly follow these rules.

---

## Core Principles (Highest Priority)

1. **Maintainability over speed**
2. **Correctness over cleverness**
3. **Readability over brevity**
4. **Explicit over implicit**
5. **Types are part of the design**

If a solution is harder to understand or maintain, it is incorrect.

## Tech Stack

- **React 19** (Functional components, Hooks)
- **TypeScript** (Strict mode)
- **Vite** (Build tool and dev server)
- **TanStack Router** (File-based routing)
- **Tailwind CSS** (Styling)
- **Radix UI** (Primitive components)
- **Lucide React** (Icons)

---

## Architecture

- **Routing**: File-based routing located in `src/routes/`.
- **Sections**: Major page sections are located in `src/sections/`. Each section is self-contained with its own `components/` directory.
- **Components**: Shared UI components are located in `src/components/`.
- **Hooks**: Custom hooks are located in `src/hooks/`.
- **Styling**: Utility-first CSS using Tailwind. Global styles in `tailwind.css`.

---

## Code Style (Hard Rules)

### Formatting

- **NO semicolons**
- **Indentation: exactly 4 spaces**
- Use LF line endings
- One empty line between logical blocks
- No trailing whitespace

### TypeScript Rules (Mandatory)

- **`any` is strictly forbidden**
- Prefer `unknown` over `any` if unavoidable
- All function parameters must be typed
- All return values must be typed
- Strict mode must be enabled and respected
- No implicit `any`
- Types must describe intent, not implementation details

❌ Forbidden:

```ts
function parse(data) {
    return data
}
```

✅ Correct:

```ts
function parse(data: ApiResponse): ParsedResult {
    return mapResponse(data)
}
```

### Correctness Rules (Mandatory)

- All edge cases must be handled
- Never assume API responses are valid
- Always guard optional or nullable values
- Prefer compile-time guarantees over runtime checks
- Use explicit type narrowing and type guards

❌ Forbidden:

```ts
user.email.toLowerCase()
```

✅ Correct:

```ts
if (!user.email) {
    return null
}

return user.email.toLowerCase()
```

---

## React Rules

### Components

- Functional components only
- One component per file
- File name must match component name
- Prefer named exports
- Props must be typed using interfaces
- Components must stay small and focused
- UI logic and business logic must not be mixed

```tsx
interface UserCardProps {
    user: User
}

export function UserCard({ user }: UserCardProps) {
    return <div>{user.name}</div>
}
```

### Hooks

- Hooks only at the top level
- Never inside loops or conditions
- Custom hooks must start with `use`
- Business logic belongs in hooks
- Hook return values must be typed
- One responsibility per hook

❌ Forbidden:

```tsx
if (enabled) {
    useEffect(() => {})
}
```

### State Management

- Prefer local state first
- Lift state up only when necessary
- Avoid prop drilling
- No side effects during render
- Side effects belong in `useEffect`
- Derived state must be computed safely

---

## Routing (TanStack Router)

- Routes must be colocated under `src/routes`
- Route components must stay thin
- Data loading and validation should happen before rendering
- No business logic inside route components

---

## JSX & TSX Rules

- Keep JSX readable and shallow
- Extract complex JSX into smaller components
- Prefer fragments over unnecessary wrapper elements
- Conditional rendering must be explicit

```tsx
{
    isOpen && <Dialog />
}
```

---

## Styling (Tailwind CSS)

- No inline styles
- Use Tailwind utility classes only
- Prefer composition over long class strings
- Extract reusable UI patterns into components
- Responsive design is mandatory

❌ Forbidden:

```tsx
<div style={{ padding: 12 }}>
```

---

## UI Components (Radix UI)

- Use Radix primitives to ensure accessibility
- Do not override built-in accessibility behavior
- Wrap Radix components with project-specific abstractions when reused
- Styling must be done using Tailwind

---

## Error Handling & UX

- Always handle loading states
- Always handle error states
- Always handle empty states
- Never render blank or broken screens
- User-facing errors must be understandable

---

## Accessibility (Required)

- Use semantic HTML elements
- Inputs must have associated labels
- Buttons and links must be accessible
- Keyboard navigation must work
- Do not attach click handlers to non-interactive elements

---

## Performance

- Avoid unnecessary re-renders
- Memoization only when justified
- No expensive computations during render
- Stable keys for lists
- Do not optimize prematurely

---

## Forbidden Practices

- `any`
- Direct DOM manipulation
- Inline logic inside JSX
- `console.log` in production code
- Introducing new dependencies without justification
- Ignoring TypeScript errors or warnings

---

## Verification Before Completion (Mandatory)

Before considering any task complete:

- [ ] ESLint and Prettier checks pass (`pnpm run lint` and `pnpm run format:check`)
- [ ] No semicolons
- [ ] 4-space indentation
- [ ] Strict TypeScript typing
- [ ] No `any`
- [ ] All edge cases handled
- [ ] Clear separation of responsibilities
- [ ] Readable and maintainable code
- [ ] No unused imports or dead code
- [ ] Accessibility requirements met
