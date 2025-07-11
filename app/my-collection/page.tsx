"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chrome as MushroomIcon, Trash2, Search, Star, Heart, PencilLine, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { SavedIdentification } from "@/lib/types";

export default function MyCollectionPage() {
  const [collection, setCollection] = useState<SavedIdentification[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedNotes, setEditedNotes] = useState('');
  const router = useRouter();
  const { toast } = useToast();
  
  useEffect(() => {
    // Load collection from localStorage
    const collectionJSON = localStorage.getItem('myMushroomCollection');
    if (collectionJSON) {
      try {
        const parsedCollection = JSON.parse(collectionJSON);
        setCollection(parsedCollection);
      } catch (error) {
        console.error("Failed to parse collection:", error);
        setCollection([]);
      }
    }
  }, []);
  
  const handleToggleFavorite = (id: string) => {
    const updatedCollection = collection.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    
    setCollection(updatedCollection);
    localStorage.setItem('myMushroomCollection', JSON.stringify(updatedCollection));
    
    toast({
      title: updatedCollection.find(i => i.id === id)?.isFavorite 
        ? "お気に入りに追加しました" 
        : "お気に入りから削除しました",
      duration: 1500
    });
  };
  
  const handleDelete = (id: string) => {
    const updatedCollection = collection.filter(item => item.id !== id);
    setCollection(updatedCollection);
    localStorage.setItem('myMushroomCollection', JSON.stringify(updatedCollection));
    
    toast({
      title: "削除しました",
      description: "マイ図鑑から削除されました。",
      duration: 2000
    });
  };
  
  const handleStartEdit = (id: string) => {
    const item = collection.find(item => item.id === id);
    if (item) {
      setEditingId(id);
      setEditedNotes(item.notes || '');
    }
  };
  
  const handleSaveEdit = (id: string) => {
    const updatedCollection = collection.map(item => 
      item.id === id ? { ...item, notes: editedNotes } : item
    );
    
    setCollection(updatedCollection);
    localStorage.setItem('myMushroomCollection', JSON.stringify(updatedCollection));
    setEditingId(null);
    
    toast({
      title: "メモを更新しました",
      duration: 1500
    });
  };
  
  const handleCancelEdit = () => {
    setEditingId(null);
  };
  
  const filteredCollection = collection.filter(item => 
    item.mushroom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.mushroom.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const favorites = filteredCollection.filter(item => item.isFavorite);

  if (collection.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-4">マイ図鑑</h1>
          <div className="flex flex-col items-center justify-center h-[40vh] bg-white dark:bg-gray-800 rounded-lg p-10">
            <MushroomIcon className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium mb-2">マイ図鑑はまだ空です</h2>
            <p className="text-muted-foreground mb-6">きのこの写真をアップロードして識別結果を保存しましょう。</p>
            <Button onClick={() => router.push('/')}>
              きのこを識別する
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold">マイ図鑑</h1>
        <div className="relative mt-3 sm:mt-0 w-full sm:w-auto">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="検索..." 
            className="pl-8 w-full sm:w-60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">すべて ({filteredCollection.length})</TabsTrigger>
          <TabsTrigger value="favorites">お気に入り ({favorites.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCollection.map((item) => (
              <MushroomCard
                key={item.id}
                item={item}
                onToggleFavorite={handleToggleFavorite}
                onDelete={handleDelete}
                onEdit={handleStartEdit}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
                isEditing={editingId === item.id}
                editedNotes={editedNotes}
                setEditedNotes={setEditedNotes}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="favorites">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <MushroomCard
                  key={item.id}
                  item={item}
                  onToggleFavorite={handleToggleFavorite}
                  onDelete={handleDelete}
                  onEdit={handleStartEdit}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={handleCancelEdit}
                  isEditing={editingId === item.id}
                  editedNotes={editedNotes}
                  setEditedNotes={setEditedNotes}
                />
              ))}
            </div>
          ) : (
            <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-muted-foreground">お気に入りに追加したきのこはありません</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface MushroomCardProps {
  item: SavedIdentification;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onSaveEdit: (id: string) => void;
  onCancelEdit: () => void;
  isEditing: boolean;
  editedNotes: string;
  setEditedNotes: React.Dispatch<React.SetStateAction<string>>;
}

function MushroomCard({
  item,
  onToggleFavorite,
  onDelete,
  onEdit,
  onSaveEdit,
  onCancelEdit,
  isEditing,
  editedNotes,
  setEditedNotes
}: MushroomCardProps) {
  const formattedDate = new Date(item.timestamp).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <img 
          src={item.userImageUrl} 
          alt={item.mushroom.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{item.mushroom.name}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite(item.id)}
            className={item.isFavorite ? "text-amber-500 h-8 w-8" : "h-8 w-8"}
          >
            {item.isFavorite ? (
              <Heart className="h-4 w-4 fill-current" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground italic mb-2">{item.mushroom.scientificName}</p>
        
        <div className="flex space-x-1 mb-3">
          <div className={`px-2 py-0.5 rounded text-xs ${
            item.mushroom.edible 
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
          }`}>
            {item.mushroom.edible ? "食用可能" : "食用不可"}
          </div>
          <div className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {item.confidence}%
          </div>
        </div>
        
        {isEditing ? (
          <div>
            <Textarea
              placeholder="メモを入力してください"
              value={editedNotes}
              onChange={(e) => setEditedNotes(e.target.value)}
              rows={3}
              className="mb-2 text-sm"
            />
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={onCancelEdit}
                className="text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                キャンセル
              </Button>
              <Button 
                size="sm" 
                onClick={() => onSaveEdit(item.id)}
                className="text-xs bg-green-700 hover:bg-green-800"
              >
                <Save className="h-3 w-3 mr-1" />
                保存
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-500 mb-1">メモ:</p>
            <p className="text-sm">
              {item.notes || "メモがありません"}
            </p>
          </>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t mt-auto">
        <span className="text-xs text-muted-foreground">{formattedDate}</span>
        
        <div className="flex space-x-1">
          {!isEditing && (
            <Button 
              size="icon" 
              variant="ghost"
              className="h-8 w-8"
              onClick={() => onEdit(item.id)}
            >
              <PencilLine className="h-4 w-4" />
            </Button>
          )}
          <Button 
            size="icon" 
            variant="ghost"
            className="h-8 w-8 text-red-500"
            onClick={() => onDelete(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}