function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce(
        (sum, car) => sum + car.mileage
    , 0)
    const highestMileageCar = cars.reduce(
      (highest, car) => (car.mileage > highest.mileage ? car : highest)
    , cars[0])
    const lowestMileageCar = cars.reduce(
      (lowest, car) => (car.mileage < lowest.mileage ? car : lowest)
    , cars[0])
  
    return {
        averageMileage: parseFloat((totalMileage / cars.length).toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}