export type TCategory = {
  title: string;
  slug: string;
  image?: string;
  children: TCategory[];
};

export type TImage = {
  id: string;
  url: string;
  alt: string;
  public_id: string;
};

export type TImageGallery = {
  url: string;
  alt: string;
  public_id: string;
};

export type TVariation = {
  id: string;
  attributes: Record<string, string>[];
  price: string;
  inventory: string;
};

export type TProduct = {
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  categories: TCategory;
  image: TImage;
  image_gallery?: TImage[];
  variations?: TVariation[];
  highlight_text?: string | null;
  price: number;
  discount_price?: number | null;
};

function getRandomString(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const fakeProducts: TProduct[] = [
  {
    title: "Wireless Headset",
    slug: "wireless-bluetooth-headphones",
    short_description: "Comfortable over-ear wireless headphones with noise cancellation.",
    description:
      "Enjoy crystal-clear audio with these wireless Bluetooth headphones featuring active noise cancellation and 20-hour battery life.",
    categories: {
      title: "Electronics",
      slug: "electronics",
      children: [
        {
          title: "Audio",
          slug: "audio",
          children: [
            {
              title: "Headphones",
              slug: "headphones",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231913/headphone_gnlmfu.png",
      alt: "Wireless Headset image",
      public_id: `products/headphones/${getRandomString(8)}`,
    },
    image_gallery: [],
    variations: [
      {
        id: "328bs98f",
        attributes: [{ title: "Watt", value: "5 watt" }],
        price: "10.234",
        inventory: "823",
      },
    ],
    highlight_text: "10% off",
    price: 100,
    discount_price: 95,
  },
  {
    title: "Fresh vegetables",
    slug: "organic-green-tea",
    short_description: "Fresh and healthy green tea leaves sourced from organic farms.",
    description:
      "A soothing and antioxidant-rich green tea perfect for relaxation and health benefits.",
    categories: {
      title: "Groceries",
      slug: "groceries",
      children: [
        {
          title: "Beverages",
          slug: "beverages",
          children: [
            {
              title: "Tea",
              slug: "tea",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628437/fresh-vegetables_edcloe.png",
      alt: "Fresh vegetables image",
      public_id: `products/vegetables/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 20,
  },
  {
    title: "Mac book pro",
    slug: "mens-cotton-tshirt",
    short_description: "Soft cotton t-shirt perfect for casual wear.",
    description: "A breathable and comfortable cotton t-shirt available in multiple colors.",
    categories: {
      title: "Fashion",
      slug: "fashion",
      children: [
        {
          title: "Men",
          slug: "men",
          children: [
            {
              title: "T-Shirts",
              slug: "t-shirts",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628038/MacBook-Pro_tkwl97.png",
      alt: "Mac book pro image",
      public_id: `products/macbook/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 123,
    discount_price: 115,
  },
  {
    title: "Gaming Mouse",
    slug: "gaming-mouse",
    short_description: "High-precision wired gaming mouse with RGB lighting.",
    description:
      "A lightweight, ergonomic gaming mouse with customizable buttons and DPI settings.",
    categories: {
      title: "Electronics",
      slug: "electronics",
      children: [
        {
          title: "Computers",
          slug: "computers",
          children: [
            {
              title: "Accessories",
              slug: "accessories",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231912/mouse_fua9no.png",
      alt: "Gaming Mouse image",
      public_id: `products/mouse/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 60,
  },
  {
    title: "Seed planter",
    slug: "wooden-dining-table",
    short_description: "Solid wood dining table with a polished finish.",
    description:
      "A handcrafted dining table made from premium oak wood, perfect for family gatherings.",
    categories: {
      title: "Furniture",
      slug: "furniture",
      children: [
        {
          title: "Dining Room",
          slug: "dining-room",
          children: [
            {
              title: "Tables",
              slug: "tables",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628996/seed-pot_nqoent.png",
      alt: "Seed planter image",
      public_id: `products/planter/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 50,
  },
  {
    title: "Smart LED TV",
    slug: "smart-led-tv",
    short_description: "55-inch smart LED TV with 4K resolution.",
    description: "Experience vibrant colors and sharp images with this 55-inch 4K smart LED TV.",
    categories: {
      title: "Electronics",
      slug: "electronics",
      children: [
        {
          title: "TV & Home Theater",
          slug: "tv-home-theater",
          children: [
            {
              title: "Smart TVs",
              slug: "smart-tvs",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231913/smart_tv_sv9ixg.png",
      alt: "Smart LED TV image",
      public_id: `products/tv/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 90,
  },
  {
    title: "Hand spade",
    slug: "leather-office-chair",
    short_description: "Comfortable leather office chair with adjustable height.",
    description: "A premium leather office chair designed for all-day comfort and support.",
    categories: {
      title: "Furniture",
      slug: "furniture",
      children: [
        {
          title: "Office Furniture",
          slug: "office-furniture",
          children: [
            {
              title: "Chairs",
              slug: "chairs",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754629375/hand-spade_uwc4dv.png",
      alt: "Hand spade image",
      public_id: `products/chair/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 34,
    discount_price: 30,
  },
  {
    title: "Running Shoes",
    slug: "running-shoes",
    short_description: "Lightweight running shoes for daily exercise.",
    description: "High-performance running shoes with breathable mesh and cushioned soles.",
    categories: {
      title: "Fashion",
      slug: "fashion",
      children: [
        {
          title: "Men",
          slug: "men",
          children: [
            {
              title: "Shoes",
              slug: "shoes",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231913/running_shoes_gc9pna.png",
      alt: "Running Shoes image",
      public_id: `products/shoes/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 67,
  },
  {
    title: "Ceramic Dinner Set",
    slug: "ceramic-dinner-set",
    short_description: "Elegant ceramic dinner set for six people.",
    description:
      "A premium-quality ceramic dinner set with a smooth glaze finish, perfect for family meals.",
    categories: {
      title: "Home & Kitchen",
      slug: "home-kitchen",
      children: [
        {
          title: "Kitchenware",
          slug: "kitchenware",
          children: [
            {
              title: "Dinner Sets",
              slug: "dinner-sets",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231913/ceramic__dinner_set_pyveov.png",
      alt: "Ceramic Dinner Set image",
      public_id: `products/dinnerset/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 120,
  },
  {
    title: "Stainless Steel Water Bottle",
    slug: "stainless-steel-water-bottle",
    short_description: "Durable and insulated stainless steel water bottle.",
    description:
      "Keeps your beverages hot or cold for up to 12 hours. Leak-proof and eco-friendly.",
    categories: {
      title: "Home & Kitchen",
      slug: "home-kitchen",
      children: [
        {
          title: "Drinkware",
          slug: "drinkware",
          children: [
            {
              title: "Water Bottles",
              slug: "water-bottles",
              children: [],
            },
          ],
        },
      ],
    },
    image: {
      id: getRandomString(8),
      url: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1755231913/water_bottle_xdoaa9.png",
      alt: "Stainless Steel Water Bottle image",
      public_id: `products/bottle/${getRandomString(8)}`,
    },
    image_gallery: [],
    price: 200,
  },
];

export { fakeProducts as fakeProduct };
