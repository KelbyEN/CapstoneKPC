import html from "html-literal";
import anxiety from "../../assets/images/anxiety.jpg";
import sprevent1 from "../../assets/images/sprevent1.jpg";
import sprevent2 from "../../assets/images/sprevent2.jpg";
import congratscheer from "../../assets/images/congratscheer.jpg";
import happybdaysis from "../../assets/images/happybdaysis.jpg";
import sympathy1 from "../../assets/images/sympathy1.jpg";
import Thankyou1in from "../../assets/images/Thankyou1in.png";
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
    <br><br>

  </section>

   <div style="color: black;">

   <div id="cards">
     <p><h2>Mental Health</h2></p>

   <div class="mental">
   <img src=${anxiety} alt="anxiety" width=300x300/><br>Anxiety<br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   <img src=${sprevent1} alt="sprevent1" width=300x300/><br>Prevention<br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   <img src=${sprevent2} alt="sprevent2" width=300x300/><br>Prevention2<br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>

   </div>
   <p><h2>General Greetings</h2></p>

   <div class="greeting">

   <img src=${congratscheer} alt="congratscheer" width=300x300/><br> Congrats Cheer<br>Greeting $3.00 <br> For written expressions <br>  <br>

     <img src=${happybdaysis} alt="happybdaysis" width=300x300/><br> Happy bday Sis<br>Greeting $3.00<br> For written expressions <br>

   <img src=${sympathy1} alt="sympathy1" width=300x300/><br>Sympathy<br>Greeting $3.00<br> For written expressions <br>

   <img src=${Thankyou1in} alt="Thankyou" width=300x300/><br>Thank You<br>Greeting $3.00<br> For written expressions <br>

   </div>

   <p><h2>Romance</h2></p>

   <div class="romance">
   <img src=${Romanceking} alt="Romance King" width=300x300/><br>Romance King<br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${blueanniversary} alt="blue anniversary" width=300x300/><br>Blue Anniversary<br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${numberone} alt="Number one" width=300x300/><br>Number One<br>Romance $5.00<br> For those you share a bed with <br>

   <img src=${romancepuffs} alt="Romance Puffs" width=300x300/><<br>Romance Puffs<br>Romance $5.00<br> For those you share a bed with <br><br><br><br>
   </div>
   </div>

   </div>
  </div>
  <p><h2>Custom</h2></p>



</section>
<div class="custom">
<img src=${marketing1} alt="Marketing" width=300x300/><br>Custom $10.00 <br> For making it personal <br></div>

<form
  action="https://formspree.io/f/xrgjzyzy"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label><br>
  <label>
    Your font:
    <input type="text" name="font">
  </label><br>
  <label>
    Your color:
    <input type="color" name="color">
  </label><br>
  <label>
    Your occasion:
    <input type="text" name="occasion">
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
© 2021 KittyPinkCards LLC`;
