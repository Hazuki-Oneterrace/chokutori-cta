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
    style.textContent = `/* そのままでOK */`;
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
             href="https://chokutori.com/?utm_source=article&utm_medium=cta&utm_campaign=service"
             target="_blank"
             rel="noopener noreferrer">
            サービス内容を知る
          </a>

          <a class="cta-chokutori__btn cta-chokutori__btn--outline"
             id="click_contact_article_chokutori"
             href="https://chokutori.oneterrace.jp/contact?utm_source=article&utm_medium=cta&utm_campaign=contact"
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