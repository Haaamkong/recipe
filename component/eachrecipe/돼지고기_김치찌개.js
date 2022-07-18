import Component from "../Component.js";

class DK extends Component {

    template() {
        return `
            <h2>돼지고기 김치찌개</h2>
            재료: 찌개용 돼지고기, 김치, 쇠고기 다시다, 소금, 간장
            <ol>
            <li>찌개용 돼지고기가 노릇노릇해질 때 까지 볶는다.</li>
            <li>고기 겉면이 노릇해지면 김치를 넣고 김치가 투명해질때까지 함께 볶는다.</li>
            <li>적당량의 물, 다시다 스틱 1개를 넣고 푹 끓인다.</li>
            <li>맛을 본 뒤 모자란 간은 간장과 소금으로 조절한다.</li>
            </ol>
        `
    }
}

export default DK;