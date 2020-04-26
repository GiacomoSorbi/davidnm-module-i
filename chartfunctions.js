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

//Get Companies From Json File
const searchCompany = async searchBox => {
    const res = await fetch('./jsonfiles/companies.json');
    const companies = await res.json();
    console.log(companies);

    //Get Entered Data
    let fits = companies.filter(company => {
      const regex = new RegExp(`^${searchBox}`, 'gi');
      return company.Company_Name.match(regex);
    });
  
    if (searchBox.length === 0) {
      fits = [];
      document.getElementById('countryList').innerHTML = '';
    }
  
    outputHtml(fits);
  };
  
  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0) {
      const html = fits.map(
          fit => `
       <div class="row">
       <a href="./shares.html?share=${fit.Company_Name}">${fit.Company_Name} (${fit.ICB_Industry})</a>
     </div>
       `
        )
        .join('');
  
      document.getElementById('companyList').innerHTML = html;
    }
  };
  
  document.getElementById('search').addEventListener('input', () => searchCompany(search.value));