  // SQL exercises data
  export const exercises = {
    easy: [
      { id: 1, title: "Create a new database named CompanyDB", category: "Database Basics" },
      { id: 2, title: "Create a table Employees with EmpID, Name, Department, Salary", category: "Database Basics" },
      { id: 3, title: "Insert 5 records into Employees", category: "Database Basics" },
      { id: 4, title: "Fetch all records from Employees", category: "Database Basics" },
      { id: 5, title: "Fetch only Name and Salary from Employees", category: "Database Basics" },
      { id: 6, title: "Fetch distinct Department names from Employees", category: "Database Basics" },
      { id: 7, title: "Filter employees whose salary is more than 50000", category: "Database Basics" },
      { id: 8, title: "List employees in the \"HR\" department", category: "Database Basics" },
      { id: 9, title: "Sort employees by salary descending", category: "Database Basics" },
      { id: 10, title: "Sort employees by name alphabetically", category: "Database Basics" },
      { id: 11, title: "Find employees whose name starts with 'A'", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 12, title: "Find employees whose salary is between 40000 and 60000", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 13, title: "Find employees in departments \"IT\" or \"Finance\"", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 14, title: "Find employees with NULL salary", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 15, title: "Find employees without NULL salary", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 16, title: "Update salary to 55000 for employee named 'John'", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 17, title: "Delete employees whose salary is less than 30000", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 18, title: "Rename table Employees to Staff", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 19, title: "Add a new column JoiningDate to Staff", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 20, title: "Drop column JoiningDate from Staff", category: "WHERE, LIKE, BETWEEN, IN, IS NULL" },
      { id: 21, title: "Find the total number of employees", category: "Basic Functions" },
      { id: 22, title: "Find the highest salary", category: "Basic Functions" },
      { id: 23, title: "Find the lowest salary", category: "Basic Functions" },
      { id: 24, title: "Find the average salary", category: "Basic Functions" },
      { id: 25, title: "Count employees in each department (GROUP BY)", category: "Basic Functions" },
      { id: 26, title: "Find the total salary given by each department", category: "Basic Functions" },
      { id: 27, title: "Display employee names in UPPERCASE", category: "Basic Functions" },
      { id: 28, title: "Display employee names in lowercase", category: "Basic Functions" },
      { id: 29, title: "Round the average salary to 2 decimal places", category: "Basic Functions" },
      { id: 30, title: "Concatenate Name and Department into a single column", category: "Basic Functions" },
      { id: 31, title: "Create a table Departments with DeptID as PRIMARY KEY", category: "Constraints and Keys" },
      { id: 32, title: "Create Employees table with FOREIGN KEY from Departments", category: "Constraints and Keys" },
      { id: 33, title: "Insert sample departments into Departments", category: "Constraints and Keys" },
      { id: 34, title: "Insert sample employees linking with departments", category: "Constraints and Keys" },
      { id: 35, title: "Find employees along with their department name using JOIN", category: "Constraints and Keys" },
      { id: 36, title: "Alter table to add NOT NULL constraint to Name", category: "Constraints and Keys" },
      { id: 37, title: "Add a UNIQUE constraint to Email column", category: "Constraints and Keys" },
      { id: 38, title: "Drop UNIQUE constraint on Email", category: "Constraints and Keys" },
      { id: 39, title: "Create a CHECK constraint that salary > 0", category: "Constraints and Keys" },
      { id: 40, title: "Create a DEFAULT value for JoiningDate column", category: "Constraints and Keys" },
    ],
    medium: [
      { id: 41, title: "Write an INNER JOIN between Employees and Departments", category: "JOINS" },
      { id: 42, title: "Write a LEFT JOIN to list all employees even if no department", category: "JOINS" },
      { id: 43, title: "Write a RIGHT JOIN to list all departments even if no employees", category: "JOINS" },
      { id: 44, title: "Write a FULL OUTER JOIN (if your DBMS supports)", category: "JOINS" },
      { id: 45, title: "List employees without any department (using LEFT JOIN + NULL)", category: "JOINS" },
      { id: 46, title: "Join 3 tables together (Employees, Departments, Projects)", category: "JOINS" },
      { id: 47, title: "Create a SELF JOIN to show employee managers", category: "JOINS" },
      { id: 48, title: "Find department with maximum number of employees", category: "JOINS" },
      { id: 49, title: "List employees and their department names sorted by department", category: "JOINS" },
      { id: 50, title: "Find departments without any employees", category: "JOINS" },
      { id: 51, title: "Find employees whose salary is greater than average salary", category: "SUBQUERIES" },
      { id: 52, title: "Find employees working in departments having more than 5 employees", category: "SUBQUERIES" },
      { id: 53, title: "Find the second highest salary (without using LIMIT/OFFSET)", category: "SUBQUERIES" },
      { id: 54, title: "Find employees whose salary is highest in their department", category: "SUBQUERIES" },
      { id: 55, title: "Find departments having no employees using NOT EXISTS", category: "SUBQUERIES" },
      { id: 56, title: "Fetch employees who earn more than all employees in \"HR\" department", category: "SUBQUERIES" },
      { id: 57, title: "Use correlated subquery to find employees earning more than department average", category: "SUBQUERIES" },
      { id: 58, title: "Use IN operator with subquery to fetch employees of selected departments", category: "SUBQUERIES" },
      { id: 59, title: "Create a subquery in FROM clause", category: "SUBQUERIES" },
      { id: 60, title: "Create a subquery in SELECT clause", category: "SUBQUERIES" },
      { id: 61, title: "Find average salary by department", category: "AGGREGATE FUNCTIONS" },
      { id: 62, title: "Find the total salary department wise", category: "AGGREGATE FUNCTIONS" },
      { id: 63, title: "Find minimum and maximum salary department wise", category: "AGGREGATE FUNCTIONS" },
      { id: 64, title: "Find count of employees in each department and order by count descending", category: "AGGREGATE FUNCTIONS" },
      { id: 65, title: "Find departments where average salary > 60000", category: "AGGREGATE FUNCTIONS" },
      { id: 66, title: "Find number of employees with salary > 50000", category: "AGGREGATE FUNCTIONS" },
      { id: 67, title: "Calculate department wise employee salary percentage compared to total", category: "AGGREGATE FUNCTIONS" },
      { id: 68, title: "Use HAVING to filter departments with more than 3 employees", category: "AGGREGATE FUNCTIONS" },
      { id: 69, title: "Find employees grouped by first letter of their name", category: "AGGREGATE FUNCTIONS" },
      { id: 70, title: "Find employee count where salary range is (low, mid, high)", category: "AGGREGATE FUNCTIONS" },
      { id: 71, title: "Create a view showing Employee Name and Department", category: "VIEWS and Indexes" },
      { id: 72, title: "Create a view to show high salary employees (>70000)", category: "VIEWS and Indexes" },
      { id: 73, title: "Update a view (if possible) to modify a record", category: "VIEWS and Indexes" },
      { id: 74, title: "Drop a view", category: "VIEWS and Indexes" },
      { id: 75, title: "Create an index on Salary column", category: "VIEWS and Indexes" },
      { id: 76, title: "Create a composite index on DepartmentID and Salary", category: "VIEWS and Indexes" },
      { id: 77, title: "Check all indexes created on a table", category: "VIEWS and Indexes" },
      { id: 78, title: "Drop an index", category: "VIEWS and Indexes" },
      { id: 79, title: "Find query execution plan (EXPLAIN)", category: "VIEWS and Indexes" },
      { id: 80, title: "Analyze query performance using EXPLAIN PLAN", category: "VIEWS and Indexes" },
    ],
    hard: [
      { id: 81, title: "Start a transaction to insert two employees", category: "Transactions and Triggers" },
      { id: 82, title: "Commit a transaction after successful insert", category: "Transactions and Triggers" },
      { id: 83, title: "Rollback a transaction after an error", category: "Transactions and Triggers" },
      { id: 84, title: "Create a trigger to log inserts into another table", category: "Transactions and Triggers" },
      { id: 85, title: "Create a BEFORE INSERT trigger to validate salary", category: "Transactions and Triggers" },
      { id: 86, title: "Create an AFTER UPDATE trigger to store previous values", category: "Transactions and Triggers" },
      { id: 87, title: "Create a trigger to prevent deleting CEO from Employees", category: "Transactions and Triggers" },
      { id: 88, title: "Disable a trigger", category: "Transactions and Triggers" },
      { id: 89, title: "Enable a trigger", category: "Transactions and Triggers" },
      { id: 90, title: "Drop a trigger", category: "Transactions and Triggers" },
      { id: 91, title: "Create a CTE to list top 5 highest salary employees", category: "CTEs (Common Table Expressions)" },
      { id: 92, title: "Create a recursive CTE for employee-manager hierarchy", category: "CTEs (Common Table Expressions)" },
      { id: 93, title: "Create a CTE to calculate running totals of salary", category: "CTEs (Common Table Expressions)" },
      { id: 94, title: "Use multiple CTEs in a single query", category: "CTEs (Common Table Expressions)" },
      { id: 95, title: "Use CTE with JOIN to fetch combined data", category: "CTEs (Common Table Expressions)" },
      { id: 96, title: "Use ROW_NUMBER() to give rank to employees based on salary", category: "Window Functions + Advanced" },
      { id: 97, title: "Use RANK() and DENSE_RANK() to show salary ranks", category: "Window Functions + Advanced" },
      { id: 98, title: "Use LEAD() and LAG() to compare employee salaries", category: "Window Functions + Advanced" },
      { id: 99, title: "Use PARTITION BY with window functions", category: "Window Functions + Advanced" },
      { id: 100, title: "Create an advanced query using CTE + window function + join", category: "Window Functions + Advanced" },
    ]
  };
