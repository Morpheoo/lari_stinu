import {
  products,
  type Product,
} from "@/data/products";
import {
  artisanProfiles,
  getArtisanById,
  getReviewsByArtisanId,
  reviews,
  type Review,
} from "@/data/artisans";

export type CatalogSort = "featured" | "price-asc" | "price-desc" | "name-asc";

export interface CatalogFilters {
  search?: string;
  categories?: string[];
  location?: string;
  artisan?: string;
}

const FEATURED_PRODUCT_IDS = ["1", "13", "22"] as const;

const FEATURED_PRODUCT_TAGS: Record<string, string> = {
  "1": "Herencia",
  "13": "Favorito",
  "22": "Icónico",
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return FEATURED_PRODUCT_IDS.map((id) => getProductById(id)).filter(
    (product): product is Product => Boolean(product)
  );
}

export function getFeaturedProductTag(productId: string) {
  return FEATURED_PRODUCT_TAGS[productId] ?? "Destacado";
}

export function filterProducts(
  source: Product[],
  { search, categories = [], location, artisan }: CatalogFilters
) {
  const normalizedSearch = search ? normalizeText(search.trim()) : "";

  return source.filter((product) => {
    if (categories.length > 0 && !categories.includes(product.category)) {
      return false;
    }

    if (location && product.artisan.location !== location) {
      return false;
    }

    if (artisan && product.artisan.name !== artisan) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const searchableFields = [
      product.name,
      product.description,
      product.category,
      product.color,
      product.artisan.name,
      product.artisan.location,
    ];

    return searchableFields.some((field) =>
      normalizeText(field).includes(normalizedSearch)
    );
  });
}

export function sortProducts(source: Product[], sort: CatalogSort) {
  const sorted = [...source];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "es"));
    case "featured":
    default:
      return sorted;
  }
}

export function getCatalogFacets() {
  const categories = [...new Set(products.map((product) => product.category))];
  const locations = [...new Set(products.map((product) => product.artisan.location))];
  const artisans = [...new Set(products.map((product) => product.artisan.name))];

  return { categories, locations, artisans };
}

export function getCommunityCount() {
  return new Set(
    artisanProfiles.map((artisan) => artisan.location.split(",")[0].trim())
  ).size;
}

export function getVerifiedPercentage() {
  const verifiedCount = artisanProfiles.filter((artisan) => artisan.isVerified).length;
  return artisanProfiles.length === 0
    ? 0
    : Math.round((verifiedCount / artisanProfiles.length) * 100);
}

export function getArtisanMetrics(artisanId: string) {
  const artisan = getArtisanById(artisanId);
  const artisanReviews = getReviewsByArtisanId(artisanId);
  const artisanProducts = products.filter((product) => product.artisan.id === artisanId);
  const averageRating =
    artisanReviews.length === 0
      ? artisan?.rating ?? 0
      : Math.round(
          (artisanReviews.reduce((sum, review) => sum + review.rating, 0) /
            artisanReviews.length) *
            10
        ) / 10;

  return {
    reviewCount: artisanReviews.length,
    productCount: artisanProducts.length,
    averageRating,
  };
}

export function getResolvedReviewProduct(review: Review) {
  if (!review.productId) {
    return undefined;
  }

  return getProductById(review.productId);
}

export function getResolvedReviewProductName(review: Review) {
  return getResolvedReviewProduct(review)?.name ?? review.productName;
}

export function getReviewsWithResolvedProducts() {
  return reviews.map((review) => ({
    ...review,
    productName: getResolvedReviewProductName(review),
  }));
}
