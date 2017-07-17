(function(){

    // icon-toggle element
    class IconToggle extends Polymer.GestureEventListeners(Polymer.Element) {
      static get is() {
        return "icon-toggle";
      }      
      static get properties(){
        return {
          pressed: {
            type: Boolean,
            notify: true,
            reflectToAttribute: true,
            value: false
          },
          toggleIcon:{
            type: String
          },
        }
      }
      constructor() {
        super();
        Polymer.Gestures.addListener(this, 'tap', () => this.toggle());
      }
      toggle() {
        this.pressed = !this.pressed;
      }
    }


    // demo-element element
    class DemoElement extends Polymer.Element {
      static get is() { return "demo-element" }

      handleClick(e) {
        this.dispatchEvent(new CustomEvent('kick', {detail: {kicked: true}}));
      }
      _message(fav) {
        if (fav) {
          return "You really like me!";
        } 
        else {
          return "Do you like me?";
        }
      }
    }

    // define elements
    customElements.define(IconToggle.is, IconToggle);
    customElements.define(DemoElement.is, DemoElement);

    
    Polymer.dom(this.root).querySelector('demo-element').addEventListener('kick', function (e) {
        console.log(e.detail.kicked); // true
    })

    var myElement = Polymer.dom(this.root).querySelector('demo-element');
    var div = document.createElement('custom-element');

    Polymer.dom(this.root).appendChild(div);

})();