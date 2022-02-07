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

    // function Car(manufacturer, model, color, realaseYer, fuelConsumption, volume){
    //     this.drive = function() {
    //         return "car drive";
    //     };
    //     this.manufacturer = manufacturer;
    //     this.model = model;
    //     this.color = color;
    //     this.realaseYer = realaseYer;
    //     this.fuelConsumption = fuelConsumption;
    //     this.volume = volume;
    // }

    // const tesla = new Car("Tesla","pickup","black",2019,5,50);
    // const audi = Car("Tesla","pickup","black",2019,5,50);
    
    // -------------------------------------------------------------------------
    // const obj = {};
    
    // for (let i = 1; i <= 10; i++){
    //     for(let j = 1;j <= 10; j++){
    //         obj[`${i} * ${j} =`] = i*j;
    //     }
    // }
    // console.log(obj);
        // -----------------------------------------------------------------------------
        // const arr = [];
        // arr.push('Axe','Void','Spectre','Zeus');
        // let deleted = arr.pop();
        // console.log(deleted);
        
        // arr.splice(1,0,'Slardar','Sand King','Death Prophet');
        // console.log(arr);
        // arr.splice(2,2,"New Hero");
        // console.log(arr);
        // console.log(arr.slice(0,3));
        // // ---------------------------------------------------------------------------------

        // let arr = [1,2,3,4,5,6,7,8,9,10];
        // arr.forEach(callback);
        // function callback(num,index){
        //     fi(index%2===0){
        //         console.log(`${num*num} это возведенное в квадрат число ${num}`)
        //     }else{
        //         console.log(`${num*num*num} это возведенное в куб число ${num}`);
        //     }
        // }
        // ---------------------------------------------------------------------------------

        function Car(manufacturer, model, color, realaseYer,speed,maxSpeed, fuelConsumption, volume){
            this.drive = function() {
                return "car drive";
            };
            this.manufacturer = manufacturer;
            this.model = model;
            this.color = color;
            this.realaseYer = realaseYer;
            this.speed = speed;
            this.maxSpeed = maxSpeed;
            this.fuelConsumption = fuelConsumption;
            this.volume = volume;
        }

        function CarPrototype(){
            this.accelerate = function(){
                if(this.speed<300){
                    return this.speed = this.speed +10;
                }else{
                    return 300;
                }
            };
            this.brakes = function(){
                if(this.speed>0){
                    return this.speed = this.speed -10;
                }else{
                    return 0;
                }
            }
            this.stopping = function(){
                return 0;
            }
        }
        Car.prototype = new CarPrototype();
        
        const tesla = new Car("Tesla","pickup","black",2019,0,300,5,50);
