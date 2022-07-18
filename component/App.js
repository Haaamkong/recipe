import Component from "./Component.js";
import Home from "./home/index.js";

export default class App extends Component {
    mounted() {
        new Home(this.$target);
    }
}