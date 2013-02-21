/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
/*Dla każdego (each) pobranego p wykonujemy funkcję,
 w której ustawiamy dla p kolor niebieski
 wraz z podkreśleniem, oraz ustawiamy zdarzenie click,
 w którym wykonujemy funkcję
 wyświetlającą okienko alert z atrybutem href danego p*/
  $('p')html.scss({color:blue,textDecoration:underline})
      .click(function() {
            alert('Link prowadzi do: ' + $(this).attr('href'))
            
          
      })
})


var wspEnd = new Array();
  switch(dostepneProby)
  {
  case 8:
     wspEnd = drawEllipse(ctx, 10, 20, 40, 40).XYend;
	 console.log(wspEnd[1]);
     break;
  case 7:
    //execute code block 2
    break;
  }
 





	//klasa obiektów animowanych poklatkowo
	/* Jest to na szybko przerobiona klasa _Gwiazdka, 
	która teraz wyświetla animowany poklatkowo obiekt. 
	Dodatkowe atrybuty przy jej wywołaniu to _c w którym podajemy z
	mienną zawierającą canvas (dzięki temu nasza metoda jest jeszcze bardziej super),
	_obr wskazujący na obiekt z obrazkiem do wyświetlenia oraz
	_liczba_klatek, które dana animacja ma mieć. 
	Metoda draw zawiera kod animacji poklatkowej, który przed chwilą animował Fantomasa.
	Metodę ruszaj nieco uprościłem, by była bardziej użyteczna dla naszych potrzeb. 
	Sami łatwo możemy tą klasę rozbudować by obiekty się poruszały, skakały czy gryzły - co kto lubi.

Skoro stworzyliśmy naszą klasę, wykorzystajmy ją by jeszcze lepiej animować naszego Fantomasa*/
	function _Animowany_obiekt(_c, _x, _y, _speed, _obr, _liczba_klatek) {
		this.x = _x;
		this.y = _y;
		this.speed = _speed;
		this.przesuniecieX = this.speed;
		this.przesuniecieY = this.speed;
		this.canvas = _c;
		
		this.obr = _obr;
		this.nr_klatki = 1;
		this.liczba_klatek = _liczba_klatek;
		this.szerokosc_klatki = _obr.width / _liczba_klatek;
		this.wysokosc_klatki = _obr.height;
		
		this.draw = function() {
			this.nr_klatki++;
			if (this.nr_klatki>this.liczba_klatek) {this.nr_klatki = 1;}
			var xklatki = (this.nr_klatki-1)*this.szerokosc_klatki;
			/*Na początku deklarujemy potrzebne zmienne - aktualną klatkę, 
			liczbę klatek, oraz wyliczamy ile jest wszystkich klatek w animacji.
			Funkcja draw() wylicza skąd ma zacząć wycinanie kawałka grafiki o rozmiarach
			"szerokosc_klatki na wyokosc_klatki", a następnie wycięty fragment wyświetla na płótnie.
			Animacja ma być zapętlona, stąd w linijkach 18-21 sprawdzamy numer klatki i w razie czego go
			cofamy.*/
			this.canvas.drawImage(this.obr, xklatki, 0, this.szerokosc_klatki, this.wysokosc_klatki, this.x, this.y, this.szerokosc_klatki, this.wysokosc_klatki);
		}		//drawImage(image, sx, sy, swidth, sheight, dx, dy, dWidth, dHeight) 

		this.ruszaj = function() {		
			this.x = this.x + this.przesuniecieX;
			this.y = this.y + this.przesuniecieY;
			this.draw();
		}

	}

var NewNode = document.ap;

