
export const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login page UI",
        taskDate: "2026-03-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-03-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login with backend API",
        taskDate: "2026-03-07",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2026-03-11",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer",
        taskDescription: "Correct footer responsiveness",
        taskDate: "2026-03-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Testing Forms",
        taskDescription: "Validate form inputs",
        taskDate: "2026-03-06",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Colors",
        taskDescription: "Change UI theme colors",
        taskDate: "2026-03-12",
        category: "Design"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Develop employee profile page",
        taskDate: "2026-03-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issue",
        taskDescription: "Correct layout spacing",
        taskDate: "2026-03-04",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB schema",
        taskDate: "2026-03-03",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Sidebar",
        taskDescription: "Create responsive sidebar",
        taskDate: "2026-03-13",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading",
        taskDate: "2026-03-02",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Dark Mode",
        taskDescription: "Add dark theme support",
        taskDate: "2026-03-15",
        category: "Feature"
      }
    ]
  },

  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription: "Develop report dashboard",
        taskDate: "2026-03-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Button Styles",
        taskDescription: "Correct button hover effects",
        taskDate: "2026-03-01",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to hosting server",
        taskDate: "2026-02-28",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Notifications",
        taskDescription: "Implement notification system",
        taskDate: "2026-03-16",
        category: "Feature"
      }
    ]
  }
]
export const admin =[
   {
    id: 3,
    firstName: "Priya",
    email: "admin@gmail.com",
    password: "123",
  },
    {
    id: 35,
    firstName: "riya",
    email: "admin2@gmail.com",
    password: "123",
  }

]
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
   
}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
     return  {employees,admin}
     
}