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
-----------------------------------------

post data in following format for update item and must be in json type
```json
{
    "itemId" : "7",
    "item_name": "Item name",
    "item_quantity": "900",
    "item_reorder_level":"350",
    "item_measure_unit": "g"

}
```
-----------------------------------------
post data in following format for add item in stock and must be in json type
```json
{
    "item_name": "Item name",
    "item_quantity": "900",
    "item_reorder_level":"350",
    "item_unit_type": "g"

}
```

-----------------------------------------

### Meal Type [Menu Planning MealType]
```url
'/'             => [Get all  Meal Types]
'/:id'          => [Get Meal Type By ID]
'/add'          => [Add New Meal Type  ]
'/update'       => [Update Meal Type   ]
'/delete'       => [Delete Meal Type   ]
```
-----------------------------------------

post data in following format for update item and must be in json type
```json
{
    "id" : "7",
    "meal_type": "Vegetarian",

}
```
-----------------------------------------
post data in following format for add item in stock and must be in json type
```json
{
     "meal_type": "Vegetarian",
}
```
-----------------------------------------

### Course Type [Menu Planning CourseType]
```url
'/'             => [Get all  Course Types]
'/:id'          => [Get Course Type By ID]
'/add'          => [Add New Course Type  ]
'/update'       => [Update Course Type   ]
'/delete'       => [Delete Course Type   ]
```
-----------------------------------------

post data in following format for update item and must be in json type
```json
{
    "id" : "7",
    "course_type": "Starter",

}
```
-----------------------------------------
post data in following format for add item in stock and must be in json type
```json
{
     "course_type": "Starter",
}
```
### Users [Menu Planning Users]
```url
'/'             => [Get all  Users ]
'/:id'          => [Get Users By ID]
'/add'          => [Add New Users  ]
'/update'       => [Update Users   ]
'/delete'       => [Delete Users   ]
```
-----------------------------------------

post data in following format for update item and must be in json type
```json
{
    "userId" : "7",
    "full_name": "user full name",
    "user_name": "user name",
    "user_email":"useremail@gmail.com",
    "user_pass": "123456",
    "user_status":"3"

}
```
-----------------------------------------
post data in following format for add item in stock and must be in json type
```json
{
    "full_name": "user full name",
    "user_name": "user name",
    "user_email":"useremail@gmail.com",
    "user_pass": "123456",
    "user_status":"3"
}
```


