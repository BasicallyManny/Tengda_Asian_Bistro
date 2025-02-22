interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export const hibachiLunchItems: MenuItem[] = [
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
  
  export const tasteOfAsiaLunchItems: MenuItem[] = [
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

  export const sushiAndLunchBoxe: MenuItem[] = [
    { name: "Chicken Teriyaki", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Beef Teriyaki", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Salmon Teriyaki", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Shrimp Teriyaki", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Shrimp Vegetable Tempura", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Vegetable Tempura", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Tofu Teriyaki", price: "$16.95", description: "Tempura tofu & mixed green vegetables, 2 pot stickers, 3 California rolls, green salad" },
    { name: "Broiled Eel", price: "$16.95", description: "2 pot stickers, 3 California rolls, green salad" },
    { name: "Sushi Lunch", price: "$16.95", description: "3 pieces of nigiri sushi, 2 pot stickers, 3 California rolls, green salad" },
    { name: "Sashimi Lunch", price: "$16.95", description: "6 pieces of nigiri sushi, 2 pot stickers, 3 California rolls, green salad" },
    { name: "Chirashi Lunch", price: "$25.95", description: "Assorted raw fish on a bed of seasoned rice" },
    { name: "House Sashimi", price: "$26.95", description: "15 pieces of chef’s choice" },
    { name: "Sushi Deluxe", price: "$26.95", description: "7 pieces of sushi with spicy tuna roll & California Hand Roll" },
    { name: "Salmon Don", price: "$26.95", description: "Sliced salmon on a bed of season rice" },
    { name: "Tekkka Don", price: "$28.95", description: "Sliced tuna on a bed of seasoned rice" },
    { name: "Sushi A", price: "$18.95", description: "5 piece sushi & tuna roll" },
    { name: "Sushi B", price: "$24.95", description: "7 piece sushi & tuna roll" },
    { name: "Spicy Mayo", price: "$1.00" },
    { name: "Eel Sauce", price: "$1.00" },
  ];

  export const twoRollSpecial: MenuItem[]=[
    { name: "2 Roll Special", price: "$13.95" },
  ];

  export const threeRollSpecial: MenuItem[]=[
    { name: "3 Roll Special", price: "$17.95" },
  ];