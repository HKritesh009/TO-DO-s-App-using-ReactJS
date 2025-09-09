# 📝 React Todo App

A simple and interactive **Todo App** built with React and Vite.  
This project demonstrates how to manage **state in React**, update arrays immutably, and build a clean task management UI with modern styling.

---

##  Features
- ➕ Add new tasks  
- ✅ Mark tasks as completed (with strikethrough effect)  
- 🗑️ Delete individual tasks or delete all at once  
- 🔠 Mark All task as Completed  
- ⚡ Built with **React + Vite** for fast development  

---

## 🛠️ Tech Stack
- **React** (UI + state management with hooks)  
- **Vite** (development & bundling)  
- **UUID** (unique IDs for tasks)  
- **CSS** (custom styling with flexbox and hover effects)  

---

## 📦 Installation & Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2.Installation & Setup

**Install dependencies:**
```bash
npm install
```

3.Start development server:
```bash
npm run dev
```

```bash
Open http://localhost:5173
```

## 🧑‍💻 Understanding State Management

This project uses React’s useState hook to manage tasks.
We store tasks in an array of objects where each object looks like:
```

{ task: "Learn React", id: "unique-id", completed: false }

```

### 🔹 Adding to State

We always update state immutably using the spread operator:
```
setTasks([...Tasks, newTask]);
```

### 🔹 Deleting from State

Filter out the unwanted task:
```
setTasks(Tasks.filter(task => task.id !== id));
```

### 🔹 Updating an Item

Use map to return a new array:
```
setTasks(Tasks.map(task =>
  task.id === id ? { ...task, completed: true } : task
));
```


### 📌 React requires immutability — we never mutate the array directly (e.g., Tasks.push(...) or Tasks.length = 0).
Instead, we always create a new array and update state using setTasks.


## 📚 Learning Outcomes

How to manage arrays in React state

Updating state immutably with map, filter, and spread (...)

Using uuid for unique keys in lists

Styling a React app with CSS

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📜 License

This project is licensed under the MIT License.

---

## 👉 This README is **clean, explains features + teaches about state arrays**.  
Created by **Ritesh Dhurve**

