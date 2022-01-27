import html from "html-literal";
import Book1 from "../../assets/images/poeticphotos.jpg";
import poeticanxiety from "../../assets/images/poeticanxiety.jpg";

export default () => html`
  <section id="books">
    <p>
      <h3><b>Poetic Photos</b><br />
      <i>by Kelby Alese</i><br /><br /></h3>

      <img src=${Book1} alt="Book1" /><br />

      <h3>This is a poetry book that provides
      <br />
      a visual of how the author felt <br />while writing the poems. Oftentimes
      <br />
      poetry books are filled with beautiful <br />words but few times do those
      words <br />depict the exact expression of the author. <br />
      I wanted my book to come to life.<br /></h3>

      <h4>Click below to purchase</h4>

      <a
        href="https://www.lulu.com/en/us/shop/kelby-estes-nelson/poetic-photos/paperback/product-124ednqm.html?page=1&pageSize=4"
        target="_blank"
        >Poetic Photos by Kelby Alese</a
      ><br /><br /><br /><br /><br />

      <h3><b>Poetic Anxiety</b><br />
      <img src=${poeticanxiety} alt="Poetic Anxiety" width=400x400/><br><i>by Kelby Alese</i><br /><br /></h3>
      <h1><i>Coming Soon!</i></h1>
    </p><br>

    <section class=poem>
      <h4><u>Poem of the Week</u></h4>
    <p font size=18px>Want to feature your poem here?<br>
  Email us and include your poem, name, and contact information</p>
  </section>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </section>
`;
