export interface Mushroom {
  id: string;
  name: string;
  scientificName: string;
  edible: boolean;
  description: string;
  habitat: string;
  season: string[];
  characteristics: string[];
  similarSpecies: SimilarSpecies[];
  warning?: string;
  imageUrl: string;
}

export interface SimilarSpecies {
  name: string;
  difference: string;
  dangerous: boolean;
}

export interface IdentificationResult {
  mushroom: Mushroom;
  confidence: number;
  timestamp: number;
}

export interface SavedIdentification extends IdentificationResult {
  id: string;
  isFavorite: boolean;
  notes?: string;
  userImageUrl?: string;
}

export type Season = "春" | "夏" | "秋" | "冬";