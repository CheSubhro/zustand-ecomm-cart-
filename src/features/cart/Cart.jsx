
import React from 'react'
import { useCartData, useCartActions } from '../../store/useCartStore'

export default function Cart() {

    // Using custom selectors for optimized rendering performance
    const cart = useCartData() // Only cart state updates will trigger sync/re-renders here
    const { removeFromCart, updateQuantity, clearCart } = useCartActions()

    // Dynamic Total Price Calculation
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
        <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginTop: '24px', textAlign: 'center' }}>
            <h2 style={{ color: '#9ca3af', fontSize: '1.1rem' }}>🛒 Your Shopping Cart is Empty</h2>
        </div>
        )
    }

    return (
        <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginTop: '24px' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '20px', fontSize: '1.25rem' }}>🛒 Shopping Cart ({cart.length} items)</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#f9fafb', borderRadius: '8px', alignItems: 'center', border: '1px solid #f3f4f6' }}>
                    <div>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{item.name}</span>
                    <span style={{ marginLeft: '12px', color: '#6b7280', fontSize: '0.9rem' }}>₹{item.price} each</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '4px 10px', border: '1px solid #d1d5db', background: 'white', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                    <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '4px 10px', border: '1px solid #d1d5db', background: 'white', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                    
                    <button 
                        onClick={() => removeFromCart(item.id)} 
                        style={{ marginLeft: '12px', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                    >
                        Remove
                    </button>
                    </div>
                </div>
                ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px dashed #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>Total: <span style={{ color: '#4f46e5' }}>₹{totalPrice}</span></h3>
                <button 
                onClick={clearCart} 
                style={{ backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
                >
                Clear Cart
                </button>
            </div>
        </div>
    )
}