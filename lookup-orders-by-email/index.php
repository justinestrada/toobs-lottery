<?php

// if (isset($_POST['email_address'])) {
  $email_address = $_POST['email_address'];
  // TODO: get all files in /data some like wilder card name "orders_*" or something
  $orders_csv = str_getcsv('../data/orders_2022-03-05-12_55_02_2022-03-02-13_04_50.csv', "\n");
  // Name,Email,Financial Status,Paid at,Fulfillment Status,Fulfilled at,Subtotal,Total,Created at,Cancelled at,Refunded Amount,Employee
  // $rows = explode('PHP_EOL', $orders_csv);
  $rows = explode(',', $orders_csv);
  foreach ($rows as $key => $row) {
    var_dump($row);
    echo '<hr>';    
  }
// }
