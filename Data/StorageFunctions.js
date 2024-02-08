import * as SecureStore from 'expo-secure-store';

export async function save(key, id, title, description, price) {
    let currentObjects = await getValueFor(key);
    let itemObject = new ItemObject(id, title, description, price)

    const updatedObjects = [...currentObjects, itemObject]

    await SecureStore.setItemAsync(key, JSON.stringify(updatedObjects));
}

export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);

    if (result) {
        return result;
    }
    else {
        return [];
    }
}

export async function deleteItem(key) {
    await SecureStore.deleteItemAsync(key);
}

export class ItemObject{
    Id; 
    Title;
    Description;
    Price;

    ItemObject(id, title, description, price){
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Price = price;
    }
}