.indexO
	//ustawiamy podstawowe zmienne - obrazki, canvas oraz animowanego Fantomasa
	var cFA = document.getElementById('canvas_fantomas_wkracza_do_akcji').getContext('2d');
	var dom_d = new Image(66,85);
		dom_d.src = 'dom.png';
	var dom_m = new Image(60,90);
		dom_m.src = 'dom2.png';
	var fire = new Image(135,41);
		fire.src = "fire.png";
    var fantom = new Image(240,66);
		fantom.src = 'fantom.png';
	
	var fantomas = new _Animowany_obiekt(cFA, 60, 35, 0, fantom, 3);

	//tworzmy domki przesówane w tle
	var ile_domow_d = 3;
	var ile_domow_m = 5;
	
	//domki wstawiamy do tablicy domy_d i domy_m - dla każdego wybieramy szybkosc i pozycję x
	/*Utwórzmy teraz kilka domów, które będą się przemieszczać w tle. 
	Ma być ich kilka, więc tworzymy je za pomocą 2 pętli typu for, w których do 
	tablic dla każdego domu wstawiamy randomową szybkość i pozycję x. Dzięki temu 
	domki będą się przesuwać w różnym tempie, a ruch zaczną od różnego x miejsca. 
	Jako, że nie są to poklatkowo animowane obiekty, więc nie stosujemy naszej klasy.*/
	var domy_d = [];
	for (i=0; i<ile_domow_d; i++) {
		domy_d.push([2+Math.random() , Math.random()*200])
	}

	var domy_m = [];
	for (i=0; i<ile_domow_m; i++) {
		domy_m.push([1+Math.random() , Math.random()*200])
	}

	/* Zakończone przygotowania do wkroczenia do akcji, 
	czas więc odpalić sekwencyjnie funkcję drawFantomasAkcja() 
	(jeżeli mamy kilka takich animacji na stronie, pamiętajmy by każda funkcja animująca miała swoją 
	unikalną nazwę).
Funkcja ta wykonuje pętlę po wszystkich domkach i zmienia ich pozycję x. 
Jeżeli wyjdą poza płótno (czyli ich x będzie mniejsze od -szerokość_domku), 
wtedy ustawiamy pozycję drzewka na nowo (na prawo) i wybieramy dla niego nową szybkość. 
Dodatkowo funkcja ta odpala metodę draw() naszego animowanego obiektu fantomas, która automatycznie go animuje.
 Jest to łopatologiczny kod, i nie ciekawy.

Nas interesują bardziej rzeczy, które dzieją się po tych 2 pętlach.
 Pierwsza rzecz to odpalenie metody draw() naszego animowanego obiektu.

Kolejna - ostatnia czynność to losowy strzał z pistoletu (wyświetlenie obrazka wystrzału).
 Losowość otrzymujemy przez równanie Math.random()>0.8. Wiemy, że random() zwraca wartość z przedziału 0-1,
 więc nasza losowość wynosi 20%. */
	
	//funkcja rysująca naszą animację
	function drawFantomasAkcja() {	
		cFA.fillStyle = "#111";
		cFA.fillRect(0,0,200,100);
  //domy[szybkosc][pozycja] 
		//poruszamy domki i w razie czego resetujemy ich pozycję
		//na poczatku rysujemy małe domki w tle
		for (i=0; i<ile_domow_m; i++) {
		//x = x - szybkosc
			domy_m[i][1] = domy_m[i][1] - domy_m[i][0];
			
			cFA.drawImage(dom_m, domy_m[i][1], 20);
			//jesli pozycja x < -szerokosci
			if (domy_m[i][1] < -dom_m.width) {
			//to x ustawiam z powrotem na 200
				domy_m[i][1] = 200;
				//a szybkosc losowa
				domy_m[i][0] = 1 + Math.random();
			}
		}

		for (j=0; j<ile_domow_d; j++) {
			domy_d[j][1] = domy_d[j][1] - domy_d[j][0];
			cFA.drawImage(dom_d, domy_d[j][1], 20);
			if (domy_d[j][1] < -dom_d.width) {
				domy_d[j][1] = 200;
				domy_d[j][0] = 2 + Math.random()
			}
		}

		//rysujemy fantomasa
		fantomas.draw();

		//i jego super strzał z pistoletu
		if (Math.random()>0.8) cFA.drawImage(fire,114,43)//images,x,y
	}

	//odpalamy funkcję draw()
	fantom.onload = function(){
		setInterval('drawFantomasAkcja()',100);			
	}  

