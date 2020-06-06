const dataProduct = [
    {'id': '1', 'id_cashier':'1', 'cashier': 'Pevita Pearce', 'product': 'latte', 'id_cat':'2','catagory': 'Drink', 'price': 10000},
    {'id': '2', 'id_cashier':'2', 'cashier': 'Raisa Andriana', 'product': 'Cake', 'id_cat':'1','catagory': 'Food', 'price': 30000},
    {'id': '3', 'id_cashier':'3', 'cashier': 'Betuah', 'product': 'Tai Tea', 'id_cat':'2','catagory': 'Drink', 'price': 15000}
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

const edit = (id) => {
    const res = dataProduct.find(data => data.id === id)
    $('#cashierEdit').val(res.id_cashier)
    $('#catagoryEdit').val(res.id_cat)
    $('#productEdit').val(res.product)
    $('#priceEdit').val(res.price)
};

const del = (id) => {
    const ress = dataProduct.find(data => data.id === id)
    console.log(ress)
    $('#delData').html(`data ${ress.cashier} ID <span style="color: #FADC9C">${ress.id_cashier}</span>`)
    // $('#delData').text(id)
}

$(document).ready(function(){

    
    
    const htmlTable = dataProduct.map((data, i) => {
        return `<tr>
            <td>${i+1}</td>
            <td>${data.cashier}</td>
            <td>${data.product}</td>
            <td>${data.catagory}</td>
            <td>${data.price}</td>
            <td>
                <button onclick="edit('${data.id}')" data-toggle="modal" data-target="#editModal" class="btn btn-lg" style="background-color:transparent; color: green"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button onclick="del('${data.id}')" data-toggle="modal" data-target="#delModal" class="btn btn-lg" style="background-color:transparent; color: red"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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
    $('#cashierEdit').append(selectCashier)
    $('#catagoryEdit').append(selectCatagory)

    // Search
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase()
        $("#myTable tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

});
