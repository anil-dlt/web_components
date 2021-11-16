const template = document.createElement("template"); //creating template for custom styling,doesnt effect outside
template.innerHTML = `  
 <style> 
h3{
    color:green;
}
 </style>
 <div class="user-card">
    <h3 id="random-text"></h3>
 </div>
`;

class RandomText extends HTMLElement {
  //custom Element
  constructor() {
    //called when instance of element is created
    super(); //call the constructor of extended HTMLElement

    this.attachShadow({ mode: "open" }); //creates shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name"); //custom data
    this.innerHTML = ``;

  }
  randomText(){
      console.log(111);
  }
  connectedCallback(){
        this.shadowRoot.querySelector('html').
        addEventListener('onload',()=>this.randomText());
}
}

window.customElements.define("random-text", RandomText);
