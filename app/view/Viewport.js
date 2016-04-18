Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.form.FormPanel','Ext.form.field.ComboBox'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [
       {
           xtype: 'form',
           title: 'Model Car Reviews',
           width: 500,
           bodyPadding: 10,
           items: [
               {
                   xtype: 'combo',
                   id: 'autos-combo',
                   store: 'Automobiles',
                   displayField: 'name',
                   valueField: 'id',
                   editable: false,     
                   queryMode: 'remote',
                   multiSelect: false,
                   triggerAction: 'all',
                   fieldLabel: 'Model',
                   emptyText: 'Select a model...',
                   selectOnFocus: false,
                   anchor: '100%',
                   tpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                            '<div class="x-boundlist-item" style="border-bottom:1px solid #f0f0f0;">',
                            '<div>{name}</div>',
                            '<div><b>Category:</b> {category}</div>',
                            '<div><b>Vendor:</b> {vendor}</div></div>',
                        '</tpl>'
                    ),
                   displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                            '{name} ({vendor})',
                        '</tpl>'
                   )
               }
           ]
       }
    ]
});