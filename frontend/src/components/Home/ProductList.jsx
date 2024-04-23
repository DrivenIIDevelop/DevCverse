import ProductCard from "./ProductCard";


const productList = [
    {
    id: 1,
    brand: "Anua",
    name: "Heartleaf Qurecetinol - Pore Deep Cleansing Foam", 
    price: 16.23,
    review: 4.9,
    reviewCount: 127,
    image: "https://s3-alpha-sig.figma.com/img/52cb/1354/58f73ac859d25fb75cd61dd434902379?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKMlVbWOtf4q753LAmyWSnH127FaygDCygxfiLB~O8FFHr23OwcdDYlKh5fSiYrNSsP85R1WkzyJnDrPXx2wJGVoBQBWSKhs2OR~bOghy6vIkc5IddRFkPARVYbcXD3MzNVfsgVI1EFFVoyIkqO5MYpawqGUiG3khZOFpk7hJTtj5vgsrlXaBdc4Ve3irKZYsK0Ba9Svtmhl2rfKSvwgyIhi5ChIBDqJouivOPrbnlfOrruBrxLLwMQ6d~F4dNU5AqSsy5u~RUq7dTherxbYeVpYfKFuEHqsJV8ln9l4nywdAe18W1dwzTgXCgG4cL9VpFiOIfCMgVHY124eXj~Jng__",
    badge: ["Clean", "Cruelty-Free"],
    like: false,
    },
]

const productArr = []

for (let i = 0; i < 8; i++) {
    productArr.push(productList[0])
}


export default function ProductList() {
  return (
    <ul className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-16">
        {productArr.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </ul>
  )
}
