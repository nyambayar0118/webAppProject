Төслийн ажлын бүтэц:

webAppProject/
├── assignment_1/           --> HTML + CSS үндсэн 1-р даалгаврын веб хуудас
├── assignment_2/           --> Вебийг шинээр хийж Javascript, backend-ийг оруулсан хуудас
├── index.html              --> Даалгавруудыг агуулсан фолдер луу чиглүүлэх жижиг хуудас
├── LICENSE                 --> MIT license 
└── README.txt              --> Одоо таны уншиж буй тайлбарыг агуулах текст файл



assignment_1/                
├── css/                    --> Бүх хуудсуудын CSS
|   └── ...                 
├── pictures/               --> HTML хуудсууд дээр ашиглагдсан зураг, элементүүд
|   ├── products/           --> Бүтээгдэхүүнүүдийн зураг
|   |   ├── product1.jpg    --> Жишээ бүтээгдэхүүний зураг №1
|   |   └── ...
|   └── site elements/      --> Агуулгаас бусад элементүүдийн зураг
|       ├── explosion.ico   --> Веб хуудасны tab bar дээрх icon
|       ├── logo1.jpg       --> Веб хуудасны лого №1
|       └── logo2.jpg       --> Веб хуудасны лого №2
├── index.html              --> Үндсэн нүүр хуудас
├── login.html              --> Нэвтэрч орох хуудас
├── product.html            --> Бүтээгдэхүүний дэлгэрэнгүй мэдээлэлтэй хуудас
├── saved.html              --> Хадгалсан барааг жагсааж харуулах хуудас
├── shop.html               --> Дэлгүүрийн дэлгэрэнгүй мэдээлэлтэй хуудас
├── shopsignup.html         --> Дэлгүүр хэрэглэгч бүртгүүлэх хуудас
└── signup.html             --> Энгийн хэрэглэгч бүртгүүлэх хуудас



assignment_2/               -->
├── backend/                --> Backend-ийн код
|   └── ...     
├── documentation/          --> 2-р төслийн тайлбар, бүтцийг тэмдэглэсэн тэмдэглэл
|   ├── component-diagram.png       --> Веб хуудас дээр ашиглагдаж байгаа component-үүдийн диаграмын зураг
|   └── component-diagram.wsd       --> Веб хуудас дээр ашиглагдаж байгаа component-үүдийн диаграмын код
└── frontend/               --> Frontend-ийн код
    ├── pages/              --> Веб хуудсууд
    |   ├── components/     --> Веб хуудсуудын component-үүд
    |   |   └── ...
    |   ├── backupindex.html        --> Conflict үүсч байсан index хуудас
    |   ├── index.html              --> Үндсэн нүүр хуудас
    |   ├── product.html            --> Барааны дэлгэрэнгүй мэдээлэлтэй хуудас
    |   └── test.html               --> Туршилтын нүүр хуудас
    ├── pictures/                   --> HTML хуудсууд дээр ашиглагдсан зураг, элементүүд
    |   ├── products/               --> Бүтээгдэхүүнүүдийн зураг
    |   |   ├── product1.jpg        --> Жишээ бүтээгдэхүүний зураг №1
    |   |   └── ...
    |   └── site elements/          --> Агуулгаас бусад элементүүдийн зураг
    |       ├── button_heart_empty.jpg      --> Хоосон зүрхтэй jpg зураг
    |       ├── button_heart_empty.png      --> Хоосон зүрхтэй png зураг
    |       ├── button_heart_filled.png     --> Будагдсан зүрхтэй png зураг
    |       ├── explosion.ico               --> Веб хуудасны tab bar дээрх icon
    |       ├── logo1.jpg                   --> Веб хуудасны лого №1
    |       └── logo2.jpg                   --> Веб хуудасны лого №2
    └── style/                      --> Бүх хуудсуудын CSS
        └── global.css              --> global.css






Implemented services(database functions written in ./backend/database/functions.txt):

// Fetch functions
getProductsByShopId
getProductById
getShopById

// Verification functions
checkUserName
checkUserPassword

// Main insert functions
insertUser
insertShop
insertProduct
insertComment

// Sub insert functions
insertProductComment
insertShopComment
insertLogin
insertAddress
insertTimeTable
insertSocial
insertPhoneNo
insertImg
insertProductImg