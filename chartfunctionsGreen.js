Highcharts.getJSON('./jsonfiles/ftse100.json', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {
  
        rangeSelector: {
            selected: 1
        },
        chart: {
            styledMode: true
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
        chart: {
            styledMode: true
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
    <td class="tdbis"><a href="#" onclick="myJsFunc('HangSeng');">Hang Seng</a></td>
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
if(param1=="FTSE100"){
    const html = `
    <section class="sectionContenedora2" id="subidabajada">
    <div id="movers-risers" class="divtopflops">
      <p class="spacer-top-none spacer-bottom-half"><strong>FTSE 100 risers</strong></a></p>
      <table class="spacer-top-none">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Rolls Royce Holdings Plc" title="View factsheet for Rolls Royce Holdings Plc" class="link-headline">Rolls Royce Holdings Plc</a></td>
          <td class="tdbis">297.70p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+18.32%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Melrose Industries plc" title="View factsheet for Melrose Industries plc" class="link-headline">Melrose Industries plc</a></td>
          <td class="tdsecondbis">88.72p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+17.88%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Carnival plc" title="View factsheet for Carnival plc" class="link-headline">Carnival plc</a></td>
          <td class="tdbis">721.40p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+17.34%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Legal &amp; General Group plc" title="View factsheet for Legal &amp; General Group plc" class="link-headline">Legal &amp; General Group plc</a></td>
          <td class="tdsecondbis">186.30p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+16.66%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Barratt Developments plc" title="View factsheet for Barratt Developments plc" class="link-headline">Barratt Developments plc</a></td>
          <td class="tdbis">447.40p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+16.42%</td>
          </tr>
          </tbody></table>
      </div>
    <div id="movers-fallers" class="divtopflops2">
      <p class="spacer-top-none spacer-bottom-half"><strong>FTSE 100 fallers</strong></a></p>
      <table class="spacer-top-none spacer-bottom">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Sainsbury (J) plc" title="View factsheet for Sainsbury (J) plc" class="link-headline">Sainsbury (J) plc</a></td>
          <td class="tdbis">206.10p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-3.42%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=United Utilities Group Plc" title="View factsheet for United Utilities Group Plc" class="link-headline">United Utilities Group Plc</a></td>
          <td class="tdsecondbis">826.20p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-2.78%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Halma plc" title="View factsheet for Halma plc" class="link-headline">Halma plc</a></td>
          <td class="tdbis">1,848.50p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">2.17%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=London Stock Exchange Group plc" title="View factsheet for London Stock Exchange Group plc" class="link-headline">London Stock Exchange Group plc</a></td>
          <td class="tdsecondbis">7,064.00p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-1.89%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Pennon Group" title="View factsheet for Pennon Group" class="link-headline">Pennon Group</a></td>
          <td class="tdbis">1,025.50p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-1.87%</td>
          </tr>
          </tbody></table>
      </div>
    </section>
    `
    document.getElementById('subidabajada').innerHTML = '';
    document.getElementById('subidabajada').innerHTML = html;
}
if(param1=="AIM100"){
    const html = `
    <section class="sectionContenedora2" id="subidabajada">
    <div id="movers-risers" class="divtopflops">
      <p class="spacer-top-none spacer-bottom-half"><strong>AIM 100 risers</strong></a></p>
      <table class="spacer-top-none">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Sumo Group" title="View factsheet for Sumo Group" class="link-headline">Sumo Group</a></td>
          <td class="tdbis">200p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+11.73%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=ITM Power plc" title="View factsheet for ITM Power plc" class="link-headline">ITM Power plc</a></td>
          <td class="tdsecondbis">156.8p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+6.67%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Team17 Group Plc" title="View factsheet for Team17 Group Plc" class="link-headline">Team17 Group Plc</a></td>
          <td class="tdbis">604p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+5.96%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Legal &amp; General Group plc" title="View factsheet for Legal &amp; General Group plc" class="link-headline">Legal &amp; General Group plc</a></td>
          <td class="tdsecondbis">186.30p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+16.66%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Applegreen plc" title="View factsheet for Applegreen plc" class="link-headline">Applegreen plc</a></td>
          <td class="tdbis">270p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+5.88%</td>
          </tr>
          </tbody></table>
      </div>
    <div id="movers-fallers" class="divtopflops2">
      <p class="spacer-top-none spacer-bottom-half"><strong>AIM 100 fallers</strong></a></p>
      <table class="spacer-top-none spacer-bottom">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Hurricane Energy plc" title="View factsheet for Hurricane Energy plc" class="link-headline">Hurricane Energy plc</a></td>
          <td class="tdbis">10.25p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-13.06%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Hutchison China Meditech" title="View factsheet for Hutchison China Meditech" class="link-headline">Hutchison China Meditech</a></td>
          <td class="tdsecondbis">331p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-7.54%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Numis Corporation" title="View factsheet for Numis Corporation" class="link-headline">Numis Corporation</a></td>
          <td class="tdbis">230p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-4.17%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Creo Medical Group Plc" title="View factsheet for Creo Medical Group Plc" class="link-headline">Creo Medical Group Plc</a></td>
          <td class="tdsecondbis">122.5p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-3.16%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Johnson Service Group plc" title="View factsheet for Johnson Service Group plc" class="link-headline">Johnson Service Group plc</a></td>
          <td class="tdbis">116p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-2.68%</td>
          </tr>
          </tbody></table>
      </div>
    </section>
    `
    document.getElementById('subidabajada').innerHTML = '';
    document.getElementById('subidabajada').innerHTML = html;
}
if(param1=="SmallCap"){
    const html = `
    <section class="sectionContenedora2" id="subidabajada">
    <div id="movers-risers" class="divtopflops">
      <p class="spacer-top-none spacer-bottom-half"><strong>Small Cap risers</strong></a></p>
      <table class="spacer-top-none">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Sig plc" title="View factsheet for Sig plc" class="link-headline">Sig plc</a></td>
          <td class="tdbis">24.16p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+20.08%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Funding Circle PLC" title="View factsheet for Funding Circle PLC" class="link-headline">Funding Circle PLC</a></td>
          <td class="tdsecondbis">97.8p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+19.71%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Rps Group plc" title="View factsheet for Rps Group plc" class="link-headline">Rps Group plc</a></td>
          <td class="tdbis">47p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+19.59%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=CC Japan Income & Growth" title="View factsheet for CC Japan Income & Growth" class="link-headline">CC Japan Income & Growth</a></td>
          <td class="tdsecondbis">125p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdsecondbis">+9.17%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Schroder European Real Estate" title="View factsheet for Schroder European Real Estate" class="link-headline">Schroder European Real Estate</a></td>
          <td class="tdbis">74p</td>
          <td class="tdbis"><i class="material-icons" style="color:green">arrow_upward</i></td>
          <td class="tdbis">+7.87%</td>
          </tr>
          </tbody></table>
      </div>
    <div id="movers-fallers" class="divtopflops2">
      <p class="spacer-top-none spacer-bottom-half"><strong>Small Cap fallers</strong></a></p>
      <table class="spacer-top-none spacer-bottom">
        <tbody><tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Medica Group plc" title="View factsheet for Medica Group plc" class="link-headline">Medica Group plc</a></td>
          <td class="tdbis">114p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-12.31%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=ASA International Group Plc" title="View factsheet for ASA International Group Plc" class="link-headline">ASA International Group Plc</a></td>
          <td class="tdsecondbis">50p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-9.09%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Pharos Energy plc" title="View factsheet for Pharos Energy plc" class="link-headline">Pharos Energy plc</a></td>
          <td class="tdbis">16.06p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-7.17%</td>
          </tr>
          <tr class="tdsecondbis">
          <td class="tdsecondbis"><a href="./sharesGreen.html?share=Pendragon" title="View factsheet for Pendragon" class="link-headline">Pendragon</a></td>
          <td class="tdsecondbis">7.14p</td>
          <td class="tdsecondbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdsecondbis">-6.79%</td>
          </tr>
          <tr>
          <td class="tdbis"><a href="./sharesGreen.html?share=Premier Oil Plc" title="View factsheet for Premier Oil Plc" class="link-headline">Premier Oil Plc</a></td>
          <td class="tdbis">25.17p</td>
          <td class="tdbis"><i class="material-icons" style="color:red">arrow_downward</i></td>
          <td class="tdbis">-5.66%</td>
          </tr>
          </tbody></table>
      </div>
    </section>
    `
    document.getElementById('subidabajada').innerHTML = '';
    document.getElementById('subidabajada').innerHTML = html;
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
    if (fits.length > 0) {
        fits=fits.slice(0, 5);
      const html = fits.map(
          fit => `
       <div class="row">
       <a href="./sharesGreen.html?share=${fit.Company_Name}">${fit.Company_Name} (${fit.ICB_Industry})</a>
     </div>
       `
        )
        .join('');
      document.getElementById('companyList').innerHTML = '';
      document.getElementById('companyList').innerHTML = html;
    }
  };
  
  document.getElementById('search').addEventListener('input', () => searchCompany(search.value));