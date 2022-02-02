// Решите следующие задачи с помощью циклов
// 1) Вывод чисел от 25 до 0 (порядок уменьшения)
    // for(let i=25;i>=0;i--){
    //     console.log(i);
    // }
// 2) Вывод чисел от 10 до 50, которые кратны 5
    // for(let i=10;i<=50;i++){
    //     if(i%5===0){
    //         console.log(i);
    //     }
    // }
// 3)  Найти сумму чисел в пределах от 1 до 100.
// let sum = 0;
//     for(let i=1;i<=100;i++){
//         sum=sum+i;
//     }
// console.log(sum);
// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
    // for(let i = 101;i>=100;i++){
    //     let qestion = +prompt("каков будет ответ примера (2 + 2 * 2) ?");
    //     if(qestion === 6){
    //         alert("ну наконец-то!");
    //         break;
    //     }
    // }
// --------------------------------------------------------------------------
    // const student = {
    //     firstName: "Kirill",
    //     lastName: "Petrov",
    //     weight: 85,
    // }
    
    // function greet (person) {
    //     return "Hello " + person.firstName + ' ' + person.lastName
    // }
    // -------------------------------------------------------------------------

    function Car(manufacturer, model, color, realaseYer, fuelConsumption, volume){
        this.drive = function() {
            return "car drive";
        };
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.realaseYer = realaseYer;
        this.fuelConsumption = fuelConsumption;
        this.volume = volume;

    }

    const tesla = new Car("Tesla","pickup","black",2019,5,50);
    const audi = Car("Tesla","pickup","black",2019,5,50);
    
