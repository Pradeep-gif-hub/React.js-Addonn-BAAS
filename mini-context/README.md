# React Context API

- The Context API is a powerful feature in React that allows you to share data across multiple components without having to pass props manually at every level.
- Think of it as a “global storage” inside your React app for specific data ( like user info, theme, authentication state, language settings, etc ).

# Context API = Global Data Sharing in React without prop drilling.

- Main Reasons Why Context API Is Used
To avoid prop drilling
Without Context: App → Header → Navbar → Profile → Username
With Context: App → Username (directly, no middle steps needed )

- LIKE the card div is directly fetched Globally from the Context API 

**To manage global state easily**

**For example: user authentication, dark/light theme, language settings, cart items in an e-commerce site, etc.**

- You don’t have to pass the same props again and again to share data between unrelated components

- Even if two components are not parent–child, Context can connect them.

- Lightweight alternative to complex libraries.
The ClassName is changes as per the function and accordingly the setTheme through the Hook UseState is called....

- In small and medium apps, it can replace state management libraries like **REDUX** Redux ToolKit of REACT as **RTK**, **ZuStand**
 are two famous **state management solutions**

 **Simple Example Use Cases**

```

1. Logged-in user info (name, email, role) shared with navbar, profile, and dashboard.

2. Dark/light theme setting used across the whole app.

3. Language or localization setting.

4. Shopping cart in an online store.

