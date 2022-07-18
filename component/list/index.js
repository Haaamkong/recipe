import Component from "../Component.js";
import DK from "../eachrecipe/돼지고기_김치찌개.js";

class List extends Component {

    setEvent() {
        this.addEvent('click', '#dk', () => {
            const $contents = this.$target.querySelector('#contents');
            new DK($contents);
        })
    }

    template() {
        return `
        <div id='list' class='list'>
            <details>
                <summary>국/찌개</summary>
                <ul>
                    <li><a id='dk'>돼지고기 김치찌개</a></li>
                    <li><a href="/component/eachrecipe/꽁치_김치찌개.html">꽁치 김치찌개</a></li>
                    <li><a href="/component/eachrecipe/카레.html" target="_blank">카레</a></li>
                    <li><a href="/component/eachrecipe/소고기_미역국.html" target="_blank">소고기 미역국</a></li>
                    <li><a href="/component/eachrecipe/얼큰_소고기_무국.html" target="_blank">얼큰 소고기 무국</a></li>
                    <li><a href="/component/eachrecipe/샤브샤브_버섯_칼국수.html" target="_blank">샤브샤브 버섯 칼국수</a></li>
                </ul>
            </details>
            <details>
                <summary>볶음/조림/찜</summary>
                <ul>
                    <li><a href="/component/eachrecipe/콩나물_불고기.html" target="_blank">콩나물 불고기</a></li>
                    <li><a href="/component/eachrecipe/오삼새불고기.html" target="_blank">오삼새불고기</a></li>
                    <li><a href="/component/eachrecipe/갈치조림.html" target="_blank">갈치조림</a></li>
                    <li><a href="/component/eachrecipe/수육.html" target="_blank">수육</a></li>
                    <li><a href="/component/eachrecipe/꽈리고추_삼겹살_볶음.html" target="_blank">꽈리고추 삼겹살 볶음</a></li>
                </ul>
            </details>
            <details>
                <summary>구이/전</summary>
                <ul>
                    <li><a href="/component/eachrecipe/닭불고기.html" target="_blank">닭불고기</a></li>
                </ul>
            </details>
            <details>
                <summary>면</summary>
                <ul>
                    <li><a href="/component/eachrecipe/" target="_blank">알리오올리오</a></li>
                </ul>
            </details>
            <details>
                <summary>밑반찬</summary>
                <ul>
                    <li><a href="/component/eachrecipe/" target="_blank">부추무침</a></li>
                    <li><a href="/component/eachrecipe/" target="_blank">미역줄기 볶음</a></li>
                    <li><a href="/component/eachrecipe/" target="_blank">시금치 무침</a></li>
                </ul>
            </details>
        </div>
        <div id='contents' class='contents'></div>
        `;
    }
}

export default List;