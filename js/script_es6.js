window.addEventListener('DOMContentLoaded', function() {

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = text.textAlign;
        }
        createDiv() {
            let elem = document.createElement('div'); //создаем <div> на странице
            document.body.appendChild(elem); //вставляем <div> в body
            //записываем параметры стилей для <div>
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            elem.style.cssText = param; //вставляем в CSS параметры <div>
        }
    }

});