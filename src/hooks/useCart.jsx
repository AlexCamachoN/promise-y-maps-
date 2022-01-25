import { useContext } from 'react'
import { CartContexto } from '../contexts/CartContext'

export function useCart() {
  return useContext(CartContexto)
}
