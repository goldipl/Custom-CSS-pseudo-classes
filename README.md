# Custom CSS pseudo-classes which can be used in Chrome (version above 90) & custom tags

## Requirements
* Chrome **version 90** or higher (for custom pseudo-classes)

## Custom tag `<custom-div>`  

```js
class CustomDiv extends HTMLElement {
    constructor() {
      super();
      this._internals = this.attachInternals();
    };
};
customElements.define('custom-div', CustomDiv);
```

## Custom pseudo-class `:--icon20left24`  

```js
this._internals.states.add('--icon20left24');

const shadowRoot = this.attachShadow({
   mode: 'closed'
});
shadowRoot.innerHTML =
    `<style>
        :host(:--icon20left24)::before { 
            position: absolute;
            content: '';
            width: 20px;
            height: 20px;
            left: -24px;
            top: 50%;
            transform: translateY(-50%);
            background-size: 20px;
        };
    </style>
    <slot></slot>`;
};
```

## More info about `:--icon20left24` pseudo-class:</h2>

* first value `20` means logo sizes `20px`
* second value `24` means left value is `-24px`
* if you want to change image just define/change your CSS style:
```css
custom-div:--icon20left24::before { 
    background-image: url('your_image_url.jpg');
}
```
and that's all.

## How can I use these pseudo-classes?
Just add the file named `customPseudoClasses.js` to your project and it's done.    
From now on you can use pseudo-classes in your project with for instance custom tag `<custom-div>`. Pseudo-classes like:
* ```:--icon20left24```

## Sources:
* [Custom State Pseudo Class W3C](https://wicg.github.io/custom-state-pseudo-class/)
* [attachInternals()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals)

## Live link:
https://goldipl.github.io/Custom-CSS-pseudo-classes/