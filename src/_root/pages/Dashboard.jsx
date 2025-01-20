// import Topbar from "../../components/TopBar"
import "/src/_root/pages/dash.css";
const Dashboard = () => {
  const styles = {
    
    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
      padding: "1rem",
      maxWidth: "1200px",
      margin: "0",

    },
    dashboardHeader: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(10px, 1fr))",
      gap: "1rem",

    },
    card: {
      color: "#000",
      height: "160px",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: "24px",
      padding: "1rem",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },

    coursesSection: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
    courseCard: {
      display: "flex",
      width: "70%",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      textAlign: "center",
    },
    courseImage: {
      width: "43%",
      height: "222px",
      objectFit: "center",
      borderRadius: "10px",
    },
    courseContent: {
      padding: "1rem",
    },
    quickStartSection: {
      position: "absolute",
      left: "75%",
      right: "10%",
      top: "320px",
    },

    quickStartCard: {
      width: "140px",

      marginBottom: "10px",
      borderRadius: "24px",
      padding: "23%",
      overflow: "hidden",
      backgroundImage: "url(public/assets/dashimages/3.jfif)",
      backgroundPosition: "",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    quickStartCard2: {
      width: "140px",
      backgroundImage: "url(public/assets/dashimages/8.jfif)",
      backgroundPosition: "center",
      marginBottom: "10px",
      borderRadius: "24px",
      padding: "23%",
      overflow: "hidden",
      marginLeft: "50px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  const featureStyles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "1rem",
      marginTop: "20px",
    },
    featuresSection: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "3rem",
    },
    featureCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "1rem",
      borderRadius: "12px",
      overflow: "hidden",
    },
    featureCardReversed: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "1rem",
      borderRadius: "12px",
      overflow: "hidden",
    },
    featureContent: {
      padding: "1rem",
    },
    featureImage: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
      borderRadius: "2rem",
    },
    featureHeading: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#fff",
    },
    featureDescription: {
      fontSize: "1rem",
      color: "#fff",
    },
  };
  const footerStyles = {
    container: {
      backgroundColor: "#000",

      marginLeft: "-14px",
      padding: "2rem 1rem",
      borderTop: "1px solid #ddd",
      marginTop: "10px",
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
      color: "#fff",
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
      color: "#fff",
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

  return (
    <>
      <div className="dashboard">
        <div
          className="Dashboard"
          style={{
            marginLeft: "17px",
            
          }}
        >
          <h3 style={{color:"#fff"}}>Dashboard <hr /></h3>
          </div>
        <div style={styles.container}>
          {/* Dashboard Header */}
          <div style={styles.dashboardHeader}>
            <div id="card" >
              <img
                src="public/assets/dashimages/16.jfif"
                alt=""
                className="r"
                style={{
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
              <a href="https://www.google.co.uk/"><h4>Resources</h4></a>
            </div>
            <div id="card" >
              <img
                src="public/assets/dashimages/18.jfif"
                alt=""
                className="r"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
              <a href="/settings"><h4>Profile</h4></a>
              </div>
            <div id="card" >
              <img
                src="public/assets/dashimages/5.jfif"
                alt=""
                className="r"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
              <a href="/all courses "><h4>All-courses</h4></a>
              </div>
            <div id="card" >
              <img
                src="public/assets/dashimages/4.jfif"
                alt=""
                className="r"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
              <a href="/rooms"><h4>Rooms</h4></a>
              </div>
          </div>
          <hr style={{color:"#fff"}}/>

           {/* Service Start */}
  <div className="containers1" id="service">
    <div className="containers">
      <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-6">
          <h3 style={{color:"#fff"}}>COURCES </h3>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <a className="btn btn-primary py-3 px-5" href="/all courses">
            start now
          </a>
        </div>
      </div>
      <div className="row g-4">
        <div className="col--6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icond1 flex-shrink-0 mb-3">
              <i className="fa fa-crop-alt fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">HTML-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Learn the foundation of the web by building structured, accessible, and semantic web pages with HTML. <hr />
              </span>
              <h6 className="mb-3">
              <a className="text-primary" href='/all courses'>Get started</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icond2 flex-shrink-0 mb-3">
              <i className="fa fa-code-branch fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">CSS-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Master the art of styling with CSS to create visually appealing layouts, responsive designs, and stunning user interfaces. <hr />
              </span>
              <h6 className="mb-3">
              <a className="text-primary" href='/all courses'>Get started</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icond3 flex-shrink-0 mb-3">
              <i className="fa fa-code fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">PHP-COURSES</h4>
              
              <span style={{color:"#000"}}>
              Dive into server-side scripting with PHP and create dynamic, data-driven websites and applications. <hr />
              </span>
              <h6 className="mb-3">
              <a className="text-primary" href='/all courses'>Get started</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
            <div className="bg-icond4 flex-shrink-0 mb-3">
              <i className="fa fa-laptop-code fa-2x text-dark" />
            </div>
            <div className="ms-sm-4">
              <h4 className="mb-3">JAVA SCRIPT-LESSONS</h4>
              
              <span style={{color:"#000"}}>
              Bring your websites to life with JavaScript by adding interactivity, animations, and powerful functionality. <hr />
              </span><h6 className="mb-3">
              <a className="text-primary" href='/all courses'>Get started</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  {/* Service End */}

        <div style={featureStyles.container}>
          {/* Features Section */}
          <div
            className="cources"
            style={{
              
              
            }}
          >
          <h3 style={{color:"#fff"}}>Features </h3>  <hr style={{color:"#fff"}}/>

          </div>

          {/* Features Grid */}
          <div style={featureStyles.featuresGrid}>
            {/* Feature 1 */}
            <div style={featureStyles.featureCard}>
              <div style={featureStyles.featureContent}>
                <h3 style={featureStyles.featureHeading}>
                  Acquire the top-tier skills
                </h3>
                <p style={featureStyles.featureDescription}>
                  Our Nanodegree programs are developed in collaboration with
                  leading companies like Google, Facebook, AT&T, IBM, GitHub,
                  and others. Our skilled project evaluators, mentors, and
                  coaches guarantee that you are prepared for the workforce.
                </p>
              </div>
              <img
                src="public/assets/dashimages/11.jpg"
                alt="Acquire skills"
                style={featureStyles.featureImage}
              />
            </div>

            {/* Feature 2 (Image on the Left) */}
            <div style={featureStyles.featureCardReversed}>
              <img
                src="public/assets/dashimages/12.jpg"
                alt="Land a Job"
                style={featureStyles.featureImage}
              />
              <div style={featureStyles.featureContent}>
                <h3 style={featureStyles.featureHeading}>
                  Land a Job with Industry Leaders
                </h3>
                <p style={featureStyles.featureDescription}>
                  Our partnerships with innovative companies like IBM,
                  Mercedes-Benz, Didi Chuxing, and others create incredible
                  career opportunities. Blitz provides you with a unique pathway
                  to secure your dream job.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={featureStyles.featureCard}>
              <div style={featureStyles.featureContent}>
                <h3 style={featureStyles.featureHeading}>
                  Maximize Your Impact
                </h3>
                <p style={featureStyles.featureDescription}>
                  Craft a future you’re passionate about across diverse
                  fields—be it transportation, commerce, healthcare, or space
                  exploration. Broaden your horizons, surpass your goals, and
                  achieve excellence!
                </p>
              </div>
              <img
                src="public/assets/dashimages/14.jpg"
                alt="Maximize Impact"
                style={featureStyles.featureImage}
              />
            </div>
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
      </div>
    </>
  );
};

export default Dashboard;