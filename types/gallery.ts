export interface GalleryItem {
  id: number;
  category: 'interior' | 'exterior' | 'wallpapering' | 'commercial';
  title: string;
  image: string;
  description: string;
  link?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  count?: number;
}
