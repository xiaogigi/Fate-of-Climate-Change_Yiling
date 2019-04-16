// budget bar
var new_budget, left_budget;
var organization_style, campaign_style, power_style, emission_style, transport_style, migration_style, disease_style, water_style, bioengineering_style, child_style;
new_budget = 1000;

//greeting
function greeting(){
//	document.getElementById("greeting").style.display="none";
	document.getElementById("greeting").style.animation="fade-out 1s ease-out both";
}

//mitigation budget

function budgetFunction_campaign(){
	//budget
//	new_budget = new_budget - 200;
	if(campaign_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
		  if(new_budget - 200 < 0){
	   insufficient_fund();
	   } else{
		   new_budget = new_budget - 200;
		   document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("awareness").style.display = "block";

	//scenario page
	document.getElementById("terrorism_header").style.display = "block";
	
	sessionStorage.setItem("campaign_status", "block");
campaign_style = sessionStorage.getItem("campaign_status");
	   } 
	   }
	
}



function budgetFunction_power(){
//	new_budget = new_budget - 600;
	if(power_style == "block"){
	    window.alert("You've already selected this strategy.");
	   } else{
		  if(new_budget - 600 < 0){
   insufficient_fund();
   } else{
	   new_budget = new_budget - 600;
	   document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("power").style.display = "block";

	//message page
	setTimeout(function(){document.getElementById("message1").style.display = "block";
						  document.getElementById("red_dot").style.display = "block"}, 5000);
	sessionStorage.setItem("power_status", "block");
	power_style = sessionStorage.getItem("power_status");
   } 
	   }
}



function budgetFunction_emission(){
	  if(emission_style == "block"){
		  window.alert("You've already selected this strategy.");
		 } else{
			 if(organization_style == null){
		document.getElementById("emission_popup").style.display = "block"
	}else{
//		new_budget = new_budget - 500;
		if(new_budget - 500 < 0){
		   insufficient_fund();
		   }else{
			   new_budget = new_budget - 500;
			  document.getElementById("budget_number").innerHTML = new_budget;
		document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
		var number_location = 150 - new_budget / 1000 * 150;
		document.getElementById("budget_number").style.left = 220 - number_location + 'px';
		//option page
		document.getElementById("emission").style.display = "block";
		sessionStorage.setItem("emission_status","block"); 
			   	//scenario page
emission_style = sessionStorage.getItem("emission_status");
		   }
	}
		 }
}



function budgetFunction_organization(){
//	new_budget = new_budget - 500;
	if(organization_style == "block"){
	   window.alert("You've already selected this strategy.");
	   }else{
	   if(new_budget - 500 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 500;
		document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("organization").style.display = "block";
	
	sessionStorage.setItem("organization_status", "block");
organization_style = sessionStorage.getItem("organization_status");
	}
	   }
}



function budgetFunction_transport(){
//	new_budget = new_budget - 700;
	if(transport_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
		if(new_budget - 700 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 700;
			document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("transport").style.display = "block";
	
	sessionStorage.setItem("transport_status", "block");
	transport_style = sessionStorage.getItem("transport_status");
	}   
	   }
}


//adaptation budget
function budgetFunction_migration(){
//	new_budget = new_budget - 600;
	if(migration_style == "block"){
	   window.alert("You've already selected this strategy.");
	   } else{
		if(new_budget - 600 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 600;
		document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("migration").style.display = "block";
	
	sessionStorage.setItem("migration_status", "block");
migration_style = sessionStorage.getItem("migration_status");
	}   
	   }
}


function budgetFunction_disease(){
//	new_budget = new_budget - 500;
	if(disease_style == "block"){
		window.alert("You've already selected this strategy.");
	} else {
		if(new_budget - 500 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 500;
		document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("disease").style.display = "block";

	//message page
	setTimeout(function(){document.getElementById("message3").style.display = "block";
						  document.getElementById("red_dot").style.display = "block";}, 5000);
	sessionStorage.setItem("disease_status", "block");
disease_style = sessionStorage.getItem("disease_status");
	}
	}
}


function budgetFunction_water(){
//	new_budget = new_budget - 700;
if(water_style == "block"){
	window.alert("You've already selected this strategy.");
} else {
if(new_budget - 700 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 700;
		document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("water").style.display = "block";

	//message page
	setTimeout(function(){document.getElementById("message4").style.display = "block";
						  document.getElementById("red_dot").style.display = "block";}, 5000);
		
	sessionStorage.setItem("water_status", "block");
	water_style = sessionStorage.getItem("water_status");
	}	
}
}


