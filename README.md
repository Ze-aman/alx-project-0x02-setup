# alx-project-0x02-setup

This project serves as a comprehensive starter template for a modern web application, built using **Next.js** with **TypeScript** for type safety and **Tailwind CSS** for rapid styling.

It showcases core Next.js concepts, including the Pages Router, component reusability, state management, and Server-Side Rendering (SSR) for data fetching.

## Technology Stack

* **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Linting:** [ESLint](https://eslint.org/)
* **State/Data:** React Hooks (`useState`)
* **Data Fetching:** `getServerSideProps` (SSR)

## ✨ Features Implemented

The project demonstrates the following key functionalities:

1.  **Basic Routing:** Pages `/`, `/home`, `/about`, `/posts`, and `/users` accessible via the Pages Router.
2.  **Reusable Components:**
    * **`Card.tsx`:** Basic reusable component consuming dynamic `title` and `content` props.
    * **`Button.tsx`:** Highly configurable button accepting `size` and `shape` props via TypeScript types.
3.  **Client-Side State Management:**
    * **`PostModal.tsx`:** A controlled modal component that accepts user input and passes the data back to the parent (`/home`) to dynamically update the displayed content.
4.  **Server-Side Rendering (SSR):**
    * **`/posts` page:** Uses `getServerSideProps` to fetch posts from JSONPlaceholder and renders them using the **`PostCard`** component.
    * **`/users` page:** Uses `getServerSideProps` to fetch user data and renders complex details using the **`UserCard`** component.
