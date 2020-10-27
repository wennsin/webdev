window.addEventListener("load",function(){
    GetBookings();
});

    function GetBookings(){
        let url = 'https://api.sheety.co/970bfc602945d3f02c81b7806bcae1a2/bookingApp/bookings';
        fetch(url)
        .then((response) => response.json())
        .then(json => { //we can put json to anyname, we can put as wenn and the below json.bookings must change to wenn.bookings
        // Do something with the data

        var bookings = document.getElementById("booking-list");
        var bookingIds = [];

        for(var i = 0; i < json.bookings.length; i++){
            var gName = json.bookings[i].name;
            var gEmail = json.bookings[i].email;
            var gPax = json.bookings[i].pax;
            var gId = json.bookings[i].id; //is the row id from the google sheet
            var buttonId = "delete" + gId; //this is for the delete button next to the booking IDs

            let row = bookings.insertRow(bookings.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPax;
            row.insertCell(4).innerHTML = ""; //remarks
            row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";

            bookingIds.push(buttonId);
        }

        for (let j = 0; j < bookingIds.length; j++){
            //console.log(bookingIds[j]);
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click",function(){
            let theId = bookingIds[j].replace("delete","");
            //DeleteBooking(theId);
            } );
        }
        });
    }