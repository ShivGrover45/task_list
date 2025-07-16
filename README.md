---

```markdown
# 📝 Task List API

A simple Task List backend API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose** for database modeling. This project allows you to create, retrieve, update, and delete tasks — a clean introduction to building REST APIs with MongoDB.

## 🚀 Features

- Add new tasks  
- Fetch all tasks  
- Mark tasks as complete  
- Delete tasks  
- Uses MongoDB as the database  
- Follows a simple MVC structure

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) for development

## 📂 Project Structure

```

task\_list/
│
├── model/
│   └── task.js            # Task schema (Mongoose)
│
├── routes/
│   └── task.js            # Routes for handling task CRUD
│
├── .gitignore             # Ignored files and folders
├── index.js               # Main entry point
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation

````

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShivGrover45/task_list.git
   cd task_list
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start your MongoDB server**

   Make sure MongoDB is running locally on `mongodb://localhost:27017`.

4. **Run the server**

   ```bash
   npm run dev
   ```

   The server should now be running at:
   [http://localhost:3000](http://localhost:3000)

## 🧪 API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/`          | Returns welcome message |
| GET    | `/tasks`     | Get all tasks           |
| POST   | `/tasks`     | Add a new task          |
| PUT    | `/tasks/:id` | Mark task as completed  |
| DELETE | `/tasks/:id` | Delete a task           |

### 📌 Example Task Object

```json
{
  "task": "Complete the project"
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [Shiv Grover](https://github.com/ShivGrover45) 💻



