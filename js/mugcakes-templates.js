this["JST"] = this["JST"] || {};

this["JST"]["templates/cake.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
	
	if((cake['Media Type'] == "Video") || (cake['Media Type'] == "Image")) {

		__p += '<div class="col-lg-4 col-md-6 col-sm-6">\n  <div class="container">\n\n    ';

		if (cake['Project']) { ;
			if (cake['Discourse Post Link']) { ;
				__p += '\n      <h2> <a href="' + 
				((__t = ( cake['Discourse Post Link'] )) == null ? '' : __t) + '" target="_blank">' +
				((__t = ( cake['Project'] )) == null ? '' : __t) +
				'</a></h2>\n    ';
			} else {
				__p += '\n      <h2>' + 
				((__t = ( cake['Project'] )) == null ? '' : __t) +
				'</h2>\n    ';
			};


		if(cake['Media Type'] == "Video") { 
			if (cake['URL for Gallery']) { ;
			__p += '\n      <iframe width="250" height="200" class="media" src="' +
			((__t = ( cake['URL for Gallery'] )) == null ? '' : __t) + 
			'"></iframe>\n    ';
		 } ;
		__p += '\n\n    ';

		} else if(cake['Media Type'] == "Image") {
			if (cake['URL for Gallery']) { ;
			__p += '\n      <div class="image-container"><img width="245" height="195" class="media" src="' +
			((__t = ( cake['URL for Gallery'] )) == null ? '' : __t) + 
			'"></img></div>\n    ';
		 } ;
		__p += '\n\n    ';
		}

		if (cake['Full Name']) { ;
			__p += '\n      <h4><a href="' + 
			((__t = ( cake['Profile Link'] )) == null ? '' : __t) + '" target="_blank">' +
			((__t = ( cake['Full Name'] )) == null ? '' : __t) +
			'</a></h4>\n    ';
		 } ;
		__p += '\n\n\n\n    '; 



		 } ;

		__p += '\n\n    '; 

		if (cake['Profile Picture Link']) { ;
			__p += '\n      <img src="' +
			((__t = ( cake['Profile Picture Link'] )) == null ? '' : __t) +
			'"></img>\n    ';
		 } ;
		__p += '\n\n    '; 	
	}
}

return __p
};