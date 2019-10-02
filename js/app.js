
/**
* Declara a principal classe da API
* com todos os atributos "privados";
**/
var app = {
	_jogo: 0,
	_sorteio: 0,
	_data_sorteio: '',
	_url: '',
	_jogo_imagem: '',
	_jogo_cor: '',
	get jogo() {
            return this._jogo;
	},
	set jogo(value) {
            this._jogo = value;
	},
	get sorteio() {
            return this._sorteio;
	},
	set sorteio(value) {
            this._sorteio = value;
	},
	get data_sorteio() {
            return this._data_sorteio;
	},
	set data_sorteio(value) {
            var data = value.split('-');
            this._data_sorteio = data[2]+"/"+data[1]+"/"+data[0];
	},
	get url() {
            return this._url;
	},
	set url(value) {
            this._url = value;
	},
        get jogo_imagem() {
            return this._jogo_imagem;
        },
        set jogo_imagem(jogo){
            switch(jogo) {
                case '1':
                    this._jogo_imagem = 'lotofacil.png';
                    break;
                case '4':
                    this._jogo_imagem = 'quina.png';
                    break;
                case '3':
                    this._jogo_imagem = 'lotomania.png';
                    break;
                default:
                    this._jogo_imagem = 'mega-sena.png';
            }
        },
        get jogo_cor() {
            return this._jogo_cor;
        },
        set jogo_cor(jogo){
            switch(jogo) {
                case '1':
                    this._jogo_cor = 'roxo';
                    break;
                case '4':
                    this._jogo_cor = 'azul';
                    break;
                case '3':
                    this._jogo_cor = 'laranja';
                    break;
                default:
                    this._jogo_cor = 'verde';
            }
        },
        converteArray: function(string)
        {
            var patt = /[0-9]/g;
            var array = string.match(patt);
            var string = "";
            var newArr = [];

            var j = "";
            for (var i = 0; i < array.length; i++) {
                j += array[i];
                if (j.length > 1) {
                    newArr.push(j);
                    j = "";
                }
            }

            return newArr;
        },
        insertContent: function(array) {

            app.concurso     = array['concurso'    ];
            app.data_sorteio = array['data_sorteio'];

            document.getElementById('numero-concurso').innerHTML = app.concurso;
            document.getElementById('data-sorteio'   ).innerHTML = app.data_sorteio;
            var arrNumeros  = app.converteArray(array['numeros']);
            ultimo_concurso = array['concurso'];
            
            document.getElementById('numero-concurso').value = ultimo_concurso;
            document.getElementById('numero-concurso').placeholder = ultimo_concurso;
            document.getElementById('header').innerHTML = '<center><img src="img/' + app._jogo_imagem + '" alt="' + app._jogo_imagem + '"></center>';

            var htmlSpanNumeros = "";
            for(var i = 0; i < arrNumeros.length; i++){
                htmlSpanNumeros += '<li class="example-item example-megasena zoom zoom-' + app.jogo_cor + '" title="' + arrNumeros[i] + '" >' + arrNumeros[i] + '</li>';
            }

            htmlSpanNumeros = '<ul class="example-mega">' + htmlSpanNumeros + '</ul>';
            document.getElementById('dezenas').innerHTML = htmlSpanNumeros;
        }
};
