Ext.define('App.store.Automobiles', {
    extend: 'Ext.data.Store',
    model: 'App.model.Automobile',
    proxy: {
        type: 'ajax',
        url: 'automobiles-data.json',
        reader: {
            type: 'json',
            rootProperty: 'automobiles'
        }
    }
});