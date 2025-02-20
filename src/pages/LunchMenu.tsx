const hibachiLunchItems = [
  { name: "Chicken Hibachi", price: "$14.95" },
  { name: "Shrimp Hibachi", price: "$16.95" },
  { name: "Steak Hibachi", price: "$16.95" },
  { name: "Salmon Hibachi", price: "$15.95" },
  { name: "Scallop Hibachi", price: "$19.95" },
  { name: "Filet Mignon Hibachi", price: "$17.95" },
  { name: "Vegetable Hibachi", price: "$13.95" },
  { name: "Chicken & Shrimp Hibachi", price: "$20.95" },
  { name: "Chicken & Steak Hibachi", price: "$21.95" },
  { name: "Steak & Shrimp Hibachi", price: "$21.95" },
  { name: "Shrimp & Scallop Hibachi", price: "$21.95" },
];

const tasteOfAsiaLunchItems = [
  { name: "Thai Curry Chicken", price: "$14.95" },
  { name: "Wok Basil Chicken", price: "$14.95" },
  { name: "Spicy Mango Chicken", price: "$14.95" },
  { name: "Chicken Pad Thai", price: "$14.95" },
  { name: "Thai Herb Chicken", price: "$14.95" },
  { name: "Chicken Broccoli", price: "$14.95" },
  { name: "Chicken Mix Vegetables", price: "$14.95" },
  { name: "Chicken Garlic Sauce", price: "$14.95" },
  { name: "Chicken Black Bean Sauce", price: "$14.95" },
  { name: "General Tso’s Chicken", price: "$14.95" },
  { name: "Sesame Chicken", price: "$14.95" },
  { name: "Peppercorn Chicken", price: "$14.95" },
  { name: "Chicken Peanut Spicy Sauce", price: "$14.95" },
  { name: "Chicken Snow Peas", price: "$14.95" },
  { name: "Glazed Ginger Sauce Chicken", price: "$14.95" },
  { name: "Chicken Eggplant", price: "$14.95" },
  { name: "Chicken Cashewnut", price: "$14.95" },
  { name: "Thai Curry Beef", price: "$14.95" },
  { name: "Wok Basil Beef", price: "$14.95" },
  { name: "Beef Pad Thai", price: "$14.95" },
  { name: "Thai Herb Beef", price: "$14.95" },
  { name: "Beef Broccoli", price: "$14.95" },
  { name: "Beef Mixed Vegetables", price: "$14.95" },
  { name: "Beef Garlic Sauce", price: "$14.95" },
  { name: "Beef Black Bean Sauce", price: "$14.95" },
  { name: "Szechuan Shredded Beef", price: "$14.95" },
  { name: "Thai Curry Shrimp", price: "$14.95" },
  { name: "Wok Basil Shrimp", price: "$14.95" },
  { name: "Spicy Mango Shrimp", price: "$14.95" },
  { name: "Shrimp Pad Thai", price: "$14.95" },
  { name: "Thai Herb Shrimp", price: "$14.95" },
  { name: "Shrimp Broccoli", price: "$14.95" },
  { name: "Shrimp Mix Vegetables", price: "$14.95" },
  { name: "Shrimp Garlic Sauce", price: "$14.95" },
  { name: "Black Bean Sauce Shrimp", price: "$14.95" },
  { name: "General Tso’s Shrimp", price: "$14.95" },
  { name: "Sesame Shrimp", price: "$14.95" },
  { name: "Glazed Ginger Sauce Shrimp", price: "$14.95" },
  { name: "Thai Curry Scallop", price: "$16.95" },
  { name: "Wok Basil Scallop", price: "$16.95" },
  { name: "Thai Herb Scallop", price: "$16.95" },
  { name: "Scallop Broccoli", price: "$16.95" },
  { name: "Scallop Mix Vegetables", price: "$16.95" },
  { name: "Scallop Garlic Sauce", price: "$16.95" },
  { name: "Scallop Black Bean Sauce", price: "$16.95" },
  { name: "Thai Curry Veggie & Tofu", price: "$12.95" },
  { name: "Veggie Pad Thai", price: "$12.95" },
  { name: "Thai Style Asparagus & String Bean", price: "$12.95" },
  { name: "Broccoli Brown Sauce", price: "$12.95" },
  { name: "Wok Mix Veggie", price: "$12.95" },
  { name: "Eggplant Garlic Sauce", price: "$12.95" },
];

const MenuSection = ({ title, description, items, imageAlt }) => (
  <div className="space-y-4 animate-slide-up">
    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
    {description && <p className="mb-4">{description}</p>}
    <div className="w-full h-48 bg-gray-700 rounded-2xl shadow-lg animate-zoom-in" aria-label={imageAlt}></div>
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between py-2 border-b border-neutral-700 hover:bg-neutral-800 transition duration-300 rounded-lg px-2"
        >
          <span>{item.name}</span>
          <span className="font-semibold">{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const LunchMenu = () => (
  <div className="pt-16 min-h-screen bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Our Lunch Menu</h1>
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <MenuSection
          title="Hibachi Lunch"
          description="Served with noodles, vegetables & rice"
          items={hibachiLunchItems}
          imageAlt="Hibachi Lunch Items"
        />
        <MenuSection
          title="Taste Of Asia Lunch"
          items={tasteOfAsiaLunchItems}
          imageAlt="Taste of Asia Lunch Items"
        />
      </section>
    </div>
  </div>
);
