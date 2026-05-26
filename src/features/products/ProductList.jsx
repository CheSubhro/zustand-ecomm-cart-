
import React, { useEffect } from 'react'
import { useCartStore } from '../../store/useCartStore'

export default function ProductList() {

    // Pulling data and actions from the Zustand store
    const { products, isLoading, error, fetchProducts, addToCart } = useCartStore()

    // Execute API fetch when the component mounts for the first time
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    if (isLoading) {
        return (
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: '#4f46e5' }}>
            ⏳ Loading Products from API...
        </div>
        )
    }

    if (error) {
        return (
        <div style={{ textAlign: 'center', padding: '20px', color: '#ef4444', backgroundColor: '#fee2e2', borderRadius: '8px' }}>
            ⚠️ Error: {error}
        </div>
        )
    }

    return (
        <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1f2937', marginBottom: '16px', fontSize: '1.25rem' }}>📦 API Product Catalog</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                {products.map((product) => (
                <div key={product.id} style={{ border: '1px solid #f3f4f6', padding: '16px', borderRadius: '8px', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                    <img src={product.image} alt={product.title} style={{ height: '120px', objectFit: 'contain', marginBottom: '8px' }} />
                    <h3 style={{ fontSize: '0.9rem', color: '#374151', margin: '8px 0', height: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4f46e5', margin: '4px 0' }}>₹{Math.round(product.price * 80)}</p> {/* Price in INR mock conversion */}
                    </div>
                    <button 
                    onClick={() => addToCart({ id: product.id, name: product.title, price: Math.round(product.price * 80) })}
                    style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                    >
                    Add to Cart
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}