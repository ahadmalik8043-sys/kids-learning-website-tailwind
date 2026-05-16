import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Super Space Adventure Course', price: 49.99, image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=300&q=80', qty: 1 },
    { id: 2, title: 'Creative Coding for Kids', price: 29.99, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80', qty: 1 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <main className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart List */}
        <div className="lg:col-span-2 flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-black font-nunito text-[var(--color-text-page)]">Learning Cart <span className="text-[#FF6B35]">({cartItems.length})</span></h1>
            <button className="text-sm font-black text-red-500 hover:underline" onClick={() => setCartItems([])}>Clear All</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-[var(--color-bg-card)] rounded-[3rem] p-20 text-center border border-dashed border-[var(--color-border-subtle)] shadow-xl">
              <span className="text-8xl mb-8 block">🛒</span>
              <h2 className="text-3xl font-black mb-4 text-[var(--color-text-page)]">Your cart is empty!</h2>
              <p className="text-[var(--color-text-muted)] mb-10 font-bold">Time to discover some amazing new courses.</p>
              <Link to="/services" className="inline-block px-12 py-5 bg-[#FF6B35] text-white rounded-2xl font-black text-lg no-underline hover:scale-105 transition-all shadow-xl">Browse Courses</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="group bg-[var(--color-bg-card)] rounded-[2.5rem] p-6 border border-[var(--color-border-subtle)] shadow-xl flex flex-col sm:flex-row items-center gap-8 hover:shadow-2xl transition-all">
                  <img src={item.image} alt={item.title} className="w-full sm:w-40 h-40 rounded-[2rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-black mb-2 text-[var(--color-text-page)]">{item.title}</h3>
                    <p className="text-[#FF6B35] font-black text-2xl mb-4">${item.price}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center bg-[var(--color-bg-page-alt)] rounded-xl p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="w-10 h-10 flex items-center justify-center font-black text-[var(--color-text-page)] hover:bg-[var(--color-bg-page)] rounded-lg transition-all">-</button>
                        <span className="w-12 text-center font-black text-lg text-[var(--color-text-page)]">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-10 h-10 flex items-center justify-center font-black text-[var(--color-text-page)] hover:bg-[var(--color-bg-page)] rounded-lg transition-all">+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="w-10 h-10 flex items-center justify-center text-red-500 hover:bg-[rgba(239,68,68,0.1)] rounded-xl transition-all text-xl">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Sidebar */}
        {cartItems.length > 0 && (
          <div className="lg:w-[400px] space-y-8">
            <div className="bg-[var(--color-bg-card)] rounded-[3rem] p-10 border border-[var(--color-border-subtle)] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 rounded-bl-full"></div>
              <h2 className="text-2xl font-black mb-8 text-[var(--color-text-page)]">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[var(--color-text-muted)] font-bold">
                  <span>Subtotal</span>
                  <span className="text-[var(--color-text-page)]">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[var(--color-text-muted)] font-bold">
                  <span>Discount</span>
                  <span className="text-green-500">-$0.00</span>
                </div>
                <div className="h-px bg-[var(--color-border-subtle)] my-4"></div>
                <div className="flex justify-between text-2xl font-black text-[var(--color-text-page)]">
                  <span>Total</span>
                  <span className="text-[#FF6B35]">${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full py-5 bg-[#FF6B35] text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-[#FF6B35]/30 hover:scale-105 active:scale-95 transition-all mb-6">Proceed to Checkout</button>
              <div className="flex items-center justify-center gap-3 opacity-50 text-[var(--color-text-muted)]">
                <span className="text-xs font-black uppercase tracking-widest">Secure Payment</span>
                <span className="text-lg">🛡️</span>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#4ECDC4]/5 border-2 border-dashed border-[#4ECDC4]/20 text-center">
              <p className="text-sm font-bold text-[#4ECDC4] leading-relaxed italic">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
