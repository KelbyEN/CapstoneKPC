import html from "html-literal";
import Book1 from "../../assets/images/poeticphotos.jpg";
import Tenyear from "../../assets/images/Tenyear.jpg";
import Thatsmydad from "../../assets/images/Thatsmydad.jpg";

export default () => html`
  <section id="books">
    <p>
      <h3><b>Poetic Photos</b><br />
      <i>by Kelby Estes-Nelson</i><br /><br /></h3>

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

      <h3><b>Ten Year Old Me</b><br />
      <i>by Kelby Estes-Nelson</i><br /><br /></h3>

      <img src=${Tenyear} alt="Ten Year Old Me" /><br/>

      <h3>Learning to balance a check book at ten, was a big eye opener. I saw how my mother paid <br/> everything, I learned how to save and how to budget. I understood work ethic and the <br/>difference between needs and wants a little more. A lot of children don't receive these <br/>lessons. This book is dedicated to those children. It is to be a starting point on their <br/>financial journey. The book is catered to ages 9-14 but is a good read for anyone who <br/>many want to brush up on the basics.<br/></h3>

      <h4>Click below to purchase</h4>

      <a
        href="https://www.amazon.com/gp/product/B0BKJ6TQBK?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks"
        target="_blank"
        >Ten Year Old Me by Kelby Estes-Nelson</a
      ><br /><br /><br /><br /><br />



      <h3><b>That's MY Dad</b><br />
      <i>by Kelby Estes-Nelson</i><br /><br /></h3>

      <img src=${Thatsmydad} alt="Thats MY Dad" /><br/>
      <h4>Click below to purchase</h4>

      <a
        href="https://www.amazon.com/gp/product/B0C91R199N?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks"
        target="_blank"
        >That's MY Dad by Kelby Estes-Nelson</a
      ><br /><br /><br /><br /><br />




    </p><br>
`;
