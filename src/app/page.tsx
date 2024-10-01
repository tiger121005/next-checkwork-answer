import Require from "@/components/Require";
import { SectionTitle } from "@/components/title/SectionTitle";
import TitleFirst from "@/components/title/TitleFirst";
import Text from "@/components/Text";

export default function Home() {
  return (
    <div className="bg-background">
      <TitleFirst>チェックワーク</TitleFirst>
      <SectionTitle>注意事項</SectionTitle>
      <div className="flex justify-center mt-20">
        <div className="w-[50vw]">
          <div className="flex justify-between mb-10">
            <Require src="/no-alchol.svg">飲酒、酒類の持ち込みおよび販売・配布禁止</Require>
            <Require src="/no-smoking.svg">指定場所以外での喫煙禁止<br />(喫煙所あり)</Require>
            <Require src="/keepout.svg">立ち入り禁止エリアあり</Require>
          </div>
          <div className="flex justify-between">
            <Require src="/no-pet.svg">ペット同伴禁止<br />(補助券を除く)</Require>
            <Require src="/no-activity.svg">無許可活動禁止</Require>
            <Require src="/no-hate.svg">SNSでの誹謗・中傷禁止</Require>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Text title="このテストの要項">
          ・必ずこの項目を全て読んでから制作を始めてください。<br /><br />
          ・作成するコンポーネントは3つです。<br />
          ・tailwindcssはpage.tsxにはできるだけ書かないようにしましょう。<br />
          ・指定する文章は全てPropsを使い、page.tsxから指定してください。<br />
          ・一番上にあるチェックワークと書いてあるページタイトルはすでに作成されているので、それを使用してください。<br />
          ・6つの注意事項はpage.tsxに同じコンポーネントを6つ書いて作成してください。(文章や文章や画像は変更しても構いません｡)<br />
          ・色はprimary, secondary, accent, text, backgroundを使用してください。(それぞれどんな色かわからないときは聞いてください)<br />
          ・画像素材はすでに入っていますので、それを使用してください。<br />
          ・ここの項目も作成してください。（長いので3行で構いません）<br /><br />
          ・人に聞くのは禁止ですが、ググったり、現在の本サイトのコードを参考にしても構いません。<br />
          ・チェックワークの実施についてわからないことがあれば聞いてください。<br />
          
        </Text>
      </div>
      
    </div>
  );
}
