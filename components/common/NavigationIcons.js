import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export const HomeIcon = ({ color, size }) => <Ionicons name='ios-home' size={size} color={color} />
export const NotificationIcon = ({ color, size }) => <Ionicons name='ios-notifications' size={size} color={color} />
export const PersonIcon = ({ color, size }) => <Ionicons name='ios-person' size={size} color={color} />
export const WishlistIcon = ({ color, size }) => <Ionicons name='ios-heart' size={size} color={color} />
export const CartIcon = ({ color, size }) => <Ionicons name='ios-cart' size={size} color={color} />

export default {
    HomeIcon,
    NotificationIcon,
    PersonIcon,
    WishlistIcon,
    CartIcon
}