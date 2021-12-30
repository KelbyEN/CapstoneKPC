import html from "html-literal";

export default () => html`

<section>
  <div class="w3-container">
    <p>Take a look at our cards!</p>

   <div.topics style="color: whitesmoke;">
     <img src="photos/anxiety.jpg" width=200x200 alt="Anxiety"> <br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>
     <img src="photos/sprevent1.jpg" width=200x200 alt="Suicide Prevention"><br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>
     <img src="photos/sprevent2.jpg" width=200x200 alt="Suicide Prevention"><br>Mental Health $3.00 <br> For life's mental and emotional challenges  <br>
          <img src="photos/congratscheer.jpg" width=200X200 alt="Congrats"><br>Greeting $3.00 <br> For written expressions <br>  <br>
    <img src="photos/happy bday sis.jpg" width=200x200 alt="bday"><br>Greeting $3.00<br> For written expressions <br>
    <img src="photos/sympathy1.jpg" width=200x200 alt="Sympathy"><br>Greeting $3.00<br> For written expressions <br>
    <img src="photos/sympathy2.jpg" width=200x200 alt="Sympathy"><br>Greeting $3.00<br> For written expressions <br>
    <img src="photos/Romanceking.jpg" width=200x200 alt="Romance"><br>Romance $5.00<br> For those you share a bed with <br>
     <img src="photos/blueanniversary.jpg" width=200x200 alt="Romance"><br>Romance $5.00<br> For those you share a bed with <br>
     <img src="photos/numberone.jpg" width=200x200 alt="Romance"><br>Romance $5.00<br> For those you share a bed with <br>
    <img src="photos/romancepuffs.jpg" width=200x200 alt="romance"><br>Romance $5.00<br> For those you share a bed with <br>
     <img src="photos/marketing1.jpg" width=200X200 alt="Marketing"> <br>Custom $10.00 <br> For making it personal <br>
   </div.topics>
  </div>



</section>



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
</body>`
