import html from "html-literal";
import Katdedication from "../../assets/images/Katdedication.png";
import Lloyddedication from "../../assets/images/Lloyddedication.png";
import Phillipdedication from "../../assets/images/Phillipdedication.png";

export default () => html`

<p>"We Rise by Lifting Others"
-Robert Ingersoll</p>

<div id="facts">
   <h3>Facts and FAQs <br>
     Cards are a simple and inexpensive way to express yourself. <br>
      <br>To remain safe from Covid-19:<br>
      <li>
        You can send them virtually
      </li>
      <li>
        You can have them mailed to the recipient
      </li><br>
      For a more personal touch:<br>
      <li>
        Have the cards delivered to yourself
      </li>
      <br />
      Let us help you be different than the rest and express YOU the best.</h3>
</b>
  </div>

  <div id="flowers">
  <p>
    Its so important to give a person their flowers while they are able to
    receive them.<br />
    Our mission is to encourage compliments, consideration and empathy!
  </p>



  <img src=${Katdedication} alt="anxiety" width="500x500" /><br />
  <p>
    <b>
      My mother was the first person to encourage me to write.<br />
      When I felt anxiety about speaking, she gave me the pen <br>
      and paper to write. I have never looked back. She has been<br />
      my biggest supporter and for that I want to give her, her flowers.</b>
  </p>

  <img src=${Lloyddedication} alt="anxiety" width="500x500" /><br />

  <p>
    <b>
      My uncle always encouraged me to evolve with my writings.<br />
      He challenged me to explore poetry with other works of art. <br />
      He was a catalyst for the conception and for that I give him his
      flowers.</b
    >
  </p>

  <img src=${Phillipdedication} alt="anxiety" width="500x500" /><br />
  <b font="15px">
    <p>
      <b
        >My uncle was proud that we both had a Business degree<br>
        with a Marketing Emphasis. He was a always rooting for<br />
        me to continue to build on my Business dream. He consistently<br />
        gave me my flowers and for that I want to give him his.</b>
    </p>
    </div>
`;
