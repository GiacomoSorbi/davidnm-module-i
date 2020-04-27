Highcharts.getJSON('./jsonfiles/ftse100.json', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {   


        rangeSelector: {
            selected: 1
        },
        scrollbar: {
            hide: true
        },
        series: [{
            name: 'ftse100',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

function myJsFunc(param1) {

  Highcharts.getJSON('./jsonfiles/'+param1+".json", function (data) {
    // Create the chart
    Highcharts.stockChart('container', {   


        rangeSelector: {
            selected: 1
        },
        scrollbar: {
            hide: true
        },
        series: [{
            name: param1,
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});
}


//CHANGE TABLES
function myJsFuncCambiatabal(param1) {

if(param1=="world"){
    const html = `
    <table id="indices">
    <tbody><tr>
    <td class="tdbis"><a href="#" onclick="myJsFunc('DowJones');">Dow Jones</a></td>
    <td class="tdbis">24,047.20</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+271.93</td>
    <td class="tdbis">+1.14%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('nasdaq');">NASDAQ</a></td>
    <td class="tdsecondbis">8,711.96</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+323.90</td>
    <td class="tdsecondbis">+0.90%</td>
    </tr>
    <tr>
    <td class="tdbis"><a href="#" onclick="myJsFunc('dax');">DAX</a></td>
    <td class="tdbis">10,659.99</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+323.90</td>
    <td class="tdbis">+3.13%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('cac40');">CAC40</a></td>
    <td class="tdsecondbis">4,505.26</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+111.94</td>
    <td class="tdsecondbis">+2.55%</td>
    </tr>
    <tr class="tdbis">
    <td class="tdbis"><a href="#" onclick="myJsFunc('ftseTechMARK100');">FTSE techMARK 100</a></td>
    <td class="tdbis">4,517.20</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+157.89</td>
    <td class="tdbis">+3.62%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('nikkei');">NIKKEI</a></td>
    <td class="tdsecondbis">19,783.22</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+521.22</td>
    <td class="tdsecondbis">+2.71%</td>
    </tr>
    <tr class="">
    <td class="tdbis"><a href="#" onclick="myJsFunc('ibex');">IBEX35</a></td>
    <td class="tdbis">6.731,80</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+117,90</td>
    <td class="tdbis">1,78 %</td>
    </tr>
    </tbody></table>
    `
    document.getElementById('indices').innerHTML = '';
    document.getElementById('indices').innerHTML = html;
}
if(param1=="uk"){
    const html = `
    <table id="indices">
    <tbody><tr>
    <td class="tdbis"><a href="#" onclick="myJsFunc('ftse100');">FTSE 100</a></td>
    <td class="tdbis">5,583.50</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+168.00</td>
    <td class="tdbis">+3.10%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftse250');">FTSE 250</a></td>
    <td class="tdsecondbis">14,807.14</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+707.93</td>
    <td class="tdsecondbis">+5.02%</td>
    </tr>
    <tr>
    <td class="tdbis"><a href="#" onclick="myJsFunc('ftse350');">FTSE 350</a></td>
    <td class="tdbis">3,099.04</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+102.07</td>
    <td class="tdbis">+3.41%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftseAllShare');">FTSE All Share</a></td>
    <td class="tdsecondbis">3,058.79</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+100.39</td>
    <td class="tdsecondbis">+3.39%</td>
    </tr>
    <tr class="tdbis">
    <td class="tdbis"><a href="#" onclick="myJsFunc('ftseTechMARK100');">FTSE techMARK 100</a></td>
    <td class="tdbis">4,517.20</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+157.89</td>
    <td class="tdbis">+3.62%</td>
    </tr>
    <tr class="tdsecondbis">
    <td class="tdsecondbis"><a href="#" onclick="myJsFunc('ftseSmallCap');">FTSE Small Cap</a></td>
    <td class="tdsecondbis">4,282.64</td>
    <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdsecondbis">+136.08</td>
    <td class="tdsecondbis">+3.28%</td>
    </tr>
    <tr class="">
    <td class="tdbis"><a href="#" onclick="myJsFunc('ftseAim100');">FTSE AIM 100</a></td>
    <td class="tdbis">3,460.62</td>
    <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
    <td class="tdbis">+112.80</td>
    <td class="tdbis">+3.37%</td>
    </tr>
    </tbody></table>
    `
    document.getElementById('indices').innerHTML = '';
    document.getElementById('indices').innerHTML = html;
}

}



//SEARCH
//Get Companies From Json File
const searchCompany = async searchBox => {
    const res = await fetch('./jsonfiles/companies.json');
    const companies = await res.json();

    //Get Entered Data
    let fits = companies.filter(company => {
      const regex = new RegExp(`^${searchBox}`, 'gi');
      return company.Company_Name.match(regex);
    });
  
    if (searchBox.length === 0) {
      fits = [];
      document.getElementById('companyList').innerHTML = '';
    }
  
    outputHtml(fits);
  };
  
  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0 && fits.length < 10) {
      const html = fits.map(
          fit => `
       <div class="row">
       <a href="./shares.html?share=${fit.Company_Name}">${fit.Company_Name} (${fit.ICB_Industry})</a>
     </div>
       `
        )
        .join('');
      document.getElementById('companyList').innerHTML = '';
      document.getElementById('companyList').innerHTML = html;
    }
  };
  
  document.getElementById('search').addEventListener('input', () => searchCompany(search.value));