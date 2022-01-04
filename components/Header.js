import html from "html-literal";

export default st => html`
  <header>
    <h1>${st.header}</h1>
    <body>
<nav>
     <div class="bg-img">
         <div class="container">
           <div class="topnav">
             <a href= "index.html" target="_top"><u>Home</u></a>
                     <a href= "cards.html" target="_top"><u>Cards</u></a>
                     <a href= "About.html" target="_top"><u>About</u></a>
                         <a href= "books.html" target="_top"><u>Books</u></a>
                             <a href= "cart.html" target="_top"><u>Cart</u></a>
                             <ul class="hidden--mobile"></ul>
           </div>
         </div>
       </div>
  </header>
</nav>
</body>
`;
