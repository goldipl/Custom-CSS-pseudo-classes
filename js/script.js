class CustomDiv extends HTMLElement {
    constructor() {
        super();
        this._internals = this.attachInternals();
        this._internals.states.add('--icon20left24');

        const shadowRoot = this.attachShadow({
            mode: 'closed'
        });
        shadowRoot.innerHTML =
        `<style>
            :host {
                position: relative;
                margin-left: 24px;
            }
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
};
customElements.define('custom-div', CustomDiv);