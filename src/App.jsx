
import React from 'react'
import ProductList from './features/products/ProductList'
import Cart from './features/cart/Cart'

function App() {

	return (
	
		<>
			<div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px' }}>
				<div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
					<h1 style={{ color: '#111827', textAlign: 'center', marginBottom: '32px', fontSize: '1.8rem', fontWeight: '800' }}>
					⚡ Zustand Shopping Cart
					</h1>
					<ProductList />
					<Cart />
				</div>
			</div>
		</>
	)
}

export default App
