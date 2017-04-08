window.onload=function(){

	//var mostrar=document.
	var coders=["Fiorella Quispe","Lourdes Vilchez"];
    var  bloq = document.getElementById("promocion");

  	bloq.innerHTML="";
				
		for(var i=1 ;i==2;i++){

			var newDiv =document.createElement('div');
			newDiv.classList.add("grid");

			var figure = document.createElement("figure"); 
			figure.classList.add("coder");

			var newDiv2 =document.createElement("div");
			newDiv.classList.add("overlay");

			var imagen =document.createElement("img");
			imagen.classList.add("img-box");

			var newfig =document.createElement("figcaption");
			newfig.classList.add("text");

			var name = document.createTextNode(coders[i]); 
			    imagen.setAttribute("src","assets/img/"+ i+".png");

						newfig.appendChild(name)
						figure.appendChild(newfig);
						figure.appendChild(imagen);
  						figure.appendChild(newDiv2);
  						newDiv.appendChild(figure);

  						bloq.appendChild(newDiv) ;
		}
		//document.getElementById("promocion").style.display="inline-block";
}		



   
  
/*Marilu Llamocca Junco
RUTH MERY CARDENAS PEREZ
Maria Lourdes Vilchez Palomino
Glisse Lisbeth Jorge Malca
Ana de los Angeles Durand Calle
Ruth Abigail Salvador Zorrilla
Leslie Ashley AvendaÃ±o Lopez
Flor de Cantuta Tello Sarmiento
Miriam Peralta CastaÃ±eda
Fiorella Quispe Arotinco
Annia Jasenka Flores PÃ©rez
LEIDY ROSMERY MALDONADO CHAUCA
Rosario Felix Tasayco
Liliana Fiorela PeÃ±a Cueva
Miriam Gisella Mendoza Pilco
Flor Marina Condori Huamani
Naomi Villanueva Ajito
Luz Milagros Gutierrez Malca
Karin Alejo Campos
Ingrid Michelle More Flores
MÃ³nica Fiorella Cisneros Romero
Betsi Ana Loayza Flores
Mariel del Rosario GarcÃ­a Lara
Ruth Eliana Silva Castillo
Erika Diana Vidal Capillo
Angie Gesenia Condor Macuri
Stephanie Pamela Hiyagon Arroyo
Grecia Leticia Rayme Pumacayo
Cindy Deisy Mendoza Ibarra
Mitchell RodrÃ­guez LeÃ³n
Maria Grecia Cutipa GonzÃ¡les
Geraldine Chauca Escobar
Mary katherine Castillo Baygorrea
Nadia Cuadros Prieto
Elizabeth Condori Gonzales
Rocio Emma Tapia Alva
Neiza Luz NuÃ±ez Pfoccoalata
ARANTZA BURGA VALDERRAMA
Schelsen Brilly Majuan Lopez
Sandra Vanessa SolÃ³rzano Vargas
Yelitza Choque Rivera
Katherine Cecilia Ortega Ramos
Maricarmen Rojas Tinco
Aslheys Ariana Nicholle Cabana Cahuana
Nathaly Grace Pacheco Asto
Janine Vega Uribe
WENDY SHIRLEY REYES SANTANA
Milagros Gonzales Ore
Jenny Mishel Velasquez Mamani
Dana Lissete Franco Pittman
Maria Nakarid Jave Sagastegui
AYDA Sulca Urpay
Magali Zambrano Neri
Flor Retamozo Marengo*/
