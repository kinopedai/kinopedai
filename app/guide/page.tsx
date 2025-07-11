import { AlertTriangle, Info, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-2">使い方ガイド</h1>
        <p className="text-muted-foreground">Myきのこ図鑑の使い方と注意事項をご紹介します</p>
      </div>

      <Tabs defaultValue="usage">
        <TabsList className="mb-4">
          <TabsTrigger value="usage">使い方</TabsTrigger>
          <TabsTrigger value="safety">安全な利用</TabsTrigger>
          <TabsTrigger value="seasons">きのこと季節</TabsTrigger>
          <TabsTrigger value="faq">よくある質問</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usage">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">基本的な使い方</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                  <h3 className="font-medium flex items-center text-lg mb-2">
                    <span className="flex items-center justify-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full w-6 h-6 mr-2 text-sm">1</span>
                    きのこの写真をアップロード
                  </h3>
                  <p className="ml-8 text-sm mb-2">ホーム画面でドラッグ＆ドロップまたはファイル選択ボタンから写真をアップロードします。</p>
                  <ul className="ml-8 list-disc list-inside text-sm text-muted-foreground">
                    <li>スマートフォンの場合はカメラで直接撮影することもできます</li>
                    <li>明るい場所で、きのこ全体がよく見えるように撮影してください</li>
                    <li>対応フォーマット: JPG, PNG, WebP</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                  <h3 className="font-medium flex items-center text-lg mb-2">
                    <span className="flex items-center justify-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full w-6 h-6 mr-2 text-sm">2</span>
                    AIによる識別
                  </h3>
                  <p className="ml-8 text-sm mb-2">「きのこを識別」ボタンを押すと、AIがきのこの種類を判定します。</p>
                  <ul className="ml-8 list-disc list-inside text-sm text-muted-foreground">
                    <li>識別には数秒かかります</li>
                    <li>現在は10種類の日本の一般的なきのこに対応しています</li>
                    <li>精度は条件によって異なります</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                  <h3 className="font-medium flex items-center text-lg mb-2">
                    <span className="flex items-center justify-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full w-6 h-6 mr-2 text-sm">3</span>
                    識別結果の確認
                  </h3>
                  <p className="ml-8 text-sm mb-2">識別結果、特徴、類似種などの情報を確認できます。</p>
                  <ul className="ml-8 list-disc list-inside text-sm text-muted-foreground">
                    <li>詳細、特徴、類似種のタブで詳しい情報を確認</li>
                    <li>警告表示がある場合は特に注意してください</li>
                    <li>メモを追加して保存することもできます</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                  <h3 className="font-medium flex items-center text-lg mb-2">
                    <span className="flex items-center justify-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full w-6 h-6 mr-2 text-sm">4</span>
                    マイ図鑑に保存
                  </h3>
                  <p className="ml-8 text-sm mb-2">「マイ図鑑に保存」ボタンで結果を保存できます。</p>
                  <ul className="ml-8 list-disc list-inside text-sm text-muted-foreground">
                    <li>お気に入り登録も可能</li>
                    <li>後からメモの編集ができます</li>
                    <li>データはこの端末のみに保存されます</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="safety">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="text-red-500 mr-2 h-5 w-5" />
                安全にご利用いただくために
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg mb-6">
                <p className="font-medium text-red-800 dark:text-red-300 mb-2">重要な注意事項</p>
                <p className="text-sm text-red-700 dark:text-red-200">
                  このアプリの識別結果は参考情報です。食用可能かどうかの判断は、必ず専門家（きのこ鑑定人、専門家、地域のきのこの会など）に相談してください。誤った判断により重大な健康被害が生じる可能性があります。
                </p>
              </div>
              
              <h3 className="font-medium mb-2">きのこ採取・同定の基本ルール</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">完全な形で採取する</p>
                    <p className="text-muted-foreground">根元まで含めた全体を採取し、土を落とさないようにします。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">生息環境を記録する</p>
                    <p className="text-muted-foreground">周辺の樹木、地質、湿度などの環境情報も重要な識別要素です。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">複数の特徴で確認する</p>
                    <p className="text-muted-foreground">見た目だけでなく、におい、断面の色、傘の裏側の構造なども確認します。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">専門家の判断を仰ぐ</p>
                    <p className="text-muted-foreground">特に初心者は、必ず経験豊富な専門家に確認を依頼しましょう。</p>
                  </div>
                </li>
              </ul>
              
              <h3 className="font-medium mb-2">危険なきのこの特徴</h3>
              <p className="text-sm mb-3">以下のような特徴があるきのこは特に注意が必要です：</p>
              <ul className="list-disc list-inside space-y-1 text-sm mb-6">
                <li>つばや基部にふくらみ（ツボ）があるもの</li>
                <li>傘の裏側がひだ状で白いもの</li>
                <li>傘や柄に鮮やかな色（赤、黄色など）があるもの</li>
                <li>傷つけると色が変わるもの</li>
                <li>特異的な強い匂いがするもの</li>
              </ul>
              
              <div className="flex items-start bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                <div className="text-sm text-amber-800 dark:text-amber-300">
                  <p className="font-medium mb-1">100%の識別は困難です</p>
                  <p>きのこの識別は専門家でも難しい場合があります。見た目が似ていても全く異なる種類のことがあり、中には少量でも命に関わる猛毒を持つものも存在します。安全のため、確実に判別できないきのこは決して食べないでください。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seasons">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">季節ときのこの関係</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
                  <h3 className="font-medium text-lg mb-2">春のきのこ</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>しいたけ</li>
                    <li>きくらげ</li>
                    <li>ホワイトマッシュルーム</li>
                    <li>アミガサタケ（モリーユ）</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    春は比較的きのこの種類が少ない時期ですが、しいたけなどの栽培種や一部の野生種が見られます。
                  </p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-100 dark:border-amber-800">
                  <h3 className="font-medium text-lg mb-2">夏のきのこ</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>きくらげ</li>
                    <li>マッシュルーム</li>
                    <li>ハナイグチ</li>
                    <li>ヌメリスギタケ</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    梅雨から夏にかけては湿度が高く、一部の種類のきのこが発生します。
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-100 dark:border-orange-800">
                  <h3 className="font-medium text-lg mb-2">秋のきのこ</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>まつたけ</li>
                    <li>しいたけ</li>
                    <li>えのきたけ</li>
                    <li>しめじ</li>
                    <li>まいたけ</li>
                    <li>なめこ</li>
                    <li>やまぶしたけ</li>
                    <li>ひらたけ</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    秋は最もきのこが豊富に発生する季節です。多くの食用きのこが採れる時期です。
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <h3 className="font-medium text-lg mb-2">冬のきのこ</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>えのきたけ</li>
                    <li>ひらたけ</li>
                    <li>ナメコ</li>
                    <li>エノキダケ</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    冬は野生のきのこは少なくなりますが、栽培種や寒冷地で発生する一部の種類が見られます。
                  </p>
                </div>
              </div>
              
              <h3 className="font-medium mb-3">きのこ採取の最適時期</h3>
              <p className="text-sm mb-4">
                きのこの発生には、気温、湿度、降水量が大きく影響します。多くの食用きのこは、
                気温が15〜25℃で、雨の後の湿度が高い時期に発生します。特に秋（9〜11月）は
                多くの種類のきのこが森や山に現れる時期です。
              </p>
              
              <div className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">写真撮影のコツ</p>
                  <p className="mb-2">きのこを識別しやすい写真を撮るポイント：</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>きのこの全体像（傘の上部、傘の裏側、柄の部分）</li>
                    <li>自然な生育環境を含めた撮影</li>
                    <li>光が十分な明るい環境で撮影</li>
                    <li>近接撮影で特徴的な部分の詳細も記録</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faq">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">よくある質問</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>このアプリはオフラインでも使えますか？</AccordionTrigger>
                  <AccordionContent>
                    基本的な機能（マイ図鑑の閲覧など）はオフラインでも利用可能ですが、新しいきのこの識別にはインターネット接続が必要です。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>識別精度はどのくらいですか？</AccordionTrigger>
                  <AccordionContent>
                    現在のバージョンでは、約10種類の一般的な日本のきのこに対応しています。精度は環境条件や写真の質によって異なりますが、参考情報としてご利用ください。最終的な判断は必ず専門家に相談することをお勧めします。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>保存したデータはどこに保存されますか？</AccordionTrigger>
                  <AccordionContent>
                    すべてのデータはお使いの端末のローカルストレージに保存されます。クラウドなどへのアップロードは行われません。ブラウザのデータをクリアすると保存データも削除されるのでご注意ください。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>対応しているきのこの種類は増えますか？</AccordionTrigger>
                  <AccordionContent>
                    今後のアップデートで対応きのこ種類を増やしていく予定です。現在は日本で一般的な食用きのこを中心に10種類に対応しています。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>AIが判定できなかった場合はどうすればよいですか？</AccordionTrigger>
                  <AccordionContent>
                    判定できない場合は、別の角度から写真を撮り直してみてください。それでも識別できない場合は、現時点で対応していない種類の可能性があります。専門家や地域のきのこの会などに相談することをお勧めします。
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>安全なきのこ採取のために気をつけることは？</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>知識のない状態で絶対に食べない</li>
                      <li>複数の特徴で確認する（見た目だけでなく、におい、生える場所など）</li>
                      <li>一つの特徴だけで判断しない</li>
                      <li>少しでも疑わしい場合は食べない</li>
                      <li>地域の専門家や図鑑で確認する</li>
                      <li>初めて食べる場合は少量から試す</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}