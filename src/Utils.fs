namespace ButtonSmash

open System

module Utils = 
    let getRandomInteger(minValue: int) (maxValue: int): int =
        let random = Random()
        random.Next (minValue, maxValue)
        
    // not very functional-y 
    let getRandomItemFromArray (array: 'a[]): 'a = 
        let index = getRandomInteger 0 array.Length
        Array.get array index

