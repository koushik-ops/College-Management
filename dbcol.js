const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Koushik460",
    database: "college2"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // ===========================
    // CREATE TABLES
    // ===========================

    connection.query(`
    CREATE TABLE IF NOT EXISTS faculty(
        FacultyName VARCHAR(30),
        Subject VARCHAR(30),
        Experience VARCHAR(20)
    )`, function (err, result) {
        if (err) throw err;
        console.log("Faculty Table Created");
    });

    connection.query(`
    CREATE TABLE IF NOT EXISTS library_details(
        LID INT,
        LibraryName VARCHAR(30)
    )`, function (err, result) {
        if (err) throw err;
        console.log("Library Table Created");
    });

    connection.query(`
    CREATE TABLE IF NOT EXISTS marks(
        StudentName VARCHAR(30),
        English INT,
        Maths INT,
        Science INT
    )`, function (err, result) {
        if (err) throw err;
        console.log("Marks Table Created");
    });

    // ===========================
    // INSERT 5 RECORDS
    // ===========================

    connection.query(`
    INSERT INTO faculty VALUES
    ('Prof. Samir','Maths','2 Years'),
    ('Prof. Amir','Science','4 Years'),
    ('Prof. Arvind','English','5 Years'),
    ('Prof. Paratik','Computer','6 Years'),
    ('Prof. Sneha','Physics','3 Years')
    `, function (err, result) {
        if (err) throw err;
        console.log("Faculty Data Inserted");
    });

    connection.query(`
    INSERT INTO library_details VALUES
    (101,'Central Library'),
    (102,'Science Library'),
    (103,'Computer Library'),
    (104,'Reference Library'),
    (105,'Digital Library')
    `, function (err, result) {
        if (err) throw err;
        console.log("Library Data Inserted");
    });

    connection.query(`
    INSERT INTO marks VALUES
    ('Shivani',47,42,75),
    ('Amir',78,74,56),
    ('Arvind',84,47,58),
    ('Parth',48,56,87),
    ('Sneha',91,88,95)
    `, function (err, result) {
        if (err) throw err;
        console.log("Marks Data Inserted");
    });

    // ===========================
    // DISPLAY ALL RECORDS
    // ===========================

    connection.query("SELECT * FROM faculty", function (err, result) {
        if (err) throw err;
        console.log("\n----- FACULTY -----");
        console.log(result);
    });

    connection.query("SELECT * FROM library_details", function (err, result) {
        if (err) throw err;
        console.log("\n----- LIBRARY -----");
        console.log(result);
    });

    connection.query("SELECT * FROM marks", function (err, result) {
        if (err) throw err;
        console.log("\n----- MARKS -----");
        console.log(result);
    });

    // ===========================
    // DELETE RECORDS
    // ===========================

    connection.query(
        "DELETE FROM faculty WHERE FacultyName='Prof. Paratik'",
        function (err, result) {
            if (err) throw err;
            console.log("\nFaculty Record Deleted");
        }
    );

    connection.query(
        "DELETE FROM library_details WHERE LID=105",
        function (err, result) {
            if (err) throw err;
            console.log("Library Record Deleted");
        }
    );

    connection.query(
        "DELETE FROM marks WHERE StudentName='Shivani'",
        function (err, result) {
            if (err) throw err;
            console.log("Marks Record Deleted");
        }
    );

    // ===========================
    // SELECT PARTICULAR COLUMNS
    // ===========================

    connection.query(
        "SELECT StudentName, English FROM marks",
        function (err, result) {
            if (err) throw err;
            console.log("\nStudent Name & English");
            console.log(result);
        }
    );

    connection.query(
        "SELECT FacultyName, Experience FROM faculty",
        function (err, result) {
            if (err) throw err;
            console.log("\nFaculty Name & Experience");
            console.log(result);
        }
    );

    connection.query(
        "SELECT LibraryName FROM library_details",
        function (err, result) {
            if (err) throw err;
            console.log("\nLibrary Name");
            console.log(result);
        }
    );

    connection.end();
});
