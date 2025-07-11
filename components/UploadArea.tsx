"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Cloud, Upload, Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function UploadArea() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "エラー",
        description: "画像ファイル（JPG, PNG, WebP）のみ対応しています",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleIdentify = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    
    try {
      // Mock API call with a delay to simulate processing
      const formData = new FormData();
      formData.append('image', selectedFile);
      
      // Store the image in localStorage
      localStorage.setItem('lastUploadedImage', preview as string);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to results page
      router.push('/result');
    } catch (error) {
      toast({
        title: "エラー",
        description: "識別処理中にエラーが発生しました。もう一度お試しください。",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const resetSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileSelect}
      />
      
      {!preview ? (
        <Card 
          className={`border-2 border-dashed p-12 text-center transition-colors ${
            isDragging ? "border-green-500 bg-green-50 dark:bg-green-950/20" : "border-muted"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardContent className="pt-6 flex flex-col items-center">
            <Cloud className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">きのこの写真をアップロード</h3>
            <p className="text-sm text-muted-foreground mb-4">
              ドラッグ＆ドロップまたはファイル選択から写真をアップロードしてください
            </p>
            <div className="flex gap-2">
              <Button onClick={handleClick} className="bg-green-700 hover:bg-green-800">
                <Upload className="mr-2 h-4 w-4" />
                ファイルを選択
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  // This would trigger mobile camera
                  if (fileInputRef.current) {
                    fileInputRef.current.capture = 'environment';
                    fileInputRef.current.click();
                  }
                }}
              >
                <Camera className="mr-2 h-4 w-4" />
                カメラで撮影
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square w-full overflow-hidden">
              <img 
                src={preview} 
                alt="アップロードされた画像" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex justify-between">
              <Button variant="outline" onClick={resetSelection}>
                別の画像を選択
              </Button>
              <Button 
                onClick={handleIdentify} 
                disabled={isUploading}
                className="bg-green-700 hover:bg-green-800"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    識別中...
                  </>
                ) : (
                  "きのこを識別"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}