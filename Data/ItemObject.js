import Realm from "realm";

export class ItemObject extends Realm.Object {
    static schema = {
        name: 'ItemObject',
        properties: {
            _id: 'objectId',
            title: 'string',
            description: 'string',
            price: 'double',
            multiple: {type: 'bool', default: 'false'},
        },
        primaryKey: '_id'
    }

}