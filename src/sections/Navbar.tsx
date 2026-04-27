export default function Navbar() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id === "home" ? "hero" : id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="site-header" aria-label="主导航">
        <nav className="nav-shell">
          {/* 左侧头像 */}
          <a
            className="nav-avatar"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            aria-label="回到首页"
          >
            <img src="/images/hero-avatar.png" alt="头像" />
          </a>

          {/* 中间导航链接 — 整体居中 */}
          <div className="nav-links">
            <a
              className="nav-link is-active"
              href="#home"
              onMouseEnter={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
            >
              首页
            </a>
            <a
              className="nav-link"
              href="#about"
              onMouseEnter={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#about");
              }}
            >
              关于我
            </a>
            <a
              className="nav-link"
              href="#projects"
              onMouseEnter={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
            >
              我的项目
            </a>
            <a
              className="nav-link"
              href="#design"
              onMouseEnter={(e) => {
                e.preventDefault();
                scrollTo("#design");
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#design");
              }}
            >
              AI 探索
            </a>
          </div>

          {/* 右侧 联系我 */}
          <a
            className="contact-pill"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            联系我
          </a>
        </nav>
      </header>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding-top: 22px;
        }

        .nav-shell {
          display: inline-flex;
          align-items: center;
          min-height: 64px;
          gap: 0;
          padding: 8px 12px 8px 14px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          background: rgba(247, 247, 248, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .nav-avatar {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .nav-avatar img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          gap: 36px;
          padding: 0 30px;
          min-width: 0;
        }

        .nav-link {
          color: rgba(0, 0, 0, 0.5);
          font-size: 17px;
          font-weight: 400;
          line-height: 1;
          white-space: nowrap;
          transition: color 180ms ease;
          text-decoration: none;
          display: inline-block;
          vertical-align: baseline;
        }

        .nav-link:hover,
        .nav-link.is-active {
          color: rgba(0, 0, 0, 0.9);
        }

        .contact-pill {
          min-width: 96px;
          height: 42px;
          padding: 0 18px;
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 999px;
          background: #11131d;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 180ms ease, background 180ms ease;
          cursor: pointer;
        }

        .contact-pill:hover {
          transform: translateY(-1px);
          background: #222;
        }

        @media (max-width: 720px) {
          .site-header {
            padding-top: 12px;
          }

          .nav-shell {
            min-height: 50px;
            padding: 5px 8px 5px 10px;
          }

          .nav-avatar {
            width: 38px;
            height: 38px;
          }

          .nav-links {
            gap: 20px;
            padding: 0 16px;
          }

          .nav-link {
            font-size: 13px;
          }

          .contact-pill {
            min-width: 76px;
            height: 32px;
            padding: 0 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 540px) {
          .nav-links {
            display: none;
          }

          .nav-shell {
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
