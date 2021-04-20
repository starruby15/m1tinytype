const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "qasft","wsz","edx","rfc","tgv",
            "yhb","ujn","ikm","olp",
            "enter","space","backspace",
            "done"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["tgv", "olp", "backspace"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "qasft":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/qa.svg" />';

                    let timer 
                    
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer = setTimeout(() => {
                                this.properties.value += "a";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer)
                            timer = setTimeout(() => {
                                this.properties.value += "q";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        
                    });
                    break;
                case "wsz":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/wsz.svg" />';

                    
                    let timer2 
                    
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer2 = setTimeout(() => {
                                this.properties.value += "s";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer2)
                            timer2 = setTimeout(() => {
                                this.properties.value += "w";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer2)
                            this.properties.value += "z";
                            this._triggerEvent("oninput");
                        }
                    });
                    
                    break;
                case "edx":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/edx.svg" />';
                    let timer3 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer3 = setTimeout(() => {
                                this.properties.value += "d";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer3)
                            timer3 = setTimeout(() => {
                                this.properties.value += "e";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer3)
                            this.properties.value += "x";
                            this._triggerEvent("oninput");
                        }
                    });
                    
                    break;
                case "rfc":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/rfc.svg" />';
                    let timer4
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer4 = setTimeout(() => {
                                this.properties.value += "f";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer4)
                            timer4 = setTimeout(() => {
                                this.properties.value += "r";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer4)
                            this.properties.value += "c";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;
                case "tgv":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/tgv.svg" />';
                    let timer5 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer5 = setTimeout(() => {
                                this.properties.value += "g";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer5)
                            timer5 = setTimeout(() => {
                                this.properties.value += "t";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer5)
                            this.properties.value += "v";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;
                case "yhb":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/yhb.svg" />';
                    let timer6 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer6 = setTimeout(() => {
                                this.properties.value += "h";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer6)
                            timer6 = setTimeout(() => {
                                this.properties.value += "y";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer6)
                            this.properties.value += "b";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;
                case "ujn":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/ujn.svg" />';
                    let timer7 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer7 = setTimeout(() => {
                                this.properties.value += "j";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer7)
                            timer7 = setTimeout(() => {
                                this.properties.value += "u";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer7)
                            this.properties.value += "n";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;
                    
                case "ikm":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/ikm.svg" />';
                    let timer8 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer8 = setTimeout(() => {
                                this.properties.value += "k";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer8)
                            timer8 = setTimeout(() => {
                                this.properties.value += "i";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer8)
                            this.properties.value += "m";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;
                case "olp":
                    keyElement.innerHTML = '<img src="/Users/evelynliu/Documents/m1_tinytype/assets/olp.svg" />';
                    let timer9 
                    keyElement.addEventListener("click", (evt) => {
                        if(evt.detail === 1) {
                            timer9 = setTimeout(() => {
                                this.properties.value += "l";
                                this._triggerEvent("oninput");
                            }, 300)
                            
                        }
                        else if (evt.detail === 2) {
                            clearTimeout(timer9)
                            timer9 = setTimeout(() => {
                                this.properties.value += "o";
                                this._triggerEvent("oninput");
                            }, 300)
                        }
                        else if(evt.detail === 3) {
                            clearTimeout(timer9)
                            this.properties.value += "p";
                            this._triggerEvent("oninput");
                        }
                    });
                    break;    
                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};



window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

