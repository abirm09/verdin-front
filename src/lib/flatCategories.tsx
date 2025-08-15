import { TCategory } from "@/data/products";

function flattenCategories(category?: TCategory) {
  if (!category) return [];
  let result = [{ title: category.title, slug: category.slug }];
  if (category.children && category.children.length > 0) {
    for (const child of category.children) {
      result = result.concat(flattenCategories(child));
    }
  }
  return result;
}

export default flattenCategories;
