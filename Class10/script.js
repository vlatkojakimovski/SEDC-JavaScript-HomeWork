let countryName = $("#countryName");
let btn = $("#btn");
let results = $("#results");
let liFirstChild = $("#results li:eq(0)");

btn.click(function () {
    let country = countryName.val();
    country = country.replace(/\s/g, "%20");
    let settings = {
        async: true,
        crossDomain: true,
        url: `https://covid-19-data.p.rapidapi.com/country?name=${country}`,
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "681247397bmsh40b29d3b4d01a5fp10c3bfjsndf70bc798f5f",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        },
    };

    ///////////////////////////////////////////////
    //// Get results with using jQuery aproach
    ////////////////////////////////////////////////
    $.ajax(settings).done(function (response) {
        if (response.length === 0) {
            alert(`Please enter valid country name`);
            console.log(`Please enter valid country name`);
            countryName.val("");
        } else {
            console.log(response[0].country);

            results.append(`
                <li><h2>This is results for <span id="countryColor">${
                    response[0].country
                } </span> updated on:
                ${response[0].lastUpdate}</h2></li>
                <li>Confirmed cases: <h3>${response[0].confirmed}</h3> </li>
                <li>Recovered cases: <h3>${response[0].recovered}</h3 </li>
                <li>Deaths: <h3>${response[0].deaths}</h3 </li>
                <li> In ${
                    response[0].country
                } calculated in percentage there is <h3>${calculateRecoveredPercent(
                response[0].recovered,
                response[0].deaths
            ).toFixed(2 )} % </h3> of recovered cases, and <h3> ${calculateDeathPercent(
                response[0].recovered,
                response[0].deaths
            ).toFixed(2)} % </h3> of death cases </li> <hr>
            `);
            critical(calculateDeathPercent(
                response[0].recovered,
                response[0].deaths
            ).toFixed(2));
            countryName.val("");
        }
    });
    console.log(settings.url);

    /////////////////////////////////////////////////
    ///// Get results with using fetch aproach
    /////////////////////////////////////////////////
    // fetch(
    //     `https://covid-19-data.p.rapidapi.com/country?name=${country}`,
    //     settings
    // )
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response);
    //         if (response.length === 0) {
    //             alert(`Please enter valid country name`);
    //             console.log(`Please enter valid country name`);
    //             countryName.val("");
    //         } else {
    //             console.log(response[0].country);

    //             results.append(`
    //                 <li><h2>This is results for <span id="countryColor">${
    //                     response[0].country
    //                 } </span> updated on: 
    //                 ${response[0].lastUpdate}</h2></li>
    //                 <li>Confirmed cases: <h3>${
    //                     response[0].confirmed
    //                 }</h3> </li>
    //                 <li>Recovered cases: <h3>${
    //                     response[0].recovered
    //                 }</h3 </li>
    //                 <li>Deaths: <h3>${response[0].deaths}</h3 </li>
    //                 <li> In ${
    //                     response[0].country
    //                 } calculated in percentage there is <h3>${calculateRecoveredPercent(
    //                 response[0].recovered,
    //                 response[0].deaths
    //             ).toFixed(
    //                 2
    //             )} % </h3> of recovered cases, and <h3> ${calculateDeathPercent(
    //                 response[0].recovered,
    //                 response[0].deaths
    //             ).toFixed(2)} % </h3> of death cases </li> <hr>
    //                 `);
    //             critical(
    //                 calculateDeathPercent(
    //                     response[0].recovered,
    //                     response[0].deaths
    //                 ).toFixed(2)
    //             );
    //             countryName.val("");
    //         }
    //     })
    //     .catch((err) => console.log(err));
});

function calculateDeathPercent(recovered, deaths) {
    return (100 / (recovered + deaths)) * deaths;
}
function calculateRecoveredPercent(recovered, deaths) {
    return (100 / (recovered + deaths)) * recovered;
}
function critical(percent) {
    if (percent >= 5) {
        console.log("Im in critical");
        $("ul li").last().css("color", "red");
        $("ul li").last().prev("li").css("color", "red");
    }
}
