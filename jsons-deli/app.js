var jsonThing1 = `{
    "apetizers": [
      {
        "name": "hoagie",
        "ingredients": "ham and cheese",
        "description": "this is a classic sandwich from the hoagie region of france"
      },
      {
        "name": "meatball parm",
        "ingredients": "meatballs and permaessian cheese",
        "description": "this is the worst sandwich on the menu and it actually is really sloppy"
      },
      {
        "name": "chicken terriyaki",
        "ingredients": "this has chicken and cheese all over it ",
        "description": "this is the only thing that is good on the menu at subway."
      }
    ],
    "cold-sandwiches": [
      {
        "name": "turky",
        "ingredients": "turkey",
        "description": "this is just a slice of turkey on bread"
      },
      {
        "name": "ham",
        "ingredients": "ham",
        "description": "this is just ham on bread"
      },
      {
        "name": "tuna",
        "ingredients": "tuna",
        "description": "this is tuna on toast with your choice of cheeses that  you can put on there"
      }
    ],
    "hot-sandwiches": [
      {
        "name": "fish",
        "ingredients": "fish",
        "description": "fish sandwich"
      },
      {
        "name": "chicken pattie",
        "ingredients": "giant chicken nugget",
        "description": "this is a generic chicken pattie that is heated up on the moicrowave"
      },
      {
        "name": "vaggie",
        "ingredients": "vegetables",
        "description": "this is as sandwich withno meat in it so that you can say that you are vegan "
      }
    ],
    "desserts": [
      {
          "name":"brownie",
          "ingredients":"chocolate",
          "description":"this is a big brownie that is cooked on a cookies sheet"
  
      },
      {
          "name":"cinnamon roll",
          "ingredients":"cinnamon",
          "description":"this is a thing thta is sold at cinabon"
  
      },
      {
          "name":"cookies",
          "ingredients":"cookies",
          "description":"this is just your garden variety type of cookies that you get at the super market"
  
      }
  
    ],
    "drinks": [
      {
          "name":"pepsi",
          "ingredients":"sugar",
          "description":"this is a can from the vending machine "
  
      }
  
    ]
  }`

  var parsed = JSON.parse(jsonThing1);

  console.log(parsed["cold-sandwiches"][1]);