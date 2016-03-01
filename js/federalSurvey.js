/*global require, alert*/
/*
 * 
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
    host: "sense-demo.qlik.com",
    prefix: "/",
    port: 443,
    isSecure: true
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});


require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('6dcf192e-cab9-417a-8fb7-5517cd68373e', config); //

	
	//get objects -- inserted here --
	
	app.getObject('QV01','RVjezMV');
	app.getObject('QV02','eWyRUR');
	app.getObject('QV03','LwtTYjq');
	app.getObject('QV04','csXjXYA');
	app.getObject('QV05','BVbpZv');
	app.getObject('QV06','awfpES');
	app.getObject('QV07','MyAuBm');
	app.getObject('QV08','raUZcgG');
	app.getObject('QV09','EcpuS');
	app.getObject('QV10','ntpHbT');
	app.getObject('QV11','SupJKJ');

	//get listboxes
	app.getObject('QV12','JHgC');
	app.getObject('QV13','Fdpdqp');
	

	//Clear Selections button
    $('.clearButton').on('click', function(e) {
        e.preventDefault();
        app.clearAll();
    })
	
	//create cubes and lists -- inserted here --

	app.createGenericObject({
	  'kpi': {
	     qStringExpression: '=Count(distinct ID)'
	  }
	}, function(reply) {
	  //do something with reply
	  $('#QVN01').text(reply.kpi)
	})

} );