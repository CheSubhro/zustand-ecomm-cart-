
// zustand Use

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'

// ==========================================
// 🛒 1. Main Zustand Store Implementation (Always Keep This On Top)
// ==========================================
export const useCartStore = create(
    persist(
        (set) => ({
            // States
            cart: [],
            products: [],        
            isLoading: false,    
            error: null,         

            // Actions
            fetchProducts: async () => {
                set({ isLoading: true, error: null })
                try {
                    const response = await fetch('https://fakestoreapi.com/products?limit=6')
                    if (!response.ok) throw new Error('Failed to fetch data from the API server!')
                    const data = await response.json()
                    set({ products: data, isLoading: false })
                } catch (err) {
                    set({ error: err.message, isLoading: false })
                }
            },

            addToCart: (product) => 
                set((state) => {
                    const existingItem = state.cart.find((item) => item.id === product.id)
                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                            ),
                        }
                    }
                    return { cart: [...state.cart, { ...product, quantity: 1 }] }
                }),

            removeFromCart: (productId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== productId),
                })),

            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
                    ),
                })),

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'shopping-cart',
            partialize: (state) => ({ cart: state.cart }), 
        }
    )
)

// ==========================================
// 🚀 2. Reusable Custom Selectors (Placed at the Bottom)
// ==========================================
export const useCartData = () => useCartStore((state) => state.cart)
export const useProductsData = () => useCartStore((state) => state.products)
export const useCartLoading = () => useCartStore((state) => state.isLoading)
export const useCartError = () => useCartStore((state) => state.error)

// Actions selector configuration map
export const useCartActions = () => 
    useCartStore(
        useShallow((state) => ({
            addToCart: state.addToCart,
            removeFromCart: state.removeFromCart,
            updateQuantity: state.updateQuantity,
            clearCart: state.clearCart,
            fetchProducts: state.fetchProducts
        }))
    )
