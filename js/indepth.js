
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Qué jugador americanista anotó el gol que descendió al Necaxa en 2009?",
				      "respuestas": [
				        {
				          "respuesta": "Fernando Ortiz",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Salvador Cabañas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Zague",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Enrique Esqueda",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué directivo americanista fue símbolo del Necaxa en los años noventa?",
				      "respuestas": [
				        {
				          "respuesta": "Alberto García Aspe",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Pepe Romano",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ricardo Peláez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Sergio Vázquez",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién era el técnico del Necaxa en aquella derrota ante América que costó el descenso a los Rayos?",
				      "respuestas": [
				        {
				          "respuesta": "Manuel Lapuente",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Raúl Arias",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ivo Basay",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Milton Queiroz",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué delantero campeón con ambos equipos era conocido como “El Matador”?",
				      "respuestas": [
				        {
				          "respuesta": "Luis Hernández",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Carlos Hermosillo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ricardo Peláez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ivo Basay",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué torneo disputaron la final Necaxa y América?",
				      "respuestas": [
				        {
				          "respuesta": "Apertura 2009",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Verano 2002",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Invierno 2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2008",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado global de esa final?",
				      "respuestas": [
				        {
				          "respuesta": "América ganó 3-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "América ganó 1-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Necaxa ganó 1-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "América ganó 3-2",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué entrenador fue bicampeón con el Necaxa y campeón con el América?",
				      "respuestas": [
				        {
				          "respuesta": "Manuel Lapuente",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Raúl Arias",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carlos Reinoso",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jorge Vieira",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado del partido de torneo regular entre América y Necaxa?",
				      "respuestas": [
				        {
				          "respuesta": "Necaxa ganó 2-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "América ganó 3-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Necaxa ganó 3-2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Empate 1-1",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué empresario fue hasta 2014 dueño de ambos equipos?",
				      "respuestas": [
				        {
				          "respuesta": "Emilio Azcárraga Jean",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ricardo Salinas Pliego",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alejandro Burillo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carlos Slim",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador que defendió ambas camisetas era conocido como “El Beto”?",
				      "respuestas": [
				        {
				          "respuesta": "Efraín Herrera",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alberto Medina",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alberto García Aspe",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Luis Roberto Alves",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué leyenda americanista marcó un gol a las Águilas con la playera del Necaxa en la final de 2002?",
				      "respuestas": [
				        {
				          "respuesta": "Zague",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cuauhtémoc Blanco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Hernández",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Efraín Herrera",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Portero figura de ambos equipos que era conocido como “Arquero de Cristo”",
				      "respuestas": [
				        {
				          "respuesta": "Nicolás Navarro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hugo Pineda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Adolfo Ríos",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Miguel de Jesús Fuentes",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año abandonó Necaxa el Estadio Azteca?",
				      "respuestas": [
				        {
				          "respuesta": "2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2003",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1997",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2007",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año compró Televisa al Necaxa?",
				      "respuestas": [
				        {
				          "respuesta": "1981",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1994",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1982",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1975",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "América venció a Necaxa en 2002 para ganar su título de liga profesional número…",
				      "respuestas": [
				        {
				          "respuesta": "Siete",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ocho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Nueve",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Doce",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo fue la última vez que Necaxa y América se enfrentaron a eliminación directa?",
				      "respuestas": [
				        {
				          "respuesta": "Apertura 2009",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Verano 2002",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Clausura 2013",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Invierno 2002",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué estadio se enfrentaron estos equipos por última vez?",
				      "respuestas": [
				        {
				          "respuesta": "Victoria",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Azteca",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Soldier Field",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Rose Bowl",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo fue campeón de liga el Necaxa por última vez?",
				      "respuestas": [
				        {
				          "respuesta": "Verano 2000",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Invierno 1998",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Apertura 2002",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2015",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol del América en el duelo de temporada regular contra Necaxa?",
				      "respuestas": [
				        {
				          "respuesta": "Paolo Goltz",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Oribe Peralta",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Darwin Quintero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Osmar Mares",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol del Necaxa en el duelo de temporada regular contra América?",
				      "respuestas": [
				        {
				          "respuesta": "Severo Meza",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jesús Isijara",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Edson Puch",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Marcelo Barovero",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="sabes menos del América y el Necaxa que yo de biología. Seguro usas la de los Rayos o la del Ame nomás por convivir. ¡Más villamelón no se puede!";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="eres medio villamelón, pero al menos sabes lo básico sobre Rayos y Águilas. Presumes el jersey, pero nada más cuando es liguilla.";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="¡Pocos aficionados como tú! Estás a nada de ser una enciclopedia de futbol.";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="Eres un crack! Tienes una enciclopedia de fútbol en la cabeza. Envidio tu memoria.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Necaxa "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " América primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


