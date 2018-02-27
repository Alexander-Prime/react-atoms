This is a collection of atoms I've found myself writing several times, often slightly differently. They:

* Use CSS modules, to avoid collision with the host app's styles
* Include a `className` attribute, to apply custom styling
* Come with TypeScript typings for their `props`
* Are intentionally very simple; they are all pure functions, with no side-effects or internal persistent state
* Are based loosely on Material Design, but may deviate

## Installation

```sh
npm install "Alexander-Prime/react-atoms#semver:0.1"
```

## Usage

```tsx
import { Card } from "react-atoms";

// In your own component's render()
<Card className="custom-card">
  <MyComponent />
</Card>
```