/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 70003
 Source Host           : localhost:27017
 Source Schema         : lagou-admin

 Target Server Type    : MongoDB
 Target Server Version : 70003
 File Encoding         : 65001

 Date: 21/01/2024 12:45:23
*/


// ----------------------------
// Collection structure for kittens
// ----------------------------
db.getCollection("kittens").drop();
db.createCollection("kittens");

// ----------------------------
// Documents of kittens
// ----------------------------
db.getCollection("kittens").insert([ {
    _id: ObjectId("6576fda3d06f422ffd29de2f"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("6576fdd7f3fa858ebc621fca"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("6576fddd8938e7880bb1db96"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("6576ff2491bcadf07c13106b"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657700f8d81137d6affbd81a"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657701069cfc5f1d638b2f96"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("6577013588295eb5802e486f"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657701b37e344ba60bc3b26d"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657701b89bd478475b8dc062"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("65770246ef5fad205db936ff"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702b16908a75eea6b9d89"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702b88bf81249e919d114"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702bd97507a9e35605fae"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702c1ca598baa421d927d"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702cf4e30fc55709f139e"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702d4518fe738478a0517"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702d6be25e8743ec7ff43"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702dae36d10ff35624026"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702dcef3b962766326db0"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702e0e2ceb02a343c7c66"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702e4ab2b3d9459cc5f23"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702f5eee3853c03a858a3"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702f9d38f7d7b1334fbdc"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657702fcbd97ba7d65b9a66c"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657703041d4d3e8f7a155d90"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657703080171f1324c472ad6"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);
db.getCollection("kittens").insert([ {
    _id: ObjectId("657703094084013f405d002a"),
    name: "Felyne",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for positions
// ----------------------------
db.getCollection("positions").drop();
db.createCollection("positions");

// ----------------------------
// Documents of positions
// ----------------------------
db.getCollection("positions").insert([ {
    _id: ObjectId("658edf7c592599e4770c956b"),
    companyLogo: "companyLogo-1703862140609.jpeg",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:02",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658edf97592599e4770c957f"),
    companyLogo: "companyLogo-1703862167860.jpeg",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:02",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658edfe1592599e4770c9582"),
    companyLogo: "companyLogo-1703862241261.jpeg",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:04",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee006592599e4770c9587"),
    companyLogo: "companyLogo-1703862278104.png",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:04",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee032592599e4770c958a"),
    companyLogo: "companyLogo-1703862322918.png",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:05",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee080592599e4770c958e"),
    companyLogo: "companyLogo-1703862400185.jpeg",
    companyName: "武汉公司",
    positionName: "前端",
    city: "",
    createTime: "2023年12月29日 23:06",
    salary: "",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee0c5592599e4770c9593"),
    companyLogo: "companyLogo-1703862469965.jpeg",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:07",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee0e5592599e4770c9597"),
    companyLogo: "companyLogo-1703862501591.jpeg",
    companyName: "武汉公司",
    positionName: "",
    city: "武汉",
    createTime: "2023年12月29日 23:08",
    salary: "",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee6bb481f6667dc0f3816"),
    companyLogo: "companyLogo-1703863995143.png",
    companyName: "武汉公司",
    positionName: "前端",
    city: "武汉",
    createTime: "2023年12月29日 23:33",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee6ea481f6667dc0f3819"),
    companyLogo: "companyLogo-1703864042655.png",
    companyName: "武汉公司",
    positionName: "前端",
    city: "",
    createTime: "2023年12月29日 23:34",
    salary: "13k",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee6ff481f6667dc0f381c"),
    companyLogo: "companyLogo-1703864063967.png",
    companyName: "12",
    positionName: "1212",
    city: "121",
    createTime: "2023年12月29日 23:34",
    salary: "21",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee715481f6667dc0f3820"),
    companyLogo: "companyLogo-1703864085382.jpeg",
    companyName: "122",
    positionName: "1212",
    city: "1212",
    createTime: "2023年12月29日 23:34",
    salary: "21",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee7de481f6667dc0f3824"),
    companyLogo: "companyLogo-1703864286005.jpeg",
    companyName: "的气味",
    positionName: "wq",
    city: "sqw",
    createTime: "2023年12月29日 23:38",
    salary: "eqwe",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee8ce481f6667dc0f382d"),
    companyLogo: "companyLogo-1703864526688.jpeg",
    companyName: "3123",
    positionName: "12312",
    city: "3123",
    createTime: "2023年12月29日 23:42",
    salary: "123",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658ee8f6481f6667dc0f3830"),
    companyLogo: "companyLogo-1703864566020.png",
    companyName: "312312",
    positionName: "312312",
    city: "3123",
    createTime: "2023年12月29日 23:42",
    salary: "123123",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658eea08d2829f7c5e881c22"),
    companyLogo: "companyLogo-1704290733845.png",
    companyName: "eqwe",
    positionName: "qeqwe",
    city: "qweqwe",
    createTime: "2023年12月29日 23:47",
    salary: "qeqwe",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658eeaf2a694386a2b70ee5e"),
    companyLogo: "companyLogo-1703865074461.jpeg",
    companyName: "qweqw",
    positionName: "eqweq",
    city: "eqeqw",
    createTime: "2023年12月29日 23:51",
    salary: "eqweq",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658eeb3fa694386a2b70ee64"),
    companyLogo: "companyLogo-1704290733845.png",
    companyName: "eqwe",
    positionName: "qweqwe",
    city: "qeqw",
    createTime: "2023年12月29日 23:52",
    salary: "eeqw",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("658eec1aa694386a2b70ee6e"),
    companyLogo: "companyLogo-1704290722208.jpeg",
    companyName: "eqwe",
    positionName: "qweqwe",
    city: "wqe",
    createTime: "2023年12月29日 23:56",
    salary: "qeqwe",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("659564d30f2a004176134246"),
    companyLogo: "companyLogo-1704290722208.jpeg",
    companyName: "dde",
    positionName: "dwedwe",
    city: "svfdv",
    createTime: "2024年01月03日 21:44",
    salary: "re3",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("6596c403f85b20e859652fe4"),
    companyLogo: "companyLogo-1704379395254.png",
    companyName: "eqwx",
    positionName: "casc",
    city: "vw",
    createTime: "2024年01月04日 22:43",
    salary: "31",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("6596c4ac99580d54ed81ed55"),
    companyLogo: "companyLogo-1704379564062.jpeg",
    companyName: "sqw",
    positionName: "2312",
    city: "fsdd",
    createTime: "2024年01月04日 22:46",
    salary: "32",
    __v: NumberInt("0")
} ]);
db.getCollection("positions").insert([ {
    _id: ObjectId("6596c4d21f75c3f5b3faf960"),
    companyLogo: "companyLogo-1704379602759.png",
    companyName: "312",
    positionName: "eqwe",
    city: "231",
    createTime: "2024年01月04日 22:46",
    salary: "23",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6586bc03164312fbf2145fc8"),
    username: "admin14",
    password: "$2b$10$6fBEfQFkPJIpV3yLKAlSEuolf8doQFmgbkpWyTYy8iU56QetJtfWO",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6586bc30164312fbf2145fcf"),
    username: "admin15",
    password: "$2b$10$8ejy51zCiHAJJnyzyT/ckumy12iZKQGkJbkH/SH/atPTqNTgRX8g6",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658825c85c6105d6568b0ee4"),
    username: "admin16",
    password: "$2b$10$o33OrNzs9xoRQPRg4aIbAuQQ965xCwe11CRTI442JKDHazVRa/Exu",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658837885c6105d6568b0f0b"),
    username: "admin17",
    password: "$2b$10$gs.Vnbo9oC.32mfrSQvYDusFlYcko4KrEIjOpGI33Lw6UHl4dsHjm",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1c6c00c4b12b210cfc32"),
    username: "admin18",
    password: "$2b$10$Ow.iMYzt75dk5bgfVpWUIOnzOX6ouw5R4MDPAico1i57utgg9hrcO",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1ca800c4b12b210cfc39"),
    username: "admin19",
    password: "$2b$10$IF8//kZdVIWpjRYO9pP6/uebnq/em.pNMMN2M8CQCWWYO/Fp.frJS",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1ce100c4b12b210cfc43"),
    username: "admin20",
    password: "$2b$10$6bLIlz3Df8Lk2u2dalzpveShmSPKdQNiOVH.YfB3hH39Urvr/fAtm",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1d3c00c4b12b210cfc4a"),
    username: "admin21",
    password: "$2b$10$xKHRhuZvXQdDVETSZjW64eAdI/t.T.Pua3.AwPgcGR0obIsubN9YK",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1dd000c4b12b210cfc53"),
    username: "admin22",
    password: "$2b$10$96YL/Y1hgvvxOVVzuhCUqeMIcAU812gO0RMCa0VHSyDRO52MZ76aG",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658c1f9c00c4b12b210cfc5d"),
    username: "admin23",
    password: "$2b$10$WUyLjLFr1j4dd3Q5jKDy7umNE/MUlPAysTN.S6DspqSEcoXzMTBLS",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658ee8c0481f6667dc0f3829"),
    username: "admin24",
    password: "$2b$10$8GK30T/s0HS2keE1PDbM5Omdr/cTDf8a/sBNbzxZ3NHzqoSzpDiQm",
    __v: NumberInt("0")
} ]);
