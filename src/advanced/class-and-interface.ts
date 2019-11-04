interface Alarm {
    alert();
}

interface LightableAlarm extends Alarm {
    lightOn();

    lightOff();
}

interface Light {
    lightOn();

    lightOff();
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }

    lightOn() {
        console.log('Car light on');
    }

    lightOff() {
        console.log('Car light off');
    }
}

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

interface SearchFunc {
    (source: string, subString: string): boolean;
}

/*
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}
*/

interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;