function budgetFunction_bioengineering(){
//	new_budget = new_budget - 700;
	if(bioengineering_style == "block"){
		window.alert("You've already selected this strategy.");
	}else{
	if(new_budget - 700 < 0){
		insufficient_fund();
	}else{
		new_budget = new_budget - 700;
		document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("bioengineering").style.display = "block";
	
	sessionStorage.setItem("bioengineering_status", "block");
	bioengineering_style = sessionStorage.getItem("bioengineering_status");
	}		
	}
}


function budgetFunction_child(){
	if(child_style == "block"){
		window.alert("You've already selected this strategy.");
	} else {
	if(organization_style == null){
	   document.getElementById("child_popup").style.display = "block";
	   }else{
//		  new_budget = new_budget - 600;
		   
		   if(new_budget - 600 < 0){
			   insufficient_fund();
		   }else{
			   new_budget = new_budget - 600;
			 document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';

	//option page
	document.getElementById("child").style.display = "block";
		   
	sessionStorage.setItem("child_status", "block");
		child_style = sessionStorage.getItem("child_status");  
		   }
	   }	
	}
}




//year bar
function move(){
	var elem = document.getElementById("year_bar");
	var sig = document.getElementById("signifier");
	var year = document.getElementById("year_number");
	var width = 1;
	var left_position = 90;
	var year_position = 80;
	var year_num = 2020;
	var id = setInterval(frame, 2000);
	var id2 = setInterval(frame2, 32000);
	function frame(){
		if (width >= 100) {
			clearInterval(id);
			window.alert("Time's up.");
			scenario_test();

		} else{
			width++;
			left_position = left_position + 1.5
			year_position = year_position +1.5;
			elem.style.width = width + '%';
			sig.style.left = left_position + 'px';
			year.style.left = year_position + 'px';
		}
	}

	function frame2 () {
		if (width >= 100) {
			clearInterval(id2);
		} else{
			year_num = year_num + 5;
			year.innerHTML = year_num;
		}
	}
}

//strategy page
function strategy(){
	//strategy page
	document.getElementById("strategy_box").style.display = "block";
	document.getElementById("organization").style.display = organization_style;
	document.getElementById("awareness").style.display = campaign_style;
	document.getElementById("power").style.display = power_style;
	document.getElementById("emission").style.display = emission_style;
	document.getElementById("transport").style.display = transport_style;
	document.getElementById("migration").style.display = migration_style;
	document.getElementById("disease").style.display = disease_style;
	document.getElementById("water").style.display = water_style;
	document.getElementById("bioengineering").style.display = bioengineering_style;
	document.getElementById("child").style.display = child_style;

	//homepage
	document.getElementById("mitigate").style.display = "none";
	document.getElementById("adapt").style.display = "none";

	//adapt
	document.getElementById("migration_box").style.display = "none";
	document.getElementById("disease_box").style.display = "none";
	document.getElementById("water_box").style.display = "none";
	document.getElementById("bioengineering_box").style.display = "none";
	document.getElementById("child_box").style.display = "none";

	//mitigate
	document.getElementById("awareness_box").style.display = "none";
	document.getElementById("power_box").style.display = "none";
	document.getElementById("emission_box").style.display = "none";
	document.getElementById("organization_box").style.display = "none";
	document.getElementById("transport_box").style.display = "none";


	//message page
	document.getElementById("message_box").style.display = "none";

	//head
	document.getElementById("head2").style.display = "block";
	document.getElementById("head").style.display = "none";

	//scenario page
	document.getElementById("scenario_box").style.display = "none";

}

function mitigate() {
	//homepage
	document.getElementById("mitigate").style.display = "none";
	document.getElementById("adapt").style.display = "none";

	//adapt
	document.getElementById("migration_box").style.display = "none";
	document.getElementById("disease_box").style.display = "none";
	document.getElementById("water_box").style.display = "none";
	document.getElementById("bioengineering_box").style.display = "none";
	document.getElementById("child_box").style.display = "none";

	//mitigate
	document.getElementById("awareness_box").style.display = "block";
	document.getElementById("power_box").style.display = "block";
	document.getElementById("emission_box").style.display = "block";
	document.getElementById("organization_box").style.display = "block";
	document.getElementById("transport_box").style.display = "block";

	//strategy page
	document.getElementById("strategy_box").style.display = "none"

	//head
	document.getElementById("head2").style.display = "block";
	document.getElementById("head").style.display = "none";

	//scenario page
	document.getElementById("scenario_box").style.display = "none";
}

