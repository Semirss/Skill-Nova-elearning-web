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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "1rem 2rem",
      backgroundColor: "#000",
    },
    btn: {
      margin: "0",

      width: "5rem",
      backgroundColor: "#f0f0f0",
      color: "#000",
      marginTop: "-7px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
    },
    btn2: {
      margin: "0",
      width: "5rem",
      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
      backgroundColor: "#4fafff",
      color: "#000",
      marginTop: "-7px",
    },
    btn3: {
      marginLeft: "7%",
      height: "45px",
      width: "8rem",
      backgroundColor: "#f0f0f0",
      color: "#000",
      marginTop: "10px",
      boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)",
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
      backgroundImage: "url('public/assets/dashimages/ffgh.webp')", // Replace with the correct image path
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
      color: "#fff",
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
      color: "#333",
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
    },
    columnItem: {
      fontSize: "0.9rem",

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
      marginTop: "10px",
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
    <div style={styles.container}>
      {/* Navbar */}
      <nav className="navbar" style={styles.navbar}>
        <div style={styles.logo}> Skill Nova</div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>
            Home
          </a>
          <a href="#" style={styles.link}>
            Downloads
          </a>
          <a href="#" style={styles.link}>
            Community
          </a>
          <a href="#" style={styles.link}>
            About us
          </a>
          <a href="#" style={styles.link}>
            Resources
          </a>
          <a href="#" style={styles.link}>
            Contact
          </a>
          <button style={styles.btn}>Sign up</button>
          <button style={styles.btn2}>Sign in</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroText}>Skill Nova</h1>
        <p style={styles.subText}>
          Get started with our non degree e-learning programs. signup and start
          your journey
        </p>
        <button style={styles.btn3}>Sign up</button>
      </div>

      {/* Schedule Section */}

      <div
        style={{
          margin: "30px",
          color: "#fff",
          fontSize: 42,
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Schedules
      </div>
      <div style={styles.scheduleSection}>
        <div style={styles.scheduleCard}>
          <p style={styles.cardTitle}>08:00AM</p>
          <p>lecture: beginer html</p>
          <button style={styles.btn4}>RSVP</button>
        </div>
        <div style={styles.scheduleCard2}>
          <p style={styles.cardTitle}>09:00AM</p>
          <p>lecture: beginer css</p>
          <button style={styles.btn4}>RSVP</button>
        </div>
        <div style={styles.scheduleCard}>
          <p style={styles.cardTitle}>10:00AM</p>
          <p>lecture: Intermidet html</p>
          <button style={styles.btn4}>RSVP</button>
        </div>
        <div style={styles.scheduleCard2}>
          <p style={styles.cardTitle}>09:00AM</p>
          <p>lecture: Intermidiet css</p>
          <button style={styles.btn4}>RSVP</button>
        </div>{" "}
      </div>

      {/* Now Showing Section */}
      <div
        style={{
          width: "94%",
          margin: "40px",
          color: "#fff",
          fontSize: 42,
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Course Updates
      </div>
      <div style={styles.nowShowingSection}>
        <div style={styles.nowShowingCard}>
          <img
            src="public/assets/dashimages/ic.jfif"
            alt="Now Showing"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Now Showing</p>
            <p>Episode: Intermediate Css</p>
          </div>
          <img
            src="public/assets/dashimages/js.jfif"
            alt="Now Showing"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Now Showing</p>
            <p>Episode: Intermediate Html</p>
          </div>
        </div>
        <div style={styles.nowShowingCard}>
          <img
            src="public/assets/dashimages/ih.jfif"
            alt="Next"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Next</p>
            <p>Episode: mastering HTML & CSS </p>
          </div>
          <img
            src="public/assets/dashimages/p.jfif"
            alt="Next"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Next</p>
            <p>Episode:PHP for beginers </p>
          </div>
        </div>
        <div style={styles.nowShowingCard}>
          <img
            src="public/assets/dashimages/h.jfif"
            alt="Next"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Next</p>
            <p>Episode: Learn HTML </p>
          </div>
          <img
            src="public/assets/dashimages/sql.jfif"
            alt="Next"
            style={styles.nowShowingImage}
          />
          <div style={styles.nowShowingDetails}>
            <p style={styles.nowShowingTitle}>Next</p>
            <p>Episode: Learb SQL</p>
          </div>
        </div>
      </div>
      <div style={cstyles.container}>
        <div style={cstyles.heading}>
          <h1 style={cstyles.headingTitle}>Contact Us</h1>
          <p style={cstyles.headingSub}>We'd love to hear from you!</p>
        </div>
        <form style={cstyles.form}>
          <div>
            <label htmlFor="name" style={cstyles.label}>
              Name
            </label>
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
            </label>
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
            </label>
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
            <h3>Socials</h3>
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
  );
};

export default Home;
