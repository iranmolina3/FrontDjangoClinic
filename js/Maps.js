function iniciarMap(){
    var coord = {lat:15.100534, lng:-90.319937};
    var map = new google.maps.Map(document.getElementById('map'),{
      	zoom: 18,
    	center: coord
    });
    var marker = new google.maps.Marker({
    position: coord,
	map: map,
    label: {
    	color: 'white',
    	fontWeight: 'bold',
   		text: 'Clínica Médica Dr. Fernando Pineda',
	},
    });
}

