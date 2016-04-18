Ext.define('App.model.Automobile', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'vendor', type: 'string' }
    ]
});