import UploadArea from "@/components/UploadArea";
import { Chrome as Mushroom } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center mb-2">
          <Mushroom className="h-10 w-10 text-green-800 dark:text-green-500 mr-2" />
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-500">
            Myきのこ図鑑
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          写真をアップロードして、きのこの種類を識別しましょう。あなただけのきのこ図鑑を作れます。
        </p>
      </div>
      
      <div className="mb-10">
        <UploadArea />
      </div>
      
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-300 text-sm mb-6">
        <p className="font-medium">⚠️ 重要な注意事項</p>
        <p>このアプリの識別結果は参考情報です。食用の判断は専門家に必ず相談してください。誤った判断により健康被害が生じる可能性があります。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-2 border-l-4 border-green-600 dark:border-green-400 pl-2">
            使い方
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>きのこの写真をアップロードする</li>
            <li>AIがきのこの種類を識別</li>
            <li>結果を確認し、マイ図鑑に保存</li>
            <li>メモを追加して自分だけの図鑑を作成</li>
          </ol>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-2 border-l-4 border-green-600 dark:border-green-400 pl-2">
            特徴
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>10種類の日本の一般的なきのこに対応</li>
            <li>詳細な特徴と類似種の情報を提供</li>
            <li>あなただけのきのこ図鑑を作成可能</li>
            <li>季節ごとのきのこ情報も確認できる</li>
          </ul>
        </div>
      </div>
    </div>
  );
}