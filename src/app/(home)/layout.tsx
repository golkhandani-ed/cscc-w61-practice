import "../globals.css";

export default function RootLayout({
  children,
  categories,
  favorites,
}: Readonly<{
  children: React.ReactNode;
  categories: React.ReactNode;
  favorites: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <section id="categories">
        <h2 className="section-title">Categories</h2>
        {categories}
      </section>
      <section id="favorites">
        <h2 className="section-title">Favorite Items</h2>
        {favorites}
      </section>

    </>
  );
}
