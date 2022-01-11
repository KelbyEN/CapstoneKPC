import html from "html-literal";
import anxiety from "../../assets/images/anxiety.jpg";
import sprevent1 from "../../assets/images/sprevent1.jpg";
import sprevent2 from "../../assets/images/sprevent2.jpg";
import congratscheer from "../../assets/images/congratscheer.jpg";
import happybdaysis from "../../assets/images/happybdaysis.jpg";
import sympathy1 from "../../assets/images/sympathy1.jpg";
import sympathy2 from "../../assets/images/sympathy2.jpg";
import Romanceking from "../../assets/images/Romanceking.jpg";
import blueanniversary from "../../assets/images/blueanniversary.jpg";
import numberone from "../../assets/images/numberone.jpg";
import romancepuffs from "../../assets/images/romancepuffs.jpg";
import marketing1 from "../../assets/images/marketing1.jpg";
export default () => html`

<section>
  <div class="w3-container">
    <h1>Take a look at our cards!</h1>

    <section id="jumbotron">
    <button id="myBtn"
      >"Add to Cart!" </button>
    <br>
  </section>

   <div style="color: whitesmoke;">

   <div id="booking">

   <img src=${anxiety} alt="anxiety" width=200x200/><br /><br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   <img src=${sprevent1} alt="sprevent1" width=200x200/><br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   <img src=${sprevent2} alt="sprevent2" width=200x200/><br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   <img src=${congratscheer} alt="congratscheer" width=200x200/><br>Greeting $3.00 <br> For written expressions <br>  <br>

   <img src=${happybdaysis} alt="congratscheer" width=200x200/><br>Greeting $3.00<br> For written expressions <br>

   <img src=${sympathy1} alt="sympathy1" width=200x200/><br>Greeting $3.00<br> For written expressions <br>

   <img src=${sympathy2} alt="sympathy2" width=200x200/><br>Greeting $3.00<br> For written expressions <br>

   <img src=${Romanceking} alt="Romance King" width=200x200/><br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${blueanniversary} alt="blue anniversary" width=200x200/><br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${numberone} alt="Number one" width=200x200/><br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${romancepuffs} alt="Romance Puffs" width=200x200/><br>Romance $5.00<br> For those you share a bed with <br><br><br><br>
   </div>

   </div>
  </div>



</section>

<img src=${marketing1} alt="Marketing" width=200x200/><br>Custom $10.00 <br> For making it personal <br>

<form
  action="https://formspree.io/f/xrgjzyzy"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="_replyto">
  </label><br>
  <label>
    Your font:
    <input type="font" name="_replyto">
  </label><br>
  <label>
    Your color:
    <input type="color" name="_replyto">
  </label><br>
  <label>
    Your occasion:
    <input type="occasion" name="_replyto">
  </label><br>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label><br>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>



                            <h3>
                                <p><a href="https://www.instagram.com/kittypinkcards/?hl=en">Follow us on Instagram!</a></p>
                                <p><a href="https://www.linkedin.com/m/in/kelby-a-estes-nelson-83350826/">Follow us on Linkedin!</a></p>.
                            </h3>
</body>
© 2021 GitHub, Inc.
Terms
Privacy`;
