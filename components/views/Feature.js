import html from "html-literal";
import ChrisKaiser from "../../assets/images/ChrisKaiser.jpg";
import BlackAuthorsExpo from "../../assets/images/BlackAuthorsExpo.png";
import TheCouplesPlaydate from "../../assets/images/TheCouplesPlaydate.jpg";
export default () => html`

<section class=events>
<h1>Upcoming Events</h1>
<img src=${BlackAuthorsExpo} alt="anxiety" width="500x500" /><br />
<p>KittyPinkCards will have Mothers's Day baskets and cards for sale as well as access to purchase PoeticPhotos</p>
</section>


<section class=poem>
      <h1><u>Poem of the Month</u></h1><br>
      <p class=week> <br>
      <br>

      Title:Beyond A Crush<br>
      <br>
Never felt this way before<br>
Feelings bursting out from the core of my heart<br>
This tells the story of where you and I start<br>
Many days I sit waiting by my phone<br>
For our daily talks<br>
Hoping that we hold hands,<br>
As we walk through the park<br>
<br>
As I scroll through your pictures,<br>
I remember why I dig you<br>
I envision big things with you<br>
Like dreams to share great joy with you,<br>
But you left me with no choice<br>
I have to confess that I’m in love with you<br>
<br>
Be each other’s strength,<br>
If one of us falls behind<br>
Lift each other to stand strong aligned<br>
Together we can create a whole new bloodline<br>
<br>
Let those past pains perish<br>
So we can be what they didn’t accomplish,<br>
A winning hand<br>
A royal flush<br>
A four of a kind<br>
Allowing us to be something beyond a crush<br>
</p>

<h4>For booking Chris:<br>
<img src=${ChrisKaiser} alt="anxiety" width="450x450" /><br />
</h4>

<h4>If you liked this poem let the Poet know by commenting below!</h4>
<div id="comment"><input type="text" id="comment-box" placeholder="Enter comment">
    <button id="post">Post</button>
    <ul id="unordered">

   </ul>

    <script src="code.js"></script>
    </div>

    <h4 font size=18px>Want to feature your poem here?<br>
  Email us and include your poem, name, and contact information</>

  <h4>Past Events</h4>

<p><h1>The Couples Playdate<br>
This was so much fun! Thecouplesplaydate.com for more info
<br>
<ul><a href="https://drive.google.com/drive/u/1/folders/16M64luy1Rw8EvI_s1tk-x-HFDnZAheQ7" target="popup">
    <img src=${TheCouplesPlaydate} alt="The Couples Playdate Event" width=500x500/>
   </ul></h4><br>Click for event pictures<br></a>
   </p>
  </section>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </section>
`;
