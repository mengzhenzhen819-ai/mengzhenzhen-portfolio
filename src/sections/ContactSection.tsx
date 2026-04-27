export default function ContactSection() {
  return (
    <section id="contact" className="contact-root">
      <div className="contact-section-wrap">

        {/* 左侧文案 */}
        <div className="contact-left">
          <div className="contact-eyebrow">Contact</div>
          <h2 className="contact-headline">期待加入一个真正<br />重视产品体验、<br />AI 创新和业务价值的团队</h2>
          <p className="contact-sub">求职意向：产品体验设计师 / AI 产品体验设计<br />工作经验 7 年，欢迎直接联系沟通。</p>
        </div>

        {/* 右侧信息卡片 */}
        <div className="contact-right">
          <div className="contact-info-card">
            <div className="ci-row">
              <div className="ci-icon">📱</div>
              <div><div className="ci-label">手机</div><div className="ci-val">15291968365</div></div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">📧</div>
              <div><div className="ci-label">Email</div><div className="ci-val">15291968365@163.com</div></div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">📍</div>
              <div><div className="ci-label">目前居住地</div><div className="ci-val">北京</div></div>
            </div>
            <div className="contact-ctas">
              <a href="tel:15291968365" className="cta-white">电话联系</a>
              <a href="mailto:15291968365@163.com" className="cta-outline">发送邮件</a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-root {
          background: #1A1A18;
          color: #fff;
          padding: 100px 48px 80px;
        }

        .contact-section-wrap {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px;
          align-items: center;
        }

        /* 左侧 */
        .contact-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,.35);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .contact-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: rgba(255,255,255,.3);
        }

        .contact-headline {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 24px;
          color: #fff;
        }

        .contact-sub {
          font-size: 16px;
          color: rgba(255,255,255,.5);
          line-height: 1.8;
          font-weight: 300;
          max-width: 420px;
        }

        /* 右侧卡片 */
        .contact-info-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px;
          padding: 36px;
        }

        .ci-row {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ci-row:last-of-type { border-bottom: none; }

        .ci-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .ci-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,.3);
          letter-spacing: .5px;
          margin-bottom: 2px;
        }

        .ci-val {
          font-size: 14px;
          color: rgba(255,255,255,.8);
          font-weight: 400;
        }

        /* 按钮组 */
        .contact-ctas {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 28px;
        }
        .contact-ctas a {
          padding: 13px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: all .22s;
          text-decoration: none;
        }

        .cta-white {
          background: #fff;
          color: #1A1A18;
        }
        .cta-white:hover { opacity: .9; transform: translateY(-1px); }

        .cta-outline {
          border: 1.5px solid rgba(255,255,255,.2);
          color: #fff;
        }
        .cta-outline:hover { border-color: rgba(255,255,255,.5); transform: translateY(-1px); }

        @media (max-width: 960px) {
          .contact-section-wrap {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-root {
            padding: 60px 24px 60px;
          }
        }

        @media (max-width: 520px) {
          .contact-right {
            width: 100%;
          }
          .contact-info-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
