//Get Companies From Json File
const searchCompany = async searchBox => {
    const res = await fetch('./jsonfiles/companies.json');
    const companies = await res.json();
  
    //Get Entered Data
    let fits = companies.filter(company => {
      const regex = new RegExp(`^${searchBox}`, 'gi');
      return company.Company_Name.match(regex) || company.abbr.match(regex);
    });
  
    if (searchBox.length === 0) {
      fits = [];
      companyList.innerHTML = '';
    }
  
    outputHtml(fits);
  };
  
  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0) {
      const html = fits
        .map(
          fit => `
       <div class="row">
       <div class="col s12">
         <div class="card  grey darken-4 darken-1">
           <div class="card-content white-text">
             <h4 class="card-title m1">${fit.Company_Name} (${
            fit.Company_Market_Cap
          })<span class="blue-text m-4"> ${fit.Country_of_Incorporation}</span></h4>
          <div class="card-action">
          <a>Country Code :</a>
          <a>${fit.Market}</a>
        </div>
           </div>
         </div>
       </div>
     </div>
       `
        )
        .join('');
  
      document.getElementById('companyList').innerHTML = html;
    }
  };
  
  document
    .getElementById('search')
    .addEventListener('input', () => searchCompany(search.value));