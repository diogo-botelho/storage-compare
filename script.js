"use strict";

console.log("this works");
class Company {
    constructor(name,city,homepage) {
        this.name = name;
        this.city = city;
        this.homepage = homepage;
    }

    totalCost(time,volume) {

    }

    costPerMonth(volume) {

    }
}

class City {
    constructor(cityName,state) {
        this.cityName = cityName;
        this.state = state;
        this.companies = [];
    }

    addCompany(company) {
        this.companies.push(company);
    }
}

