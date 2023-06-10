import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peyment: [
    { id: 1, name: "Credit Card", checked: false },
    { id: 2, name: "PayPal", checked: false },
    { id: 3, name: "Bitcoin", checked: false },
  ],
  capacity: [
    { id: 1, name: 2, checked: false },
    { id: 2, name: 4, checked: false },
    { id: 3, name: 6, checked: false },
    { id: 4, name: 8, checked: false },
  ],
  type: [
    { id: 1, name: "sport", checked: false },
    { id: 2, name: "suv", checked: false },
    { id: 3, name: "sedan", checked: false },
    { id: 4, name: "mpv", checked: false },
    { id: 5, name: "coupe", checked: false },
    { id: 6, name: "hatchback", checked: false },
  ],
  car: [
    {
      id: 1,
      name: "Koeingsegg",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      type_id: 1,
      capacity_id: 1,
      gasoline: 90,
      price: 90.0,
      capacity: 2,
      image: "../assets/images/Car-1.png",
      image_2: "../assets/images/inside-1.jpeg",
      image_3: "../assets/images/inside-1.jpeg",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "24 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "25 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      type_id: 1,
      capacity_id: 1,
      price: 80.0,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 3,
      name: "Rolls-Roys",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "20 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sedan",
      gasoline: 70,
      price: 99.0,
      type_id: 3,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-3.png",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "11 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "4 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      price: 96.0,
      type_id: 1,
      capacity_id: 1,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 5,
      name: "All New Rush",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "19 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 70,
      price: 72.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-5.png",
    },
    {
      id: 6,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "16 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      price: 74.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-6.png",
    },
    {
      id: 7,
      name: "All New Terios",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "17 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "20 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "coupe",
      gasoline: 90,
      type_id: 5,
      capacity_id: 3,
      price: 76.0,
      capacity: 6,
      image: "../assets/images/Car-7.png",
    },
    {
      id: 8,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "24 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "26 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      type_id: 2,
      capacity_id: 3,
      price: 112.0,
      capacity: 6,
      image: "../assets/images/Car-8.png",
    },
    {
      id: 9,
      name: "MG ZX Exclusice",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "28 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "29 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 70,
      price: 67.0,
      type_id: 6,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-9.png",
    },
    {
      id: 10,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "3 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "13 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      type_id: 2,
      capacity_id: 3,
      gasoline: 80,
      price: 94.0,
      capacity: 6,
      image: "../assets/images/Car-10.png",
    },
    {
      id: 11,
      name: "MG ZX Excite",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "11 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "21 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 78.0,
      capacity: 6,
      image: "../assets/images/Car-11.png",
    },
    {
      id: 12,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "20 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "21 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 100.0,
      capacity: 6,
      image: "../assets/images/Car-12.png",
    },
    {
      id: 13,
      name: "Koeingsegg",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "mpv",
      type_id: 4,
      capacity_id: 1,
      gasoline: 90,
      price: 90.0,
      capacity: 2,
      image: "../assets/images/Car-1.png",
    },
    {
      id: 14,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      type_id: 1,
      capacity_id: 1,
      price: 80.0,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 15,
      name: "Rolls-Roys",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sedan",
      gasoline: 70,
      price: 99.0,
      type_id: 3,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-3.png",
    },
    {
      id: 16,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      price: 96.0,
      type_id: 1,
      capacity_id: 1,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 17,
      name: "All New Rush",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 70,
      price: 72.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-5.png",
    },
    {
      id: 18,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      price: 74.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-6.png",
    },
    {
      id: 19,
      name: "All New Terios",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "coupe",
      gasoline: 90,
      type_id: 5,
      capacity_id: 3,
      price: 76.0,
      capacity: 6,
      image: "../assets/images/Car-7.png",
    },
    {
      id: 20,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      type_id: 2,
      capacity_id: 3,
      price: 112.0,
      capacity: 6,
      image: "../assets/images/Car-8.png",
    },
    {
      id: 21,
      name: "MG ZX Exclusice",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 70,
      price: 67.0,
      type_id: 6,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-9.png",
    },
    {
      id: 22,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      type_id: 2,
      capacity_id: 3,
      gasoline: 80,
      price: 94.0,
      capacity: 6,
      image: "../assets/images/Car-10.png",
    },
    {
      id: 23,
      name: "MG ZX Excite",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 78.0,
      capacity: 6,
      image: "../assets/images/Car-11.png",
    },
    {
      id: 24,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 100.0,
      capacity: 6,
      image: "../assets/images/Car-12.png",
    },
  ],
  filteredCar: [
    {
      id: 1,
      name: "Koeingsegg",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      type_id: 1,
      capacity_id: 1,
      gasoline: 90,
      price: 90.0,
      capacity: 2,
      image: "../assets/images/Car-1.png",
      image_2: "../assets/images/inside-1.jpeg",
      image_3: "../assets/images/inside-1.jpeg",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "24 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "25 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      type_id: 1,
      capacity_id: 1,
      price: 80.0,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 3,
      name: "Rolls-Roys",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "20 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sedan",
      gasoline: 70,
      price: 99.0,
      type_id: 3,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-3.png",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "11 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "4 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      price: 96.0,
      type_id: 1,
      capacity_id: 1,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 5,
      name: "All New Rush",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "19 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 70,
      price: 72.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-5.png",
    },
    {
      id: 6,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "16 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      price: 74.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-6.png",
    },
    {
      id: 7,
      name: "All New Terios",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "17 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "20 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "coupe",
      gasoline: 90,
      type_id: 5,
      capacity_id: 3,
      price: 76.0,
      capacity: 6,
      image: "../assets/images/Car-7.png",
    },
    {
      id: 8,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "24 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "26 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      type_id: 2,
      capacity_id: 3,
      price: 112.0,
      capacity: 6,
      image: "../assets/images/Car-8.png",
    },
    {
      id: 9,
      name: "MG ZX Exclusice",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "28 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "29 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 70,
      price: 67.0,
      type_id: 6,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-9.png",
    },
    {
      id: 10,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "3 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "13 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      type_id: 2,
      capacity_id: 3,
      gasoline: 80,
      price: 94.0,
      capacity: 6,
      image: "../assets/images/Car-10.png",
    },
    {
      id: 11,
      name: "MG ZX Excite",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "11 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "21 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 78.0,
      capacity: 6,
      image: "../assets/images/Car-11.png",
    },
    {
      id: 12,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "20 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "21 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 100.0,
      capacity: 6,
      image: "../assets/images/Car-12.png",
    },
    {
      id: 13,
      name: "Koeingsegg",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "mpv",
      type_id: 4,
      capacity_id: 1,
      gasoline: 90,
      price: 90.0,
      capacity: 2,
      image: "../assets/images/Car-1.png",
    },
    {
      id: 14,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      type_id: 1,
      capacity_id: 1,
      price: 80.0,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 15,
      name: "Rolls-Roys",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sedan",
      gasoline: 70,
      price: 99.0,
      type_id: 3,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-3.png",
    },
    {
      id: 16,
      name: "Nissan GT-R",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "sport",
      gasoline: 80,
      price: 96.0,
      type_id: 1,
      capacity_id: 1,
      capacity: 2,
      image: "../assets/images/car-2.png",
    },
    {
      id: 17,
      name: "All New Rush",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 70,
      price: 72.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-5.png",
    },
    {
      id: 18,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      price: 74.0,
      type_id: 2,
      capacity_id: 3,
      capacity: 6,
      image: "../assets/images/Car-6.png",
    },
    {
      id: 19,
      name: "All New Terios",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "coupe",
      gasoline: 90,
      type_id: 5,
      capacity_id: 3,
      price: 76.0,
      capacity: 6,
      image: "../assets/images/Car-7.png",
    },
    {
      id: 20,
      name: "CR-V",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      gasoline: 80,
      type_id: 2,
      capacity_id: 3,
      price: 112.0,
      capacity: 6,
      image: "../assets/images/Car-8.png",
    },
    {
      id: 21,
      name: "MG ZX Exclusice",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 70,
      price: 67.0,
      type_id: 6,
      capacity_id: 2,
      capacity: 4,
      image: "../assets/images/Car-9.png",
    },
    {
      id: 22,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "suv",
      type_id: 2,
      capacity_id: 3,
      gasoline: 80,
      price: 94.0,
      capacity: 6,
      image: "../assets/images/Car-10.png",
    },
    {
      id: 23,
      name: "MG ZX Excite",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 78.0,
      capacity: 6,
      image: "../assets/images/Car-11.png",
    },
    {
      id: 24,
      name: "New MG ZS",
      description: [
        {
          name: "Alex Stanton",
          avatar: "../assets/images/avatar1.png",
          createdAt: "21 July 2022",
          text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          avatar: "../assets/images/avatar2.png",
          createdAt: "23 July 2022",
          text: "We are greatly helped by the services of the MORENT Application.Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ],
      carType: "hatchback",
      gasoline: 80,
      type_id: 6,
      capacity_id: 3,
      price: 100.0,
      capacity: 6,
      image: "../assets/images/Car-12.png",
    },
  ],
  typeChecked: [],
  // capacityChecked: [],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    toggleType: (state, action) => {
      const selectedtype = state.type.find((t) => t.id === action.payload.id);
      selectedtype.checked = !selectedtype.checked;
      state.filteredCar = [...state.car];
      if (selectedtype.checked === true) {
        state.typeChecked.push(selectedtype);
        const filtered = state.filteredCar.filter(
          (car) => car.type_id === selectedtype.id
        );
        state.filteredCar = filtered;
      }

      // state.filteredCar = [...state.car];
      // if (selectedtype.checked === true) {
      //   state.checked.push(selectedtype);
      //   const filteredCars = state.filteredCar.filter(
      //     (car) => car.carType === selectedtype.name
      //   );
      //   state.filteredCar = filteredCars;
      // } else if (selectedtype.checked === false) {
      // }
    },
    toggleCapacity: (state, action) => {
      const selectedCapacity = state.capacity.find(
        (c) => c.id === action.payload.id
      );
      selectedCapacity.checked = !selectedCapacity.checked;
      state.filteredCar = [...state.car];
      if (selectedCapacity.checked === true) {
        const filteredCars = state.filteredCar.filter(
          (car) => car.capacity === selectedCapacity.name
        );
        state.filteredCar = filteredCars;
      } else if (selectedCapacity.checked === false) {
      }
    },
    togglePrice: (state, action) => {
      const filteredCar = [...state.car];

      const selectedPrice = filteredCar.find(
        (c) =>
          action.payload.minPrice <= c.price &&
          c.price <= action.payload.maxPrice
      );
      console.log(selectedPrice);
      //state.filteredCar=selectedPrice
    },
    searchTitle: (state, action) => {
      state.filteredCar = [...state.car];
      const value = action.payload.value.trim().toLowerCase();
      const filteredItems = state.filteredCar.filter((c) =>
        c.name.toLowerCase().includes(value)
      );
      state.filteredCar = filteredItems;
    },
    peymentToggle: (state, action) => {
      const selectedPeyment = state.peyment.find(
        (p) => p.id === action.payload.id
      );
      selectedPeyment.checked = !selectedPeyment.checked;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleType,
  togglePrice,
  toggleCapacity,
  searchTitle,
  peymentToggle,
} = carSlice.actions;

export default carSlice.reducer;
