import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
export default st => html`
  Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
  like ${kelvinToFahrenheit(st.weather.feelsLike)}F

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kittypinkcards</title>
    <link href="style.css" rel="stylesheet" />
</head>

    <a href="" onClick="alert('Expressing YOU the best!')"
      >"Shop Here!"</a
    >
  </section>
 ;



<h1><b>Our Story</b> </h1>
        <main>
            <div class="About">
             The cards include poems from Kelby Estes-Nelson who is a published poet-author and
            has been performing poetry for over ten years. KittyPinkCards offers a general line, romantic line, mental health and a custom line of cards! KittyPinkCards has the goal to help others express what they are feeling creatively and personally, so that the receiver of the card experiences empathy when reading it.
            Different Than the Rest. Expressing You the Best!!
        </div>
            </main>

    <p>

<h3.category>
            <b>Mental Health~</b>
            <b>General~</b>
            <b>Romance~</b>
            <b>Custom</b>
    </h3.category>

`
