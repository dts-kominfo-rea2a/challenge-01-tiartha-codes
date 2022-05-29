// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let favColor = ["Yellow", "Pink", "White", "Purple", "Blue", "Black", "Grey" ];
let favRestaurant = ["Pancake", "Padang", "Tteok", "Tempura", "Bento", "Sushi", "Katsu", "Geprek", "Eggy"];
let firstUserEducation = new Set([
    { name: "SD 01", city: "Jakarta", graduate: 2016 },
    { name: "SMP 02", city: "Jakarta", graduate: 2019 },
    { name: "SMA 03", city: "Tanggerang", graduate: 2022 }
]);
let secondUserEducation = new Set([
    { name: "SD 02", city: "Jakarta", graduate: 2010 },
    { name: "SMP 03", city: "Bogor", graduate: 2013 },
    { name: "SMA 01", city: "Surabaya", graduate: 2016 },
    { name: "Universitas Maju", city: "Tanggerang", graduate: 2020 }
]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [favColor[0], favColor[1], favColor[2], favColor[3]],
    isHavePet: "Yes",
    education: [...firstUserEducation],
    favoriteRestaurant: [favRestaurant[4], favRestaurant[5], favRestaurant[0], favRestaurant[8], favRestaurant[3], favRestaurant[1], favRestaurant[2]]
};
//["Pancake", "Padang", "Tteok", "Tempura", "Bento", "Sushi", "Katsu", "Geprek", "Eggy"]
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [favColor[4], favColor[5], favColor[6]],
    isHavePet: "No",
    education: [...secondUserEducation],
    favoriteRestaurant: [favRestaurant[3], favRestaurant[4], favRestaurant[5], favRestaurant[0], favRestaurant[1], favRestaurant[6], favRestaurant[7], favRestaurant[8]]
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