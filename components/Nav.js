import html from "html-literal";

export default links => html`
  <nav>
    <!-- <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul> -->

    <h1><span style="font-size:2.75em;"></span></h1>

<input id="toggle" type="checkbox"></input>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
    ${links.map(
      link =>
        `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
    )}
    </nav>
  </div>
</div>

      </ul>
    </section>
  </nav>
`;
