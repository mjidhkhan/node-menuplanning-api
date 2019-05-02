# node-menuplanning-api

Restfull API for food Menu Planning Using Node and express JS

```
url: localhost:3000
```

### Stock [Menu Planning Stock]
```url
'/stock'             => [Get all  items]
'stock/:stockId'     => [Get Item By ID]
'stock/add'          => [Add New Item  ]
'stock/update'       => [Update Item   ]
'stock/delete'       => [Delete Item   ]
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
'/mealtype'             => [Get all  Meal Types]
'mealtype/:id'          => [Get Meal Type By ID]
'mealtype/add'          => [Add New Meal Type  ]
'mealtype/update'       => [Update Meal Type   ]
'mealtype/delete'       => [Delete Meal Type   ]
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
'/coursetype'             => [Get all  Course Types]
'coursetype/:id'          => [Get Course Type By ID]
'coursetype/add'          => [Add New Course Type  ]
'coursetype/update'       => [Update Course Type   ]
'coursetype/delete'       => [Delete Course Type   ]
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
-----------------------------------------
### Users [Menu Planning Users]
```url
'/user'             => [Get all  Users ]
'user/:id'          => [Get Users By ID]
'user/add'          => [Add New Users  ]
'user/update'       => [Update Users   ]
'user/delete'       => [Delete Users   ]
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


### Starters [Menu Planning Starters]
```url
'/starters'                 => [Get all  Starters    ]
'/starters?name=veg'        => [Get Veg Starters     ]
'/starters?name=nveg'       => [Get Non-Veg Starters ]
```
-----------------------------------------




