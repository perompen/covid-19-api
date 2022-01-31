init()

function init() {
    let url = "https://disease.sh/v3/covid-19/all"

    let data = ""

    $.get(url, function (data) {
        console.log(data)

        data = `
    <td>${data.cases}</td>
    <td>${data.deaths}</td>
    <td>${data.todayCases}</td>
    <td>${data.todayDeaths}</td>
    `

        $("#data").html(data)
    })
}

function refreshData() {
    clearData()
    init()
}

function clearData() {
    $("#data").empty()
}