	var allpoint =40;
	var shut_s = 0;
	var hard_s = 0;
	var sacri_s = 0;
	var tower_s = 0;

	var inte_s = 0;
	var knock_s = 0;
	var earth_s = 0;
	var solid_s = 0;
	var shock_s = 0;

	var drain_s = 0;
	var hornet_s = 0;
	var harm_s = 0;
	var gazer_s = 0;
	var back_s = 0;
	var cyclone_s = 0;
	var lv = [0,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];

 //35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,5,4,4,3,3,2,2,1,1

	function f_shut(obj){
	var hoge;
	hoge = obj.n_shut.options[obj.s_shut.selectedIndex].value;
	shut_s = hoge;
		if(shut_s!=2){
			hard_s = 0;
			document.hardrainforce.n_hard.selectedIndex=0;
			sacri_s = 0;
			document.sacrifice.n_sacri.selectedIndex=0;			
			tower_s = 0;
			document.towerdomination.n_tower.selectedIndex=0;
	}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];

	}


	function f_hard(obj){
	var hoge;
	hoge = obj.n_hard.options[obj.s_hard.selectedIndex].value;
	hard_s = hoge;
	if(shut_s!=2){
		shut_s = 2;
		document.shutout.n_shut.selectedIndex=1;
	}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_sacri(obj){
	var hoge;
	hoge = obj.n_sacri.options[obj.s_sacri.selectedIndex].value;
	sacri_s = hoge;	
		if(shut_s!=2){
		shut_s = 2;
		document.shutout.n_shut.selectedIndex=1;
	}	
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}

	function f_tower(obj){
	var hoge;
	hoge = obj.n_tower.options[obj.s_tower.selectedIndex].value;
	tower_s = hoge;	
		if(shut_s!=2){
		shut_s = 2;
		document.shutout.n_shut.selectedIndex=1;
	}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}



	function f_inte(obj){
	var hoge;
	hoge = obj.n_inte.options[obj.s_inte.selectedIndex].value;
	inte_s = hoge;
		if(inte_s!=4){
			knock_s = 0;
			document.knockimpact.n_knock.selectedIndex=0;
			earth_s = 0;
			document.earthbind.n_earth.selectedIndex=0;
			solid_s = 0;
			document.solidstrike.n_solid.selectedIndex=0;
			shock_s = 0;
			document.shockwave.n_shock.selectedIndex=0;
			}

	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_knock(obj){
	var hoge;
	hoge = obj.n_knock.options[obj.s_knock.selectedIndex].value;
	knock_s = hoge;
		if(knock_s!=4){
			earth_s = 0;
			document.earthbind.n_earth.selectedIndex=0;
			}
		if(inte_s!=4){
		inte_s = 4;
		document.intencefai.n_inte.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}

	function f_earth(obj){
	var hoge;
	hoge = obj.n_earth.options[obj.s_earth.selectedIndex].value;
	earth_s = hoge;
		if(inte_s!=4||knock_s!=4){
		inte_s = 4;
		document.intencefai.n_inte.selectedIndex=3;
		knock_s = 4;
		document.knockimpact.n_knock.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_solid(obj){
	var hoge;
	hoge = obj.n_solid.options[obj.s_solid.selectedIndex].value;
	solid_s = hoge;
		if(solid_s!=4){
			shock_s = 0;
			document.shockwave.n_shock.selectedIndex=0;
			}
		if(inte_s!=4){
		inte_s = 4;
		document.intencefai.n_inte.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}

	function f_shock(obj){
	var hoge;
	hoge = obj.n_shock.options[obj.s_shock.selectedIndex].value;
	shock_s = hoge;
		if(inte_s!=4||solid_s!=4){
		inte_s = 4;
		document.intencefai.n_inte.selectedIndex=3;
		solid_s = 4;
		document.solidstrike.n_solid.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}




	function f_drain(obj){
	var hoge;
	hoge = obj.n_drain.options[obj.s_drain.selectedIndex].value;
	drain_s = hoge;
		if(drain_s!=4){
			hornet_s = 0;
			document.hornetsting.n_hornet.selectedIndex=0;
			harm_s = 0;
			document.harmactivate.n_harm.selectedIndex=0;
			gazer_s = 0;
			document.gazersmash.n_gazer.selectedIndex=0;
			back_s = 0;
			document.backhandbrow.n_back.selectedIndex=0;
			cyclone_s = 0;
			document.cyclonedisaster.n_cyclone.selectedIndex=0;
			}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}

	function f_hornet(obj){
	var hoge;
	hoge = obj.n_hornet.options[obj.s_hornet.selectedIndex].value;
	hornet_s = hoge;
		if(hornet_s!=4){
			gazer_s = 0;
			document.gazersmash.n_gazer.selectedIndex=0;
			}
		if(drain_s!=4){
		drain_s = 4;
		document.draincraw.n_drain.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_harm(obj){
	var hoge;
	hoge = obj.n_harm.options[obj.s_harm.selectedIndex].value;
	harm_s = hoge;
		if(harm_s!=4){
			gazer_s = 0;
			document.gazersmash.n_gazer.selectedIndex=0;
			}
		if(drain_s!=4){
		drain_s = 4;
		document.draincraw.n_drain.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_gazer(obj){
	var hoge;
	hoge = obj.n_gazer.options[obj.s_gazer.selectedIndex].value;
	gazer_s = hoge;
		if(drain_s!=4||hornet_s!=4||harm_s!=4){
		drain_s = 4;
		document.draincraw.n_drain.selectedIndex=3;
		hornet_s = 4;
		document.hornetsting.n_hornet.selectedIndex=3;
		harm_s = 4;
		document.harmactivate.n_harm.selectedIndex=3;

		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function f_back(obj){
	var hoge;
	hoge = obj.n_back.options[obj.s_back.selectedIndex].value;
	back_s = hoge;
		if(back_s!=4){
			cyclone_s = 0;
			document.cyclonedisaster.n_cyclone.selectedIndex=0;
			}
		if(drain_s!=4){
		drain_s = 4;
		document.draincraw.n_drain.selectedIndex=3;
		}
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}

	function f_cyclone(obj){
	var hoge;
		if(drain_s!=4||back_s!=4){
		drain_s = 4;
		document.draincraw.n_drain.selectedIndex=3;
		back_s = 4;
		document.backhandbrow.n_back.selectedIndex=3;
		}
	hoge = obj.n_cyclone.options[obj.s_cyclone.selectedIndex].value;
	cyclone_s = hoge;
	target = document.getElementById("output");
	target2 = document.getElementById("level");
	allpoint = 40 - hard_s - shut_s - sacri_s - tower_s -inte_s - knock_s - earth_s - solid_s - shock_s - drain_s - hornet_s - harm_s - gazer_s - back_s - cyclone_s;
	target.innerHTML = allpoint;
	target2.innerHTML = lv[40-allpoint];
	}


	function reset(){
	shut_s = 0;
	hard_s = 0;
	sacri_s = 0;
	tower_s = 0;

	inte_s = 0;
	knock_s = 0;
	earth_s = 0;
	solid_s = 0;
	shock_s = 0;

	drain_s = 0;
	hornet_s = 0;
	harm_s = 0;
	gazer_s = 0;
	back_s = 0;
	cyclone_s = 0;

	document.shutout.n_shut.selectedIndex=0;
	document.hardrainforce.n_hard.selectedIndex=0;
	document.sacrifice.n_sacri.selectedIndex=0;
	document.towerdomination.n_tower.selectedIndex=0;
	
	document.intencefai.n_inte.selectedIndex=0;
	document.knockimpact.n_knock.selectedIndex=0;
	document.earthbind.n_earth.selectedIndex=0;
	document.solidstrike.n_solid.selectedIndex=0;
	document.shockwave.n_shock.selectedIndex=0;

	document.draincraw.n_drain.selectedIndex=0;
	document.hornetsting.n_hornet.selectedIndex=0;
	document.harmactivate.n_harm.selectedIndex=0;
	document.gazersmash.n_gazer.selectedIndex=0;
	document.backhandbrow.n_back.selectedIndex=0;
	document.cyclonedisaster.n_cyclone.selectedIndex=0;
	document.shutout.n_shut.selectedIndex=0;

	allpoint = 40;

	target = document.getElementById("output");
	target2 = document.getElementById("level");
	target.innerHTML = allpoint;
	target2.innerHTML = lv[1];
	}