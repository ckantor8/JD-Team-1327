/*
 * Written by Team 1327 - Cody, Akash, Erin, Aayush, Will
 */

import * as SecureStore from 'expo-secure-store';

async function insert(key, value) {
	await SecureStore.setItemAsync(key, value);
}

async function get(key) {
    let value = await SecureStore.getItemAsync(key);
    return value;
}


export { insert, get }; 