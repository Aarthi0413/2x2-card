//chart 1
domo.get(`/data/v1/olist_data_chart?fields=customer_state,price&groupby=customer_state`)
.then(function(data){
    //console.log(data)

    data = data.sort((a,b) => a.price - b.price);
    console.log(data)

    const ctx = document.getElementById('chartOne').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: [data[0].customer_state, data[1].customer_state, data[2].customer_state, data[3].customer_state,data[4].customer_state, data[5].customer_state],
        datasets: [{
            label: 'Top least price',
            data: [data[0].price, data[1].price, data[2].price, data[3].price, data[4].price, data[5].price],
            borderWidth: 1,
            backgroundColor:[
                'rgb(116, 142, 84)',
                'rgb(156, 145, 79)',
                'rgb(149,94,66)',
                'rgb(85, 55, 57)',
                'rgb(99, 83, 128)',
                'rgb(239, 199, 194)',
            ],
            borderColor:[
                'rgb(116, 142, 84)',
                'rgb(156, 145, 79)',
                'rgb(149,94,66)',
                'rgb(85, 55, 57)',
                'rgb(99, 83, 128)',
                'rgb(239, 199, 194)',
            ]
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
})

//chart 2
domo.get(`/data/v1/olist_data_chart?fields=product_category_name_english,product_photos_qty&groupby=product_category_name_english`)
.then(function(data_tow){
    console.log(data_tow)
    const ctx = document.getElementById('chartTwo').getContext('2d');

    new Chart(ctx, {
        type: 'polarArea',
        data: {
        labels: [data_tow[0].product_category_name_english, data_tow[1].product_category_name_english, data_tow[2].product_category_name_english, data_tow[3].product_category_name_english, data_tow[4].product_category_name_english,data_tow[5].product_category_name_english,],
        datasets: [{
            label: 'Filter by product length',
            data: [data_tow[0].product_photos_qty, data_tow[1].product_photos_qty, data_tow[2].product_photos_qty, data_tow[3].product_photos_qty, data_tow[4].product_photos_qty, data_tow[5].product_photos_qty],
            borderWidth: 1,
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
            ]
        }]
        },
        options: {
        }
    });
})

//chart 3
domo.get(`/data/v1/olist_data_chart?fields=order_status,customer_state&groupby=order_status&filter=order_status!="delivered"`)
.then(function(data_three){
    console.log(data_three)
    const ctx = document.getElementById('chartThree').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: [data_three[0].order_status, data_three[1].order_status, data_three[2].order_status, data_three[3].order_status, data_three[4].order_status,data_three[5].order_status,],
        datasets: [{
            label: 'Third Dataset',
            data: [data_three[0].customer_state, data_three[1].customer_state, data_three[2].customer_state, data_three[3].customer_state, data_three[4].customer_state, data_three[5].customer_state],
            borderWidth: 1,
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
            ],
        }]
        },
        options: {
        },
    });
})

//chart 4
domo.get(`/data/v1/olist_data_chart?fields=product_category_name_english,product_name_lenght&groupby=product_category_name_english&filter=product_name_lenght < 50`)
.then(function(data_three){
    console.log(data_three)
    const ctx = document.getElementById('chartFour').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: [data_three[0].product_category_name_english, data_three[1].product_category_name_english, data_three[2].product_category_name_english, data_three[3].product_category_name_english, data_three[4].product_category_name_english,data_three[5].product_category_name_english,],
        datasets: [{
            label: 'Fourth Dataset',
            data: [data_three[0].product_name_lenght, data_three[1].product_name_lenght, data_three[2].product_name_lenght, data_three[3].product_name_lenght, data_three[4].product_name_lenght, data_three[5].product_name_lenght],
            borderWidth: 1,
            fill: true,
            backgroundColor:[
                'rgb(161,130,118)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
            ],
            tension: 0.1,
        }]
        },
        options: {
        },
    });
})