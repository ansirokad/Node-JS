const http = require("http");

const app = http.createServer((request, response) => {
    // response.writeHead(200,{"content-type" : "text/plain"});
    // response.write("create server custom using HTTP module");

    response.writeHead(200, { "content-type": "text/html" });
    const url = request.url;

    if (url == "/") {
        response.write(`

      <header style="background-color:#32134d; color:white; text-align:center; padding:20px;">
                <h1>Student Management System</h1>
                <nav>
                    <a href="/" style="color:white; margin:10px;">Home</a>
                    <a href="student" style="color:white; margin:10px;">Students</a>
                    <a href="subject" style="color:white; margin:10px;">Subjects</a>
                    <a href="exam" style="color:white; margin:10px;">Exams</a>
                    <a href="contact" style="color:white; margin:10px;">Contact</a>
                </nav>
            </header>
              <section style="background-color:#f4f4f9; padding:60px 20px; text-align:center;">

        <h1 style="color:#32134d; font-size:36px; font-style : ">
            Welcome to Student Management System!
        </h1>

        <p style="font-size:18px; color:#555; line-height:1.8;">
            Manage student records, subjects, marks and examination details in one place.
        </p>

        <p style="font-size:16px; color:#666;">
            Our system makes student information management simple and organized.
        </p>

        <a href="student" style="display:inline-block; background-color:#32134d; color:white; padding:12px 25px; margin-top:20px; text-decoration:none; border-radius:5px;">
            Explore Dashboard
        </a>

    </section>
            `)
    }
    else if (url == "/student") {
        response.write(`

              <header style="background-color:#32134d; color:white; text-align:center; padding:20px;">
                <h1>Student Management System</h1>
                <nav>
                    <a href="/" style="color:white; margin:10px;">Home</a>
                    <a href="student" style="color:white; margin:10px;">Students</a>
                    <a href="subject" style="color:white; margin:10px;">Subjects</a>
                    <a href="exam" style="color:white; margin:10px;">Exams</a>
                    <a href="contact" style="color:white; margin:10px;">Contact</a>
                </nav>
            </header>

            <section id="student" style="padding:20px; text-align:center;">
<h2>Dashboard Overview</h2>

        <div style="background-color:#e8ddf5; padding:15px; margin:10px;">
            <h3>Total Students</h3>
            <p>50 Registered Students</p>
        </div>

        <div id="subjects" style="background-color:#dceeff; padding:15px; margin:10px;">
            <h3>Total Subjects</h3>
            <p>5 Available Subjects</p>
        </div>

        <div id="exams" style="background-color:#dff5e5; padding:15px; margin:10px;">
            <h3>Total Exams</h3>
            <p>3 Examination Types</p>
        </div>
    </section>
            `)
    } else if (url == "/subject") {
        response.write(`
        <header style="background-color:#32134d; color:white; text-align:center; padding:20px;">
            <h1>Student Management System</h1>

            <nav>
                <a href="/" style="color:white; margin:10px;">Home</a>
                <a href="/student" style="color:white; margin:10px;">Students</a>
                <a href="/subject" style="color:white; margin:10px;">Subjects</a>
                <a href="/exam" style="color:white; margin:10px;">Exams</a>
                <a href="/contact" style="color:white; margin:10px;">Contact</a>
            </nav>
        </header>

        <section id="subject" style="background-color:#f4f4f9; padding:30px; text-align:center;">

            <h2 style="color:#32134d;">Our Subjects</h2>
            <p>Explore the subjects available in our school.</p>

            <div style="background-color:white; padding:20px; margin:15px; border-radius:10px;">
                <h3 style="color:#32134d;">Mathematics</h3>
                <p>Learn numbers, calculations and problem-solving.</p>
            </div>

            <div style="background-color:white; padding:20px; margin:15px; border-radius:10px;">
                <h3 style="color:#2878b5;">Science</h3>
                <p>Explore scientific concepts and discoveries.</p>
            </div>

            <div style="background-color:white; padding:20px; margin:15px; border-radius:10px;">
                <h3 style="color:#299653;">English</h3>
                <p>Improve reading, writing and communication skills.</p>
            </div>

            <div style="background-color:white; padding:20px; margin:15px; border-radius:10px;">
                <h3 style="color:#b56a16;">Computer</h3>
                <p>Learn computer fundamentals and technology.</p>
            </div>

            <div style="background-color:white; padding:20px; margin:15px; border-radius:10px;">
                <h3 style="color:#b52d50;">Social Studies</h3>
                <p>Understand history, geography and society.</p>
            </div>

        </section>
    `);
    } else if (url == "/exam") {
        response.write(`
               <header style="background-color:#32134d; color:white; text-align:center; padding:20px;">
                <h1>Student Management System</h1>
                <nav>
                    <a href="/" style="color:white; margin:10px;">Home</a>
                    <a href="student" style="color:white; margin:10px;">Students</a>
                    <a href="subject" style="color:white; margin:10px;">Subjects</a>
                    <a href="exam" style="color:white; margin:10px;">Exams</a>
                    <a href="contact" style="color:white; margin:10px;">Contact</a>
                </nav>
            </header>

            <section id="exams" style="background-color:#f4f4f9; padding:30px; text-align:center;">

        <h2 style="color:#32134d;">Examination Types</h2>
        <p>Manage examinations and student performance.</p>

        <div style="background-color:white; padding:20px; margin:15px; border-radius:10px; border-left:5px solid #32134d;">
            <h3 style="color:#32134d;">Class Exam</h3>
            <p>Examinations conducted in the classroom.</p>
        </div>

        <div style="background-color:white; padding:20px; margin:15px; border-radius:10px; border-left:5px solid #2878b5;">
            <h3 style="color:#2878b5;">Online Exam</h3>
            <p>Examinations conducted through online platforms.</p>
        </div>

        <div style="background-color:white; padding:20px; margin:15px; border-radius:10px; border-left:5px solid #299653;">
            <h3 style="color:#299653;">Missed Exam</h3>
            <p>Examinations that students were unable to attend.</p>
        </div>

    </section>
            `)
    } else if (url == "/contact") {
        response.write(`
            <header style="background-color:#32134d; color:white; text-align:center; padding:20px;">
                <h1>Student Management System</h1>
                <nav>
                    <a href="/" style="color:white; margin:10px;">Home</a>
                    <a href="student" style="color:white; margin:10px;">Students</a>
                    <a href="subject" style="color:white; margin:10px;">Subjects</a>
                    <a href="exam" style="color:white; margin:10px;">Exams</a>
                    <a href="contact" style="color:white; margin:10px;">Contact</a>
                </nav>
            </header>

            <section id="contact" style="background-color:#f4f4f9; padding:30px; text-align:center;">

        <h2 style="color:#32134d;">Contact Us</h2>
        <p>If you have any questions, please contact us.</p>

        <div style="background-color:white; padding:25px; margin:15px auto; max-width:500px; border-radius:10px; text-align:left;">

            <h3 style="color:#32134d; text-align:center;">Get In Touch</h3>

            <p><strong>School Name:</strong> Student Management School</p>

            <p><strong>Email:</strong> studentpro@example.com</p>

            <p><strong>Phone:</strong> +91 98765 43210</p>

            <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>

        </div>

        <div style="background-color:white; padding:25px; margin:15px auto; max-width:500px; border-radius:10px;">

            <h3 style="color:#32134d;">Send Us a Message</h3>

            <form>
                <input type="text" placeholder="Enter Your Name" 
                style="width:90%; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px;" required>

                <input type="email" placeholder="Enter Your Email" 
                style="width:90%; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px;" required>

                <textarea placeholder="Enter Your Message" rows="4"
                style="width:90%; padding:12px; margin:10px; border:1px solid #ccc; border-radius:5px;" required></textarea>

                <button type="submit" 
                style="background-color:#32134d; color:white; padding:12px 25px; border:none; border-radius:5px; cursor:pointer;">
                    Submit
                </button>
            </form>

        </div>

    </section>
            `);
    } else {
        response.write(`
           <div style="font-family:Arial, sans-serif; background-color:#f4f4f9; min-height:100vh; display:flex; justify-content:center; align-items:center; text-align:center;">

    <div style="background-color:white; padding:50px; border-radius:15px; box-shadow:0 5px 20px rgba(0,0,0,0.1); max-width:500px;">

        <h1 style="font-size:70px; color:#32134d; margin:0;">404</h1>

        <h2 style="color:#333; margin-top:10px;">Page Not Found</h2>

        <p style="color:#666; font-size:16px; line-height:1.6;">
            Sorry, the page you are looking for does not exist.
            Please check the URL or return to the home page.
        </p>

        <a href="/" style="display:inline-block; background-color:#32134d; color:white; padding:12px 25px; text-decoration:none; border-radius:6px; margin-top:15px;">
            Go to Home Page
        </a>

    </div>

</div>
        `);
    }

    response.end();

});

app.listen(3000);