//TASK CONDITIONS:
//Write a hierarchy of classes to simulate vehicles:
//All vehicles should have speed and propulsion units (things which make them move) and a Accelerate method, which should update their speed by summing it with the acceleration of their propulsion units
//Each propulsion unit can produce acceleration (change in speed). There should be three types of propulsion units - wheels, propelling nozzles and propellers
//A wheel should have a radius and the acceleration it produces should be equal to its perimeter
//A propelling nozzle should have power and an afterburner switch. The acceleration the nozzle should produce as much acceleration as it has power, but if the afterburner is on it should produce double acceleration.
//A propeller should have a number of fins and a spin direction. The acceleration a propeller produces should by default be equal to the number of fins it has. The spin direction should be clockwise and counter-clockwise. If the spin direction is counter-clockwise, the acceleration the propeller produces should be negative, if the spin direction is clockwise, the acceleration should be positive.
//There should be land, air and water vehicles. Land vehicles should have 4 wheels, air vehicles should have 1 propelling nozzles and water vehicles should have a customizable number of propellers (passed in the constructor). 
//Air vehicles should have the ability to switch on/off their afterburners.
//Water vehicles should have the ability to change the spin direction of their propellers.
//Implement one additional amphibious vehicle. It should both have a propeller (so it can move on water) and wheels (so it can move on land). The amphibious vehicle should be able to switch between land and water mode and it's speed property and Accelerate method should respectively depend on its wheels in the first case and on its propeller in the second case


(function () {
    'use strict';

    var vehicles = (function () {

        Function.prototype.inherits = function (parent) {
            this.prototype = new parent();
            this.prototype.constructor = parent;
        }

        Function.prototype.extends = function (parent) {
            for (var i = 1; i < arguments.length; i += 1) {
                var name = arguments[i];
                this.prototype[name] = parent.prototype[name];
            }
            return this;
        }

        var AfterburnerState = {
            "ON": 1,
            "OFF": 2
        };

        var RotationDirection = {
            "CLOCKWISE": 1,
            "COUNTERCLOCKWISE": 2
        };

        var AmphibianMode = {
            "LAND": 1,
            "WATER": 2
        };

        function PropulsionUnit() {
        }

        function Wheel(radius) {
            this.radius = radius;
        }

        Wheel.inherits(PropulsionUnit);

        Wheel.prototype.accelerate = function () {
            return 2 * Math.PI * this.radius;
        }

        function PropellingNozzle(power, afterburnSwitch) {
            this.power = power;
            this.afterburnSwitch = afterburnSwitch;
        }

        PropellingNozzle.inherits(PropulsionUnit);

        PropellingNozzle.prototype.accelerate = function () {
            if (this.afterburnSwitch === AfterburnerState.OFF) {
                return this.power;
            }
            else {
                return this.power * 2;
            }
        }

        function Propeller(fins, spinDirection) {
            this.fins = fins;
            this.spinDirection = spinDirection;
        }

        Propeller.inherits(PropulsionUnit);

        Propeller.prototype.accelerate = function () {
            if (this.spinDirection == RotationDirection.CLOCKWISE) {
                return this.fins;
            }
            else {
                return -this.fins;
            }
        }

        function Vehicle(speed, propulsionUnits) {
            this.speed = speed;
            this.propulsionUnits = propulsionUnits;
        }

        Vehicle.prototype.accelerate = function () {
            for (var i = 0, len = this.propulsionUnits.length ; i < len; i++) {
                this.speed = this.propulsionUnits[i].accelerate();
            }
        }

        function LandVehicle(speed, wheels) {
            Vehicle.apply(this, arguments);
        }

        LandVehicle.inherits(Vehicle);

        function AirVehicle(speed, propellingNozzles) {
            Vehicle.apply(this, arguments);
        }

        AirVehicle.inherits(Vehicle);

        AirVehicle.prototype.switchAfterburners = function (afterburnSwitch) {
            for (var i = 0, len = this.propulsionUnits.length ; i < len; i++) {
                if(this.propulsionUnits[i] instanceof PropellingNozzle) {
                    this.propulsionUnits[i].afterburnSwitch = afterburnSwitch;
                }
            }
        }

        function WaterVehicle(speed, propellers) {
            Vehicle.apply(this, arguments);
        }

        WaterVehicle.inherits(Vehicle);

        WaterVehicle.prototype.setPropellersSpinDirection = function (spinDirection) {
            for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
                if (this.propulsionUnits[i] instanceof Propeller) {
                    this.propulsionUnits[i].spinDirection = spinDirection;
                }
            }
        }

        function Amphibian(speed, propellers, wheels, mode) {

            var propulsionUnits = [];
            for (var i = 0; i < propellers.length; i++) {
                propulsionUnits.push(propellers[i]);
            }

            for (var j = 0; j < wheels.length; j++) {
                propulsionUnits.push(wheels[i]);
            }

            Vehicle.call(this, speed, propulsionUnits);
            this.mode = mode;
        }

        Amphibian.inherits(Vehicle);

        Amphibian.extends(WaterVehicle, "setPropellersSpinDirection");

        Amphibian.prototype.accelerate = function () {
            if (this.mode === AmphibianMode.LAND) {
                for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
                    if (this.propulsionUnits[i] instanceof Wheel) {
                        this.speed = this.propulsionUnits[i].accelerate();
                    }
                }
            }

            else {
                for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
                    if (this.propulsionUnits[i] instanceof Propeller) {
                        this.speed = this.propulsionUnits[i].accelerate();
                    }
                }
            }
        }

        return {
            AfterburnerState: AfterburnerState,
            RotationDirection: RotationDirection,
            AmphibianMode: AmphibianMode,
            PropellingNozzle: PropellingNozzle,
            Propeller: Propeller,
            LandVehicle: LandVehicle,
            AirVehicle: AirVehicle,
            WaterVehicle: WaterVehicle,
            Amphibian: Amphibian
        };
    })();
})();