function homepage() {
	//homepage
	document.getElementById("mitigate").style.display = "block";
	document.getElementById("adapt").style.display = "block";

	//adapt
	document.getElementById("migration_box").style.display = "none";
	document.getElementById("disease_box").style.display = "none";
	document.getElementById("water_box").style.display = "none";
	document.getElementById("bioengineering_box").style.display = "none";
	document.getElementById("child_box").style.display = "none";

	//mitigate
	document.getElementById("awareness_box").style.display = "none";
	document.getElementById("power_box").style.display = "none";
	document.getElementById("emission_box").style.display = "none";
	document.getElementById("organization_box").style.display = "none";
	document.getElementById("transport_box").style.display = "none";

	//message page
	document.getElementById("message_box").style.display = "none";

	//strategy page
	document.getElementById("strategy_box").style.display = "none"

	//head
	document.getElementById("head").style.display = "block";
	document.getElementById("head2").style.display = "none";

	//scenario page
	document.getElementById("scenario_box").style.display = "none";
}

function adapt(){
	//homepage
	document.getElementById("mitigate").style.display = "none";
	document.getElementById("adapt").style.display = "none";

	//adapt
	document.getElementById("migration_box").style.display = "block";
	document.getElementById("disease_box").style.display = "block";
	document.getElementById("water_box").style.display = "block";
	document.getElementById("bioengineering_box").style.display = "block";
	document.getElementById("child_box").style.display = "block";


	//mitigate
	document.getElementById("awareness_box").style.display = "none";
	document.getElementById("power_box").style.display = "none";
	document.getElementById("emission_box").style.display = "none";
	document.getElementById("organization_box").style.display = "none";
	document.getElementById("transport_box").style.display = "none";

	//head
	document.getElementById("head2").style.display = "block";
	document.getElementById("head").style.display = "none";

	//scenario page
	document.getElementById("scenario_box").style.display = "none";
}


//message page
function your_message(){
	//homepage
	document.getElementById("mitigate").style.display = "none";
	document.getElementById("adapt").style.display = "none";

	//adapt
	document.getElementById("migration_box").style.display = "none";
	document.getElementById("disease_box").style.display = "none";
	document.getElementById("water_box").style.display = "none";
	document.getElementById("bioengineering_box").style.display = "none";
	document.getElementById("child_box").style.display = "none";


	//mitigate
	document.getElementById("awareness_box").style.display = "none";
	document.getElementById("power_box").style.display = "none";
	document.getElementById("emission_box").style.display = "none";
	document.getElementById("organization_box").style.display = "none";
	document.getElementById("transport_box").style.display = "none";

	//message page
	document.getElementById("message_box").style.display = "block";

	//strategy page
	document.getElementById("strategy_box").style.display = "none";

	//head
	document.getElementById("head2").style.display = "block";
	document.getElementById("head").style.display = "none";

	//scenario page
	document.getElementById("scenario_box").style.display = "none";
}

//Power message
function message_power(){
	document.getElementById("message_power").style.display = "block";
	document.getElementById("red_dot").style.display = "none";
}

function no2(){
	document.getElementById("message_power").style.display = "none";
	if(emission_style == "block"){
		document.getElementById("message_power3").style.display = "block";
	} else{
		document.getElementById("message_power2").style.display = "block";
		document.getElementById("power").style.display = "none";
		sessionStorage.setItem("power_status2", "none");
		power_style = sessionStorage.getItem("power_status2");
	}
}

function close_window(){
	document.getElementById("message_power").style.display = "none";
	document.getElementById("message_power2").style.display = "none";
	document.getElementById("message_power3").style.display = "none";
}

//agreement message

function message_agreement(){
	document.getElementById("message_agreement").style.display = "block";
	document.getElementById("red_dot").style.display = "none";
}

function close_window2(){
	document.getElementById("message_agreement").style.display = "none";

}


//epdemics message
function message_epidemics(){
	document.getElementById("message_epidemics").style.display = "block";
	document.getElementById("red_dot").style.display = "none";
}

function close_window3(){
	document.getElementById("message_epidemics").style.display = "none";

}

//heat message
function message_heat(){
	document.getElementById("message_heat").style.display = "block";
	document.getElementById("red_dot").style.display = "none";
}

function close_window4(){
	document.getElementById("message_heat").style.display = "none";
}

//popup
function popup_close(){
	document.getElementById("popup").style.display = "none";
	document.getElementById("popup2").style.display = "none";
}

function disease_popup(){
	setTimeout(function(){document.getElementById("popup").style.display = "block"}, 100000);

	setTimeout(function(){document.getElementById("popup2").style.display = "block"}, 150000);
}

