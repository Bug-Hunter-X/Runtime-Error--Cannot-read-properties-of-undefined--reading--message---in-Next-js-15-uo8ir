```javascript
// pages/aboutSolution.js
export default function About() {
  // Solution: Use optional chaining and nullish coalescing
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{data?.message ?? 'Message not available'}</p>
    </div>
  );
}
```