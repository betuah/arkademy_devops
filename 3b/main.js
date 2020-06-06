$(document).ready(function(){
    
    // Initial Data
    const dataProduct = [
        {'id': '1','cashier': 'Pevita Pearce', 'product': 'latte', 'catagory': 'Drink', 'price': 10000},
        {'id': '2','cashier': 'Raisa Andriana', 'product': 'Cake', 'catagory': 'Food', 'price': 30000},
        {'id': '3','cashier': 'Betuah', 'product': 'Tai Tea', 'catagory': 'Drink', 'price': 15000}
    ]

    const dataCatagory = [
        {'id': 1, 'name': 'Food'},
        {'id': 2, 'name': 'Drink'}
    ]

    const dataCashier = [
        {'id': 1, 'name': 'Pevita Pearce'},
        {'id': 2, 'name': 'Raisa Andriana'},
        {'id': 3, 'name': 'Betuah Anugerah'}
    ]

    const htmlTable = dataProduct.map((data, i) => {
        return `<tr>
            <td>${i+1}</td>
            <td>${data.cashier}</td>
            <td>${data.product}</td>
            <td>${data.catagory}</td>
            <td>${data.price}</td>
            <td>
                <button onClick="edit(${data.id})" data-toggle="modal" data-target="#editModal" class="btn btn-lg" style="background-color:transparent; color: green"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button onClick="delete(${data.id})" class="btn btn-lg" style="background-color:transparent; color: red"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
        </tr>`
        
    })

    const selectCashier = dataCashier.map(data => {
        return `<option value="${data.id}">${data.name}</option>`
    })

    const selectCatagory = dataCatagory.map(data => {
        return `<option value="${data.id}">${data.name}</option>`
    })

    // Get All data
    $('#myTable > tbody:last-child').append(htmlTable)

    $('#cashier').append(selectCashier)

    $('#catagory').append(selectCatagory)

    // Search
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase()
        $("#myTable tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

    //edit
    function edit(id) {
        alert(id)
    }
});