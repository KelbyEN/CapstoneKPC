import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <h1><b>Our Story</b></h1>

  <main>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
    <div class="About">
      The cards include poems from Kelby Estes-Nelson who is a published
      poet-author and has been performing poetry for over ten years.
      KittyPinkCards offers a general line, romantic line, mental health and a
      custom line of cards! KittyPinkCards has the goal to help others express
      what they are feeling creatively and personally, so that the receiver of
      the card experiences empathy when reading it. Different Than the Rest.
      Expressing You the Best!!
    </div>
  </main>

  <p></p>

  <h3>
    <b>Mental Health~</b>
    <b>General~</b>
    <b>Romance~</b>
    <b>Custom</b>
  </h3>

  <h3>
    <p>
      <a href="https://www.instagram.com/kittypinkcards/?hl=en"
        >Follow us on Instagram!</a
      >
    </p>
    <p>
      <a href="https://www.linkedin.com/m/in/kelby-a-estes-nelson-83350826/"
        >Follow us on Linkedin!</a
      >
    </p>
    .
  </h3>
`;
