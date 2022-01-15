var googleResultUrl = 'http://illinois.edu/resources/results.html';
var cx              = '006549799505564222509:-8lddip9q2g';
var cof             = 'FORID:11';
var skinId              = '';

function sendSearch(){
	 if(document.gs.searchType_people.checked)
	 {
		document.gs.cx.value = '';
		document.gs.cof.value = '';
		if(document.gs.q.value == 'Search')
		{
		   document.gs.search.value = '';
		}
		else
		{
		   document.gs.search.value = document.gs.q.value;  
		}
		document.gs.skinId.value = skinId;
		document.gs.action = "http://illinois.edu/ds/search";
	}
	else
	{
		document.gs.cx.value = cx;
		document.gs.cof.value = cof;
		document.gs.id = cx;
		document.gs.action = googleResultUrl;
	}
}
function checkSearchValue(){
    if(document.gs.q.value == 'Search' || document.gs.q.value == ''){
	   document.gs.q.style.backgroundColor='#ffffff';	
		document.gs.q.value ='';
	}
}

document.write("<div id='search_nav' style='z-index:9999;'>");
document.write("    <ul id='search_nav_LEFT'>");
document.write("        <li class='search' role=\"search\" aria-labelledby=\"st\"> <a href='#search' accesskey='2'></a>");
document.write("            <form method='get' name='gs' id='' onsubmit='sendSearch()' action=''>");
document.write("                <input type='hidden' name='search'/>");
document.write("                <input type='hidden' name='search_type' value='all'/>");
document.write("                <input type='hidden' name='skinId' value=''/>");
document.write("                <input type='hidden' name='cx' value='' />");
document.write("                <input type='hidden' name='cof' value='' />");
document.write("                <h3 id=\"st\" class='hide'>Search Type</h3>");
document.write("                <ul id='radio'>");
document.write("                    <li>");
document.write("                        <input type='radio' name='t' id='searchType_people' value='1' />");
document.write("                        <label for='searchType_people'>Directory</label>");
document.write("                    </li>");
document.write("                    <li>");
document.write("                        <input type='radio' name='t' id='searchType_info' value='2' checked='checked' />");
document.write("                        <label for='searchType_info'>Illinois</label>");
document.write("                   </li>");
document.write("                </ul>");
document.write("               <input name='q' id='q' class='searchbox' type='text' size='10' value='Search' onfocus='checkSearchValue()' />");
document.write("                <input type='submit' name='sa' value='Go' class='searchbutton' id='go' />");
document.write("           </form>");
document.write("        </li>");
document.write("    </ul>");
document.write("    <ul id='search_nav_RIGHT'>");
document.write("        <li><a href='http://illinois.edu/find/calendars.html'>");
document.write( 				getDate());
document.write("            </a>&nbsp;&nbsp;</li>");
document.write("        <li class='bullet'><a href='http://www.atmos.illinois.edu/weather/index.php'>weather</a></li>");
document.write("    </ul>");
document.write("</div>");


