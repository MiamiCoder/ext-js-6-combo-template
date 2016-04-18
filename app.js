Ext.application({
    name: 'App',
    models: ['Automobile'],
    stores: ['Automobiles'],
    views: ['Viewport'],
    autoCreateViewport: true,
    
    launch: function () {
    }
});