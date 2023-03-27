
    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv() { //создаем новый <div> через класс
            let elem = document.createElement('div'); //создаем <div> на странице
            document.body.appendChild(elem); //вставляем <div> в body
            //записываем параметры стилей для <div>
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            elem.style.cssText = param; //вставляем в CSS параметры <div>
        }
    }

    const item = new Options(300, 400, "blue", 16, "center"); //передаем аргументы

    item.createDiv(); //создаем элемент на странице
