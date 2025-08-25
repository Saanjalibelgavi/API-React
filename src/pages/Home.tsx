import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Shirt,
  Cpu,
  Home as HomeIcon,
  ShoppingCart,
  Search,
  Camera,
} from "lucide-react";

const categories = [
  { key: "skincare", label: "Skincare", Icon: Sparkles },
  { key: "clothing", label: "Clothing", Icon: Shirt },
  { key: "electronics", label: "Electronics", Icon: Cpu },
  { key: "home", label: "Home", Icon: HomeIcon },
];

const products = [
  {
    id: "1",
    name: "Hydrating Face Serum",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXPwW4hyY0mBO6hPTLdJAeF3aJzENmI7rA&s",
  },
  {
    id: "2",
    name: "Classic Cotton Tee",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffOdjKH65T9RF6-Pdbi3TlVZ6_3B91IxBQA&s",
  },
  {
    id: "3",
    name: "Bluetooth Earbuds",
    price: 1999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3wL8MQ3BeSQ4F1VORyVMaVMYEDvtKj_6lA&s",
  },
  {
    id: "4",
    name: "Matte Lipstick",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBGf7wLnes18KzkvfZNm9hyowBdWpYESxCQ&s",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--brand-bg)", color: "var(--brand-text)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-10 border-b border-black/5"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight">My Shop</h1>

          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span
              className="absolute -top-2 -right-2 text-[10px] font-bold rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center"
              style={{ background: "var(--brand-accent)", color: "#111827" }}
            >
              2
            </span>
          </Link>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto px-4 py-6 max-w-md md:max-w-2xl lg:max-w-3xl">
        {/* Search bar */}
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <Search className="h-5 w-5" style={{ color: "var(--brand-muted)" }} />
          <input
            placeholder="Search products"
            className="flex-1 outline-none bg-transparent"
          />
          <button
            className="btn btn-outline h-9 px-3"
            aria-label="Open camera"
          >
            <Camera className="h-5 w-5" />
          </button>
        </div>

        {/* Categories */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Categories</h2>
            <Link to="/products" className="link text-sm">
              View all
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map(({ key, label, Icon }) => (
              <Link key={key} to={`/products?category=${key}`} className="chip">
                <span className="chip-icon">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* Promo card */}
        <section className="mt-6">
          <div
            className="rounded-2xl p-5 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))",
            }}
          >
            <h3 className="text-xl font-bold">Focus on sofas!</h3>
            <p className="mt-2 text-sm text-white/90">
              Up to 30% off on selected sofas for limited time only
            </p>
            <Link
              to="/products"
              className="btn mt-4 inline-flex"
              style={{ background: "var(--brand-accent)", color: "#111827" }}
            >
              Start shopping
            </Link>
          </div>
        </section>

        {/* Newly added products */}
        <section className="mt-6">
           <div className="flex items-center justify-between"> 
            <h2 className="section-title">
              Newly added products
              </h2>
               <Link to="/products" className="link text-sm"> 
               View all 
               </Link> 
               </div>

               
          <div className="mt-3 grid grid-cols-2 gap-4">
            {products.map((p) => (
              <article key={p.id} className="card">
                <div
                  className="w-full aspect-square overflow-hidden"
                  style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="card-body p-3">
                  <h4 className="text-sm font-semibold line-clamp-2">
                    {p.name}
                  </h4>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      ₹{p.price}
                    </span>
                    <Link to={`/products/${p.id}`} className="btn btn-primary h-9">
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
