# node-menuplanning-api

Simple Restfull API for food Menu Planning Using Node and express JS.
This API is created only to learn ReactJs.

### Installation Process
 Download or clone to any directory.

 Go inside directory and from command prompt or shell run following command.
```shell
 npm install
 ```

Then run following command
```shell
 npm start
 ``` 
-----------------------------------------     

### Use Postman app
If you want to check the working or response  then use ***Postman App***. You can use any browser if you like.

-----------------------------------------

```
url: localhost:3000
```

### Stock [Menu Planning Stock]
```url
'/stock'              => [Get all  items]
'/stock/:stockId'     => [Get Item By ID]
'/stock/add'          => [Add New Item  ]
'/stock/update'       => [Update Item   ]
'/stock/delete'       => [Delete Item   ]
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
'/mealtype'              => [Get all  Meal Types]
'/mealtype/:id'          => [Get Meal Type By ID]
'/mealtype/add'          => [Add New Meal Type  ]
'/mealtype/update'       => [Update Meal Type   ]
'/mealtype/delete'       => [Delete Meal Type   ]
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
'/coursetype'              => [Get all  Course Types]
'/coursetype/:id'          => [Get Course Type By ID]
'/coursetype/add'          => [Add New Course Type  ]
'/coursetype/update'       => [Update Course Type   ]
'/coursetype/delete'       => [Delete Course Type   ]
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
'/user'              => [Get all  Users ]
'/user/:id'          => [Get Users By ID]
'/user/add'          => [Add New Users  ]
'/user/update'       => [Update Users   ]
'/user/delete'       => [Delete Users   ]
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

-----------------------------------------
### Starters [Menu Planning Starters]
```url
'/starters'                 => [Get all  Starters   ]
'/starters?name=veg'        => [Get Veg Starters    ]
'/starters?name=nveg'       => [Get Non-Veg Starters]
```

-----------------------------------------
### Main Course [Menu Planning Main Courses]
```url
'/manicourse'                 => [Get all  Main Courses   ]
'/manicourse?name=veg'        => [Get Veg Main Courses    ]
'/manicourse?name=nveg'       => [Get Non-Veg Main Courses]
```

-----------------------------------------
### Recipe [Menu Planning Recipe]
```url
'/recipe'                            => [Get all  Recipes           ]
'/recipe/?name=starter&val=veg'      => [Get Veg Starter Recipes    ]
'/recipe/?name=starter&val=nveg'     => [Get Non-Veg Starter Recipes]
'/recipe/?name=maincourse&val=veg'   => [Get Veg Main Course Recipes]
'/recipe/?name=Maincourse&val=nveg'  => [Get Non-Veg Starter Recipes]
'/recipe/?name=drink&val=drink'      => [Get Veg Refreshment Recipes]
'/recipe/?name=dessert&val=dessert'  => [Get Non-Veg Starter Recipes]
```
-----------------------------------------

### Orders [Menu Planning Orders]
```url
'/orders'               => [Get all  Orders  ]
'/orders/:orderId'      => [Get Orders ByID  ]
'/orders/data/:date'    => [Get Orders ByDate]
'/orders/customer/:id'  => [Get Orders ByDate]
```
-----------------------------------------


### Reviews [Menu Planning Reviews]
```url
'/reviews'                           => [Get all  Reviews  ]
'/reviews/:reviewId'                 => [Get Reviews ByID  ]
'/reviews/data/:date'                => [Get Reviews ByDate]
'/reviews/customer/:customerId'      => [Get Reviews ByDate]
'/reviews/course/:courseId'          => [Get Reviews ByDate]
```
-----------------------------------------


### Desserts [Menu Planning Desserts]
```url
'/desserts'                            => [Get all  Desserts]
'/desserts/:dessertId'                 => [Get Desserts ByID]
```
-----------------------------------------

### Refreshments [Menu Planning Refreshments]
```url
'/refreshments'                      => [Get all  Refreshments]
'/Refreshments/:refreshmentId'       => [Get Refreshments ByID]
```
-----------------------------------------




