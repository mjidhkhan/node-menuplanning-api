# node-menuplanning-api

Restfull API for food Menu Planning Using Node and express JS

```
url: localhost:3000/stock
```

### Stock [Menu Planning Stock]
```url
'/'             => [Get all  items]
'/:stickId'     => [Get Item By ID]
'/add'          => [Add New Item  ]
'/update'       => [Update Item   ]
'/delete'       => [Delete Item   ]
```
---------------------------------------------

post data in following format for update item and must be in json type
```json
{
    "itemId" : "7",
    "item_name": "Item name",
    "item_quantity": "900",
    "item_reorder_level":"350",
    "item_measure_unit": "G"

}
```
-----------------------------------------
post data in following format for add item in stock and must be in json type
```json
{
    "item_name": "Item name",
    "item_quantity": "900",
    "item_reorder_level":"350",
    "item_unit_type": "G"

}
```
-----------------------------------------

@TODO :

```
    New User 
    New Staff
    ------------
    New Recipe
    Starters
    MainCourses
    Reviews
    Desserts
    Refreshments
    -------------
    Orders
    Customers
    -------------
    Nutrition (future work)


```

