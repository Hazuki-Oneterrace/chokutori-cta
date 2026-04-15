(function () {
  if (!document.getElementById("cta-chokutori-font")) {
    const font = document.createElement("link");
    font.id = "cta-chokutori-font";
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@400;500;700&display=swap";
    document.head.appendChild(font);
  }

  if (!document.getElementById("cta-chokutori-style")) {
    const style = document.createElement("style");
    style.id = "cta-chokutori-style";
    style.textContent = `
      .cta-chokutori{
        width:100%;
        margin:48px 0;
        font-family:"M PLUS 1", sans-serif;
      }

      .cta-chokutori__card{
        background:#f7fbfd;
        border-radius:30px;
        padding:24px;
        text-align:center;
      }

      .cta-chokutori__title{
        margin:0 0 16px;
        font-size:24px;
        font-weight:700;
        color:#0ca9dc;
        line-height:1.4;
      }

      .cta-chokutori__text{
        margin:0 0 32px;
        font-size:16px;
        color:#333;
        line-height:1.8;
      }

      .cta-chokutori__buttons{
        display:flex;
        justify-content:center;
        gap:24px;
        flex-wrap:wrap;
      }

      .cta-chokutori__btn{
        display:inline-flex;
        justify-content:center;
        align-items:center;
        width:240px;
        padding:14px 0;
        border-radius:4px;
        font-size:14px;
        font-weight:500;
        text-decoration:none;
        background:#3ac9f6;
        color:#fff;
        border:2px solid transparent;
        transition: background .2s ease, color .2s ease, border .2s ease, transform .2s ease;
        box-sizing:border-box;
      }

      .cta-chokutori__btn:hover{
        background:#fff;
        border:2px solid #3ac9f6;
        color:#3ac9f6;
        transform: translateY(-2px);
      }

      .cta-chokutori__btn--outline{
        background:#fff;
        color:#3ac9f6;
        border:2px solid #3ac9f6;
      }

      .cta-chokutori__btn--outline:hover{
        background:#3ac9f6;
        color:#fff;
      }

      .sp-br{
        display:none;
      }

      @media (max-width:768px){
        .sp-br{
          display:block;
        }

        .cta-chokutori__title{
          font-size:20px;
        }

        .cta-chokutori__text{
          font-size:14px;
        }

        .cta-chokutori__btn{
          width:100%;
          max-width:360px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const html = `
    <div class="cta-chokutori">
      <div class="cta-chokutori__card">

        <h3 class="cta-chokutori__title">
          外国人材を採用するなら<br class="sp-br">チョクトリ！
        </h3>

        <p class="cta-chokutori__text">
          外国人材採用に関しての不安、疑問などお気軽にご相談くださいませ。
        </p>

        <div class="cta-chokutori__buttons">

          <a class="cta-chokutori__btn"
             id="click_service_article_chokutori"
             href="https://chokutori.com/?utm_source=article&utm_medium=cta&utm_campaign=service_article"
             target="_blank"
             rel="noopener noreferrer">
            サービス内容を知る
          </a>

          <a class="cta-chokutori__btn cta-chokutori__btn--outline"
             id="click_contact_article_chokutori"
             href="https://chokutori.oneterrace.jp/contact?utm_source=article&utm_medium=cta&utm_campaign=contact_article"
             target="_blank"
             rel="noopener noreferrer">
            専門のスタッフに相談する
          </a>

        </div>

      </div>
    </div>
  `;

  const script = document.currentScript || (function () {
    const scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();

  if (script) {
    script.insertAdjacentHTML("afterend", html);
  }
})();
