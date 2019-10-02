
var library = {
	_tipo: null,
	_url: null,
	_assinc: null,
	requisicaoHttp: function() {
		try {
                    xhr = new XMLHttpRequest();
                } catch (e) {
                    try {
                        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        try {
                            var xhr = new ActiveXObject("Msxml2.XMLHTTP");
                        } catch (e) {
                            alert("Your Browser is not Supported");

                        }
                    }
                }
                return xhr;
	},
};
