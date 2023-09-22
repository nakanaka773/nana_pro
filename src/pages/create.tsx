import Card from "@/Components/Card"
import Header from "@/Components/Header"


export default function Home() {
    return (
        
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 `}
        >
            <title>制作物一覧</title>
            <Header />
            <div className="md:grid grid-cols-3">
                <Card href="./create" text="arigato" title="arigato" />
                <Card href="./"  text="arigato" title="arigato"/>
                <Card href="./about" text="arigato" title="arigato" />
                <Card href="./create" text="arigato" title="arigato" />
            </div>
        </main>
    )
}
