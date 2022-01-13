import html from "html-literal";

export default () => html`
<h1>To place an order please add the title of the card(s) you are interested in <br>
  and the amount of those cards you would like to purchase, in the message field. <br> Once your order is received, an email will be sent to you for confirmation and processing time.</h1><br><br><br>


  <form action="https://formspree.io/f/mknywdrl" method="POST">
    <label>
      <br />
      Your email:
      <input type="Your email" name="email" />
    </label>
    <label><br>
    Your name:
      <input type="name" name="name" />
    </label><br>
    Your number:
      <input type="phone" name="phone" />
    </label>
      <br />
      Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button><br>
</form>
<br><br><br><br><br><br><br><br><br><br>

  <h3>*Paypal is used for processing payments*</h3><br><br><br><br><br><br>
`;
