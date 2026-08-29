const Webprojects = () => {
  const webProjects = [
    {
      name: "Harmona",
      description:
        "A music web app designed to help people discover songs based on their emotions and feelings.",
      website: "https://harmona2026.vercel.app",
      tech: "React • JavaScript • Vite",
      icon: "🎧",
    },
    {
      name: "Anime diary",
      description:
        "An anime website featuring animes i've watchedted in 2025, animes for 2026 would be posted soon.  ",
      website: "https://animediary2.vercel.app",
      tech: "React • JavaScript • Vite",
      icon: "🎧",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 7%",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >

      {/* SECTION TITLE */}

      <div
        style={{
          color: "#8b5cf6",
          fontSize: "13px",
          fontWeight: "bold",
          letterSpacing: "3px",
          marginBottom: "12px",
        }}
      >
        WEB DEVELOPMENT
      </div>

      <h2
        style={{
          fontSize: "42px",
          color: "#ffffff",
          marginBottom: "15px",
        }}
      >
        My Web Projects
      </h2>

      <p
        style={{
          color: "#a1a1aa",
          lineHeight: "1.8",
          maxWidth: "650px",
          marginBottom: "40px",
          textAlign: "left",
          display: "block",
        }}
      >
        A collection of websites and web applications I've
        created while learning and experimenting with web development.
      </p>


      {/* PROJECT GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >

        {webProjects.map((project) => (

          <div
            key={project.name}
            style={{
              background: "#11151f",
              border: "1px solid #222633",
              borderRadius: "24px",
              padding: "30px",
              transition: "0.3s",
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";

              e.currentTarget.style.borderColor =
                "#8b5cf6";

              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(139, 92, 246, 0.15)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.borderColor =
                "#222633";

              e.currentTarget.style.boxShadow =
                "none";
            }}
          >

            {/* PROJECT ICON */}

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, #8b5cf6, #312e81)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "25px",
              }}
            >
              {project.icon}
            </div>


            {/* PROJECT NAME */}

            <h3
              style={{
                color: "#ffffff",
                fontSize: "25px",
                marginBottom: "12px",
              }}
            >
              {project.name}
            </h3>


            {/* DESCRIPTION */}

            <p
              style={{
                color: "#a1a1aa",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>


            {/* TECHNOLOGIES */}

            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "20px",
                background: "#1a1f2c",
                color: "#a78bfa",
                fontSize: "13px",
                marginBottom: "25px",
              }}
            >
              {project.tech}
            </div>


            {/* WEBSITE */}

            <div>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  background: "#8b5cf6",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "0.3s",
                }}
              >
                Visit Website →
              </a>
            </div>

          </div>

        ))}

      </div>

    </section>



  );
};

export default Webprojects;