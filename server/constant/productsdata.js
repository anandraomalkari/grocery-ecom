const productsdata = [
    { 
        id: 'product1',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisd483Qw9AugvY8c9zuhMHAi_OGtWU_bTQ5qtrJMH0-J4DJxbR4UPiKhBxI3gA3LFv9v3Gum8rZAMFqHEEbjkvV2U4YtiiVpC6UxSqoM17See8vo_lAxjIZSibWSEuxNQSDyWTrPjRniLJXWgEaJq5a_Apa8uLJvnn9OseSkpu5NXJyGqq9rV4ol_0iz7I/s1600/phoolmakhana.png',
        title: {
            shortTitle: 'Phool Makhana',
            longTitle: 'Phool Makhana'
        },
        price: {
            mrp: 399,
            cost: 300,
            discount: '24.81%'
        },
        description: 'Phool makhana, also known as fox nuts or lotus seeds, are a type of seed that is commonly used in Indian cuisine. They are made from the dried seeds of the lotus flower, and they have a light, nutty flavor and a crunchy texture.',
        quality: 'You can trust'
    },
    { 
        id: 'product2',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLT3PljzHrBs3z2-p35G-NTGGSHN0j_nlVognVb45eya9kbPQYUa7HB6b4kJa6wVFxfVePPM76NbRTIj-ft3vf-aNhZ3shKBPnAJ1kBZTngTN9Lcg3s-jNt8L4PSMSxEPHZg6jd88liTnOdP4Ael6PY3_BKfib51u9a9VDOLYiZiqUzxfoEljmeb48BFCK/s1600/roastedmakhana.png',
        title: {
            shortTitle: 'Roasted Makhana',
            longTitle: 'Roasted Makhana'
        },
        price: {
            mrp: 260,
            cost: 200,
            discount: '23.07%'
        },
        description: 'Roasted makhana, also known as roasted fox nuts, is a delicious and healthy snack that is popular in India and other parts of the world.',
        quality: 'You can trust'
    },
    { 
        id: 'product3',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTfyn278RDCSlkmQ1hcoYBEKTzK1O8_5BYv8TaKzku_KpCgKwkkEEcIpWggByaQuIt035gcL2r01n6QLBtTuxvWZYdguC92nEPP-34t3pDZgseomruDSKlvvVsUFWpF0uqTe1ZqKKXF4iu7Lciabb9hXi4CHcky1DVozMhZDENTaj8sa6KzTYg30-6uVPZ/s1600/makhanapowder.png',
        title: {
            shortTitle: 'Makhana Powder',
            longTitle: 'Makhana Powder'
        },
        price: {
            mrp: 100,
            cost: 100,
            discount: '0%'
        },
        description: 'Makhana powder is a gluten-free, low-calorie flour made from foxnuts, also known as lotus seeds.',
        quality: 'You can trust'
    },


    // Biscut
    { 
        id: 'product4',
        //img: require('../images/nutrichoiceoatscookies.png'), 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_oNuwt_-EeUUwkBQJfU5Op1iykDK2yrS0H_1vubb4aTZ4WETm_VsPTWEFDKLqVeDpxtpKvku98Ags1anSbL9t4DDY7OV8GNCjeFhdKZSzmY1YevAivQJ61p9ZDThzJ-QlyjwOw_AwPOhh9NAfM5v_PuFsSv62gzY2oZ-tO01eJ6ng7kjECrydIUak8QPB/s1600/nutrichoiceoatscookies.png',
        title: {
            shortTitle: 'Cookies Orange Almond',
            longTitle: 'Britannia NutriChoice Oats Cookies Orange Almond, 3x 75 g Multipack'
        },
        price: {
            mrp: 185,
            cost: 135,
            discount: '27%'
        },
        description: 'Britannia NutriChoice Oats Orange Cookies is a unique healthy snack which is a combination of rolled oats, wheat bran and crunchy almonds with an added twist of zesty oranges.',
        quality: 'You can trust'
    },
    { 
        id: 'product5',
        //img: require('../images/jimjambiscuits.png'), 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ1fw0p5yJI6WLrpwLsxfsLqt4Rscx-FiU410zqnb7UoovN5GCLxa9vWDHPKA_bzSoxZ_eM3DCnL_YnnXkOCt4GNanSObuyTvgHUKO5Pxs96f7aQH7ODMXTOjVHK9CuZdvxX4FnTsk9cA9d0t7-EaUQlPOm0VxSaMqpQauENCCGlFqmyByZdgKrzlsB1pg/s1600/jimjambiscuits.png',
        title: {
            shortTitle: 'Jim Jam Biscuits',
            longTitle: 'Britannia Treat - Jim Jam Biscuits'
        },
        price:{
            mrp: 100,
            cost: 69,
            discount: '31%'
        },
        description: 'This double biscuit with its creamy, jammy centre is already a big hit with children. Britannia is a well known brand that produces popular confectionary items and even savoury snacks.',
        quality: 'You can trust'
    },
    { 
        id: 'product6',
        //img: require('../images/parlegggoldbiscuits.png'), 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUtbrg8uZpLriRxj5qLltwmDuW9anwUt_TyM35JbGxmBNWV8eFC1uVp3uOR2UVZ0RDEkF1qtSxS1KKQC0UYS-2p37X5VqO7Q-UCwHi4hAkRbWuJc_VIvVtgralEU4b8iTpVJIrZKMM0pPeZ3-ie1oAlILfGpfqmhpU4UYvttsE6yPA8aHrEcY_ySiTOdc2/s1600/parlegggoldbiscuits.png',
        title: {
            shortTitle: 'Gold Biscuits',
            longTitle: 'Parle G Gold Biscuits'
        },
        price:{
            mrp: 45,
            cost: 35,
            discount: '22.22'
        },
        description: 'Parle G gold is bigger, richer and tastier than the regular parle G. Made from good quality and rich ingredients.',
        quality: 'You can trust'
    },
    { 
        id: 'product7',
        //img: require('../images/mariegoldbiscuit.png'), 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGosk1ygcmcOKt-ywYxXxjeiCBZd_xyQIghfmbOufw0XBGNWZqD_XVZiONmMLebqca0Q6Fp3XgUpilKGlZCH87hEOU-Egn2PQ8y8in9JnoIZrj1GHNiW3HrNdifjoW8MdmMRVUvfdsaVhj92vdxsXQ41FdgifWq_WDpL21xYCNDZn7CLOqFUNJkr-BgejK/s1600/mariegoldbiscuit.png',
        title: {
            shortTitle: 'Marie Gold Biscuit',
            longTitle: 'Britannia Marie Gold Biscuit - Crunchy, Light, Zero Trans Fat, Ready To Eat'
        },
        price: {
            mrp: 120,
            cost: 89,
            discount: '25.83%'
        },
        description: 'Britannia Marie Gold Biscuits are crisp and light biscuits packed with the goodness of vitamins and minerals.', 
        quality: 'You can trust'
    },
    { 
        id: 'product8',
        //img: require('../images/britanniabourbon.png'),
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgG9_3E4j-cXhLLXQrnWeCF78Bzqw7FpXpnEY83m7Qj3STihDgPcZSqejUhSlL0i0OpFHwLCt4UtpuxDtUnP-R-I7qPEu2nzwIDQLxU6XQF0xWMdG3IgmyznMeOea4hWrm3FbatZwsL-HNCadxaC1uMTAruokCXvyYNUcnRAKUWSh85QzcGPJM3KHWJa2YW/s1600/britanniabourbon.png',
        title: {
            shortTitle: 'Britannia Bourbon',
            longTitle: 'Britannia Bourbon - The Original Choco Creme Sandwich Biscuit'
        },
        price:{
            mrp: 75,
            cost: 59,
            discount: '21.33%'
        },
        description: 'Britannia Bourbon - The Original Choco Creme sandwich biscuits are a delightful combination of smooth choco creme and crunchy choco biscuits topped with sparkling sugar crystals.',
        quality: 'You can trust'
    },
    { 
        id: 'product9',
        //img: require('../images/darkfantasybourbon.png'),
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOq9kBEBmB4Bt1WytqiH8RMzJzieqLCV5WPufdXzs0PDKEkdtNkqcGIGHXv9ycF2T73pAEHLntUrRaw_uZwb7rDwwpcXn5qFgj5gub4mcvISf6W22Vtdpp6PMOt-Rwkzvm2TOq5mqYbp6CS98bp4K-N22P9Njkg8M3yuiU2OBZ8OdwlZG0oZbFDkdyZo3u/s1600/darkfantasybourbon.png',
        title: {
            shortTitle: 'Dark Fantasy Bourbon Classic Biscuit',
            longTitle: 'Sunfeast Dark Fantasy Bourbon Classic Biscuit Made With Real Chocolate'
        },
        price: {
            mrp: 100,
            cost: 79,
            discount: '21%'
        },
        description: 'Devour this rich chocolate biscuit whenever you crave something yummy. Savour the delightful combination of smooth choco creme and crunchy choco-biscuits.',
        quality: 'You can trust'
    },


    // Chocolate
    { 
        id: 'product10',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg91MfGs8W83Ho16TYGCaElavPBZpAzkJBNfPHrXMOQXhN8-jJlrWgV7SIwMwVR7aQlapI2toO8dnEX14efGaWaHSWGR9Xola95oKEwJadv0ev8ZfMrG7UiGv_MkIjbcA6j7svAn2qODo7xmZu_OVGmXy27VUw8LzM5G4jZZRdhci8wTPBl5O4b_jxJioDg/s1600/dairymilk.png',
        title: {
            shortTitle: 'Dairy Milk',
            longTitle: 'Dairy Milk'
        },
        price: {
            mrp: 50,
            cost: 50,
            discount: '0%'
        },
        description: 'The Whole Truth has taken your classic favourite and turned it into a gourmet experience. This dark chocolate is good enough to bring to the table and better than other dark chocolates.',
        quality: 'You can trust'
    },
    { 
        id: 'product11',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0Vq4zAP1ONsNiXCIHaROdfHLrcWqfKD3wvh0ifY2nIBvM-HlNXTbtyiT_gnNhPuxbleA1dTHM-5VrW_yj23o8juvB5_lpDcGnvexrfFo6kx28fQqMqEPQ-uFJGAClUm7y00VfT-CJyR3yHXllyCovjrwc7sXz_NxYwdyGWwcAxMnypnC4vNxM5wJzn2_K/s1600/kitkat.png',
        title: {
            shortTitle: 'Nestle Kitkat',
            longTitle: 'Nestle Kitkat - Coated Wafer Bar, Share Bag'
        },
        price: {
            mrp: 20,
            cost: 20,
            discount: '0%'
        },
        description: 'Nestle KitKat share bag contains 8 individually wrapped KitKat 2 Finger bars and is perfect for stocking up or passing around with friends and family.',
        quality: 'You can trust'
    },
    { 
        id: 'product12',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvBD_riFTYohkAQ6kh8mGGBjaPb14gLJcVEXgeTA1jUnMyVVW5T9ZCXm6ifmKTKrUkyadaOHoR6pQ0nevbDXeoqDXsnBqj9kQwp7NZErmDZX5TJKeuZAJJsQhyX4YhH6wtvl3g19w_Co4_W7cpUydk9tTzkCFzol2QAm5OfYMVE8qgfaJEk0CqPIsWPR5J/s1600/pulse.png',
        title: {
            shortTitle: 'Pulse',
            longTitle: 'Pulse'
        },
        price: {
            mrp: 10,
            cost: 10,
            discount: '0%'
        },
        description: 'Pulse chocolate is a hard-boiled candy with a tangy powder filling. It is a popular candy in India, and is manufactured by the DS Group.',
        quality: 'You can trust'
    },
    { 
        id: 'product13',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG15Dk9YmUk5etFCYvkQAR2XVKfn7t-dTVFK_fUU1ckid0zK3rdRv7gJmGYYYmTp-cLj_7reg7_B2E4mqU49aCnStN8u6pWtVOb9Uzi2e2YxUWEwaXXe1FK3owfG8Q4B_N3o82KrotIN3Is5LfXLVpWoar56bNoi-ZQekvgJm4eYwLsueJryXdu1Zknasa/s1600/kopikochocolate.png',
        title: {
            shortTitle: 'Kopiko Chocolate',
            longTitle: 'Kopiko Chocolate',
        },
        price: {
            mrp: 10,
            cost: 10,
            discount: '0%'
        },
        description: 'Kopiko chocolate is a coffee-flavored candy made by Mayora Indah, an Indonesian food and beverage company.',
        quality: 'You can trust'
    },
    { 
        id: 'product14',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh18czuts9t0Qe5GMUZOvuhjvGyLPgLPa877sTJnE69YJMYmD_vgFVvN5Sakpz8wjv080_en3b0Uckq5Z1UkJjZ4Xp5U8izag9zNYxKuq_y2EeF1pXoH221PLbSKQOPW2_0eDpHFHWWIhIKwXw8JNMY9nHkP29Xgx61PgWRBaEIm6NJFKowyOFb29VrdWkk/s1600/fivestar.png',
        title: {
            shortTitle: '5 Star Chocolate',
            longTitle: 'Cadbury 5 Star Chocolate Home Treats Bar'
        },
        price: {
            mrp: 10,
            cost: 10,
            discount: '0%'
        },
        description: 'Cadbury 5 Star – do nothing but munch on this delicious chocolate bar. Indulge in Five Star chocolate, smooth textured caramel chocolate.',
        quality: 'You can trust'
    },


    // Dry Fruits
    { 
        id: 'product15',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUuEkEctDbKYqQgCvGpod-BtpjW8zTHlu2SLA5OruFn_yCGm5xkLcMdsBxS1844ELDaVHfpLH_0js_CoPV0QW_RAGF5Hn4vlbaicwUYxWyEzLWSljoZQy6hXbgCHO4MO9WHfTo-MCfVyyNsprHCS_3Kx12JL0A3X2ItO688GqJOF0XfEAKgwj3FvOrcOox/s1600/walnut_akhrot_kernels.png',
        title: {
            shortTitle: 'Walnut/Akhrot-kernels',
            longTitle: 'Walnut/Akhrot-kernels'
        },
        price:{
            mrp: 200,
            cost: 200,
            discount: '0%'
        },
        description: 'Walnut Kernels not only add crunch and taste to a dish but they are loaded with nutritional benefits too.',
        quality: 'You can trust'
    },
    { 
        id: 'product16',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh-kQlS55L4xEOaulZrYsZ6zlOzridoIuVs6f9FD-DW-1pWxTDFrLepSLt_RWjwqFdsorRYAVQZhZVFPGiDkvAfxUplaujRde_I_EKf1JhUrIYktHSTc0mUcDIFM_sUrOZf4QZU-otuyr95AlykMfIZG17_GEPw6pA04ycfW0FfHjsoLwo8teLwqPowUnu/s1600/cashew.png',
        title: {
            shortTitle: 'Raisin',
            longTitle: 'Raisin'
        },
        price: {
            mrp: 90,
            cost: 85,
            discount: '5.56%'
        },
        description: 'Raisins or kismis are a wholesome addition to your diet. The organic kismis are a preserved and dried version of grapes.',
        quality: 'You can trust'
    },
    { 
        id: 'product17',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh-kQlS55L4xEOaulZrYsZ6zlOzridoIuVs6f9FD-DW-1pWxTDFrLepSLt_RWjwqFdsorRYAVQZhZVFPGiDkvAfxUplaujRde_I_EKf1JhUrIYktHSTc0mUcDIFM_sUrOZf4QZU-otuyr95AlykMfIZG17_GEPw6pA04ycfW0FfHjsoLwo8teLwqPowUnu/s1600/cashew.png',
        title: {
            shortTitle: 'Cashew',
            longTitle: 'Cashew'
        },
        price: {
            mrp: 550,
            cost: 500,
            discount: '9.09%'
        },
        description: 'Whole kaju or cashew from the house of bb Popular are absolutely delicious and crunchy; this popular snack is loaded with nutritional values.',
        quality: 'You can trust'
    },
    {
        id: 'product18',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEAZ0tX292DrIh2OpZR5JmOGULJ6fIccYggWm4ZDuKcjiUqZh1mzQSy542ZbJOgyQEI30aUbTb0iPJqUoa8u8-Cchyi9kkR4MQzpIRI81pIE4s-u9EJKdqatKb88jpwQCnGgv7T6aTvSG23J3DJi2zNb-m_Rz06BYaEUgozgmHu5Y4QXxVQqGhmpZee_o9/s1600/tastyiranianpistachios.png',
        title: {
            shortTitle: 'Tasty Iranian Pistachios',
            longTitle: 'Tasty Iranian Pistachios'
        },
        price:{
            mrp: 150,
            cost: 150,
            discount: '0%'
        },
        description: 'Iranian pistachios are known for their world-renowned flavor and quality.',
        quality: 'You can trust'
    },
    { 
        id: 'product19',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo_3raRRmydUXzLVUUc54CudZpOWvMWmm0zqu_bWgYwZVGt4AudAKSD_aPNqbycaOPE-H8QID6N18kqSPHX_l54k4pETCHPvZi9TsyySFtnEcX3QzENRGF_nojNKokAc107zZCMg1MkFVkqocFMHe8jd8LJaTL8pRpM_zPjCt-khy3iEIqwsM7J72TT4sI/s1600/anjeer.png',
        title: {
            shortTitle: 'Anjeer',
            longTitle: 'Anjeer'
        },
        price:{
            mrp: 400,
            cost: 350,
            discount: '12.50%'
        },
        description: 'Anjeer, also known as figs, is a dry fruit that belongs to the Mulberry family.',
        quality: 'You can trust'
    },
    {
        id: 'product20',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS1YO2j318CrnFcPyOBcArX1Hr89ZQHl-5cAqfn2P4zZwJtOi8gsaw-9pKGUAGRmHSpyXg5wDAIN-7ilQ4Hn2rPzMD7qC45B5UEmnHNC8dxvP3fPNn-24grtm1yk2uUDbf05XPtcBJesIVVXwidQllIxIL6P_PdNTeDsU8feripChZQfPY8OOHoAiLliWs/s1600/dates.png',
        title: {
            shortTitle: 'Dates',
            longTitle: 'Dates'
        },
        price: {
            mrp: 70,
            cost: 60,
            discount: '14.29%'
        },
        description: 'Dates are a tropical fruit that grow in clusters on date palm trees.',
        quality: 'You can trust'
    },
    {
        id: 'product21',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt0OdI2L-C1dxBsNrmDTAW6PvbpmCNfHpQ5ASx-dIFKSBUZ-z3fqb0U3CqrKc5RWnhyVPB8pfLL8_WEMos4XCtcd7DN3vN8YcItnepxIYFsHRMq7W5oaUeML6EfwWVojAtvgKJAHtAKhxXLfInu2VGVSiucgnJ3VEKmMS-in36avXwj3eqs63WF7IuiL9U/s1600/walnut.png',
        title: {
            shortTitle: 'Walnut',
            longTitle: 'Walnut'
        },
        price: {
            mrp: 80,
            cost: 70,
            discount: '12.5%'
        },
        description: 'The walnut tree produces edible nuts with hard shells and soft kernels.',
        quality: 'You can trust'
    },
    {
        id: 'product22',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1hmS54hZRnEC_wrCJUZAwAIC2I-dkjkUxllAGn98bdH5VUpLUAKKWkeXOUObEASqlA7smbiHTj9Bno6nTiM6x3AoYcN-Z89StrFigGq5Z79Ye17xeHFElM_odUL1nPQjuom9E0HT609h-EKeI4erNeoeOBjaFqvUZDBHjMtilHQRz4C5ev2VnR9Jz3qNp/s1600/almond.png',
        title: {
            shortTitle: 'Almond',
            longTitle: 'Almond'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Almonds are a nut of the aloe vera genus, commonly used in baking and cooking.',
        quality: 'You can trust'
    },
    {
        id: 'product23',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvxLWTdzhTitgVqvzGQ6ooS3SRzCUpYQc1DcEeCw-Qb-Sq98V2z6wHf-WPRvvWF7a0Ax2Quoa0tcJ20ezY5QHKzllFqGMa0dX2CjoQhm2wHP4qaJfItkRiSM95nWNlUc723owebiWu3GDEuxO_R4JaJMthgjuLUSvL_O7RT-pVsYXT8TnDrsVZ1FozbGfw/s1600/blackraisins.png',
        title: {
            shortTitle: 'Black Raisins',
            longTitle: 'Black Raisins'
        },
        price:{
            mrp: 30,
            cost: 25,
            discount: '16.6%'
        },
        description: 'Black raisins are dried dark grapes that are sweet and juicy. They are also known as kali kismis or kali kishmish.',
        quality: 'You can trust'
    },
    {
        id: 'product24',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtPUcSLBDEhu9QoCri7n0S9S5_87mWm89aPOywJKwcYQSVElmzBA8xFxlyRK8bkVdQiFsZLjdvEg6vnIxy2tCUdCf2GSYZdXh42MUpsYzU8ksol-8tdJ-T-HZe2QMPpC4xFLm5CacuWwkn7dWgNoimZ8hve2Nw8YcT1EqhS6cmHw2JWRFgdIGLlyxlPc3K/s1600/blackcurrantblueberry.png',
        title:{
            shortTitle: 'Black currant BlueBerry',
            longTitle: 'Black currant BlueBerry'
        },
        price: {
            mrp: 100,
            cost: 60,
            discount: '40%'
        },
        description: 'Black currants can be eaten within a few days of harvesting, or frozen, raw or cooked, or made into preserves.',
        quality: 'You can trust'
    },


    // Flour
    {
        id: 'product25',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNPez9BIH24tjjAUUh3oobEYOfc4DNi-4IB7-Ya7WlNxFuwnm3Xrqayaml3BiTYd-jxX322viEQtldS2UvzcyJ_Ez086FcyPREUINh2CEvfYhqk1R0_Qj4V1ZSSQCApdDZWf1xUfExuMEo3nuEfmMJZcEf7yzvpx4dN99zOGDMaKjeApMsODll3JHKuRIT/s1600/fortuneflours.png',
        title: {
            shortTitle: 'Fortune Flour',
            longTitle: 'Fortune Flour'
        },
        price:{
            mrp: 100,
            cost: 85,
            discount: '15%'
        },
        description: 'Fortune Flour is made from 100% whole wheat and is stone-ground to preserve its nutrients and flavor.',
        quality: 'You can trust'
    },
    {
        id: 'product26',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiouv9LpiNTOUgXoMHcw9yCnZQ1KIyMDmVodP58mev8aAiHgcwTtRVoI9ybPU4udYfT8FjKttr4eivvADhk48Ro1ViRuBpTCf8NYMkczUpsgovqffgyU5ta96hM8S_V_DuhvGjeNFrRbF6v3PgO1-7dtlfuhIlc1xRyiK5PuZL_h6Ny5f5gpJHYvFV3DeLF/s1600/aashirvaadflours.png',
        title:{
            shortTitle:'Aashirvad Flour',
            longTitle:'Aashirvad Flour'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Aashirvaad flour is made from 100% whole wheat grains and is ground using a traditional chakki-like grinding process.',
        quality: 'Best Quality'
    },
    {
        id: 'product27',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_87YYb57mHBv4RbKuwiqicAdMZgG9D9k43kv83ZwL4-Whf2VD1zFWEF2xYVEPBOsg73LtYFJCXRmpvRDFpQ0LMNlAuXnpZFuAxz9PGfpT8mmaxqY29WH35p6BbBxRQhUFtzPLwI0qC91KqszpugKkZyJBW05kFlX5cHfSn8of82fWlBmT4Jd8O4iv8RDw/s1600/sampoornachakkiatta.png',
        title:{
            shortTitle: 'Sampoorna Chakki Atta',
            longTitle: 'Sampoorna Chakki Atta'
        },
        price:{
            mrp: 100,
            cost: 75,
            discount: '25%'
        },
        description: 'Sampoorna Chakki Atta is a type of whole wheat flour that is made using a traditional stone mill. This process preserves the nutrients and flavor of the wheat, making it a healthier and more flavorful option than refined flour.',
        quality: 'Best Quality'
    },


    // Oil and Ghee
    { 
        id: 'product28',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3iXZ2FMqU986-oWxGtzcIcKXy4sXcxWbAZCUsv8RE2gfHUNvo3ULyWLoIFBiRrF9RhZxWaP2HpMt_7zIalrCT3s7ysIOWohpxTxNszQO5DURkA4_VqufsX2dAvqsmGKWCvclsnPtsZ3W-Jlu5DPzimPfkbEjVLZOL558tdYbkWWPknUmZkeh_UUYSxdhE/s1600/fortune.png',
        title: {
            shortTitle: 'Fortune Sun Lite',
            longTitle: 'Fortune Sun Lite'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Fortune Sun Lite is a refined sunflower oil that is known for being light, healthy, and easy to digest. It is rich in vitamins, including vitamin E, which is good for the skin and immune system.',
        quality: 'You can trust'
    },
    { 
        id: 'product29',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkULf_CsHBrXlIkvK9Di02RKDode6UN1mSfeM12PAFNH1fo3PSHG0JP_urjuCgruJ0PiT2RW_raPJpcnCM3uPWEodKR8PY4PvzRbg8o_CO95IVake3cTsWEUJ50sSp77_V7E6_ceh-fHXWYyXsTf9ZmpdlEwne3rj3gGMweXpFSbJ41FHYiN0HoS_HIOHa/s1600/saffola.png',
        title: {
            shortTitle: 'saffola gold oil',
            longTitle: 'saffola gold oil'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Saffola Gold is a blended edible cooking oil made with 80% refined rice bran oil and 20% refined sunflower seed oil. It is a healthy cooking oil that is good for the heart. ',
        quality: 'You can trust'
    },
    { 
        id: 'product30',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNf35cQg_dTvKEkInh5q5py0yJU_QxfyD9gYlxhnYxst5HpmfNJ3KmeZoktIrNv0JUYCn5LWB_kxXQLHLxF4rcARByuDY1mdROfqsNznLR7Yx83Fm0VOisbf5TPsHVToCFsVMqgtdMzt3KHJWJdq5XtvHzS_YvELUPp2nXjA0IX__uDT9wi95TYxcGr-YE/s1600/ruchigold.png',
        title: {
            shortTitle: 'RUCHI Gold Palmolein Oil',
            longTitle: 'RUCHI Gold Palmolein Oil'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'RUCHI Gold Palmolein Oil is a popular cooking oil in India. It is made from the mesocarp (fleshy part) of the oil palm fruit.',
        quality: 'You can trust'
    },
    {
        id: 'product31',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUPalELtweTulSyrD9Zj7nRvbYKCX0DoAezeUe0yxXnwAz-EgucSNm-PWSnEG_7Qsw3__vhny0SksUw7LDlbSrU3P8jumkG9fHO7g-4YkWjzFWN1jZ0lIVA1PaYrPKc9Cmnq6t0YjYpgiu3cNmSSY0j53YPl71TYDxlcvuID4Og27eGnSPHq7L0-vw_NrD/s1600/gemini.png',
        title: {
            shortTitle: 'Gemini',
            longTitle: 'Gemini'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Gemini Sunflower Refined oil assists in arranging healthy food and retains its brightness for longer time.',
        quality: 'You can trust'
    },
    { 
        id: 'product32',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDk2VMzNON2deK2_TZO5aDmBugE9ObFOhr1jUhXJhFsIsjUd6n7OcHocWlxbD5JCkdgUI3LX89-YFUsn3FSmk16sHlt0tmHKJwLZR3w0f2hvRs3uPQclyiBfIApRB5LXdD6wB7nLuLQX6I4Su-HSt0s8utlqky3r3KBJrOckLy77Gw7ngLExoCdALqQyR5/s1600/britanniacowhee.png',
        title: {
            shortTitle: 'Britannia Cow Ghee',
            longTitle: 'Britannia Cow Ghee'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Britannia Ghee has loads of freshness purity and aroma which are retained even when not refrigerated for a year.',
        quality: 'You can trust'
    },
    {
        id: 'product33',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhSeGFTpoHGCHzT_0qYBIdHLCMtJL7L12KK5177fLTNxEmDe03tU3QkrilZpjlN1hWCL8Zo93fhSC35ijMMd4wa1U4fVHw9zfebqTKd8wcBm9R1UG9Ru7yEN_sZ6FfMjBauUbGlkwoj_AgwKV25tFhOObSDCm2irk8yftlizAR4XCBdXyvOrRGYeTOJVXZ/s1600/gitsghee.png',
        title: {
            shortTitle: 'Gits Ghee',
            longTitle: 'Gits Ghee'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'The Gits pure cow ghee is made from the purest of milk, collected from reliable dairy farms in India and delivered straight into your home for a lovely meal with family and friends.',
        quality: 'You can trust'
    },
    {
        id: 'product34',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkCeEs9fgkB-EjZnvFUCO4dvMhio-bQo9Y7Ucz7zLhgTNObwXVAkhCTpRPTOnvXoJQ7TR0fOCVcobrOBqULkb6TWfxiQgQ1kgZovMyWXGeN3kzq6xmDhyphenhyphenFxS6t-Txk7IAbc50Wfe8HVDZFyz5aWZOGxT7MXq3l16hjzGcC815ZQatl2y1YeS_L4UEBcdzq/s1600/madhusudanghee.png',
        title: {
            shortTitle: 'Madhusudan Ghee',
            longTitle: 'Madhusudan Ghee'
        },
        price:{
            mrp: 100,
            cost: 90,
            discount: '10%'
        },
        description: 'Madhusudan Desi Ghee is a popular brand of ghee in India. It is made from pure and fresh buffalo cream and is known for its rich flavor and aroma.',
        quality: 'You can trust'
    },


    //soapanddetergent
    {
        id: 'product35',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK3BhrD3VfK2UxomLeDjbBIHOsMi6hfD2mYgEFCmmoaoh4PZ5fTXLyzIhFyEzJxyZrYXebxnElB_R0OrwfoCC7FUnNB_Brh3l5QzOjmqGE8vGKsBDxDCttE7etizhcqbHrABnVUNtDxQe2rp43BfXLKjzjwMWjGikvoybiWEPbUHIwAzKbmAZzhMHX1rLg/s1600/rin.png',
        title:{
            shortTitle: 'Rin Detergent Bar',
            longTitle: 'Rin Detergent Bar'
        },
        price:{
            mrp: 50,
            cost: 50,
            discount: '0%'
        },
        description: 'The Rin detergent bar is a convenient, easy-to-use cleaning solution that can be used in water.',
        quality: 'You can trust'
    },
    {
        id: 'product36',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWSVsZDWfqkrifvAz_M5uapQV2MUjEh9iOXY6GdDDyJ12ViExYTJjiWjydMifR0DThh6PfH5lNBAKjqNVxvx_oCtJhCKB5Dx4KP8nK2n5M5Y1b80feNH_DQ8ELTc8258O5rVT4OBU-oCEK2d1MzcgIdOIE_Q7fBr1sYbSPKDGCs-nznBQkcQZN3m3FUYix/s1600/surfexcel.png',
        title:{
            shortTitle: 'Surf Excel',
            longTitle: 'Surf Excel'
        },
        price:{
            mrp: 50,
            cost: 50,
            discount: '0%'
        },
        description: 'Surf Excel is available in a variety of formats, including powder, liquid, and detergent bars. It is also available for both hand washing and machine washing.',
        quality: 'You can trust'
    },
    {
        id: 'product37',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivRlfFOPOl2UNHzvZ3VZz5sAnYBTRkrTrlscc_jb9YAkE0qK571PA5Ek0RsYtIaeh6c0qzeGHvk-jGVLi3mMEyLxRSXIISiJiaxPBNWvoG08aLDeYkaRDUdZlyIwIaU1dB1G_-UgvrcwAvO5xlA_ToNG6QJrC1JuhvCydq3qoQ9vTxoJnU1xM9Nrnzni8l/s1600/ghadi.png',
        title:{
            shortTitle: 'Ghadi Detergent Cake',
            longTitle: 'Ghadi Detergent Cake'
        },
        price:{
            mrp: 50,
            cost: 50,
            discount: '0%'
        },
        description: 'Ghadi Detergent Cake is a popular detergent cake in India that has been trusted by households for decades.',
        quality: 'You can trust'
    },
    {
        id: 'product38',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrZETKyPcpl6E7Q0Cbna_HBuXkx9vME2XR72mTdts0eSU3Y5itYLWVupXP2ysf9bILt-8X9LKRhkprzPdbSyE5Y28wcEZd4ig6mZCG6g3dERO6dHofBeQG-WQdbtnsg7yqgT0OIGY0LaUXt5GzgNSRs2J5mrAboEUxOwlCGU7mCay-3NOBA0_1xbtaTBQ3/s1600/tideblue.png',
        title:{
            shortTitle: 'Tide Blue Detergent Bar Soap',
            longTitle: 'Tide Blue Detergent Bar Soap'
        },
        price:{
            mrp: 50,
            cost: 50,
            discount: '0%'
        },
        description: 'Tide Blue Detergent Bar Soap is a phosphate-free laundry bar that is specially designed to remove dirt and stains from white and bright clothes.',
        quality: 'You can trust'
    },


    // tea

    { 
        id: 'product39',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVjCZ1j9nDXhKJmXe40-WDIJDSb3vy80FWuhd-1YyJOVj8w7HpCTCA4xsllrS6FGFUuK8JaClWs1C9DU9aOuYg-GPPrDCDc4QyWftNegQfI1Pzhr99D4YR_VK-wbkd257kMSSdoYeNmV5zuw6OPnBsbkSLS0ZVxBOCbGnZUT_4BSX_aBeeze6gdcrbX6hK/s1600/redlabeltea.png',
        title: {
            shortTitle: 'Red Label Tea',
            longTitle: 'Red Label Tea'
        },
        price:{
            mrp: 600,
            cost: 530,
            discount: '11.66%'
        },
        description: "Red Label Tea is one of India's largest selling packaged tea brands. It is a blend of CTC tea, which stands for Cut, Tear, Curl.",
        quality: 'You can trust'
    },
    { 
        id: 'product40',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpehlvbyBYs7dav6ylhKPP_rBbOqZt2jWMMbRGGl08aQs79H0O2ninjjmkcbgq3ll3H_crvncmPvuwD8JqrPPLZ3aW8SoJdqvkVNSKzzjYCB5FGorIIu91KiG6hJpYkxJcjaC57o-nso_w5y-I3Upa0w3C8zghdqgv_IljO0jxoYKDljnHbIL_Zlt-1ayA/s1600/tatateagold.png',
        title: {
            shortTitle: 'Tata Tea Gold',
            longTitle: 'Tata Tea Gold'
        },
        price:{
            mrp: 600,
            cost: 530,
            discount: '11.66%'
        },
        description: 'Tata Tea Gold is a popular choice for chai, a traditional Indian tea beverage made with milk and sugar.',
        quality: 'You can trust'
    },
    { 
        id: 'product41',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy6bRXgMDeXibS-OeYSIKZhWBF12845b3g_woR5AtICYrae-KHzprH9tL_zcYaPbJ8j2oeiMgUULgblAi4XYNutQPgZRCmLA2A_f-U0UeDNxmkmO1pVOG2C_fZxfWZGriXzhOCBkv-TYM9DohlMDqOxBHaLh8NBeHKDY8ULUnTOvarTAVEhHlBF4hzzRpB/s1600/tajmahaltea.png',
        title: {
            shortTitle: 'Taj Mahal Tea',
            longTitle: 'Taj Mahal Tea'
        },
        price:{
            mrp: 600,
            cost: 530,
            discount: '11.66%'
        },
        description: 'RUCHI Gold Palmolein Oil is a popular cooking oil in India. It is made from the mesocarp (fleshy part) of the oil palm fruit.',
        quality: 'You can trust'
    },
    {
        id: 'product42',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh44_bIfq8CBSAvYOB0cq_VSd1elZLVT6Cy2XnqDv-jI3zHAg_LLDgZC309RHZLGqR9cf1WuAEVnOWivDVi2qH7YbcjEXBYgIQxfC-3lL7mV1sv0UxYYBQV1mFWBjVBU0-wprC53Z6iGFEI784qtBBngFCQvxv4WPF30DxD7f2EMzBZzjIcc2tTYlGnJR-l/s1600/waghbakrispicedtea.png',
        title: {
            shortTitle: 'Wagh Bakri Spiced Tea',
            longTitle: 'Wagh Bakri Spiced Tea'
        },
        price:{
            mrp: 600,
            cost: 530,
            discount: '11.66%'
        },
        description: 'Wagh Bakri Spiced Tea is a perfect embodiment of this tradition, combining the rich flavor of Wagh Bakri tea with the warming and invigorating qualities of Indian spices.',
        quality: 'You can trust'
    },
    { 
        id: 'product43',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4Eajy4Kge84wOppclsqTmJDYekuxP-WZiFrp5fOMFYw0tHRfBlLIAQMvv5WYLWQ3HlI5THLrghoyu1TcJg8jb4wOOnWmyBLK2kvDnikBTJ4J1BfLxmx12KVcg6wdPYR_LnM7KZdEEE5A9HuB-EdDMF-e06d7PlxRMh4yWFJx0YqpHWEIdnMUuyDRS-Zdk/s1600/daburvedictea.png',
        title: {
            shortTitle: 'Dabur Vedic Tea',
            longTitle: 'Dabur Vedic Tea'
        },
        price:{
            mrp: 600,
            cost: 530,
            discount: '11.66%'
        },
        description: 'Dabur Vedic Tea is blended with Ayurvedic herbs such as Tulsi, Ginger, Cardamom, Black Pepper, and Cinnamon, which have traditionally been used to boost immunity, relieve stress, and improve digestion.',
        quality: 'You can trust'
    }
]

module.exports = productsdata;
