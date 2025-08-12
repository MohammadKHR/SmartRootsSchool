# SmartRoots AI Development Rules

## Tech Stack Overview

- **Frontend Framework**: React with TypeScript for type safety and maintainability
- **Styling**: Tailwind CSS with custom configurations for rapid UI development
- **State Management**: React Query for server state and React Context for app state
- **Routing**: React Router v6 for client-side navigation
- **UI Components**: Shadcn/ui components built on Radix UI primitives
- **Icons**: Lucide React for a consistent icon set
- **Forms**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS animations and Framer Motion for complex animations
- **Content Management**: Local JSON files for blog posts (to be replaced with CMS later)
- **Deployment**: Vercel for static hosting with CI/CD

## Library Usage Rules

### UI Components
1. **Always use Shadcn/ui components first** - These are pre-configured, accessible components that match our design system
2. **For complex interactions** (dropdowns, modals, etc.), use Radix UI primitives when Shadcn doesn't have a component
3. **Custom components** should follow the same patterns as Shadcn components (same props API, styling approach)

### Styling
1. **Tailwind CSS for all styling** - No CSS/SASS files except for global styles in `index.css`
2. **Custom utilities** go in `tailwind.config.ts` when reused across components
3. **Component-specific styles** should use the `className` prop with Tailwind classes

### State Management
1. **Server state**: Always use React Query (TanStack Query)
2. **Global client state**: Use React Context for app-wide state (theme, auth)
3. **Local component state**: useState/useReducer is fine for component-specific state

### Forms
1. **React Hook Form** for all form handling
2. **Zod** for schema validation
3. **Shadcn form components** (Input, Select, etc.) for consistent styling

### Routing
1. **React Router** for all navigation
2. **Route definitions** should be in `App.tsx`
3. **Dynamic routes** follow the `/path/:param` convention

### Best Practices
1. **Type everything** - No `any` types allowed
2. **Small, focused components** - Split components when they exceed 150 lines
3. **Component organization**:
   - Pages in `src/pages`
   - Components in `src/components`
   - Hooks in `src/hooks`
   - Utilities in `src/lib`
4. **Performance**:
   - Use React.memo for expensive components
   - Use useCallback/useMemo where appropriate
   - Lazy load non-critical components

### Adding New Dependencies
1. **Must be discussed** before adding
2. **Prefer existing solutions** over new dependencies
3. **Document** any new dependencies in this file