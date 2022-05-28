// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let firstUserFavColor = new Set(["Yellow", "Pink", "White", "Purple"]);
let firstUserEducation = new Set([
    { name: "SD 01", city: "Jakarta", graduate: 2016 },
    { name: "SMP 02", city: "Jakarta", graduate: 2019 },
    { name: "SMA 03", city: "Tanggerang", graduate: 2022 }
]);
let firstUserFavRestaurant = new Set(["Bento", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...firstUserFavColor],
    isHavePet: "Yes",
    education: [...firstUserEducation],
    favoriteRestaurant: [...firstUserFavRestaurant]
};

let secondUserFavColor = new Set(["Blue", "Black", "Grey"]);
let secondUserEducation = new Set([
    { name: "SD 02", city: "Jakarta", graduate: 2010 },
    { name: "SMP 03", city: "Bogor", graduate: 2013 },
    { name: "SMA 01", city: "Surabaya", graduate: 2016 },
    { name: "Universitas Maju", city: "Tanggerang", graduate: 2020 }
]);
let secondUserFavRestaurant = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Eggy"]);

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...secondUserFavColor],
    isHavePet: "No",
    education: [...secondUserEducation],
    favoriteRestaurant: [...secondUserFavRestaurant]
};


// TODO: Masukkan hasil akhir dari kedua user di sini

const users = [];
users.push(firstUser);
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {

    console.log(users.length || users.size);
    // console.log(users);
    console.log(JSON.stringify(users, null, 2));
}

main();

module.exports = {
    users
};