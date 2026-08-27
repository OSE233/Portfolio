
const YtLinks = () => {
  const videos = [
    {
      title: "My App",
      link: "https://youtu.be/BE7iCkx0Kjk?si=ub6uvnC9G3ddTCQO",
    },
    {
      title: " Hi :)#roblox #butifyoucloseyoureye #cool",
      link: "https://youtube.com/shorts/jGPU7gc5WEc?si=jBAuDwiLOrvUxWq4",
    },
    {
     title: "coding lesson",
      link: "https://youtu.be/zNuhzNswedg?si=KRK0ri5p_ufHZfS_",
    },
    {
      title: "#roblox #cool #dahood #butifyoucloseyoureyes",
      link: "https://youtube.com/shorts/MXxBzMgb98k?si=rhHGJeLDFtywg_fr",
    },
    {
      title: "#roblox #cool #dahood #butifyoucloseyoureyes",
      link: "https://youtube.com/shorts/83WRhbSIgIM?si=q1L9ni003egzKgYA",
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
        WATCH
      </div>

      <h2
        style={{
          fontSize: "42px",
          marginBottom: "15px",
          color: "#ffffff",
        }}
      >
        Featured Videos
      </h2>

      <p
        style={{
          color: "#a1a1aa",
          lineHeight: "1.8",
          maxWidth: "650px",
          marginBottom: "40px",
        }}
      >
         Check out some of my videos and creative work.
      </p>


      {/* VIDEO GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >

        {videos.map((video, index) => (

          <a
            key={index}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >

            <div
              style={{
                background: "#11151f",
                border: "1px solid #222633",
                borderRadius: "20px",
                padding: "25px",
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "0.3s",
                cursor: "pointer",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-7px)";
                e.currentTarget.style.borderColor = "#8b5cf6";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(139, 92, 246, 0.18)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#222633";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              {/* YOUTUBE ICON */}

              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #8b5cf6, #312e81)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                ▶
              </div>


              {/* VIDEO TITLE */}

              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                {video.title}
              </h3>


              {/* LINK */}

              <span
                style={{
                  color: "#8b5cf6",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Watch Video →
              </span>

            </div>

          </a>

        ))}

      
      </div>

      <footer>
        © 2026 • Built with React & JavaScript ✨
      </footer>
     
    </section>
  );
};

export default YtLinks