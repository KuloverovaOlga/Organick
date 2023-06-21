function cards(selector, count) {
    class MenuCard {
        constructor(kind, img, altimg, name, oldPrice, discont, id, parentSelector, ...classes) {
            this.kind = kind;
            this.img = img;
            this.altimg = altimg;
            this.name = name;
            this.oldPrice = oldPrice;
            this.discont = discont;
            this.newPrise = ((oldPrice * (100 - this.discont)) / 100).toFixed(2);
            this.id = id;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length == 0) {
                this.classes = 'products__card';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach((className) => element.classList.add(className));
            }
            element.innerHTML = `
                <div class="products__kind"><span class="products__kind-text">${this.kind}</span></div>
                <a href="#">
                    <img class="products__img" src=${this.img} alt=${this.altimg} />
                    <p class="products__name">${this.name}</p>
                </a>
                <div class="line"></div>
                <div class="products__desc">
                    <div class="products__price">
                        <span class="products__old-price">₽ ${this.oldPrice} РУБ</span>
                        <span class="products__new-price">₽ ${this.newPrise} РУБ</span>
                        <div class="rating">
                            <div class="rating__items">
                                <input id="rating-${this.id}__5" class="rating__item" type="radio" name="rating-${this.id}" value="5" checked />
                                <label for="rating-${this.id}__5" class="rating__label"></label>
                                <input id="rating-${this.id}__4" class="rating__item" type="radio" name="rating-${this.id}" value="4" />
                                <label for="rating-${this.id}__4" class="rating__label"></label>
                                <input id="rating-${this.id}__3" class="rating__item" type="radio" name="rating-${this.id}" value="3" />
                                <label for="rating-${this.id}__3" class="rating__label"></label>
                                <input id="rating-${this.id}__2" class="rating__item" type="radio" name="rating-${this.id}" value="2" />
                                <label for="rating-${this.id}__2" class="rating__label"></label>
                                <input id="rating-${this.id}__1" class="rating__item" type="radio" name="rating-${this.id}" value="1" />
                                <label for="rating-${this.id}__1" class="rating__label"></label>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getData = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status^ ${res.status}`);
        }

        return await res.json();
    };

    getData('db.json').then((data) => {
        console.log(data)
        data.menu.forEach(({ kind, img, altimg, name, oldPrice, discont, id }, i) => {
            if (i < count) {
                new MenuCard(kind, img, altimg, name, oldPrice, discont, id, selector).render();
            }
        });
    });

}

export default cards;
