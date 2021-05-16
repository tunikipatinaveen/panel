function renderpanal(obj) {
    var tableBody = $("tbody")
        //var tablebody=document.getrelementby id("tbody");
    var dataRow = $("<tr>").attr("src", "data-row")
        // var datarow=document.createelement("tr");
        //dataRow.clasname="datarow"
    var id = $("<td>").attr("class", "column1")
    $(id).html(obj.id)
        //id.innertext="bhjjhhb"
    var firstName = $("<td>").attr("class", "column2")
    $(firstName).html(obj.firstName)
    var lastName = $("<td>").attr("class", "column3")
    $(lastName).html(obj.lastName)
    var email = $("<td>").attr("class", "column4")
    $(email).html(obj.email)
    var phone = $("<td>").attr("class", "column5")
    $(phone).html(obj.phone)

    $(dataRow).append(id)
    $(dataRow).append(firstName)
    $(dataRow).append(lastName)
    $(dataRow).append(email)
    $(dataRow).append(phone)
    $(tableBody).append(dataRow)







    $(dataRow).click(function() {
        $(".data-row").removeClass("active")
        $(dataRow, this).addClass("active")



        var set = localStorage.setItem("currObject", JSON.stringify(obj))
        console.log(set)
    })


}




$(document).ready(function() {
    console.log("Dom ready")
    $.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', function(data) {
        console.log(data)

        var flag = 5

        for (var i = 0; i < data.length; i++) {

            renderpanal(data[i]);

        }



        var infoContent = $("#info-content")

        var nameBar = $("<div>")

        var description = $("<div>")

        var addressBar = $("<div>")
        $(addressBar).html("ADDRESS :")
        var city = $("<div>")

        var state = $("<div>")

        var zip = $("<div>")



        $(infoContent).append(nameBar)
        $(infoContent).append(description)
        $(infoContent).append(addressBar)
        $(infoContent).append(city)
        $(infoContent).append(state)
        $(infoContent).append(zip)

        function renderpanal(obj) {
            var tableBody = $("tbody")
            var dataRow = $("<tr>").attr("class", "data-row")
            var id = $("<td>").attr("class", "column1")
            $(id).html(obj.id)
            var firstName = $("<td>").attr("class", "column2")
            $(firstName).html(obj.firstName)
            var lastName = $("<td>").attr("class", "column3")
            $(lastName).html(obj.lastName)
            var email = $("<td>").attr("class", "column4")
            $(email).html(obj.email)
            var phone = $("<td>").attr("class", "column5")
            $(phone).html(obj.phone)

            $(dataRow).append(id)
            $(dataRow).append(firstName)
            $(dataRow).append(lastName)
            $(dataRow).append(email)
            $(dataRow).append(phone)
            $(tableBody).append(dataRow)




            if (i === 0) {
                $(".data-row").addClass("active")
                $("#name").html("User selected : " + obj.firstName + " " + obj.lastName)
                $("#description").html("Description : " + obj.description)
                $("#city").html("City: " + obj.address.city)
                $("#state").html("State: " + obj.address.state)
                $("#zip").html("Zip: " + obj.address.zip)

            }


            $(dataRow).click(function() {
                /*  $(".data-row").removeClass("active")
                  $(dataRow,this).addClass("active") */

                $(nameBar).html("User selected : " + obj.firstName + " " + obj.lastName)
                $(description).html("Description : " + obj.description)
                $(city).html("City: " + obj.address.city)
                $(state).html("State: " + obj.address.state)
                $(zip).html("Zip: " + obj.address.zip)


            })


        }





        $(document).ready(function() {

            $("#search-box").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("tbody tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });


    })

})