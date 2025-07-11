"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Chrome as Mushroom, Info, AlertTriangle, Save, Home, ArrowLeft, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getRandomMushroom } from "@/data/mushrooms";
import { IdentificationResult, SavedIdentification } from "@/lib/types";
import { v4 as uuidv4 } from "@/lib/uuid";

export default function ResultPage() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Get the uploaded image from localStorage
    const uploadedImage = localStorage.getItem('lastUploadedImage');
    
    if (!uploadedImage) {
      router.push('/');
      return;
    }
    
    setUserImage(uploadedImage);
    
    // Simulate AI identification with a delay
    const timer = setTimeout(() => {
      // Create a mock result
      const mushroom = getRandomMushroom();
      const confidence = 65 + Math.floor(Math.random() * 30); // 65-95%
      
      setResult({
        mushroom,
        confidence,
        timestamp: Date.now()
      });
      
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [router]);

  const handleSaveToCollection = () => {
    if (!result || !userImage) return;
    
    // Create a saved identification object
    const savedItem: SavedIdentification = {
      ...result,
      id: uuidv4(),
      isFavorite,
      notes: notes.trim() || undefined,
      userImageUrl: userImage
    };
    
    // Get existing collection from localStorage
    const existingCollectionJSON = localStorage.getItem('myMushroomCollection');
    const existingCollection: SavedIdentification[] = existingCollectionJSON 
      ? JSON.parse(existingCollectionJSON) 
      : [];
    
    // Add new item to collection
    const updatedCollection = [savedItem, ...existingCollection];
    
    // Save updated collection to localStorage
    localStorage.setItem('myMushroomCollection', JSON.stringify(updatedCollection));
    
    toast({
      title: "保存しました",
      description: "マイ図鑑に追加されました。",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <div className="relative w-24 h-24">
          <Mushroom className="h-16 w-16 text-green-600 dark:text-green-400 animate-pulse absolute inset-0 m-auto" />
        </div>
        <h2 className="text-xl font-medium mt-4">きのこを識別しています...</h2>
        <p className="text-muted-foreground mt-2">少々お待ちください</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
        <h2 className="text-xl font-medium">エラーが発生しました</h2>
        <p className="text-muted-foreground mt-2 mb-6">画像の識別に失敗しました。もう一度お試しください。</p>
        <Button onClick={() => router.push('/')}>
          <Home className="mr-2 h-4 w-4" />
          ホームに戻る
        </Button>
      </div>
    );
  }

  const { mushroom, confidence } = result;
  const formattedDate = new Date(result.timestamp).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Confidence level indicators
  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 90) return "非常に高い";
    if (confidence >= 75) return "高い";
    if (confidence >= 60) return "中程度";
    return "低い";
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "bg-green-600";
    if (confidence >= 75) return "bg-green-500";
    if (confidence >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => router.push('/')}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        戻る
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Image and basic info */}
        <div>
          <Card className="overflow-hidden mb-6">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <img 
                  src={userImage || ''} 
                  alt="アップロードされたきのこ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h1 className="text-2xl font-bold">{mushroom.name}</h1>
                <p className="text-sm text-muted-foreground italic">{mushroom.scientificName}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-amber-500" : ""}
              >
                {isFavorite ? <Heart className="h-5 w-5 fill-current" /> : <Heart className="h-5 w-5" />}
              </Button>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-muted-foreground mb-1">
                識別精度 - {getConfidenceLabel(confidence)}
              </div>
              <div className="flex items-center gap-2">
                <Progress value={confidence} className={getConfidenceColor(confidence)} />
                <span className="text-sm font-medium">{confidence}%</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex space-x-2 mb-2">
                <div className={`px-2 py-1 rounded text-xs ${
                  mushroom.edible 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                }`}>
                  {mushroom.edible ? "食用可能" : "食用不可"}
                </div>
                {mushroom.season.map((s) => (
                  <div key={s} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs">
                    {s}
                  </div>
                ))}
              </div>
              
              <div className="text-sm">
                <span className="font-medium">生息地: </span>{mushroom.habitat}
              </div>
            </div>
            
            {mushroom.warning && (
              <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300 text-sm mb-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{mushroom.warning}</p>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                メモを追加
              </label>
              <Textarea
                id="notes"
                placeholder="発見場所や状況などをメモできます"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
            
            <Button 
              onClick={handleSaveToCollection}
              className="w-full bg-green-700 hover:bg-green-800"
            >
              <Save className="mr-2 h-4 w-4" />
              マイ図鑑に保存
            </Button>
          </div>
        </div>
        
        {/* Right column - Detailed information */}
        <div>
          <Card>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">詳細</TabsTrigger>
                <TabsTrigger value="characteristics">特徴</TabsTrigger>
                <TabsTrigger value="similar">類似種</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="p-4">
                <h3 className="font-medium mb-2">説明</h3>
                <p className="text-sm mb-4">{mushroom.description}</p>
                
                <div className="mt-6">
                  <p className="text-xs text-muted-foreground">
                    識別日時: {formattedDate}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ※ この識別結果は参考情報です。専門家の判断を必ず仰いでください。
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="characteristics" className="p-4">
                <h3 className="font-medium mb-2">主な特徴</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {mushroom.characteristics.map((characteristic, index) => (
                    <li key={index}>{characteristic}</li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <p className="text-xs text-muted-foreground">
                    ※ この識別結果は参考情報です。専門家の判断を必ず仰いでください。
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="similar" className="p-4">
                <h3 className="font-medium mb-2">類似種</h3>
                
                {mushroom.similarSpecies.length > 0 ? (
                  <div className="space-y-4">
                    {mushroom.similarSpecies.map((species, index) => (
                      <div key={index} className={`p-3 rounded-md border ${
                        species.dangerous 
                          ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" 
                          : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                      }`}>
                        <div className="flex items-start">
                          {species.dangerous && (
                            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <h4 className={`font-medium text-sm ${species.dangerous ? "text-red-700 dark:text-red-300" : ""}`}>
                              {species.name}
                              {species.dangerous && " (要注意)"}
                            </h4>
                            <p className="text-sm mt-1">{species.difference}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">類似種情報はありません</p>
                )}
                
                <div className="mt-6">
                  <p className="text-xs text-muted-foreground">
                    ※ 類似種との区別は難しい場合があります。専門家の判断を必ず仰いでください。
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="mt-6">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-green-700 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-green-800 dark:text-green-300">
                    <p className="font-medium mb-1">専門家の判断を仰いでください</p>
                    <p>AIによる識別は100%正確ではありません。きのこの可食判断は必ず専門家に相談してください。誤った判断は重大な健康被害につながる可能性があります。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}