function yes_button(){
	document.getElementById("message_power").style.display = "none";
	
	if(new_budget - 800 < 0){
	   insufficient_fund();
		document.getElementById("power").style.display = "none";
		sessionStorage.setItem("power_status2", "none");
		power_style = sessionStorage.getItem("power_status2");
	   }else{
		   new_budget = new_budget - 800;
		   document.getElementById("power").style.display = "block";
		   sessionStorage.setItem("power_status3", "block");
		   power_style = sessionStorage.getItem("power_status3");
		   	document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';
		   	setTimeout(function(){document.getElementById("message2").style.display = "block";
						  document.getElementById("red_dot").style.display = "block"}, 5000)
	document.getElementById("power_header").style.display = "block";
	   }

}

//scenario page
function terrorism_scenario(){
	document.getElementById("world_news_content").style.display = "block";
}

function organization_scenario(){
	document.getElementById("world_news_content2").style.display = "block";
}

function transport_scenario(){
	document.getElementById("world_news_content3").style.display = "block";
}

function migration_scenario(){
	document.getElementById("world_news_content4").style.display = "block";
}


function migration_scenario2(){
	document.getElementById("world_news_content8").style.display = "block";
}

function power_scenario(){
	document.getElementById("world_news_content5").style.display = "block";
}

function bioengineering_scenario(){
	document.getElementById("world_news_content6").style.display = "block";
}

function child_scenario(){
	document.getElementById("world_news_content7").style.display = "block";
}

function content_close(){
	document.getElementById("world_news_content").style.display = "none";
	document.getElementById("world_news_content2").style.display = "none";
	document.getElementById("world_news_content3").style.display = "none";
	document.getElementById("world_news_content4").style.display = "none";
	document.getElementById("world_news_content5").style.display = "none";
	document.getElementById("world_news_content6").style.display = "none";
	document.getElementById("world_news_content7").style.display = "none";
	document.getElementById("world_news_content8").style.display = "none";
}

function popup_button3(){
	document.getElementById("emission_popup").style.display = "none";
	document.getElementById("child_popup").style.display = "none";
}

function insufficient_fund(){
	alert("Sorry, insufficient fund");
}
function handout_budget(){
	new_budget = new_budget + 1000;
	document.getElementById("budget_number").innerHTML = new_budget;
	document.getElementById("budget_bar").style.width = new_budget / 1000 * 150 + 'px';
	var number_location = 150 - new_budget / 1000 * 150;
	document.getElementById("budget_number").style.left = 220 - number_location + 'px';
}

function scenario_test(){
	document.getElementById("scenario_box").style.display = "block";
	document.getElementById("world_news_map").style.display = "block";
	
	//IPCC report
	if(emission_style == "block"){
	   document.getElementById("global_temperature").style.display = "block";
	   }
	if(emission_style !== "block" && campaign_style == "block" || power_style == "block" || transport_style == "block" ){
	    document.getElementById("global_temperature2").style.display = "block";
	   }
	if(emission_style !== "block" && organization_style !== "block" && power_style !== "block" && transport_style !== "block"){
		document.getElementById("global_temperature3").style.display = "block";
		  document.getElementById("global_temperature2").style.display = "none";
	}
	
	//news
	if(migration_style == "block" || emission_style == "block"){
	   document.getElementById("migration_header").style.display = "block";
		console.log(emission_style);
	   }else{
		   document.getElementById("migration_header2").style.display = "block"; 
		   
	if(campaign_style == "block"){
	   document.getElementById("terrorism_header").style.display = "block";
	   }
		   
	if(organization_style == "block"){
	   document.getElementById("organization_header").style.display = "block";
	   }
		   
	if(transport_style == "block"){
	   document.getElementById("transport_header").style.display = "block";
	   }
	
	if(power_style == "block"){
	   document.getElementById("power_header").style.display = "block";
	   }
		   
	   }

	//strategy page
	document.getElementById("strategy_box").style.display = "none"

	//homepage
	document.getElementById("mitigate").style.display = "none";
	document.getElementById("adapt").style.display = "none";

	//adapt
	document.getElementById("migration_box").style.display = "none";
	document.getElementById("disease_box").style.display = "none";
	document.getElementById("water_box").style.display = "none";
	document.getElementById("bioengineering_box").style.display = "none";
	document.getElementById("child_box").style.display = "none";

	//mitigate
	document.getElementById("awareness_box").style.display = "none";
	document.getElementById("power_box").style.display = "none";
	document.getElementById("emission_box").style.display = "none";
	document.getElementById("organization_box").style.display = "none";
	document.getElementById("transport_box").style.display = "none";

	//message page
	document.getElementById("message_box").style.display = "none";

	//head
	document.getElementById("head2").style.display = "none";
	document.getElementById("head").style.display = "none";

}

window.onload = disease_popup();
window.onload = setTimeout(function(){handout_budget()}, 100000);
window.onclick = function() {greeting();}