const products = [
  {
    name: 'iPhone 9',
    price: 549,
    brand: 'Apple',
    category: 'smartphones',
    description: 'An apple mobile which is nothing like apple',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/1/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/1/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/1/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/1/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/1/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'iPhone X',
    price: 899,
    brand: 'Apple',
    category: 'smartphones',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/2/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/2/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/2/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/2/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Samsung Universe 9',
    price: 1249,
    brand: 'Samsung',
    category: 'smartphones',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    images: [
      {
        name: '1.jpg',
        url: '/images/products/3/1.jpg',
      },
    ],
  },
  {
    name: 'OPPOF19',
    price: 280,
    brand: 'OPPO',
    category: 'smartphones',
    description: 'OPPO F19 is officially announced on April 2021.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/4/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/4/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/4/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/4/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/4/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Huawei P30',
    price: 499,
    brand: 'Huawei',
    category: 'smartphones',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/5/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/5/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/5/3.jpg',
      },
    ],
  },
  {
    name: 'MacBook Pro',
    price: 1749,
    brand: 'Apple',
    category: 'laptops',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    images: [
      {
        name: '1.png',
        url: '/images/products/6/1.png',
      },
      {
        name: '2.jpg',
        url: '/images/products/6/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/6/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/6/4.jpg',
      },
    ],
  },
  {
    name: 'Samsung Galaxy Book',
    price: 1499,
    brand: 'Samsung',
    category: 'laptops',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/7/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/7/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/7/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/7/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Microsoft Surface Laptop 4',
    price: 1499,
    brand: 'Microsoft Surface',
    category: 'laptops',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/8/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/8/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/8/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/8/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/8/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Infinix INBOOK',
    price: 1099,
    brand: 'Infinix',
    category: 'laptops',
    description:
      'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/9/1.jpg',
      },
      {
        name: '2.png',
        url: '/images/products/9/2.png',
      },
      {
        name: '3.png',
        url: '/images/products/9/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/9/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/9/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'HP Pavilion 15-DK1056WM',
    price: 1099,
    brand: 'HP Pavilion',
    category: 'laptops',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/10/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/10/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/10/3.jpg',
      },
      {
        name: 'thumbnail.jpeg',
        url: '/images/products/10/thumbnail.jpeg',
      },
    ],
  },
  {
    name: 'perfume Oil',
    price: 13,
    brand: 'Impression of Acqua Di Gio',
    category: 'fragrances',
    description:
      'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/11/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/11/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/11/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/11/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Brown Perfume',
    price: 40,
    brand: 'Royal_Mirage',
    category: 'fragrances',
    description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/12/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/12/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/12/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/12/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/12/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Fog Scent Xpressio Perfume',
    price: 13,
    brand: 'Fog Scent Xpressio',
    category: 'fragrances',
    description:
      'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/13/1.jpg',
      },
      {
        name: '2.png',
        url: '/images/products/13/2.png',
      },
      {
        name: '3.jpg',
        url: '/images/products/13/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/13/4.jpg',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/13/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Non-Alcoholic Concentrated Perfume Oil',
    price: 120,
    brand: 'Al Munakh',
    category: 'fragrances',
    description:
      'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/14/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/14/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/14/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/14/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Eau De Perfume Spray',
    price: 30,
    brand: 'Lord - Al-Rehab',
    category: 'fragrances',
    description:
      'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/15/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/15/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/15/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/15/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/15/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Hyaluronic Acid Serum',
    price: 19,
    brand: "L'Oreal Paris",
    category: 'skincare',
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    images: [
      {
        name: '1.png',
        url: '/images/products/16/1.png',
      },
      {
        name: '2.webp',
        url: '/images/products/16/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/16/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/16/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/16/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Tree Oil 30ml',
    price: 12,
    brand: 'Hemani Tea',
    category: 'skincare',
    description:
      'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/17/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/17/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/17/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/17/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Oil Free Moisturizer 100ml',
    price: 40,
    brand: 'Dermive',
    category: 'skincare',
    description:
      'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/18/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/18/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/18/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/18/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/18/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Skin Beauty Serum.',
    price: 46,
    brand: 'ROREC White Rice',
    category: 'skincare',
    description:
      'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/19/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/19/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/19/3.png',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/19/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Freckle Treatment Cream- 15gm',
    price: 70,
    brand: 'Fair & Clear',
    category: 'skincare',
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    images: [
      {
        name: '1.jpg',
        url: '/images/products/20/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/20/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/20/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/20/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/20/thumbnail.jpg',
      },
    ],
  },
  {
    name: '- Daal Masoor 500 grams',
    price: 20,
    brand: 'Saaf & Khaas',
    category: 'groceries',
    description: 'Fine quality Branded Product Keep in a cool and dry place',
    images: [
      {
        name: '1.png',
        url: '/images/products/21/1.png',
      },
      {
        name: '2.jpg',
        url: '/images/products/21/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/21/3.jpg',
      },
    ],
  },
  {
    name: 'Elbow Macaroni - 400 gm',
    price: 14,
    brand: 'Bake Parlor Big',
    category: 'groceries',
    description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/22/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/22/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/22/3.jpg',
      },
    ],
  },
  {
    name: 'Orange Essence Food Flavou',
    price: 14,
    brand: 'Baking Food Items',
    category: 'groceries',
    description:
      'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/23/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/23/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/23/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/23/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/23/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'cereals muesli fruit nuts',
    price: 46,
    brand: 'fauji',
    category: 'groceries',
    description:
      'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/24/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/24/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/24/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/24/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/24/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Gulab Powder 50 Gram',
    price: 70,
    brand: 'Dry Rose',
    category: 'groceries',
    description: 'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
    images: [
      {
        name: '1.png',
        url: '/images/products/25/1.png',
      },
      {
        name: '2.jpg',
        url: '/images/products/25/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/25/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/25/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/25/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Plant Hanger For Home',
    price: 41,
    brand: 'Boho Decor',
    category: 'home-decoration',
    description:
      'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/26/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/26/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/26/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/26/4.jpg',
      },
      {
        name: '5.jpg',
        url: '/images/products/26/5.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/26/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Flying Wooden Bird',
    price: 51,
    brand: 'Flying Wooden',
    category: 'home-decoration',
    description:
      'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/27/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/27/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/27/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/27/4.jpg',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/27/thumbnail.webp',
      },
    ],
  },
  {
    name: '3D Embellishment Art Lamp',
    price: 20,
    brand: 'LED Lights',
    category: 'home-decoration',
    description:
      '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/28/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/28/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/28/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/28/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/28/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Handcraft Chinese style',
    price: 60,
    brand: 'luxury palace',
    category: 'home-decoration',
    description:
      'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/29/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/29/2.jpg',
      },
      {
        name: '3.webp',
        url: '/images/products/29/3.webp',
      },
      {
        name: '4.webp',
        url: '/images/products/29/4.webp',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/29/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Key Holder',
    price: 30,
    brand: 'Golden',
    category: 'home-decoration',
    description:
      'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/30/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/30/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/30/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/30/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Mornadi Velvet Bed',
    price: 40,
    brand: 'Furniture Bed Set',
    category: 'furniture',
    description:
      'Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/31/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/31/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/31/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/31/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/31/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Sofa for Coffe Cafe',
    price: 50,
    brand: 'Ratttan Outdoor',
    category: 'furniture',
    description:
      'Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/32/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/32/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/32/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/32/thumbnail.jpg',
      },
    ],
  },
  {
    name: '3 Tier Corner Shelves',
    price: 700,
    brand: 'Kitchen Shelf',
    category: 'furniture',
    description:
      '3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/33/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/33/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/33/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/33/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/33/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Plastic Table',
    price: 50,
    brand: 'Multi Purpose',
    category: 'furniture',
    description:
      'V﻿ery good quality plastic table for multi purpose now in reasonable price',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/34/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/34/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/34/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/34/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/34/thumbnail.jpg',
      },
    ],
  },
  {
    name: '3 DOOR PORTABLE',
    price: 41,
    brand: 'AmnaMart',
    category: 'furniture',
    description:
      'Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/35/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/35/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/35/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/35/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/35/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Sleeve Shirt Womens',
    price: 90,
    brand: 'Professional Wear',
    category: 'tops',
    description:
      'Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/36/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/36/2.webp',
      },
      {
        name: '3.webp',
        url: '/images/products/36/3.webp',
      },
      {
        name: '4.jpg',
        url: '/images/products/36/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/36/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'ank Tops for Womens/Girls',
    price: 50,
    brand: 'Soft Cotton',
    category: 'tops',
    description:
      'PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/37/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/37/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/37/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/37/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/37/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'sublimation plain kids tank',
    price: 100,
    brand: 'Soft Cotton',
    category: 'tops',
    description: 'sublimation plain kids tank tops wholesale',
    images: [
      {
        name: '1.png',
        url: '/images/products/38/1.png',
      },
      {
        name: '2.jpg',
        url: '/images/products/38/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/38/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/38/4.jpg',
      },
    ],
  },
  {
    name: 'Women Sweaters Wool',
    price: 600,
    brand: 'Top Sweater',
    category: 'tops',
    description:
      "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
    images: [
      {
        name: '1.jpg',
        url: '/images/products/39/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/39/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/39/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/39/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/39/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'women winter clothes',
    price: 57,
    brand: 'Top Sweater',
    category: 'tops',
    description:
      'women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/40/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/40/2.jpg',
      },
    ],
  },
  {
    name: 'NIGHT SUIT',
    price: 55,
    brand: 'RED MICKY MOUSE..',
    category: 'womens-dresses',
    description: 'NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/41/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/41/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/41/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/41/4.jpg',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/41/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Stiched Kurta plus trouser',
    price: 80,
    brand: 'Digital Printed',
    category: 'womens-dresses',
    description:
      'FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN',
    images: [
      {
        name: '1.png',
        url: '/images/products/42/1.png',
      },
      {
        name: '2.png',
        url: '/images/products/42/2.png',
      },
      {
        name: '3.png',
        url: '/images/products/42/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/42/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/42/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'frock gold printed',
    price: 600,
    brand: 'Ghazi Fabric',
    category: 'womens-dresses',
    description:
      'Ghazi fabric long frock gold printed ready to wear stitched collection (G992)',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/43/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/43/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/43/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/43/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/43/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Ladies Multicolored Dress',
    price: 79,
    brand: 'Ghazi Fabric',
    category: 'womens-dresses',
    description:
      'This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/44/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/44/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/44/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/44/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/44/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Malai Maxi Dress',
    price: 50,
    brand: 'IELGY',
    category: 'womens-dresses',
    description:
      'Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/45/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/45/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/45/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/45/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/45/thumbnail.jpg',
      },
    ],
  },
  {
    name: "women's shoes",
    price: 40,
    brand: 'IELGY fashion',
    category: 'womens-shoes',
    description:
      'Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber',
    images: [
      {
        name: '1.webp',
        url: '/images/products/46/1.webp',
      },
      {
        name: '2.jpg',
        url: '/images/products/46/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/46/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/46/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/46/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Sneaker shoes',
    price: 120,
    brand: 'Synthetic Leather',
    category: 'womens-shoes',
    description:
      'Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/47/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/47/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/47/3.jpg',
      },
      {
        name: 'thumbnail.jpeg',
        url: '/images/products/47/thumbnail.jpeg',
      },
    ],
  },
  {
    name: 'Women Strip Heel',
    price: 40,
    brand: 'Sandals Flip Flops',
    category: 'womens-shoes',
    description:
      'Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/48/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/48/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/48/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/48/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/48/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Chappals & Shoe Ladies Metallic',
    price: 23,
    brand: 'Maasai Sandals',
    category: 'womens-shoes',
    description:
      'Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/49/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/49/2.jpg',
      },
      {
        name: '3.webp',
        url: '/images/products/49/3.webp',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/49/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Women Shoes',
    price: 36,
    brand: 'Arrivals Genuine',
    category: 'womens-shoes',
    description:
      '2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes',
    images: [
      {
        name: '1.jpeg',
        url: '/images/products/50/1.jpeg',
      },
      {
        name: '2.jpg',
        url: '/images/products/50/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/50/3.jpg',
      },
    ],
  },
  {
    name: 'half sleeves T shirts',
    price: 23,
    brand: 'Vintage Apparel',
    category: 'mens-shirts',
    description:
      'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
    images: [
      {
        name: '1.png',
        url: '/images/products/51/1.png',
      },
      {
        name: '2.jpg',
        url: '/images/products/51/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/51/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/51/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'FREE FIRE T Shirt',
    price: 10,
    brand: 'FREE FIRE',
    category: 'mens-shirts',
    description:
      "quality and professional print - It doesn't just look high quality, it is high quality.",
    images: [
      {
        name: '1.png',
        url: '/images/products/52/1.png',
      },
      {
        name: '2.png',
        url: '/images/products/52/2.png',
      },
      {
        name: '3.jpg',
        url: '/images/products/52/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/52/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/52/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'printed high quality T shirts',
    price: 35,
    brand: 'Vintage Apparel',
    category: 'mens-shirts',
    description: 'Brand: vintage Apparel ,Export quality',
    images: [
      {
        name: '1.webp',
        url: '/images/products/53/1.webp',
      },
      {
        name: '2.jpg',
        url: '/images/products/53/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/53/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/53/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/53/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Pubg Printed Graphic T-Shirt',
    price: 46,
    brand: 'The Warehouse',
    category: 'mens-shirts',
    description:
      'Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/54/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/54/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/54/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/54/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/54/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Money Heist Printed Summer T Shirts',
    price: 66,
    brand: 'The Warehouse',
    category: 'mens-shirts',
    description: 'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/55/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/55/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/55/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/55/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/55/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Sneakers Joggers Shoes',
    price: 40,
    brand: 'Sneakers',
    category: 'mens-shoes',
    description:
      'Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/56/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/56/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/56/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/56/4.jpg',
      },
      {
        name: '5.jpg',
        url: '/images/products/56/5.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/56/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Loafers for men',
    price: 47,
    brand: 'Rubber',
    category: 'mens-shoes',
    description:
      'Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/57/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/57/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/57/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/57/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/57/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'formal offices shoes',
    price: 57,
    brand: 'The Warehouse',
    category: 'mens-shoes',
    description:
      'Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/58/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/58/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/58/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/58/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/58/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Spring and summershoes',
    price: 20,
    brand: 'Sneakers',
    category: 'mens-shoes',
    description:
      'Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/59/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/59/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/59/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/59/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/59/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Stylish Casual Jeans Shoes',
    price: 58,
    brand: 'Sneakers',
    category: 'mens-shoes',
    description:
      'High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/60/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/60/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/60/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/60/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Leather Straps Wristwatch',
    price: 120,
    brand: 'Naviforce',
    category: 'mens-watches',
    description: 'Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/61/1.jpg',
      },
      {
        name: '2.png',
        url: '/images/products/61/2.png',
      },
      {
        name: '3.jpg',
        url: '/images/products/61/3.jpg',
      },
    ],
  },
  {
    name: 'Waterproof Leather Brand Watch',
    price: 46,
    brand: 'SKMEI 9117',
    category: 'mens-watches',
    description:
      'Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/62/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/62/2.jpg',
      },
    ],
  },
  {
    name: 'Royal Blue Premium Watch',
    price: 50,
    brand: 'SKMEI 9117',
    category: 'mens-watches',
    description:
      'Men Silver Chain Royal Blue Premium Watch Latest Analog Watch',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/63/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/63/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/63/3.png',
      },
      {
        name: '4.jpeg',
        url: '/images/products/63/4.jpeg',
      },
    ],
  },
  {
    name: 'Leather Strap Skeleton Watch',
    price: 46,
    brand: 'Strap Skeleton',
    category: 'mens-watches',
    description:
      'Leather Strap Skeleton Watch for Men - Stylish and Latest Design',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/64/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/64/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/64/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/64/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Stainless Steel Wrist Watch',
    price: 47,
    brand: 'Stainless',
    category: 'mens-watches',
    description:
      "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    images: [
      {
        name: '1.jpg',
        url: '/images/products/65/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/65/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/65/3.jpg',
      },
      {
        name: '4.webp',
        url: '/images/products/65/4.webp',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/65/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Steel Analog Couple Watches',
    price: 35,
    brand: 'Eastern Watches',
    category: 'womens-watches',
    description: 'Elegant design, Stylish ,Unique & Trendy,Comfortable wear',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/66/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/66/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/66/3.jpg',
      },
      {
        name: '4.JPG',
        url: '/images/products/66/4.JPG',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/66/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Fashion Magnetic Wrist Watch',
    price: 60,
    brand: 'Eastern Watches',
    category: 'womens-watches',
    description:
      "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    images: [
      {
        name: '1.jpg',
        url: '/images/products/67/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/67/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/67/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/67/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/67/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Stylish Luxury Digital Watch',
    price: 57,
    brand: 'Luxury Digital',
    category: 'womens-watches',
    description:
      'Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/68/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/68/2.jpg',
      },
    ],
  },
  {
    name: 'Golden Watch Pearls Bracelet Watch',
    price: 47,
    brand: 'Watch Pearls',
    category: 'womens-watches',
    description:
      'Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/69/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/69/2.jpg',
      },
      {
        name: '3.webp',
        url: '/images/products/69/3.webp',
      },
      {
        name: '4.jpg',
        url: '/images/products/69/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/69/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Stainless Steel Women',
    price: 35,
    brand: 'Bracelet',
    category: 'womens-watches',
    description:
      'Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/70/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/70/2.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/70/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Women Shoulder Bags',
    price: 46,
    brand: 'LouisWill',
    category: 'womens-bags',
    description:
      'LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/71/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/71/2.jpg',
      },
      {
        name: '3.webp',
        url: '/images/products/71/3.webp',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/71/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Handbag For Girls',
    price: 23,
    brand: 'LouisWill',
    category: 'womens-bags',
    description:
      'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/72/1.jpg',
      },
      {
        name: '2.png',
        url: '/images/products/72/2.png',
      },
      {
        name: '3.webp',
        url: '/images/products/72/3.webp',
      },
      {
        name: '4.jpg',
        url: '/images/products/72/4.jpg',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/72/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Fancy hand clutch',
    price: 44,
    brand: 'Bracelet',
    category: 'womens-bags',
    description:
      'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/73/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/73/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/73/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/73/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Leather Hand Bag',
    price: 57,
    brand: 'Copenhagen Luxe',
    category: 'womens-bags',
    description:
      'It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/74/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/74/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/74/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/74/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/74/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Seven Pocket Women Bag',
    price: 68,
    brand: 'Steal Frame',
    category: 'womens-bags',
    description:
      'Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/75/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/75/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/75/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/75/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Silver Ring Set Women',
    price: 70,
    brand: 'Darojay',
    category: 'womens-jewellery',
    description:
      'Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/76/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/76/2.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/76/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Rose Ring',
    price: 100,
    brand: 'Copenhagen Luxe',
    category: 'womens-jewellery',
    description:
      'Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/77/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/77/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/77/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/77/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Rhinestone Korean Style Open Rings',
    price: 30,
    brand: 'Fashion Jewellery',
    category: 'womens-jewellery',
    description:
      'Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women',
    images: [
      {
        name: 'thumbnail.jpg',
        url: '/images/products/78/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Elegant Female Pearl Earrings',
    price: 30,
    brand: 'Fashion Jewellery',
    category: 'womens-jewellery',
    description:
      'Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/79/1.jpg',
      },
    ],
  },
  {
    name: 'Chain Pin Tassel Earrings',
    price: 45,
    brand: 'Cuff Butterfly',
    category: 'womens-jewellery',
    description:
      'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/80/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/80/2.jpg',
      },
      {
        name: '3.png',
        url: '/images/products/80/3.png',
      },
      {
        name: '4.jpg',
        url: '/images/products/80/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/80/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Round Silver Frame Sun Glasses',
    price: 19,
    brand: 'Designer Sun Glasses',
    category: 'sunglasses',
    description:
      'A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/81/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/81/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/81/3.jpg',
      },
      {
        name: '4.webp',
        url: '/images/products/81/4.webp',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/81/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Kabir Singh Square Sunglass',
    price: 50,
    brand: 'Designer Sun Glasses',
    category: 'sunglasses',
    description:
      'Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/82/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/82/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/82/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/82/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/82/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Wiley X Night Vision Yellow Glasses',
    price: 30,
    brand: 'mastar watch',
    category: 'sunglasses',
    description:
      'Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/83/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/83/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/83/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/83/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/83/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Square Sunglasses',
    price: 28,
    brand: 'mastar watch',
    category: 'sunglasses',
    description:
      'Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/84/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/84/2.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/84/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'LouisWill Men Sunglasses',
    price: 50,
    brand: 'LouisWill',
    category: 'sunglasses',
    description:
      'LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/85/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/85/2.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/85/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Bluetooth Aux',
    price: 25,
    brand: 'Car Aux',
    category: 'automotive',
    description:
      'Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/86/1.jpg',
      },
      {
        name: '2.webp',
        url: '/images/products/86/2.webp',
      },
      {
        name: '3.jpg',
        url: '/images/products/86/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/86/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/86/thumbnail.jpg',
      },
    ],
  },
  {
    name: 't Temperature Controller Incubator Controller',
    price: 40,
    brand: 'W1209 DC12V',
    category: 'automotive',
    description:
      'Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/87/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/87/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/87/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/87/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/87/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'TC Reusable Silicone Magic Washing Gloves',
    price: 29,
    brand: 'TC Reusable',
    category: 'automotive',
    description:
      'TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/88/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/88/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/88/3.jpg',
      },
      {
        name: '4.webp',
        url: '/images/products/88/4.webp',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/88/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Qualcomm original Car Charger',
    price: 40,
    brand: 'TC Reusable',
    category: 'automotive',
    description:
      'best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/89/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/89/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/89/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/89/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/89/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Cycle Bike Glow',
    price: 35,
    brand: 'Neon LED Light',
    category: 'automotive',
    description:
      'Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/90/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/90/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/90/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/90/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/90/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Black Motorbike',
    price: 569,
    brand: 'METRO 70cc Motorcycle - MR70',
    category: 'motorcycle',
    description:
      'Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/91/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/91/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/91/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/91/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/91/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'HOT SALE IN EUROPE electric racing motorcycle',
    price: 920,
    brand: 'BRAVE BULL',
    category: 'motorcycle',
    description:
      'HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/92/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/92/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/92/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/92/4.jpg',
      },
    ],
  },
  {
    name: 'Automatic Motor Gas Motorcycles',
    price: 1050,
    brand: 'shock absorber',
    category: 'motorcycle',
    description:
      '150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/93/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/93/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/93/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/93/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/93/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'new arrivals Fashion motocross goggles',
    price: 900,
    brand: 'JIEPOLLY',
    category: 'motorcycle',
    description:
      'new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle',
    images: [
      {
        name: '1.webp',
        url: '/images/products/94/1.webp',
      },
      {
        name: '2.jpg',
        url: '/images/products/94/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/94/3.jpg',
      },
      {
        name: 'thumbnail.webp',
        url: '/images/products/94/thumbnail.webp',
      },
    ],
  },
  {
    name: 'Wholesale cargo lashing Belt',
    price: 930,
    brand: 'Xiangle',
    category: 'motorcycle',
    description:
      'Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/95/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/95/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/95/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/95/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/95/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'lighting ceiling kitchen',
    price: 30,
    brand: 'lightingbrilliance',
    category: 'lighting',
    description:
      'Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/96/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/96/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/96/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/96/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/96/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Metal Ceramic Flower',
    price: 35,
    brand: 'Ifei Home',
    category: 'lighting',
    description:
      'Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/97/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/97/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/97/3.jpg',
      },
      {
        name: '4.webp',
        url: '/images/products/97/4.webp',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/97/thumbnail.jpg',
      },
    ],
  },
  {
    name: '3 lights lndenpant kitchen islang',
    price: 34,
    brand: 'DADAWU',
    category: 'lighting',
    description:
      '3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/98/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/98/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/98/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/98/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/98/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'American Vintage Wood Pendant Light',
    price: 46,
    brand: 'Ifei Home',
    category: 'lighting',
    description:
      'American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/99/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/99/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/99/3.jpg',
      },
      {
        name: '4.jpg',
        url: '/images/products/99/4.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/99/thumbnail.jpg',
      },
    ],
  },
  {
    name: 'Crystal chandelier maria theresa for 12 light',
    price: 47,
    brand: 'YIOSI',
    category: 'lighting',
    description: 'Crystal chandelier maria theresa for 12 light',
    images: [
      {
        name: '1.jpg',
        url: '/images/products/100/1.jpg',
      },
      {
        name: '2.jpg',
        url: '/images/products/100/2.jpg',
      },
      {
        name: '3.jpg',
        url: '/images/products/100/3.jpg',
      },
      {
        name: 'thumbnail.jpg',
        url: '/images/products/100/thumbnail.jpg',
      },
    ],
  },
]

module.exports = products
