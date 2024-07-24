const { Pool } = require("pg");
const { createClient } = require("@supabase/supabase-js");

// PostgreSQL connection
const pool = new Pool({
  connectionString:
    "postgresql://postgres.vltasuojbirpwazivnuz:Qs7S8UxFBU63iRSZ@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres",
});

// Supabase connection
const supabase = createClient(
  "https://vltasuojbirpwazivnuz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdGFzdW9qYmlycHdheml2bnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzM0NDcsImV4cCI6MjAzNzQwOTQ0N30.ZvN5qswA0bFDhg5s0nTpzH3ZglldyMTNxvgVsN9ToW4",
);

async function createTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS meals (
        id SERIAL PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
      )
    `);
    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    client.release();
  }
}

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: "Rohan Roy",
    creator_email: "rohan@example.com",
  },
  {
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: "Zara Bengani",
    creator_email: "zarabengani@example.com",
  },
  {
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: "Rajiv Gupta",
    creator_email: "guptarajiv124@example.com",
  },
  {
    title: "Authentic Pizza",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.",
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: "Ranbir Tyagi",
    creator_email: "ranbirtyagi@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
      Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
      Serve hot with a slice of lemon and a side of potato salad or greens.
 `,
    creator: "Kamla Devi",
    creator_email: "kamladevi@example.com",
  },
  {
    title: "Fresh Tomato Salad",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: "Sunil Kumar Gupta",
    creator_email: "sunilkgupta@example.com",
  },
];

type DummyMeals = (typeof dummyMeals)[number];

async function initData(dummyMeals: Array<DummyMeals>) {
  const client = await pool.connect();
  try {
    for (const meal of dummyMeals) {
      await client.query(
        `
        INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `,
        [
          meal.slug,
          meal.title,
          meal.image,
          meal.summary,
          meal.instructions,
          meal.creator,
          meal.creator_email,
        ],
      );
    }
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    client.release();
  }
}

// Function to insert data into Supabase
async function insertDataToSupabase(dummyMeals: Array<DummyMeals>) {
  for (const meal of dummyMeals) {
    const { error } = await supabase.from("meals").insert([meal]);

    if (error) {
      console.error("Error inserting data to Supabase:", error);
    } else {
      console.log("Data inserted to Supabase successfully");
    }
  }
}

// Usage
async function main() {
  await createTable();
  await initData(dummyMeals);
  await insertDataToSupabase(dummyMeals);
}

main().catch(console.error);
