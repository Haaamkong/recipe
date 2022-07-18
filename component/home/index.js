import Component from "../Component.js";
import List from "../list/index.js";

class Home extends Component {

    setEvent() {
        this.addEvent('click', '#goBtn', () => {
            this.$target.innerHTML = `<div id='grid' class='grid'></div>`;
            const $grid = this.$target.querySelector('#grid');
            new List($grid);
        });
    }

    template() {
        return `
            <div id='goBtn' class='goBtn'>
                <img src="img/imgRecipeBook.png" alt="Recipe" width="100%">
                <h1>RECIPE BOOK</h1>
            </div>
        `;
    }
}

export default Home;