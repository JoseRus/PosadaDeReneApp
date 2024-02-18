export class ItemObject extends Realm.Object {
    static schema = {
        name: 'Item',
        properties: {
            id: 'int',
            title: 'string',
            description: 'string',
            price: 'double'
        },
        primaryKey: 'id'
    }

}