import html from "html-literal";

export default () => html`
<h1>To place an order please add the title of the card(s) you are interested in <br>
  and the amount of those cards you would like to purchase, in the message field. <br> Once your order is received, an email will be sent to you for confirmation and processing time.</h1>


  <form action="https://formspree.io/f/mknywdrl" method="POST">
    <label>
      <br />
      Your email:
      <input type="Your email" name="_replyto" />
    </label>
    <label><br>
    Your name:
      <input type="Full name" name="_replyto" />
    </label><br>
    Your number:
      <input type="Phone Number" name="_replyto" />
    </label>
      <br />
      Your message:
      <textarea name="What's the word? Input your message."></textarea> </label
    ><br />
    Your message:


    <button type="submit">Send</button>
  </form>

  <h3>Paypal is used for processing payments</h3>
`;
