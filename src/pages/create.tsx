import Card from "@/Components/Card"
import Header from "@/Components/Common/Header"


export default function Home() {
    return (
        <div>
            <title>制作物一覧</title>
            <Header title="制作物一覧"/>
            <div className="md:grid grid-cols-3">
                <Card href="./creation/color" title="RGBからカラーコードへ" text="RGBのそれぞれのピッカーを動かすことで、表している色のカラーコードが動的に取得できます"  />
                <Card href="./creation/janken" title="じゃんけん" text="簡単なじゃんけんを作ってみました。自分の手を選ぶとランダムで相手の手が出てきます。勝ち負けも判定されます" />
                <Card href="./creation/kan" title="間を探せ" text="正しい「間」のフォントを探すクイズです。Google Fontから作っています" />
            </div>
        </div>
    )
}
