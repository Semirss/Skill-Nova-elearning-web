import './css/bootstrap.min.css'
import './css/style.css';

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    navbar: {
      display: "inline-flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "1rem 2rem",
      backgroundColor: "#000",
      
    },
    
    btn: {
      margin: "0",
      padding:"5px",
      borderRadius:"5px",
      width: "5rem",
      backgroundColor: "#f0f0f0",
      color: "#000",
      marginTop: "-10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
    },
    
    btn2: {
      marginLeft: "-6px",
      padding:"5px",
      borderRadius:"5px",
      width: "5rem",
      marginTop: "-10px",
      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
      backgroundColor: "#4fafff",
      color: "#000",
      
    },
    
    logo: {
      fontSize: "1.7rem",
      fontWeight: "bold",
      color: "#fff",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
    },
    link: {
      color: "#fff",
      
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    heroSection: {
      position: "relative",
      width: "100%",
      height: "80vh",
      backgroundImage: "url('public/assets/dashimages/ffgh.webp')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      padding: "2rem",
    },
    heroText: {
      position: "relative",

      color: "#fff",
      fontSize: "2.5rem",
      fontWeight: "bold",
      textShadow: "0px 4px 6px rgba(0,0,0,0.5)",
      width: "40%",
    },
    subText: {
      width: "30%",
      fontSize: "1.2rem",
      marginTop: "0.5rem",
      color: "#fffff",
      textAlign: "start",
      textShadow: "0px 4px 6px rgba(0,0,0,0.5)",
    },
    scheduleSection: {
      display: "flex",
      width: "100%",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      gap: "7%",
      padding: "2rem",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "",
    },
    btn4: {
      marginLeft: "7%",
      height: "45px",
      width: "8rem",
      backgroundColor: "#f0f0f0",
      color: "#000",
      marginTop: "10px",
      boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)",
    },
    scheduleCard: {
      backgroundColor: "#333",
      padding: "3rem",
      borderRadius: "24px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      backgroundImage: "url(public/assets/dashimages/l3.jfif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "#fff",
    },
    scheduleCard2: {
      backgroundColor: "#333",
      padding: "3rem",
      borderRadius: "24px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      backgroundImage: "url(public/assets/dashimages/l2.jfif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "#fff",
    },
    cardTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    nowShowingSection: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "1rem",
      padding: "2rem",
      backgroundColor: "#000",
      color: "#fff",
    },
    nowShowingCard: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      gap: "1rem",
    },
    nowShowingImage: {
      width: "200px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    nowShowingDetails: {
      flex: 1,
    },
    nowShowingTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  };
  const footerStyles = {
    container: {
      backgroundColor: "#000",
      width: "100%",
      marginLeft: "-14px",
      padding: "2rem 1rem",
      borderTop: "1px solid #ddd",
      marginTop: "0px",

    },
    innerContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 2fr 2fr",
      gap: "1rem",
      maxWidth: "1200px",
      margin: "0 auto",

    },
    logoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      
    },
    logoIcons: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "1rem",
      
    },
    logoIcon: {
      fontSize: "1.5rem",
      color: "#fff",
      cursor: "pointer",
    },
    column: {
      textAlign: "left",
      color: "#fff",
    },
    columnHeading: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#fff",

    },
    columnItem: {
      fontSize: "0.9rem",
      color: "#fff",

      marginBottom: "0.5rem",
      cursor: "pointer",
      color: "#b4b4b4",
    },
    columnItemHover: {
      textDecoration: "#fff",
    },
  };
  const cstyles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "100%",
      width: "100%",
      margin: "0 auto",
      backgroundColor: "#b4b4b4",

      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#000",
    },
    headingTitle: {
      fontSize: "2rem",
      margin: 0,
      fontWeight: "bold",
    },
    headingSub: {
      color: "#000",
      marginTop: "5px",
      fontSize: "1rem",
    },
    form: {
      display: "flex",
      marginLeft: "10%",
     justifyContent: "center",
      gap: "15px",
    },
    label: {
      fontWeight: "bold",
      color: "#000",
      marginBottom: "5px",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    // textarea: {
    //   padding: "10px",
    //   fontSize: "1rem",
    //   borderRadius: "5px",
    //   border: "1px solid #ddd",

    // },
    button: {
      width: "100px",
      height: "40px",
      marginTop: "33px",
      padding: "5px",
      fontSize: "1rem",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  
  return (
  <>
    <div style={styles.container}>
      {/* Navbar */}
      <nav className="navbar" style={styles.navbar}>
        <div style={styles.logo}> Skill Nova</div>
        <div style={styles.navLinks}>
          <a href="/" style={styles.link}>
            Home
          </a>
       
          <a href="#reviews" style={styles.link}>
           Reviews
          </a>
          <a href="#about" style={styles.link}>
            About us
          </a>
          <a href="#contacts " style={styles.link}>
            Contact
          </a>
          <a href="/sign-up"><button style={styles.btn}>Sign up</button></a>
          <a href="/sign-in"><button style={styles.btn2}>Log in</button></a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroText}>Skill Nova</h1>
        <p style={styles.subText}>
          Get started with our non degree <br /> e-learning programs. signup and start
          your journey <hr />
        </p>
       <a className="btn btn-secondary py-3 px-5 mt-3" href="/sign-up"><button >Sign up</button></a> 
      </div>
      <>
  {/* About Start */}
  <div className="container-xxl py-6" id="about">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="d-flex align-items-center mb-5">
            <div className="years flex-shrink-0 text-center me-4">
              <h1 className="display-1 mb-0">01</h1>
              <h5 className="mb-0">Day</h5>
            </div>
            <h3 className="lh-base mb-0">
            Welcome to Day 1 <br />of Your Learning Journey! 🚀
            </h3>
          </div>
          <p className="mb-4">
          Hi there! 👋 We're thrilled to have you here as you embark on this exciting adventure with us. Today is all about setting the tone for your success and unlocking the potential within you. <br />

Whether you're here to learn something new, sharpen your skills, or chase your dreams, remember that every expert once started as a beginner. Take one step at a time, and don’t forget to celebrate the small victories along the way! 🎉
<hr />
Here's what you can do today: <br />
✅ Explore your learning dashboard. <br />
✅ Set your goals for the week. <br />
✅ Dive into your first lesson and start making progress!
          </p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3" />
            Free cources
          </p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3" />
            Big community
          </p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3" />
            peer to peer learning
          </p>
          <a className="btn btn-primary py-3 px-5 mt-3" href="">
            Read More
          </a>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="row g-3 mb-4">
            <div className="col-sm-6">
              <img className="img-fluidrounded" src="public/assets/dashimages/12.jpg" alt="" />
            </div>
            <div className="col-sm-6">
              <img className="img-fluidrounded" src="public/assets/dashimages/14.jpg" alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="border-end pe-3 me-3 mb-0">Students Enrolled</h5>
            <h2 className=" fw-bold mb-0" >
              OVER 1MILL
            </h2>
          </div>
          <p className="mb-4">
          Join a Growing Community of Learners! 🌟
Thousands of students have already taken the leap and are transforming their lives with SkillNova. Now it’s your turn! <br />

📚 Why wait? Enroll now and start learning today! <hr />

We can’t wait to see you <a style={{color:"#5097fb"}} href="/sign-up">inside!</a>
– The SkillNova Team 
          </p>
          <div className="d-flex align-items-center mb-3">
            <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
            <h2 className="fw-bold mb-0" >
              +100
            </h2>
          </div>
          <p className="mb-0">
          
At SkillNova, our learners don’t just study – they create, build, and achieve. 🎓 Over 100 projects have been successfully completed by our students, ranging from innovative tech solutions to inspiring creative works. <br />
<hr />
Here’s a glimpse of what our learners have accomplished: <br />
🔹 A mobile app that simplifies daily tasks.<br />
🔹 A stunning portfolio website that landed a dream job.<br />
🔹 A data analysis project that solved real-world business challenges.<br />

💡 Whether you're developing your first project or refining advanced skills, 

 Enroll today and bring your ideas to life!

We can’t wait to celebrate your success!
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="container-fluid  my-5 py-6" id="service">
    <div className="container">
      <div className=" row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-6">
          <h1 className="display-5 mb-0">COURCES</h1>
        </div>
        <div className="col-lg-6 text-lg-end">
          <a className="btn btn-primary py-3 px-5" href="/sign-up">
            Enroll Now
          </a>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icon flex-shrink-0 mb-3">
              <i className="fa fa-crop-alt fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">HTML-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Learn the foundation of the web by building structured, accessible, and semantic web pages with HTML. <hr />
              </span>
              <h6 className="mb-3">
                <a className="text-primary" href='/sign-up'>Start Now</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icon2 flex-shrink-0 mb-3">
              <i className="fa fa-code-branch fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">CSS-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Master the art of styling with CSS to create visually appealing layouts, responsive designs, and stunning user interfaces. <hr />
              </span>
              <h6 className="mb-3">
              <a className="text-primary" href='/sign-up'>Start Now</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icon3 flex-shrink-0 mb-3">
              <i className="fa fa-code fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">PHP-COURSES</h4>
              
              <span style={{color:"#000"}}>
              Dive into server-side scripting with PHP and create dynamic, data-driven websites and applications. <hr />
              </span>
              <h6 className="mb-3">
              <a className="text-primary" href='/sign-up'>Start Now</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icon4 flex-shrink-0 mb-3">
              <i className="fa fa-laptop-code fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">JAVA SCRIPT-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Bring your websites to life with JavaScript by adding interactivity, animations, and powerful functionality. <hr />
              </span><h6 className="mb-3">
              <a className="text-primary" href='/sign-up'>Start Now</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  <div className="reviews-container" id='reviews'>
  <h2 className="reviews-title">What Our Students Are Saying</h2>
  <div className="reviews-cards">
    <div className="review-card">
      <div className="review-header">
        <h3 className="review-name">John Doe</h3>
        <div className="review-rating">★★★★★</div>
      </div>
      <p className="review-text">
        SkillNova has completely transformed my learning journey. The courses are engaging, and the community is supportive.
      </p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <h3 className="review-name">Jane Smith</h3>
        <div className="review-rating">★★★★</div>
      </div>
      <p className="review-text">
        I loved how the platform breaks complex topics into easy-to-understand lessons. Highly recommended!
      </p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <h3 className="review-name">Alice Johnson</h3>
        <div className="review-rating">★★★★★</div>
      </div>
      <p className="review-text">
        The hands-on projects helped me apply the knowledge I gained, and the feedback was incredibly valuable.
      </p>
    </div>
  </div>
</div>
  </>

      
 
      <div style={cstyles.container} id='contacts'>
        <div style={cstyles.heading}>
          <h1 style={cstyles.headingTitle}>Contact Us</h1>
          <p style={cstyles.headingSub}>We'd love to hear from you!</p>
        </div>
        <form style={cstyles.form}>
          <div>
            <label htmlFor="name" style={cstyles.label}>
              Name
            </label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              style={cstyles.input}
            />
          </div>
          <div>
            <label htmlFor="email" style={cstyles.label}>
              Email
            </label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={cstyles.input}
            />
          </div>
          <div>
            <label htmlFor="message" style={cstyles.label}>
              Message
            </label><br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your message"
              style={cstyles.input}
            /> 
          </div>
          <button
            type="submit"
            style={cstyles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                cstyles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = cstyles.button.backgroundColor)
            }
          >
            Submit
          </button>
        </form>
      </div>
      <footer style={footerStyles.container}>
        <div style={footerStyles.innerContainer}>
          {/* Logo Section */}
          <div style={footerStyles.logoSection}>
            <h3 style={{color:"#fff"}}>Socials</h3>
            <div style={footerStyles.logoIcons}>
              <img
                style={footerStyles.logoIcon}
                src="public/assets/dashimages/youtube.png"
              />
              <img
                style={footerStyles.logoIcon}
                src="public/assets/dashimages/instagram.png"
              />
              <img
                style={footerStyles.logoIcon}
                src="public/assets/dashimages/linkedin.png"
              />
              <img
                style={footerStyles.logoIcon}
                src="public/assets/dashimages/twitter.png"
              />
            </div>
          </div>

          {/* Use Cases */}
          <div style={footerStyles.column}>
            <h4 style={footerStyles.columnHeading}>Use cases</h4>
            <p style={footerStyles.columnItem}>UI design</p>
            <p style={footerStyles.columnItem}>UX design</p>
            <p style={footerStyles.columnItem}>Wireframing</p>
            <p style={footerStyles.columnItem}>Diagramming</p>
            <p style={footerStyles.columnItem}>Brainstorming</p>
            <p style={footerStyles.columnItem}>Online whiteboard</p>
            <p style={footerStyles.columnItem}>Team collaboration</p>
          </div>

          {/* Explore */}
          <div style={footerStyles.column}>
            <h4 style={footerStyles.columnHeading}>Explore</h4>
            <p style={footerStyles.columnItem}>Design</p>
            <p style={footerStyles.columnItem}>Prototyping</p>
            <p style={footerStyles.columnItem}>Development features</p>
            <p style={footerStyles.columnItem}>Design systems</p>
            <p style={footerStyles.columnItem}>Collaboration features</p>
            <p style={footerStyles.columnItem}>Design process</p>
            <p style={footerStyles.columnItem}>FigJam</p>
          </div>

          {/* Resources */}
          <div style={footerStyles.column}>
            <h4 style={footerStyles.columnHeading}>Resources</h4>
            <p style={footerStyles.columnItem}>FAQs</p>
            <p style={footerStyles.columnItem}>Best practices</p>
            <p style={footerStyles.columnItem}>Colors</p>
            <p style={footerStyles.columnItem}>Color wheel</p>
            <p style={footerStyles.columnItem}>Support</p>
            <p style={footerStyles.columnItem}>Developers</p>
            <p style={footerStyles.columnItem}>Resource library</p>
          </div>
        </div>
      </footer>
    </div>
      
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  
  
     
    </>
  );
};

export default Home;
