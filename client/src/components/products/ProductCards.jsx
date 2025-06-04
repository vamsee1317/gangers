const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic Hoodie in gray.",
    price: '$65',
    color: 'Gray',
  },
  {
    id: 3,
    name: 'Sport Jacket',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Sport Jacket in navy blue.",
    price: '$120',
    color: 'Navy Blue',
  },
  {
    id: 4,
    name: 'Casual Shirt',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Casual Shirt in light blue.",
    price: '$45',
    color: 'Light Blue',
  },
  {
    id: 5,
    name: 'Denim Jeans',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: "Denim Jeans in classic blue.",
    price: '$70',
    color: 'Classic Blue',
  },
  {
    id: 6,
    name: 'Summer Shorts',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: "Summer Shorts in beige.",
    price: '$30',
    color: 'Beige',
  },
  {
    id: 7,
    name: 'Polo Shirt',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: "Polo Shirt in white.",
    price: '$40',
    color: 'White',
  },
  {
    id: 8,
    name: 'Slim Fit Chinos',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: "Slim Fit Chinos in olive.",
    price: '$55',
    color: 'Olive',
  },
  {
    id: 9,
    name: 'Leather Belt',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/15799243/pexels-photo-15799243/free-photo-of-earrings-on-belt.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: "Leather Belt in dark brown.",
    price: '$25',
    color: 'Dark Brown',
  },
  {
    id: 10,
    name: 'Formal Shirt',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: "Formal Shirt in white.",
    price: '$50',
    color: 'White',
  },
  {
    id: 11,
    name: 'Graphic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "Graphic Tee with logo.",
    price: '$28',
    color: 'Black',
  },
  {
    id: 12,
    name: 'Track Pants',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-03.jpg',
    imageAlt: "Track Pants in charcoal.",
    price: '$48',
    color: 'Charcoal',
  },
  {
    id: 13,
    name: 'Bomber Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-03-product-04.jpg',
    imageAlt: "Bomber Jacket in army green.",
    price: '$130',
    color: 'Army Green',
  },
  {
    id: 14,
    name: 'Wool Sweater',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-03-product-01.jpg',
    imageAlt: "Wool Sweater in maroon.",
    price: '$85',
    color: 'Maroon',
  },
  {
    id: 15,
    name: 'Raincoat',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt: "Raincoat in yellow.",
    price: '$60',
    color: 'Yellow',
  },
];



export default function ProductCards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
