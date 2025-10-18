# React Hooks  Note

React Hooks are special functions that let you use state, side effects, references, and memoization in functional components. They provide a clean and efficient way to manage component logic without using class components.

---

## useState
`useState` allows functional components to maintain **state variables**. It provides a state value and a function to update it. When the state changes, the component re-renders automatically. This hook is essential for storing dynamic values like counters, input fields, or toggles in a component.

```jsx

import React, { useState, useCallback, useEffect, useRef } from 'react';

export default function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [password, setPassword] = useState('');
}

```

---

## useEffect
`useEffect` is used to perform **side effects** in functional components. Side effects include fetching data, subscribing to events, updating the DOM, or running code after a render. It can run after every render or only when specified dependencies change. This hook ensures components stay in sync with external systems or data.

- used mainly when due on any of the **DEPENDENCIES**, the Method has to Run again and again...
- like here in the example the **generatePassword()** is being called each and every time change in **GeneratePassword** dependencies varies... 

```jsx

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    passwordRef.current.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

```
---

## useRef ( Stores a persistent reference/value )
`useRef` creates a **persistent reference** that does not trigger re-renders. It is primarily used to access **DOM elements directly** or store mutable values across renders. This hook is useful for focusing inputs, storing previous values, or controlling animations without affecting the component’s render cycle.


```jsx
import React, { useState, useCallback, useEffect, useRef } from 'react';

export default function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null); // Here UseRef used as the memory to store a persistent reference/value

  const generatePassword = useCallback(() => {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) base += '0123456789';
    if (includeChars) base += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += base[Math.floor(Math.random() * base.length)];
    }
    setPassword(pass);
  }, [length, includeNumbers, includeChars]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0,5); used for providing with ranges.
    window.navigator.clipboard.writeText(password); // permission to clipboard for saving password ( writeText) 
    alert('Password copied to clipboard !');
  };
}

```
---

## useCallback (Memoizes a function )

`useCallback` **memoizes functions**, preventing them from being recreated on every render. It is helpful when passing functions as props or using them in dependencies to avoid unnecessary re-renders. This improves performance and ensures function references remain stable.

- useCallback()=> { function,[All the dependencies]}

```jsx
const generatePassword = useCallback(() => {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) base += '0123456789';
    if (includeChars) base += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += base[Math.floor(Math.random() * base.length)];
    }
    setPassword(pass);
  }, [length, includeNumbers, includeChars]);


```


---

These hooks form the core of modern React functional programming, enabling **state management, side effects handling, DOM referencing, and optimized function usage**, making components more efficient and maintainable.
