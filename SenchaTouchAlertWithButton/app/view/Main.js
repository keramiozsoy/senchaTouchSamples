Ext.define('SenchaTouchAlertWithButton.view.Main', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Button'
    ],
    config: {
        items: [{
            xtype: 'button',
            text: 'Press Button',
            handler: function() {
		Ext.Msg.alert('Alert Title', 'Hello, This is Alert', Ext.emptyFn,this);
            }
        }]
    }   
});
